// OZY HOUSE — flavor icon extension v5
// Adds 50+ new colored SVG icons for the full hyper-real flavor taxonomy.
// Loaded AFTER icons-v4.js. Extends window.ICON_V4, BUCKETS_V4.

(function(){
  if (!window.ICON_V4) return;
  const ICON = window.ICON_V4;
  const BUCKETS = window.BUCKETS_V4;

  const add = (k, layers) => { ICON[k] = { layers }; };
  const bucket = (k, words) => BUCKETS.push([k, words]);

  // ── 1. FRUITY — CITRUS EXTENDED ──
  add('hallabong', [
    {d:'M4 13a8 7 0 1 0 16 0 8 7 0 0 0-16 0z', fill:'#ff8a1f', stroke:'#a84a08', sw:1.3},
    {d:'M11 4c1-1 3-1 4 1 M8 6c-1-2 1-4 3-3', stroke:'#ff8a1f', sw:1.4, fill:'none'},
    {d:'M12 6c0 4 0 10 0 13 M4 13h16', stroke:'#a84a08', sw:0.8, fill:'none'},
    {d:'M14 3c2-1 4 0 4 2', stroke:'#2a5a1a', sw:1.6, fill:'none'},
  ]);
  add('kumquat', [
    {d:'M7 10a2 3 0 1 0 4 0 2 3 0 0 0-4 0z', fill:'#ff9a1f', stroke:'#a84a08', sw:1.2},
    {d:'M13 13a2 3 0 1 0 4 0 2 3 0 0 0-4 0z', fill:'#ff9a1f', stroke:'#a84a08', sw:1.2},
    {d:'M9 7c1-2 3-2 4 0 M15 10c1-2 3-2 4 0', stroke:'#2a5a1a', sw:1.3, fill:'none'},
  ]);
  add('calamansi', [
    {d:'M5 13a7 6 0 1 0 14 0 7 6 0 0 0-14 0z', fill:'#c8d83a', stroke:'#6a8a1a', sw:1.3},
    {d:'M12 7c0 4 0 9 0 12 M5 13h14', stroke:'#6a8a1a', sw:0.8, fill:'none'},
    {d:'M15 7c1-1 2-1 3 0', stroke:'#2a5a1a', sw:1.4, fill:'none'},
  ]);
  add('sweetie', [
    {d:'M4 13a8 7 0 1 0 16 0 8 7 0 0 0-16 0z', fill:'#d4e07a', stroke:'#6a8a2a', sw:1.3},
    {d:'M12 6c0 4 0 10 0 13 M4 13h16 M7 9c3 1 7 1 10 0 M7 17c3-1 7-1 10 0', stroke:'#6a8a2a', sw:0.8, fill:'none'},
  ]);
  add('pinkGrapefruit', [
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:'#f08a7a', stroke:'#a8400a', sw:1.3},
    {d:'M12 4v16 M4 12h16 M6.3 6.3l11.4 11.4 M17.7 6.3L6.3 17.7', stroke:'#a8400a', sw:0.8},
    {d:'M12 12a2 2 0 1 0 0 0.01', fill:'#ffc8b8', stroke:'#a8400a', sw:0.8},
  ]);
  add('zest', [
    {d:'M4 10c3-3 7-3 10 0s7 3 10 0', stroke:'#f6cf3f', sw:2.6, fill:'none'},
    {d:'M5 14c3-2 7-2 10 0 M4 17c4-2 8-2 12 0', stroke:'#b5933a', sw:1.3, fill:'none'},
  ]);

  // ── BERRIES — RED/BLACK EXTENDED ──
  add('mulberry', [
    {d:'M12 4c-2 2-4 6-4 10 0 4 2 7 4 7s4-3 4-7c0-4-2-8-4-10z', fill:'#4a1030', stroke:'#2a0818', sw:1.3},
    {d:'M10 9a0.8 0.8 0 1 0 0 0.01 M14 9a0.8 0.8 0 1 0 0 0.01 M11 12a0.8 0.8 0 1 0 0 0.01 M13 12a0.8 0.8 0 1 0 0 0.01 M10 15a0.8 0.8 0 1 0 0 0.01 M14 15a0.8 0.8 0 1 0 0 0.01 M12 18a0.8 0.8 0 1 0 0 0.01', fill:'#8a2a55', stroke:'none'},
  ]);
  add('aronia', [
    {d:'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:'#1a0a18', stroke:'#3a1a30', sw:1.3},
    {d:'M10 11a0.7 0.7 0 1 0 0 0.01', fill:'#6a3a55', stroke:'none'},
    {d:'M12 8V5 M12 5c-1-1-3-1-3 0 M12 5c1-1 3-1 3 0', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('redcurrant', [
    {d:'M8 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M10 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#e01a28', stroke:'#8a0818', sw:1.2},
    {d:'M10 13V6 M14 15V6 M12 17V6 M10 6h4', stroke:'#6a4020', sw:1, fill:'none'},
  ]);
  add('goji', [
    {d:'M8 12c0-3 2-5 4-5s4 2 4 5-2 6-4 6-4-3-4-6z', fill:'#d62818', stroke:'#7a0a08', sw:1.3},
    {d:'M11 8c-1-2 1-4 1-4s2 2 1 4', stroke:'#4d7a2e', sw:1.3, fill:'none'},
    {d:'M10 11h4 M10 14h4', stroke:'#7a0a08', sw:0.7, fill:'none'},
  ]);
  add('wildstrawberry', [
    {d:'M12 21c-3 0-5-2-5-5 0-2 2-4 5-4s5 2 5 4c0 3-2 5-5 5z', fill:'#e03045', stroke:'#8a1a2a', sw:1.3},
    {d:'M8 8l1 2h6l1-2M12 7v3', fill:'#4d7a2e', stroke:'#4d7a2e', sw:1.3},
    {d:'M11 15 M13 17 M10 18', stroke:'#f8e27a', sw:1.6},
  ]);

  // ── STONE FRUIT ── (add yellow/white peach, prune, cherry syrup)
  add('whitePeach', [
    {d:'M12 21c-5 0-8-3-8-7 0-3 2-6 5-6 1 0 2 .4 3 1 1-.6 2-1 3-1 3 0 5 3 5 6 0 4-3 7-8 7z', fill:'#ffe0c8', stroke:'#d68a6a', sw:1.4},
    {d:'M11 5c1-2 3-2 4-1', stroke:'#4d7a2e', sw:1.4},
  ]);
  add('yellowPeach', [
    {d:'M12 21c-5 0-8-3-8-7 0-3 2-6 5-6 1 0 2 .4 3 1 1-.6 2-1 3-1 3 0 5 3 5 6 0 4-3 7-8 7z', fill:'#ffb54a', stroke:'#a8601a', sw:1.4},
    {d:'M11 5c1-2 3-2 4-1', stroke:'#4d7a2e', sw:1.4},
  ]);
  add('prune', [
    {d:'M11 21c-4 0-6-3-5-7 0-3 2-5 5-5s5 2 5 5c0 4-2 7-5 7z', fill:'#2a0818', stroke:'#5a1a30', sw:1.3},
    {d:'M12 16c-1-3 0-5 1-6', stroke:'#5a1a30', sw:0.9, fill:'none'},
    {d:'M11 8c-1-1-1-2 0-3 M13 6c1-1 1-2 0-3', stroke:'#5a3a24', sw:1.3, fill:'none'},
  ]);
  add('cherrySyrup', [
    {d:'M7 8h10l-1 11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z', fill:'#a01028', stroke:'#5a0818', sw:1.3},
    {d:'M8 12h8', stroke:'#c84050', sw:0.9, fill:'none'},
    {d:'M11 4l1-2 1 2', stroke:'#5a4027', sw:1.3, fill:'none'},
  ]);

  // ── TROPICAL EXTENDED ──
  add('mangosteen', [
    {d:'M6 13a6 6 0 1 0 12 0 6 6 0 0 0-12 0z', fill:'#4a1030', stroke:'#2a0818', sw:1.3},
    {d:'M10 9l-1-2M14 9l1-2M8 10l-2-1M16 10l2-1', stroke:'#4a7a2a', sw:1.4, fill:'none'},
    {d:'M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#f8f1d9', stroke:'#6a3a55', sw:1},
  ]);
  add('dragonfruit', [
    {d:'M8 6h8l-1 3 3 2-2 3 2 3-3 2 1 3H8l1-3-3-2 2-3-2-3 3-2z', fill:'#ec4f82', stroke:'#8a1a4a', sw:1.3},
    {d:'M10 12a0.6 0.6 0 1 0 0 0.01 M14 12a0.6 0.6 0 1 0 0 0.01 M12 14a0.6 0.6 0 1 0 0 0.01 M11 10a0.6 0.6 0 1 0 0 0.01', fill:'#1a0a18', stroke:'none'},
  ]);
  add('rambutan', [
    {d:'M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0z', fill:'#e03030', stroke:'#8a0818', sw:1.3},
    {d:'M5 8l2 2 M17 8l-2 2 M3 12l3 0 M21 12l-3 0 M5 16l2-2 M17 16l-2-2 M12 4v3 M12 20v-3 M8 4l2 2 M16 4l-2 2 M8 20l2-2 M16 20l-2-2', stroke:'#4d7a2e', sw:1.5, fill:'none'},
  ]);
  add('papaya', [
    {d:'M6 13c0-5 3-9 6-9 4 0 6 4 6 8 0 5-3 8-6 8-3 0-6-3-6-7z', fill:'#f58a3a', stroke:'#a84a0a', sw:1.3},
    {d:'M10 12a0.6 0.6 0 1 0 0 0.01 M12 14a0.6 0.6 0 1 0 0 0.01 M14 12a0.6 0.6 0 1 0 0 0.01 M12 10a0.6 0.6 0 1 0 0 0.01', fill:'#1a1008', stroke:'none'},
  ]);
  add('coconutWater', [
    {d:'M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3z', fill:'#f5efe2', stroke:'#8a5a3a', sw:1.3},
    {d:'M9 13h6 M9 16c1 1 5 1 6 0', stroke:'#8ab4e8', sw:1, fill:'none'},
    {d:'M5 5l-1 0 M13 3l0-1', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);

  // ── OTHER FRUIT ──
  add('bakedApple', [
    {d:'M12 21c-5 0-8-3-8-8 0-4 3-7 7-7 1 0 1 0 1 1 0-1 0-1 1-1 4 0 7 3 7 7 0 5-3 8-8 8z', fill:'#8a3a1a', stroke:'#3a1a0a', sw:1.3},
    {d:'M12 7V4 M12 4c2-2 4 0 4 2', stroke:'#3a1a0a', sw:1.3, fill:'none'},
    {d:'M8 10c1-1 2-1 3 0 M14 12c1-1 2-1 3 0', stroke:'#c4763a', sw:0.9, fill:'none'},
  ]);
  add('appleJam', [
    {d:'M7 8h10l-1 11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z', fill:'#b54020', stroke:'#5a1810', sw:1.3},
    {d:'M8 12h8 M9 16h6', stroke:'#c84050', sw:0.9, fill:'none'},
    {d:'M10 4h4l-1 4h-2z', fill:'#c8c8c8', stroke:'#5a1810', sw:1.3},
  ]);
  add('tomatoJuice', [
    {d:'M8 8h8l-1 12H9z', fill:'#e03030', stroke:'#6a0a08', sw:1.3},
    {d:'M10 10h4', stroke:'#2a5a1a', sw:1.8, fill:'none'},
    {d:'M8 12h8', stroke:'#8a1818', sw:0.9, fill:'none'},
  ]);
  add('cherryTomato', [
    {d:'M8 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:'#e03030', stroke:'#8a1010', sw:1.3},
    {d:'M10 11l-1-2 M12 11l0-3 M14 11l1-2 M10 11c2 0 2 0 4 0', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('pomegranate', [
    {d:'M12 21c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z', fill:'#c01830', stroke:'#6a0818', sw:1.3},
    {d:'M12 7V3 M10 4l1-1h2l1 1 M12 3l-1 2h2z', fill:'#6a3a24', stroke:'#3a1a0a', sw:1.3},
    {d:'M9 12a0.7 0.7 0 1 0 0 0.01 M12 11a0.7 0.7 0 1 0 0 0.01 M15 12a0.7 0.7 0 1 0 0 0.01 M10 15a0.7 0.7 0 1 0 0 0.01 M14 15a0.7 0.7 0 1 0 0 0.01', fill:'#ff4a5a', stroke:'none'},
  ]);
  add('shinemuscat', [
    {d:'M9 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M7 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M11 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M15 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M9 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M13 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M11 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#c8d83a', stroke:'#6a8a1a', sw:1.1},
    {d:'M11 5c-1-2 0-3 1-3s2 1 1 3', stroke:'#2a5a1a', sw:1.3, fill:'none'},
  ]);

  // ── 2. DESSERT & CANDY ──
  add('panela', [
    {d:'M5 9h14v9H5z', fill:'#8a4a1a', stroke:'#3a1808', sw:1.3},
    {d:'M5 9h14l-2-3H7z', fill:'#c4763a', stroke:'#3a1808', sw:1.3},
    {d:'M9 12h6 M9 15h6', stroke:'#6a3a0a', sw:0.8, fill:'none'},
  ]);
  add('jocheong', [
    {d:'M7 8h10l-1 11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z', fill:'#b56a1a', stroke:'#5a3010', sw:1.3},
    {d:'M9 4h6v4H9z', fill:'#b56a1a', stroke:'#5a3010', sw:1.3},
    {d:'M9 16c2 0 4-1 6 0', stroke:'#e3a11a', sw:0.9, fill:'none'},
  ]);
  add('toffee', [
    {d:'M5 8h14l-1 10H6z', fill:'#8a5418', stroke:'#3a1a08', sw:1.3},
    {d:'M7 11h10 M8 14h8', stroke:'#c4763a', sw:0.9, fill:'none'},
    {d:'M5 8l2-3h10l2 3', fill:'#c4763a', stroke:'#3a1a08', sw:1.3},
  ]);
  add('praline', [
    {d:'M6 9h12v9H6z', fill:'#8a4a1a', stroke:'#3a1808', sw:1.3},
    {d:'M9 12a1 1 0 1 0 0 0.01 M15 12a1 1 0 1 0 0 0.01 M12 15a1 1 0 1 0 0 0.01', fill:'#e0a56a', stroke:'#3a1808', sw:0.8},
  ]);
  add('dalgona', [
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:'#e09a3a', stroke:'#6a3a0a', sw:1.4},
    {d:'M9 10l2 2-2 2 M15 10l-2 2 2 2 M10 14l2 2M14 14l-2 2', stroke:'#6a3a0a', sw:1.1, fill:'none'},
  ]);
  add('syrup', [
    {d:'M9 4h6v4l2 3v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l2-3z', fill:'#a8601a', stroke:'#5a3010', sw:1.3},
    {d:'M9 13c1 1 5 1 6 0', stroke:'#f6cf3f', sw:0.9, fill:'none'},
  ]);
  add('agave', [
    {d:'M12 20c-4-2-7-7-7-11 2 0 4 2 5 4 0-3 1-6 2-9 1 3 2 6 2 9 1-2 3-4 5-4 0 4-3 9-7 11z', fill:'#a7c650', stroke:'#4a7a2a', sw:1.3},
  ]);

  // ── CHOCOLATE VARIATIONS ──
  add('ganache', [
    {d:'M4 10h16v8H4z', fill:'#2a1008', stroke:'#1a0804', sw:1.3},
    {d:'M4 10c2-2 4 0 6-2s4 2 6 0 2 2 4 2', fill:'#4a2010', stroke:'#1a0804', sw:1.3},
    {d:'M7 14h10', stroke:'#6a3a24', sw:0.9, fill:'none'},
  ]);
  add('cacaoButter', [
    {d:'M5 8h14l-1 10H6z', fill:'#f5e0b8', stroke:'#6a4a2a', sw:1.3},
    {d:'M6 12h12 M7 15h10', stroke:'#b58a5a', sw:0.8, fill:'none'},
  ]);
  add('brownie', [
    {d:'M4 10h16v8H4z', fill:'#3a1808', stroke:'#1a0804', sw:1.3},
    {d:'M7 12a0.7 0.7 0 1 0 0 0.01 M11 13a0.7 0.7 0 1 0 0 0.01 M15 12a0.7 0.7 0 1 0 0 0.01 M9 16a0.7 0.7 0 1 0 0 0.01 M13 16a0.7 0.7 0 1 0 0 0.01 M17 15a0.7 0.7 0 1 0 0 0.01', fill:'#6a3018', stroke:'none'},
  ]);
  add('whiteChoc', [
    {d:'M5 6h14v12H5z', fill:'#f5e8c8', stroke:'#8a6a3a', sw:1.3},
    {d:'M5 10h14 M5 14h14 M9 6v12 M15 6v12', stroke:'#c4a56a', sw:0.9, fill:'none'},
  ]);
  add('mintChoc', [
    {d:'M5 6h14v12H5z', fill:'#4a2818', stroke:'#1a0804', sw:1.3},
    {d:'M5 10h14 M5 14h14 M9 6v12 M15 6v12', stroke:'#7ac98a', sw:0.9, fill:'none'},
    {d:'M11 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z', fill:'#7ac98a', stroke:'none'},
  ]);

  // ── CANDY / BEVERAGE ──
  add('bubblegum', [
    {d:'M12 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z', fill:'#ff8ab8', stroke:'#c44a7a', sw:1.3},
    {d:'M15 7a1.5 1.5 0 1 0 0 0.01', fill:'#ffc8d8', stroke:'none'},
    {d:'M9 18l-1 3 M13 18l-1 3', stroke:'#c44a7a', sw:1.3, fill:'none'},
  ]);
  add('gummy', [
    {d:'M9 8a3 3 0 1 1 6 0c0 2-1 2-1 4l1 6H9l1-6c0-2-1-2-1-4z', fill:'#ff8a1f', stroke:'#a84008', sw:1.3},
    {d:'M11 12a0.5 0.5 0 1 0 0 0.01 M13 12a0.5 0.5 0 1 0 0 0.01', fill:'#3a1808', stroke:'none'},
  ]);
  add('jellybean', [
    {d:'M6 10c0-2 2-3 4-3h4c2 0 4 1 4 3v4c0 2-2 3-4 3h-4c-2 0-4-1-4-3z', fill:'#ec4f82', stroke:'#8a1a4a', sw:1.3},
    {d:'M8 10c1-1 3-1 4 0', stroke:'#fff', sw:1, fill:'none'},
  ]);
  add('scotchcandy', [
    {d:'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:'#c4763a', stroke:'#5a3010', sw:1.3},
    {d:'M4 12l4-1v2z M20 12l-4-1v2z', fill:'#e09a3a', stroke:'#5a3010', sw:1.3},
  ]);
  add('cola', [
    {d:'M7 6h10l-1 14H8z', fill:'#2a1008', stroke:'#0a0404', sw:1.3},
    {d:'M7 9h10', stroke:'#c4c4c4', sw:1.3, fill:'none'},
    {d:'M9 13a0.5 0.5 0 1 0 0 0.01 M12 15a0.5 0.5 0 1 0 0 0.01 M14 11a0.5 0.5 0 1 0 0 0.01', fill:'#c4c4c4', stroke:'none'},
  ]);
  add('heuktang', [
    {d:'M8 5h8l-1 4 2 3v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l2-3z', fill:'#f5efe2', stroke:'#3a2818', sw:1.3},
    {d:'M9 13h6 M9 15h6 M9 17h6', stroke:'#3a1a08', sw:1.4, fill:'none'},
    {d:'M11 9a0.6 0.6 0 1 0 0 0.01 M13 11a0.6 0.6 0 1 0 0 0.01', fill:'#3a1a08', stroke:'none'},
  ]);

  // ── BAKERY ──
  add('croissant', [
    {d:'M5 16c0-4 4-8 9-8 3 0 5 2 5 5 0 2-3 4-6 3-2-1-3-3-2-5-3 0-6 3-6 5z', fill:'#e0a56a', stroke:'#6a3a0a', sw:1.3},
    {d:'M8 14c2-2 4-3 6-3 M11 11c1-1 3-1 4 0', stroke:'#6a3a0a', sw:0.9, fill:'none'},
  ]);
  add('macaron', [
    {d:'M5 10c0-2 3-3 7-3s7 1 7 3v1H5z', fill:'#ec4f82', stroke:'#8a1a4a', sw:1.2},
    {d:'M5 13h14v2H5z', fill:'#f8e27a', stroke:'#8a1a4a', sw:1.2},
    {d:'M5 17c0 2 3 3 7 3s7-1 7-3v-1H5z', fill:'#ec4f82', stroke:'#8a1a4a', sw:1.2},
    {d:'M6 11c1-1 3 0 4-1 M14 18c1 1 3 0 4-1', stroke:'#fff', sw:0.7, fill:'none'},
  ]);
  add('cinnamonroll', [
    {d:'M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#c4763a', stroke:'#5a3010', sw:1.3},
    {d:'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', stroke:'#5a3010', sw:0.9, fill:'none'},
    {d:'M8 8c3-1 6-1 9 2', stroke:'#f5e0b8', sw:0.9, fill:'none'},
  ]);
  add('cheesecake', [
    {d:'M5 10h14l-2 9H7z', fill:'#f5e8a8', stroke:'#8a6a1a', sw:1.3},
    {d:'M5 10l7-5 7 5', fill:'#c4763a', stroke:'#5a3010', sw:1.3},
    {d:'M8 15a0.6 0.6 0 1 0 0 0.01 M12 14a0.6 0.6 0 1 0 0 0.01 M15 16a0.6 0.6 0 1 0 0 0.01', fill:'#8a1a4a', stroke:'none'},
  ]);
  add('tiramisu', [
    {d:'M5 9h14v10H5z', fill:'#f5e0b8', stroke:'#5a3010', sw:1.3},
    {d:'M5 12h14 M5 15h14', stroke:'#c4763a', sw:1.3, fill:'none'},
    {d:'M8 11a0.5 0.5 0 1 0 0 0.01 M12 14a0.5 0.5 0 1 0 0 0.01 M15 11a0.5 0.5 0 1 0 0 0.01', fill:'#3a1808', stroke:'none'},
  ]);
  add('waffle', [
    {d:'M5 5h14v14H5z', fill:'#e0a56a', stroke:'#6a3a0a', sw:1.3},
    {d:'M5 9h14 M5 13h14 M5 17h14 M9 5v14 M13 5v14 M17 5v14', stroke:'#6a3a0a', sw:0.9, fill:'none'},
  ]);
  add('cookiedough', [
    {d:'M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0z', fill:'#e8c878', stroke:'#6a4a1a', sw:1.3},
    {d:'M8 11a0.8 0.8 0 1 0 0 0.01 M13 12a0.8 0.8 0 1 0 0 0.01 M10 15a0.8 0.8 0 1 0 0 0.01 M15 15a0.8 0.8 0 1 0 0 0.01', fill:'#3a1808', stroke:'none'},
  ]);

  // ── 3. NUTS / CEREAL / ROASTED ──
  add('pistachio', [
    {d:'M7 13a5 5 0 1 0 10 0 5 5 0 0 0-10 0z', fill:'#b5c478', stroke:'#5a6a2a', sw:1.3},
    {d:'M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:'#6a8a3a', stroke:'#3a4a1a', sw:1},
    {d:'M8 9l-1-2', stroke:'#5a6a2a', sw:1.3, fill:'none'},
  ]);
  add('almond', [
    {d:'M12 4c-2 0-4 3-4 7s2 9 4 9 4-5 4-9-2-7-4-7z', fill:'#e0a56a', stroke:'#6a3a0a', sw:1.3},
    {d:'M12 6c-1 3-1 9 0 13', stroke:'#6a3a0a', sw:0.9, fill:'none'},
  ]);
  add('pineNut', [
    {d:'M10 8c0-2 2-3 4-2s2 4 0 6-4 4-5 6-1 3 1 3c3 0 6-3 6-7S13 7 10 8z', fill:'#e8d8a8', stroke:'#8a6a3a', sw:1.3},
  ]);
  add('gingko', [
    {d:'M12 20c-2-4-4-7-4-10s1-6 4-6 4 3 4 6-2 6-4 10z', fill:'#e8d54a', stroke:'#8a6a1a', sw:1.3},
    {d:'M12 14v6', stroke:'#8a6a1a', sw:0.9, fill:'none'},
  ]);
  add('chestnut', [
    {d:'M6 12c0-4 3-7 6-7s6 3 6 7-3 8-6 8-6-4-6-8z', fill:'#6a3a18', stroke:'#2a1008', sw:1.3},
    {d:'M8 15c2 1 6 1 8 0', stroke:'#e8d8a8', sw:1.3, fill:'none'},
    {d:'M12 5V3', stroke:'#2a1008', sw:1.3, fill:'none'},
  ]);
  add('roastedChestnut', [
    {d:'M6 12c0-4 3-7 6-7s6 3 6 7-3 8-6 8-6-4-6-8z', fill:'#3a1808', stroke:'#1a0804', sw:1.3},
    {d:'M9 9l1 1 M14 9l-1 1 M8 12a3 2 0 0 1 8 0', stroke:'#c4763a', sw:0.9, fill:'none'},
  ]);
  add('peanutButter', [
    {d:'M7 7h10v2l1 3-1 2v7H7v-7l-1-2 1-3z', fill:'#c4923a', stroke:'#5a3010', sw:1.3},
    {d:'M9 11c1-1 3 1 4 0s3 1 4 0', stroke:'#8a6020', sw:1, fill:'none'},
  ]);
  add('popcorn', [
    {d:'M7 10h10l-1 10H8z', fill:'#c4763a', stroke:'#6a3818', sw:1.3},
    {d:'M8 10c-1-3 1-5 3-4 0-2 3-2 3 0 1-2 4-1 4 1s-2 3-4 3H8z', fill:'#f6dd7a', stroke:'#8a6018', sw:1.3},
  ]);
  add('granola', [
    {d:'M5 10l7-5 7 5v6l-7 4-7-4z', fill:'#c49a5a', stroke:'#6a4a2a', sw:1.3},
    {d:'M8 11l4-2 4 2 M8 14l4-2 4 2', stroke:'#6a4a2a', sw:0.8, fill:'none'},
    {d:'M9 13a0.5 0.5 0 1 0 0 0.01 M14 14a0.5 0.5 0 1 0 0 0.01', fill:'#3a1808', stroke:'none'},
  ]);
  add('misugaru', [
    {d:'M8 5h8l-1 3 2 3v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l2-3z', fill:'#c4923a', stroke:'#5a3010', sw:1.3},
    {d:'M9 13c1 1 5 1 6 0 M9 16h6', stroke:'#8a6020', sw:0.9, fill:'none'},
  ]);
  add('cornsilk', [
    {d:'M8 6h8l-1 14H9z', fill:'#f0d48a', stroke:'#8a6020', sw:1.3},
    {d:'M10 4c-1-2 0-3 2-3s3 1 2 3', stroke:'#c4923a', sw:1.3, fill:'none'},
  ]);
  add('yulmu', [
    {d:'M12 21V4 M9 8c1 1 3 1 3-1 M15 11c-1 1-3 1-3-1 M9 14c1 1 3 1 3-1 M15 17c-1 1-3 1-3-1', stroke:'#c4923a', sw:1.6, fill:'none'},
  ]);
  add('perilla', [
    {d:'M12 21c-4 0-7-3-7-7 2-1 4 0 5 2 0-3 1-6 2-9 1 3 2 6 2 9 1-2 3-3 5-2 0 4-3 7-7 7z', fill:'#4d6a2a', stroke:'#2a3a1a', sw:1.3},
    {d:'M12 8v13', stroke:'#2a3a1a', sw:0.8, fill:'none'},
  ]);
  add('sesame', [
    {d:'M8 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#e8d0a0', stroke:'#8a6a3a', sw:1.2},
  ]);
  add('roastedbean', [
    {d:'M8 10c0-3 2-5 4-5s4 2 4 5-2 8-4 8-4-5-4-8z', fill:'#3a1808', stroke:'#1a0804', sw:1.3},
    {d:'M12 6c-1 4-1 8 0 12', stroke:'#6a3018', sw:0.9, fill:'none'},
  ]);
  add('sweetpotato', [
    {d:'M6 11c0-3 2-5 5-5 1 0 2 0 3-1 2-1 4 0 4 2 0 3-1 6-4 9-2 2-5 3-7 2-2-2-1-5 0-7z', fill:'#a84a3a', stroke:'#5a1a18', sw:1.3},
    {d:'M9 13c1-1 3-1 4 0 M12 17c1-1 3-1 4 0', stroke:'#5a1a18', sw:0.8, fill:'none'},
  ]);
  add('toast', [
    {d:'M5 6h14v12H5z', fill:'#e0a56a', stroke:'#6a3a0a', sw:1.3},
    {d:'M5 6h14v4H5z', fill:'#c4763a', stroke:'none'},
    {d:'M8 8a0.5 0.5 0 1 0 0 0.01 M12 8a0.5 0.5 0 1 0 0 0.01 M16 8a0.5 0.5 0 1 0 0 0.01', fill:'#6a3a0a', stroke:'none'},
  ]);
  add('ash', [
    {d:'M5 18h14v3H5z', fill:'#6a6a6a', stroke:'#3a3a3e', sw:1.3},
    {d:'M7 16l2-1 3 1 3-1 3 1', stroke:'#3a3a3e', sw:1.1, fill:'none'},
    {d:'M9 14a0.5 0.5 0 1 0 0 0.01 M14 13a0.5 0.5 0 1 0 0 0.01', fill:'#aab0b8', stroke:'none'},
  ]);
  add('cigar', [
    {d:'M3 11h16v3H3z', fill:'#5a3a1a', stroke:'#1a1008', sw:1.3},
    {d:'M19 12l3-2 M19 12l3 2 M19 12h3', stroke:'#ff5a1f', sw:1.3, fill:'none'},
    {d:'M3 12l18 0', stroke:'#8a5a2a', sw:0.5, fill:'none'},
  ]);
  add('burntSugar', [
    {d:'M5 9h14v9H5z', fill:'#1a0804', stroke:'#0a0404', sw:1.3},
    {d:'M7 11h2v2H7z M11 11h2v2h-2z M15 11h2v2h-2z M9 14h2v2H9z M13 14h2v2h-2z', fill:'#6a3018', stroke:'none'},
  ]);

  // ── 4. FLORAL / TEA ──
  add('dlgug', [  // 들국화 wild chrysanthemum
    {d:'M12 7a2 2 0 1 0 0 0.01', fill:'#e08018', stroke:'#8a4a10', sw:1.2},
    {d:'M12 4a2 2 0 0 1 0 4 M12 14a2 2 0 0 1 0-4 M7 9a2 2 0 0 1 4 0 M17 9a2 2 0 0 1-4 0 M8 13l3-2 M16 13l-3-2', fill:'#fff', stroke:'#d0c090', sw:1.2},
    {d:'M12 10v11', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('freesia', [
    {d:'M12 3c-1 3-3 5-3 7 0 3 1 4 3 4s3-1 3-4c0-2-2-4-3-7z', fill:'#f5e0b8', stroke:'#a88a3a', sw:1.3},
    {d:'M9 12c2 1 4 1 6 0', stroke:'#a88a3a', sw:0.9, fill:'none'},
    {d:'M12 14v7', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('hydrangea', [
    {d:'M8 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M6 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M14 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M8 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#8ab4e8', stroke:'#3a5aa8', sw:1},
  ]);
  add('rosehip', [
    {d:'M7 14a5 5 0 1 0 10 0 5 5 0 0 0-10 0z', fill:'#c42028', stroke:'#6a0808', sw:1.3},
    {d:'M12 9V5 M9 5l1-1h4l1 1 M12 5c-1 1 0 3 0 3z', fill:'#4d7a2e', stroke:'#2a3a1a', sw:1.3},
  ]);
  add('osmanthus', [
    {d:'M10 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M13 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M11 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M9 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z M11 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z', fill:'#f8c838', stroke:'#a8700a', sw:1},
    {d:'M17 18c-2-1-3-3-3-5', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('lilac', [
    {d:'M10 6a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M12 6a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M9 9a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M13 9a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M11 11a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z', fill:'#c8a8e0', stroke:'#6a4a8a', sw:1},
    {d:'M12 13v8', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('lilyvalley', [
    {d:'M11 6a1.5 2 0 1 0 3 0 1.5 2 0 0 0-3 0z M9 10a1.5 2 0 1 0 3 0 1.5 2 0 0 0-3 0z M13 11a1.5 2 0 1 0 3 0 1.5 2 0 0 0-3 0z', fill:'#fff', stroke:'#8a8a8a', sw:1},
    {d:'M12 4V2 M12 4c0 6 0 12 0 18', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]);
  add('lotus', [
    {d:'M12 6a2 4 0 1 0 0 0.01 M6 12a4 2 0 0 1 6 0 M18 12a4 2 0 0 0-6 0 M12 14a2 4 0 1 0 0 0.01', fill:'#ffc8d8', stroke:'#c44a7a', sw:1.2},
    {d:'M12 12a1 1 0 1 0 0 0.01', fill:'#f8e27a', stroke:'#a87010', sw:1},
  ]);
  add('plumBlossom', [
    {d:'M10 8a2 2 0 1 0 0 0.01 M14 8a2 2 0 1 0 0 0.01 M8 12a2 2 0 1 0 0 0.01 M16 12a2 2 0 1 0 0 0.01 M12 16a2 2 0 1 0 0 0.01', fill:'#ffc8d8', stroke:'#a8407a', sw:1.2},
    {d:'M12 12a0.6 0.6 0 1 0 0 0.01', fill:'#f8e27a', stroke:'none'},
  ]);
  add('orangeblossom', [
    {d:'M12 4a4 4 0 0 1 0 8z M12 20a4 4 0 0 1 0-8z M4 12a4 4 0 0 1 8 0z M20 12a4 4 0 0 1-8 0z', fill:'#fff', stroke:'#e0a868', sw:1.2},
    {d:'M12 12a1.2 1.2 0 1 0 0 0.01', fill:'#ff8a1f', stroke:'none'},
  ]);
  add('rooibos', [
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M19 12h3v3h-3', fill:'#c44a1a', stroke:'#5a1808', sw:1.3},
    {d:'M7 13c2 1 8 1 10 0', stroke:'#e06a3a', sw:1, fill:'none'},
  ]);
  add('peppermint', [
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M19 12h3v3h-3', fill:'#b5d4a0', stroke:'#3a5a1a', sw:1.3},
    {d:'M9 5c0 2 3 2 3 4 M13 5c0 2 3 2 3 4', stroke:'#3a5a1a', sw:1.2, fill:'none'},
  ]);
  add('matcha', [
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z', fill:'#7a9a1a', stroke:'#3a5a0a', sw:1.3},
    {d:'M7 13c2 1 8 1 10 0', stroke:'#c6ff3d', sw:1, fill:'none'},
  ]);
  add('hojicha', [
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z', fill:'#8a5a1a', stroke:'#3a2010', sw:1.3},
    {d:'M7 13c2 1 8 1 10 0', stroke:'#c4763a', sw:1, fill:'none'},
  ]);
  add('mate', [
    {d:'M6 10h8v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z', fill:'#5a3a1a', stroke:'#2a1008', sw:1.3},
    {d:'M15 12v3 M15 13c2 0 3 1 3 3s-1 3-3 3', stroke:'#2a1008', sw:1.3, fill:'none'},
    {d:'M8 13c1 1 4 1 5 0', stroke:'#6a8a1a', sw:1, fill:'none'},
  ]);
  add('blackTea', [
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M19 12h3v3h-3', fill:'#6a3018', stroke:'#2a1008', sw:1.3},
    {d:'M7 13c2 1 8 1 10 0', stroke:'#3a1a08', sw:1, fill:'none'},
  ]);

  // ── 5. SPICE / VEGETAL ──
  add('pinkpepper', [
    {d:'M9 9a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M12 11a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M8 13a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M14 14a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z M10 16a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z', fill:'#e03050', stroke:'#8a1030', sw:1},
  ]);
  add('coriander', [
    {d:'M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0z', fill:'#c4a56a', stroke:'#5a3818', sw:1.3},
    {d:'M8 10c2 1 6 1 8 0 M8 14c2 1 6 1 8 0 M12 7v10', stroke:'#5a3818', sw:0.8, fill:'none'},
  ]);
  add('curry', [
    {d:'M5 10h14l-1 9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z', fill:'#e09a1a', stroke:'#6a3a08', sw:1.3},
    {d:'M8 13c2-1 4 1 6 0s2 1 4 0', stroke:'#c4763a', sw:1, fill:'none'},
    {d:'M11 6c-1-2 1-3 1-3s2 1 1 3', stroke:'#6a3a08', sw:1.3, fill:'none'},
  ]);
  add('saffron', [
    {d:'M12 4c-1 3-3 5-3 8 0 3 1 5 3 5s3-2 3-5c0-3-2-5-3-8z', fill:'#e06a1a', stroke:'#8a2a08', sw:1.3},
    {d:'M8 12c-1 2-1 4 1 6 M16 12c1 2 1 4-1 6 M12 17v4', stroke:'#8a2a08', sw:1.3, fill:'none'},
  ]);
  add('licorice', [
    {d:'M12 3l2 4h4l-3 3 1 5-4-2-4 2 1-5-3-3h4z', fill:'#2a1008', stroke:'#0a0404', sw:1.3},
  ]);
  add('vanillabean', [
    {d:'M10 3c0 6-2 12-4 18 M14 3c0 6 2 12 4 18 M10 3h4', fill:'none', stroke:'#1a0804', sw:1.5},
    {d:'M11 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0z M11 13a0.7 0.7 0 1 0 0 0.01 M13 17a0.7 0.7 0 1 0 0 0.01', fill:'#1a0804', stroke:'none'},
    {d:'M9 11c2 1 4 1 6 0', stroke:'#4a2818', sw:1.4, fill:'none'},
  ]);
  add('dill', [
    {d:'M12 21V3 M12 7l-4 2 M12 7l4 2 M12 11l-4 2 M12 11l4 2 M12 15l-4 2 M12 15l4 2', stroke:'#6a9a3a', sw:1.5, fill:'none'},
  ]);
  add('eucalyptus', [
    {d:'M12 21V3 M8 7a3 3 0 0 0 4 0 M16 9a3 3 0 0 0-4 0 M8 11a3 3 0 0 0 4 0 M16 13a3 3 0 0 0-4 0 M8 15a3 3 0 0 0 4 0 M16 17a3 3 0 0 0-4 0', fill:'#a0b8a0', stroke:'#4a6a4a', sw:1.3},
  ]);
  add('pine', [
    {d:'M12 21V3 M12 4l-4 3 M12 4l4 3 M12 8l-5 4 M12 8l5 4 M12 13l-6 4 M12 13l6 4', stroke:'#2a5a3a', sw:1.5, fill:'none'},
  ]);
  add('sancho', [
    {d:'M8 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M12 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0z M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:'#8a6a1a', stroke:'#3a2808', sw:1.1},
    {d:'M9 8c-1-2 1-3 3-3', stroke:'#4a6a2a', sw:1.3, fill:'none'},
  ]);
  add('cucumber', [
    {d:'M5 14c0-5 4-9 8-9s8 2 8 4-4 4-8 4-8 5-8 1z', fill:'#6a9a3a', stroke:'#2a4a1a', sw:1.3},
    {d:'M8 11l1-1 M12 10l1-1 M16 9l1-1', stroke:'#a0c868', sw:0.9, fill:'none'},
  ]);
  add('zucchini', [
    {d:'M5 15c0-4 5-10 10-10 2 0 4 1 4 3s-2 4-6 6-8 4-8 1z', fill:'#4a7a2a', stroke:'#1a3a08', sw:1.3},
    {d:'M12 9c-1 0-2 1-3 2', stroke:'#7aa84a', sw:0.9, fill:'none'},
  ]);
  add('carrot', [
    {d:'M7 12l3-8 8 3-10 12z', fill:'#ff8a1f', stroke:'#a84008', sw:1.3},
    {d:'M10 4c-1-2 0-3 1-3 M12 3c0-2 2-3 3-2 M14 5c1-2 3-2 4-1', stroke:'#4d7a2e', sw:1.5, fill:'none'},
  ]);
  add('celery', [
    {d:'M9 4h2v17H9z M12 6h2v15h-2z M15 5h2v16h-2z', fill:'#a0c868', stroke:'#3a5a1a', sw:1.3},
    {d:'M9 4c-1-1 0-2 1-2 M12 6c-1-2 0-3 1-3 M15 5c-1-2 0-3 1-3', stroke:'#4a7a2a', sw:1.3, fill:'none'},
  ]);

  // ── 6. DAIRY / ALCOHOL / FERMENT ──
  add('brownButter', [
    {d:'M5 8h14l-2 10H7z', fill:'#c4763a', stroke:'#5a3010', sw:1.3},
    {d:'M6 12h12 M7 15h10', stroke:'#6a3818', sw:0.9, fill:'none'},
  ]);
  add('creamcheese', [
    {d:'M5 8h14l-2 10H7z', fill:'#f8f3e6', stroke:'#8a8580', sw:1.3},
    {d:'M8 11a0.6 0.6 0 1 0 0 0.01 M14 13a0.6 0.6 0 1 0 0 0.01', fill:'#a89880', stroke:'none'},
  ]);
  add('condensedMilk', [
    {d:'M6 6h12v3l-1 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6l-1-2z', fill:'#f5e8b8', stroke:'#8a6a1a', sw:1.3},
    {d:'M8 12h8', stroke:'#c4a56a', sw:0.9, fill:'none'},
  ]);
  add('cream', [
    {d:'M7 10c0-4 10-4 10 0v8H7z', fill:'#fdfaf0', stroke:'#a89880', sw:1.3},
    {d:'M8 13c1-1 3-1 4 0s3-1 4 0', stroke:'#a89880', sw:0.9, fill:'none'},
  ]);
  add('greekYogurt', [
    {d:'M6 8h12l-1 12H7z', fill:'#f8f3e6', stroke:'#6a6058', sw:1.3},
    {d:'M8 11h8 M9 14c1 1 4 1 6 0', stroke:'#a89880', sw:0.9, fill:'none'},
  ]);
  add('sourCream', [
    {d:'M7 10h10l-1 10H8z', fill:'#f5f0e0', stroke:'#8a8080', sw:1.3},
    {d:'M8 13c2 1 4-1 6 0s1 1 2 0', stroke:'#a89880', sw:0.9, fill:'none'},
  ]);
  add('milkshake', [
    {d:'M8 6h8l-1 4 2 3v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6l2-3z', fill:'#ffc8d8', stroke:'#8a4a6a', sw:1.3},
    {d:'M13 4c0-2 1-3 1-4 M10 12c1 1 3 1 4 0', stroke:'#c44a7a', sw:1.3, fill:'none'},
  ]);
  add('pinacolada', [
    {d:'M7 6h10l-4 6v6h-2v-6z', fill:'#f5e8b8', stroke:'#6a3a0a', sw:1.3},
    {d:'M9 5c-1-3 3-5 3-2 2-3 5-1 4 2', stroke:'#4d7a2e', sw:1.5, fill:'none'},
  ]);
  add('mojito', [
    {d:'M7 7h10l-1 13H8z', fill:'#c6ff9a', stroke:'#2a4a08', sw:1.3},
    {d:'M9 10a0.6 0.6 0 1 0 0 0.01 M14 12a0.6 0.6 0 1 0 0 0.01 M11 15a0.6 0.6 0 1 0 0 0.01', fill:'#2a4a08', stroke:'none'},
    {d:'M10 4c0 3 3 3 3 6', stroke:'#a0a0a0', sw:1, fill:'none'},
  ]);
  add('vinchaud', [
    {d:'M6 10h10v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z M16 12h3v3h-3', fill:'#6b1a3a', stroke:'#3a0a1a', sw:1.3},
    {d:'M10 5c0 2 0 3-1 4 M13 5c0 2 0 3-1 4', stroke:'#8a5a20', sw:1.2, fill:'none'},
  ]);
  add('icewine', [
    {d:'M8 3h8v6a4 4 0 0 1-8 0z M12 13v7 M8 20h8', fill:'#f0c868', stroke:'#6a4a10', sw:1.3},
    {d:'M10 7a0.5 0.5 0 1 0 0 0.01 M14 8a0.5 0.5 0 1 0 0 0.01', fill:'#fff', stroke:'none'},
  ]);
  add('ipa', [
    {d:'M7 7h8v13H7z M15 9h3v6h-3', fill:'#e09a1a', stroke:'#6a3a08', sw:1.3},
    {d:'M7 7c2-2 6-2 8 0', stroke:'#fff', sw:1.3, fill:'none'},
  ]);
  add('stoutBeer', [
    {d:'M7 7h8v13H7z M15 9h3v6h-3', fill:'#1a0804', stroke:'#0a0404', sw:1.3},
    {d:'M7 7c2-2 6-2 8 0', stroke:'#c4a56a', sw:1.3, fill:'none'},
  ]);
  add('makgeolli', [
    {d:'M8 5h8l-1 4 2 3v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l2-3z', fill:'#f5efe2', stroke:'#8a7a60', sw:1.3},
    {d:'M9 13h6 M9 15h6 M9 17h6', stroke:'#c4b098', sw:0.9, fill:'none'},
  ]);
  add('portwine', [
    {d:'M8 3h8v6a4 4 0 0 1-8 0z M12 13v7 M8 20h8', fill:'#4a0a1a', stroke:'#1a0408', sw:1.3},
  ]);
  add('gin', [
    {d:'M7 8h10l-1 12H8z', fill:'#e0f4f8', stroke:'#6a8a98', sw:1.3},
    {d:'M9 12c1 1 2-1 3 0s2-1 3 0 2-1 2 0', stroke:'#6a8a98', sw:0.9, fill:'none'},
  ]);
  add('peatWhisky', [
    {d:'M7 8h10l-1 12H8z', fill:'#6a3010', stroke:'#2a1008', sw:1.3},
    {d:'M9 12h6 M8.5 16h7', stroke:'#3a3a3e', sw:0.9, fill:'none'},
    {d:'M12 4c-1 1 0 3-1 4 M13 4c1 1 0 3 1 4', stroke:'#8a8580', sw:1.3, fill:'none'},
  ]);
  add('balsamic', [
    {d:'M9 4h6v3l2 3v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l2-3z', fill:'#1a0804', stroke:'#0a0404', sw:1.3},
    {d:'M9 13h6', stroke:'#4a1a08', sw:0.9, fill:'none'},
  ]);
  add('appleVinegar', [
    {d:'M9 4h6v3l2 3v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l2-3z', fill:'#e0a050', stroke:'#6a3a08', sw:1.3},
    {d:'M9 13h6', stroke:'#6a3a08', sw:0.9, fill:'none'},
  ]);
  add('kombucha', [
    {d:'M8 4h8v4l2 3v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7l2-3z', fill:'#c47a3a', stroke:'#5a3010', sw:1.3},
    {d:'M9 13a0.5 0.5 0 1 0 0 0.01 M13 11a0.5 0.5 0 1 0 0 0.01 M11 15a0.5 0.5 0 1 0 0 0.01 M14 15a0.5 0.5 0 1 0 0 0.01', fill:'#f5e0b8', stroke:'none'},
  ]);

  // ── 7. SAVORY / MINERAL ──
  add('dasima', [
    {d:'M5 4c2 3 2 7 0 10 M5 10c2 3 2 7 0 10 M8 3c2 3 2 7 0 10 M8 9c2 3 2 7 0 10 M11 4c2 3 2 7 0 10 M11 10c2 3 2 7 0 10', stroke:'#1a3a18', sw:2, fill:'none'},
  ]);
  add('soysauce', [
    {d:'M9 4h6v4l2 3v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l2-3z', fill:'#1a0804', stroke:'#0a0404', sw:1.3},
    {d:'M10 13h4', stroke:'#5a2810', sw:0.9, fill:'none'},
  ]);
  add('miso', [
    {d:'M5 10h14l-2 9H7z', fill:'#8a5418', stroke:'#3a1808', sw:1.3},
    {d:'M7 14c2-1 4 1 6 0s4 1 4 0', stroke:'#6a3010', sw:0.9, fill:'none'},
    {d:'M11 13a0.5 0.5 0 1 0 0 0.01 M14 15a0.5 0.5 0 1 0 0 0.01', fill:'#c4923a', stroke:'none'},
  ]);
  add('tomatoPaste', [
    {d:'M6 10h12l-1 9H7z', fill:'#a01818', stroke:'#4a0808', sw:1.3},
    {d:'M8 13h8 M9 16h6', stroke:'#6a0a08', sw:0.8, fill:'none'},
  ]);
  add('grilledmeat', [
    {d:'M5 9c0-2 3-3 7-3s7 1 7 3v6c0 2-3 3-7 3s-7-1-7-3z', fill:'#8a3a1a', stroke:'#3a0f08', sw:1.3},
    {d:'M8 10c2 1 6 1 8 0 M8 13c2 1 6 1 8 0 M8 16c2 1 6 1 8 0', stroke:'#3a0f08', sw:1, fill:'none'},
  ]);
  add('salty', [
    {d:'M5 10h14v8H5z', fill:'#f5efe2', stroke:'#6a6058', sw:1.3},
    {d:'M8 12a0.5 0.5 0 1 0 0 0.01 M11 13a0.5 0.5 0 1 0 0 0.01 M14 12a0.5 0.5 0 1 0 0 0.01 M16 15a0.5 0.5 0 1 0 0 0.01 M10 16a0.5 0.5 0 1 0 0 0.01 M13 16a0.5 0.5 0 1 0 0 0.01', fill:'#a89880', stroke:'none'},
  ]);
  add('seasalt', [
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:'#e0eef4', stroke:'#6a8a98', sw:1.3},
    {d:'M7 12c2-2 4 2 5 0s3 2 5 0', stroke:'#6a8a98', sw:1, fill:'none'},
    {d:'M9 14a0.4 0.4 0 1 0 0 0.01 M13 15a0.4 0.4 0 1 0 0 0.01 M15 13a0.4 0.4 0 1 0 0 0.01', fill:'#fff', stroke:'#6a8a98', sw:0.8},
  ]);
  add('spring', [
    {d:'M6 9h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z', fill:'#8ab4e8', stroke:'#2847a8', sw:1.3},
    {d:'M9 13c1-1 2 1 3 0s2 1 3 0', stroke:'#fff', sw:1, fill:'none'},
  ]);
  add('humus', [
    {d:'M3 16h18v5H3z', fill:'#3a2008', sw:1.3, stroke:'#1a1004'},
    {d:'M5 14l2-1 3 1 3-1 3 1 3-1', stroke:'#5a3a1a', sw:1, fill:'none'},
    {d:'M7 12a0.5 0.5 0 1 0 0 0.01 M14 10a0.5 0.5 0 1 0 0 0.01 M11 8a0.5 0.5 0 1 0 0 0.01', fill:'#4a7a2a', stroke:'none'},
  ]);
  add('wetsoil', [
    {d:'M3 16h18v5H3z', fill:'#2a1408', stroke:'#0a0404', sw:1.3},
    {d:'M5 14l2-1 3 1 3-1 3 1 3-1', stroke:'#5a3a1a', sw:1, fill:'none'},
    {d:'M8 13a0.3 0.3 0 1 0 0 0.01 M11 12a0.3 0.3 0 1 0 0 0.01 M14 14a0.3 0.3 0 1 0 0 0.01', fill:'#8ab4e8', stroke:'none'},
  ]);
  add('flint', [
    {d:'M5 20l3-12 4 3 3-8 5 17z', fill:'#5a5a5a', stroke:'#1a1a1a', sw:1.3},
    {d:'M17 8l2-2 M19 6l1 1', stroke:'#fff', sw:1.3, fill:'none'},
  ]);
  add('wetwood', [
    {d:'M3 9h18v6H3z', fill:'#4a2810', stroke:'#1a1008', sw:1.3},
    {d:'M6 10c1 2 0 4-1 4 M12 10c1 2 0 4-1 4 M18 10c1 2 0 4-1 4', stroke:'#2a1004', sw:0.9, fill:'none'},
    {d:'M8 12a0.4 0.4 0 1 0 0 0.01 M14 13a0.4 0.4 0 1 0 0 0.01', fill:'#8ab4e8', stroke:'none'},
  ]);
  add('leather', [
    {d:'M5 7h14v11H5z', fill:'#7a4018', stroke:'#3a1808', sw:1.3},
    {d:'M7 10c2 1 8 1 10 0 M7 13c2 1 8 1 10 0 M7 16c2 1 8 1 10 0', stroke:'#5a2a08', sw:0.7, fill:'none'},
  ]);

  // ── KEYWORD BUCKETS ── (Prepended so they win before older catch-alls)
  const NEW = [
    // citrus extended
    ['hallabong',     ['한라봉','천혜향','레드향','hallabong']],
    ['kumquat',       ['금귤','낑깡','kumquat']],
    ['calamansi',     ['깔라만시','calamansi','kalamansi']],
    ['sweetie',       ['스위티','sweetie','oroblanco']],
    ['pinkGrapefruit',['핑크자몽','핑크 자몽','pink grapefruit','ruby grapefruit']],
    ['zest',          ['레몬껍질','제스트','zest','citrus zest','lemon peel']],
    // berry extended
    ['mulberry',      ['오디','뽕나무 열매','뽕나무열매','mulberry','black mulberry']],
    ['aronia',        ['아로니아','aronia','chokeberry']],
    ['redcurrant',    ['레드커런트','화이트커런트','red currant','white currant']],
    ['goji',          ['구기자','goji','goji berry','wolfberry']],
    ['wildstrawberry',['야생딸기','야생 딸기','wild strawberry','fraises des bois']],
    // stone fruit
    ['whitePeach',    ['백도','white peach']],
    ['yellowPeach',   ['황도','yellow peach']],
    ['prune',         ['프룬','건자두','prune','dried plum']],
    ['cherrySyrup',   ['체리시럽','체리 시럽','체리콕','체리 콕','cherry syrup','cherry cola']],
    // tropical
    ['mangosteen',    ['망고스틴','mangosteen']],
    ['dragonfruit',   ['용과','드래곤프루츠','드래곤 프루츠','dragonfruit','dragon fruit','pitaya']],
    ['rambutan',      ['람부탄','rambutan']],
    ['papaya',        ['파파야','papaya']],
    ['coconutWater',  ['코코넛워터','코코넛 워터','coconut water']],
    // other fruit
    ['bakedApple',    ['구운사과','구운 사과','baked apple','roasted apple']],
    ['appleJam',      ['사과잼','apple jam','apple preserve']],
    ['tomatoJuice',   ['토마토주스','토마토 주스','tomato juice']],
    ['cherryTomato',  ['방울토마토','cherry tomato']],
    ['pomegranate',   ['석류','pomegranate']],
    ['shinemuscat',   ['샤인머스캣','shine muscat']],
    // dessert & candy
    ['panela',        ['파넬라','비정제 사탕수수','비정제사탕수수','panela','rapadura','piloncillo']],
    ['jocheong',      ['조청','rice syrup']],
    ['toffee',        ['토피','toffee']],
    ['praline',       ['프랄린','praline']],
    ['dalgona',       ['달고나','dalgona']],
    ['syrup',         ['시럽','syrup']],
    ['agave',         ['아가베','agave']],
    ['ganache',       ['가나슈','ganache']],
    ['cacaoButter',   ['카카오버터','카카오 버터','cacao butter','cocoa butter']],
    ['brownie',       ['브라우니','brownie']],
    ['whiteChoc',     ['화이트초콜릿','화이트 초콜릿','white chocolate']],
    ['mintChoc',      ['민트초콜릿','민트 초콜릿','오렌지초콜릿','오렌지 초콜릿','mint chocolate','orange chocolate','after eight']],
    ['bubblegum',     ['풍선껌','bubblegum','bubble gum']],
    ['gummy',         ['구미베어','하리보','젤리곰','gummy bear','haribo','gummy']],
    ['jellybean',     ['젤리빈','jelly bean','jellybean']],
    ['scotchcandy',   ['스카치캔디','스카치 캔디','scotch candy','butterscotch candy']],
    ['cola',          ['콜라','cola','pepsi','coke','닥터페퍼','dr pepper']],
    ['soda',          ['사이다','바키스','cider','sprite','lemon-lime']],
    ['heuktang',      ['흑당버블티','흑당 버블티','흑당라떼','brown sugar bubble tea','black sugar latte']],
    ['croissant',     ['크루아상','croissant']],
    ['macaron',       ['마카롱','macaron']],
    ['cinnamonroll',  ['시나몬롤','cinnamon roll','cinnamon bun']],
    ['cheesecake',    ['치즈케이크','cheesecake']],
    ['tiramisu',      ['티라미수','tiramisu']],
    ['waffle',        ['와플','팬케이크','waffle','pancake']],
    ['cookiedough',   ['쿠키도우','쿠키 도우','cookie dough']],
    // nuts/cereal
    ['pistachio',     ['피스타치오','pistachio']],
    ['almond',        ['구운아몬드','구운 아몬드','roasted almond','toasted almond']],
    ['pineNut',       ['잣','pine nut']],
    ['gingko',        ['은행','gingko','ginkgo']],
    ['chestnut',      ['밤','chestnut']],
    ['roastedChestnut',['군밤','roasted chestnut']],
    ['peanutButter',  ['피넛버터','피넛 버터','peanut butter']],
    ['popcorn',       ['팝콘','popcorn']],
    ['granola',       ['그래놀라','granola']],
    ['misugaru',      ['미숫가루','misugaru','roasted grain powder']],
    ['cornsilk',      ['옥수수수염','옥수수 수염','옥수수수염차','corn silk','cornsilk tea']],
    ['yulmu',         ['율무','율무차','yulmu','job’s tears','jobs tears']],
    ['perilla',       ['들깨','perilla','perilla seed']],
    ['sesame',        ['참깨','흑임자','sesame','black sesame']],
    ['roastedbean',   ['볶은콩','볶은 콩','roasted bean','roasted soybean']],
    ['sweetpotato',   ['군고구마','밤고구마','roasted sweet potato','sweet potato']],
    ['toast',         ['토스트','toast','toasted bread']],
    ['ash',           ['재','ash','ashy']],
    ['cigar',         ['시가','cigar']],
    ['burntSugar',    ['탄흑설탕','탄 흑설탕','burnt sugar','burnt caramel']],
    // floral / tea
    ['dlgug',         ['들국화','wild chrysanthemum','field chrysanthemum']],
    ['freesia',       ['프리지아','freesia']],
    ['hydrangea',     ['수국','hydrangea']],
    ['rosehip',       ['로즈힙','rosehip','rose hip']],
    ['osmanthus',     ['금목서','계수나무꽃','osmanthus']],
    ['lilac',         ['라일락','lilac']],
    ['lilyvalley',    ['은방울꽃','lily of the valley','muguet']],
    ['lotus',         ['연꽃','lotus','lotus flower']],
    ['plumBlossom',   ['매화','plum blossom','ume blossom']],
    ['orangeblossom', ['오렌지블라썸','오렌지 블라썸','orange blossom','neroli']],
    ['rooibos',       ['루이보스','rooibos']],
    ['peppermint',    ['페퍼민트','페퍼민트티','peppermint','peppermint tea']],
    ['matcha',        ['말차','matcha']],
    ['hojicha',       ['호지차','hojicha']],
    ['mate',          ['마테','마테차','yerba mate','mate']],
    ['blackTea',      ['우바','우바홍차','우바 홍차','assam','ceylon','uva','black tea']],
    // spice / vegetal
    ['pinkpepper',    ['핑크페퍼','핑크 페퍼','pink pepper','pink peppercorn']],
    ['coriander',     ['고수씨앗','고수 씨앗','coriander','coriander seed']],
    ['curry',         ['커리','카레','curry']],
    ['saffron',       ['사프란','샤프란','saffron']],
    ['licorice',      ['감초','licorice','liquorice']],
    ['vanillabean',   ['바닐라빈','바닐라 빈','vanilla bean']],
    ['dill',          ['딜','dill']],
    ['eucalyptus',    ['유칼립투스','eucalyptus']],
    ['pine',          ['솔잎','소나무','pine','pine needle']],
    ['sancho',        ['산초','sancho','sichuan pepper','szechuan pepper']],
    ['cucumber',      ['오이','cucumber']],
    ['zucchini',      ['애호박','zucchini','courgette']],
    ['carrot',        ['당근','carrot']],
    ['celery',        ['샐러리','celery']],
    // dairy / alcohol / ferment
    ['brownButter',   ['브라운버터','브라운 버터','brown butter','beurre noisette']],
    ['creamcheese',   ['크림치즈','cream cheese']],
    ['condensedMilk', ['연유','condensed milk']],
    ['cream',         ['생크림','whipped cream','fresh cream','heavy cream']],
    ['greekYogurt',   ['그릭요거트','그릭 요거트','greek yogurt']],
    ['sourCream',     ['사워크림','sour cream']],
    ['milkshake',     ['밀크쉐이크','밀크 쉐이크','milkshake']],
    ['pinacolada',    ['피나콜라다','pina colada','piña colada']],
    ['mojito',        ['모히토','mojito']],
    ['vinchaud',      ['뱅쇼','vin chaud','mulled wine','glühwein']],
    ['icewine',       ['아이스와인','아이스 와인','ice wine','eiswein']],
    ['ipa',           ['ipa','india pale ale','페일에일','페일 에일']],
    ['stoutBeer',     ['흑맥주','스타우트','stout','porter']],
    ['makgeolli',     ['막걸리','makgeolli']],
    ['portwine',      ['포트와인','포트 와인','port wine','port']],
    ['gin',           ['진','gin']],
    ['peatWhisky',    ['피트위스키','피트 위스키','peat whisky','peated whisky','islay']],
    ['balsamic',      ['발사믹','발사믹식초','발사믹 식초','balsamic','balsamic vinegar']],
    ['appleVinegar',  ['사과식초','사과 식초','apple vinegar','apple cider vinegar','acv']],
    ['kombucha',      ['콤부차','kombucha']],
    // savory / mineral
    ['dasima',        ['다시마','dasima','kombu','kelp']],
    ['soysauce',      ['간장','soy sauce','shoyu']],
    ['miso',          ['미소','된장','miso','doenjang']],
    ['tomatoPaste',   ['토마토페이스트','토마토 페이스트','tomato paste']],
    ['grilledmeat',   ['구운고기','구운 고기','grilled meat','barbecue','bbq']],
    ['salty',         ['짭짤','짭짤함','salty']],
    ['seasalt',       ['바다소금','바다 소금','sea salt']],
    ['spring',        ['광천수','미네랄워터','spring water','mineral water']],
    ['humus',         ['부엽토','humus','leaf mold']],
    ['wetsoil',       ['젖은흙','젖은 흙','wet soil','petrichor']],
    ['flint',         ['부싯돌','flint','flinty','gun flint']],
    ['wetwood',       ['젖은나무','젖은 나무','wet wood','damp wood']],
    ['leather',       ['가죽','leather','leathery']],
  ];
  // unshift so new buckets take priority over older catch-all buckets
  for (let i = NEW.length - 1; i >= 0; i--) BUCKETS.unshift(NEW[i]);

  // ─── ADDITIONAL ICONS — papaya · raspberry · maple · pomegranate
  // Tone-matched to v4/v5: filled monoline w/ darker stroke + interior detail.

  // RASPBERRY — tight drupelet cluster inside teardrop silhouette + sepal cap
  add('raspberry', [
    // outer teardrop body (raspberry silhouette)
    {d:'M12 21c-3.5 0-6-2.5-6-6.5C6 11 8 8 12 7c4 1 6 4 6 7.5 0 4-2.5 6.5-6 6.5z',
      fill:'#d22850', stroke:'#7a0820', sw:1.3},
    // tight drupelet cluster — overlapping circles, blackberry-style spacing
    {d:'M9.6 11.5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M12.4 11.5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M8.4 13.8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M11 13.8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M13.6 13.8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M9.6 16.1a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M12.4 16.1a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0z M11 18.3a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0z',
      fill:'#e85070', stroke:'#7a0820', sw:0.9},
    // tiny highlight dots
    {d:'M10.6 11a0.4 0.4 0 1 0 0 0.01 M13.4 11a0.4 0.4 0 1 0 0 0.01 M12.2 13.3a0.4 0.4 0 1 0 0 0.01 M9.6 15.6a0.4 0.4 0 1 0 0 0.01 M14.4 15.6a0.4 0.4 0 1 0 0 0.01',
      fill:'#fbc4d0', stroke:'none'},
    // 3-prong sepal cap (classic raspberry)
    {d:'M9 7.5c-1-1-2-2-2-3.5 1.5 0 2.5 1 3 2 0.5-1.5 1.2-2.5 2-3 0.8 0.5 1.5 1.5 2 3 0.5-1 1.5-2 3-2 0 1.5-1 2.5-2 3.5',
      fill:'#5a8a3a', stroke:'#2a4a18', sw:1.1},
    {d:'M12 6.5v-3', stroke:'#2a4a18', sw:1.1, fill:'none'},
  ]);

  // MAPLE — sugar-maple: 5 lobes with deep V-sinuses + serrated tips, stem
  add('maple', [
    // body — sharper, deeper sinuses than oak, tips slightly serrated
    {d:'M12 3 \
        L13.4 6 L15.5 5 \
        L14.6 7.6 \
        Q 16 7.5 17.2 6.8 \
        L16.2 9.4 L17.8 9.8 \
        L15.4 11.2 \
        Q 16.4 12 16.8 13.2 \
        L13.8 12.4 L14 14.4 L12.5 13.4 \
        L12 16 L11.5 13.4 L10 14.4 L10.2 12.4 \
        L7.2 13.2 \
        Q 7.6 12 8.6 11.2 \
        L6.2 9.8 L7.8 9.4 \
        L6.8 6.8 \
        Q 8 7.5 9.4 7.6 \
        L8.5 5 L10.6 6 Z',
      fill:'#d8842a', stroke:'#7a3a08', sw:1.3},
    // stem
    {d:'M12 16 L12 21',
      stroke:'#7a3a08', sw:1.6, fill:'none'},
    // central vein + branches
    {d:'M12 15 L12 6 \
        M12 10 L9.4 7.6 \
        M12 10 L14.6 7.6 \
        M12 12.5 L8.6 11.2 \
        M12 12.5 L15.4 11.2',
      stroke:'#5a2808', sw:0.7, fill:'none'},
  ]);

  // PAPAYA v2 — half-cut papaya: orange flesh + black seeds in oval cavity
  ICON.papaya = { layers: [
    {d:'M5 13c0-5 3-9 7-9 4 0 7 4 7 9 0 4-3 7-7 7-4 0-7-3-7-7z',
      fill:'#f58a3a', stroke:'#a84a0a', sw:1.3},
    {d:'M9 13c0-3 1-5 3-5s3 2 3 5-1 5-3 5-3-2-3-5z',
      fill:'#3a1810', stroke:'#1a0a08', sw:1.1},
    {d:'M11 11a0.55 0.55 0 1 0 0 0.01 M12.8 12a0.55 0.55 0 1 0 0 0.01 M11.2 13.5a0.55 0.55 0 1 0 0 0.01 M12.8 14.7a0.55 0.55 0 1 0 0 0.01 M11.4 16a0.55 0.55 0 1 0 0 0.01',
      fill:'#0a0604', stroke:'none'},
    {d:'M19 6c1-1 2-1 3 0', stroke:'#4d7a2e', sw:1.4, fill:'none'},
  ]};

  // POMEGRANATE v2 — split fruit: red rind + ruby arils visible through opening
  ICON.pomegranate = { layers: [
    {d:'M12 21c-4 0-7-3-7-7 0-5 3-9 7-10 4 1 7 5 7 10 0 4-3 7-7 7z',
      fill:'#c01830', stroke:'#5a0810', sw:1.3},
    {d:'M12 4c-1-1-1-3 0-4 1 1 1 3 0 4 M11 1l1-1 1 1 M9 3c1 0 2 1 3 1 1 0 2-1 3-1',
      fill:'#6a3a10', stroke:'#3a1808', sw:1.1},
    {d:'M9 13a1.2 1.2 0 1 0 0 0.01 M12 12a1.2 1.2 0 1 0 0 0.01 M15 13a1.2 1.2 0 1 0 0 0.01 M10.5 16a1.2 1.2 0 1 0 0 0.01 M13.5 16a1.2 1.2 0 1 0 0 0.01 M12 18a1 1 0 1 0 0 0.01',
      fill:'#f8285a', stroke:'#7a0818', sw:0.9},
    {d:'M9 13a0.4 0.4 0 1 0 0 0.01 M12 12a0.4 0.4 0 1 0 0 0.01 M15 13a0.4 0.4 0 1 0 0 0.01 M10.5 16a0.4 0.4 0 1 0 0 0.01 M13.5 16a0.4 0.4 0 1 0 0 0.01',
      fill:'#fff5d8', stroke:'none'},
  ]};

  // ─── REROUTE keyword lookup so raspberry/maple resolve to themselves
  // (v4 was sending 라즈베리→strawberry and 메이플→honey)
  BUCKETS.unshift(['raspberry', ['라즈베리','산딸기','raspberry','red raspberry']]);
  BUCKETS.unshift(['maple',     ['메이플','메이플시럽','메이플 시럽','maple','maple syrup']]);

  // Expose label map for the library UI
  window.ICON_V5_GROUPS = [
    {n:'00', t:'추가 · NEW', ko:'New additions', icons:[
      ['raspberry','라즈베리','raspberry'],
      ['maple','메이플','maple'],
      ['papaya','파파야','papaya'],
      ['pomegranate','석류','pomegranate']
    ]},
    {n:'01', t:'시트러스 확장', ko:'Citrus extended', icons:[
      ['hallabong','한라봉','hallabong'],['kumquat','금귤','kumquat'],['calamansi','깔라만시','calamansi'],
      ['sweetie','스위티','sweetie'],['pinkGrapefruit','핑크자몽','pink grapefruit'],['zest','레몬 제스트','zest']
    ]},
    {n:'02', t:'베리 · 핵과 확장', ko:'Berry · Stone extended', icons:[
      ['mulberry','오디','mulberry'],['aronia','아로니아','aronia'],['redcurrant','레드커런트','red currant'],
      ['goji','구기자','goji'],['wildstrawberry','야생딸기','wild strawberry'],
      ['whitePeach','백도','white peach'],['yellowPeach','황도','yellow peach'],['prune','프룬','prune'],
      ['cherrySyrup','체리시럽','cherry syrup']
    ]},
    {n:'03', t:'이국과일 · 그 외', ko:'Tropical · Other', icons:[
      ['mangosteen','망고스틴','mangosteen'],['dragonfruit','용과','dragonfruit'],['rambutan','람부탄','rambutan'],
      ['papaya','파파야','papaya'],['coconutWater','코코넛워터','coconut water'],
      ['bakedApple','구운사과','baked apple'],['appleJam','사과잼','apple jam'],
      ['tomatoJuice','토마토주스','tomato juice'],['cherryTomato','방울토마토','cherry tomato'],
      ['pomegranate','석류','pomegranate'],['shinemuscat','샤인머스캣','shine muscat']
    ]},
    {n:'04', t:'당 · 시럽 · 디저트', ko:'Sugar · Syrup · Dessert', icons:[
      ['panela','파넬라','panela'],['jocheong','조청','rice syrup'],['toffee','토피','toffee'],
      ['praline','프랄린','praline'],['dalgona','달고나','dalgona'],['syrup','시럽','syrup'],
      ['agave','아가베','agave']
    ]},
    {n:'05', t:'초콜릿 베리에이션', ko:'Chocolate variations', icons:[
      ['ganache','가나슈','ganache'],['cacaoButter','카카오버터','cacao butter'],
      ['brownie','브라우니','brownie'],['whiteChoc','화이트초콜릿','white choc'],
      ['mintChoc','민트초콜릿','mint choc']
    ]},
    {n:'06', t:'캔디 · 음료', ko:'Candy · Drinks', icons:[
      ['bubblegum','풍선껌','bubblegum'],['gummy','구미베어','gummy'],['jellybean','젤리빈','jelly bean'],
      ['scotchcandy','스카치캔디','scotch candy'],['cola','콜라','cola'],['heuktang','흑당버블티','brown sugar bubble tea']
    ]},
    {n:'07', t:'베이커리', ko:'Bakery', icons:[
      ['croissant','크루아상','croissant'],['macaron','마카롱','macaron'],
      ['cinnamonroll','시나몬롤','cinnamon roll'],['cheesecake','치즈케이크','cheesecake'],
      ['tiramisu','티라미수','tiramisu'],['waffle','와플','waffle'],['cookiedough','쿠키도우','cookie dough']
    ]},
    {n:'08', t:'견과 · 곡물 · 로스티', ko:'Nut · Cereal · Roasted', icons:[
      ['pistachio','피스타치오','pistachio'],['almond','구운아몬드','roasted almond'],
      ['pineNut','잣','pine nut'],['gingko','은행','gingko'],['chestnut','밤','chestnut'],
      ['roastedChestnut','군밤','roasted chestnut'],['peanutButter','피넛버터','peanut butter'],
      ['popcorn','팝콘','popcorn'],['granola','그래놀라','granola'],
      ['misugaru','미숫가루','misugaru'],['cornsilk','옥수수수염','cornsilk'],
      ['yulmu','율무','yulmu'],['perilla','들깨','perilla'],['sesame','참깨','sesame'],
      ['roastedbean','볶은콩','roasted bean'],['sweetpotato','군고구마','roasted sweet potato'],
      ['toast','토스트','toast'],['ash','재','ash'],['cigar','시가','cigar'],
      ['burntSugar','탄 흑설탕','burnt sugar']
    ]},
    {n:'09', t:'꽃 · 차 확장', ko:'Floral · Tea extended', icons:[
      ['dlgug','들국화','wild chrysanthemum'],['freesia','프리지아','freesia'],
      ['hydrangea','수국','hydrangea'],['rosehip','로즈힙','rosehip'],
      ['osmanthus','금목서','osmanthus'],['lilac','라일락','lilac'],
      ['lilyvalley','은방울꽃','lily of the valley'],['lotus','연꽃','lotus'],
      ['plumBlossom','매화','plum blossom'],['orangeblossom','오렌지블라썸','orange blossom'],
      ['rooibos','루이보스','rooibos'],['peppermint','페퍼민트','peppermint'],
      ['matcha','말차','matcha'],['hojicha','호지차','hojicha'],['mate','마테','mate'],
      ['blackTea','우바 홍차','black tea']
    ]},
    {n:'10', t:'향신료 · 허브 · 채소', ko:'Spice · Herb · Vegetal', icons:[
      ['pinkpepper','핑크페퍼','pink pepper'],['coriander','고수 씨앗','coriander seed'],
      ['curry','커리','curry'],['saffron','사프란','saffron'],['licorice','감초','licorice'],
      ['vanillabean','바닐라빈','vanilla bean'],['dill','딜','dill'],
      ['eucalyptus','유칼립투스','eucalyptus'],['pine','솔잎','pine'],['sancho','산초','sancho'],
      ['cucumber','오이','cucumber'],['zucchini','애호박','zucchini'],
      ['carrot','당근','carrot'],['celery','샐러리','celery']
    ]},
    {n:'11', t:'유제품 · 발효 · 주류', ko:'Dairy · Fermented · Alcohol', icons:[
      ['brownButter','브라운버터','brown butter'],['creamcheese','크림치즈','cream cheese'],
      ['condensedMilk','연유','condensed milk'],['cream','생크림','cream'],
      ['greekYogurt','그릭요거트','greek yogurt'],['sourCream','사워크림','sour cream'],
      ['milkshake','밀크쉐이크','milkshake'],
      ['pinacolada','피나콜라다','pina colada'],['mojito','모히토','mojito'],
      ['vinchaud','뱅쇼','vin chaud'],['icewine','아이스와인','ice wine'],
      ['ipa','IPA','ipa'],['stoutBeer','흑맥주','stout'],['makgeolli','막걸리','makgeolli'],
      ['portwine','포트와인','port'],['gin','진','gin'],['peatWhisky','피트 위스키','peat whisky'],
      ['balsamic','발사믹','balsamic'],['appleVinegar','사과식초','apple vinegar'],
      ['kombucha','콤부차','kombucha']
    ]},
    {n:'12', t:'감칠맛 · 미네랄 · 흙', ko:'Savory · Mineral · Earth', icons:[
      ['dasima','다시마','dasima'],['soysauce','간장','soy sauce'],['miso','미소·된장','miso'],
      ['tomatoPaste','토마토페이스트','tomato paste'],['grilledmeat','구운고기','grilled meat'],
      ['salty','짭짤','salty'],['seasalt','바다소금','sea salt'],
      ['spring','광천수','mineral water'],['humus','부엽토','humus'],
      ['wetsoil','젖은흙','wet soil'],['flint','부싯돌','flint'],
      ['wetwood','젖은나무','wet wood'],['leather','가죽','leather']
    ]},
  ];

  // ─── BANANA — yellow crescent, brown stem & tip, soft highlight
  add('banana', [
    // body — crescent shape from upper-left to lower-right
    {d:'M5 7 Q 12 4 18 9 Q 21 13 18 17 Q 14 14 8 11 Q 5 9 5 7 Z',
      fill:'#f5c518', stroke:'#a8700a', sw:1.3},
    // inner shadow on lower curve (gives volume)
    {d:'M7 8 Q 11 7 16 10 Q 19 13 17 15',
      fill:'none', stroke:'#d49810', sw:1.1},
    // top highlight
    {d:'M7 7 Q 12 6 16 8',
      fill:'none', stroke:'#fbe87a', sw:1.2},
    // stem (upper-left)
    {d:'M5 7 L 4 5 L 5.5 4',
      fill:'none', stroke:'#6a3a08', sw:1.6},
    // tip (lower-right)
    {d:'M18 17 L 19 19',
      fill:'none', stroke:'#6a3a08', sw:1.4},
  ]);

  // route banana keyword to itself (priority over catch-alls)
  BUCKETS.unshift(['banana', ['바나나','banana','plantain']]);

  // expose in V5 NEW group for the icon library UI
  if (window.ICON_V5_GROUPS && window.ICON_V5_GROUPS[0] && window.ICON_V5_GROUPS[0].n === '00') {
    window.ICON_V5_GROUPS[0].icons.push(['banana','바나나','banana']);
  }

})();
