// Katakana data set: main rows, voiced (dakuon), handakuon, and yōon combinations.
// Katakana is mainly used for loanwords, foreign names, and onomatopoeia, so example
// words lean on real loanwords (コーヒー, テレビ, アニメ, etc.) wherever a common one exists.

export const katakanaMainRows = [
  {
    id: 'a',
    label: 'ア row',
    characters: [
      { char: 'ア', romaji: 'a', emoji: '🎬', word: { kana: 'アニメ', romaji: 'anime', meaning: 'anime' } },
      { char: 'イ', romaji: 'i', emoji: '🐬', word: { kana: 'イルカ', romaji: 'iruka', meaning: 'dolphin' } },
      { char: 'ウ', romaji: 'u', emoji: '🐰', word: { kana: 'ウサギ', romaji: 'usagi', meaning: 'rabbit' } },
      { char: 'エ', romaji: 'e', emoji: '🦐', word: { kana: 'エビ', romaji: 'ebi', meaning: 'shrimp' } },
      { char: 'オ', romaji: 'o', emoji: '🍊', word: { kana: 'オレンジ', romaji: 'orenji', meaning: 'orange' } },
    ],
  },
  {
    id: 'ka',
    label: 'カ row',
    characters: [
      { char: 'カ', romaji: 'ka', emoji: '📷', word: { kana: 'カメラ', romaji: 'kamera', meaning: 'camera' } },
      { char: 'キ', romaji: 'ki', emoji: '🦒', word: { kana: 'キリン', romaji: 'kirin', meaning: 'giraffe' } },
      { char: 'ク', romaji: 'ku', emoji: '🍪', word: { kana: 'クッキー', romaji: 'kukkii', meaning: 'cookie' } },
      { char: 'ケ', romaji: 'ke', emoji: '🍰', word: { kana: 'ケーキ', romaji: 'keeki', meaning: 'cake' } },
      { char: 'コ', romaji: 'ko', emoji: '☕', word: { kana: 'コーヒー', romaji: 'koohii', meaning: 'coffee' } },
    ],
  },
  {
    id: 'sa',
    label: 'サ row',
    characters: [
      { char: 'サ', romaji: 'sa', emoji: '🥗', word: { kana: 'サラダ', romaji: 'sarada', meaning: 'salad' } },
      { char: 'シ', romaji: 'shi', emoji: '🦓', word: { kana: 'シマウマ', romaji: 'shimauma', meaning: 'zebra' } },
      { char: 'ス', romaji: 'su', emoji: '🍲', word: { kana: 'スープ', romaji: 'suupu', meaning: 'soup' } },
      { char: 'セ', romaji: 'se', emoji: '🧥', word: { kana: 'セーター', romaji: 'seetaa', meaning: 'sweater' } },
      { char: 'ソ', romaji: 'so', emoji: '🛋️', word: { kana: 'ソファ', romaji: 'sofa', meaning: 'sofa' } },
    ],
  },
  {
    id: 'ta',
    label: 'タ row',
    characters: [
      { char: 'タ', romaji: 'ta', emoji: '🚕', word: { kana: 'タクシー', romaji: 'takushii', meaning: 'taxi' } },
      { char: 'チ', romaji: 'chi', emoji: '🧀', word: { kana: 'チーズ', romaji: 'chiizu', meaning: 'cheese' } },
      { char: 'ツ', romaji: 'tsu', emoji: '🐟', word: { kana: 'ツナ', romaji: 'tsuna', meaning: 'tuna' } },
      { char: 'テ', romaji: 'te', emoji: '📺', word: { kana: 'テレビ', romaji: 'terebi', meaning: 'television' } },
      { char: 'ト', romaji: 'to', emoji: '🍅', word: { kana: 'トマト', romaji: 'tomato', meaning: 'tomato' } },
    ],
  },
  {
    id: 'na',
    label: 'ナ row',
    characters: [
      { char: 'ナ', romaji: 'na', emoji: '🔪', word: { kana: 'ナイフ', romaji: 'naifu', meaning: 'knife' } },
      { char: 'ニ', romaji: 'ni', emoji: '🥕', word: { kana: 'ニンジン', romaji: 'ninjin', meaning: 'carrot' } },
      { char: 'ヌ', romaji: 'nu', emoji: '🍜', word: { kana: 'ヌードル', romaji: 'nuudoru', meaning: 'noodle' } },
      { char: 'ネ', romaji: 'ne', emoji: '👔', word: { kana: 'ネクタイ', romaji: 'nekutai', meaning: 'necktie' } },
      { char: 'ノ', romaji: 'no', emoji: '📓', word: { kana: 'ノート', romaji: 'nooto', meaning: 'notebook' } },
    ],
  },
  {
    id: 'ha',
    label: 'ハ row',
    characters: [
      { char: 'ハ', romaji: 'ha', emoji: '🍔', word: { kana: 'ハンバーガー', romaji: 'hanbaagaa', meaning: 'hamburger' } },
      { char: 'ヒ', romaji: 'hi', emoji: '🦸', word: { kana: 'ヒーロー', romaji: 'hiiroo', meaning: 'hero' } },
      { char: 'フ', romaji: 'fu', emoji: '🍴', word: { kana: 'フォーク', romaji: 'fooku', meaning: 'fork' } },
      { char: 'ヘ', romaji: 'he', emoji: '🚁', word: { kana: 'ヘリコプター', romaji: 'herikoputaa', meaning: 'helicopter' } },
      { char: 'ホ', romaji: 'ho', emoji: '🏨', word: { kana: 'ホテル', romaji: 'hoteru', meaning: 'hotel' } },
    ],
  },
  {
    id: 'ma',
    label: 'マ row',
    characters: [
      { char: 'マ', romaji: 'ma', emoji: '😷', word: { kana: 'マスク', romaji: 'masuku', meaning: 'mask' } },
      { char: 'ミ', romaji: 'mi', emoji: '🥛', word: { kana: 'ミルク', romaji: 'miruku', meaning: 'milk' } },
      { char: 'ム', romaji: 'mu', emoji: '🍮', word: { kana: 'ムース', romaji: 'muusu', meaning: 'mousse' } },
      { char: 'メ', romaji: 'me', emoji: '📋', word: { kana: 'メニュー', romaji: 'menyuu', meaning: 'menu' } },
      { char: 'モ', romaji: 'mo', emoji: '💃', word: { kana: 'モデル', romaji: 'moderu', meaning: 'model' } },
    ],
  },
  {
    id: 'ya',
    label: 'ヤ row',
    characters: [
      { char: 'ヤ', romaji: 'ya', emoji: '🐐', word: { kana: 'ヤギ', romaji: 'yagi', meaning: 'goat' } },
      { char: 'ユ', romaji: 'yu', emoji: '👕', word: { kana: 'ユニフォーム', romaji: 'yunifoomu', meaning: 'uniform' } },
      { char: 'ヨ', romaji: 'yo', emoji: '🧘', word: { kana: 'ヨガ', romaji: 'yoga', meaning: 'yoga' } },
    ],
  },
  {
    id: 'ra',
    label: 'ラ row',
    characters: [
      { char: 'ラ', romaji: 'ra', emoji: '🍥', word: { kana: 'ラーメン', romaji: 'raamen', meaning: 'ramen' } },
      { char: 'リ', romaji: 'ri', emoji: '🎀', word: { kana: 'リボン', romaji: 'ribon', meaning: 'ribbon' } },
      { char: 'ル', romaji: 'ru', emoji: '💎', word: { kana: 'ルビー', romaji: 'rubii', meaning: 'ruby' } },
      { char: 'レ', romaji: 're', emoji: '🍋', word: { kana: 'レモン', romaji: 'remon', meaning: 'lemon' } },
      { char: 'ロ', romaji: 'ro', emoji: '🤖', word: { kana: 'ロボット', romaji: 'robotto', meaning: 'robot' } },
    ],
  },
  {
    id: 'wa',
    label: 'ワ row',
    characters: [
      { char: 'ワ', romaji: 'wa', emoji: '🍷', word: { kana: 'ワイン', romaji: 'wain', meaning: 'wine' } },
      { char: 'ヲ', romaji: 'wo', emoji: '🤓', word: { kana: 'ヲタク', romaji: 'wotaku', meaning: 'geek (stylized spelling of otaku)' } },
    ],
  },
  {
    id: 'n',
    label: 'ン',
    characters: [
      { char: 'ン', romaji: 'n', emoji: '🦁', word: { kana: 'ライオン', romaji: 'raion', meaning: 'lion' } },
    ],
  },
]

