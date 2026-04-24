import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const DEFAULT_KEY_PATH = resolve(PROJECT_ROOT, 'service-account-key.json');

// index.html의 DEFAULT_PUBLIC_FIELDS와 동기 유지 필요 (index.html:260-263)
const DEFAULT_PUBLIC_FIELDS = {
  roastDate: true,
  degasDays: true,
  rating: true,
  myNote: false,
  recipe: false,
  startDate: false,
  diary: false,
};
const EXPECTED_KEYS = Object.keys(DEFAULT_PUBLIC_FIELDS);

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

  console.log(`\n${APPLY ? '🚀 실제 적용(--apply)' : '🧪 드라이런(기본). 실제 쓰기는 --apply 필요'} 모드\n`);

  const snap = await db.collection('slugs').get();
  console.log(`📦 slugs 문서 ${snap.size}개 조회\n`);

  let missing = 0;
  let partial = 0;
  let complete = 0;
  let updated = 0;
  const plans = [];

  for (const doc of snap.docs) {
    const data = doc.data() || {};
    const pf = data.publicFields;

    if (!pf || typeof pf !== 'object') {
      missing++;
      plans.push({ slug: doc.id, kind: 'missing', toMerge: DEFAULT_PUBLIC_FIELDS });
      console.log(`  ❗ missing  : slugs/${doc.id} → publicFields 없음`);
      continue;
    }
    // 누락된 키만 보강 (기존 사용자 설정 보존)
    const toMerge = {};
    for (const key of EXPECTED_KEYS) {
      if (typeof pf[key] !== 'boolean') toMerge[key] = DEFAULT_PUBLIC_FIELDS[key];
    }
    if (Object.keys(toMerge).length > 0) {
      partial++;
      plans.push({ slug: doc.id, kind: 'partial', toMerge });
      console.log(`  ⚠️  partial  : slugs/${doc.id} → 누락 키 ${Object.keys(toMerge).join(', ')}`);
    } else {
      complete++;
    }
  }

  if (APPLY && plans.length > 0) {
    console.log(`\n💾 쓰기 시작...`);
    for (const p of plans) {
      await db.collection('slugs').doc(p.slug).set(
        { publicFields: p.toMerge },
        { mergeFields: Object.keys(p.toMerge).map((k) => `publicFields.${k}`) }
      );
      updated++;
      console.log(`  ✅ updated : slugs/${p.slug}`);
    }
  }

  console.log('\n─────────────────────────────');
  console.log(`📊 결과 요약`);
  console.log(`   complete : ${complete}`);
  console.log(`   partial  : ${partial}`);
  console.log(`   missing  : ${missing}`);
  console.log(`   updated  : ${APPLY ? updated : '(dry-run)'}`);
  console.log('─────────────────────────────\n');

  if (!APPLY && plans.length > 0) {
    console.log(`ℹ️  실제 반영하려면 --apply 플래그로 재실행:\n   npm run migrate:public-fields -- --apply\n`);
  }
}

main().catch((err) => {
  console.error('\n💥 치명적 오류:', err.message || err);
  process.exit(1);
});
