// Radicals — the reusable parts kanji are built from.
//
// Naming convention: `name` is the radical's real, traditional meaning (the
// one she'll meet in any dictionary or textbook), `nickname` is a plain-English
// hint at the shape, and `meaning` describes what the shape actually depicts.
// Nothing here is invented: every entry is a Kangxi radical, and the variants
// are the standard positional forms (亻 for 人, 氵 for 水, and so on).
//
// `char` is the canonical form and is what `components` in kanji.js reference.
// `variants` lists the forms the same radical takes inside other kanji.
//
// The set is 66 rather than a round 50: it covers the radicals that actually
// recur across everyday kanji, plus every nameable part of the Tier 1 kanji, so
// the "built from" breakdowns can resolve without inventing anything.

export const radicalGroups = [
  { key: 'people', label: 'People & body', emoji: '🧍' },
  { key: 'nature', label: 'Nature', emoji: '🌿' },
  { key: 'living', label: 'Plants & animals', emoji: '🐟' },
  { key: 'places', label: 'Buildings & places', emoji: '🏠' },
  { key: 'things', label: 'Things & tools', emoji: '🔨' },
  { key: 'strokes', label: 'Shapes & strokes', emoji: '✏️' },
]

export const radicals = [
  // People & body
  { char: '人', name: 'person', nickname: 'person', meaning: 'a person standing on two legs', emoji: '🧍', strokes: 2, variants: ['亻'], group: 'people' },
  { char: '女', name: 'woman', nickname: 'woman', meaning: 'a woman seated with her arms folded', emoji: '👩', strokes: 3, variants: [], group: 'people' },
  { char: '子', name: 'child', nickname: 'child', meaning: 'a baby with its arms out and legs wrapped up', emoji: '👶', strokes: 3, variants: [], group: 'people' },
  { char: '儿', name: 'legs', nickname: 'walking legs', meaning: 'a pair of legs — it sits under a kanji, never beside it', emoji: '🦵', strokes: 2, variants: [], group: 'people' },
  { char: '口', name: 'mouth', nickname: 'mouth', meaning: 'an open mouth — speaking, eating, or an opening of any kind', emoji: '👄', strokes: 3, variants: [], group: 'people' },
  { char: '目', name: 'eye', nickname: 'eye', meaning: 'an eye, drawn upright rather than on its side', emoji: '👁️', strokes: 5, variants: [], group: 'people' },
  { char: '耳', name: 'ear', nickname: 'ear', meaning: 'an ear', emoji: '👂', strokes: 6, variants: [], group: 'people' },
  { char: '手', name: 'hand', nickname: 'hand', meaning: 'a hand with its fingers spread', emoji: '✋', strokes: 4, variants: ['扌'], group: 'people' },
  { char: '足', name: 'foot', nickname: 'foot', meaning: 'a leg and foot — also means "enough"', emoji: '🦶', strokes: 7, variants: [], group: 'people' },
  { char: '心', name: 'heart', nickname: 'heart', meaning: 'a heart — feelings and the mind, not just the organ', emoji: '❤️', strokes: 4, variants: ['忄'], group: 'people' },
  { char: '力', name: 'power', nickname: 'strong arm', meaning: 'a flexed arm — strength and effort', emoji: '💪', strokes: 2, variants: [], group: 'people' },
  { char: '舌', name: 'tongue', nickname: 'tongue', meaning: 'a tongue poking out of a mouth', emoji: '👅', strokes: 6, variants: [], group: 'people' },

  // Nature
  { char: '日', name: 'sun', nickname: 'sun', meaning: 'the sun — and by extension, a day', emoji: '☀️', strokes: 4, variants: [], group: 'nature' },
  { char: '月', name: 'moon', nickname: 'moon', meaning: 'a crescent moon — also a month, and on the left of a kanji it often means flesh or body', emoji: '🌙', strokes: 4, variants: [], group: 'nature' },
  { char: '火', name: 'fire', nickname: 'fire', meaning: 'flames rising — at the foot of a kanji it flattens into four dots', emoji: '🔥', strokes: 4, variants: ['灬'], group: 'nature' },
  { char: '水', name: 'water', nickname: 'water', meaning: 'a stream with ripples — on the left it becomes three droplets', emoji: '💧', strokes: 4, variants: ['氵'], group: 'nature' },
  { char: '木', name: 'tree', nickname: 'tree', meaning: 'a tree with branches above and roots below', emoji: '🌳', strokes: 4, variants: [], group: 'nature' },
  { char: '土', name: 'earth', nickname: 'ground', meaning: 'soil and ground — a mound pushed up from the earth', emoji: '🟤', strokes: 3, variants: [], group: 'nature' },
  { char: '山', name: 'mountain', nickname: 'mountain', meaning: 'three peaks in a row', emoji: '⛰️', strokes: 3, variants: [], group: 'nature' },
  { char: '川', name: 'river', nickname: 'river', meaning: 'water running between two banks', emoji: '🏞️', strokes: 3, variants: [], group: 'nature' },
  { char: '石', name: 'stone', nickname: 'stone', meaning: 'a rock lying at the foot of a cliff', emoji: '🪨', strokes: 5, variants: [], group: 'nature' },
  { char: '田', name: 'rice field', nickname: 'paddy field', meaning: 'a field seen from above, divided into plots', emoji: '🌾', strokes: 5, variants: [], group: 'nature' },
  { char: '雨', name: 'rain', nickname: 'rain', meaning: 'droplets falling from a cloud', emoji: '🌧️', strokes: 8, variants: [], group: 'nature' },
  { char: '夕', name: 'evening', nickname: 'dusk', meaning: 'the moon only half-risen — early evening', emoji: '🌆', strokes: 3, variants: [], group: 'nature' },

  // Plants & animals
  { char: '艹', name: 'grass', nickname: 'grass crown', meaning: 'two shoots of grass — it sits on top of a kanji', emoji: '🌿', strokes: 3, variants: ['艸'], group: 'living' },
  { char: '禾', name: 'grain', nickname: 'ripe grain', meaning: 'a rice plant bowing under the weight of its ear', emoji: '🌾', strokes: 5, variants: [], group: 'living' },
  { char: '竹', name: 'bamboo', nickname: 'bamboo crown', meaning: 'two bamboo stalks with drooping leaves', emoji: '🎋', strokes: 6, variants: ['⺮'], group: 'living' },
  { char: '米', name: 'rice', nickname: 'rice grains', meaning: 'grains scattered from an ear of rice', emoji: '🍚', strokes: 6, variants: [], group: 'living' },
  { char: '糸', name: 'thread', nickname: 'thread', meaning: 'a twisted skein of silk thread', emoji: '🧵', strokes: 6, variants: [], group: 'living' },
  { char: '犬', name: 'dog', nickname: 'dog', meaning: 'a dog — on the left it narrows and means an animal generally', emoji: '🐕', strokes: 4, variants: ['犭'], group: 'living' },
  { char: '魚', name: 'fish', nickname: 'fish', meaning: 'a fish standing on its tail — head, body, fins', emoji: '🐟', strokes: 11, variants: [], group: 'living' },
  { char: '鳥', name: 'bird', nickname: 'bird', meaning: 'a bird with an eye, a wing and clawed feet', emoji: '🐦', strokes: 11, variants: [], group: 'living' },
  { char: '虫', name: 'insect', nickname: 'bug', meaning: 'a small crawling creature — insects, worms, snakes', emoji: '🐛', strokes: 6, variants: [], group: 'living' },
  { char: '馬', name: 'horse', nickname: 'horse', meaning: 'a horse with its mane up and four legs beneath', emoji: '🐴', strokes: 10, variants: [], group: 'living' },

  // Buildings & places
  { char: '宀', name: 'roof', nickname: 'roof', meaning: 'a roof with walls on both sides — anything indoors', emoji: '🏠', strokes: 3, variants: [], group: 'places' },
  { char: '广', name: 'lean-to', nickname: 'open roof', meaning: 'a roof with one side left open — a shelter built against something', emoji: '🏚️', strokes: 3, variants: [], group: 'places' },
  { char: '門', name: 'gate', nickname: 'gate', meaning: 'a pair of swinging doors', emoji: '⛩️', strokes: 8, variants: [], group: 'places' },
  { char: '囗', name: 'enclosure', nickname: 'box', meaning: 'a boundary drawn all the way around something', emoji: '🔲', strokes: 3, variants: [], group: 'places' },
  { char: '穴', name: 'cave', nickname: 'hole', meaning: 'a hole dug out under a roof', emoji: '🕳️', strokes: 5, variants: [], group: 'places' },
  { char: '車', name: 'vehicle', nickname: 'cart', meaning: 'a cart seen from above — axle, wheels and body', emoji: '🚗', strokes: 7, variants: [], group: 'places' },
  { char: '辶', name: 'road', nickname: 'moving along', meaning: 'a foot on a road — motion, travel, going somewhere', emoji: '🛣️', strokes: 3, variants: [], group: 'places' },
  { char: '彳', name: 'step', nickname: 'crossroads', meaning: 'the left half of a crossroads — going, on the way', emoji: '👣', strokes: 3, variants: [], group: 'places' },

  // Things & tools
  { char: '刀', name: 'sword', nickname: 'blade', meaning: 'a curved blade — on the right it straightens into two strokes', emoji: '🗡️', strokes: 2, variants: ['刂'], group: 'things' },
  { char: '貝', name: 'shell', nickname: 'shell money', meaning: 'a cowrie shell — the old currency, so it means money or value', emoji: '🐚', strokes: 7, variants: [], group: 'things' },
  { char: '金', name: 'metal', nickname: 'gold', meaning: 'nuggets of metal buried under the ground — gold, and money', emoji: '🪙', strokes: 8, variants: [], group: 'things' },
  { char: '罒', name: 'net', nickname: 'net', meaning: 'a net with its mesh — it sits on top of a kanji', emoji: '🕸️', strokes: 5, variants: [], group: 'things' },
  { char: '示', name: 'altar', nickname: 'altar', meaning: 'an altar table — gods, ritual, and anything sacred', emoji: '⛩️', strokes: 5, variants: ['礻'], group: 'things' },
  { char: '食', name: 'food', nickname: 'food', meaning: 'a lid over a bowl of rice', emoji: '🍚', strokes: 9, variants: ['飠'], group: 'things' },
  { char: '王', name: 'jade', nickname: 'king', meaning: 'three jade discs threaded on a string — the radical is jade, though it is written exactly like the kanji for king', emoji: '👑', strokes: 4, variants: ['玉'], group: 'things' },
  { char: '斤', name: 'axe', nickname: 'axe', meaning: 'an axe head on its handle', emoji: '🪓', strokes: 4, variants: [], group: 'things' },
  { char: '寸', name: 'measure', nickname: 'thumb-width', meaning: 'a hand with a mark at the pulse — a small measure, or a careful action', emoji: '📏', strokes: 3, variants: [], group: 'things' },
  { char: '工', name: 'work', nickname: '工 tool', meaning: "a carpenter's ruler — work and craft", emoji: '🔨', strokes: 3, variants: [], group: 'things' },
  { char: '言', name: 'speech', nickname: 'say', meaning: 'sound coming out of a mouth — words, speaking, language', emoji: '💬', strokes: 7, variants: [], group: 'things' },
  { char: '欠', name: 'lack', nickname: 'yawn', meaning: 'a person with their mouth wide open — a yawn, or something missing', emoji: '🥱', strokes: 4, variants: [], group: 'things' },

  // Shapes & strokes
  { char: '一', name: 'one', nickname: 'one line', meaning: 'a single horizontal stroke', emoji: '1️⃣', strokes: 1, variants: [], group: 'strokes' },
  { char: '十', name: 'ten', nickname: 'cross', meaning: 'two strokes crossing — ten, and completeness', emoji: '✚', strokes: 2, variants: [], group: 'strokes' },
  { char: '八', name: 'eight', nickname: 'split', meaning: 'two strokes pulling apart — eight, and dividing', emoji: '✌️', strokes: 2, variants: [], group: 'strokes' },
  { char: '又', name: 'again', nickname: 'right hand', meaning: 'a right hand — doing something once more', emoji: '🤚', strokes: 2, variants: [], group: 'strokes' },
  { char: '匕', name: 'spoon', nickname: 'ladle', meaning: 'a ladle — also read as a person bending over', emoji: '🥄', strokes: 2, variants: [], group: 'strokes' },
  { char: '卜', name: 'divination', nickname: 'fortune', meaning: 'a crack in a heated tortoise shell, read as a fortune', emoji: '🔮', strokes: 2, variants: [], group: 'strokes' },
  { char: '厶', name: 'private', nickname: 'wrapped up', meaning: 'a shape closed off from everyone else — private, oneself', emoji: '🤫', strokes: 2, variants: [], group: 'strokes' },
  { char: '大', name: 'big', nickname: 'big', meaning: 'a person with their arms stretched as wide as they go', emoji: '🙆', strokes: 3, variants: [], group: 'strokes' },
  { char: '小', name: 'small', nickname: 'small', meaning: 'a thing split into ever smaller pieces', emoji: '🤏', strokes: 3, variants: [], group: 'strokes' },
  { char: '入', name: 'enter', nickname: 'enter', meaning: 'a mouth of a cave, or a path forking inward', emoji: '🚪', strokes: 2, variants: [], group: 'strokes' },
  { char: '立', name: 'stand', nickname: 'standing', meaning: 'a person standing squarely on the ground', emoji: '🧍', strokes: 5, variants: [], group: 'strokes' },
  { char: '白', name: 'white', nickname: 'white', meaning: 'the sun just breaking the horizon — white, and bright', emoji: '⚪', strokes: 5, variants: [], group: 'strokes' },
]

export const radicalByChar = Object.fromEntries(radicals.map((r) => [r.char, r]))

export const radicalsByGroup = radicalGroups.map((group) => ({
  ...group,
  radicals: radicals.filter((r) => r.group === group.key),
}))

// Every form a radical can appear in, mapped back to its canonical entry, so a
// component written as 亻 or 氵 still resolves.
export const radicalByAnyForm = Object.fromEntries(
  radicals.flatMap((r) => [[r.char, r], ...r.variants.map((v) => [v, r])]),
)
