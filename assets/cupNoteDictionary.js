/**
 * cupNoteDictionary.js
 *
 * OZY HOUSE — 컵노트 사전 모듈 (Phase 3, 3중 하이브리드)
 *
 * 컵노트 → SCA 플레이버 휠 카테고리 → 색상(hex) + 이모지 매핑
 * - 25개 카테고리 (다크/라이트 모드 분리)
 * - 약 220+ 한국어/영어 단어 사전 (옥지님 카페 데이터 포함)
 * - 단어별 이모지 + 카테고리 fallback 이모지
 * - 기존 23개 커스텀 SVG 보존 (Phase 1~2 디자인 자산)
 * - mouthfeel 가중치 0.5
 *
 * 참고 자료:
 * - SCA Coffee Taster's Flavor Wheel
 * - 시티스트릿츠 Flavor Index
 * - Counter Culture Taster's Flavor Wheel (리이케 한국어 번역, 서필훈 감수)
 *
 * 색상 톤은 OZY HOUSE 디자인 시스템에 맞춰 자체 재해석.
 * savory hex는 테라코타 액센트(#b84830) 충돌 회피를 위해 #983828로 조정.
 *
 * Phase 2-A/2-B/2-C → Phase 3 (모듈 작성)
 *
 * 사용 방법:
 *   ES Module:
 *     import { getNoteCategory, getNoteEmoji, getNoteColor } from './cupNoteDictionary.js';
 *   Legacy (window):
 *     window.CupNoteDict.getNoteCategory(note);
 *     window.CupNoteDict.resolveIconOrNull(note, size);  // SVG 우선 체인
 */

// ============================================================================
// CATEGORY_COLORS — 25개 카테고리 hex (Phase 3 문서 + savory 조정)
// ============================================================================
export const CATEGORY_COLORS = {
  'fruity-citrus':       { dark: '#e89548', light: '#c87530' },
  'fruity-stone':        { dark: '#e0a574', light: '#b8754a' },
  'fruity-berry-red':    { dark: '#c84858', light: '#a83040' },
  'fruity-berry-dark':   { dark: '#3d3878', light: '#2d285c' },
  'fruity-tropical':     { dark: '#f29a4a', light: '#c87830' },
  'fruity-grape':        { dark: '#7a4a6e', light: '#5a3050' },
  'fruity-grape-green':  { dark: '#a8b074', light: '#788858' },
  'other-fruit':         { dark: '#b85838', light: '#98381c' },
  'floral':              { dark: '#c8859a', light: '#a85a78' },
  'floral-bergamot':     { dark: '#a890b0', light: '#7a6090' },
  'herb':                { dark: '#88a050', light: '#688038' },
  'tea':                 { dark: '#9a7458', light: '#785438' },
  'nutty-cocoa-dark':    { dark: '#4a3328', light: '#382014' },
  'nutty-cocoa-light':   { dark: '#8a5a3c', light: '#684028' },
  'roasted':             { dark: '#58382a', light: '#3c2418' },
  'sweet-caramel':       { dark: '#88481a', light: '#683008' },
  'sweet-honey':         { dark: '#d4a85a', light: '#a87830' },
  'sweet-vanilla':       { dark: '#e6d5a8', light: '#b8a878' },
  'sour-fermented':      { dark: '#b8a040', light: '#887020' },
  'spices':              { dark: '#a85838', light: '#883820' },
  'savory':              { dark: '#983828', light: '#782818' }, // OZY 조정 (테라코타 회피)
  'dried-fruit':         { dark: '#785038', light: '#583820' },
  'green-vegetative':    { dark: '#6a7a4a', light: '#4a5830' },
  'mouthfeel':           { dark: '#8a8275', light: '#6a6258' },
  'other':               { dark: '#7a6e5e', light: '#5a4e3e' },
};

// ============================================================================
// CATEGORY_EMOJI — 25개 카테고리 fallback 이모지
// ============================================================================
export const CATEGORY_EMOJI = {
  'floral':              '🌸',
  'floral-bergamot':     '🍵',
  'herb':                '🌿',
  'tea':                 '🍵',
  'green-vegetative':    '🌱',
  'savory':              '🍅',
  'spices':              '🌶️',
  'roasted':             '🍞',
  'nutty-cocoa-light':   '🥜',
  'nutty-cocoa-dark':    '🍫',
  'sweet-vanilla':       '🤍',
  'sweet-honey':         '🍯',
  'sweet-caramel':       '🍮',
  'sour-fermented':      '🍷',
  'fruity-citrus':       '🍊',
  'other-fruit':         '🍎',
  'fruity-grape-green':  '🍐',
  'fruity-grape':        '🍇',
  'fruity-tropical':     '🥭',
  'fruity-stone':        '🍑',
  'fruity-berry-red':    '🍓',
  'fruity-berry-dark':   '🫐',
  'dried-fruit':         '🌰',
  'mouthfeel':           '💧',
  'other':               '☕',
};

// ============================================================================
// CATEGORY_WEIGHTS — 메쉬 그라디언트 가중치 (Phase 4 용)
// ============================================================================
export const CATEGORY_WEIGHTS = {
  'mouthfeel': 0.5,
  // 그 외는 기본값 1.0 (getCategoryWeight에서 fallback)
};

