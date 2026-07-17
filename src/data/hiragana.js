// Hiragana data set: main gojūon rows, voiced (dakuon), handakuon, and yōon combinations.
// Every character carries a real example word (romaji + English meaning) and an emoji illustration.

export const hiraganaMainRows = [
  {
    id: 'a',
    label: 'あ row',
    characters: [
      { char: 'あ', romaji: 'a', emoji: '🌅', word: { kana: 'あさ', romaji: 'asa', meaning: 'morning' } },
      { char: 'い', romaji: 'i', emoji: '🐶', word: { kana: 'いぬ', romaji: 'inu', meaning: 'dog' } },
      { char: 'う', romaji: 'u', emoji: '🌊', word: { kana: 'うみ', romaji: 'umi', meaning: 'sea' } },
      { char: 'え', romaji: 'e', emoji: '🚉', word: { kana: 'えき', romaji: 'eki', meaning: 'station' } },
      { char: 'お', romaji: 'o', emoji: '👹', word: { kana: 'おに', romaji: 'oni', meaning: 'ogre' } },
    ],
  },
  {
    id: 'ka',
    label: 'か row',
    characters: [
      { char: 'か', romaji: 'ka', emoji: '☂️', word: { kana: 'かさ', romaji: 'kasa', meaning: 'umbrella' } },
      { char: 'き', romaji: 'ki', emoji: '🦊', word: { kana: 'きつね', romaji: 'kitsune', meaning: 'fox' } },
      { char: 'く', romaji: 'ku', emoji: '👟', word: { kana: 'くつ', romaji: 'kutsu', meaning: 'shoes' } },
      { char: 'け', romaji: 'ke', emoji: '💨', word: { kana: 'けむり', romaji: 'kemuri', meaning: 'smoke' } },
      { char: 'こ', romaji: 'ko', emoji: '🧊', word: { kana: 'こおり', romaji: 'koori', meaning: 'ice' } },
    ],
  },
  {
    id: 'sa',
    label: 'さ row',
    characters: [
      { char: 'さ', romaji: 'sa', emoji: '🐟', word: { kana: 'さかな', romaji: 'sakana', meaning: 'fish' } },
      { char: 'し', romaji: 'shi', emoji: '🦌', word: { kana: 'しか', romaji: 'shika', meaning: 'deer' } },
      { char: 'す', romaji: 'su', emoji: '🍣', word: { kana: 'すし', romaji: 'sushi', meaning: 'sushi' } },
      { char: 'せ', romaji: 'se', emoji: '🌍', word: { kana: 'せかい', romaji: 'sekai', meaning: 'world' } },
      { char: 'そ', romaji: 'so', emoji: '☁️', word: { kana: 'そら', romaji: 'sora', meaning: 'sky' } },
    ],
  },
  {
    id: 'ta',
    label: 'た row',
    characters: [
      { char: 'た', romaji: 'ta', emoji: '🐙', word: { kana: 'たこ', romaji: 'tako', meaning: 'octopus' } },
      { char: 'ち', romaji: 'chi', emoji: '🗺️', word: { kana: 'ちず', romaji: 'chizu', meaning: 'map' } },
      { char: 'つ', romaji: 'tsu', emoji: '🌙', word: { kana: 'つき', romaji: 'tsuki', meaning: 'moon' } },
      { char: 'て', romaji: 'te', emoji: '✉️', word: { kana: 'てがみ', romaji: 'tegami', meaning: 'letter' } },
      { char: 'と', romaji: 'to', emoji: '🐦', word: { kana: 'とり', romaji: 'tori', meaning: 'bird' } },
    ],
  },
  {
    id: 'na',
    label: 'な row',
    characters: [
      { char: 'な', romaji: 'na', emoji: '☀️', word: { kana: 'なつ', romaji: 'natsu', meaning: 'summer' } },
      { char: 'に', romaji: 'ni', emoji: '🥩', word: { kana: 'にく', romaji: 'niku', meaning: 'meat' } },
      { char: 'ぬ', romaji: 'nu', emoji: '🧵', word: { kana: 'ぬの', romaji: 'nuno', meaning: 'cloth' } },
      { char: 'ね', romaji: 'ne', emoji: '🐱', word: { kana: 'ねこ', romaji: 'neko', meaning: 'cat' } },
      { char: 'の', romaji: 'no', emoji: '🍙', word: { kana: 'のり', romaji: 'nori', meaning: 'seaweed' } },
    ],
  },
  {
    id: 'ha',
    label: 'は row',
    characters: [
      { char: 'は', romaji: 'ha', emoji: '🌸', word: { kana: 'はな', romaji: 'hana', meaning: 'flower' } },
      { char: 'ひ', romaji: 'hi', emoji: '🧍', word: { kana: 'ひと', romaji: 'hito', meaning: 'person' } },
      { char: 'ふ', romaji: 'fu', emoji: '⛵', word: { kana: 'ふね', romaji: 'fune', meaning: 'boat' } },
      { char: 'へ', romaji: 'he', emoji: '🐍', word: { kana: 'へび', romaji: 'hebi', meaning: 'snake' } },
      { char: 'ほ', romaji: 'ho', emoji: '⭐', word: { kana: 'ほし', romaji: 'hoshi', meaning: 'star' } },
    ],
  },
  {
    id: 'ma',
    label: 'ま row',
    characters: [
      { char: 'ま', romaji: 'ma', emoji: '🪟', word: { kana: 'まど', romaji: 'mado', meaning: 'window' } },
      { char: 'み', romaji: 'mi', emoji: '💧', word: { kana: 'みず', romaji: 'mizu', meaning: 'water' } },
      { char: 'む', romaji: 'mu', emoji: '🐛', word: { kana: 'むし', romaji: 'mushi', meaning: 'insect' } },
      { char: 'め', romaji: 'me', emoji: '👓', word: { kana: 'めがね', romaji: 'megane', meaning: 'glasses' } },
      { char: 'も', romaji: 'mo', emoji: '🍑', word: { kana: 'もも', romaji: 'momo', meaning: 'peach' } },
    ],
  },
  {
    id: 'ya',
    label: 'や row',
    characters: [
      { char: 'や', romaji: 'ya', emoji: '⛰️', word: { kana: 'やま', romaji: 'yama', meaning: 'mountain' } },
      { char: 'ゆ', romaji: 'yu', emoji: '❄️', word: { kana: 'ゆき', romaji: 'yuki', meaning: 'snow' } },
      { char: 'よ', romaji: 'yo', emoji: '🌃', word: { kana: 'よる', romaji: 'yoru', meaning: 'night' } },
    ],
  },
  {
    id: 'ra',
    label: 'ら row',
    characters: [
      { char: 'ら', romaji: 'ra', emoji: '🐫', word: { kana: 'らくだ', romaji: 'rakuda', meaning: 'camel' } },
      { char: 'り', romaji: 'ri', emoji: '🍎', word: { kana: 'りんご', romaji: 'ringo', meaning: 'apple' } },
      { char: 'る', romaji: 'ru', emoji: '🚪', word: { kana: 'るす', romaji: 'rusu', meaning: 'being out' } },
      { char: 'れ', romaji: 're', emoji: '0️⃣', word: { kana: 'れい', romaji: 'rei', meaning: 'zero' } },
      { char: 'ろ', romaji: 'ro', emoji: '🐴', word: { kana: 'ろば', romaji: 'roba', meaning: 'donkey' } },
    ],
  },
  {
    id: 'wa',
    label: 'わ row',
    characters: [
      { char: 'わ', romaji: 'wa', emoji: '🙋', word: { kana: 'わたし', romaji: 'watashi', meaning: 'I / me' } },
      { char: 'を', romaji: 'wo', emoji: '🍞', word: { kana: 'パンを', romaji: 'pan o', meaning: 'bread (object marker)' } },
    ],
  },
  {
    id: 'n',
    label: 'ん',
    characters: [
      { char: 'ん', romaji: 'n', emoji: '📕', word: { kana: 'ほん', romaji: 'hon', meaning: 'book' } },
    ],
  },
]

