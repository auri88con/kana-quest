// Katakana mnemonics, keyed by character.
//
// Same two fields as everywhere else. Katakana's `why` has a different job from
// hiragana's: where a hiragana is a whole kanji written cursively, a katakana is
// usually one *fragment* lifted out of a kanji and left as it is. That makes the
// source easier to see — and it also means a lot of katakana look almost exactly
// like the kanji or radical they came from. Those collisions are the real trap
// (カ vs 力, エ vs 工, ロ vs 口, ニ vs 二, タ vs 夕, ト vs 卜, ム vs 厶, リ vs 刂),
// so the `why` line calls each one out where it applies.
//
// The four look-alike pairs that catch every learner — シ/ツ and ソ/ン — are
// handled together, and both lean on the same trick: the hiragana you already
// know tells you which way the strokes travel.

export const katakanaMnemonics = {
  // ア row
  'ア': {
    story: 'A capital A that has lost its right leg and leans back to compensate.',
    why: 'From the left side of 阿. Watch it against マ (ma): ア has a straight vertical tail, マ has a curl.',
  },
  'イ': {
    story: 'Two strokes leaning together, like a person hunched forward.',
    why: 'From the left of 伊 — which is the 亻 person radical, so this really is a little person.',
  },
  'ウ': {
    story: 'A hat with a stubby tail. Same hat as the hiragana う, squared off.',
    why: 'From the top of 宇 — the 宀 roof radical again. Compare it with ワ (wa): ウ has the tick on top, ワ has none.',
  },
  'エ': {
    story: 'Two horizontals joined by an upright. An I-beam, standing up.',
    why: 'From 江 (river). It is drawn identically to the kanji 工 (work) — context is the only way to tell them apart.',
  },
  'オ': {
    story: 'A cross with a hook and a flick, like a signpost blown sideways.',
    why: 'From the left of 於. Compare it with the kanji 木 (tree): オ has no left-hand leg.',
  },

  // カ row
  'カ': {
    story: 'A hook with a stroke through it. It is a kite (カイト) again, but with sharper edges.',
    why: 'From 加 (add) — and it is written exactly like the kanji 力 (power). Same shape, different job.',
  },
  'キ': {
    story: 'A key again, but the katakana one has had its curly bit snapped off.',
    why: 'From the top of 幾, the same kanji that gives き. Two crossbars and an upright.',
  },
  'ク': {
    story: 'A beak, like the hiragana く but with a corner instead of a curve.',
    why: 'From the top of 久. Count strokes against タ (ta): ク has two, タ has three.',
  },
  'ケ': {
    story: 'Like ク with an extra stroke laid across the top. A keg with a lid on.',
    why: 'From the top of 介. It is ク plus one horizontal — that is the whole difference.',
  },
  'コ': {
    story: 'A bracket. Two lines and a corner, nothing more.',
    why: 'From the top of 己 (self), the same source as こ. Compare it with ユ (yu): コ opens right, ユ opens left.',
  },

  // サ row
  'サ': {
    story: 'Two uprights through a crossbar, like a small fence.',
    why: 'From the top of 散. Near-identical to the 艹 grass radical — サ has a longer left upright.',
  },
  'シ': {
    story: 'Two dots stacked up the left side, and a stroke sweeping UP from the bottom left.',
    why: 'The great trap, with ツ. Both come from the same era of scribbling, and the tell is direction: シ sweeps upward, like the hiragana し it shares a sound with. Dots on the left, stroke going up.',
  },
  'ス': {
    story: 'A stroke across the top with a leg kicking out below.',
    why: 'From the top of 須. Compare it with ヌ (nu): ス has a straight diagonal leg, ヌ has a crossing one.',
  },
  'セ': {
    story: 'The hiragana せ with its curl straightened out.',
    why: 'From 世 (world), the same source as せ, and it kept more of the original shape.',
  },
  'ソ': {
    story: 'One short dot and one long stroke going DOWN to the left.',
    why: 'The other trap, with ン. ソ goes downward, like the hiragana そ. Short mark at the top, long stroke falling away.',
  },

  // タ row
  'タ': {
    story: 'ク with a stroke through it. Ta-da.',
    why: 'From the left of 多 (many) — and it is written exactly like the kanji 夕 (evening). Also: ク is two strokes, タ is three.',
  },
  'チ': {
    story: 'A cross with a curl at the bottom, like a cheerful number 7.',
    why: 'From the top of 千 (thousand), a kanji you already know. Compare it with テ (te): チ has one horizontal, テ has two.',
  },
  'ツ': {
    story: 'Two dots along the TOP, and a stroke sweeping DOWN to the left.',
    why: 'The シ trap again, from the other side. ツ goes downward like the hiragana つ. Dots on top, stroke falling — シ has them on the left, sweeping up.',
  },
  'テ': {
    story: 'Two horizontals and a hook. A table with a very short leg.',
    why: 'From the top of 天 (heaven), the same source as て. Two crossbars is what separates it from チ.',
  },
  'ト': {
    story: 'An upright with one tick sticking out to the right. A toe again.',
    why: 'From the left of 止 (stop), the same source as と. It is written exactly like the radical 卜 (divination), which is in the app.',
  },

  // ナ row
  'ナ': {
    story: 'A cross with the horizontal shifted up. A knife and a nail.',
    why: 'From the top of 奈, the same source as な. It is the hand shape that sits on top of 右 and 左.',
  },
  'ニ': {
    story: 'Two lines. Ni means two, and there are two of them.',
    why: 'From 二 (two) — and it is written identically to that kanji. The luckiest coincidence in the whole script.',
  },
  'ヌ': {
    story: 'A stroke across the top with a leg crossing under it.',
    why: 'From 奴, the same source as ぬ. Against ス (su): ヌ’s leg crosses back through, ス’s does not.',
  },
  'ネ': {
    story: 'A tick, a cross and a flick — a little tangle of strokes.',
    why: 'From the left of 祢 — the 礻 altar radical, same as ね. It looks very like that radical still.',
  },
  'ノ': {
    story: 'One diagonal stroke. That is the whole character.',
    why: 'From 乃, the same source as の. It is also the first stroke of ソ, ン, ハ and ヌ — learn it and four others get easier.',
  },

  // ハ row
  'ハ': {
    story: 'Two strokes falling apart from each other.',
    why: 'From 八 (eight) — written identically to that kanji, and to the 八 radical. In words it is ha; on its own it is usually eight.',
  },
  'ヒ': {
    story: 'An upright with a bar coming off it, like a flag on a pole.',
    why: 'From the bottom of 比 (compare), the same source as ひ. It is near-identical to the radical 匕 (spoon).',
  },
  'フ': {
    story: 'A single bent stroke. A hook with no barb.',
    why: 'From the top-left of 不 (not), the same source as ふ. Compare with ワ and ウ — フ is the one with no left-hand stroke at all.',
  },
  'ヘ': {
    story: 'A gentle hill. Identical to the hiragana へ, which makes it the one free character in the language.',
    why: 'From 部, same as へ. The two scripts genuinely share this shape — the katakana one is sometimes drawn slightly sharper.',
  },
  'ホ': {
    story: 'A cross with two feet kicking out at the bottom.',
    why: 'From the right of 保 (protect), the same source as ほ. It looks very like the kanji 木 (tree) — ホ’s lower strokes are detached dots.',
  },

  // マ row
  'マ': {
    story: 'A bent stroke with a tail curling in underneath.',
    why: 'From the top of 万 (ten thousand), a kanji you already know. Against ア: マ curls at the bottom, ア runs straight down.',
  },
  'ミ': {
    story: 'Three short strokes stacked up. Mi means three, and there are three of them.',
    why: 'From 三 (three) — written as that kanji tipped and shortened. Like ニ, the number and the sound line up.',
  },
  'ム': {
    story: 'A small angular scoop.',
    why: 'From the top of 牟. It is written exactly like the radical 厶 (private), which is in the app inside 私.',
  },
  'メ': {
    story: 'A cross drawn on the diagonal. An X marking the spot.',
    why: 'From 女 (woman), the same source as め. Two strokes, crossing.',
  },
  'モ': {
    story: 'A horizontal with a hooked upright through it.',
    why: 'From 毛 (hair), the same source as も. It kept more of the original than the hiragana did.',
  },

  // ヤ row
  'ヤ': {
    story: 'A stroke with a flick, and an upright driven through it.',
    why: 'From 也, the same source as や. Only three characters in this row — no yi or ye in modern Japanese.',
  },
  'ユ': {
    story: 'A bracket facing the other way from コ.',
    why: 'From the bottom of 由 (reason), the same source as ゆ. ユ opens to the left, コ opens to the right.',
  },
  'ヨ': {
    story: 'Three horizontals joined down the right. A comb with three teeth.',
    why: 'From the right of 与 (give), the same source as よ. Watch it against ヲ (wo), which has a diagonal tail.',
  },

  // ラ row
  'ラ': {
    story: 'A short bar with a big hook hanging under it.',
    why: 'From the top of 良 (good), the same source as ら. Against ヲ: ラ’s lower stroke curls, ヲ’s cuts straight across.',
  },
  'リ': {
    story: 'Two uprights, the right one longer and hooked.',
    why: 'From the right of 利 (profit), the same source as り. It is written exactly like the 刂 blade radical.',
  },
  'ル': {
    story: 'Two legs, one bending outward. Someone walking away.',
    why: 'From the bottom of 流 (flow). It is written exactly like the radical 儿 (legs), which is in the app inside 見.',
  },
  'レ': {
    story: 'One stroke down, then a flick up to the right. A tick.',
    why: 'From the right of 礼 (courtesy), the same source as れ. One stroke — one of the easiest in the script.',
  },
  'ロ': {
    story: 'A square. That is it.',
    why: 'From 呂, the same source as ろ. It is written exactly like the kanji 口 (mouth) — a very common mix-up.',
  },

  // ワ row
  'ワ': {
    story: 'A hat with no tick on top and a short leg. Like ウ, minus the topknot.',
    why: 'From the top of 和 (harmony), the same source as わ. Three shapes to keep apart: ウ has a tick, ワ does not, フ has no left stroke.',
  },
  'ヲ': {
    story: 'ヨ with the bottom line pulled out into a tail.',
    why: 'From 乎. You will hardly ever meet it — katakana particles are rare, so the object marker is almost always written を.',
  },
  'ン': {
    story: 'One short dot and one stroke sweeping UP from the bottom left.',
    why: 'The ソ trap, from the other side. ン goes upward like the hiragana ん; ソ falls downward like そ. Same rule as シ and ツ, one row along.',
  },
}

