// OZY HOUSE — Cup note dictionary (Phase 3)
// 21 SCA-aligned categories × 42 unique words. Coexists with icons-v4.js / icons-v5-ext.js.
//
// Public API on window.CupNotes:
//   CATEGORY_COLORS  — { cat: { dark, light } }   21 categories
//   CATEGORY_EMOJI   — { cat: emoji }              19 categories with emoji
//   CATEGORY_SVG     — { cat: svgLayers[] }        3 categories with custom SVG
//   WORD_TO_CAT      — { word: cat }               42+ unique words
//   WORD_TO_EMOJI    — { word: emoji }             13 words with specific emoji
//   WORD_SVG         — { word: svgLayers[] }       20 words with custom SVG
//   NOTE_ALIASES     — { variant: canonical }      Korean + English aliases
//   normalizeNote(note)        → canonical Korean form
//   getCategoryForNote(note)   → category key | null
//   pickColor(cat, mode)       → '#hex' | null   mode = 'dark' | 'light'
//   pickEmoji(note)            → emoji string (always returns, '✨' fallback)
//   pickSvgLayers(note)        → svgLayers[] | null
//   renderSvgString(layers, size) → '<svg ...>...</svg>' string
//   resolveIcon(note, size)    → { type:'svg'|'emoji', content:string }
//
// Resolution chain in resolveIcon:
//   1. word SVG  →  2. word emoji  →  3. category SVG  →  4. category emoji  →  '✨'