export const hiraganaVoiced = [
  {
    id: 'ga',
    label: 'が row',
    characters: [
      { char: 'が', romaji: 'ga', emoji: '🏫', word: { kana: 'がっこう', romaji: 'gakkou', meaning: 'school' } },
      { char: 'ぎ', romaji: 'gi', emoji: '🏦', word: { kana: 'ぎんこう', romaji: 'ginkou', meaning: 'bank' } },
      { char: 'ぐ', romaji: 'gu', emoji: '🪑', word: { kana: 'かぐ', romaji: 'kagu', meaning: 'furniture' } },
      { char: 'げ', romaji: 'ge', emoji: '🩴', word: { kana: 'げた', romaji: 'geta', meaning: 'wooden sandals' } },
      { char: 'ご', romaji: 'go', emoji: '🍚', word: { kana: 'ごはん', romaji: 'gohan', meaning: 'rice / meal' } },
    ],
  },
  {
    id: 'za',
    label: 'ざ row',
    characters: [
      { char: 'ざ', romaji: 'za', emoji: '🧺', word: { kana: 'ざる', romaji: 'zaru', meaning: 'bamboo colander' } },
      { char: 'じ', romaji: 'ji', emoji: '⏰', word: { kana: 'じかん', romaji: 'jikan', meaning: 'time' } },
      { char: 'ず', romaji: 'zu', emoji: '🔢', word: { kana: 'かず', romaji: 'kazu', meaning: 'number' } },
      { char: 'ぜ', romaji: 'ze', emoji: '🌬️', word: { kana: 'かぜ', romaji: 'kaze', meaning: 'wind / cold' } },
      { char: 'ぞ', romaji: 'zo', emoji: '🐘', word: { kana: 'ぞう', romaji: 'zou', meaning: 'elephant' } },
    ],
  },
  {
    id: 'da',
    label: 'だ row',
    characters: [
      { char: 'だ', romaji: 'da', emoji: '🎓', word: { kana: 'だいがく', romaji: 'daigaku', meaning: 'university' } },
      { char: 'ぢ', romaji: 'ji', emoji: '🩸', word: { kana: 'はなぢ', romaji: 'hanaji', meaning: 'nosebleed' } },
      { char: 'づ', romaji: 'zu', emoji: '🔄', word: { kana: 'つづく', romaji: 'tsuzuku', meaning: 'to continue' } },
      { char: 'で', romaji: 'de', emoji: '☎️', word: { kana: 'でんわ', romaji: 'denwa', meaning: 'telephone' } },
      { char: 'ど', romaji: 'do', emoji: '🐾', word: { kana: 'どうぶつ', romaji: 'doubutsu', meaning: 'animal' } },
    ],
  },
  {
    id: 'ba',
    label: 'ば row',
    characters: [
      { char: 'ば', romaji: 'ba', emoji: '📍', word: { kana: 'ばしょ', romaji: 'basho', meaning: 'place' } },
      { char: 'び', romaji: 'bi', emoji: '🏥', word: { kana: 'びょういん', romaji: 'byouin', meaning: 'hospital' } },
      { char: 'ぶ', romaji: 'bu', emoji: '🐷', word: { kana: 'ぶた', romaji: 'buta', meaning: 'pig' } },
      { char: 'べ', romaji: 'be', emoji: '📚', word: { kana: 'べんきょう', romaji: 'benkyou', meaning: 'study' } },
      { char: 'ぼ', romaji: 'bo', emoji: '🎩', word: { kana: 'ぼうし', romaji: 'boushi', meaning: 'hat' } },
    ],
  },
]