// ============================================================================
// CUP_NOTE_DICT — 220+ 단어 통합 사전
//   { canonical: { category, emoji, aliases: [string...] } }
// ============================================================================
export const CUP_NOTE_DICT = {
  // ---- floral (15: 13 spec + 꽃다발/꽃사탕 ozy-cafe) ----
  '하비스커스':   { category: 'floral', emoji: '🌺', aliases: ['hibiscus', '히비스커스'] },
  '로즈':         { category: 'floral', emoji: '🌹', aliases: ['rose', 'rosewater', '로즈워터', '장미'] },
  '라벤더':       { category: 'floral', emoji: '💜', aliases: ['lavender'] },
  '목련':         { category: 'floral', emoji: '🤍', aliases: ['magnolia', '백목련', '자목련'] },
  '하니서클':     { category: 'floral', emoji: '🌼', aliases: ['honeysuckle', '인동초'] },
  '자스민':       { category: 'floral', emoji: '🌸', aliases: ['jasmine', '재스민', '제스민', '쟈스민', '제즈민'] },
  '오렌지꽃':     { category: 'floral', emoji: '🌼', aliases: ['orange blossom', '오렌지 블라썸', '오렌지블라썸'] },
  '엘더플라워':   { category: 'floral', emoji: '🤍', aliases: ['elderflower'] },
  '라일락':       { category: 'floral', emoji: '💜', aliases: ['lilac'] },
  '제비꽃':       { category: 'floral', emoji: '💜', aliases: ['violet'] },
  '작약':         { category: 'floral', emoji: '🌸', aliases: ['peony'] },
  '국화':         { category: 'floral', emoji: '🌼', aliases: ['chrysanthemum'] },
  '향수':         { category: 'floral', emoji: '💐', aliases: ['perfume'] },
  '꽃다발':       { category: 'floral', emoji: '💐', aliases: ['bouquet'] },
  '꽃사탕':       { category: 'floral', emoji: '🍬', aliases: ['flower candy'] },

  // ---- floral-bergamot (3) ----
  '베르가못':     { category: 'floral-bergamot', emoji: '🍵', aliases: ['bergamot'] },
  '얼그레이':     { category: 'floral-bergamot', emoji: '🫖', aliases: ['earl grey', 'earlgrey'] },
  '아카시아':     { category: 'floral-bergamot', emoji: '🌼', aliases: ['acacia'] },

  // ---- herb (21: 토마토는 savory로 이동) ----
  '레몬그라스':   { category: 'herb', emoji: '🌾', aliases: ['lemongrass'] },
  '민트':         { category: 'herb', emoji: '🌿', aliases: ['mint'] },
  '딜':           { category: 'herb', emoji: '🌿', aliases: ['dill'] },
  '세이지':       { category: 'herb', emoji: '🌿', aliases: ['sage'] },
  '스위트 피':    { category: 'herb', emoji: '🟢', aliases: ['sweet pea', '스위트피'] },
  '루바브':       { category: 'herb', emoji: '🥬', aliases: ['rhubarb'] },
  '당근':         { category: 'herb', emoji: '🥕', aliases: ['carrot'] },
  '버섯':         { category: 'herb', emoji: '🍄', aliases: ['mushroom'] },
  '호박':         { category: 'herb', emoji: '🎃', aliases: ['squash', 'pumpkin'] },
  '피망':         { category: 'herb', emoji: '🫑', aliases: ['green pepper', '그린 페퍼'] },
  '올리브':       { category: 'herb', emoji: '🫒', aliases: ['olive'] },
  '초록 잎':      { category: 'herb', emoji: '🌿', aliases: ['leafy greens', '초록잎'] },
  '풀 향':        { category: 'herb', emoji: '🌱', aliases: ['grassy', '풀향'] },
  '애플민트':     { category: 'herb', emoji: '🌿', aliases: ['apple mint'] },
  '스피아민트':   { category: 'herb', emoji: '🌿', aliases: ['spearmint'] },
  '바질':         { category: 'herb', emoji: '🌿', aliases: ['basil'] },
  '타임':         { category: 'herb', emoji: '🌿', aliases: ['thyme'] },
  '로즈마리':     { category: 'herb', emoji: '🌿', aliases: ['rosemary'] },
  '페퍼민트':     { category: 'herb', emoji: '🌿', aliases: ['peppermint'] },
  '유칼립투스':   { category: 'herb', emoji: '🌿', aliases: ['eucalyptus'] },
  '오레가노':     { category: 'herb', emoji: '🌿', aliases: ['oregano'] },

  // ---- tea (11) ----
  '홉스':         { category: 'tea', emoji: '🍺', aliases: ['hops'] },
  '녹차':         { category: 'tea', emoji: '🍵', aliases: ['green tea'] },
  '홍차':         { category: 'tea', emoji: '🫖', aliases: ['black tea'] },
  '백차':         { category: 'tea', emoji: '🍵', aliases: ['white tea'] },
  '말차':         { category: 'tea', emoji: '🍵', aliases: ['matcha'] },
  '카모마일':     { category: 'tea', emoji: '🌼', aliases: ['chamomile'] },
  '로즈힙':       { category: 'tea', emoji: '🌹', aliases: ['rosehip'] },
  '우롱차':       { category: 'tea', emoji: '🍵', aliases: ['oolong', '우롱'] },
  '루이보스':     { category: 'tea', emoji: '🍵', aliases: ['rooibos'] },
  '호지차':       { category: 'tea', emoji: '🍵', aliases: ['hojicha'] },
  '다즐링':       { category: 'tea', emoji: '🍵', aliases: ['darjeeling'] },

  // ---- green-vegetative (8) ----
  '흙':           { category: 'green-vegetative', emoji: '🟫', aliases: ['soil', 'earth'] },
  '나무':         { category: 'green-vegetative', emoji: '🪵', aliases: ['wood'] },
  '삼나무':       { category: 'green-vegetative', emoji: '🌲', aliases: ['cedar'] },
  '담배':         { category: 'green-vegetative', emoji: '🚬', aliases: ['tobacco'] },
  '밀짚':         { category: 'green-vegetative', emoji: '🌾', aliases: ['straw'] },
  '잔디':         { category: 'green-vegetative', emoji: '🌱', aliases: ['grass'] },
  '채소':         { category: 'green-vegetative', emoji: '🥬', aliases: ['vegetable'] },
  '식물':         { category: 'green-vegetative', emoji: '🌿', aliases: ['plant'] },

  // ---- savory (6) ----
  '토마토':       { category: 'savory', emoji: '🍅', aliases: ['tomato'] },
  '말린 토마토':  { category: 'savory', emoji: '🍅', aliases: ['sundried tomato', '말린토마토', '선드라이드 토마토'] },
  '간장':         { category: 'savory', emoji: '🥢', aliases: ['soy sauce'] },
  '고기 같은':    { category: 'savory', emoji: '🥩', aliases: ['meat-like', 'meaty', '고기같은'] },
  '가죽':         { category: 'savory', emoji: '🟫', aliases: ['leathery', 'leather'] },
  '발효된':       { category: 'savory', emoji: '🫙', aliases: ['fermented'] },

  // ---- spices (14) ----
  '정향':         { category: 'spices', emoji: '🌰', aliases: ['clove'] },
  '감초':         { category: 'spices', emoji: '🌿', aliases: ['licorice', 'anise', '아니스'] },
  '커민':         { category: 'spices', emoji: '🌶️', aliases: ['cumin'] },
  '넛맥':         { category: 'spices', emoji: '🌰', aliases: ['nutmeg'] },
  '생강':         { category: 'spices', emoji: '🫚', aliases: ['ginger'] },
  '고수':         { category: 'spices', emoji: '🌿', aliases: ['coriander'] },
  '계피':         { category: 'spices', emoji: '🌰', aliases: ['cinnamon'] },
  '백후추':       { category: 'spices', emoji: '⚪', aliases: ['white pepper'] },
  '흑후추':       { category: 'spices', emoji: '⚫', aliases: ['black pepper'] },
  '후추':         { category: 'spices', emoji: '🌶️', aliases: ['pepper'] },
  '카다멈':       { category: 'spices', emoji: '🌿', aliases: ['cardamom'] },
  '펜넬시드':     { category: 'spices', emoji: '🌱', aliases: ['fennel seed', '펜넬'] },
  '팔각':         { category: 'spices', emoji: '⭐', aliases: ['star anise', '스타아니스', '스타 아니스'] },
  '시나무':       { category: 'spices', emoji: '🌶️', aliases: ['sichuan pepper', '산초'] },

  // ---- roasted (23) ----
  '카본':         { category: 'roasted', emoji: '⚫', aliases: ['carbon'] },
  '스모키':       { category: 'roasted', emoji: '💨', aliases: ['smoky'] },
  '졸인 설탕':    { category: 'roasted', emoji: '🍯', aliases: ['burnt sugar', '졸인설탕'] },
  '토스트':       { category: 'roasted', emoji: '🍞', aliases: ['toast'] },
  '구운 빵':      { category: 'roasted', emoji: '🥖', aliases: ['fresh bread', 'baked bread', '구운빵'] },
  '맥아':         { category: 'roasted', emoji: '🌾', aliases: ['malt'] },
  '보리':         { category: 'roasted', emoji: '🌾', aliases: ['barley'] },
  '밀':           { category: 'roasted', emoji: '🌾', aliases: ['wheat'] },
  '호밀':         { category: 'roasted', emoji: '🌾', aliases: ['rye'] },
  '통밀 크래커':  { category: 'roasted', emoji: '🍪', aliases: ['graham cracker', '통밀크래커'] },
  '구운 귀리':    { category: 'roasted', emoji: '🌾', aliases: ['toasted oats', '구운귀리'] },
  '페이스트리':   { category: 'roasted', emoji: '🥐', aliases: ['pastry'] },
  '팝콘':         { category: 'roasted', emoji: '🍿', aliases: ['popcorn'] },
  '오트밀':       { category: 'roasted', emoji: '🥣', aliases: ['oatmeal'] },
  '식빵':         { category: 'roasted', emoji: '🍞', aliases: ['white bread'] },
  '콘플레이크':   { category: 'roasted', emoji: '🥣', aliases: ['cornflakes'] },
  '시리얼':       { category: 'roasted', emoji: '🥣', aliases: ['cereal'] },
  '비스킷':       { category: 'roasted', emoji: '🍪', aliases: ['biscuit'] },
  '통밀빵':       { category: 'roasted', emoji: '🍞', aliases: ['whole wheat bread', '통밀 빵'] },
  '호밀빵':       { category: 'roasted', emoji: '🍞', aliases: ['rye bread', '호밀 빵'] },
  '시나몬롤':     { category: 'roasted', emoji: '🥐', aliases: ['cinnamon roll', '시나몬 롤'] },
  '파이':         { category: 'roasted', emoji: '🥧', aliases: ['pie'] },
  '쿠키':         { category: 'roasted', emoji: '🍪', aliases: ['cookie'] },

  // ---- nutty-cocoa-light (15: 14 spec + 견과류 ozy-cafe) ----
  '아몬드':       { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['almond'] },
  '헤이즐넛':     { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['hazelnut'] },
  '피칸':         { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['pecan'] },
  '캐슈':         { category: 'nutty-cocoa-light', emoji: '🥜', aliases: ['cashew'] },
  '땅콩':         { category: 'nutty-cocoa-light', emoji: '🥜', aliases: ['peanut'] },
  '호두':         { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['walnut'] },
  '밀크 초콜릿':  { category: 'nutty-cocoa-light', emoji: '🍫', aliases: ['milk chocolate', '밀크초콜릿', '초콜릿', 'chocolate', '초콜렛'] },
  '마지팬':       { category: 'nutty-cocoa-light', emoji: '🥮', aliases: ['marzipan'] },
  '마카다미아':   { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['macadamia'] },
  '잣':           { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['pine nut', 'pinenut'] },
  '피스타치오':   { category: 'nutty-cocoa-light', emoji: '🥜', aliases: ['pistachio'] },
  '밤':           { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['chestnut'] },
  '땅콩 버터':    { category: 'nutty-cocoa-light', emoji: '🥜', aliases: ['peanut butter', '땅콩버터'] },
  '군밤':         { category: 'nutty-cocoa-light', emoji: '🌰', aliases: ['roasted chestnut'] },
  '견과류':       { category: 'nutty-cocoa-light', emoji: '🥜', aliases: ['nuts'] },

  // ---- nutty-cocoa-dark (5) ----
  '베이커스 초콜릿': { category: 'nutty-cocoa-dark', emoji: '🍫', aliases: ["baker's chocolate", 'bakers chocolate', '베이커스초콜릿'] },
  '다크 초콜릿': { category: 'nutty-cocoa-dark', emoji: '🍫', aliases: ['dark chocolate', '다크초콜릿'] },
  '비터스위트 초콜릿': { category: 'nutty-cocoa-dark', emoji: '🍫', aliases: ['bittersweet chocolate', '비터스위트초콜릿'] },
  '코코아':       { category: 'nutty-cocoa-dark', emoji: '🍫', aliases: ['cocoa'] },
  '카카오닙스':   { category: 'nutty-cocoa-dark', emoji: '🍫', aliases: ['cacao nibs', '카카오 닙스'] },

  // ---- sweet-vanilla (5) ----
  '바닐라':       { category: 'sweet-vanilla', emoji: '🍦', aliases: ['vanilla'] },
  '화이트 초콜릿': { category: 'sweet-vanilla', emoji: '🤍', aliases: ['white chocolate', '화이트초콜릿'] },
  '마시멜로우':   { category: 'sweet-vanilla', emoji: '🤍', aliases: ['marshmallow', '마시멜로'] },
  '솜사탕':       { category: 'sweet-vanilla', emoji: '🍭', aliases: ['cotton candy'] },
  '사탕수수':     { category: 'sweet-vanilla', emoji: '🎋', aliases: ['sugar cane'] },

  // ---- sweet-honey (11) ----
  '누가':         { category: 'sweet-honey', emoji: '🤎', aliases: ['nougat'] },
  '버터':         { category: 'sweet-honey', emoji: '🧈', aliases: ['butter'] },
  '크림':         { category: 'sweet-honey', emoji: '🥛', aliases: ['cream'] },
  '꿀':           { category: 'sweet-honey', emoji: '🍯', aliases: ['honey', '허니'] },
  '메이플 시럽':  { category: 'sweet-honey', emoji: '🍁', aliases: ['maple syrup', '메이플시럽'] },
  '단순 시럽':    { category: 'sweet-honey', emoji: '🍯', aliases: ['simple syrup', '단순시럽'] },
  '설탕 시럽':    { category: 'sweet-honey', emoji: '🍯', aliases: ['sugar syrup', '설탕시럽'] },
  '캔디':         { category: 'sweet-honey', emoji: '🍬', aliases: ['candy'] },
  '호박엿':       { category: 'sweet-honey', emoji: '🟠', aliases: ['pumpkin toffee'] },
  '조청':         { category: 'sweet-honey', emoji: '🍯', aliases: ['korean honey'] },
  '버터스카치':   { category: 'sweet-honey', emoji: '🍬', aliases: ['butterscotch'] },

  // ---- sweet-caramel (13: 11 spec + 시럽/다크캐러멜 ozy-cafe) ----
  '캐러멜':       { category: 'sweet-caramel', emoji: '🍮', aliases: ['caramel', '카라멜', '캬라멜'] },
  '황설탕':       { category: 'sweet-caramel', emoji: '🟫', aliases: ['brown sugar', '브라운 슈가', '브라운슈가'] },
  '몰라세스':     { category: 'sweet-caramel', emoji: '🟤', aliases: ['molasses'] },
  '콜라':         { category: 'sweet-caramel', emoji: '🥤', aliases: ['cola'] },
  '토피':         { category: 'sweet-caramel', emoji: '🍬', aliases: ['toffee'] },
  '비정제 설탕':  { category: 'sweet-caramel', emoji: '🟫', aliases: ['muscovado', '마스코바도', '비정제설탕'] },
  '흑설탕':       { category: 'sweet-caramel', emoji: '⚫', aliases: ['black sugar'] },
  '흑당 시럽':    { category: 'sweet-caramel', emoji: '⚫', aliases: ['black sugar syrup', '흑당시럽'] },
  '당밀':         { category: 'sweet-caramel', emoji: '🟤', aliases: ['molasses syrup'] },
  '잼':           { category: 'sweet-caramel', emoji: '🍓', aliases: ['jam'] },
  '브라우니':     { category: 'sweet-caramel', emoji: '🍫', aliases: ['brownie'] },
  '시럽':         { category: 'sweet-caramel', emoji: '🍯', aliases: ['syrup'] },
  '다크캐러멜':   { category: 'sweet-caramel', emoji: '🍮', aliases: ['dark caramel', '다크 캐러멜'] },

  // ---- sour-fermented (14) ----
  '샴페인':       { category: 'sour-fermented', emoji: '🍾', aliases: ['champagne'] },
  '스파클링 와인': { category: 'sour-fermented', emoji: '🍾', aliases: ['sparkling wine', '스파클링와인'] },
  '화이트 와인':  { category: 'sour-fermented', emoji: '🥂', aliases: ['white wine', '화이트와인'] },
  '레드 와인':    { category: 'sour-fermented', emoji: '🍷', aliases: ['red wine', '레드와인'] },
  '로제 와인':    { category: 'sour-fermented', emoji: '🍷', aliases: ['rose wine', 'rosé wine', '로제와인'] },
  '에이드':       { category: 'sour-fermented', emoji: '🥤', aliases: ['ade'] },
  '주스':         { category: 'sour-fermented', emoji: '🧃', aliases: ['juice'] },
  '진저 에일':    { category: 'sour-fermented', emoji: '🥤', aliases: ['ginger ale', '진저에일'] },
  '애플 사이다':  { category: 'sour-fermented', emoji: '🍎', aliases: ['apple cider', '애플사이다'] },
  '콤부차':       { category: 'sour-fermented', emoji: '🍶', aliases: ['kombucha'] },
  '에일 맥주':    { category: 'sour-fermented', emoji: '🍺', aliases: ['stout', 'ale', '에일맥주', '흑맥주'] },
  '세리':         { category: 'sour-fermented', emoji: '🍷', aliases: ['sherry'] },
  '포트 와인':    { category: 'sour-fermented', emoji: '🍷', aliases: ['port wine', '포트와인'] },
  '브랜디':       { category: 'sour-fermented', emoji: '🥃', aliases: ['brandy', '꼬냑', 'cognac'] },

  // ---- fruity-citrus (16) ----
  '레몬':         { category: 'fruity-citrus', emoji: '🍋', aliases: ['lemon'] },
  '라임':         { category: 'fruity-citrus', emoji: '🍋‍🟩', aliases: ['lime'] },
  '자몽':         { category: 'fruity-citrus', emoji: '🍊', aliases: ['grapefruit'] },
  '클레멘틴':     { category: 'fruity-citrus', emoji: '🍊', aliases: ['clementine'] },
  '오렌지':       { category: 'fruity-citrus', emoji: '🍊', aliases: ['orange'] },
  '블러드 오렌지': { category: 'fruity-citrus', emoji: '🍊', aliases: ['blood orange', '블러드오렌지'] },
  '라임 제스트':  { category: 'fruity-citrus', emoji: '🍋‍🟩', aliases: ['lime zest', '라임제스트'] },
  '레몬 제스트':  { category: 'fruity-citrus', emoji: '🍋', aliases: ['lemon zest', '레몬제스트'] },
  '청귤':         { category: 'fruity-citrus', emoji: '🍊', aliases: ['green tangerine'] },
  '유자':         { category: 'fruity-citrus', emoji: '🍊', aliases: ['yuja', 'yuzu'] },
  '스위티':       { category: 'fruity-citrus', emoji: '🍊', aliases: ['sweetie'] },
  '핑크 자몽':    { category: 'fruity-citrus', emoji: '🍊', aliases: ['pink grapefruit', '핑크자몽'] },
  '오렌지 제스트': { category: 'fruity-citrus', emoji: '🍊', aliases: ['orange zest', '오렌지제스트'] },
  '탠저린':       { category: 'fruity-citrus', emoji: '🍊', aliases: ['tangerine'] },
  '만다린':       { category: 'fruity-citrus', emoji: '🍊', aliases: ['mandarin'] },
  '감귤':         { category: 'fruity-citrus', emoji: '🍊', aliases: ['mandarin orange'] },

  // ---- other-fruit (14) ----
  '청사과':       { category: 'other-fruit', emoji: '🍏', aliases: ['green apple'] },
  '빨간 사과':    { category: 'other-fruit', emoji: '🍎', aliases: ['red apple', '빨간사과'] },
  '아시안 배':    { category: 'other-fruit', emoji: '🍐', aliases: ['asian pear', '아시안배'] },
  '사과':         { category: 'other-fruit', emoji: '🍎', aliases: ['apple'] },
  '홍옥':         { category: 'other-fruit', emoji: '🍎', aliases: ['hongok'] },
  '서양배':       { category: 'other-fruit', emoji: '🍐', aliases: ['pear'] },
  '모과':         { category: 'other-fruit', emoji: '🍐', aliases: ['quince'] },
  '석류':         { category: 'other-fruit', emoji: '🍎', aliases: ['pomegranate'] },
  '단감':         { category: 'other-fruit', emoji: '🍊', aliases: ['persimmon', '감'] },
  '홍시':         { category: 'other-fruit', emoji: '🍊', aliases: ['ripe persimmon'] },
  '수박':         { category: 'other-fruit', emoji: '🍉', aliases: ['watermelon'] },
  '허니듀':       { category: 'other-fruit', emoji: '🍈', aliases: ['honeydew'] },
  '캔탈로프':     { category: 'other-fruit', emoji: '🍈', aliases: ['cantaloupe'] },
  '골든애플':     { category: 'other-fruit', emoji: '🍏', aliases: ['golden apple', '골든 애플'] },

  // ---- fruity-grape-green (4) ----
  '화이트 그레이프': { category: 'fruity-grape-green', emoji: '🍇', aliases: ['white grape', '화이트그레이프'] },
  '청포도':       { category: 'fruity-grape-green', emoji: '🍇', aliases: ['green grape'] },
  '샤인 머스캣':  { category: 'fruity-grape-green', emoji: '🍇', aliases: ['shine muscat', '샤인머스캣'] },
  '골든 키위':    { category: 'fruity-grape-green', emoji: '🥝', aliases: ['golden kiwi', '골든키위'] },

  // ---- fruity-grape (4: 3 spec + 거봉 ozy-cafe) ----
  '레드 그레이프': { category: 'fruity-grape', emoji: '🍇', aliases: ['red grape', '레드그레이프'] },
  '콩코드 그레이프': { category: 'fruity-grape', emoji: '🍇', aliases: ['concord grape', '콩코드그레이프'] },
  '포도':         { category: 'fruity-grape', emoji: '🍇', aliases: ['grape'] },
  '거봉':         { category: 'fruity-grape', emoji: '🍇', aliases: ['kyoho'] },

  // ---- fruity-tropical (14: 12 spec + 그린 망고/멜론 ozy-cafe) ----
  '리치':         { category: 'fruity-tropical', emoji: '🤍', aliases: ['lychee'] },
  '스타 후르츠':  { category: 'fruity-tropical', emoji: '⭐', aliases: ['star fruit', '스타후르츠', '스타프루트'] },
  '패션 후르츠':  { category: 'fruity-tropical', emoji: '🟣', aliases: ['passion fruit', 'passionfruit', '패션프루츠', '패션후르츠'] },
  '파인애플':     { category: 'fruity-tropical', emoji: '🍍', aliases: ['pineapple'] },
  '망고':         { category: 'fruity-tropical', emoji: '🥭', aliases: ['mango'] },
  '파파야':       { category: 'fruity-tropical', emoji: '🥭', aliases: ['papaya'] },
  '키위':         { category: 'fruity-tropical', emoji: '🥝', aliases: ['kiwi'] },
  '바나나':       { category: 'fruity-tropical', emoji: '🍌', aliases: ['banana'] },
  '코코넛':       { category: 'fruity-tropical', emoji: '🥥', aliases: ['coconut'] },
  '용과':         { category: 'fruity-tropical', emoji: '🌺', aliases: ['dragon fruit'] },
  '망고스틴':     { category: 'fruity-tropical', emoji: '🟣', aliases: ['mangosteen'] },
  '구아바':       { category: 'fruity-tropical', emoji: '🟢', aliases: ['guava'] },
  '그린 망고':    { category: 'fruity-tropical', emoji: '🥭', aliases: ['green mango', '그린망고'] },
  '멜론':         { category: 'fruity-tropical', emoji: '🍈', aliases: ['melon'] },

  // ---- fruity-stone (11) ----
  '복숭아':       { category: 'fruity-stone', emoji: '🍑', aliases: ['peach'] },
  '천도복숭아':   { category: 'fruity-stone', emoji: '🍑', aliases: ['nectarine'] },
  '살구':         { category: 'fruity-stone', emoji: '🍑', aliases: ['apricot'] },
  '자두':         { category: 'fruity-stone', emoji: '🟣', aliases: ['plum'] },
  '체리':         { category: 'fruity-stone', emoji: '🍒', aliases: ['cherry'] },
  '블랙 체리':    { category: 'fruity-stone', emoji: '🍒', aliases: ['black cherry', '블랙체리'] },
  '매실':         { category: 'fruity-stone', emoji: '🟢', aliases: ['korean plum'] },
  '백도':         { category: 'fruity-stone', emoji: '🍑', aliases: ['white peach'] },
  '황도':         { category: 'fruity-stone', emoji: '🍑', aliases: ['yellow peach'] },
  '다크 체리':    { category: 'fruity-stone', emoji: '🍒', aliases: ['dark cherry', '다크체리'] },
  '피자두':       { category: 'fruity-stone', emoji: '🟣', aliases: ['dark plum', '다크 플럼', '다크플럼'] },

  // ---- fruity-berry-red (4) ----
  '크랜베리':     { category: 'fruity-berry-red', emoji: '🔴', aliases: ['cranberry'] },
  '라즈베리':     { category: 'fruity-berry-red', emoji: '🍓', aliases: ['raspberry'] },
  '딸기':         { category: 'fruity-berry-red', emoji: '🍓', aliases: ['strawberry'] },
  '산딸기':       { category: 'fruity-berry-red', emoji: '🍓', aliases: ['wild raspberry'] },

  // ---- fruity-berry-dark (6) ----
  '블루베리':     { category: 'fruity-berry-dark', emoji: '🫐', aliases: ['blueberry'] },
  '블랙베리':     { category: 'fruity-berry-dark', emoji: '🫐', aliases: ['blackberry'] },
  '커런트':       { category: 'fruity-berry-dark', emoji: '🟣', aliases: ['currant'] },
  '블랙커런트':   { category: 'fruity-berry-dark', emoji: '🫐', aliases: ['blackcurrant', '블랙 커런트'] },
  '레드 커런트':  { category: 'fruity-berry-dark', emoji: '🔴', aliases: ['red currant', '레드커런트'] },
  '구스베리':     { category: 'fruity-berry-dark', emoji: '🟣', aliases: ['gooseberry'] },

  // ---- dried-fruit (14: 무화과는 sweet-caramel → dried-fruit 이동) ----
  '골든 레이즌':  { category: 'dried-fruit', emoji: '🟡', aliases: ['golden raisin', '골든레이즌'] },
  '건포도':       { category: 'dried-fruit', emoji: '🟣', aliases: ['raisin'] },
  '말린 무화과':  { category: 'dried-fruit', emoji: '🟤', aliases: ['dried fig', '말린무화과', '드라이 피그'] },
  '말린 대추':    { category: 'dried-fruit', emoji: '🟤', aliases: ['dried date', '말린대추'] },
  '말린 자두':    { category: 'dried-fruit', emoji: '🟣', aliases: ['prune', '프룬', '말린자두'] },
  '말린 사과':    { category: 'dried-fruit', emoji: '🟫', aliases: ['dried apple', '말린사과'] },
  '말린 살구':    { category: 'dried-fruit', emoji: '🟠', aliases: ['dried apricot', '말린살구'] },
  '말린 망고':    { category: 'dried-fruit', emoji: '🟡', aliases: ['dried mango', '말린망고'] },
  '타마린드':     { category: 'dried-fruit', emoji: '🟤', aliases: ['tamarind'] },
  '말린 체리':    { category: 'dried-fruit', emoji: '🔴', aliases: ['dried cherry', '말린체리'] },
  '대추':         { category: 'dried-fruit', emoji: '🟤', aliases: ['date'] },
  '대추야자':     { category: 'dried-fruit', emoji: '🌴', aliases: ['date palm'] },
  '곶감':         { category: 'dried-fruit', emoji: '🟠', aliases: ['dried persimmon'] },
  '무화과':       { category: 'dried-fruit', emoji: '🟣', aliases: ['fig'] },

  // ---- mouthfeel (14: 9 spec + 감칠맛/맑은 단맛/쥬시/소다/후르츠링 ozy-cafe) ----
  '묽은':         { category: 'mouthfeel', emoji: '💧', aliases: ['watery'] },
  '무지방 우유':  { category: 'mouthfeel', emoji: '🥛', aliases: ['skim milk', '무지방우유'] },
  '차 같은':      { category: 'mouthfeel', emoji: '🍵', aliases: ['tea-like', '차같은'] },
  '둥근':         { category: 'mouthfeel', emoji: '⭕', aliases: ['round'] },
  '저지방 우유':  { category: 'mouthfeel', emoji: '🥛', aliases: ['2% milk', '2 milk', '저지방우유'] },
  '크림 같은':    { category: 'mouthfeel', emoji: '🥛', aliases: ['creamy', '크림같은'] },
  '가득한':       { category: 'mouthfeel', emoji: '🫙', aliases: ['full'] },
  '우유':         { category: 'mouthfeel', emoji: '🥛', aliases: ['whole milk', 'milk'] },
  '쫀득한':       { category: 'mouthfeel', emoji: '🍡', aliases: ['chewy'] },
  '감칠맛':       { category: 'mouthfeel', emoji: '🧂', aliases: ['umami'] },
  '맑은 단맛':    { category: 'mouthfeel', emoji: '💧', aliases: ['clean sweetness', '맑은단맛'] },
  '쥬시':         { category: 'mouthfeel', emoji: '💦', aliases: ['juicy'] },
  '소다':         { category: 'mouthfeel', emoji: '🥤', aliases: ['soda'] },
  '후르츠링':     { category: 'mouthfeel', emoji: '🌈', aliases: ['froot loops'] },
};