// Voiced (濁音 dakuon): the base katakana plus two ticks, exactly as in hiragana.
export const katakanaVoicedMnemonics = {
  'ガ': { story: 'The sharp-edged kite (カ) picks up two ticks. K goes gravelly: GA.', why: 'カ + dakuten (゛). Note the base is also the kanji 力 — the ticks make it unmistakably katakana.' },
  'ギ': { story: 'The stripped-down key (キ) with ticks. KI to GI.', why: 'キ + dakuten. KI becomes GI, on the key with its curl snapped off.' },
  'グ': { story: 'The cornered beak (ク) with ticks. KU to GU.', why: 'ク + dakuten. Still two strokes plus the ticks — タ has three.' },
  'ゲ': { story: 'The lidded keg (ケ) with ticks. KE to GE.', why: 'ケ + dakuten. KE becomes GE. ケ is ク plus a horizontal, and the ticks go on top of both.' },
  'ゴ': { story: 'The bracket (コ) with ticks. KO to GO.', why: 'コ + dakuten. KO becomes GO. The bracket still opens right — ユ opens left.' },
  'ザ': { story: 'The little fence (サ) starts buzzing. SA to ZA.', why: 'サ + dakuten. SA becomes ZA. The base is near-identical to the 艹 grass radical.' },
  'ジ': { story: 'The upward sweep (シ) with ticks. SHI to JI.', why: 'シ + dakuten. Watch the base: dots on the LEFT means シ, so this is ji, not zu.' },
  'ズ': { story: 'The kicking leg (ス) with ticks. SU to ZU.', why: 'ス + dakuten. SU becomes ZU. ス’s leg runs straight; ヌ’s crosses back through.' },
  'ゼ': { story: 'The straightened せ (セ) with ticks. SE to ZE.', why: 'セ + dakuten. SE becomes ZE, on the one katakana that kept 世’s shape almost intact.' },
  'ゾ': { story: 'The downward sweep (ソ) with ticks. SO to ZO.', why: 'ソ + dakuten. Compare ジ — the difference is still where the dots sit.' },
  'ダ': { story: 'ク-with-a-stroke (タ) picks up ticks. TA to DA.', why: 'タ + dakuten. The base is also the kanji 夕 (evening).' },
  'ヂ': { story: 'The cheerful 7 (チ) with ticks. Sounds identical to ジ, and is just as rare.', why: 'チ + dakuten. Modern Japanese writes this sound ジ except in a few compounds.' },
  'ヅ': { story: 'The downward-sweeping ツ with ticks. Sounds the same as ズ.', why: 'ツ + dakuten. Like ヂ, it survives mostly inside compound words.' },
  'デ': { story: 'The two-bar table (テ) with ticks. TE to DE.', why: 'テ + dakuten. TE becomes DE. Two crossbars means テ; one means チ.' },
  'ド': { story: 'The ticked toe (ト) gets two more ticks. TO to DO.', why: 'ト + dakuten. The base is also the radical 卜.' },
  'バ': { story: 'The two falling strokes (ハ) pick up ticks. HA to BA.', why: 'ハ + dakuten. The base is also the kanji 八 (eight) — again, the ticks settle it.' },
  'ビ': { story: 'The flag on a pole (ヒ) with ticks. HI to BI.', why: 'ヒ + dakuten. HI becomes BI. The base is also the 匕 spoon radical.' },
  'ブ': { story: 'The bent hook (フ) with ticks. FU to BU.', why: 'フ + dakuten. FU becomes BU. フ is the one of ウ / ワ / フ with no left-hand stroke.' },
  'ベ': { story: 'The free little hill (ヘ) with ticks. HE to BE.', why: 'ヘ + dakuten — and it is still identical to the hiragana べ.' },
  'ボ': { story: 'The kicking cross (ホ) with ticks. HO to BO.', why: 'ホ + dakuten. HO becomes BO. ホ’s lower strokes are detached dots — 木’s are joined legs.' },
}