export const hiraganaHandakuon = [
  {
    id: 'pa',
    label: 'ぱ row',
    characters: [
      { char: 'ぱ', romaji: 'pa', emoji: '🍞', word: { kana: 'ぱん', romaji: 'pan', meaning: 'bread' } },
      { char: 'ぴ', romaji: 'pi', emoji: '✏️', word: { kana: 'えんぴつ', romaji: 'enpitsu', meaning: 'pencil' } },
      { char: 'ぷ', romaji: 'pu', emoji: '🍤', word: { kana: 'てんぷら', romaji: 'tenpura', meaning: 'tempura' } },
      { char: 'ぺ', romaji: 'pe', emoji: '🗣️', word: { kana: 'ぺらぺら', romaji: 'perapera', meaning: 'fluently' } },
      { char: 'ぽ', romaji: 'po', emoji: '🌼', word: { kana: 'たんぽぽ', romaji: 'tanpopo', meaning: 'dandelion' } },
    ],
  },
]

export const hiraganaYoon = [
  {
    id: 'kya',
    label: 'きゃ group',
    characters: [
      { char: 'きゃ', romaji: 'kya', emoji: '🙋', word: { kana: 'きゃく', romaji: 'kyaku', meaning: 'customer / guest' } },
      { char: 'きゅ', romaji: 'kyu', emoji: '🥒', word: { kana: 'きゅうり', romaji: 'kyuuri', meaning: 'cucumber' } },
      { char: 'きょ', romaji: 'kyo', emoji: '📅', word: { kana: 'きょう', romaji: 'kyou', meaning: 'today' } },
    ],
  },
  {
    id: 'sha',
    label: 'しゃ group',
    characters: [
      { char: 'しゃ', romaji: 'sha', emoji: '📷', word: { kana: 'しゃしん', romaji: 'shashin', meaning: 'photo' } },
      { char: 'しゅ', romaji: 'shu', emoji: '📝', word: { kana: 'しゅくだい', romaji: 'shukudai', meaning: 'homework' } },
      { char: 'しょ', romaji: 'sho', emoji: '🍽️', word: { kana: 'しょくじ', romaji: 'shokuji', meaning: 'meal' } },
    ],
  },
  {
    id: 'cha',
    label: 'ちゃ group',
    characters: [
      { char: 'ちゃ', romaji: 'cha', emoji: '🍵', word: { kana: 'おちゃ', romaji: 'ocha', meaning: 'tea' } },
      { char: 'ちゅ', romaji: 'chu', emoji: '💉', word: { kana: 'ちゅうしゃ', romaji: 'chuusha', meaning: 'injection / parking' } },
      { char: 'ちょ', romaji: 'cho', emoji: '🦋', word: { kana: 'ちょう', romaji: 'chou', meaning: 'butterfly' } },
    ],
  },
  {
    id: 'nya',
    label: 'にゃ group',
    characters: [
      { char: 'にゃ', romaji: 'nya', emoji: '🐱', word: { kana: 'にゃんこ', romaji: 'nyanko', meaning: 'kitty (cute)' } },
      { char: 'にゅ', romaji: 'nyu', emoji: '👶', word: { kana: 'にゅうじ', romaji: 'nyuuji', meaning: 'infant' } },
      { char: 'にょ', romaji: 'nyo', emoji: '🌱', word: { kana: 'にょきにょき', romaji: 'nyokinyoki', meaning: 'sprouting up' } },
    ],
  },
  {
    id: 'hya',
    label: 'ひゃ group',
    characters: [
      { char: 'ひゃ', romaji: 'hya', emoji: '💯', word: { kana: 'ひゃく', romaji: 'hyaku', meaning: 'hundred' } },
      { char: 'ひゅ', romaji: 'hyu', emoji: '💨', word: { kana: 'ひゅう', romaji: 'hyuu', meaning: 'whoosh (wind)' } },
      { char: 'ひょ', romaji: 'hyo', emoji: '🐆', word: { kana: 'ひょう', romaji: 'hyou', meaning: 'leopard' } },
    ],
  },
  {
    id: 'mya',
    label: 'みゃ group',
    characters: [
      { char: 'みゃ', romaji: 'mya', emoji: '💓', word: { kana: 'みゃく', romaji: 'myaku', meaning: 'pulse' } },
      { char: 'みゅ', romaji: 'myu', emoji: '🎵', word: { kana: 'みゅーじっく', romaji: 'myuujikku', meaning: 'music (loanword)' } },
      { char: 'みょ', romaji: 'myo', emoji: '📛', word: { kana: 'みょうじ', romaji: 'myouji', meaning: 'surname' } },
    ],
  },
  {
    id: 'rya',
    label: 'りゃ group',
    characters: [
      { char: 'りゃ', romaji: 'rya', emoji: '🔤', word: { kana: 'りゃくご', romaji: 'ryakugo', meaning: 'abbreviation' } },
      { char: 'りゅ', romaji: 'ryu', emoji: '🐉', word: { kana: 'りゅう', romaji: 'ryuu', meaning: 'dragon' } },
      { char: 'りょ', romaji: 'ryo', emoji: '✈️', word: { kana: 'りょこう', romaji: 'ryokou', meaning: 'travel' } },
    ],
  },
  {
    id: 'gya',
    label: 'ぎゃ group',
    characters: [
      { char: 'ぎゃ', romaji: 'gya', emoji: '🔄', word: { kana: 'ぎゃく', romaji: 'gyaku', meaning: 'opposite / reverse' } },
      { char: 'ぎゅ', romaji: 'gyu', emoji: '🥛', word: { kana: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: 'milk' } },
      { char: 'ぎょ', romaji: 'gyo', emoji: '🥟', word: { kana: 'ぎょうざ', romaji: 'gyouza', meaning: 'dumpling' } },
    ],
  },
  {
    id: 'ja',
    label: 'じゃ group',
    characters: [
      { char: 'じゃ', romaji: 'ja', emoji: '🚧', word: { kana: 'じゃま', romaji: 'jama', meaning: 'hindrance' } },
      { char: 'じゅ', romaji: 'ju', emoji: '📖', word: { kana: 'じゅぎょう', romaji: 'jugyou', meaning: 'class / lesson' } },
      { char: 'じょ', romaji: 'jo', emoji: '👍', word: { kana: 'じょうず', romaji: 'jouzu', meaning: 'skilled' } },
    ],
  },
  {
    id: 'bya',
    label: 'びゃ group',
    characters: [
      { char: 'びゃ', romaji: 'bya', emoji: '🌳', word: { kana: 'びゃくだん', romaji: 'byakudan', meaning: 'sandalwood' } },
      { char: 'びゅ', romaji: 'byu', emoji: '💨', word: { kana: 'びゅーびゅー', romaji: 'byuubyuu', meaning: 'whooshing (wind)' } },
      { char: 'びょ', romaji: 'byo', emoji: '🤒', word: { kana: 'びょうき', romaji: 'byouki', meaning: 'illness' } },
    ],
  },
  {
    id: 'pya',
    label: 'ぴゃ group',
    characters: [
      { char: 'ぴゃ', romaji: 'pya', emoji: '⚡', word: { kana: 'ぴゃっと', romaji: 'pyatto', meaning: 'in a flash' } },
      { char: 'ぴゅ', romaji: 'pyu', emoji: '💨', word: { kana: 'ぴゅう', romaji: 'pyuu', meaning: 'whistling (wind)' } },
      { char: 'ぴょ', romaji: 'pyo', emoji: '🐰', word: { kana: 'ぴょん', romaji: 'pyon', meaning: 'hop' } },
    ],
  },
]

export const hiraganaAllGroups = [
  ...hiraganaMainRows,
  ...hiraganaVoiced,
  ...hiraganaHandakuon,
  ...hiraganaYoon,
]

export const hiraganaAllCharacters = hiraganaAllGroups.flatMap((group) => group.characters)