export const katakanaVoiced = [
  {
    id: 'ga',
    label: 'ガ row',
    characters: [
      { char: 'ガ', romaji: 'ga', emoji: '🍬', word: { kana: 'ガム', romaji: 'gamu', meaning: 'gum' } },
      { char: 'ギ', romaji: 'gi', emoji: '🎸', word: { kana: 'ギター', romaji: 'gitaa', meaning: 'guitar' } },
      { char: 'グ', romaji: 'gu', emoji: '🥃', word: { kana: 'グラス', romaji: 'gurasu', meaning: 'glass (drinking)' } },
      { char: 'ゲ', romaji: 'ge', emoji: '🎮', word: { kana: 'ゲーム', romaji: 'geemu', meaning: 'game' } },
      { char: 'ゴ', romaji: 'go', emoji: '🦍', word: { kana: 'ゴリラ', romaji: 'gorira', meaning: 'gorilla' } },
    ],
  },
  {
    id: 'za',
    label: 'ザ row',
    characters: [
      { char: 'ザ', romaji: 'za', emoji: '🦀', word: { kana: 'ザリガニ', romaji: 'zarigani', meaning: 'crayfish' } },
      { char: 'ジ', romaji: 'ji', emoji: '👖', word: { kana: 'ジーンズ', romaji: 'jiinzu', meaning: 'jeans' } },
      { char: 'ズ', romaji: 'zu', emoji: '🩳', word: { kana: 'ズボン', romaji: 'zubon', meaning: 'trousers / pants' } },
      { char: 'ゼ', romaji: 'ze', emoji: '🍮', word: { kana: 'ゼリー', romaji: 'zerii', meaning: 'jelly' } },
      { char: 'ゾ', romaji: 'zo', emoji: '🐘', word: { kana: 'ゾウ', romaji: 'zou', meaning: 'elephant' } },
    ],
  },
  {
    id: 'da',
    label: 'ダ row',
    characters: [
      { char: 'ダ', romaji: 'da', emoji: '💃', word: { kana: 'ダンス', romaji: 'dansu', meaning: 'dance' } },
      { char: 'ヂ', romaji: 'ji', emoji: '🥞', word: { kana: 'チヂミ', romaji: 'chijimi', meaning: 'savory Korean-style pancake' } },
      { char: 'ヅ', romaji: 'zu', emoji: '🍣', word: { kana: 'ヅケ', romaji: 'zuke', meaning: 'marinated fish (sushi term)' } },
      { char: 'デ', romaji: 'de', emoji: '🍨', word: { kana: 'デザート', romaji: 'dezaato', meaning: 'dessert' } },
      { char: 'ド', romaji: 'do', emoji: '🚪', word: { kana: 'ドア', romaji: 'doa', meaning: 'door' } },
    ],
  },
  {
    id: 'ba',
    label: 'バ row',
    characters: [
      { char: 'バ', romaji: 'ba', emoji: '🍌', word: { kana: 'バナナ', romaji: 'banana', meaning: 'banana' } },
      { char: 'ビ', romaji: 'bi', emoji: '📹', word: { kana: 'ビデオ', romaji: 'bideo', meaning: 'video' } },
      { char: 'ブ', romaji: 'bu', emoji: '🖌️', word: { kana: 'ブラシ', romaji: 'burashi', meaning: 'brush' } },
      { char: 'ベ', romaji: 'be', emoji: '🛏️', word: { kana: 'ベッド', romaji: 'beddo', meaning: 'bed' } },
      { char: 'ボ', romaji: 'bo', emoji: '⚽', word: { kana: 'ボール', romaji: 'booru', meaning: 'ball' } },
    ],
  },
]

