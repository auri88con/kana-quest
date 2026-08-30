// Mnemonics for the Tier 1 kanji, keyed by character, in the same order as
// kanjiTier1 so the two files can be read side by side.
//
// `story` is the hook and `why` is the grounded explanation — see radicals.js.
// Where a kanji carries a `components` breakdown in kanji.js, `why` names those
// same parts, so the story and the validated data can never drift apart. Where
// it doesn't, `why` describes the shape or gives the standard account of where
// the character came from — and says so with "the old form was" rather than
// stating a guess as fact.

export const kanjiMnemonics = {
  // Numbers
  '一': {
    story: 'One finger, laid flat on the table. That is the whole character and it has earned its keep.',
    why: 'The number characters start as simply as they possibly can: one line, two lines, three lines.',
  },
  '二': {
    story: 'Two fingers laid flat. The top one is shorter, which is the only thing keeping it out of trouble with 三.',
    why: '一, 二 and 三 are plain tally marks. After three the system gives up and gets creative. Careful: the katakana ニ (ni) is written identically — and means two as well.',
  },
  '三': {
    story: 'Three lines. This is where the tally run stops — 四 breaks the pattern completely.',
    why: 'The middle line is the shortest, and it is the last number you can guess without being taught. The katakana ミ (mi) is this tipped on its side — and means three too.',
  },
  '四': {
    story: 'A pair of legs (儿) shut inside a box (囗). Four walls, and someone in there counting them.',
    why: '囗 enclosure + 儿 legs. The oldest forms really were four stacked lines, but four lines in a row proved unreadable and the boxed version won.',
  },
  '五': {
    story: 'A hand caught mid-count, fingers crossing over each other. Five is where you run out of hand.',
    why: 'The X in the middle is its signature. Between 三 and 五 the tally system quietly collapses.',
  },
  '六': {
    story: 'A little hut: a lid on top, two legs splayed underneath.',
    why: 'The top is a lid shape and the bottom is 八 pulling apart. Six is a borrowed character, not a picture of anything.',
  },
  '七': {
    story: 'A cross that has been knocked sideways. Seven trying to be ten, and not quite getting there.',
    why: 'Compare 十 (ten) — same idea, but here the horizontal bends and hooks. That hook is how you tell them apart.',
  },
  '八': {
    story: 'Two strokes falling away from each other. Eight, but really: splitting.',
    why: 'It doubles as the radical meaning divide, which is exactly the job it does inside 分 (minute). Careful: the katakana ハ (ha) is the same two strokes.',
  },
  '九': {
    story: 'A hook with a tail, curling round like a nine that ran out of ink halfway.',
    why: 'One you simply have to memorise. The hooked bottom-right stroke is the thing to hang on to.',
  },
  '十': {
    story: 'A perfect cross. Ten fingers, all directions, job done.',
    why: 'Also the radical for completeness — 古 (old) is ten mouths, a story retold ten generations over.',
  },
  '百': {
    story: 'One (一) sitting on top of white (白). A hundred of anything and it all blurs into a white haze.',
    why: '一 one + 白 white. The 白 carries the sound and the 一 marks the count.',
  },
  '千': {
    story: 'Ten (十) with a stroke slashed across the top. Ten, but far, far more so.',
    why: 'Look for the extra diagonal at the top — that is the only thing separating it from 十. The katakana チ (chi) came from this character and still looks like it.',
  },
  '万': {
    story: 'A swirl that refuses to stop. Ten thousand is where the counting changes gear.',
    why: 'Japanese groups big numbers in tens of thousands, not thousands, so 万 is a rounder number here than it looks in English. The katakana マ (ma) came from its top half.',
  },
  '円': {
    story: 'A coin that has been squared off. The old version was a full circle and this is what is left of it.',
    why: '円 also means circle: it is the simplified form of 圓, which kept the enclosure and dropped the loop inside.',
  },

  // Calendar & time
  '日': {
    story: 'The sun in a box, with the one sunspot anybody could be bothered to draw.',
    why: 'Sun and day both. It is one of the most common parts in the language — 時, 間, 東 and 明 all carry it.',
  },
  '月': {
    story: 'A crescent moon with two wisps of cloud drifting across it.',
    why: 'Moon and month, because a month is one moon. Careful: on the left of a kanji it usually means flesh instead.',
  },
  '火': {
    story: 'A fire throwing sparks off both sides.',
    why: 'Underneath a kanji it flattens into 灬, four dots. 黒 (black) is something sitting over exactly that.',
  },
  '水': {
    story: 'A stream with ripples peeling off either side.',
    why: 'On the left it becomes 氵, three droplets — the most reliable radical in the language.',
  },
  '木': {
    story: 'A trunk, two branches, two roots. A child’s drawing that became official.',
    why: 'Two make 林 (woods) and three make 森 (forest). 本 (book) is this with a line at the root.',
  },
  '金': {
    story: 'Nuggets buried under a roof of earth — those two dots are the gold, still down there.',
    why: 'Gold, metal and money all at once. It is also Friday: 金曜日.',
  },
  '土': {
    story: 'A mound of soil pushed up out of flat ground.',
    why: 'It hides inside 寺 (temple), and therefore inside 時 (hour). Also Saturday: 土曜日.',
  },
  '年': {
    story: 'Someone hauling a harvest home on their back. One harvest, one year.',
    why: 'The old form had 禾 (grain) above a person — a year was one crop. The modern shape has worn that down.',
  },
  '時': {
    story: 'The sun (日) over a temple (寺). Before clocks, the temple bell was how you knew the hour.',
    why: '日 sun + 土 ground + 寸 measure, the last two making 寺 temple. Temples genuinely did keep the time.',
  },
  '分': {
    story: 'Split it (八), then cut it (刀). An hour, chopped into minutes.',
    why: '八 divide + 刀 blade. It also means to understand — you have got the thing separated out at last.',
  },
  '週': {
    story: 'One lap of the calendar. The road radical is what makes it a circuit you come round again.',
    why: '辶 road wrapped around 周 (a circuit), which contains 口. A week is one lap.',
  },
  '今': {
    story: 'A roof with a single tick under it. Everything beneath that roof is happening right this second.',
    why: 'The top is the 人 shape used as a cover. It pairs with time words: 今年 this year, 今週 this week.',
  },
  '半': {
    story: 'Something with a line straight through it and two marks showing where the halves fell apart.',
    why: 'The bottom is 十 and the two strokes on top are the split. 半分 is a half.',
  },
  '毎': {
    story: 'A mother (母) doing the exact same thing again. And again. Every single day.',
    why: 'It contains 母 mother. It attaches to time words: 毎日 every day, 毎週 every week.',
  },

  // People
  '人': {
    story: 'Two legs mid-stride. Apparently that is a whole person.',
    why: 'Squashed to 亻 on the left it marks people kanji: 休 rest, 何 what, 会 meet.',
  },
  '私': {
    story: 'Your own grain (禾), curled up and kept private (厶). My rice. Not yours.',
    why: '禾 grain + 厶 private. It really is about keeping your own share of the harvest.',
  },
  '名': {
    story: 'Evening (夕) plus a mouth (口). Too dark to see who is coming, so you shout your name.',
    why: '夕 evening + 口 mouth, and that is the traditional explanation too — calling out in the dark.',
  },
  '前': {
    story: 'A blade at the front, cutting forward through everything in the way.',
    why: '月 and 刂 (blade) are the parts we can name; the strokes on top are worn-down remains. 名前 is a name.',
  },
  '後': {
    story: 'Going (彳), but dragging along behind with tiny reluctant steps.',
    why: '彳 is the going radical; the rest is a thread and a trailing foot. It means after in time and behind in space.',
  },
  '友': {
    story: 'Two hands reaching for each other. That is the entire character, and it is rather lovely.',
    why: 'The bottom is 又, a right hand, and the strokes above are another one. Two hands, one friendship.',
  },
  '男': {
    story: 'Power (力) out in the rice field (田). The one hauling the plough.',
    why: '田 field + 力 power. A very literal character about who did the fieldwork.',
  },
  '女': {
    story: 'Someone sitting cross-legged with their arms folded, going nowhere.',
    why: 'From an old figure of a kneeling person with crossed arms. It is inside 安 and 好.',
  },
  '子': {
    story: 'A baby with both arms flung up and its legs swaddled into one wobbly line.',
    why: 'The horizontal stroke is the arms. It is in 学 (study) — children, being taught.',
  },
  '父': {
    story: 'A hand holding something up in the air and making a point about it. Hello, Dad.',
    why: 'The old form was a hand gripping an axe or a rod — the one in charge.',
  },
  '母': {
    story: 'A figure with two dots on the chest, feeding a child.',
    why: 'It is 女 (woman) with two marks added, and those two dots are the whole difference.',
  },
  '先': {
    story: 'A foot planted on top of a pair of legs (儿) — somebody who set off before you did.',
    why: 'The bottom is 儿 legs. Ahead in space, earlier in time: 先生 is one who was born before you.',
  },
  '生': {
    story: 'A shoot pushing its way up out of the ground.',
    why: 'A plant breaking the soil line. It covers life, birth, raw and growing — and 先生 is “born before”.',
  },

  // Nature
  '山': {
    story: 'Three peaks in a row, the middle one showing off.',
    why: 'Barely changed in three thousand years. Two of them stacked make 出 (exit).',
  },
  '川': {
    story: 'Water running between two banks. The middle line is the current.',
    why: 'Outer strokes are the banks, inner one is the flow. It turns up in place names all over Japan.',
  },
  '空': {
    story: 'A hole (穴) the size of the entire sky. There is nothing in it — that is rather the point.',
    why: '穴 cave + 工 work. It means sky and empty both: 空気 air, 空く to be vacant.',
  },
  '雨': {
    story: 'A cloud stretched across the top with four fat drops falling out of it.',
    why: 'It caps the weather kanji: 雪 snow, 雲 cloud, 電 electricity.',
  },
  '花': {
    story: 'Grass (艹) that has changed (化) into something worth stopping to look at.',
    why: '艹 grass + 化 change, and 化 is 亻 person + 匕. A plant, transformed.',
  },
  '石': {
    story: 'A rock that has come off a cliff and settled at the bottom.',
    why: 'The top-left stroke is 厂, a cliff face, and the 口 is the rock lying under it.',
  },
  '天': {
    story: 'A person with their arms stretched as wide as they go (大), and a line above them they will never reach.',
    why: '一 one + 大 big. The line is the sky, just beyond your outstretched hands.',
  },
  '気': {
    story: 'Steam curling off something hot. Mood, air, energy — all the invisible stuff.',
    why: 'The old form had 米 (rice) inside: steam off the cooking pot. It is in 元気 (well) and 天気 (weather).',
  },
  '電': {
    story: 'Rain (雨) with a bolt forking down through a field underneath.',
    why: '雨 rain over 电, which is 田 with a hook dragged off it. It meant lightning long before it meant electricity.',
  },
  '車': {
    story: 'A cart seen from directly overhead: axle down the middle, wheels either side.',
    why: 'Rotate it ninety degrees in your head and the cart appears. 電車 is an electric cart — a train.',
  },
  '犬': {
    story: 'A dog mid-bark. That extra stroke is its ear. Or its tail. Nobody agrees.',
    why: 'It is 大 (big) with one dot added. On the left it narrows to 犭 and means any animal at all.',
  },
  '米': {
    story: 'Grains flying off in every direction as the ear gets threshed.',
    why: 'The raw crop, where 食 is the cooked meal. Japan also writes America with it: 米国.',
  },
  '茶': {
    story: 'Grass (艹) growing over a tree (木), with somebody sheltering underneath waiting for the kettle.',
    why: '艹 grass on top of a 木 base. Tea is, when you get down to it, a leaf.',
  },
  '魚': {
    story: 'A fish standing on its tail: head at the top, body in the middle, fins fanned out below.',
    why: 'Those four dots at the bottom are the tail fin — the same shape as 灬 fire, doing a different job.',
  },
  '白': {
    story: 'The sun just breaking the horizon, when everything goes pale for a moment.',
    why: 'It is 日 (sun) with one stroke on top for the first ray. 百 (hundred) is a 一 above this.',
  },
  '赤': {
    story: 'A big fire underneath, glowing.',
    why: 'The old form was 大 (big) over 火 (fire) — a big fire. The shape has worn down since.',
  },
  '青': {
    story: 'Something young and fresh growing over a moon. Blue, green, and everything unripe.',
    why: 'It covers blue and green both — a green traffic light is 青信号. The bottom half is 月.',
  },
  '黒': {
    story: 'A field sitting over a fire, going sootier by the minute.',
    why: '田 field + 土 ground on top, and 灬 — flattened fire — underneath.',
  },

  // Directions
  '上': {
    story: 'A baseline, with something sticking up above it.',
    why: 'The horizontal is the ground and the vertical points up. 下 is the same idea upside down.',
  },
  '下': {
    story: 'A baseline, with something dangling below it.',
    why: 'The exact mirror of 上. Learn one and you have got both.',
  },
  '左': {
    story: 'A hand holding a carpenter’s tool (工). The hand that steadies the work.',
    why: '工 work under a hand shape. 右 has 口 in that same slot — the bottom half is the only difference.',
  },
  '右': {
    story: 'A hand with a mouth (口) under it. The hand you eat with.',
    why: '口 mouth under a hand shape. Check the bottom half against 左 whenever you hesitate.',
  },
  '中': {
    story: 'A line driven straight through the middle of a box. Dead centre.',
    why: 'A box with a stroke through it. 中国 is “middle country” — China.',
  },
  '外': {
    story: 'Reading fortunes (卜) in the evening (夕), when you were meant to do it at dawn. Outside the rules.',
    why: '夕 evening + 卜 divination — both genuine radicals, both doing real work here.',
  },
  '東': {
    story: 'The sun (日) caught in the branches of a tree (木). Sunrise, so: east.',
    why: '木 tree + 日 sun. 東京 (Tokyo) is the eastern capital.',
  },
  '西': {
    story: 'A bird settling into its nest for the night — and birds go home when the sun goes down in the west.',
    why: 'The old form was a nest or a basket; the link to west came later, from the sound.',
  },
  '南': {
    story: 'A bell hanging in its frame, on the warm side of the house.',
    why: 'Not a picture of anything obvious — this is one to learn by its shape. 南米 is South America.',
  },
  '北': {
    story: 'Two people standing back to back, refusing to look at one another. Chilly up there.',
    why: 'It genuinely is two figures back to back, the right one being 匕. It also means to flee — turning your back.',
  },

  // Size & quality
  '大': {
    story: 'A person with their arms stretched as wide as they will go. THIS big.',
    why: 'It is 人 (person) with the arms spread. 天 (heaven) is this with a line above it.',
  },
  '小': {
    story: 'A thing with two slivers shaved off either side, getting smaller as you watch.',
    why: 'The middle stroke is the object; the outer two are what has been taken away.',
  },
  '高': {
    story: 'A tall building with a lookout on top and a doorway at the bottom.',
    why: 'A picture of a high tower. 高い does double duty for tall and expensive.',
  },
  '安': {
    story: 'A woman (女) at home under the roof (宀) with nothing to worry about. Calm — and calm is cheap.',
    why: '宀 roof + 女 woman. The core sense is peace of mind; 安い (cheap) grew out of the same idea.',
  },
  '新': {
    story: 'Standing (立) by a tree (木) with an axe (斤), about to make something brand new out of it.',
    why: '立 stand + 木 tree + 斤 axe. Freshly cut timber.',
  },
  '古': {
    story: 'Ten (十) mouths (口) have told this story now. It is officially old.',
    why: '十 ten + 口 mouth — ten generations of retelling.',
  },
  '多': {
    story: 'One evening stacked on top of another. Rack up enough evenings and you have got a lot of them.',
    why: '夕 evening, twice. Doubling a part is a common way of saying “many”. The katakana タ (ta) came from the left half of this character.',
  },
  '少': {
    story: 'Small (小), with one more sliver shaved off. Now there is barely any left at all.',
    why: '小 small plus one extra slash. 少ない is few; 少し is a little.',
  },

  // Body
  '目': {
    story: 'An eye tipped up on its end so it fits inside the box.',
    why: 'Drawn sideways originally and rotated when characters were squared off. 見 (see) is this on legs.',
  },
  '耳': {
    story: 'An ear, lobe and all, pinned flat to the page.',
    why: 'It is inside 聞 (hear) — an ear in a gateway, listening through the doors.',
  },
  '口': {
    story: 'A wide-open mouth, drawn as a square.',
    why: 'It also means an opening of any kind, and one of the most common parts in the whole language. Careful: the katakana ロ (ro) is the same square.',
  },
  '手': {
    story: 'A hand with the fingers fanned out and the wrist trailing down.',
    why: 'On the left it folds up into 扌, which marks doing-things-with-hands verbs.',
  },
  '足': {
    story: 'A leg with a foot planted at the bottom. It also means “enough” — you have walked quite far enough.',
    why: 'The 口 on top is the knee joint, not a mouth. Both senses come from the same character.',
  },

  // Verbs & actions
  '行': {
    story: 'A crossroads seen from above. Pick a direction and get going.',
    why: '彳, the going radical, is this character’s left half. It also means a line of text, and to carry something out.',
  },
  '来': {
    story: 'A wheat plant with the grain hanging off it — the harvest, coming in.',
    why: 'The old form was a wheat character, borrowed for the sound of “come”.',
  },
  '見': {
    story: 'An eye (目) up on a pair of legs (儿), wandering about looking at things.',
    why: '目 eye + 儿 legs. One of the cleanest compounds in the whole set.',
  },
  '食': {
    story: 'A lid clapped over a bowl of rice, keeping it warm.',
    why: 'The cooked meal, where 米 is the raw crop. On the left it slims down to 飠.',
  },
  '飲': {
    story: 'Food (食) plus a wide-open mouth (欠). Head back, glass up.',
    why: '食 food + 欠 lack, which is a person with their mouth open. Eating’s thirstier cousin.',
  },
  '読': {
    story: 'Words (言) being passed along. Reading is just words being sold on to you.',
    why: '言 speech + 売, which carries the sound. Every 言 kanji is about language somehow.',
  },
  '書': {
    story: 'A brush held over a page, laying down line after line.',
    why: 'The top is 聿, an old brush character, sitting over 日. 書く to write, 辞書 a dictionary.',
  },
  '話': {
    story: 'Words (言) plus a tongue (舌). Someone is not going to stop any time soon.',
    why: '言 speech + 舌 tongue. 話す to speak, 電話 telephone.',
  },
  '聞': {
    story: 'An ear (耳) pressed right up against the gate (門), listening in.',
    why: '門 gate + 耳 ear. It means to hear, and also to ask.',
  },
  '買': {
    story: 'A net (罒) hauled over a pile of shell-money (貝). A very good day’s shopping.',
    why: '罒 net + 貝 shell. Shells were the currency, which is why 貝 means value.',
  },
  '休': {
    story: 'A person (亻) flopped against a tree (木). Not moving. Do not disturb.',
    why: '亻 person + 木 tree — the clearest compound kanji there is.',
  },
  '立': {
    story: 'A person standing squarely on the ground, feet planted, going nowhere.',
    why: 'The bottom line is the ground, and that line is what makes it standing rather than merely being.',
  },
  '入': {
    story: 'A path that forks and swallows you. In you go.',
    why: 'Easy to mix up with 人 (person): in 入 the left stroke starts higher and the right one crosses over the top.',
  },
  '出': {
    story: 'One mountain stacked on another. Climb out and over the lot.',
    why: '山 mountain, twice, in the modern shape. It means to exit, and to put something out.',
  },

  // School & places
  '学': {
    story: 'A child (子) under a roof with hands reaching over it — being taught, whether they fancy it or not.',
    why: 'The bottom is 子 child. 学校 is a school and 学生 is a student.',
  },
  '校': {
    story: 'A wooden (木) building where everybody’s paths cross.',
    why: '木 tree/wood + 交 (cross), which carries the sound. Schools were timber buildings.',
  },
  '語': {
    story: 'Words (言) coming out of five (五) mouths (口) at once. That is a language.',
    why: '言 speech + 吾, which is 五 over 口. 日本語 is Japanese.',
  },
  '国': {
    story: 'Jade (王) locked inside a border (囗). The treasure you draw a line around and then defend.',
    why: '囗 enclosure + 玉 jade. The older form had a weapon inside the border instead.',
  },
  '会': {
    story: 'A roof with people gathered underneath it.',
    why: 'The top is the 人 shape used as a cover. 会う to meet, 会社 a company.',
  },
  '社': {
    story: 'An altar (礻) on a patch of ground (土). Somewhere a group gathers.',
    why: '示 altar + 土 earth. It means both shrine and company — hence 会社.',
  },
  '本': {
    story: 'A tree (木) with a line marking its roots. The root of the matter — and what books were made of.',
    why: '木 tree + 一 one. The core sense is origin: 日本 is “sun origin”, Japan.',
  },
  '何': {
    story: 'A person (亻) with their mouth open, asking. What?',
    why: '亻 person + 可, which contains 口. Read なに or なん depending on what follows.',
  },
  '間': {
    story: 'The sun (日) shining through the gap in the gate (門). That gap is the entire meaning.',
    why: '門 gate + 日 sun. Space between and time between: 時間 is time, 間 on its own is an interval.',
  },
}