// Half-voiced (半濁音 handakuon): the circle, and only on the ハ row.
export const katakanaHandakuonMnemonics = {
  'パ': { story: 'ハ with a balloon floating over it. HA pops to PA.', why: 'ハ + handakuten (゜). Ticks make BA, the circle makes PA.' },
  'ピ': { story: 'The flag (ヒ) with a bubble on top. HI to PI.', why: 'ヒ + handakuten. HI becomes PI. Circle for P, ticks for B, both on the same ヒ.' },
  'プ': { story: 'The hook (フ) blowing a bubble. FU to PU.', why: 'フ + handakuten. FU becomes PU — and プ turns up constantly in borrowed words.' },
  'ペ': { story: 'The little hill (ヘ) with a balloon. HE to PE.', why: 'ヘ + handakuten. HE becomes PE, on the shape both scripts share.' },
  'ポ': { story: 'ホ with a bubble. HO to PO.', why: 'ホ + handakuten. Only the ハ row can take the circle.' },
}

// Small-kana blends (拗音 yōon). These matter more in katakana than in hiragana,
// because katakana is where borrowed words live and borrowed words are full of
// them: ニュース, ジュース, チョコレート.
export const katakanaYoonMnemonics = {
  'キャ': { story: 'Key plus a shrunken ヤ. KYA in one beat — キャンプ is a camp.', why: 'キ + small ャ. ki + ya fuses to kya.' },
  'キュ': { story: 'Key plus a small ユ. KYU — like the letter Q, and キューブ is a cube.', why: 'キ + small ュ. ki + yu → kyu.' },
  'キョ': { story: 'Key plus a small ヨ. KYO — 東京, Tokyo.', why: 'キ + small ョ. ki + yo → kyo.' },
  'シャ': { story: 'The upward sweep plus a small ャ. SHA — シャツ is a shirt.', why: 'シ + small ャ. SHA, not SYA.' },
  'シュ': { story: 'シ plus a small ユ. SHU — ジュース’s neighbour on the shelf.', why: 'シ + small ュ. shi + yu → shu.' },
  'ショ': { story: 'シ plus a small ヨ. SHO — ショップ is a shop.', why: 'シ + small ョ. shi + yo → sho.' },
  'チャ': { story: 'The cheerful 7 plus a small ャ. CHA — チャンス is a chance.', why: 'チ + small ャ. CHA, not TYA.' },
  'チュ': { story: 'チ plus a small ユ. CHU — チューブ is a tube.', why: 'チ + small ュ. chi + yu → chu.' },
  'チョ': { story: 'チ plus a small ヨ. CHO — チョコレート, chocolate.', why: 'チ + small ョ. chi + yo → cho.' },
  'ニャ': { story: 'ニ plus a small ャ. NYA — rare in borrowed words, common in comics.', why: 'ニ + small ャ. ni + ya → nya.' },
  'ニュ': { story: 'ニ plus a small ユ. NYU — ニュース is the news.', why: 'ニ + small ュ. ni + yu → nyu.' },
  'ニョ': { story: 'ニ plus a small ヨ. NYO — rare enough that you may never need to write it.', why: 'ニ + small ョ. ni + yo → nyo.' },
  'ヒャ': { story: 'The flag plus a small ャ. HYA — you will meet it counting: 百 is hyaku.', why: 'ヒ + small ャ. hi + ya → hya.' },
  'ヒュ': { story: 'ヒ plus a small ユ. HYU — ヒューズ is a fuse.', why: 'ヒ + small ュ. hi + yu → hyu.' },
  'ヒョ': { story: 'ヒ plus a small ヨ. HYO — ヒョウ is a leopard.', why: 'ヒ + small ョ. hi + yo → hyo.' },
  'ミャ': { story: 'Three strokes plus a small ャ. MYA — one of the rarest blends in the language.', why: 'ミ + small ャ. mi + ya → mya.' },
  'ミュ': { story: 'ミ plus a small ユ. MYU — ミュージック is music.', why: 'ミ + small ュ. mi + yu → myu.' },
  'ミョ': { story: 'ミ plus a small ヨ. MYO — rare, and mostly hiding inside names.', why: 'ミ + small ョ. mi + yo → myo.' },
  'リャ': { story: 'The blade shape plus a small ャ. RYA — the Japanese R is a light tap, halfway to an L.', why: 'リ + small ャ. ri + ya → rya.' },
  'リュ': { story: 'リ plus a small ユ. RYU — リュック is a rucksack.', why: 'リ + small ュ. ri + yu → ryu.' },
  'リョ': { story: 'リ plus a small ヨ. RYO — much commoner in kanji words than in borrowed ones.', why: 'リ + small ョ. ri + yo → ryo.' },
  'ギャ': { story: 'The ticked key plus a small ャ. GYA — ギャラリー is a gallery.', why: 'ギ + small ャ. Ticks first, then shrink the ya.' },
  'ギュ': { story: 'ギ plus a small ユ. GYU — rare in katakana, though 牛 (cow) is gyuu.', why: 'ギ + small ュ. gi + yu → gyu.' },
  'ギョ': { story: 'ギ plus a small ヨ. GYO — ギョーザ is a dumpling.', why: 'ギ + small ョ. gi + yo → gyo.' },
  'ジャ': { story: 'The ticked シ plus a small ャ. JA — ジャム is jam.', why: 'ジ + small ャ. Written ja, not jya.' },
  'ジュ': { story: 'ジ plus a small ユ. JU — ジュース is juice.', why: 'ジ + small ュ. ji + yu → ju.' },
  'ジョ': { story: 'ジ plus a small ヨ. JO — ジョギング is jogging.', why: 'ジ + small ョ. ji + yo → jo.' },
  'ビャ': { story: 'The ticked flag plus a small ャ. BYA — rare, and mostly turns up in counting.', why: 'ビ + small ャ. bi + ya → bya.' },
  'ビュ': { story: 'ビ plus a small ユ. BYU — ビュッフェ is a buffet.', why: 'ビ + small ュ. bi + yu → byu.' },
  'ビョ': { story: 'ビ plus a small ヨ. BYO — 病院 (hospital) starts with this sound.', why: 'ビ + small ョ. bi + yo → byo.' },
  'ピャ': { story: 'The ballooned ヒ plus a small ャ. PYA — one of the rarest of the lot.', why: 'ピ + small ャ. Circle for P, then shrink the ya.' },
  'ピュ': { story: 'ピ plus a small ユ. PYU — コンピューター has one.', why: 'ピ + small ュ. pi + yu → pyu.' },
  'ピョ': { story: 'ピ plus a small ヨ. PYO — ぴょんぴょん is how things hop.', why: 'ピ + small ョ. pi + yo → pyo.' },
}
