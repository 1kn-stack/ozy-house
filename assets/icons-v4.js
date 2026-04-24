// OZY HOUSE — flavor icon library v4
// Colored monoline SVG set. Each icon has a primary fill/stroke color
// derived from the real-world food reference. 24x24 viewBox.
// Matched against the production EMO map and FCAT keyword buckets.

const C = {
  // fruit
  peach:'#ff9a7a', peachCore:'#b34d2e',
  plum:'#6b2a52', plumHi:'#9d3e7a',
  ume:'#a7c650', umeHi:'#5d8b2a',
  lemon:'#f6cf3f', lemonLf:'#7ca745',
  bergamot:'#8ab43a', bergamotSkin:'#4a7a2a', bergamotFlesh:'#e4e8a8', bergamotLf:'#2a5a1a',
  orange:'#f09228', orangeLf:'#4d7030',
  grape:'#6e3a8f',
  blueberry:'#3a4f8e', blueberryHi:'#6c86c6',
  blackberry:'#2a1730', blackberryHi:'#6b2a52',
  strawberry:'#d93045', strawberrySeed:'#f8e27a', strawberryLf:'#4d7a2e',
  cherry:'#a01028', cherryStem:'#5a4027',
  pineapple:'#f0b727', pineappleLf:'#4d7a2e',
  mango:'#f5a321', mangoHi:'#e64f28',
  melon:'#a7d98a', melonHi:'#e8e4b5',
  greenApple:'#9fc94a',
  redApple:'#d63932',
  kiwi:'#6a9b3a', kiwiSeed:'#2d2a1a',
  pear:'#c4cc62',
  coconut:'#8a5a3a', coconutWhite:'#f5efe2',
  watermelon:'#e3404a', watermelonRind:'#4d7a2e', watermelonSeed:'#1a1200',
  passion:'#c63a6a', passionSeed:'#f6cf3f',
  olive:'#6e7a36',
  bellPepper:'#e33b3b',
  // dried
  raisin:'#4a1f1a', raisinHi:'#8a4a2a',
  fig:'#6b1e3a', figSeed:'#e8c075',
  // sweet
  caramel:'#b36a1a', caramelHi:'#e09a3a',
  cotton:'#f9c2d6',
  chocolate:'#4a2818', chocolateHi:'#8a4a2a',
  honey:'#e3a11a',
  sugarYellow:'#d4a84a',
  sugarDark:'#3a2818',
  sugarWhite:'#ede7d6', sugarWhiteLine:'#8a8280',
  vanilla:'#e8dcb2', vanillaBean:'#2a1a0e',
  candy:'#ec4f82', candyHi:'#ffd14a',
  // floral
  jasmine:'#f8f1d9', jasmineCore:'#e3c840', jasmineLf:'#6a9b3a',
  rose:'#d63455', roseLf:'#4d7a2e',
  lavender:'#8470c9',
  chamomile:'#f5d73a', chamomilePetal:'#fff8e2',
  herb:'#4d8a3a',
  grass:'#9fc94a',
  earthy:'#5a3a24',
  // nuts / spice
  nut:'#a76a3a', nutHi:'#5a3818',
  peanut:'#c4923a',
  ginger:'#d4a870', gingerSkin:'#8a6a3a',
  anise:'#5a3018', aniseHi:'#a76a3a',
  nutmeg:'#8a4a1e', nutmegHi:'#c4763a',
  clove:'#5a2a18', cloveTip:'#a76a3a',
  butter:'#f6d860', butterHi:'#e09a3a',
  // tea / beverage
  tea:'#a08c60', teaLiquid:'#b8763a',
  cereal:'#c49a5a', cerealHi:'#6a4a2a',
  tobacco:'#5a3a1a', tobaccoAsh:'#a89880',
  wood:'#8a5a3a', woodHi:'#5a3a1e',
  wine:'#6b1a3a',
  malt:'#c4923a', maltHi:'#6a4a1a',
  mineral:'#6e7a82',
  smoke:'#3a3a3e',
  fermented:'#b5c478', fermentedLiquid:'#e8dcb2',
  cheese:'#f0c63a',
  champagne:'#f0d88a', champagneBubble:'#f8f1d9',
  whiskey:'#a8601a',
  milk:'#f5efe2', milkLine:'#a89880',
  yogurt:'#f8f3e6', yogurtLine:'#a89880',
  soda:'#8ab4e8', sodaBubble:'#ffffff',
  popcorn:'#f6dd7a', popcornBase:'#b36a1a',
  starfruit:'#d4c04a', starfruitLf:'#6a9b3a',
  // tropical / other fills
  tropical:'#ffb248',
  coffee:'#3a2014',
  roasty:'#6a3a1a', roastyHi:'#c4763a', roastyDark:'#3a1a08',
};

