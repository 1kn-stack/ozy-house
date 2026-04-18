import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const DEFAULT_KEY_PATH = resolve(PROJECT_ROOT, 'service-account-key.json');

const RESERVED_SLUGS = [
  'admin', 'api', 'login', 'signup', 'logout', 'register', 'auth', 'oauth',
  'session', 'account', 'profile', 'about', 'help', 'contact', 'support',
  'terms', 'privacy', 'legal', 'dashboard', 'settings', 'onboarding',
  'welcome', 'home', 'static', 'assets', 'public', 'cdn', 'files', 'media', 'images',
  'app', 'web', 'www', 'mail', 'blog', 'news', 'search', 'explore',
];

function loadCredentials() {
  const envPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (envPath) {
    if (!existsSync(envPath)) {
      throw new Error(
        `GOOGLE_APPLICATION_CREDENTIALS 경로에 파일이 없습니다: ${envPath}`
      );
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
  const credentials = loadCredentials();

  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });

  const db = admin.firestore();
  const col = db.collection('reservedSlugs');

  console.log(`\n📦 총 ${RESERVED_SLUGS.length}개 예약어 처리 시작...\n`);

  let added = 0;
  let skipped = 0;
  const errors = [];

  for (const slug of RESERVED_SLUGS) {
    try {
      const ref = col.doc(slug);
      const snap = await ref.get();

      if (snap.exists) {
        console.log(`  ⏭️  skip    : ${slug}`);
        skipped++;
        continue;
      }

      await ref.set({
        slug,
        reason: 'system',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`  ✅ added   : ${slug}`);
      added++;
    } catch (err) {
      console.error(`  ❌ error   : ${slug} — ${err.message}`);
      errors.push({ slug, message: err.message });
    }
  }

  console.log('\n─────────────────────────────');
  console.log(`📊 결과 요약`);
  console.log(`   추가됨 : ${added}`);
  console.log(`   건너뜀 : ${skipped}`);
  console.log(`   실패   : ${errors.length}`);
  console.log('─────────────────────────────\n');

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('\n💥 치명적 오류:', err.message);
  process.exit(1);
});