export const katakanaHandakuon = [
  {
    id: 'pa',
    label: 'パ row',
    characters: [
      { char: 'パ', romaji: 'pa', emoji: '🍞', word: { kana: 'パン', romaji: 'pan', meaning: 'bread' } },
      { char: 'ピ', romaji: 'pi', emoji: '🎹', word: { kana: 'ピアノ', romaji: 'piano', meaning: 'piano' } },
      { char: 'プ', romaji: 'pu', emoji: '🏊', word: { kana: 'プール', romaji: 'puuru', meaning: 'pool' } },
      { char: 'ペ', romaji: 'pe', emoji: '🐧', word: { kana: 'ペンギン', romaji: 'pengin', meaning: 'penguin' } },
      { char: 'ポ', romaji: 'po', emoji: '📮', word: { kana: 'ポスト', romaji: 'posuto', meaning: 'mailbox / postbox' } },
    ],
  },
]

export const katakanaYoon = [
  {
    id: 'kya',
    label: 'キャ group',
    characters: [
      { char: 'キャ', romaji: 'kya', emoji: '⛺', word: { kana: 'キャンプ', romaji: 'kyanpu', meaning: 'camp' } },
      { char: 'キュ', romaji: 'kyu', emoji: '😍', word: { kana: 'キュート', romaji: 'kyuuto', meaning: 'cute' } },
      { char: 'キョ', romaji: 'kyo', emoji: '👀', word: { kana: 'キョロキョロ', romaji: 'kyorokyoro', meaning: 'looking around restlessly' } },
    ],
  },
  {
    id: 'sha',
    label: 'シャ group',
    characters: [
      { char: 'シャ', romaji: 'sha', emoji: '👕', word: { kana: 'シャツ', romaji: 'shatsu', meaning: 'shirt' } },
      { char: 'シュ', romaji: 'shu', emoji: '🧁', word: { kana: 'シュークリーム', romaji: 'shuukuriimu', meaning: 'cream puff' } },
      { char: 'ショ', romaji: 'sho', emoji: '😱', word: { kana: 'ショック', romaji: 'shokku', meaning: 'shock' } },
    ],
  },
  {
    id: 'cha',
    label: 'チャ group',
    characters: [
      { char: 'チャ', romaji: 'cha', emoji: '🔔', word: { kana: 'チャイム', romaji: 'chaimu', meaning: 'chime / bell' } },
      { char: 'チュ', romaji: 'chu', emoji: '🌷', word: { kana: 'チューリップ', romaji: 'chuurippu', meaning: 'tulip' } },
      { char: 'チョ', romaji: 'cho', emoji: '🍫', word: { kana: 'チョコレート', romaji: 'chokoreeto', meaning: 'chocolate' } },
    ],
  },
  {
    id: 'nya',
    label: 'ニャ group',
    characters: [
      { char: 'ニャ', romaji: 'nya', emoji: '🐱', word: { kana: 'ニャンコ', romaji: 'nyanko', meaning: 'kitty (cute)' } },
      { char: 'ニュ', romaji: 'nyu', emoji: '📰', word: { kana: 'ニュース', romaji: 'nyuusu', meaning: 'news' } },
      { char: 'ニョ', romaji: 'nyo', emoji: '🐍', word: { kana: 'ニョロニョロ', romaji: 'nyoronyoro', meaning: 'wriggling / slithering' } },
    ],
  },
  {
    id: 'hya',
    label: 'ヒャ group',
    characters: [
      { char: 'ヒャ', romaji: 'hya', emoji: '🎉', word: { kana: 'ヒャッホー', romaji: 'hyahhoo', meaning: 'yahoo! / wheee (exclamation of joy)' } },
      { char: 'ヒュ', romaji: 'hyu', emoji: '💨', word: { kana: 'ヒューヒュー', romaji: 'hyuuhyuu', meaning: 'whoosh (whistling wind)' } },
      { char: 'ヒョ', romaji: 'hyo', emoji: '🐆', word: { kana: 'ヒョウ', romaji: 'hyou', meaning: 'leopard' } },
    ],
  },
  {
    id: 'mya',
    label: 'ミャ group',
    characters: [
      { char: 'ミャ', romaji: 'mya', emoji: '🇲🇲', word: { kana: 'ミャンマー', romaji: 'myanmaa', meaning: 'Myanmar' } },
      { char: 'ミュ', romaji: 'myu', emoji: '🎵', word: { kana: 'ミュージック', romaji: 'myuujikku', meaning: 'music' } },
      { char: 'ミョ', romaji: 'myo', emoji: '🌱', word: { kana: 'ミョウガ', romaji: 'myouga', meaning: 'Japanese ginger' } },
    ],
  },
  {
    id: 'rya',
    label: 'リャ group',
    characters: [
      { char: 'リャ', romaji: 'rya', emoji: '🔤', word: { kana: 'リャクゴ', romaji: 'ryakugo', meaning: 'abbreviation' } },
      { char: 'リュ', romaji: 'ryu', emoji: '🎒', word: { kana: 'リュックサック', romaji: 'ryukkusakku', meaning: 'backpack' } },
      { char: 'リョ', romaji: 'ryo', emoji: '✈️', word: { kana: 'リョコウ', romaji: 'ryokou', meaning: 'travel' } },
    ],
  },
  {
    id: 'gya',
    label: 'ギャ group',
    characters: [
      { char: 'ギャ', romaji: 'gya', emoji: '🔄', word: { kana: 'ギャク', romaji: 'gyaku', meaning: 'opposite / reverse' } },
      { char: 'ギュ', romaji: 'gyu', emoji: '🥛', word: { kana: 'ギュウニュウ', romaji: 'gyuunyuu', meaning: 'milk' } },
      { char: 'ギョ', romaji: 'gyo', emoji: '🥟', word: { kana: 'ギョウザ', romaji: 'gyouza', meaning: 'dumpling' } },
    ],
  },
  {
    id: 'ja',
    label: 'ジャ group',
    characters: [
      { char: 'ジャ', romaji: 'ja', emoji: '🍓', word: { kana: 'ジャム', romaji: 'jamu', meaning: 'jam' } },
      { char: 'ジュ', romaji: 'ju', emoji: '🧃', word: { kana: 'ジュース', romaji: 'juusu', meaning: 'juice' } },
      { char: 'ジョ', romaji: 'jo', emoji: '🏃', word: { kana: 'ジョギング', romaji: 'jogingu', meaning: 'jogging' } },
    ],
  },
  {
    id: 'bya',
    label: 'ビャ group',
    characters: [
      { char: 'ビャ', romaji: 'bya', emoji: '🌳', word: { kana: 'ビャクダン', romaji: 'byakudan', meaning: 'sandalwood' } },
      { char: 'ビュ', romaji: 'byu', emoji: '🍽️', word: { kana: 'ビュッフェ', romaji: 'byuffe', meaning: 'buffet' } },
      { char: 'ビョ', romaji: 'byo', emoji: '🤒', word: { kana: 'ビョウキ', romaji: 'byouki', meaning: 'illness' } },
    ],
  },
  {
    id: 'pya',
    label: 'ピャ group',
    characters: [
      { char: 'ピャ', romaji: 'pya', emoji: '😳', word: { kana: 'ピャー', romaji: 'pyaa', meaning: 'eek! (startled sound effect)' } },
      { char: 'ピュ', romaji: 'pyu', emoji: '💗', word: { kana: 'ピュア', romaji: 'pyua', meaning: 'pure' } },
      { char: 'ピョ', romaji: 'pyo', emoji: '🐰', word: { kana: 'ピョンピョン', romaji: 'pyonpyon', meaning: 'hopping repeatedly' } },
    ],
  },
]

export const katakanaAllGroups = [
  ...katakanaMainRows,
  ...katakanaVoiced,
  ...katakanaHandakuon,
  ...katakanaYoon,
]

export const katakanaAllCharacters = katakanaAllGroups.flatMap((group) => group.characters)