// ============================================================================
// ALIAS_INDEX — alias → canonical 역방향 인덱스 (성능 최적화, 모듈 로드 시 1회 빌드)
// ============================================================================
const ALIAS_INDEX = (() => {
  const idx = Object.create(null);
  for (const [canonical, entry] of Object.entries(CUP_NOTE_DICT)) {
    idx[canonical] = canonical;
    idx[canonical.toLowerCase()] = canonical;
    if (entry.aliases) {
      for (const a of entry.aliases) {
        idx[a] = canonical;
        idx[a.toLowerCase()] = canonical;
      }
    }
  }
  return idx;
})();

// ============================================================================
// SVG 자산 보존 (Phase 1~2 디자인) — 23개 (단어 20 + 카테고리 3)
//   Layer format: { d, fill, stroke, sw }  (icons-v4 호환)
// ============================================================================
export const CATEGORY_SVG = {
  'floral-bergamot': [
    { d:'M12 14v8', stroke:'#4a7028', sw:1.6, fill:'none' },
    { d:'M12 18c-3-1-5 0-5 3', stroke:'#4a7028', sw:1.4, fill:'none' },
    { d:'M7 13c0-5 2-9 5-9c3 0 5 4 5 9c-1 1-3 1-5 0c-2 1-4 1-5 0z', fill:'#9e8db8', stroke:'#5a4878', sw:1.2 },
    { d:'M12 4v9', stroke:'#5a4878', sw:0.6, fill:'none' },
    { d:'M9 5c-1 3-1 6 0 8 M15 5c1 3 1 6 0 8', stroke:'#5a4878', sw:0.5, fill:'none' },
    { d:'M9 8c0 2 0 3 1 4', stroke:'#c8b8d8', sw:0.7, fill:'none' },
  ],
  'sweet-vanilla': [
    { d:'M9 5c-1 5-1 11 0 16c1 0 2-1 2-2c1-4 1-8 0-12c-0.5-1-1-2-2-2z', fill:'#5a3818', stroke:'#2a1808', sw:1.3 },
    { d:'M10 7c0 4 0 10 0 13', stroke:'#2a1808', sw:0.5, fill:'none' },
    { d:'M13 9c2-1 5 0 5 2c0 2-2 3-4 2c-2-1-2-3-1-4z', fill:'#f5e8d8', stroke:'#a8906a', sw:1.0 },
    { d:'M14 9c0 2 0 3 1 4 M17 9c0 2 0 3-1 4', stroke:'#c8a878', sw:0.6, fill:'none' },
    { d:'M15 11a0.7 0.7 0 1 0 0 0.01', fill:'#e8b850', stroke:'#a87830', sw:0 },
  ],
  'fruity-grape-green': [
    { d:'M12 4v3', stroke:'#5a4018', sw:1.5, fill:'none' },
    { d:'M12 5c2-1 4 0 4 2c-2 1-3 0-4-2z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M9 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M7 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M11 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M15 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M9 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M11 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M10 8a0.4 0.4 0 1 0 0 0.01 M14 8a0.4 0.4 0 1 0 0 0.01', fill:'#d8e090', stroke:'none', sw:0 },
  ],
};

