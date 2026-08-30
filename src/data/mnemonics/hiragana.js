// Hiragana mnemonics, keyed by character.
//
// `story` is the playful shape hook, as everywhere else. `why` gets to do
// something the kanji stories can't: every hiragana is a cursive squashing of a
// specific kanji, and those source characters are documented rather than
// guessed. Several of them are kanji or radicals already in this app — あ comes
// from 安, さ from 左, つ from 川 — so the `why` line says so and the scripts
// start joining up.
//
// The voiced, half-voiced and small-kana rows each name their own base
// character and the exact sound shift, rather than restating one general rule
// 58 times.

export const hiraganaMnemonics = {
  // あ row
  'あ': {
    story: 'A capital A that has been given a curly tail, and a cross to keep it upright.',
    why: 'A cursive form of 安 (calm, cheap) — the 女 at the bottom of that kanji is what became the loop.',
  },
  'い': {
    story: 'Two little strokes standing side by side, like the two dots on an “i” that got carried away.',
    why: 'From 以. The two strokes are the left and right halves of that character, pulled apart.',
  },
  'う': {
    story: 'A tiny hat sitting on a hook. “Oooh, nice hat.”',
    why: 'From 宇 (eaves, universe). The little stroke on top is the 宀 roof radical, still doing its job.',
  },
  'え': {
    story: 'A ninja mid-kick, one arm out. Say “eh?” at it.',
    why: 'From 衣 (clothing) — the same character that gives the 衤 radical.',
  },
  'お': {
    story: 'Almost あ, but with a flick on the right. Two very similar shapes, and this one has the extra tick.',
    why: 'From 於. Watch it against あ: あ has a closed loop at the bottom, お has an open tail and a flick.',
  },

  // か row
  'か': {
    story: 'A kite (ka-ite) on a string with a little cross-brace.',
    why: 'From 加 (add) — you can still see the 力 on the left of that kanji in the main stroke.',
  },
  'き': {
    story: 'A key with two teeth. Ki, key.',
    why: 'From 幾. In careful handwriting the bottom curve is separate; in most fonts it joins up.',
  },
  'く': {
    story: 'A beak, wide open. Or a cuckoo about to shout.',
    why: 'From 久 (long time), squashed down to its opening stroke.',
  },
  'け': {
    story: 'A keg with a handle on the side.',
    why: 'From 計 (measure) — the 言 radical on the left of that kanji, worn down to two strokes.',
  },
  'こ': {
    story: 'Two lines, like a tiny equals sign that has been knocked skew.',
    why: 'From 己 (self). Two strokes is all that survived.',
  },

  // さ row
  'さ': {
    story: 'Almost き, but with one tooth instead of two. Sa has less than ki.',
    why: 'From 左 (left) — a kanji already in the app. Compare it with き: き has two crossbars, さ has one.',
  },
  'し': {
    story: 'A single hook, curving up at the end. A fishing line waiting for a bite.',
    why: 'From 之. The simplest hiragana there is — one stroke.',
  },
  'す': {
    story: 'A loop with a long tail dropping through it, like a swing hanging from a bar.',
    why: 'From 寸 (measure) — the same 寸 radical that hides inside 時 (hour).',
  },
  'せ': {
    story: 'A pitchfork leaning to the right, with a crossbar.',
    why: 'From 世 (world, generation), which the shape still resembles closely.',
  },
  'そ': {
    story: 'A zigzag, like a road switchbacking down a hill.',
    why: 'From 曽. Written in one stroke in most fonts, two in some — both are correct.',
  },

  // た row
  'た': {
    story: 'A “t” and an “a” standing next to each other, having a chat.',
    why: 'From 太 (fat, thick). The left half is that kanji’s 大, and the right is what is left of the dot.',
  },
  'ち': {
    story: 'Almost さ, but flipped and given a belly. Ch-ch-check the direction.',
    why: 'From 知 (know). It is the mirror trap with さ: さ curves left at the bottom, ち curves right.',
  },
  'つ': {
    story: 'A wave curling over. Tsu-nami.',
    why: 'From 川 (river) — a kanji already in the app, and a fitting source for a wave shape.',
  },
  'て': {
    story: 'A table seen from the side, with one leg.',
    why: 'From 天 (heaven) — also already in the app. The top stroke of 天 is the top of て.',
  },
  'と': {
    story: 'A toe with a thorn stuck in it.',
    why: 'From 止 (stop). Two strokes: the upright and the little tick crossing it.',
  },

  // な row
  'な': {
    story: 'A knot with a loop hanging off the bottom right.',
    why: 'From 奈. The top-left cross is the 大 in that character.',
  },
  'に': {
    story: 'A person on the left, two lines on the right. Two of something — “ni” is also two.',
    why: 'From 仁 (benevolence), which is 亻 person + 二 two — and both of those are in the app already.',
  },
  'ぬ': {
    story: 'A noodle with a loop tied in the end. Careful: め is the same shape without the loop.',
    why: 'From 奴. The loop is the whole difference between ぬ and め — check the tail every time.',
  },
  'ね': {
    story: 'A cat curled up with its tail looping round. Nyeh.',
    why: 'From 祢 — the 礻 altar radical on its left is what became the upright stroke.',
  },
  'の': {
    story: 'One big loop, like a “no entry” sign drawn in a hurry.',
    why: 'From 乃. One stroke, and one of the first kana most learners can write from memory.',
  },

  // は row
  'は': {
    story: 'An “H” that has grown a loop on its right leg. H for ha.',
    why: 'From 波 (wave) — the 氵 water radical is the two strokes on the left.',
  },
  'ひ': {
    story: 'A wide grin, or a nose in profile. “Hee hee.”',
    why: 'From 比 (compare) — a single sweeping stroke taken from it.',
  },
  'ふ': {
    story: 'A mountain with two clouds either side. Or a very confused bird.',
    why: 'From 不 (not). Four strokes, and the one most learners have to slow down for.',
  },
  'へ': {
    story: 'A gentle hill. The easiest kana to write in the entire language.',
    why: 'From 部 — specifically the 阝 on its right, flattened right out.',
  },
  'ほ': {
    story: 'は with an extra bar across the top. Ha, plus a hat, makes ho.',
    why: 'From 保 (protect). Compare it with は: the only difference is that top crossbar.',
  },

  // ま row
  'ま': {
    story: 'Two bars and a loop underneath, like a mast with a sail knot.',
    why: 'From 末 (end, tip). The two horizontals of that kanji survived intact.',
  },
  'み': {
    story: 'A number 3 with a line struck through it. Say “me” at it.',
    why: 'From 美 (beauty). The loop at the bottom left is where that kanji’s lower half went.',
  },
  'む': {
    story: 'A cow with a curl and a little flick. “Muu” is what cows say in Japanese.',
    why: 'From 武 (military). The flick on the right is the last trace of that character’s corner.',
  },
  'め': {
    story: 'ぬ with the loop untied. An eye — and 目 (eye) is read “me” too.',
    why: 'From 女 (woman) — the kanji is in the app. The missing loop is what separates め from ぬ.',
  },
  'も': {
    story: 'A fish hook with two crossbars. More hooks, more fish.',
    why: 'From 毛 (hair, fur), which the shape still tracks closely.',
  },

  // や row
  'や': {
    story: 'A yacht with a mast leaning back.',
    why: 'From 也. One of only three kana in the や row — there is no yi or ye in modern Japanese.',
  },
  'ゆ': {
    story: 'A fish with a loop for a body, swimming through a line.',
    why: 'From 由 (reason) — the loop is that kanji’s 田 box, drawn in one round sweep.',
  },
  'よ': {
    story: 'A yo-yo on a string, hanging off a bar.',
    why: 'From 与 (give). Two strokes: the crossbar and the loop hanging under it.',
  },

  // ら row
  'ら': {
    story: 'A rabbit sitting up, ears back.',
    why: 'From 良 (good). The top tick is that kanji’s first stroke.',
  },
  'り': {
    story: 'Two strokes leaning together, like a reed bending.',
    why: 'From 利 (profit) — its 刂 blade radical, which is exactly what り looks like.',
  },
  'る': {
    story: 'A road that loops back on itself and ties a knot at the end.',
    why: 'From 留 (stay). The knot at the bottom is the whole difference between る and ろ.',
  },
  'れ': {
    story: 'Like ね, but the tail swings out instead of looping. A れ has let go.',
    why: 'From 礼 (courtesy) — again the 礻 radical on the left. ね loops, れ flicks, わ does neither.',
  },
  'ろ': {
    story: 'る with the knot undone. A road going nowhere in particular.',
    why: 'From 呂. Check the bottom every time: る has a loop, ろ has none.',
  },

  // わ row
  'わ': {
    story: 'A wine glass with a bent stem. The third of the ね / れ / わ family.',
    why: 'From 和 (harmony) — the 禾 grain radical became the left upright. ね loops, れ flicks, わ closes into a squarish bowl.',
  },
  'を': {
    story: 'A shape being carried on somebody’s shoulders. It only ever appears carrying an object.',
    why: 'From 遠 (far). Pronounced “o”, written “wo”, and used for exactly one job: marking the object of a verb.',
  },
  'ん': {
    story: 'A single lazy squiggle. The only kana that is a consonant all on its own.',
    why: 'From 无. It can never start a word, which is why しりとり ends the moment somebody says one.',
  },
}