(function(){
  'use strict';

  // ============ COLORS (Phase 2-B A+B) ============
  const CATEGORY_COLORS = {
    'fruity-stone':        { dark: '#e0a574', light: '#e0a574' },
    'fruity-berry-dark':   { dark: '#8a4a6a', light: '#6a2e50' },
    'fruity-berry-red':    { dark: '#b84858', light: '#b84858' },
    'fruity-citrus':       { dark: '#d8884a', light: '#d8884a' },
    'fruity-tropical':     { dark: '#f5b840', light: '#c08840' },
    'fruity-grape':        { dark: '#7a4a6e', light: '#5a2e50' },
    'fruity-grape-green':  { dark: '#a8b074', light: '#a8b074' },
    'floral':              { dark: '#c8859a', light: '#c8859a' },
    'floral-bergamot':     { dark: '#9e8db8', light: '#9e8db8' },
    'nutty-cocoa-dark':    { dark: '#4a3328', light: '#2a1a14' },
    'nutty-cocoa-light':   { dark: '#8a5a3c', light: '#8a5a3c' },
    'sweet-honey':         { dark: '#d4a85a', light: '#a87d2c' },
    'sweet-caramel':       { dark: '#b8804a', light: '#b8804a' },
    'sweet-vanilla':       { dark: '#e6d5a8', light: '#b8a070' },
    'spices':              { dark: '#a04a2c', light: '#a04a2c' },
    'sour-fermented':      { dark: '#b8a040', light: '#8c7a20' },
    'green-vegetative':    { dark: '#6a7a4a', light: '#6a7a4a' },
    'roasted':             { dark: '#4a3328', light: '#2a1a14' },
    'tea':                 { dark: '#7d5d44', light: '#7d5d44' },
    'mouthfeel':           { dark: '#8a8275', light: '#8a8275' },
    'other':               { dark: '#7a6e5e', light: '#7a6e5e' },
  };

  // ============ CATEGORY EMOJI (fallback when no category SVG) ============
  const CATEGORY_EMOJI = {
    'fruity-stone':        '🍑',
    'fruity-berry-dark':   '🫐',
    'fruity-berry-red':    '🍓',
    'fruity-citrus':       '🍊',
    'fruity-tropical':     '🥭',
    'fruity-grape':        '🍇',
    // fruity-grape-green → CATEGORY_SVG
    'floral':              '🌸',
    // floral-bergamot → CATEGORY_SVG
    'nutty-cocoa-dark':    '🍫',
    'nutty-cocoa-light':   '🥜',
    'sweet-honey':         '🍯',
    'sweet-caramel':       '🍮',
    // sweet-vanilla → CATEGORY_SVG
    'spices':              '🌶️',
    'sour-fermented':      '🍷',
    'green-vegetative':    '🌿',
    'roasted':             '☕',
    'tea':                 '🍵',
    'mouthfeel':           '💧',
    'other':               '✨',
  };

  // ============ CATEGORY SVG (3 categories with custom icons) ============
  // Layer format: { d, fill, stroke, sw }  (compatible with icons-v4)
  const CATEGORY_SVG = {
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

  // ============ WORD → CATEGORY ============
  const WORD_TO_CAT = {
    // fruity-stone
    '복숭아':'fruity-stone', '황도':'fruity-stone', '자두':'fruity-stone', '백도':'fruity-stone', '체리':'fruity-stone',
    // fruity-berry-dark
    '블루베리':'fruity-berry-dark', '블랙베리':'fruity-berry-dark',
    // fruity-berry-red
    '라즈베리':'fruity-berry-red', '딸기':'fruity-berry-red',
    // fruity-citrus
    '오렌지':'fruity-citrus', '레몬':'fruity-citrus', '라임':'fruity-citrus',
    // fruity-tropical
    '망고스틴':'fruity-tropical', '패션프루츠':'fruity-tropical', '리치':'fruity-tropical',
    '그린 망고':'fruity-tropical', '바나나':'fruity-tropical', '멜론':'fruity-tropical',
    // fruity-grape
    '포도':'fruity-grape', '거봉':'fruity-grape',
    // fruity-grape-green
    '청포도':'fruity-grape-green',
    // floral (canonical 쟈스민, aliases handled by NOTE_ALIASES)
    '쟈스민':'floral', '꽃다발':'floral', '꽃사탕':'floral', '오렌지 블라썸':'floral',
    // floral-bergamot
    '베르가못':'floral-bergamot',
    // nutty-cocoa-light ('초콜릿' canonical — Phase 1 데이터 입력값. '밀크초콜릿'은 alias)
    '초콜릿':'nutty-cocoa-light', '견과류':'nutty-cocoa-light',
    // nutty-cocoa-dark
    '다크초콜릿':'nutty-cocoa-dark',
    // sweet-honey
    '허니':'sweet-honey',
    // sweet-caramel
    '시럽':'sweet-caramel', '다크캐러멜':'sweet-caramel', '황설탕':'sweet-caramel', '무화과':'sweet-caramel',
    // sweet-vanilla
    '바닐라':'sweet-vanilla',
    // sour-fermented
    '살구':'sour-fermented',
    // green-vegetative
    '레몬그라스':'green-vegetative',
    // tea
    '홍차':'tea',
    // mouthfeel
    '감칠맛':'mouthfeel', '맑은 단맛':'mouthfeel', '쥬시':'mouthfeel', '소다':'mouthfeel', '후르츠링':'mouthfeel',
  };

  // ============ WORD → EMOJI (specific, overrides category emoji) ============
  // Words with custom SVG are NOT listed here (SVG takes priority).
  const WORD_TO_EMOJI = {
    '체리':'🍒',
    '레몬':'🍋',
    '라임':'🍋‍🟩',
    '바나나':'🍌',
    '멜론':'🍈',
    '꽃다발':'💐',
    '꽃사탕':'🍬',
    '오렌지 블라썸':'🌼',
    '쟈스민':'🌼',
    '감칠맛':'🧂',
    '맑은 단맛':'💧',
    '쥬시':'💦',
    '소다':'🥤',
  };

  // ============ WORD SVG (20 custom designs) ============
  const WORD_SVG = {
    // === Phase 2-C 결정 2 (의미 불일치 fallback 수정 단어 SVG) ===
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
    '패션프루츠': [
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
    // === Phase 2-C 점검 후속 (단어 fallback 의미 불일치 수정) ===
    '초콜릿': [
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
    '허니': [
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
  };

  // ============ NOTE_ALIASES (variant → canonical Korean) ============
  const NOTE_ALIASES = {
    // 한국어 변형
    '자스민': '쟈스민',
    '재스민': '쟈스민',
    '제스민': '쟈스민',
    '제즈민': '쟈스민',
    '초콜렛': '초콜릿',
    '밀크초콜릿': '초콜릿',          // canonical은 '초콜릿'
    '밀크 초콜릿': '초콜릿',
    '다크 초콜릿': '다크초콜릿',
    '캐러멜': '다크캐러멜',  // 단순 "캐러멜"은 다크캐러멜로 정규화 (sweet-caramel 카테고리)
    '카라멜': '다크캐러멜',
    '꿀': '허니',
    'jasmine': '쟈스민',
    'peach': '복숭아',
    'yellow peach': '황도',
    'white peach': '백도',
    'plum': '자두',
    'cherry': '체리',
    'blueberry': '블루베리',
    'blackberry': '블랙베리',
    'raspberry': '라즈베리',
    'strawberry': '딸기',
    'fig': '무화과',
    'orange': '오렌지',
    'lemon': '레몬',
    'lime': '라임',
    'bergamot': '베르가못',
    'mangosteen': '망고스틴',
    'passionfruit': '패션프루츠',
    'passion fruit': '패션프루츠',
    'lychee': '리치',
    'green mango': '그린 망고',
    'banana': '바나나',
    'melon': '멜론',
    'grape': '포도',
    'green grape': '청포도',
    'kyoho': '거봉',
    'wine': '살구',  // 살구의 영문 alias가 wine인 이유: sour-fermented 매핑 (Phase 2-A 결정)
    'bouquet': '꽃다발',
    'orange blossom': '오렌지 블라썸',
    'chocolate': '초콜릿',
    'milk chocolate': '초콜릿',
    'dark chocolate': '다크초콜릿',
    'nuts': '견과류',
    'dark caramel': '다크캐러멜',
    'caramel': '다크캐러멜',
    'brown sugar': '황설탕',
    'syrup': '시럽',
    'honey': '허니',
    'vanilla': '바닐라',
    'black tea': '홍차',
    'lemongrass': '레몬그라스',
    'umami': '감칠맛',
    'savory': '감칠맛',
    'clean sweetness': '맑은 단맛',
    'juicy': '쥬시',
    'soda': '소다',
    'froot loops': '후르츠링',
    'flower candy': '꽃사탕',
  };

  // ============ HELPERS ============

  function normalizeNote(note) {
    if (!note) return '';
    const trimmed = String(note).trim();
    if (!trimmed) return '';
    // alias 우선 (대소문자 구분 — 영문 alias는 모두 lowercase 등록)
    if (NOTE_ALIASES[trimmed]) return NOTE_ALIASES[trimmed];
    const lower = trimmed.toLowerCase();
    if (NOTE_ALIASES[lower]) return NOTE_ALIASES[lower];
    return trimmed;
  }

  function getCategoryForNote(note) {
    const norm = normalizeNote(note);
    return WORD_TO_CAT[norm] || null;
  }

  function pickColor(category, mode) {
    const c = CATEGORY_COLORS[category];
    if (!c) return null;
    return mode === 'light' ? c.light : c.dark;
  }

  function pickEmoji(note) {
    const norm = normalizeNote(note);
    if (WORD_TO_EMOJI[norm]) return WORD_TO_EMOJI[norm];
    const cat = WORD_TO_CAT[norm];
    if (cat && CATEGORY_EMOJI[cat]) return CATEGORY_EMOJI[cat];
    return '✨';
  }

  function pickSvgLayers(note) {
    const norm = normalizeNote(note);
    if (WORD_SVG[norm]) return WORD_SVG[norm];
    const cat = WORD_TO_CAT[norm];
    if (cat && CATEGORY_SVG[cat]) return CATEGORY_SVG[cat];
    return null;
  }

  function escapeAttr(s) {
    return String(s).replace(/[&<>"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[ch]));
  }

  function renderSvgString(layers, size) {
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
  function resolveIconOrNull(note, size) {
    const norm = normalizeNote(note);
    if (!norm) return null;
    // 1. 단어 SVG
    if (WORD_SVG[norm]) return { type: 'svg', content: renderSvgString(WORD_SVG[norm], size) };
    // 2. 단어 전용 이모지
    if (WORD_TO_EMOJI[norm]) return { type: 'emoji', content: WORD_TO_EMOJI[norm] };
    // 3. 카테고리 SVG
    const cat = WORD_TO_CAT[norm];
    if (cat && CATEGORY_SVG[cat]) return { type: 'svg', content: renderSvgString(CATEGORY_SVG[cat], size) };
    // 4. 카테고리 이모지
    if (cat && CATEGORY_EMOJI[cat]) return { type: 'emoji', content: CATEGORY_EMOJI[cat] };
    // 매칭 없음
    return null;
  }

  // 통합 해석 (with fallback): 위 체인 + ✨ 최종 fallback
  function resolveIcon(note, size) {
    const r = resolveIconOrNull(note, size);
    if (r) return r;
    return { type: 'emoji', content: '✨' };
  }

  // ============ EXPORT ============
  if (typeof window !== 'undefined') {
    window.CupNotes = {
      CATEGORY_COLORS,
      CATEGORY_EMOJI,
      CATEGORY_SVG,
      WORD_TO_CAT,
      WORD_TO_EMOJI,
      WORD_SVG,
      NOTE_ALIASES,
      normalizeNote,
      getCategoryForNote,
      pickColor,
      pickEmoji,
      pickSvgLayers,
      renderSvgString,
      resolveIcon,
      resolveIconOrNull,
    };
  }
})();
