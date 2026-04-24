import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
const DEFAULT_KEY_PATH = resolve(PROJECT_ROOT, 'service-account-key.json');

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

  console.log(`\n🔍 테넌트 정합성 감사 시작 (read-only)\n`);

  const [usersSnap, slugsSnap, cafesSnap, reservedSnap] = await Promise.all([
    db.collection('users').get(),
    db.collection('slugs').get(),
    db.collection('cafes').get(),
    db.collection('reservedSlugs').get(),
  ]);

  const users = new Map(usersSnap.docs.map((d) => [d.id, d.data() || {}]));
  const slugs = new Map(slugsSnap.docs.map((d) => [d.id, d.data() || {}]));
  const cafes = new Map(cafesSnap.docs.map((d) => [d.id, d.data() || {}]));
  const reserved = new Set(reservedSnap.docs.map((d) => d.id));

  console.log(`📦 컬렉션 크기 : users=${users.size}, slugs=${slugs.size}, cafes=${cafes.size}, reservedSlugs=${reserved.size}\n`);

  const issues = [];

  // 1) users.slug → slugs/{slug}.ownerUid 일관성
  for (const [uid, u] of users) {
    const s = u.slug;
    if (!s) {
      issues.push({ level: 'info', msg: `users/${uid} 에 slug 없음 (비활성 유저 가능)` });
      continue;
    }
    const slugDoc = slugs.get(s);
    if (!slugDoc) {
      issues.push({ level: 'error', msg: `users/${uid}.slug="${s}" 인데 slugs/${s} 문서 없음` });
      continue;
    }
    if (slugDoc.ownerUid !== uid) {
      issues.push({ level: 'error', msg: `users/${uid}.slug="${s}" vs slugs/${s}.ownerUid="${slugDoc.ownerUid}" 불일치` });
    }
  }

  // 2) slugs/{slug}.ownerUid → users/{uid}.slug 역참조
  for (const [s, sd] of slugs) {
    const owner = sd.ownerUid;
    if (!owner) {
      issues.push({ level: 'warn', msg: `slugs/${s} 에 ownerUid 없음` });
      continue;
    }
    const u = users.get(owner);
    if (!u) {
      issues.push({ level: 'error', msg: `slugs/${s}.ownerUid="${owner}" 인데 users/${owner} 없음` });
      continue;
    }
    if (u.slug !== s) {
      issues.push({ level: 'error', msg: `slugs/${s}.ownerUid="${owner}" 이지만 users/${owner}.slug="${u.slug}" 로 역참조 불일치` });
    }
  }

  // 3) slugs와 reservedSlugs 교집합 (충돌)
  for (const s of slugs.keys()) {
    if (reserved.has(s)) {
      issues.push({ level: 'error', msg: `slugs/${s} 와 reservedSlugs/${s} 동시 존재 (예약어 충돌)` });
    }
  }

  // 4) cafes/{uid} 존재 여부 (users.slug 있는 사용자 기준)
  for (const [uid, u] of users) {
    if (!u.slug) continue;
    if (!cafes.has(uid)) {
      issues.push({ level: 'warn', msg: `users/${uid}.slug="${u.slug}" 인데 cafes/${uid} 없음` });
    }
  }

  // 5) cafes.slug 와 users/{uid}.slug 대조
  for (const [uid, c] of cafes) {
    const u = users.get(uid);
    if (!u) {
      issues.push({ level: 'warn', msg: `cafes/${uid} 존재하나 users/${uid} 없음 (고아 문서)` });
      continue;
    }
    if (c.slug && u.slug && c.slug !== u.slug) {
      issues.push({ level: 'error', msg: `cafes/${uid}.slug="${c.slug}" vs users/${uid}.slug="${u.slug}" 불일치` });
    }
  }

  // 리포트
  const byLevel = { error: [], warn: [], info: [] };
  for (const i of issues) byLevel[i.level].push(i);

  for (const level of ['error', 'warn', 'info']) {
    if (byLevel[level].length === 0) continue;
    const icon = level === 'error' ? '❌' : level === 'warn' ? '⚠️ ' : 'ℹ️ ';
    console.log(`${icon} ${level.toUpperCase()} (${byLevel[level].length})`);
    for (const i of byLevel[level]) console.log(`   • ${i.msg}`);
    console.log('');
  }

  console.log('─────────────────────────────');
  console.log(`📊 감사 결과`);
  console.log(`   error : ${byLevel.error.length}`);
  console.log(`   warn  : ${byLevel.warn.length}`);
  console.log(`   info  : ${byLevel.info.length}`);
  console.log('─────────────────────────────\n');

  if (byLevel.error.length > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error('\n💥 치명적 오류:', err.message || err);
  process.exit(1);
});