// Voiced (濁音 dakuon): the base kana plus two ticks in the top right. The ticks
// are the same mark every time, so each entry names its own base and its own
// sound shift rather than repeating the rule.
export const hiraganaVoicedMnemonics = {
  'が': { story: 'か, but the kite has picked up two ticks of grit. The clean K goes gravelly: GA.', why: 'か + dakuten (゛). K becomes G — the same tick does this all along the row.' },
  'ぎ': { story: 'The key (き) has gone rusty. KI drops into GI.', why: 'き + dakuten. Watch the ticks sit above the key’s teeth.' },
  'ぐ': { story: 'The open beak (く) swallowed something heavy. KU sinks to GU.', why: 'く + dakuten — one stroke, two ticks, done.' },
  'げ': { story: 'The keg (け) has gone off. KE turns to GE.', why: 'け + dakuten.' },
  'ご': { story: 'The two little lines (こ) pick up two more. KO thickens to GO.', why: 'こ + dakuten. Four marks in total — easy to spot in a hurry.' },
  'ざ': { story: 'さ with a buzz on it. SA becomes ZA — say it and your throat starts humming.', why: 'さ + dakuten. S becomes Z all the way along this row.' },
  'じ': { story: 'The fishing hook (し) has caught something that buzzes. SHI becomes JI.', why: 'し + dakuten. Note it is JI, not ZI — the SHI sound bends further than the others.' },
  'ず': { story: 'The swing (す) is humming on its rope. SU becomes ZU.', why: 'す + dakuten.' },
  'ぜ': { story: 'The pitchfork (せ) has hit something electric. SE becomes ZE.', why: 'せ + dakuten.' },
  'ぞ': { story: 'The zigzag road (そ) is now a buzzing one. SO becomes ZO.', why: 'そ + dakuten.' },
  'だ': { story: 'た, weighed down. TA drops to DA.', why: 'た + dakuten. T becomes D along this row.' },
  'ぢ': { story: 'ち with ticks. Sounds identical to じ, and you will almost never need to write it.', why: 'ち + dakuten. Modern Japanese uses じ for this sound except in a handful of compound words.' },
  'づ': { story: 'The wave (つ) with ticks. Sounds the same as ず, and is just as rare.', why: 'つ + dakuten. Like ぢ, it survives mainly inside compounds such as つづく.' },
  'で': { story: 'The one-legged table (て) has been dropped. TE becomes DE.', why: 'て + dakuten.' },
  'ど': { story: 'The thorn in the toe (と) has gone septic. TO becomes DO.', why: 'と + dakuten.' },
  'ば': { story: 'は has picked up two ticks and a bad attitude. HA becomes BA.', why: 'は + dakuten. This row does H → B, and the circle version does H → P.' },
  'び': { story: 'The grin (ひ) has turned into a “bee!” HI becomes BI.', why: 'ひ + dakuten.' },
  'ぶ': { story: 'The confused bird (ふ) has been blown over. FU becomes BU.', why: 'ふ + dakuten. Note the base is FU, not HU — but it still voices to B.' },
  'べ': { story: 'The easy little hill (へ) with two ticks. HE becomes BE.', why: 'へ + dakuten. Still the easiest shape in the language, ticks and all.' },
  'ぼ': { story: 'ほ, hat and all, with ticks on top. HO becomes BO.', why: 'ほ + dakuten.' },
}

