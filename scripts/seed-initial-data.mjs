import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const DEFAULT_KEY_PATH = resolve(PROJECT_ROOT, 'service-account-key.json');

const TARGET_EMAIL = 'okgo.levelup@gmail.com';
const TARGET_SLUG = 'ozy';
const CAFE_NAME = 'OZY HOUSE';

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

async function upsertDoc(ref, data, label) {
  const snap = await ref.get();
  if (snap.exists) {
    console.log(`  ⏭️  skip    : ${label}`);
    return 'skip';
  }
  await ref.set(data);
  console.log(`  ✅ created : ${label}`);
  return 'create';
}

async function main() {
  admin.initializeApp({
    credential: admin.credential.cert(loadCredentials()),
  });

  const db = admin.firestore();
  const FV = admin.firestore.FieldValue;

  // 1) UID 조회
  let user;
  try {
    user = await admin.auth().getUserByEmail(TARGET_EMAIL);
  } catch (err) {
    console.error(`\n❌ ${TARGET_EMAIL} 유저를 찾을 수 없습니다.`);
    console.error('   먼저 배포된 앱에서 Google 로그인을 1회 수행해주세요.');
    console.error(`   상세: ${err.message}\n`);
    process.exit(1);
  }
  const uid = user.uid;
  console.log(`\n🧍 UID 확인: ${uid} (${TARGET_EMAIL})\n`);

  // 2) reservedSlugs
  console.log('📦 예약어 확인...');
  let reservedAdded = 0;
  let reservedSkipped = 0;
  for (const slug of RESERVED_SLUGS) {
    const result = await upsertDoc(
      db.collection('reservedSlugs').doc(slug),
      { slug, reason: 'system', createdAt: FV.serverTimestamp() },
      `reservedSlugs/${slug}`
    );
    if (result === 'create') reservedAdded++;
    else reservedSkipped++;
  }

  // 3) slugs/ozy
  console.log('\n🔗 slug 예약...');
  await upsertDoc(
    db.collection('slugs').doc(TARGET_SLUG),
    { ownerId: uid, createdAt: FV.serverTimestamp() },
    `slugs/${TARGET_SLUG}`
  );

  // 4) users/{uid}
  console.log('\n🧍 유저 프로필...');
  await upsertDoc(
    db.collection('users').doc(uid),
    {
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      slug: TARGET_SLUG,
      createdAt: FV.serverTimestamp(),
    },
    `users/${uid}`
  );

  // 5) cafes/{uid}
  console.log('\n☕ 카페 문서...');
  await upsertDoc(
    db.collection('cafes').doc(uid),
    {
      name: CAFE_NAME,
      desc: '',
      slug: TARGET_SLUG,
      createdAt: FV.serverTimestamp(),
    },
    `cafes/${uid}`
  );

  console.log('\n─────────────────────────────');
  console.log(`📊 결과 요약`);
  console.log(`   reservedSlugs 추가 : ${reservedAdded}`);
  console.log(`   reservedSlugs 건너뜀: ${reservedSkipped}`);
  console.log(`   slugs/${TARGET_SLUG}, users/{uid}, cafes/{uid} 처리 완료`);
  console.log('─────────────────────────────\n');
}

main().catch((err) => {
  console.error('\n💥 치명적 오류:', err.message || err);
  process.exit(1);
});
