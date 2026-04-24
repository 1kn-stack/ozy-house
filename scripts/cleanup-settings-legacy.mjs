import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const DEFAULT_KEY_PATH = resolve(PROJECT_ROOT, 'service-account-key.json');

// index.html의 DEFAULT_SETTINGS 키와 동기 유지 필요 (index.html:688-695)
const ALLOWED_KEYS = new Set([
  'degasDays',
  'degasHideMenu',
  'degasHideDiary',
  'timezoneOffset',
  'cafeName',
  'cafeDesc',
]);

const APPLY = process.argv.includes('--apply');

function loadCredentials() {
  const envPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (envPath) {
    if (!existsSync(envPath)) {
      throw new Error(`GOOGLE_APPLICATION_CREDENTIALS 경로에 파일이 없습니다: ${envPath}`);
    }
    console.log(`🔑 환경변수로 키 로드: ${envPath}`);
    return JSON.parse(readFileSync(envPath, 'utf8'));
  }
  if (existsSync(DEFAULT_KEY_PATH)) {
    console.log(`🔑 기본 경로로 키 로드: ${DEFAULT_KEY_PATH}`);
    return JSON.parse(readFileSync(DEFAULT_KEY_PATH, 'utf8'));
  }
  throw new Error(
    `서비스 계정 키를 찾을 수 없습니다.\n` +
    `  방법 1) 프로젝트 루트에 service-account-key.json 배치\n` +
    `  방법 2) 환경변수 GOOGLE_APPLICATION_CREDENTIALS 에 키 경로 지정`
  );
}

async function main() {
  admin.initializeApp({ credential: admin.credential.cert(loadCredentials()) });
  const db = admin.firestore();
  const FV = admin.firestore.FieldValue;

  console.log(`\n${APPLY ? '🚀 실제 적용(--apply)' : '🧪 드라이런(기본). 실제 쓰기는 --apply 필요'} 모드\n`);

  const ref = db.collection('settings').doc('admin');
  const snap = await ref.get();

  if (!snap.exists) {
    console.log(`ℹ️  settings/admin 문서 없음 — 정리할 것 없음\n`);
    return;
  }

  const data = snap.data() || {};
  const keys = Object.keys(data);
  const legacy = keys.filter((k) => !ALLOWED_KEYS.has(k));

  console.log(`📦 settings/admin 필드 ${keys.length}개`);
  console.log(`   화이트리스트 : ${[...ALLOWED_KEYS].join(', ')}`);
  console.log(`   현재 필드    : ${keys.join(', ') || '(비어있음)'}`);
  console.log('');

  if (legacy.length === 0) {
    console.log(`✨ 레거시 필드 없음 — 정리할 것 없음\n`);
    return;
  }

  console.log(`⚠️  레거시 필드 ${legacy.length}개 발견:`);
  for (const k of legacy) {
    const v = data[k];
    const preview = typeof v === 'string' ? `"${v.length > 40 ? v.slice(0, 40) + '…' : v}"` : JSON.stringify(v);
    console.log(`   • ${k} = ${preview}`);
  }
  console.log('');

  if (!APPLY) {
    console.log(`ℹ️  실제 삭제하려면 --apply 플래그로 재실행:\n   npm run cleanup:settings-legacy -- --apply\n`);
    return;
  }

  console.log(`💾 필드 삭제 시작...`);
  const patch = {};
  for (const k of legacy) patch[k] = FV.delete();
  await ref.update(patch);
  console.log(`  ✅ ${legacy.length}개 필드 삭제 완료\n`);
}

main().catch((err) => {
  console.error('\n💥 치명적 오류:', err.message || err);
  process.exit(1);
});