// Path definitions. Each value can be:
//   {paths: string}  — will be wrapped with stroke=ink, inline fills allowed
//   {layers: [{d, fill, stroke, sw}]}  — multi-layer icon
const ICON = {
  // ── STONE FRUIT ──
  peach:{layers:[
    {d:'M12 21c-5 0-8-3-8-7 0-3 2-6 5-6 1 0 2 .4 3 1 1-.6 2-1 3-1 3 0 5 3 5 6 0 4-3 7-8 7z', fill:C.peach, stroke:C.peachCore, sw:1.4},
    {d:'M12 14c0 .2 0 4 0 6', stroke:C.peachCore, sw:1.2},
    {d:'M11 5c1-2 3-2 4-1', stroke:'#4d7a2e', sw:1.4},
  ]},
  plum:{layers:[
    {d:'M12 21c-5 0-8-3-8-7 0-4 3-7 8-7s8 3 8 7c0 4-3 7-8 7z', fill:C.plum, stroke:C.plumHi, sw:1.3},
    {d:'M11 5c1-2 3-2 4-1', stroke:'#4d7a2e', sw:1.4},
    {d:'M12 8v13', stroke:C.plumHi, sw:1},
  ]},
  ume:{layers:[
    {d:'M12 21c-5 0-8-3-8-7 0-4 3-7 8-7s8 3 8 7c0 4-3 7-8 7z', fill:C.ume, stroke:C.umeHi, sw:1.3},
    {d:'M11 5c1-2 3-2 4-1', stroke:C.umeHi, sw:1.4},
  ]},
  // ── CITRUS ──
  lemon:{layers:[
    {d:'M4 14c0-6 4-10 8-10s8 4 8 10-4 6-8 6-8 0-8-6z', fill:C.lemon, stroke:'#b5933a', sw:1.3},
    {d:'M12 8c0 4 0 8 0 12 M8 10c3 2 5 2 8 0 M8 16c3 2 5 2 8 0', stroke:'#b5933a', sw:0.9},
    {d:'M16 4c1 0 2 1 2 2', stroke:C.lemonLf, sw:1.3},
  ]},
  bergamot:{layers:[
    {d:'M4 13a8 7 0 1 0 16 0 8 7 0 0 0-16 0z', fill:C.bergamot, stroke:C.bergamotSkin, sw:1.3},
    {d:'M6 11c1-1 2-1 3 0 M14 11c1-1 2-1 3 0 M7 15c1 1 2 1 3 0 M13 15c1 1 2 1 3 0', stroke:C.bergamotSkin, sw:0.8, fill:'none'},
    {d:'M11 4c1-2 3-2 5-1', stroke:C.bergamotLf, sw:1.6, fill:'none'},
    {d:'M15 3c2-1 4 0 4 2', stroke:C.bergamotLf, sw:1.6, fill:'none'},
  ]},
  orange:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:C.orange, stroke:'#a45a1a', sw:1.3},
    {d:'M12 4v16 M4 12h16 M6.3 6.3l11.4 11.4 M17.7 6.3L6.3 17.7', stroke:'#a45a1a', sw:0.8},
    {d:'M13 4c1-1 2-1 3 0', stroke:C.orangeLf, sw:1.4},
  ]},
  // ── BERRIES ──
  strawberry:{layers:[
    {d:'M12 21c-4 0-7-3-7-7 0-3 3-6 7-6s7 3 7 6c0 4-3 7-7 7z', fill:C.strawberry, stroke:'#8a1a2a', sw:1.3},
    {d:'M7 6l2 2h6l2-2M12 4v4', fill:C.strawberryLf, stroke:C.strawberryLf, sw:1.3},
    {d:'M9 12.5 M11 15 M14 13 M13 17 M10 18', stroke:C.strawberrySeed, sw:1.6},
  ]},
  blueberry:{layers:[
    {d:'M8 10a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:C.blueberry, stroke:'#1e2a55', sw:1.3},
    {d:'M6 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:C.blueberry, stroke:'#1e2a55', sw:1.3},
    {d:'M11 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:C.blueberry, stroke:'#1e2a55', sw:1.3},
    {d:'M12 10l-1 0l1 1l1-1z M9 16l-1 0l1 1l1-1z M15 15l-1 0l1 1l1-1z', fill:C.blueberryHi, stroke:'none', sw:0},
  ]},
  blackberry:{layers:[
    {d:'M12 21c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z', fill:C.blackberry, stroke:C.blackberryHi, sw:1.3},
    {d:'M9 11a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0z M13 11a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0z M10 15a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0z M13 15a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0z M11 18a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 0 0-2.6 0z', fill:C.blackberryHi, stroke:'none', sw:0},
    {d:'M11 6l1-2 1 2', stroke:'#4d7a2e', sw:1.3},
  ]},
  cherry:{layers:[
    {d:'M8 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:C.cherry, stroke:'#5a0814', sw:1.3},
    {d:'M14 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:C.cherry, stroke:'#5a0814', sw:1.3},
    {d:'M11 15C10 11 13 7 13 3 M17 13C16 9 19 6 19 3', stroke:C.cherryStem, sw:1.3, fill:'none'},
  ]},
  // ── OTHER FRUIT ──
  pineapple:{layers:[
    {d:'M7 11c0-4 2-6 5-6s5 2 5 6v5c0 3-2 5-5 5s-5-2-5-5z', fill:C.pineapple, stroke:'#8a6a1a', sw:1.3},
    {d:'M9 11h6 M9 14h6 M9 17h6 M9 11l6 3 M9 14l6 3 M15 11l-6 3 M15 14l-6 3', stroke:'#8a6a1a', sw:0.7},
    {d:'M12 5c-1-2 0-4 0-4s1 2 0 4 M9 5c-1-2-1-3 0-4 M15 5c1-2 1-3 0-4', stroke:C.pineappleLf, sw:1.3, fill:'none'},
  ]},
  mango:{layers:[
    {d:'M6 13c0-5 3-8 6-8 4 0 6 3 6 7 0 5-3 8-6 8-3 0-6-3-6-7z', fill:C.mango, stroke:'#b8651a', sw:1.3},
    {d:'M15 7c1-1 2-1 2 0 M10 6c2 2 4 6 4 10', stroke:C.mangoHi, sw:1.2, fill:'none'},
  ]},
  melon:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:C.melonHi, stroke:C.melon, sw:1.3},
    {d:'M6 10c3-1 6-1 9 0 M5 14c4-1 8-1 14 0 M6 17c3-1 7-1 12 0', stroke:C.melon, sw:0.9, fill:'none'},
  ]},
  greenApple:{layers:[
    {d:'M12 21c-5 0-8-3-8-8 0-4 3-7 7-7 1 0 1 0 1 1 0-1 0-1 1-1 4 0 7 3 7 7 0 5-3 8-8 8z', fill:C.greenApple, stroke:'#6a8a2a', sw:1.3},
    {d:'M12 7V4 M12 4c2-2 4 0 4 2', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]},
  redApple:{layers:[
    {d:'M12 21c-5 0-8-3-8-8 0-4 3-7 7-7 1 0 1 0 1 1 0-1 0-1 1-1 4 0 7 3 7 7 0 5-3 8-8 8z', fill:C.redApple, stroke:'#8a1a18', sw:1.3},
    {d:'M12 7V4 M12 4c2-2 4 0 4 2', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]},
  kiwi:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:'#b5c87a', stroke:C.kiwi, sw:1.3},
    {d:'M12 7v10 M7 12h10 M8.5 8.5l7 7 M15.5 8.5l-7 7', stroke:C.kiwi, sw:0.7},
    {d:'M12 9a0.6 0.6 0 1 0 0.01 0 M12 15a0.6 0.6 0 1 0 0.01 0 M9 12a0.6 0.6 0 1 0 0.01 0 M15 12a0.6 0.6 0 1 0 0.01 0 M10 10a0.6 0.6 0 1 0 0.01 0 M14 14a0.6 0.6 0 1 0 0.01 0', stroke:C.kiwiSeed, fill:C.kiwiSeed, sw:1.6},
  ]},
  pear:{layers:[
    {d:'M12 21c-4 0-6-3-6-6 0-2 1-4 2-5 1-1 2-3 2-5 0-2 1-3 2-3s2 1 2 3c0 2 1 4 2 5 1 1 2 3 2 5 0 3-2 6-6 6z', fill:C.pear, stroke:'#8a9a3a', sw:1.3},
  ]},
  coconut:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:C.coconut, stroke:'#5a3818', sw:1.3},
    {d:'M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0z', fill:C.coconutWhite, stroke:'#c0b8a0', sw:0.9},
    {d:'M10 10a0.6 0.6 0 1 0 0.01 0 M14 10a0.6 0.6 0 1 0 0.01 0 M12 14a0.6 0.6 0 1 0 0.01 0', fill:'#3a2818', stroke:'#3a2818', sw:1.4},
  ]},
  watermelon:{layers:[
    {d:'M3 18a9 9 0 0 0 18 0z', fill:C.watermelon, stroke:'#a82832', sw:1.3},
    {d:'M3 18a9 9 0 0 0 18 0 M4 18h16 M2 20h20', stroke:C.watermelonRind, sw:1.2, fill:'none'},
    {d:'M8 15l0.5-1 M12 13l0.5-1 M16 15l0.5-1', stroke:C.watermelonSeed, sw:1.5},
  ]},
  passion:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:C.passion, stroke:'#8a1e48', sw:1.3},
    {d:'M9 11a0.7 0.7 0 1 0 0 0.01 M12 11a0.7 0.7 0 1 0 0 0.01 M15 11a0.7 0.7 0 1 0 0 0.01 M10 14a0.7 0.7 0 1 0 0 0.01 M14 14a0.7 0.7 0 1 0 0 0.01 M12 16a0.7 0.7 0 1 0 0 0.01', fill:C.passionSeed, stroke:C.passionSeed, sw:1.6},
  ]},
  olive:{layers:[
    {d:'M9 13c0-3 1-5 3-5s3 2 3 5-1 6-3 6-3-3-3-6z', fill:C.olive, stroke:'#3a4a1e', sw:1.3},
    {d:'M12 8V5 M12 5c-1-2-3-1-3-1 M12 5c1-2 3-1 3-1', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]},
  bellPepper:{layers:[
    {d:'M6 13c0-3 3-5 6-5s6 2 6 5v2c0 3-3 5-6 5s-6-2-6-5z', fill:C.bellPepper, stroke:'#8a1a18', sw:1.3},
    {d:'M10 8c0-2 1-3 2-3s2 1 2 3 M11 5l-1-1 M13 5l1-1', stroke:'#3a5a1a', sw:1.3, fill:'none'},
  ]},
  // ── DRIED ──
  raisin:{layers:[
    {d:'M7 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M11 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M8 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:C.raisin, stroke:C.raisinHi, sw:1.3},
  ]},
  fig:{layers:[
    {d:'M12 21c-4 0-7-3-7-7 0-4 3-7 7-7s7 3 7 7-3 7-7 7z', fill:C.fig, stroke:'#3a0f1a', sw:1.3},
    {d:'M12 7V4 M12 4c-2-1-3 0-3 1 M12 4c2-1 3 0 3 1', stroke:'#4d7a2e', sw:1.3, fill:'none'},
    {d:'M10 12l1 1 M14 12l-1 1 M12 15v1', stroke:C.figSeed, sw:1.4},
  ]},
  // ── SWEET ──
  caramel:{layers:[
    {d:'M5 8C5 6 7 5 9 5h6c2 0 4 1 4 3v8c0 2-2 3-4 3H9c-2 0-4-1-4-3z', fill:C.caramel, stroke:'#6a3a0a', sw:1.3},
    {d:'M7 9h10 M7 13h10 M9 5v14 M15 5v14', stroke:C.caramelHi, sw:0.9, fill:'none'},
  ]},
  cotton:{layers:[
    {d:'M6 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M10 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M12 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M9 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:C.cotton, stroke:'#c08ba0', sw:1.2},
    {d:'M12 13V21', stroke:'#8a6a5a', sw:1.2, fill:'none'},
  ]},
  chocolate:{layers:[
    {d:'M5 6h14v12H5z', fill:C.chocolate, stroke:'#1e1008', sw:1.3},
    {d:'M5 10h14 M5 14h14 M9 6v12 M15 6v12', stroke:C.chocolateHi, sw:0.9},
  ]},
  honey:{layers:[
    {d:'M12 3l7 4.5v9L12 21l-7-4.5v-9z', fill:C.honey, stroke:'#8a6010', sw:1.3},
    {d:'M12 3v18 M5 7.5l14 9 M19 7.5l-14 9', stroke:'#8a6010', sw:0.9, fill:'none'},
  ]},
  sugarYellow:{layers:[
    {d:'M5 9h14v9H5z', fill:C.sugarYellow, stroke:'#8a6a2a', sw:1.3},
    {d:'M7 11h2v2H7z M11 11h2v2h-2z M15 11h2v2h-2z M9 14h2v2H9z M13 14h2v2h-2z', fill:'#8a6a2a', stroke:'none'},
  ]},
  sugarDark:{layers:[
    {d:'M5 9h14v9H5z', fill:C.sugarDark, stroke:'#1a1008', sw:1.3},
    {d:'M7 11h2v2H7z M11 11h2v2h-2z M15 11h2v2h-2z M9 14h2v2H9z M13 14h2v2h-2z', fill:'#6a3a1a', stroke:'none'},
  ]},
  sugarWhite:{layers:[
    {d:'M5 9h14v9H5z', fill:C.sugarWhite, stroke:C.sugarWhiteLine, sw:1.3},
    {d:'M7 11h2v2H7z M11 11h2v2h-2z M15 11h2v2h-2z M9 14h2v2H9z M13 14h2v2h-2z', fill:C.sugarWhiteLine, stroke:'none'},
  ]},
  vanilla:{layers:[
    {d:'M10 3c0 6-2 12-4 18 M14 3c0 6 2 12 4 18 M10 3h4', fill:'none', stroke:C.vanillaBean, sw:1.5},
    {d:'M11 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0z', fill:C.vanillaBean, stroke:'none'},
    {d:'M9 11c2 1 4 1 6 0 M8 15c3 1 5 1 8 0', stroke:C.vanilla, sw:1.6, fill:'none'},
  ]},
  candy:{layers:[
    {d:'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:C.candy, stroke:'#a8264f', sw:1.3},
    {d:'M4 12l4-1v2z M20 12l-4-1v2z', fill:C.candyHi, stroke:'#a8264f', sw:1.3},
    {d:'M10 11c1-1 3-1 4 0 M10 13c1 1 3 1 4 0', stroke:'#fff', sw:1, fill:'none'},
  ]},
  // ── FLORAL ──
  jasmine:{layers:[
    {d:'M12 4a4 4 0 0 1 0 8z M12 20a4 4 0 0 1 0-8z M4 12a4 4 0 0 1 8 0z M20 12a4 4 0 0 1-8 0z', fill:C.jasmine, stroke:'#d4c070', sw:1.2},
    {d:'M12 12a1.5 1.5 0 1 0 0 0.01', fill:C.jasmineCore, stroke:C.jasmineCore, sw:1.5},
    {d:'M18 5c2 2 2 4 0 6', stroke:C.jasmineLf, sw:1.3, fill:'none'},
  ]},
  rose:{layers:[
    {d:'M12 12a4 4 0 1 0 0-0.01z', fill:C.rose, stroke:'#8a1a2e', sw:1.3},
    {d:'M9 11c1-2 5-2 6 0 M10 13c2 1 4-1 4-2 M11 10c0-1 1-2 2-2', stroke:'#fff5f0', sw:1, fill:'none'},
    {d:'M16 18c2-1 3-3 3-5', stroke:C.roseLf, sw:1.3, fill:'none'},
  ]},
  lavender:{layers:[
    {d:'M12 3v8 M12 11l-3-1 M12 11l3-1 M12 11l-2-2 M12 11l2-2 M12 11l-3 2 M12 11l3 2', stroke:C.lavender, sw:1.8, fill:'none'},
    {d:'M11 11c-1 4-3 6-6 8 M13 11c1 4 3 6 6 8', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]},
  chamomile:{layers:[
    {d:'M12 7a2 2 0 1 0 0 0.01', fill:C.chamomile, stroke:'#a07a10', sw:1.2},
    {d:'M12 4a3 2 0 0 1 0 4z M12 14a3 2 0 0 1 0-4z M7 9a2 3 0 0 1 4 0z M17 9a2 3 0 0 1-4 0z M8 13l3-2 M16 13l-3-2', fill:C.chamomilePetal, stroke:'#d0c090', sw:1.2},
    {d:'M12 10v11 M12 15l-3 3 M12 17l3 3', stroke:'#4d7a2e', sw:1.3, fill:'none'},
  ]},
  herb:{layers:[
    {d:'M12 21V4 M12 8C10 4 6 5 6 10 M12 11C9 8 5 9 5 14 M12 14C9 12 5 13 5 18 M12 8c2-4 6-3 6 2 M12 11c3-3 7-2 7 3 M12 14c3-2 7-1 7 4', stroke:C.herb, sw:1.5, fill:'none'},
  ]},
  grass:{layers:[
    {d:'M5 21c0-4 2-8 4-10 M9 21c0-5 2-9 3-11 M13 21c0-5 1-9 2-11 M17 21c0-4 1-7 2-9', stroke:C.grass, sw:1.6, fill:'none'},
  ]},
  earthy:{layers:[
    {d:'M3 18h18v3H3z', fill:C.earthy, stroke:'#3a2010', sw:1.3},
    {d:'M5 16l2-1 3 1 3-1 3 1 3-1', stroke:'#3a2010', sw:1.1, fill:'none'},
    {d:'M8 14a0.6 0.6 0 1 0 0 0.01 M14 13a0.6 0.6 0 1 0 0 0.01 M18 14a0.6 0.6 0 1 0 0 0.01', fill:'#3a2010', stroke:'none'},
  ]},
  // ── NUTS & SPICE ──
  nut:{layers:[
    {d:'M12 3c-3 0-6 3-6 7v4c0 4 2 7 6 7s6-3 6-7v-4c0-4-3-7-6-7z', fill:C.nut, stroke:C.nutHi, sw:1.3},
    {d:'M12 3v18 M9 5c2 5 2 11 0 16 M15 5c-2 5-2 11 0 16', stroke:C.nutHi, sw:0.9, fill:'none'},
  ]},
  peanut:{layers:[
    {d:'M8 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M10 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:C.peanut, stroke:'#7a5820', sw:1.3},
    {d:'M9 10c1 2 4 2 5 0 M10 14c1-2 4-2 5 0 M11 11c0 1 2 1 2 0 M11 13c0 1 2 1 2 0', stroke:'#7a5820', sw:0.9, fill:'none'},
  ]},
  ginger:{layers:[
    {d:'M5 13c0-2 2-3 4-3 1 0 2 0 3-1 1-1 3-2 5-1s2 3 1 5c-1 1-1 2-1 3 0 2-1 4-3 4-3 0-5-1-7-3-2-2-2-2-2-4z', fill:C.ginger, stroke:C.gingerSkin, sw:1.3},
    {d:'M9 11c1 1 2 2 4 2 M8 14c2 1 4 2 6 1', stroke:C.gingerSkin, sw:0.8, fill:'none'},
  ]},
  anise:{layers:[
    {d:'M12 3l2 4h4l-3 3 1 5-4-2-4 2 1-5-3-3h4z', fill:C.anise, stroke:'#3a1a0a', sw:1.3},
    {d:'M12 9a1.6 1.6 0 1 0 0 0.01', fill:C.aniseHi, stroke:'#3a1a0a', sw:1},
  ]},
  nutmeg:{layers:[
    {d:'M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0z', fill:C.nutmeg, stroke:'#4a2a0a', sw:1.3},
    {d:'M7 9c3 1 7 1 10 0 M7 12c3 2 7 2 10 0 M7 15c3 1 7 1 10 0', stroke:C.nutmegHi, sw:0.9, fill:'none'},
  ]},
  clove:{layers:[
    {d:'M12 3v13', stroke:C.clove, sw:2},
    {d:'M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill:C.clove, stroke:'#2a0f0a', sw:1.3},
    {d:'M12 3l-1-1 M12 3l1-1 M12 5l-1 0 M12 5l1 0', stroke:C.cloveTip, sw:1.4},
  ]},
  butter:{layers:[
    {d:'M5 8h14l-2 10H7z', fill:C.butter, stroke:'#a08c1a', sw:1.3},
    {d:'M6 12h12 M7 15h10', stroke:C.butterHi, sw:0.9, fill:'none'},
  ]},
  // ── TEA / BEV / WOOD ──
  tea:{layers:[
    {d:'M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M19 12h3v3h-3', fill:C.tea, stroke:'#5a4010', sw:1.3},
    {d:'M7 13c2 1 4 1 10 0 M7 16c3 1 7 1 10 0', stroke:C.teaLiquid, sw:1, fill:'none'},
    {d:'M10 4c0 2 2 2 2 4 M14 4c0 2-2 2-2 4', stroke:'#8a8580', sw:1.2, fill:'none'},
  ]},
  cereal:{layers:[
    {d:'M5 10l7-5 7 5v6l-7 4-7-4z', fill:C.cereal, stroke:C.cerealHi, sw:1.3},
    {d:'M8 11l4-2 4 2 M8 14l4-2 4 2 M8 17l4-2 4 2', stroke:C.cerealHi, sw:0.8, fill:'none'},
  ]},
  tobacco:{layers:[
    {d:'M3 11h18v3H3z', fill:C.tobacco, stroke:'#1a1008', sw:1.3},
    {d:'M21 12l2-2 M21 12l2 2 M21 12h3', stroke:C.tobacco, sw:1.3, fill:'none'},
    {d:'M3 10l2-1 4 1 4-1 4 1 3-1', stroke:C.tobaccoAsh, sw:1, fill:'none'},
  ]},
  wood:{layers:[
    {d:'M3 9h18v6H3z', fill:C.wood, stroke:C.woodHi, sw:1.3},
    {d:'M6 10c1 2 0 4-1 4 M12 10c1 2 0 4-1 4 M18 10c1 2 0 4-1 4', stroke:C.woodHi, sw:0.9, fill:'none'},
  ]},
  wine:{layers:[
    {d:'M8 3h8v6a4 4 0 0 1-8 0z M12 13v7 M8 20h8', fill:C.wine, stroke:'#3a0a1a', sw:1.3},
    {d:'M9 7c2 1 4 1 6 0', stroke:'#fff', sw:0.8, fill:'none'},
  ]},
  malt:{layers:[
    {d:'M12 21V4 M12 8c-3 0-5-2-5-4 2 0 5 2 5 4 M12 10c-3 0-5-2-5-4 2 0 5 2 5 4 M12 12c-3 0-5-2-5-4 2 0 5 2 5 4 M12 8c3 0 5-2 5-4-2 0-5 2-5 4 M12 10c3 0 5-2 5-4-2 0-5 2-5 4 M12 12c3 0 5-2 5-4-2 0-5 2-5 4', stroke:C.malt, sw:1.4, fill:'none'},
  ]},
  mineral:{layers:[
    {d:'M5 20l3-12 4 3 3-8 5 17z', fill:C.mineral, stroke:'#3a4a50', sw:1.3},
    {d:'M8 13l2 1 M14 11l2 3', stroke:'#aab4bc', sw:0.9, fill:'none'},
  ]},
  smoke:{layers:[
    {d:'M4 10c2-1 4 1 6 0s3-1 5 0 3 1 5 0 M4 14c2-1 4 1 6 0s3-1 5 0 3 1 5 0 M4 18c2-1 4 1 6 0s3-1 5 0 3 1 5 0', stroke:C.smoke, sw:1.5, fill:'none'},
  ]},
  fermented:{layers:[
    {d:'M8 4h8v4l2 3v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7l2-3z', fill:C.fermented, stroke:'#6a7a3a', sw:1.3},
    {d:'M7 13c2 1 3-1 5 0s3-1 5 0', stroke:C.fermentedLiquid, sw:1, fill:'none'},
  ]},
  cheese:{layers:[
    {d:'M3 10l9-5 9 5v8H3z', fill:C.cheese, stroke:'#a8800a', sw:1.3},
    {d:'M7 13a0.8 0.8 0 1 0 0 0.01 M12 12a1 1 0 1 0 0 0.01 M16 14a0.8 0.8 0 1 0 0 0.01 M10 16a0.8 0.8 0 1 0 0 0.01', fill:'#a8800a', stroke:'none'},
  ]},
  champagne:{layers:[
    {d:'M9 3h6l-1 7a2 2 0 0 1-4 0z M12 12v7 M9 20h6', fill:C.champagne, stroke:'#a08810', sw:1.3},
    {d:'M11 7a0.5 0.5 0 1 0 0 0.01 M13 6a0.5 0.5 0 1 0 0 0.01 M11 8a0.4 0.4 0 1 0 0 0.01', fill:C.champagneBubble, stroke:'none'},
  ]},
  whiskey:{layers:[
    {d:'M7 8h10l-1 12H8z', fill:C.whiskey, stroke:'#5a3010', sw:1.3},
    {d:'M9 12h6 M8.5 16h7', stroke:'#f8e27a', sw:0.8, fill:'none'},
  ]},
  milk:{layers:[
    {d:'M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3z', fill:C.milk, stroke:C.milkLine, sw:1.3},
    {d:'M9 13c1 1 5 1 6 0', stroke:C.milkLine, sw:0.9, fill:'none'},
  ]},
  yogurt:{layers:[
    {d:'M6 8h12l-1 12H7z', fill:C.yogurt, stroke:C.yogurtLine, sw:1.3},
    {d:'M8 11a0.6 0.6 0 1 0 0 0.01 M12 12a0.6 0.6 0 1 0 0 0.01 M15 14a0.6 0.6 0 1 0 0 0.01', fill:C.candy, stroke:'none'},
  ]},
  soda:{layers:[
    {d:'M7 6h10l-1 14H8z', fill:C.soda, stroke:'#4a74a8', sw:1.3},
    {d:'M9 10a0.6 0.6 0 1 0 0 0.01 M13 12a0.6 0.6 0 1 0 0 0.01 M11 16a0.6 0.6 0 1 0 0 0.01 M14 9a0.5 0.5 0 1 0 0 0.01', fill:C.sodaBubble, stroke:'none'},
  ]},
  popcorn:{layers:[
    {d:'M7 10h10l-1 10H8z', fill:C.popcornBase, stroke:'#6a3818', sw:1.3},
    {d:'M8 10c-1-3 1-5 3-4 0-2 3-2 3 0 1-2 4-1 4 1s-2 3-4 3H8z', fill:C.popcorn, stroke:'#8a6018', sw:1.3},
    {d:'M10 14l1-1 M13 16l1-1', stroke:'#a8801a', sw:0.9, fill:'none'},
  ]},
  starfruit:{layers:[
    {d:'M12 3l2 5 5 1-3 3 1 5-5-2-5 2 1-5-3-3 5-1z', fill:C.starfruit, stroke:'#8a7a10', sw:1.3},
    {d:'M18 4c1-1 2-1 2 0', stroke:C.starfruitLf, sw:1.3, fill:'none'},
  ]},
  // ── ROASTY (biscuit/toast/browned) ──
  roasty:{layers:[
    {d:'M5 6h14v12H5z', fill:C.roastyHi, stroke:C.roastyDark, sw:1.3},
    {d:'M5 6h14v4H5z', fill:C.roasty, stroke:'none'},
    {d:'M7 8a0.6 0.6 0 1 0 0 0.01 M10 8a0.6 0.6 0 1 0 0 0.01 M14 8a0.6 0.6 0 1 0 0 0.01 M17 8a0.6 0.6 0 1 0 0 0.01', fill:C.roastyDark, stroke:'none'},
    {d:'M7 13h10 M7 16h10', stroke:C.roastyDark, sw:0.9, fill:'none'},
  ]},
  // ── STATE / MOOD ──
  degassing:{layers:[
    {d:'M9 9a2 2 0 1 0 0 0.01 M15 13a1.6 1.6 0 1 0 0 0.01 M8 17a1.2 1.2 0 1 0 0 0.01 M14 6a1 1 0 1 0 0 0.01 M18 18a1 1 0 1 0 0 0.01', fill:'none', stroke:'#ff5a1f', sw:1.4},
  ]},
  opened:{layers:[
    {d:'M6 10v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9 M6 10V6h12v4', fill:'#f5efe2', stroke:'#3a2818', sw:1.4},
    {d:'M10 2v4 M14 2v4 M9 14c1 2 5 2 6 0', stroke:'#3a2818', sw:1.4, fill:'none'},
  ]},
  empty:{layers:[
    {d:'M5 8h14l-2 12H7z M3 4h18l-2 4H5z', fill:'rgba(245,239,226,0.2)', stroke:'#8a8580', sw:1.3},
    {d:'M9 12l6 6 M15 12l-6 6', stroke:'#c04030', sw:1.4, fill:'none'},
  ]},
  star:{layers:[
    {d:'M12 3l2.5 6.5L21 10l-5 4.5L17.5 21 12 17.5 6.5 21 8 14.5 3 10l6.5-0.5z', fill:'#f6cf3f', stroke:'#b5933a', sw:1.3},
  ]},
  heart:{layers:[
    {d:'M12 21s-8-5-8-11c0-3 2-5 5-5 1 0 2 1 3 2 1-1 2-2 3-2 3 0 5 2 5 5 0 6-8 11-8 11z', fill:'#ff5a1f', stroke:'#8a1a08', sw:1.3},
  ]},
  // ── PROCESSES ──
  natural:{layers:[
    {d:'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z', fill:'#d9a84a', stroke:'#8a6a2a', sw:1.4},
    {d:'M12 4c-3 4-3 12 0 16 M12 4c3 4 3 12 0 16 M4 12h16', stroke:'#8a6a2a', sw:1, fill:'none'},
  ]},
  washed:{layers:[
    {d:'M12 3C8 9 5 13 5 16c0 3 3 5 7 5s7-2 7-5c0-3-3-7-7-13z', fill:'#8ab4e8', stroke:'#2847a8', sw:1.4},
    {d:'M8 15c1 2 3 2 4 1', stroke:'#fff', sw:1.2, fill:'none'},
  ]},
  honey_process:{layers:[
    {d:'M6 12l6-8 6 8-6 8z', fill:'#e3a11a', stroke:'#8a6010', sw:1.4},
    {d:'M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', fill:'#f6dd7a', stroke:'#8a6010', sw:1.1},
  ]},
  anaerobic:{layers:[
    {d:'M7 4h10a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1z', fill:'#2a6a4a', stroke:'#0a3a28', sw:1.4},
    {d:'M9 9h6 M9 13h6 M9 17h6', stroke:'#8bd4a8', sw:1, fill:'none'},
    {d:'M10 7a0.6 0.6 0 1 0 0 0.01 M14 11a0.6 0.6 0 1 0 0 0.01 M11 15a0.6 0.6 0 1 0 0 0.01', fill:'#c6ff3d', stroke:'none'},
  ]},
  carbonic:{layers:[
    {d:'M6 5h12v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z', fill:'#7a3a5a', stroke:'#3a0a2a', sw:1.4},
    {d:'M9 10a0.7 0.7 0 1 0 0 0.01 M13 8a0.7 0.7 0 1 0 0 0.01 M10 14a0.7 0.7 0 1 0 0 0.01 M14 16a0.7 0.7 0 1 0 0 0.01 M11 18a0.7 0.7 0 1 0 0 0.01', fill:'#f0c6d8', stroke:'none'},
  ]},
  // ── BREW ──
  pourover:{layers:[
    {d:'M5 5h14l-4 10H9z M10 15v5h4v-5', fill:'#f5efe2', stroke:'#3a2818', sw:1.4},
    {d:'M12 2v4', stroke:'#3a2818', sw:1.4, fill:'none'},
    {d:'M11 16h2v3h-2z', fill:'#6a3a1a', stroke:'none'},
  ]},
  v60:{layers:[
    {d:'M4 5h16l-8 14z', fill:'#c04030', stroke:'#6a1818', sw:1.4},
    {d:'M6 5l6 14 M18 5l-6 14 M8 5l4 10 M16 5l-4 10 M10 5l2 6 M14 5l-2 6', stroke:'#fff', sw:0.8, fill:'none'},
  ]},
  kalita:{layers:[
    {d:'M5 6h14l-2 11H7z', fill:'#f5efe2', stroke:'#3a2818', sw:1.4},
    {d:'M8 6v11 M12 6v11 M16 6v11', stroke:'#3a2818', sw:0.9, fill:'none'},
    {d:'M10 19a0.6 0.6 0 1 0 0 0.01 M12 19a0.6 0.6 0 1 0 0 0.01 M14 19a0.6 0.6 0 1 0 0 0.01', fill:'#3a2818', stroke:'none'},
  ]},
  espresso:{layers:[
    {d:'M5 8h14l-1 10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z M19 10h3v4h-3', fill:'#f5efe2', stroke:'#3a2818', sw:1.4},
    {d:'M7 11h10l-1 6H8z', fill:'#3a1a08', stroke:'none'},
    {d:'M9 4c0 2 2 2 2 4 M13 4c0 2 2 2 2 4', stroke:'#8a8580', sw:1.2, fill:'none'},
  ]},
  ice:{layers:[
    {d:'M12 3v18 M5 7l14 10 M19 7L5 17 M3 12h18', stroke:'#8ab4e8', sw:1.4, fill:'none'},
    {d:'M7 5l2-2 2 2 M13 19l2 2 2-2 M5 10L3 8l2-2 M19 14l2 2-2 2', stroke:'#4a74a8', sw:1.4, fill:'none'},
  ]},
  moka:{layers:[
    {d:'M6 3h8l2 3v3H6z M6 9h10v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z', fill:'#c8c2b8', stroke:'#3a2818', sw:1.4},
    {d:'M16 8v-2h3v3h-3', fill:'#c8c2b8', stroke:'#3a2818', sw:1.3},
  ]},
  // ── MOOD ──
  sun:{layers:[
    {d:'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z', fill:'#f6cf3f', stroke:'#b5933a', sw:1.3},
    {d:'M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M19 5l-2 2 M7 17l-2 2', stroke:'#b5933a', sw:1.3, fill:'none'},
  ]},
  rain:{layers:[
    {d:'M6 14c-3 0-3-5 0-5 0-4 6-4 7-1 4-1 6 2 5 5 2 1 2 4-1 4H7c-2 0-3-2-1-3z', fill:'#c4c8cc', stroke:'#6a7078', sw:1.3},
    {d:'M8 19l-1 3 M12 19l-1 3 M16 19l-1 3', stroke:'#2847ff', sw:1.5, fill:'none'},
  ]},
  snow:{layers:[
    {d:'M12 3v18 M5 7l14 10 M19 7L5 17 M3 12h18', stroke:'#8ab4e8', sw:1.3, fill:'none'},
    {d:'M12 10a1.5 1.5 0 1 0 0 0.01', fill:'#fff', stroke:'#8ab4e8', sw:1},
  ]},
  moon:{layers:[
    {d:'M20 14c-2 3-6 5-10 4-5-1-8-5-7-10 0-3 2-4 3-4-1 5 2 9 7 10 3 0 5-1 7 0z', fill:'#f5efe2', stroke:'#6a5a3a', sw:1.3},
  ]},
  cloud:{layers:[
    {d:'M6 16c-3 0-3-5 0-5 0-4 6-4 7-1 4-1 6 2 5 5 2 1 2 4-1 4H7c-2 0-3-2-1-3z', fill:'#e0e4e8', stroke:'#6a7078', sw:1.3},
  ]},
  coffee_cup:{layers:[
    {d:'M6 9h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z M18 11h3v3h-3', fill:'#f5efe2', stroke:'#3a2818', sw:1.3},
    {d:'M10 3c0 2 2 2 2 4 M14 3c0 2-2 2-2 4', stroke:'#8a8580', sw:1.2, fill:'none'},
  ]},
};

// ────────────────────────────────────────────────────────────
// render helper
// ────────────────────────────────────────────────────────────
function iconV4(name, size=28) {
  const def = ICON[name];
  if (!def) return '';
  const layers = def.layers.map(l => {
    const fill = l.fill || 'none';
    const stroke = l.stroke || 'none';
    const sw = (l.sw || 1.3);
    return `<path d="${l.d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${layers}</svg>`;
}

// ────────────────────────────────────────────────────────────
// keyword → icon key lookup
// Mirrors the production FCAT buckets; adds "단맛", "허니" etc.
// Returns the icon key name to be rendered.
// ────────────────────────────────────────────────────────────
const BUCKETS = [
  // stone fruit
  ['peach',       ['복숭아','황도','백도','피치','살구','복숭아껍질','복숭아즙','복숭아잼','살구잼','넥타린','apricot','peach','nectarine','white peach']],
  ['plum',        ['자두','자두잼','plum','damson','prune plum']],
  ['ume',         ['매실','매실청','매실향','청매','ume','greengage','green plum']],
  // citrus
  ['lemon',       ['레몬','시트러스','시트론','유자','라임','유자청','청귤','레몬필','레몬즙','라임즙','lemon','citrus','citron','yuzu','lime','lemon zest']],
  ['bergamot',    ['베르가못','bergamot']],
  ['orange',      ['오렌지','감귤','귤','만다린','클레멘타인','자몽','그레이프프루트','금귤','오렌지필','자몽필','핑크자몽','블러드오렌지','orange','mandarin','tangerine','grapefruit','clementine','blood orange','orange peel','kumquat']],
  // berry
  ['blueberry',   ['블루베리','오디','뽕나무','엘더베리','blueberry','mulberry','loganberry','elderberry','huckleberry','bilberry']],
  ['blackberry',  ['블랙커런트','블랙베리','카시스','blackcurrant','blackberry','cassis','boysenberry']],
  ['strawberry',  ['딸기','라즈베리','딸기잼','strawberry','raspberry','mixed berry','wild berry']],
  ['cherry',      ['체리','크랜베리','다크체리','건체리','건크랜베리','오미자','오미자청','석류','구기자','cherry','cranberry','dark cherry','maraschino','morello','dried cherry','pomegranate','goji']],
  // tropical
  ['pineapple',   ['파인애플','트로피컬','잭프루트','pineapple','tropical','jackfruit']],
  ['mango',       ['망고','mango','alphonso','ataulfo']],
  ['melon',       ['멜론','메론','리치','구아바','파파야','용안','melon','lychee','guava','papaya','honeydew','longan']],
  ['greenApple',  ['청사과','풋사과','그린망고','그린 망고','덜익은망고','green apple','granny smith','green mango','unripe mango','raw mango']],
  ['redApple',    ['사과','적사과','홍사과','apple','red apple','fuji apple']],
  ['kiwi',        ['키위','kiwi','kiwifruit']],
  ['pear',        ['배','배청','배향','모과','모과청','배꿀','비파','pear','quince','asian pear','nashi','loquat']],
  ['coconut',     ['코코넛','코코넛밀크','coconut','coconut milk']],
  ['watermelon',  ['수박','watermelon']],
  ['passion',     ['패션후르츠','패션','패숀','히비스커스','passion','hibiscus','passionfruit','passion fruit']],
  ['olive',       ['올리브','올리브오일','olive','olive oil','green olive']],
  ['bellPepper',  ['피망','토마토줄기','채소향','야채향','bell pepper','tomato stem','tomato leaf','capsicum','green pepper']],
  // dried
  ['raisin',      ['건포도','건자두','건살구','건망고','건과일','대추야자','타마린드','건포도향','raisin','sultana','dried fruit','dried grape','dried apricot','dried mango','prune','tamarind']],
  ['fig',         ['무화과','건무화과','무화과잼','fig','dried fig','fig jam']],
  // sweet
  ['caramel',     ['캐러멜','카라멜','다크캐러멜','다크카라멜','캐러멜소스','카라멜라떼','캐러멜라떼','토피','버터스카치','caramel','dark caramel','toffee','butterscotch','dulce de leche']],
  ['cotton',      ['솜사탕','솜사탕향','cotton candy','candy floss']],
  ['chocolate',   ['초콜릿','초콜렛','다크초코','카카오','밀크초콜릿','화이트초콜릿','모카','초콜릿향','cacao','cocoa','chocolate','dark chocolate','milk chocolate','white chocolate','mocha','ganache']],
  ['honey',       ['꿀','벌꿀','꿀향','허니','honey향','꿀맛','대추','메이플','당밀','maple','molasses','treacle','agave','honey','clean sweet','clean sweetness']],
  // 단맛 family — map to honey by default
  ['honey',       ['단맛','단 맛','달콤','달콤함','달큰','달달','맑은단맛','맑은 단맛','깨끗한단맛','깨끗한 단맛','깔끔한단맛','깔끔한 단맛','클린 스위트','sweet','sweetness','sweet note']],
  ['sugarYellow', ['황설탕','브라운슈거','흑당','brown sugar','raw sugar','demerara','muscovado']],
  ['sugarDark',   ['흑설탕','dark sugar','black sugar']],
  ['sugarWhite',  ['백설탕','설탕','슈가','white sugar','sugar','cane sugar','sugar cane']],
  ['vanilla',     ['바닐라','바닐라빈','크렘브륄레','바닐라향','vanilla','vanilla bean','creme brulee']],
  ['candy',       ['젤리','캔디','사탕','과일사탕','과일젤리','하드캔디','보리사탕','jelly','candy','sour candy','gummy','bubblegum','hard candy','fruit candy']],
  // floral
  ['jasmine',     ['자스민','재스민','쟈스민','제스민','제즈민','자스민향','재스민향','자스민차','자스민티','플로럴','벚꽃','오렌지블라썸','jasmine','jasmin','jasminum','blossom','floral','flower','orange blossom']],
  ['rose',        ['장미','로즈','로즈힙','rose','rosehip','damask rose']],
  ['lavender',    ['라벤더','라일락','백합','튤립','제라늄','lavender','lilac','lily','tulip','geranium']],
  ['chamomile',   ['캐모마일','화이트 플로럴','엘더플라워','아카시아','국화','국화차','캐모마일차','linden','white floral','chamomile','elderflower','chrysanthemum','acacia']],
  ['herb',        ['허브','민트','바질','타임','로즈마리','쑥','쑥향','판단','레몬그라스','herb','mint','basil','thyme','rosemary','pandan','mugwort','sage','eucalyptus','lemongrass']],
  ['grass',       ['풀향','풀내','그라시','헤이','덜익은','새싹','hay','grassy','green','vegetal','under-ripe','fresh grass','cut grass','straw']],
  ['earthy',      ['흙','흙내','어시','머디','earthy','muddy','damp','musty','dirty']],
  // roasty
  ['roasty',      ['로스티','비스킷','토스트','그레이엄','탄맛','roasty','biscuit','graham','toast','browned']],
  // nuts
  ['nut',         ['견과','견과류','아몬드','헤이즐넛','호두','밤','피칸','마카다미아','피스타치오','잣','프랄린','nut','hazel','hazelnut','almond','walnut','chestnut','praline','pecan','macadamia','pistachio','marzipan','pine nut']],
  ['peanut',      ['캐슈넛','캐슈','피넛버터','피넛','땅콩','peanut','peanut butter','cashew']],
  // spice
  ['ginger',      ['생강','생강청','진저','생강향','ginger','ginger root']],
  ['anise',       ['아니스','스타아니스','리코리스','감초','펜넬','anise','star anise','licorice','fennel','absinthe']],
  ['nutmeg',      ['넛메그','시나몬','계피','육두구','후추','흑후추','nutmeg','cinnamon','allspice','pepper','black pepper','white pepper','spicy']],
  ['clove',       ['정향','카다몬','일라이치','팔각','올스파이스','clove','cardamom']],
  ['butter',      ['버터','크림','버터크림','밀키','butter','cream','clotted cream','browned butter','milky','brown butter']],
  // tea & beverage
  ['tea',         ['홍차','얼그레이','보이차','녹차','우롱','루이보스','다르질링','차향','earl grey','green tea','oolong','pu-erh','rooibos','darjeeling','assam','ceylon','sencha','matcha']],
  ['cereal',      ['그래놀라','오트밀','후르트링','시리얼','귀리','muesli','granola','oatmeal','porridge','oat']],
  ['tobacco',     ['타바코','담배','재','어시향','탄향','탄내','tobacco','ashy','ash','smoky dark']],
  ['wood',        ['우디','시더','오크','나무','우드','나무향','woody','cedar','oak','sandalwood','wood','teak']],
  ['wine',        ['와인','포트와인','레드와인','화이트와인','와이니','포트','wine','red wine','white wine','port','winey','vinous']],
  ['malt',        ['몰트','맥아','그레인','곡물','슈가케인','슈가 케인','식혜','누룽지','malt','grain','barley','rye','sugar cane','wheat','rice','sikhye']],
  ['mineral',     ['미네랄','감칠맛','짭조름','mineral','umami','savory','salty','brine','minerality','terroir']],
  ['smoke',       ['훈연','스모키','피트','훈제','smoky','peaty','peat','burnt','campfire','smoked']],
  ['fermented',   ['발효','발효향','콤부차','막걸리','사케','미림','과발효','식초산','주류','fermented','kombucha','winey-sour','lactic','sake','makgeolli','mirin','vinegar','acetic','boozy']],
  ['cheese',      ['버터산','치즈향','젖산','유산균','치즈','butyric','cheesy','lactic acid','dairy sour']],
  ['champagne',   ['샴페인','샴페인산미','스파클링산미','스파클링','탄산산미','champagne','sparkling acidity','effervescent']],
  ['whiskey',     ['위스키','럼','버번','whiskey','rum','bourbon','whisky','spirit']],
  ['milk',        ['밀크','우유','연유','두유','오트밀크','밀크티','라떼','milk','dairy','condensed milk','oat milk','soy milk','milk tea','latte']],
  ['yogurt',      ['요거트','요구르트','크림치즈','yogurt','yoghurt','cream cheese','buttermilk','kefir']],
  ['soda',        ['소다','탄산','사이다','soda','sparkling','fizzy','tonic','cola','cider']],
  ['popcorn',     ['팝콘','popcorn']],
  ['starfruit',   ['스타프루츠','star fruit','starfruit','carambola']],
];

function lookup(word) {
  if (!word) return null;
  const w = String(word).trim().toLowerCase();
  for (const [iconKey, words] of BUCKETS) {
    for (const kw of words) {
      if (w === kw.toLowerCase() || w.includes(kw.toLowerCase())) return iconKey;
    }
  }
  return null;
}

if (typeof window !== 'undefined') Object.assign(window, { ICON_V4: ICON, iconV4, lookupIcon: lookup, BUCKETS_V4: BUCKETS });
