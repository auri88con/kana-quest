// Mnemonics — the story layer that sits on top of the radical and kanji data.
//
// Two fields per entry, deliberately:
//
//   story  the playful, vivid hook. This is what actually makes it stick, so it
//          is allowed to be silly. Shown first on the card.
//   why    the grounded reason the shape means what it means, or how it behaves
//          inside real kanji. This is what stops the silly version being a lie.
//
// These are English memory hooks, not Japanese facts. The accuracy rule still
// binds everything they are built on — readings, meanings and the radical
// decompositions in kanji.js — but the stories themselves are free to invent an
// image, as long as `why` keeps the real explanation next to it.
//
// All of it lives here rather than inline in radicals.js / kanji.js so the whole
// voice can be read top to bottom and rewritten without touching the data.
//
// Keyed by the radical's canonical `char` (人, not 亻). `npm run check:radicals`
// fails on a key that matches no radical, and reports how many are still to do.

export const radicalMnemonics = {
  // People & body
  '人': {
    story: 'Two legs mid-stride and nothing else. Squash him against the left wall of a kanji and he flattens into 亻 — still walking, just thinner.',
    why: 'The 亻 form only ever appears on the left, and when you spot it the kanji almost always has something to do with people: 休 rest, 何 what, 会 meet.',
  },
  '女': {
    story: 'Someone sitting cross-legged with their arms folded, refusing to get up. Fair enough.',
    why: 'Drawn from an old figure of a kneeling person with crossed arms. It turns up in 安 (calm) and 好 (like).',
  },
  '子': {
    story: 'A swaddled baby, waving. Wherever it turns up inside a character, a child is mixed up in it.',
    why: 'The horizontal stroke is the outstretched arms; everything below is the wrapped-up bottom half. It is in 学 (study) and 好 (like).',
  },
  '儿': {
    story: 'The bottom half of a person who has lost the rest of themselves. Two little legs, holding up whatever sits on top.',
    why: 'It only ever appears underneath, never beside. 見 (see) is an eye on legs; 先 and 四 both end the same way. Careful: the katakana ル (ru) is the same pair of legs.',
  },
  '口': {
    story: 'A wide-open mouth, drawn as a box. Shouting, eating, or just a hole in something — this is your square.',
    why: 'One of the most common radicals there is. It means an actual mouth in 名 (name) and 語 (language), but often just “an opening”: 四, 右, 古. Careful: the katakana ロ (ro) is the same square.',
  },
  '目': {
    story: 'An eye tipped up on its end so it fits in the box. Squint and the pupil lines are still in there.',
    why: 'It was originally drawn sideways like a real eye, then rotated upright when characters were squared off. 見 (see) is this standing on a pair of legs.',
  },
  '耳': {
    story: 'An ear stuck on the side of a character, listening in on whatever the rest of it is doing.',
    why: 'It carries hearing wherever it goes: 聞 (hear) is an ear in a gateway, listening through the doors.',
  },
  '手': {
    story: 'A hand with the fingers fanned out and the wrist trailing down. On the left it folds up into 扌 — three quick strokes, same hand.',
    why: '扌 marks doing-things-with-your-hands verbs: 持 (hold), 押 (push), 打 (hit). If a kanji wears 扌 it is almost certainly an action.',
  },
  '足': {
    story: 'A leg with a foot planted at the bottom. It also means “enough” — as in, you have walked quite far enough, thank you.',
    why: 'The 口 on top is the knee joint, not a mouth. Both senses, foot and enough, come from the same character.',
  },
  '心': {
    story: 'A heart with two beats flicking off it. Squeeze it against the left edge and it becomes 忄 — a heart standing up.',
    why: 'In Japanese this is feelings and thinking, not the organ. 思 (think) and 悲 (sad) both sit on it.',
  },
  '力': {
    story: 'A flexed arm. Not a subtle radical.',
    why: 'It was originally a plough, which is where the effort comes from. 男 (man) is a field plus this — power in the paddy. Careful: the katakana カ (ka) is drawn exactly the same.',
  },
  '舌': {
    story: 'A tongue sticking out. The 口 at the bottom is the mouth it is escaping from.',
    why: 'It shows up wherever the mouth is busy: 話 (talk) is words plus a tongue.',
  },

  // Nature
  '日': {
    story: 'The sun, boxed in. That line across the middle is the one sunspot the ancient scribes could be bothered to draw.',
    why: 'It means sun and day, and it is everywhere: 時 (hour), 間 (interval), 東 (east), 明 (bright).',
  },
  '月': {
    story: 'A crescent moon — except when it clings to the left of a kanji, where it is quietly a slab of flesh instead.',
    why: 'It means moon and month. On the left of a kanji it is usually something else entirely — a squashed 肉 (flesh) — which is why body parts like 腕 and 胸 wear it.',
  },
  '火': {
    story: 'A fire throwing sparks off both sides. Shove it under a kanji and it flattens into 灬 — four little flames licking upward.',
    why: '灬 is the same radical lying down to fit. 黒 (black) is something sat over a fire, going sooty.',
  },
  '水': {
    story: 'A stream with ripples peeling off it. On the left it drips down into 氵 — three droplets.',
    why: '氵 is one of the most reliable radicals in the language: 海 (sea), 池 (pond), 酒 (sake). Three dots on the left means liquid.',
  },
  '木': {
    story: 'A trunk, two branches, two roots. A child’s drawing of a tree that somehow became official.',
    why: 'Two of them make 林 (woods) and three make 森 (forest). It is in 校 (school) and 本 (book) — both things once made of wood.',
  },
  '土': {
    story: 'A mound of earth. Build on top of it and you get somewhere to live; bury something under it and you get treasure.',
    why: 'Earth, soil, ground. It is in 社 (shrine) and inside 時 (hour), where it forms part of 寺 (temple).',
  },
  '山': {
    story: 'Three peaks. Stack one on top of another and you get 出 — climbing out and over the lot.',
    why: 'One of the oldest picture-characters, barely changed in three thousand years. Two of them stacked make 出 (exit).',
  },
  '川': {
    story: 'Water running between two banks. The line down the middle is the current.',
    why: 'The outer strokes are the banks and the inner one is the flow. It appears in place names all over Japan.',
  },
  '石': {
    story: 'A rock that has fallen off a cliff and come to rest at the bottom. The 口 is the rock; the bit above it is the cliff it fell from.',
    why: 'That top-left stroke is 厂, a cliff face. It is in 研 (polish) and 砂 (sand).',
  },
  '田': {
    story: 'A paddy seen from a great height, chopped into four neat plots.',
    why: 'The cross inside is the irrigation ditches between the plots. 男 (man) is this plus 力 — the one doing the ploughing.',
  },
  '雨': {
    story: 'A cloud already raining. It only ever sits on the roof of a character, never beside it.',
    why: 'It sits on top of anything weather-related: 雪 (snow), 雲 (cloud), and 電 (electricity), which started life as lightning.',
  },
  '夕': {
    story: 'The moon, but only half risen. The sun has gone and it is not properly night yet.',
    why: 'It is 月 with one stroke removed — literally a partial moon. 名 (name) is this plus a mouth: calling out in the dark. Careful: the katakana タ (ta) is the same shape plus one stroke.',
  },

  // Plants & animals
  '艹': {
    story: 'Two shoots of grass poking up. It always sits on the roof of a kanji, like a lawn.',
    why: 'Anything that grows wears it: 花 (flower), 茶 (tea), 草 (grass). If a kanji has this hat on, it is probably a plant.',
  },
  '禾': {
    story: 'A rice plant bent over because its ear has got too heavy. A very smug plant.',
    why: 'That droop at the top is the only thing separating it from 木. It marks crops and grain: 私 (I, me) is this plus 厶.',
  },
  '竹': {
    story: 'Two bamboo stalks side by side, leaves drooping off each one.',
    why: 'Squashed onto the top of a kanji it becomes ⺮. It marks things made of bamboo, which in old Japan mostly meant writing gear: 筆 (brush), 箱 (box).',
  },
  '米': {
    story: 'Scattered grain. When it shows up as a part, the character is usually about rice or about measuring things out.',
    why: 'This is the raw crop, where 食 is the cooked meal. It is also the character Japan uses for America, in 米国.',
  },
  '糸': {
    story: 'A skein of silk twisted into a bundle, with the loose ends dangling below.',
    why: 'It marks thread, cloth and connection: 紙 (paper), 線 (line), and 終 (end) — the end of a thread.',
  },
  '犬': {
    story: 'A dog mid-bark. That little stroke at the top right is its ear, or its tail, depending on who you ask.',
    why: 'On the left it narrows to 犭 and stops meaning “dog” specifically — there it means any animal at all: 猫 (cat), 猿 (monkey).',
  },
  '魚': {
    story: 'A fish standing on its tail: head at the top, body in the middle, fins fanned out at the bottom.',
    why: 'Those four dots at the base are the tail fin — the same 灬 shape as fire, doing a completely different job.',
  },
  '鳥': {
    story: 'A bird in profile: one eye, a wing folded down its side, clawed feet at the bottom.',
    why: 'Four dots again at the bottom, and again they are feet rather than flames. Position is what tells you which.',
  },
  '虫': {
    story: 'One small crawling thing. It started as a snake and got promoted to cover bugs, worms and anything else that wriggles.',
    why: 'Japanese uses it broadly: 蛇 (snake), 蚊 (mosquito), and 虹 (rainbow), which was once thought to be a serpent in the sky.',
  },
  '馬': {
    story: 'A horse with its mane flying up and four legs pounding along underneath.',
    why: 'The four dots are the legs. Turn the character sideways in your head and the horse is still in there.',
  },

  // Buildings & places
  '宀': {
    story: 'A roof with walls coming down both sides. Everything underneath it is indoors.',
    why: 'It caps the kanji rather than sitting beside it. 安 (calm) is a woman under a roof; 家 (house) is a pig under one.',
  },
  '广': {
    story: 'A roof with one wall missing — a shelter propped up against something bigger.',
    why: 'The open side is the whole point: it marks buildings that lean on others. 店 (shop), 広 (wide), 病 (illness).',
  },
  '門': {
    story: 'A pair of saloon doors, one panel each side, waiting to be pushed.',
    why: 'Anything can happen between the doors: 間 is the sun in the gateway (an interval), 聞 is an ear in it (listening).',
  },
  '囗': {
    story: 'A box drawn all the way round with no way out. Whatever is inside is staying there.',
    why: 'Bigger than 口 (mouth), and it always surrounds something. 国 (country) is jade inside a border; 四 (four) is a pair of legs boxed in.',
  },
  '穴': {
    story: 'A hole dug out underneath a roof. Someone has gone down there and is not coming back.',
    why: 'It marks holes and hollows. 空 (sky, empty) is this plus 工 — the great emptiness above you.',
  },
  '車': {
    story: 'A cart seen from directly above: the long axle running down, wheels either side, cargo box in the middle.',
    why: 'Rotate it ninety degrees in your head and the cart appears. It is in 転 (roll) and 軽 (light).',
  },
  '辶': {
    story: 'A foot setting off down a road, with a running start trailing behind it.',
    why: 'It wraps around the bottom-left of a kanji and always means motion: 週 (week), 道 (road), 送 (send), 近 (near).',
  },
  '彳': {
    story: 'The left half of a crossroads. You have committed to going one way.',
    why: 'It is 行 (to go) chopped down the middle, and it means exactly that: 後 (after), 待 (wait).',
  },

  // Things & tools
  '刀': {
    story: 'A curved blade with a handle. Stand it on the right of a kanji and it straightens into 刂 — two strokes, still sharp.',
    why: '刂 means cutting: 分 (divide), 前 (before), 別 (separate), 切 (cut). Careful: the katakana リ (ri) looks just like that 刂 form.',
  },
  '貝': {
    story: 'A cowrie shell with its two little feet sticking out of the bottom. Before there were coins, this was money.',
    why: 'Because shells were currency, the radical means value. 買 (buy) has it, and so do 賞 and 財. Spot 貝 and money is involved.',
  },
  '金': {
    story: 'Nuggets buried under a roof of earth — those two dots are the gold, still in the ground.',
    why: 'It means metal and gold, and by extension money. On the left it marks metal objects: 鉄 (iron), 鏡 (mirror).',
  },
  '罒': {
    story: 'A net stretched flat, mesh and all, lying across the top of a kanji.',
    why: 'It is 網 (net) flattened into a hat. 買 (buy) is this net over shell-money — hauling in a catch of cash.',
  },
  '示': {
    story: 'A stone altar table with offerings dripping off the edges. On the left it slims down to 礻.',
    why: 'It marks anything sacred: 社 (shrine), 神 (god), 礼 (courtesy), 祝 (celebrate). Careful — 衤 (clothing) looks almost identical but has one stroke more.',
  },
  '食': {
    story: 'A lidded bowl. Squeezed onto the left of a character it slims to 飠, and a meal is involved somewhere.',
    why: 'This is the cooked meal, where 米 is the raw crop. It is in 飲 (drink) and 飯 (cooked rice).',
  },
  '王': {
    story: 'Three jade discs threaded onto a single string, seen edge-on.',
    why: 'The radical is jade, even though it is written exactly like 王 (king) — the king character just happens to share the shape. 国 (country) is jade inside a border: the treasure you defend.',
  },
  '斤': {
    story: 'An axe head, blade down, sitting on its handle.',
    why: 'It marks chopping and cutting: 新 (new — freshly cut timber), 近 (near), 所 (place).',
  },
  '寸': {
    story: 'A hand with a mark at the wrist, one thumb-width down. That mark is the entire measurement.',
    why: 'It means a small measure, or a hand doing something careful. It is inside 寺 (temple), and therefore inside 時 (hour) and 持 (hold).',
  },
  '工': {
    story: 'A carpenter’s ruler — a tool with a handle at each end and a job to do.',
    why: 'It means work and craft: 左 (left, the hand that holds the tool), 空 (sky), 江 (river). Careful: the katakana エ (e) is drawn the same.',
  },
  '言': {
    story: 'Sound coming out of a mouth in layers. The 口 at the bottom is the mouth; everything stacked above it is the noise escaping.',
    why: 'It is on almost every word-related kanji: 話 (talk), 語 (language), 読 (read), 記 (record).',
  },
  '欠': {
    story: 'A person on their knees with their mouth wide open — mid-yawn, or wanting something very badly.',
    why: 'It means a lack, or an open mouth. 飲 (drink) is food plus this: mouth open, taking it in. 歌 (sing) has it too.',
  },

  // Shapes & strokes
  '一': {
    story: 'One line. That is the whole character, and honestly it has earned its place.',
    why: 'It is also Kangxi radical number one, and it stacks: 二 is two, 三 is three. It is the top of 百 (hundred) and the base of 本 (book).',
  },
  '十': {
    story: 'Two lines crossing at the middle — a complete set, all directions covered.',
    why: 'Ten meant “the whole hand, twice”, so it carries completeness. 古 (old) is ten mouths: a story passed down ten generations.',
  },
  '八': {
    story: 'Two strokes pulling apart from each other. Eight, but really: splitting.',
    why: 'As a radical it means divide far more often than it means eight. 分 is this over a blade — split it, then cut it. Careful: the katakana ハ (ha) is the same two strokes.',
  },
  '又': {
    story: 'A right hand grabbing at something. Again. And again.',
    why: 'It is an old drawing of a hand, and it means doing something once more. 友 (friend) is two hands reaching for each other.',
  },
  '匕': {
    story: 'A ladle with a bent handle — or a person doubled over, depending on the kanji.',
    why: 'Both readings are genuine. 花 uses it inside 化 (change): grass that has changed into a bloom. 北 is two people back to back. Careful: the katakana ヒ (hi) is near-identical.',
  },
  '卜': {
    story: 'A crack in a heated tortoise shell. Whichever way it split, that was your answer.',
    why: 'This is where the fortune-telling characters come from. 外 (outside) is an evening plus this. Careful: the katakana ト (to) is drawn identically.',
  },
  '厶': {
    story: 'A little shape curled in on itself, keeping its business to itself.',
    why: 'It means private, or oneself. 私 (I, me) is grain plus this: your own share of the harvest. Careful: the katakana ム (mu) is the same shape.',
  },
  '大': {
    story: 'A person standing with their arms stretched as wide as they will go. THIS big.',
    why: 'It is 人 (person) with the arms spread. 天 (heaven) is this with a line above it — the sky just beyond your reach.',
  },
  '小': {
    story: 'Two slivers shaved off a thing. As a part it is usually just muttering “and this one is small”.',
    why: 'The middle stroke is the object and the flanking ones are what has been taken away. 少 (few) is this plus one more slash.',
  },
  '入': {
    story: 'The mouth of a cave, or a path that forks and swallows you. Either way, in you go.',
    why: 'Easy to confuse with 人 (person): in 入 the left stroke starts higher and the right one crosses over the top.',
  },
  '立': {
    story: 'Someone standing on a line. Whatever gets built on top of them starts from a standing start.',
    why: 'The bottom line is the ground — that is what makes it standing rather than merely being. 新 (new) starts with it and 音 (sound) is built on it.',
  },
  '白': {
    story: 'First pale light on the horizon. Inside a character it often carries the sound rather than the whiteness — 百 is hyaku.',
    why: 'It is 日 (sun) with a stroke on top for the first ray. 百 (hundred) is a single 一 above this.',
  },
}