// Half-voiced (半濁音 handakuon): a small circle instead of two ticks, and only
// the は row can take it.
export const hiraganaHandakuonMnemonics = {
  'ぱ': { story: 'は with a little balloon floating over it. Pop — HA becomes PA.', why: 'は + handakuten (゜). The circle, not the ticks: ticks make BA, the circle makes PA.' },
  'ぴ': { story: 'The grin (ひ) with a bubble. HI becomes PI.', why: 'ひ + handakuten.' },
  'ぷ': { story: 'The bird (ふ) blowing a bubble. FU becomes PU.', why: 'ふ + handakuten.' },
  'ぺ': { story: 'The little hill (へ) with a balloon tied to it. HE becomes PE.', why: 'へ + handakuten.' },
  'ぽ': { story: 'ほ with a bubble on top. HO becomes PO.', why: 'ほ + handakuten. Only the は row gets the circle — nothing else can take one.' },
}

// Small-kana blends (拗音 yōon): a consonant kana from the い column, plus a
// small ゃ / ゅ / ょ. The two fuse into one syllable rather than being read as
// two — きや is "ki-ya", きゃ is "kya".
export const hiraganaYoonMnemonics = {
  'きゃ': { story: 'The key (き) and a shrunken yacht (ゃ). Squash them together and you get KYA in one beat.', why: 'き + small ゃ. ki + ya fuses to kya — one syllable, not two.' },
  'きゅ': { story: 'The key with a tiny fish (ゅ) behind it. KYU — say it like the letter Q.', why: 'き + small ゅ. ki + yu → kyu.' },
  'きょ': { story: 'The key and a little yo-yo (ょ). KYO, as in Tokyo — 東京.', why: 'き + small ょ. ki + yo → kyo.' },
  'しゃ': { story: 'The hook (し) drags a small ゃ along. SHA — as in 会社, a company.', why: 'し + small ゃ. Note it is SHA, not SYA — the し sound carries over.' },
  'しゅ': { story: 'Hook plus tiny fish. SHU — the sound in 週, a week.', why: 'し + small ゅ. shi + yu → shu.' },
  'しょ': { story: 'Hook plus tiny yo-yo. SHO — as in 書, to write.', why: 'し + small ょ. shi + yo → sho.' },
  'ちゃ': { story: 'ち with a small ゃ. CHA — and お茶 is tea, which you already know.', why: 'ち + small ゃ. CHA, not TYA — the ち sound leads.' },
  'ちゅ': { story: 'ち and a tiny fish. CHU — the noise a Japanese mouse makes.', why: 'ち + small ゅ. chi + yu → chu.' },
  'ちょ': { story: 'ち and a tiny yo-yo. CHO — a butterfly is a 蝶, chou.', why: 'ち + small ょ. chi + yo → cho.' },
  'にゃ': { story: 'The person-and-two-lines (に) with a small ゃ. NYA — and にゃー is what a Japanese cat says.', why: 'に + small ゃ. ni + ya → nya.' },
  'にゅ': { story: 'に and a tiny fish. NYU — as in 入, to enter.', why: 'に + small ゅ. ni + yu → nyu.' },
  'にょ': { story: 'に and a tiny yo-yo. NYO, wriggling along.', why: 'に + small ょ. ni + yo → nyo.' },
  'ひゃ': { story: 'The grin (ひ) with a small ゃ. HYA — 百 (hundred) is hyaku.', why: 'ひ + small ゃ. hi + ya → hya.' },
  'ひゅ': { story: 'The grin and a tiny fish. HYU — the sound of wind through a gap.', why: 'ひ + small ゅ. hi + yu → hyu.' },
  'ひょ': { story: 'The grin and a tiny yo-yo. HYO — as in 表, a chart.', why: 'ひ + small ょ. hi + yo → hyo.' },
  'みゃ': { story: 'The struck-through 3 (み) with a small ゃ. MYA — rare, but it exists.', why: 'み + small ゃ. mi + ya → mya.' },
  'みゅ': { story: 'み and a tiny fish. MYU — you will mostly meet it in borrowed words.', why: 'み + small ゅ. mi + yu → myu.' },
  'みょ': { story: 'み and a tiny yo-yo. MYO — as in 名字, a surname.', why: 'み + small ょ. mi + yo → myo.' },
  'りゃ': { story: 'The bending reed (り) with a small ゃ. RYA — the Japanese R is a light tap, halfway to an L.', why: 'り + small ゃ. ri + ya → rya.' },
  'りゅ': { story: 'り and a tiny fish. RYU — 竜, a dragon, is ryuu.', why: 'り + small ゅ. ri + yu → ryu.' },
  'りょ': { story: 'り and a tiny yo-yo. RYO — as in 料理, cooking.', why: 'り + small ょ. ri + yo → ryo.' },
  'ぎゃ': { story: 'The rusty key (ぎ) with a small ゃ. GYA — the voiced cousin of きゃ.', why: 'ぎ + small ゃ. Ticks first, then shrink the ya: ki → gi → gya.' },
  'ぎゅ': { story: 'ぎ and a tiny fish. GYU — 牛乳, milk, starts with it.', why: 'ぎ + small ゅ. gi + yu → gyu.' },
  'ぎょ': { story: 'ぎ and a tiny yo-yo. GYO — 魚 (fish) is gyo in compounds.', why: 'ぎ + small ょ. gi + yo → gyo.' },
  'じゃ': { story: 'The buzzing hook (じ) with a small ゃ. JA — じゃあ is “well then”, and you will hear it constantly.', why: 'じ + small ゃ. Written ja, not jya.' },
  'じゅ': { story: 'じ and a tiny fish. JU — as in 十, ten, read juu.', why: 'じ + small ゅ. ji + yu → ju.' },
  'じょ': { story: 'じ and a tiny yo-yo. JO — 女, woman, is jo in compounds.', why: 'じ + small ょ. ji + yo → jo.' },
  'びゃ': { story: 'The bee (び) with a small ゃ. BYA — rare, and mostly in numbers like 三百.', why: 'び + small ゃ. bi + ya → bya.' },
  'びゅ': { story: 'び and a tiny fish. BYU — the sound of something whipping past.', why: 'び + small ゅ. bi + yu → byu.' },
  'びょ': { story: 'び and a tiny yo-yo. BYO — 病院, a hospital, starts with it.', why: 'び + small ょ. bi + yo → byo.' },
  'ぴゃ': { story: 'The balloon-topped ぴ with a small ゃ. PYA — you will meet it in counting.', why: 'ぴ + small ゃ. Circle for P, then shrink the ya.' },
  'ぴゅ': { story: 'ぴ and a tiny fish. PYU — another whooshing-past noise.', why: 'ぴ + small ゅ. pi + yu → pyu.' },
  'ぴょ': { story: 'ぴ and a tiny yo-yo. PYO — ぴょんぴょん is how things hop.', why: 'ぴ + small ょ. pi + yo → pyo.' },
}