// Reading hooks, keyed by the same characters. Kept separate from the meaning
// stories because they are a different kind of thing: pure English wordplay on
// the sound, with no claim to be etymology. `romaji` in kanji.js is the
// character's most common reading in isolation, and that is what these hook on.
//
// `weak: true` marks a hook I am not proud of — some sounds simply do not lend
// themselves to English. They are flagged rather than dropped so they are easy
// to find and rewrite later; the validator reports how many there are.
//
// Several readings collide (kyuu is both 九 and 休; kou is 高, 行 and 校), and
// where they do the hook says so rather than pretending otherwise.

export const kanjiReadingMnemonics = {
  // Numbers
  '一': { hook: 'ICHI — itchy. You can only scratch ONE spot at a time.' },
  '二': { hook: 'NI — knee. You have got two of them.' },
  '三': { hook: 'SAN — the honorific -san. Three people, all being introduced at once.' },
  '四': { hook: 'YON — yawn. By the fourth one you are yawning.' },
  '五': { hook: 'GO — high five, then go.' },
  '六': { hook: 'ROKU — rock. Six rocks stacked in a pile.' },
  '七': { hook: 'NANA — your nana has baked seven cakes.' },
  '八': { hook: 'HACHI — hatch. Eight chicks hatched at once.' },
  '九': { hook: 'KYUU — queue. Nine people waiting in line. (Same sound as 休 rest.)' },
  '十': { hook: 'JUU — jewel. Ten jewels in the crown.' },
  '百': { hook: 'HYAKU — a hundred yaks, all mooing at once.', weak: true },
  '千': { hook: 'SEN — sent. A thousand messages, all sent.' },
  '万': { hook: 'MAN — ten thousand men. Say it and you have said it.' },
  '円': { hook: 'EN — no trick needed. En IS the yen.' },

  // Calendar & time
  '日': { hook: 'NICHI — a niche of sunlight coming through the curtains.' },
  '月': { hook: 'GETSU — get-su. You only GET one moon.' },
  '火': { hook: 'KA — car. Cars run on burning things.' },
  '水': { hook: 'SUI — sweet. Water tastes sweet when you are parched.' },
  '木': { hook: 'MOKU — smoke. It comes off burning wood.' },
  '金': { hook: 'KIN — your kin are after your gold.' },
  '土': { hook: 'DO — dough. Earth you can knead.' },
  '年': { hook: 'NEN — again, without the a-g. Every year, again.' },
  '時': { hook: 'JI — gee. Gee, is that the time already?' },
  '分': { hook: 'FUN — a minute of fun. Then it is over.' },
  '週': { hook: 'SHUU — shoe. A new pair every week, if you are lucky.' },
  '今': { hook: 'IMA — I’m a. As in “I’m a doing it right now”.' },
  '半': { hook: 'HAN — hand. Half of a pair of them.' },
  '毎': { hook: 'MAI — my. My every single day.' },

  // People
  '人': { hook: 'HITO — he-toe. A person has toes.' },
  '私': { hook: 'WATASHI — what-a-shy person. That would be me.' },
  '名': { hook: 'NA — “nah, that’s not my name.”' },
  '前': { hook: 'MAE — “may I go before you?”' },
  '後': { hook: 'GO — after this, you go. (Same sound as 五 five and 語 language.)' },
  '友': { hook: 'TOMO — tomorrow I am seeing my friend.' },
  '男': { hook: 'OTOKO — oh, took over the ploughing. That will be the man.' },
  '女': { hook: 'ONNA — on a girls’ night out.' },
  '子': { hook: 'KO — a little koala clinging on.' },
  '父': { hook: 'CHICHI — Dad thinks he is terribly chichi.' },
  '母': { hook: 'HAHA — Mum, laughing at her own joke.' },
  '先': { hook: 'SEN — sent on ahead. (Same sound as 千 thousand.)' },
  '生': { hook: 'SEI — say. Say hello to new life.' },

  // Nature
  '山': { hook: 'YAMA — “yamma” climb that mountain if it kills me.', weak: true },
  '川': { hook: 'KAWA — the river goes kawa-kawa over the stones.' },
  '空': { hook: 'SORA — soar-a. Straight up through the sky.' },
  '雨': { hook: 'AME — “ah, me” — raining again.' },
  '花': { hook: 'HANA — hand-a flower over.' },
  '石': { hook: 'ISHI — squishy. A stone is the one thing it is not.' },
  '天': { hook: 'TEN — the tenth heaven, one better than the ninth.' },
  '気': { hook: 'KI — key. The key to how you are feeling.' },
  '電': { hook: 'DEN — the lights are on in the den.' },
  '車': { hook: 'KURUMA — the car goes brrr-uma down the road.', weak: true },
  '犬': { hook: 'INU — “I knew” that dog would bark.' },
  '米': { hook: 'KOME — come and get your rice.' },
  '茶': { hook: 'CHA — chai. It is just tea.' },
  '魚': { hook: 'SAKANA — fish with your sake. That is genuinely what sakana meant.' },
  '白': { hook: 'SHIRO — she-ro. A hero in a white hat.' },
  '赤': { hook: 'AKA — aka red, also known as blood.' },
  '青': { hook: 'AO — “ow!” — you have gone blue with cold.' },
  '黒': { hook: 'KURO — crow. Black as one.' },

  // Directions
  '上': { hook: 'UE — “oo, eh?” Head tipped back, looking up.', weak: true },
  '下': { hook: 'SHITA — it is down there, under the sheet.' },
  '左': { hook: 'HIDARI — “he-dare-ee” you to write with your left hand.' },
  '右': { hook: 'MIGI — “me, gee” — I write with my right.' },
  '中': { hook: 'NAKA — knocker, right in the middle of the door.' },
  '外': { hook: 'SOTO — “so, toe” out the door you go.', weak: true },
  '東': { hook: 'HIGASHI — “he gashes” the sky, that sunrise in the east.', weak: true },
  '西': { hook: 'NISHI — “knee-she” — she points west with her knee.', weak: true },
  '南': { hook: 'MINAMI — Miami. About as south as it gets.' },
  '北': { hook: 'KITA — you need a full kit-out to survive up north.' },

  // Size & quality
  '大': { hook: 'DAI — a die, as in one big dice.' },
  '小': { hook: 'SHOU — show. A very small show. (Same sound as 少 few.)' },
  '高': { hook: 'KOU — the cow that jumped high over the moon. (Same as 行 go and 校 school.)' },
  '安': { hook: 'AN — an easy price. An bargain, even.' },
  '新': { hook: 'SHIN — a shiny new shin.' },
  '古': { hook: 'KO — an old coat, worn through. (Same sound as 子 child.)' },
  '多': { hook: 'TA — “ta!” for all these many gifts.' },
  '少': { hook: 'SHOU — the same sound as 小 small. Few and small are cousins in every sense.' },

  // Body
  '目': { hook: 'ME — my eye. It could not be easier.' },
  '耳': { hook: 'MIMI — “me, me!” Something you say into an ear.' },
  '口': { hook: 'KUCHI — coochie-coo, right at the mouth.' },
  '手': { hook: 'TE — you take things with it.' },
  '足': { hook: 'ASHI — ashy feet, from walking too far.' },

  // Verbs & actions
  '行': { hook: 'KOU — “coo,” says the pigeon, and off it goes. (Same as 高 tall and 校 school.)' },
  '来': { hook: 'RAI — ride on over here.' },
  '見': { hook: 'KEN — to ken is Scots for to know. You see it, therefore you ken it.' },
  '食': { hook: 'SHOKU — it will shock you how much he eats.' },
  '飲': { hook: 'IN — drink it in. Straight in.' },
  '読': { hook: 'DOKU — “doc, you read far too much.”' },
  '書': { hook: 'SHO — show me what you have written.' },
  '話': { hook: 'WA — “wah wah wah.” All talk.' },
  '聞': { hook: 'BUN — you can hear the bun sizzling from here.' },
  '買': { hook: 'BAI — buy. Literally the word.' },
  '休': { hook: 'KYUU — queue up and rest while you wait. (Same sound as 九 nine.)' },
  '立': { hook: 'RITSU — “rits-you” up onto your feet.', weak: true },
  '入': { hook: 'NYUU — new people, entering.' },
  '出': { hook: 'SHUTSU — it shoots you out the door.' },

  // School & places
  '学': { hook: 'GAKU — “gah, cool” — studying, apparently.', weak: true },
  '校': { hook: 'KOU — the third of the kou trio, with 高 tall and 行 go.' },
  '語': { hook: 'GO — go on then, say something. (Same sound as 五 five and 後 after.)' },
  '国': { hook: 'KOKU — coca. Every country has a drink it is known for.', weak: true },
  '会': { hook: 'KAI — “ky,” near enough to “hi.” You meet, you say hi.' },
  '社': { hook: 'SHA — the shah runs the company.' },
  '本': { hook: 'HON — hone your mind on a good book.' },
  '何': { hook: 'NAN — “nan? what?” She cannot hear you.' },
  '間': { hook: 'KAN — a gap you can just about fit through.' },
}