// 단어별 커스텀 SVG (canonical 표기로 키 매핑)
export const WORD_SVG = {
  '자두': [
    { d:'M5 14a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#7a2548', stroke:'#3a1028', sw:1.3 },
    { d:'M12 8v6', stroke:'#3a1028', sw:0.8, fill:'none' },
    { d:'M12 8c2-2 5-1 5 1c-1 1-3 1-5-1z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M8 12c-1 1-1 2 0 3', stroke:'#a04060', sw:0.8, fill:'none' },
  ],
  '살구': [
    { d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#f0a560', stroke:'#a85020', sw:1.3 },
    { d:'M12 7c-1 3-1 7 0 12', stroke:'#a85020', sw:0.8, fill:'none' },
    { d:'M12 7c2-2 5-1 5 1c-1 1-3 1-5-1z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M9 11c-1 1-1 2 0 3', stroke:'#ffd098', sw:0.9, fill:'none' },
  ],
  '라즈베리': [
    { d:'M10 7l2 2 2-2 M11 5c0-1 1-1 2-1', stroke:'#4a7028', sw:1.3, fill:'#5a8030' },
    { d:'M8 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#d04050', stroke:'#7a1828', sw:1.0 },
    { d:'M9 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#d04050', stroke:'#7a1828', sw:1.0 },
    { d:'M10 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#d04050', stroke:'#7a1828', sw:1.0 },
    { d:'M9 10a0.5 0.5 0 1 0 0 0.01 M13 10a0.5 0.5 0 1 0 0 0.01 M10 13a0.5 0.5 0 1 0 0 0.01', fill:'#f06070', stroke:'none', sw:0 },
  ],
  '블랙베리': [
    { d:'M10 7l2 2 2-2 M11 5c0-1 1-1 2-1', stroke:'#4a7028', sw:1.3, fill:'#5a8030' },
    { d:'M8 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#1a081a', stroke:'#0a0410', sw:1.0 },
    { d:'M9 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#1a081a', stroke:'#0a0410', sw:1.0 },
    { d:'M10 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#1a081a', stroke:'#0a0410', sw:1.0 },
    { d:'M9 10a0.5 0.5 0 1 0 0 0.01 M13 10a0.5 0.5 0 1 0 0 0.01 M10 13a0.5 0.5 0 1 0 0 0.01', fill:'#3a1830', stroke:'none', sw:0 },
  ],
  '망고스틴': [
    { d:'M5 14a7 6 0 1 0 14 0 7 6 0 0 0-14 0z', fill:'#6a1838', stroke:'#2a0a18', sw:1.3 },
    { d:'M9 8c1-2 5-2 6 0', fill:'#4a7028', stroke:'#2a4a18', sw:1.0 },
    { d:'M10 7l-2-2 M14 7l2-2', stroke:'#4a7028', sw:1.4, fill:'none' },
    { d:'M12 4v3', stroke:'#3a2818', sw:1.5, fill:'none' },
    { d:'M8 12c-1 1-1 2 0 3', stroke:'#9a3060', sw:0.8, fill:'none' },
  ],
  '무화과': [
    { d:'M12 6c-3 1-5 4-5 8c0 4 2 6 5 6c3 0 5-2 5-6c0-4-2-7-5-8z', fill:'#6a3038', stroke:'#3a1820', sw:1.3 },
    { d:'M12 6v-2', stroke:'#5a3818', sw:1.5, fill:'none' },
    { d:'M12 5c2-1 4 0 4 2', stroke:'#4a7028', sw:1.4, fill:'none' },
    { d:'M12 11c-2 0-3 2-3 4c0 2 1 4 3 4c2 0 3-2 3-4c0-2-1-4-3-4z', fill:'#d8506a', stroke:'#a83048', sw:0.8 },
    { d:'M11 14a0.4 0.4 0 1 0 0 0.01 M13 14a0.4 0.4 0 1 0 0 0.01 M12 16a0.4 0.4 0 1 0 0 0.01', fill:'#fff5d8', stroke:'none', sw:0 },
  ],
  '패션 후르츠': [
    { d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#3a1028', stroke:'#1a0518', sw:1.3 },
    { d:'M7 10c2 1 3 0 4-1 M13 9c2 1 3 2 4 1 M7 17c2-1 3 0 4 1 M13 17c2-1 3 0 4 1', stroke:'#5a1838', sw:0.8, fill:'none' },
    { d:'M8 14c2 0 3-1 4-1 M12 14c2 0 3 1 4 1', stroke:'#5a1838', sw:0.6, fill:'none' },
    { d:'M12 5v2', stroke:'#3a2818', sw:1.2, fill:'none' },
    { d:'M9 9a1 1 0 1 0 0 0.01', fill:'#7a2050', stroke:'none', sw:0 },
  ],
  '리치': [
    { d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#d04860', stroke:'#7a1830', sw:1.3 },
    { d:'M8 10l1 0.5 0 1-1 0z M12 9l1 0.5 0 1-1 0z M16 11l1 0.5 0 1-1 0z M9 13l1 0.5 0 1-1 0z M13 14l1 0.5 0 1-1 0z M16 15l1 0.5 0 1-1 0z M9 16l1 0.5 0 1-1 0z M12 17l1 0.5 0 1-1 0z', fill:'#a83048', stroke:'#7a1830', sw:0.5 },
    { d:'M12 5v2', stroke:'#3a2818', sw:1.4, fill:'none' },
    { d:'M12 5c2-1 4 0 4 2', stroke:'#4a7028', sw:1.3, fill:'none' },
    { d:'M8 9a0.6 0.6 0 1 0 0 0.01', fill:'#f08090', stroke:'none', sw:0 },
  ],
  '베르가못': [
    { d:'M12 6c-3 1-5 4-5 8c0 4 2 6 5 6c3 0 5-2 5-6c0-4-2-7-5-8z', fill:'#c8c050', stroke:'#7a7028', sw:1.3 },
    { d:'M9 12a0.4 0.4 0 1 0 0 0.01 M14 11a0.4 0.4 0 1 0 0 0.01 M11 15a0.4 0.4 0 1 0 0 0.01 M15 14a0.4 0.4 0 1 0 0 0.01 M9 17a0.4 0.4 0 1 0 0 0.01 M13 18a0.4 0.4 0 1 0 0 0.01', fill:'#7a7028', stroke:'none', sw:0 },
    { d:'M12 6V4', stroke:'#4a3818', sw:1.5, fill:'none' },
    { d:'M12 5c2-2 5-1 5 1c-2 1-4 1-5-1z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M8 11c-1 1-1 3 0 4', stroke:'#e8e090', sw:0.8, fill:'none' },
  ],
  '밀크 초콜릿': [
    { d:'M5 7h14v3l-2 1v8c0 1-1 1-2 1h-9c-1 0-1 0-1-1z', fill:'#7a4828', stroke:'#3a1a08', sw:1.3 },
    { d:'M5 7h14v3l-2 1h-12z', fill:'#a06848', stroke:'#3a1a08', sw:1.0 },
    { d:'M17 11l2-1v8c0 1-1 1-2 1z', fill:'#5a3018', stroke:'#3a1a08', sw:0.8 },
    { d:'M9 11v9 M13 11v9 M5 14h12 M5 17h12', stroke:'#3a1a08', sw:0.7, fill:'none' },
    { d:'M7 12a0.4 0.4 0 1 0 0 0.01 M11 12a0.4 0.4 0 1 0 0 0.01 M15 12a0.4 0.4 0 1 0 0 0.01', fill:'#c8884a', stroke:'none', sw:0 },
  ],
  '바닐라': [
    { d:'M6 14c0 4 1 7 2 8c1 0 2-1 2-2c1-3 1-7 0-10c-1-1-3-1-3 0c-1 1-1 2-1 4z', fill:'#5a3818', stroke:'#2a1808', sw:1.2 },
    { d:'M7 14c0 3 1 6 2 8 M9 13c0 4 0 7 0 9', stroke:'#2a1808', sw:0.5, fill:'none' },
    { d:'M14 6c-2 1-3 3-2 5c1 2 4 2 5 0c1-1 1-3 0-4c-1-1-2-2-3-1z', fill:'#f5e8d8', stroke:'#a8906a', sw:1.0 },
    { d:'M14 6c-1 2-1 4 0 5 M17 6c1 2 1 4 0 5 M14 11c1-1 3-1 4 0', stroke:'#c8a878', sw:0.7, fill:'none' },
    { d:'M16 9a0.7 0.7 0 1 0 0 0.01', fill:'#e8b850', stroke:'#a87830', sw:0 },
  ],
  '시럽': [
    { d:'M9 11h6v8c0 1-1 1-2 1h-2c-1 0-2 0-2-1z', fill:'#a8602a', stroke:'#5a2a08', sw:1.3 },
    { d:'M10 8h4v3h-4z', fill:'#a8602a', stroke:'#5a2a08', sw:1.2 },
    { d:'M9 6h6v2h-6z', fill:'#3a1808', stroke:'#1a0808', sw:0.8 },
    { d:'M11 14l1-1 1 1 0 1 1 0-1 1-1 0 0 1-1-1z', fill:'#f5d488', stroke:'#7a4818', sw:0.6 },
    { d:'M10 16c1 0 4 0 5 0', stroke:'#d8884a', sw:0.6, fill:'none' },
    { d:'M14 11v8', stroke:'#7a4018', sw:0.6, fill:'none' },
  ],
  '다크캐러멜': [
    { d:'M6 9h10v9c0 1-1 1-2 1h-6c-1 0-2 0-2-1z', fill:'#5a2810', stroke:'#2a1408', sw:1.3 },
    { d:'M6 9l2-2h10l-2 2z', fill:'#7a4020', stroke:'#2a1408', sw:1.0 },
    { d:'M16 9l2-2v9c0 1-1 2-2 2z', fill:'#3a1808', stroke:'#2a1408', sw:1.0 },
    { d:'M5 12c-1 0-2-1-2-2 M19 12c1 0 2-1 2-2 M5 16c-1 0-2 1-2 2 M19 16c1 0 2 1 2 2', stroke:'#a87858', sw:0.8, fill:'none' },
    { d:'M9 11c0 2 0 3 0 4 M13 11c0 2 0 3 0 4', stroke:'#3a1808', sw:0.6, fill:'none' },
  ],
  '청포도': [
    { d:'M12 4v3', stroke:'#5a4018', sw:1.5, fill:'none' },
    { d:'M12 5c2-1 4 0 4 2c-2 1-3 0-4-2z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M9 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M7 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M11 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M15 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M9 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M11 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#b8c860', stroke:'#5a7830', sw:0.9 },
    { d:'M10 8a0.4 0.4 0 1 0 0 0.01 M14 8a0.4 0.4 0 1 0 0 0.01', fill:'#d8e090', stroke:'none', sw:0 },
  ],
  '거봉': [
    { d:'M12 4v2', stroke:'#5a4018', sw:1.5, fill:'none' },
    { d:'M12 5c2-1 3 0 3 1c-1 1-2 0-3-1z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#3a1240', stroke:'#1a0820', sw:1.3 },
    { d:'M9 9c-1 1-2 3-2 6', stroke:'#7a3a98', sw:1.6, fill:'none' },
    { d:'M8 9a1.2 1.2 0 1 0 0 0.01', fill:'#a868c8', stroke:'none', sw:0 },
    { d:'M14 11a0.4 0.4 0 1 0 0 0.01 M16 14a0.4 0.4 0 1 0 0 0.01 M13 16a0.4 0.4 0 1 0 0 0.01', fill:'#7a5a90', stroke:'none', sw:0 },
  ],
  '백도': [
    { d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#f8d8d8', stroke:'#d89898', sw:1.3 },
    { d:'M12 7v12', stroke:'#d89898', sw:0.7, fill:'none' },
    { d:'M12 7c2-2 5-1 5 1c-1 1-3 1-5-1z', fill:'#5a8030', stroke:'#2a4a18', sw:1.0 },
    { d:'M9 11a2 3 0 0 1 1 4', stroke:'#f8a8a8', sw:0.8, fill:'none' },
    { d:'M8 12c-1 1-1 2 0 3', stroke:'#fff0f0', sw:0.8, fill:'none' },
  ],
  '황설탕': [
    { d:'M5 18c0-3 2-5 5-6c1-1 3-1 4 0c2 1 4 3 4 6c0 1 0 2-1 2h-11c-1 0-1-1-1-2z', fill:'#a86838', stroke:'#5a3018', sw:1.3 },
    { d:'M7 16c1 0 2-1 3-1', stroke:'#d89058', sw:0.8, fill:'none' },
    { d:'M8 14a0.4 0.4 0 1 0 0 0.01 M12 13a0.4 0.4 0 1 0 0 0.01 M15 14a0.4 0.4 0 1 0 0 0.01 M9 17a0.4 0.4 0 1 0 0 0.01 M13 17a0.4 0.4 0 1 0 0 0.01 M16 18a0.4 0.4 0 1 0 0 0.01', fill:'#5a3018', stroke:'none', sw:0 },
    { d:'M4 20a0.5 0.5 0 1 0 0 0.01 M19 20a0.5 0.5 0 1 0 0 0.01 M3 19a0.5 0.5 0 1 0 0 0.01', fill:'#a86838', stroke:'none', sw:0 },
  ],
  '후르츠링': [
    { d:'M3 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z', fill:'none', stroke:'#e04060', sw:2.2 },
    { d:'M13 9a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z', fill:'none', stroke:'#f0a040', sw:2.2 },
    { d:'M6 13a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z', fill:'none', stroke:'#e0c040', sw:2.2 },
    { d:'M14 16a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z', fill:'none', stroke:'#5a8030', sw:2.2 },
    { d:'M3 18a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z', fill:'none', stroke:'#5a78c0', sw:2.2 },
  ],
  '꿀': [
    { d:'M7 10h10v9c0 1-1 1-2 1h-6c-1 0-2 0-2-1z', fill:'#f0b840', stroke:'#a86018', sw:1.3 },
    { d:'M6 8h12v2h-12z', fill:'#5a3008', stroke:'#2a1808', sw:0.8 },
    { d:'M7 13h10', stroke:'#a86018', sw:0.5, fill:'none' },
    { d:'M9 15l1-0.5 1 0.5 0 1-1 0.5-1-0.5z M13 15l1-0.5 1 0.5 0 1-1 0.5-1-0.5z M11 17l1-0.5 1 0.5 0 1-1 0.5-1-0.5z', fill:'#a86018', stroke:'#5a3008', sw:0.5 },
    { d:'M11 4l1 2-1 2 M12 4v4', stroke:'#7a4818', sw:1.2, fill:'none' },
  ],
  '레몬그라스': [
    { d:'M7 22c-1-7-1-13 2-18', stroke:'#7a9838', sw:1.4, fill:'none' },
    { d:'M10 22c0-7 0-12 2-15', stroke:'#8aa848', sw:1.5, fill:'none' },
    { d:'M12 22c0-9 0-15 0-18', stroke:'#5a8030', sw:1.7, fill:'none' },
    { d:'M14 22c0-7 0-12-2-15', stroke:'#8aa848', sw:1.5, fill:'none' },
    { d:'M17 22c1-7 1-13-2-18', stroke:'#7a9838', sw:1.4, fill:'none' },
    { d:'M9 21c2-1 4-1 6 0', stroke:'#5a4818', sw:1.3, fill:'none' },
  ],
  '목련': [
    { d:'M12 18v4', stroke:'#5a3818', sw:1.4, fill:'none' },
    { d:'M12 19c-3 0-5 1-5 3', stroke:'#4a7028', sw:1.2, fill:'none' },
    { d:'M8 12c0-4 2-8 4-8c2 0 4 4 4 8c0 2-1 5-2 6h-4c-1-1-2-4-2-6z', fill:'#fff5ec', stroke:'#c8b098', sw:1.0 },
    { d:'M10 5c-1 4-1 8 0 13 M14 5c1 4 1 8 0 13', stroke:'#c8b098', sw:0.6, fill:'none' },
    { d:'M9 14c0-2 1-4 3-4c2 0 3 2 3 4c0 1-1 3-2 4h-2c-1-1-2-3-2-4z', fill:'#fce0d8', stroke:'#c89890', sw:0.9 },
    { d:'M10.5 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z', fill:'#e8c850', stroke:'#a87830', sw:0.6 },
    { d:'M12 13v3', stroke:'#a87830', sw:0.4, fill:'none' },
  ],
};

// ============================================================================
// HELPER FUNCTIONS — Phase 3 명세 8개 + SVG 보존 3개
// ============================================================================

// 정규화: alias → canonical 한국어 표기
export function normalizeNote(note) {
  if (!note) return '';
  const trimmed = String(note).trim();
  if (!trimmed) return '';
  if (ALIAS_INDEX[trimmed]) return ALIAS_INDEX[trimmed];
  const lower = trimmed.toLowerCase();
  if (ALIAS_INDEX[lower]) return ALIAS_INDEX[lower];
  return trimmed;
}

// 카테고리 조회 — 매칭 실패 시 'other'
export function getNoteCategory(note) {
  const norm = normalizeNote(note);
  return CUP_NOTE_DICT[norm]?.category || 'other';
}

// 카테고리 조회 (Strict) — 매칭 실패 시 null (icons-v4/v5 폴스루용)
export function getNoteCategoryOrNull(note) {
  const norm = normalizeNote(note);
  return CUP_NOTE_DICT[norm]?.category || null;
}

// 이모지 조회 (단어 우선 → 카테고리 fallback → ☕)
export function getNoteEmoji(note) {
  const norm = normalizeNote(note);
  const entry = CUP_NOTE_DICT[norm];
  if (entry?.emoji) return entry.emoji;
  const cat = entry?.category;
  if (cat && CATEGORY_EMOJI[cat]) return CATEGORY_EMOJI[cat];
  return '☕';
}

// 색상 조회 (단어 → 카테고리 색)
export function getNoteColor(note, mode = 'dark') {
  const category = getNoteCategory(note);
  return CATEGORY_COLORS[category]?.[mode] || CATEGORY_COLORS.other[mode];
}

// 카테고리 색상 직접
export function getCategoryColor(category, mode = 'dark') {
  return CATEGORY_COLORS[category]?.[mode] || CATEGORY_COLORS.other[mode];
}

// 카테고리 이모지 직접
export function getCategoryEmoji(category) {
  return CATEGORY_EMOJI[category] || '☕';
}

// 가중치 — Phase 4 메쉬 그라디언트용
export function getCategoryWeight(category) {
  return CATEGORY_WEIGHTS[category] ?? 1.0;
}

// 배열 처리 — Phase 4 메쉬 그라디언트용
export function getNoteColorInfo(notes, mode = 'dark') {
  if (!Array.isArray(notes)) return [];
  return notes.map(note => {
    const normalized = normalizeNote(note);
    const category = getNoteCategory(normalized);
    return {
      note: normalized,
      category,
      color: getCategoryColor(category, mode),
      emoji: getNoteEmoji(normalized),
      weight: getCategoryWeight(category),
    };
  });
}

// ============================================================================
// SVG 보존 헬퍼 — 기존 cup-notes.js에서 이관
// ============================================================================

export function pickSvgLayers(note) {
  const norm = normalizeNote(note);
  if (WORD_SVG[norm]) return WORD_SVG[norm];
  const cat = CUP_NOTE_DICT[norm]?.category;
  if (cat && CATEGORY_SVG[cat]) return CATEGORY_SVG[cat];
  return null;
}

function escapeAttr(s) {
  return String(s).replace(/[&<>"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[ch]));
}

export function renderSvgString(layers, size) {
  if (!Array.isArray(layers) || !layers.length) return '';
  const sz = size || 24;
  const parts = layers.map(L => {
    const attrs = ['d="' + escapeAttr(L.d) + '"'];
    if (L.fill) attrs.push('fill="' + escapeAttr(L.fill) + '"');
    if (L.stroke && L.stroke !== 'none') attrs.push('stroke="' + escapeAttr(L.stroke) + '"');
    if (L.sw) attrs.push('stroke-width="' + L.sw + '"');
    attrs.push('stroke-linecap="round"', 'stroke-linejoin="round"');
    return '<path ' + attrs.join(' ') + '/>';
  });
  return '<svg viewBox="0 0 24 24" width="' + sz + '" height="' + sz + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + parts.join('') + '</svg>';
}

// 통합 해석 (Strict): word SVG → word emoji → cat SVG → cat emoji → null
// 호출자가 v4/v5 등 다른 사전으로 폴스루할 수 있도록 매칭 실패 시 null 반환.
export function resolveIconOrNull(note, size) {
  const norm = normalizeNote(note);
  if (!norm) return null;
  const entry = CUP_NOTE_DICT[norm];
  // 1. 단어 SVG
  if (WORD_SVG[norm]) return { type: 'svg', content: renderSvgString(WORD_SVG[norm], size) };
  // 2. 단어 전용 이모지 (사전 entry에 있는 emoji)
  if (entry?.emoji) return { type: 'emoji', content: entry.emoji };
  // 3. 카테고리 SVG
  const cat = entry?.category;
  if (cat && CATEGORY_SVG[cat]) return { type: 'svg', content: renderSvgString(CATEGORY_SVG[cat], size) };
  // 4. 카테고리 이모지
  if (cat && CATEGORY_EMOJI[cat]) return { type: 'emoji', content: CATEGORY_EMOJI[cat] };
  // 매칭 없음
  return null;
}

// 통합 해석 (with fallback): 위 체인 + ☕ 최종 fallback
export function resolveIcon(note, size) {
  const r = resolveIconOrNull(note, size);
  if (r) return r;
  return { type: 'emoji', content: '☕' };
}

// ============================================================================
// LEGACY COMPAT — window.CupNoteDict (IIFE 인라인 스크립트에서 접근용)
// 또한 기존 window.CupNotes API도 동일 객체로 노출 (마이그레이션 호환)
// ============================================================================
if (typeof window !== 'undefined') {
  const api = {
    // Phase 3 신규 export
    CATEGORY_COLORS,
    CATEGORY_EMOJI,
    CATEGORY_WEIGHTS,
    CUP_NOTE_DICT,
    CATEGORY_SVG,
    WORD_SVG,
    normalizeNote,
    getNoteCategory,
    getNoteCategoryOrNull,
    getNoteEmoji,
    getNoteColor,
    getCategoryColor,
    getCategoryEmoji,
    getCategoryWeight,
    getNoteColorInfo,
    pickSvgLayers,
    renderSvgString,
    resolveIcon,
    resolveIconOrNull,
    // 기존 window.CupNotes API 호환 (이름만 매핑)
    getCategoryForNote: getNoteCategoryOrNull,    // strict (null 반환)
    pickColor: getCategoryColor,                   // (cat, mode) signature 동일
    pickEmoji: getNoteEmoji,
  };
  window.CupNoteDict = api;
  // 기존 호출자 점진 마이그레이션용 alias
  window.CupNotes = api;
}
