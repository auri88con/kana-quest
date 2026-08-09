// Verb data set, organized into 3 difficulty tiers (matches the kanji.js
// tier pattern — a Tier 4 can be added later the same way).
//
// Entry shape: { char, kana, hasKanji, romaji, meaning, emoji, group, word, overrides? }
// - `char` is the hero/prompt form (kanji+okurigana, or == `kana` when the
//   verb is conventionally written in kana only, e.g. もらう/あげる/できる).
// - `kana` is always the full reading (furigana source).
// - `group` is one of 'ichidan' | 'godan' | 'suru' | 'kuru', consumed by
//   utils/conjugate.js. Real conjugation exceptions (行く's te/past, ある's
//   suppletive negative) are hardcoded via `overrides`, never guessed.
// - `word` is a real, verifiable example phrase using the verb, matching the
//   kanji.js data convention.

// ---------------------------------------------------------------------------
// Tier 1 — Lesson verbs. This EXACT 40-verb list, in THIS EXACT ORDER, comes
// from the user's own lesson sheet — do not reorder, regroup, or theme-sort.
// If more lesson verbs are given later, append them to the end, in order.
// ---------------------------------------------------------------------------
export const verbTier1 = [
  { char: '食べる', kana: 'たべる', hasKanji: true, romaji: 'taberu', meaning: 'to eat', emoji: '🍽️', group: 'ichidan', word: { kana: '朝ご飯を食べる', romaji: 'asagohan wo taberu', meaning: 'to eat breakfast' } },
  { char: '飲む', kana: 'のむ', hasKanji: true, romaji: 'nomu', meaning: 'to drink', emoji: '🥤', group: 'godan', word: { kana: '水を飲む', romaji: 'mizu wo nomu', meaning: 'to drink water' } },
  { char: '寝る', kana: 'ねる', hasKanji: true, romaji: 'neru', meaning: 'to sleep', emoji: '😴', group: 'ichidan', word: { kana: '早く寝る', romaji: 'hayaku neru', meaning: 'to sleep early' } },
  { char: '起きる', kana: 'おきる', hasKanji: true, romaji: 'okiru', meaning: 'to wake up', emoji: '⏰', group: 'ichidan', word: { kana: '朝早く起きる', romaji: 'asa hayaku okiru', meaning: 'to wake up early in the morning' } },
  { char: '行く', kana: 'いく', hasKanji: true, romaji: 'iku', meaning: 'to go', emoji: '🚶', group: 'godan', word: { kana: '学校に行く', romaji: 'gakkou ni iku', meaning: 'to go to school' }, overrides: { plain: { te: { kanji: '行って', kana: 'いって', romaji: 'itte' }, past: { kanji: '行った', kana: 'いった', romaji: 'itta' } } } },
  { char: '来る', kana: 'くる', hasKanji: true, romaji: 'kuru', meaning: 'to come', emoji: '👋', group: 'kuru', word: { kana: '友達が来る', romaji: 'tomodachi ga kuru', meaning: 'a friend comes' } },
  { char: '帰る', kana: 'かえる', hasKanji: true, romaji: 'kaeru', meaning: 'to return / go home', emoji: '🏠', group: 'godan', word: { kana: '家に帰る', romaji: 'ie ni kaeru', meaning: 'to return home' } },
  { char: '見る', kana: 'みる', hasKanji: true, romaji: 'miru', meaning: 'to see / watch', emoji: '👀', group: 'ichidan', word: { kana: 'テレビを見る', romaji: 'terebi wo miru', meaning: 'to watch TV' } },
  { char: '聞く', kana: 'きく', hasKanji: true, romaji: 'kiku', meaning: 'to listen / ask', emoji: '👂', group: 'godan', word: { kana: '音楽を聞く', romaji: 'ongaku wo kiku', meaning: 'to listen to music' } },
  { char: '話す', kana: 'はなす', hasKanji: true, romaji: 'hanasu', meaning: 'to speak', emoji: '🗣️', group: 'godan', word: { kana: '日本語を話す', romaji: 'nihongo wo hanasu', meaning: 'to speak Japanese' } },
  { char: '読む', kana: 'よむ', hasKanji: true, romaji: 'yomu', meaning: 'to read', emoji: '📖', group: 'godan', word: { kana: '本を読む', romaji: 'hon wo yomu', meaning: 'to read a book' } },
  { char: '書く', kana: 'かく', hasKanji: true, romaji: 'kaku', meaning: 'to write', emoji: '✏️', group: 'godan', word: { kana: '手紙を書く', romaji: 'tegami wo kaku', meaning: 'to write a letter' } },
  { char: '買う', kana: 'かう', hasKanji: true, romaji: 'kau', meaning: 'to buy', emoji: '🛒', group: 'godan', word: { kana: '服を買う', romaji: 'fuku wo kau', meaning: 'to buy clothes' } },
  { char: '売る', kana: 'うる', hasKanji: true, romaji: 'uru', meaning: 'to sell', emoji: '💰', group: 'godan', word: { kana: '車を売る', romaji: 'kuruma wo uru', meaning: 'to sell a car' } },
  { char: '作る', kana: 'つくる', hasKanji: true, romaji: 'tsukuru', meaning: 'to make', emoji: '🔨', group: 'godan', word: { kana: '料理を作る', romaji: 'ryouri wo tsukuru', meaning: 'to make food' } },
  { char: '働く', kana: 'はたらく', hasKanji: true, romaji: 'hataraku', meaning: 'to work', emoji: '💼', group: 'godan', word: { kana: '会社で働く', romaji: 'kaisha de hataraku', meaning: 'to work at a company' } },
  { char: '勉強する', kana: 'べんきょうする', hasKanji: true, romaji: 'benkyou suru', meaning: 'to study', emoji: '📚', group: 'suru', word: { kana: '日本語を勉強する', romaji: 'nihongo wo benkyou suru', meaning: 'to study Japanese' } },
  { char: '遊ぶ', kana: 'あそぶ', hasKanji: true, romaji: 'asobu', meaning: 'to play / hang out', emoji: '🎈', group: 'godan', word: { kana: '公園で遊ぶ', romaji: 'kouen de asobu', meaning: 'to play at the park' } },
  { char: '走る', kana: 'はしる', hasKanji: true, romaji: 'hashiru', meaning: 'to run', emoji: '🏃', group: 'godan', word: { kana: '公園を走る', romaji: 'kouen wo hashiru', meaning: 'to run in the park' } },
  { char: '歩く', kana: 'あるく', hasKanji: true, romaji: 'aruku', meaning: 'to walk', emoji: '🚶‍♀️', group: 'godan', word: { kana: '駅まで歩く', romaji: 'eki made aruku', meaning: 'to walk to the station' } },
  { char: '乗る', kana: 'のる', hasKanji: true, romaji: 'noru', meaning: 'to ride / get on', emoji: '🚃', group: 'godan', word: { kana: 'バスに乗る', romaji: 'basu ni noru', meaning: 'to get on the bus' } },
  { char: '降りる', kana: 'おりる', hasKanji: true, romaji: 'oriru', meaning: 'to get off', emoji: '🚉', group: 'ichidan', word: { kana: '電車を降りる', romaji: 'densha wo oriru', meaning: 'to get off the train' } },
  { char: '会う', kana: 'あう', hasKanji: true, romaji: 'au', meaning: 'to meet', emoji: '🤝', group: 'godan', word: { kana: '友達に会う', romaji: 'tomodachi ni au', meaning: 'to meet a friend' } },
  { char: '待つ', kana: 'まつ', hasKanji: true, romaji: 'matsu', meaning: 'to wait', emoji: '⏳', group: 'godan', word: { kana: 'バスを待つ', romaji: 'basu wo matsu', meaning: 'to wait for the bus' } },
  { char: '送る', kana: 'おくる', hasKanji: true, romaji: 'okuru', meaning: 'to see off / send', emoji: '📮', group: 'godan', word: { kana: 'メールを送る', romaji: 'meeru wo okuru', meaning: 'to send an email' } },
  { char: 'もらう', kana: 'もらう', hasKanji: false, romaji: 'morau', meaning: 'to receive', emoji: '🎁', group: 'godan', word: { kana: 'プレゼントをもらう', romaji: 'purezento wo morau', meaning: 'to receive a present' } },
  { char: 'あげる', kana: 'あげる', hasKanji: false, romaji: 'ageru', meaning: 'to give', emoji: '🎀', group: 'ichidan', word: { kana: '花をあげる', romaji: 'hana wo ageru', meaning: 'to give flowers' } },
  { char: '借りる', kana: 'かりる', hasKanji: true, romaji: 'kariru', meaning: 'to borrow', emoji: '📕', group: 'ichidan', word: { kana: '本を借りる', romaji: 'hon wo kariru', meaning: 'to borrow a book' } },
  { char: '貸す', kana: 'かす', hasKanji: true, romaji: 'kasu', meaning: 'to lend', emoji: '🤲', group: 'godan', word: { kana: 'お金を貸す', romaji: 'okane wo kasu', meaning: 'to lend money' } },
  { char: '使う', kana: 'つかう', hasKanji: true, romaji: 'tsukau', meaning: 'to use', emoji: '🔧', group: 'godan', word: { kana: 'パソコンを使う', romaji: 'pasokon wo tsukau', meaning: 'to use a computer' } },
  { char: '電話する', kana: 'でんわする', hasKanji: true, romaji: 'denwa suru', meaning: 'to call (on the phone)', emoji: '☎️', group: 'suru', word: { kana: '友達に電話する', romaji: 'tomodachi ni denwa suru', meaning: 'to call a friend' } },
  { char: '撮る', kana: 'とる', hasKanji: true, romaji: 'toru', meaning: 'to take a photo', emoji: '📷', group: 'godan', word: { kana: '写真を撮る', romaji: 'shashin wo toru', meaning: 'to take a photo' } },
  { char: '洗う', kana: 'あらう', hasKanji: true, romaji: 'arau', meaning: 'to wash', emoji: '🧼', group: 'godan', word: { kana: '手を洗う', romaji: 'te wo arau', meaning: "to wash one's hands" } },
  { char: '着る', kana: 'きる', hasKanji: true, romaji: 'kiru', meaning: 'to wear', emoji: '👕', group: 'ichidan', word: { kana: 'コートを着る', romaji: 'kooto wo kiru', meaning: 'to wear a coat' } },
  { char: '脱ぐ', kana: 'ぬぐ', hasKanji: true, romaji: 'nugu', meaning: 'to take off (shoes/clothes)', emoji: '🧦', group: 'godan', word: { kana: '靴を脱ぐ', romaji: 'kutsu wo nugu', meaning: "to take off one's shoes" } },
  { char: '入れる', kana: 'いれる', hasKanji: true, romaji: 'ireru', meaning: 'to put in', emoji: '📥', group: 'ichidan', word: { kana: '荷物を入れる', romaji: 'nimotsu wo ireru', meaning: 'to put in luggage' } },
  { char: '出す', kana: 'だす', hasKanji: true, romaji: 'dasu', meaning: 'to take out / put out', emoji: '📤', group: 'godan', word: { kana: 'ゴミを出す', romaji: 'gomi wo dasu', meaning: 'to take out the trash' } },
  { char: '座る', kana: 'すわる', hasKanji: true, romaji: 'suwaru', meaning: 'to sit', emoji: '🪑', group: 'godan', word: { kana: '椅子に座る', romaji: 'isu ni suwaru', meaning: 'to sit on a chair' } },
  { char: '立つ', kana: 'たつ', hasKanji: true, romaji: 'tatsu', meaning: 'to stand', emoji: '🧍', group: 'godan', word: { kana: '前に立つ', romaji: 'mae ni tatsu', meaning: 'to stand in front' } },
  { char: '休む', kana: 'やすむ', hasKanji: true, romaji: 'yasumu', meaning: 'to rest / take a break', emoji: '🛌', group: 'godan', word: { kana: '学校を休む', romaji: 'gakkou wo yasumu', meaning: 'to take a day off school' } },
]

// ---------------------------------------------------------------------------
// Tier 2 — Everyday essentials: ~60 further high-frequency verbs not already
// in Tier 1, loosely grouped by theme (same convention as kanji.js).
// ---------------------------------------------------------------------------
export const verbTier2 = [
  // Communication & thought
  { char: '知る', kana: 'しる', hasKanji: true, romaji: 'shiru', meaning: 'to know', emoji: '🧠', group: 'godan', word: { kana: '答えを知る', romaji: 'kotae wo shiru', meaning: 'to know the answer' } },
  { char: '思う', kana: 'おもう', hasKanji: true, romaji: 'omou', meaning: 'to think', emoji: '💭', group: 'godan', word: { kana: 'そう思う', romaji: 'sou omou', meaning: 'to think so' } },
  { char: '言う', kana: 'いう', hasKanji: true, romaji: 'iu', meaning: 'to say', emoji: '💬', group: 'godan', word: { kana: '名前を言う', romaji: 'namae wo iu', meaning: "to say one's name" } },
  { char: '分かる', kana: 'わかる', hasKanji: true, romaji: 'wakaru', meaning: 'to understand', emoji: '✅', group: 'godan', word: { kana: '意味が分かる', romaji: 'imi ga wakaru', meaning: 'to understand the meaning' } },
  { char: '持つ', kana: 'もつ', hasKanji: true, romaji: 'motsu', meaning: 'to hold / have', emoji: '🤲', group: 'godan', word: { kana: '傘を持つ', romaji: 'kasa wo motsu', meaning: 'to hold an umbrella' } },
  { char: '取る', kana: 'とる', hasKanji: true, romaji: 'toru', meaning: 'to take', emoji: '✋', group: 'godan', word: { kana: 'メモを取る', romaji: 'memo wo toru', meaning: 'to take notes' } },

  // Existence & change of state
  { char: '出る', kana: 'でる', hasKanji: true, romaji: 'deru', meaning: 'to exit / leave', emoji: '🚪', group: 'ichidan', word: { kana: '家を出る', romaji: 'ie wo deru', meaning: 'to leave home' } },
  { char: '入る', kana: 'はいる', hasKanji: true, romaji: 'hairu', meaning: 'to enter', emoji: '🚪', group: 'godan', word: { kana: '部屋に入る', romaji: 'heya ni hairu', meaning: 'to enter a room' } },
  { char: '始める', kana: 'はじめる', hasKanji: true, romaji: 'hajimeru', meaning: 'to start (something)', emoji: '🏁', group: 'ichidan', word: { kana: '仕事を始める', romaji: 'shigoto wo hajimeru', meaning: 'to start work' } },
  { char: '終わる', kana: 'おわる', hasKanji: true, romaji: 'owaru', meaning: 'to end / finish', emoji: '🔚', group: 'godan', word: { kana: '授業が終わる', romaji: 'jugyou ga owaru', meaning: 'class ends' } },
  { char: 'できる', kana: 'できる', hasKanji: false, romaji: 'dekiru', meaning: 'to be able to / can', emoji: '💪', group: 'ichidan', word: { kana: '日本語ができる', romaji: 'nihongo ga dekiru', meaning: 'to be able to speak Japanese' } },
  { char: 'なる', kana: 'なる', hasKanji: false, romaji: 'naru', meaning: 'to become', emoji: '🌱', group: 'godan', word: { kana: '先生になる', romaji: 'sensei ni naru', meaning: 'to become a teacher' } },
  { char: 'ある', kana: 'ある', hasKanji: false, romaji: 'aru', meaning: 'to exist (inanimate) / to have', emoji: '📦', group: 'godan', word: { kana: '机の上に本がある', romaji: 'tsukue no ue ni hon ga aru', meaning: 'there is a book on the desk' }, overrides: { plain: { presentNegative: { kanji: 'ない', kana: 'ない', romaji: 'nai' } } } },
  { char: 'いる', kana: 'いる', hasKanji: false, romaji: 'iru', meaning: 'to exist (animate)', emoji: '🐈', group: 'ichidan', word: { kana: '部屋に猫がいる', romaji: 'heya ni neko ga iru', meaning: 'there is a cat in the room' } },
  { char: '開く', kana: 'あく', hasKanji: true, romaji: 'aku', meaning: 'to open (itself)', emoji: '🚪', group: 'godan', word: { kana: 'ドアが開く', romaji: 'doa ga aku', meaning: 'the door opens' } },
  { char: '閉まる', kana: 'しまる', hasKanji: true, romaji: 'shimaru', meaning: 'to close (itself)', emoji: '🚪', group: 'godan', word: { kana: '店が閉まる', romaji: 'mise ga shimaru', meaning: 'the shop closes' } },
  { char: '開ける', kana: 'あける', hasKanji: true, romaji: 'akeru', meaning: 'to open (something)', emoji: '🚪', group: 'ichidan', word: { kana: '窓を開ける', romaji: 'mado wo akeru', meaning: 'to open the window' } },
  { char: '閉める', kana: 'しめる', hasKanji: true, romaji: 'shimeru', meaning: 'to close (something)', emoji: '🚪', group: 'ichidan', word: { kana: 'ドアを閉める', romaji: 'doa wo shimeru', meaning: 'to close the door' } },
  { char: '変わる', kana: 'かわる', hasKanji: true, romaji: 'kawaru', meaning: 'to change (itself)', emoji: '🔄', group: 'godan', word: { kana: '天気が変わる', romaji: 'tenki ga kawaru', meaning: 'the weather changes' } },
  { char: '変える', kana: 'かえる', hasKanji: true, romaji: 'kaeru', meaning: 'to change (something)', emoji: '🔄', group: 'ichidan', word: { kana: '予定を変える', romaji: 'yotei wo kaeru', meaning: 'to change plans' } },

  // Feelings & body
  { char: '泣く', kana: 'なく', hasKanji: true, romaji: 'naku', meaning: 'to cry', emoji: '😢', group: 'godan', word: { kana: '赤ちゃんが泣く', romaji: 'akachan ga naku', meaning: 'a baby cries' } },
  { char: '笑う', kana: 'わらう', hasKanji: true, romaji: 'warau', meaning: 'to laugh', emoji: '😄', group: 'godan', word: { kana: '大きな声で笑う', romaji: 'ookina koe de warau', meaning: 'to laugh loudly' } },
  { char: '怒る', kana: 'おこる', hasKanji: true, romaji: 'okoru', meaning: 'to get angry', emoji: '😠', group: 'godan', word: { kana: '先生が怒る', romaji: 'sensei ga okoru', meaning: 'the teacher gets angry' } },
  { char: '困る', kana: 'こまる', hasKanji: true, romaji: 'komaru', meaning: 'to be troubled', emoji: '😟', group: 'godan', word: { kana: 'お金がなくて困る', romaji: 'okane ga nakute komaru', meaning: 'to be troubled by a lack of money' } },
  { char: '疲れる', kana: 'つかれる', hasKanji: true, romaji: 'tsukareru', meaning: 'to get tired', emoji: '😩', group: 'ichidan', word: { kana: '仕事で疲れる', romaji: 'shigoto de tsukareru', meaning: 'to get tired from work' } },
  { char: '太る', kana: 'ふとる', hasKanji: true, romaji: 'futoru', meaning: 'to gain weight', emoji: '⚖️', group: 'godan', word: { kana: '少し太る', romaji: 'sukoshi futoru', meaning: 'to gain a little weight' } },
  { char: '痩せる', kana: 'やせる', hasKanji: true, romaji: 'yaseru', meaning: 'to lose weight', emoji: '⚖️', group: 'ichidan', word: { kana: '運動して痩せる', romaji: 'undou shite yaseru', meaning: 'to lose weight by exercising' } },

  // Everyday actions (する-compounds)
  { char: '練習する', kana: 'れんしゅうする', hasKanji: true, romaji: 'renshuu suru', meaning: 'to practice', emoji: '🎯', group: 'suru', word: { kana: 'ピアノを練習する', romaji: 'piano wo renshuu suru', meaning: 'to practice piano' } },
  { char: '洗濯する', kana: 'せんたくする', hasKanji: true, romaji: 'sentaku suru', meaning: 'to do laundry', emoji: '🧺', group: 'suru', word: { kana: '服を洗濯する', romaji: 'fuku wo sentaku suru', meaning: 'to do the laundry' } },
  { char: '掃除する', kana: 'そうじする', hasKanji: true, romaji: 'souji suru', meaning: 'to clean', emoji: '🧹', group: 'suru', word: { kana: '部屋を掃除する', romaji: 'heya wo souji suru', meaning: 'to clean a room' } },
  { char: '料理する', kana: 'りょうりする', hasKanji: true, romaji: 'ryouri suru', meaning: 'to cook', emoji: '🍳', group: 'suru', word: { kana: '晩ご飯を料理する', romaji: 'bangohan wo ryouri suru', meaning: 'to cook dinner' } },
  { char: '準備する', kana: 'じゅんびする', hasKanji: true, romaji: 'junbi suru', meaning: 'to prepare', emoji: '🎒', group: 'suru', word: { kana: '旅行を準備する', romaji: 'ryokou wo junbi suru', meaning: 'to prepare for a trip' } },
  { char: '予約する', kana: 'よやくする', hasKanji: true, romaji: 'yoyaku suru', meaning: 'to reserve', emoji: '📅', group: 'suru', word: { kana: 'レストランを予約する', romaji: 'resutoran wo yoyaku suru', meaning: 'to reserve a restaurant' } },
  { char: '質問する', kana: 'しつもんする', hasKanji: true, romaji: 'shitsumon suru', meaning: 'to ask a question', emoji: '❓', group: 'suru', word: { kana: '先生に質問する', romaji: 'sensei ni shitsumon suru', meaning: 'to ask the teacher a question' } },
  { char: '説明する', kana: 'せつめいする', hasKanji: true, romaji: 'setsumei suru', meaning: 'to explain', emoji: '📝', group: 'suru', word: { kana: '理由を説明する', romaji: 'riyuu wo setsumei suru', meaning: 'to explain the reason' } },
  { char: '心配する', kana: 'しんぱいする', hasKanji: true, romaji: 'shinpai suru', meaning: 'to worry', emoji: '😟', group: 'suru', word: { kana: '将来を心配する', romaji: 'shourai wo shinpai suru', meaning: 'to worry about the future' } },
  { char: '我慢する', kana: 'がまんする', hasKanji: true, romaji: 'gaman suru', meaning: 'to endure', emoji: '😤', group: 'suru', word: { kana: '痛みを我慢する', romaji: 'itami wo gaman suru', meaning: 'to endure the pain' } },
  { char: '結婚する', kana: 'けっこんする', hasKanji: true, romaji: 'kekkon suru', meaning: 'to marry', emoji: '💍', group: 'suru', word: { kana: '来年結婚する', romaji: 'rainen kekkon suru', meaning: 'to get married next year' } },
  { char: '卒業する', kana: 'そつぎょうする', hasKanji: true, romaji: 'sotsugyou suru', meaning: 'to graduate', emoji: '🎓', group: 'suru', word: { kana: '大学を卒業する', romaji: 'daigaku wo sotsugyou suru', meaning: 'to graduate from university' } },

  // Learning & memory
  { char: '教える', kana: 'おしえる', hasKanji: true, romaji: 'oshieru', meaning: 'to teach', emoji: '👩‍🏫', group: 'ichidan', word: { kana: '英語を教える', romaji: 'eigo wo oshieru', meaning: 'to teach English' } },
  { char: '覚える', kana: 'おぼえる', hasKanji: true, romaji: 'oboeru', meaning: 'to memorize', emoji: '🧠', group: 'ichidan', word: { kana: '単語を覚える', romaji: 'tango wo oboeru', meaning: 'to memorize vocabulary' } },
  { char: '忘れる', kana: 'わすれる', hasKanji: true, romaji: 'wasureru', meaning: 'to forget', emoji: '💨', group: 'ichidan', word: { kana: '名前を忘れる', romaji: 'namae wo wasureru', meaning: 'to forget a name' } },

  // Movement & travel
  { char: '通う', kana: 'かよう', hasKanji: true, romaji: 'kayou', meaning: 'to commute', emoji: '🚌', group: 'godan', word: { kana: '学校に通う', romaji: 'gakkou ni kayou', meaning: 'to commute to school' } },
  { char: '泊まる', kana: 'とまる', hasKanji: true, romaji: 'tomaru', meaning: 'to stay overnight', emoji: '🏨', group: 'godan', word: { kana: 'ホテルに泊まる', romaji: 'hoteru ni tomaru', meaning: 'to stay at a hotel' } },
  { char: '着く', kana: 'つく', hasKanji: true, romaji: 'tsuku', meaning: 'to arrive', emoji: '🛬', group: 'godan', word: { kana: '駅に着く', romaji: 'eki ni tsuku', meaning: 'to arrive at the station' } },
  { char: '渡る', kana: 'わたる', hasKanji: true, romaji: 'wataru', meaning: 'to cross', emoji: '🌉', group: 'godan', word: { kana: '橋を渡る', romaji: 'hashi wo wataru', meaning: 'to cross a bridge' } },
  { char: '登る', kana: 'のぼる', hasKanji: true, romaji: 'noboru', meaning: 'to climb', emoji: '⛰️', group: 'godan', word: { kana: '山に登る', romaji: 'yama ni noboru', meaning: 'to climb a mountain' } },
  { char: '触る', kana: 'さわる', hasKanji: true, romaji: 'sawaru', meaning: 'to touch', emoji: '✋', group: 'godan', word: { kana: '絵に触る', romaji: 'e ni sawaru', meaning: 'to touch a painting' } },
  { char: '急ぐ', kana: 'いそぐ', hasKanji: true, romaji: 'isogu', meaning: 'to hurry', emoji: '🏃‍♂️', group: 'godan', word: { kana: '駅まで急ぐ', romaji: 'eki made isogu', meaning: 'to hurry to the station' } },

  // Searching & deciding
  { char: '探す', kana: 'さがす', hasKanji: true, romaji: 'sagasu', meaning: 'to search for', emoji: '🔍', group: 'godan', word: { kana: '鍵を探す', romaji: 'kagi wo sagasu', meaning: 'to search for a key' } },
  { char: '見つける', kana: 'みつける', hasKanji: true, romaji: 'mitsukeru', meaning: 'to find', emoji: '🔎', group: 'ichidan', word: { kana: '財布を見つける', romaji: 'saifu wo mitsukeru', meaning: 'to find a wallet' } },
  { char: '続ける', kana: 'つづける', hasKanji: true, romaji: 'tsuzukeru', meaning: 'to continue (something)', emoji: '▶️', group: 'ichidan', word: { kana: '勉強を続ける', romaji: 'benkyou wo tsuzukeru', meaning: 'to continue studying' } },
  { char: '続く', kana: 'つづく', hasKanji: true, romaji: 'tsuzuku', meaning: 'to continue (itself)', emoji: '➡️', group: 'godan', word: { kana: '雨が続く', romaji: 'ame ga tsuzuku', meaning: 'the rain continues' } },
  { char: '決める', kana: 'きめる', hasKanji: true, romaji: 'kimeru', meaning: 'to decide', emoji: '✔️', group: 'ichidan', word: { kana: '予定を決める', romaji: 'yotei wo kimeru', meaning: 'to decide on a plan' } },
  { char: '決まる', kana: 'きまる', hasKanji: true, romaji: 'kimaru', meaning: 'to be decided', emoji: '📌', group: 'godan', word: { kana: '日にちが決まる', romaji: 'hinichi ga kimaru', meaning: 'the date is decided' } },
  { char: '治る', kana: 'なおる', hasKanji: true, romaji: 'naoru', meaning: 'to be cured / healed', emoji: '🩹', group: 'godan', word: { kana: '風邪が治る', romaji: 'kaze ga naoru', meaning: 'a cold gets cured' } },
  { char: '治す', kana: 'なおす', hasKanji: true, romaji: 'naosu', meaning: 'to cure / fix', emoji: '🩺', group: 'godan', word: { kana: '病気を治す', romaji: 'byouki wo naosu', meaning: 'to cure an illness' } },
]

// ---------------------------------------------------------------------------
// Tier 3 — Native everyday: ~100 further N4–N3 frequency verbs, loosely
// grouped by theme.
// ---------------------------------------------------------------------------
export const verbTier3 = [
  // Work & money
  { char: '勤める', kana: 'つとめる', hasKanji: true, romaji: 'tsutomeru', meaning: 'to be employed at', emoji: '🏢', group: 'ichidan', word: { kana: '銀行に勤める', romaji: 'ginkou ni tsutomeru', meaning: 'to work at a bank' } },
  { char: '稼ぐ', kana: 'かせぐ', hasKanji: true, romaji: 'kasegu', meaning: 'to earn', emoji: '💵', group: 'godan', word: { kana: 'お金を稼ぐ', romaji: 'okane wo kasegu', meaning: 'to earn money' } },
  { char: '儲かる', kana: 'もうかる', hasKanji: true, romaji: 'moukaru', meaning: 'to be profitable', emoji: '📈', group: 'godan', word: { kana: '商売が儲かる', romaji: 'shoubai ga moukaru', meaning: 'the business is profitable' } },
  { char: '払う', kana: 'はらう', hasKanji: true, romaji: 'harau', meaning: 'to pay', emoji: '💳', group: 'godan', word: { kana: 'お金を払う', romaji: 'okane wo harau', meaning: 'to pay money' } },
  { char: '支払う', kana: 'しはらう', hasKanji: true, romaji: 'shiharau', meaning: 'to pay (formal)', emoji: '💴', group: 'godan', word: { kana: '代金を支払う', romaji: 'daikin wo shiharau', meaning: 'to pay the fee' } },
  { char: '返す', kana: 'かえす', hasKanji: true, romaji: 'kaesu', meaning: 'to give back', emoji: '🔁', group: 'godan', word: { kana: '本を返す', romaji: 'hon wo kaesu', meaning: 'to return a book' } },
  { char: '売れる', kana: 'うれる', hasKanji: true, romaji: 'ureru', meaning: 'to sell (itself)', emoji: '🏷️', group: 'ichidan', word: { kana: 'よく売れる', romaji: 'yoku ureru', meaning: 'to sell well' } },
  { char: '頼む', kana: 'たのむ', hasKanji: true, romaji: 'tanomu', meaning: 'to request / order', emoji: '🙏', group: 'godan', word: { kana: 'コーヒーを頼む', romaji: 'koohii wo tanomu', meaning: 'to order a coffee' } },
  { char: '選ぶ', kana: 'えらぶ', hasKanji: true, romaji: 'erabu', meaning: 'to choose', emoji: '👉', group: 'godan', word: { kana: '色を選ぶ', romaji: 'iro wo erabu', meaning: 'to choose a color' } },
  { char: '比べる', kana: 'くらべる', hasKanji: true, romaji: 'kuraberu', meaning: 'to compare', emoji: '⚖️', group: 'ichidan', word: { kana: '値段を比べる', romaji: 'nedan wo kuraberu', meaning: 'to compare prices' } },
  { char: '調べる', kana: 'しらべる', hasKanji: true, romaji: 'shiraberu', meaning: 'to investigate / look up', emoji: '🔍', group: 'ichidan', word: { kana: '言葉を調べる', romaji: 'kotoba wo shiraberu', meaning: 'to look up a word' } },
  { char: '買い物する', kana: 'かいものする', hasKanji: true, romaji: 'kaimono suru', meaning: 'to shop', emoji: '🛍️', group: 'suru', word: { kana: 'デパートで買い物する', romaji: 'depaato de kaimono suru', meaning: 'to shop at a department store' } },

  // Social & communication
  { char: '招待する', kana: 'しょうたいする', hasKanji: true, romaji: 'shoutai suru', meaning: 'to invite', emoji: '💌', group: 'suru', word: { kana: '友達を招待する', romaji: 'tomodachi wo shoutai suru', meaning: 'to invite a friend' } },
  { char: '紹介する', kana: 'しょうかいする', hasKanji: true, romaji: 'shoukai suru', meaning: 'to introduce', emoji: '🙋', group: 'suru', word: { kana: '自己紹介する', romaji: 'jiko shoukai suru', meaning: 'to introduce oneself' } },
  { char: '訪問する', kana: 'ほうもんする', hasKanji: true, romaji: 'houmon suru', meaning: 'to visit', emoji: '🚪', group: 'suru', word: { kana: '会社を訪問する', romaji: 'kaisha wo houmon suru', meaning: 'to visit a company' } },
  { char: '参加する', kana: 'さんかする', hasKanji: true, romaji: 'sanka suru', meaning: 'to participate', emoji: '🙌', group: 'suru', word: { kana: 'パーティーに参加する', romaji: 'paatii ni sanka suru', meaning: 'to participate in a party' } },
  { char: '連絡する', kana: 'れんらくする', hasKanji: true, romaji: 'renraku suru', meaning: 'to contact', emoji: '📞', group: 'suru', word: { kana: '後で連絡する', romaji: 'ato de renraku suru', meaning: 'to contact later' } },
  { char: '呼ぶ', kana: 'よぶ', hasKanji: true, romaji: 'yobu', meaning: 'to call (someone)', emoji: '📢', group: 'godan', word: { kana: '名前を呼ぶ', romaji: 'namae wo yobu', meaning: "to call one's name" } },
  { char: '叫ぶ', kana: 'さけぶ', hasKanji: true, romaji: 'sakebu', meaning: 'to shout', emoji: '📣', group: 'godan', word: { kana: '大声で叫ぶ', romaji: 'oogoe de sakebu', meaning: 'to shout loudly' } },
  { char: '囁く', kana: 'ささやく', hasKanji: true, romaji: 'sasayaku', meaning: 'to whisper', emoji: '🤫', group: 'godan', word: { kana: '耳元で囁く', romaji: 'mimimoto de sasayaku', meaning: "to whisper in someone's ear" } },
  { char: '謝る', kana: 'あやまる', hasKanji: true, romaji: 'ayamaru', meaning: 'to apologize', emoji: '🙇', group: 'godan', word: { kana: '先生に謝る', romaji: 'sensei ni ayamaru', meaning: 'to apologize to the teacher' } },
  { char: '断る', kana: 'ことわる', hasKanji: true, romaji: 'kotowaru', meaning: 'to refuse / decline', emoji: '🙅', group: 'godan', word: { kana: '誘いを断る', romaji: 'sasoi wo kotowaru', meaning: 'to decline an invitation' } },
  { char: '許す', kana: 'ゆるす', hasKanji: true, romaji: 'yurusu', meaning: 'to forgive / allow', emoji: '🤗', group: 'godan', word: { kana: '失敗を許す', romaji: 'shippai wo yurusu', meaning: 'to forgive a mistake' } },
  { char: '頑張る', kana: 'がんばる', hasKanji: true, romaji: 'ganbaru', meaning: "to do one's best", emoji: '💪', group: 'godan', word: { kana: '試験を頑張る', romaji: 'shiken wo ganbaru', meaning: "to do one's best on an exam" } },
  { char: '手伝う', kana: 'てつだう', hasKanji: true, romaji: 'tetsudau', meaning: 'to help', emoji: '🤝', group: 'godan', word: { kana: '家事を手伝う', romaji: 'kaji wo tetsudau', meaning: 'to help with housework' } },
  { char: '助ける', kana: 'たすける', hasKanji: true, romaji: 'tasukeru', meaning: 'to save / help', emoji: '🆘', group: 'ichidan', word: { kana: '命を助ける', romaji: 'inochi wo tasukeru', meaning: 'to save a life' } },
  { char: '世話する', kana: 'せわする', hasKanji: true, romaji: 'sewa suru', meaning: 'to take care of', emoji: '🐶', group: 'suru', word: { kana: '猫の世話をする', romaji: 'neko no sewa wo suru', meaning: 'to take care of a cat' } },

  // Feelings & thoughts
  { char: '驚く', kana: 'おどろく', hasKanji: true, romaji: 'odoroku', meaning: 'to be surprised', emoji: '😲', group: 'godan', word: { kana: 'ニュースに驚く', romaji: 'nyuusu ni odoroku', meaning: 'to be surprised by the news' } },
  { char: '喜ぶ', kana: 'よろこぶ', hasKanji: true, romaji: 'yorokobu', meaning: 'to be happy / rejoice', emoji: '😊', group: 'godan', word: { kana: 'プレゼントに喜ぶ', romaji: 'purezento ni yorokobu', meaning: 'to be happy about a present' } },
  { char: '悲しむ', kana: 'かなしむ', hasKanji: true, romaji: 'kanashimu', meaning: 'to be sad', emoji: '😢', group: 'godan', word: { kana: '別れを悲しむ', romaji: 'wakare wo kanashimu', meaning: 'to be sad about a farewell' } },
  { char: '感じる', kana: 'かんじる', hasKanji: true, romaji: 'kanjiru', meaning: 'to feel', emoji: '💓', group: 'ichidan', word: { kana: '寒さを感じる', romaji: 'samusa wo kanjiru', meaning: 'to feel the cold' } },
  { char: '信じる', kana: 'しんじる', hasKanji: true, romaji: 'shinjiru', meaning: 'to believe', emoji: '🙏', group: 'ichidan', word: { kana: '話を信じる', romaji: 'hanashi wo shinjiru', meaning: 'to believe a story' } },
  { char: '疑う', kana: 'うたがう', hasKanji: true, romaji: 'utagau', meaning: 'to doubt', emoji: '🤔', group: 'godan', word: { kana: '話を疑う', romaji: 'hanashi wo utagau', meaning: 'to doubt a story' } },
  { char: '願う', kana: 'ねがう', hasKanji: true, romaji: 'negau', meaning: 'to wish / hope', emoji: '🌠', group: 'godan', word: { kana: '幸せを願う', romaji: 'shiawase wo negau', meaning: 'to wish for happiness' } },
  { char: '祈る', kana: 'いのる', hasKanji: true, romaji: 'inoru', meaning: 'to pray', emoji: '🙏', group: 'godan', word: { kana: '平和を祈る', romaji: 'heiwa wo inoru', meaning: 'to pray for peace' } },
  { char: '愛する', kana: 'あいする', hasKanji: true, romaji: 'aisuru', meaning: 'to love', emoji: '❤️', group: 'suru', word: { kana: '家族を愛する', romaji: 'kazoku wo aisuru', meaning: "to love one's family" } },
  { char: '憎む', kana: 'にくむ', hasKanji: true, romaji: 'nikumu', meaning: 'to hate', emoji: '💢', group: 'godan', word: { kana: '戦争を憎む', romaji: 'sensou wo nikumu', meaning: 'to hate war' } },
  { char: '恥じる', kana: 'はじる', hasKanji: true, romaji: 'hajiru', meaning: 'to be ashamed', emoji: '😳', group: 'ichidan', word: { kana: '失敗を恥じる', romaji: 'shippai wo hajiru', meaning: 'to be ashamed of a failure' } },
  { char: '慌てる', kana: 'あわてる', hasKanji: true, romaji: 'awateru', meaning: 'to panic / hurry', emoji: '😱', group: 'ichidan', word: { kana: '急に慌てる', romaji: 'kyuu ni awateru', meaning: 'to suddenly panic' } },
  { char: '諦める', kana: 'あきらめる', hasKanji: true, romaji: 'akirameru', meaning: 'to give up', emoji: '🏳️', group: 'ichidan', word: { kana: '夢を諦める', romaji: 'yume wo akirameru', meaning: 'to give up on a dream' } },
  { char: '挑戦する', kana: 'ちょうせんする', hasKanji: true, romaji: 'chousen suru', meaning: 'to challenge / attempt', emoji: '🎯', group: 'suru', word: { kana: '新しいことに挑戦する', romaji: 'atarashii koto ni chousen suru', meaning: 'to try something new' } },
  { char: '成功する', kana: 'せいこうする', hasKanji: true, romaji: 'seikou suru', meaning: 'to succeed', emoji: '🏅', group: 'suru', word: { kana: '試験に成功する', romaji: 'shiken ni seikou suru', meaning: 'to succeed on an exam' } },
  { char: '失敗する', kana: 'しっぱいする', hasKanji: true, romaji: 'shippai suru', meaning: 'to fail', emoji: '❌', group: 'suru', word: { kana: '実験に失敗する', romaji: 'jikken ni shippai suru', meaning: 'to fail an experiment' } },
  { char: '期待する', kana: 'きたいする', hasKanji: true, romaji: 'kitai suru', meaning: 'to expect', emoji: '🤞', group: 'suru', word: { kana: '良い結果を期待する', romaji: 'yoi kekka wo kitai suru', meaning: 'to expect a good result' } },
  { char: '反省する', kana: 'はんせいする', hasKanji: true, romaji: 'hansei suru', meaning: 'to reflect / reconsider', emoji: '🪞', group: 'suru', word: { kana: '失敗を反省する', romaji: 'shippai wo hansei suru', meaning: 'to reflect on a mistake' } },

  // Weather & nature
  { char: '晴れる', kana: 'はれる', hasKanji: true, romaji: 'hareru', meaning: 'to clear up (weather)', emoji: '☀️', group: 'ichidan', word: { kana: '天気が晴れる', romaji: 'tenki ga hareru', meaning: 'the weather clears up' } },
  { char: '曇る', kana: 'くもる', hasKanji: true, romaji: 'kumoru', meaning: 'to become cloudy', emoji: '☁️', group: 'godan', word: { kana: '空が曇る', romaji: 'sora ga kumoru', meaning: 'the sky becomes cloudy' } },
  { char: '降る', kana: 'ふる', hasKanji: true, romaji: 'furu', meaning: 'to fall (rain/snow)', emoji: '🌧️', group: 'godan', word: { kana: '雨が降る', romaji: 'ame ga furu', meaning: 'rain falls' } },
  { char: '吹く', kana: 'ふく', hasKanji: true, romaji: 'fuku', meaning: 'to blow (wind)', emoji: '💨', group: 'godan', word: { kana: '風が吹く', romaji: 'kaze ga fuku', meaning: 'the wind blows' } },
  { char: '光る', kana: 'ひかる', hasKanji: true, romaji: 'hikaru', meaning: 'to shine', emoji: '✨', group: 'godan', word: { kana: '星が光る', romaji: 'hoshi ga hikaru', meaning: 'a star shines' } },
  { char: '咲く', kana: 'さく', hasKanji: true, romaji: 'saku', meaning: 'to bloom', emoji: '🌸', group: 'godan', word: { kana: '桜が咲く', romaji: 'sakura ga saku', meaning: 'cherry blossoms bloom' } },
  { char: '枯れる', kana: 'かれる', hasKanji: true, romaji: 'kareru', meaning: 'to wither', emoji: '🍂', group: 'ichidan', word: { kana: '花が枯れる', romaji: 'hana ga kareru', meaning: 'a flower withers' } },
  { char: '育つ', kana: 'そだつ', hasKanji: true, romaji: 'sodatsu', meaning: 'to grow up (itself)', emoji: '🌱', group: 'godan', word: { kana: '子供が育つ', romaji: 'kodomo ga sodatsu', meaning: 'a child grows up' } },
  { char: '育てる', kana: 'そだてる', hasKanji: true, romaji: 'sodateru', meaning: 'to raise / grow', emoji: '🌻', group: 'ichidan', word: { kana: '子供を育てる', romaji: 'kodomo wo sodateru', meaning: 'to raise a child' } },
  { char: '増える', kana: 'ふえる', hasKanji: true, romaji: 'fueru', meaning: 'to increase (itself)', emoji: '📈', group: 'ichidan', word: { kana: '人口が増える', romaji: 'jinkou ga fueru', meaning: 'the population increases' } },
  { char: '増やす', kana: 'ふやす', hasKanji: true, romaji: 'fuyasu', meaning: 'to increase (something)', emoji: '➕', group: 'godan', word: { kana: '貯金を増やす', romaji: 'chokin wo fuyasu', meaning: "to increase one's savings" } },
  { char: '減る', kana: 'へる', hasKanji: true, romaji: 'heru', meaning: 'to decrease (itself)', emoji: '📉', group: 'godan', word: { kana: '人口が減る', romaji: 'jinkou ga heru', meaning: 'the population decreases' } },
  { char: '減らす', kana: 'へらす', hasKanji: true, romaji: 'herasu', meaning: 'to decrease (something)', emoji: '➖', group: 'godan', word: { kana: '体重を減らす', romaji: 'taijuu wo herasu', meaning: "to decrease one's weight" } },

  // Cooking & food
  { char: '焼く', kana: 'やく', hasKanji: true, romaji: 'yaku', meaning: 'to grill / bake', emoji: '🔥', group: 'godan', word: { kana: 'パンを焼く', romaji: 'pan wo yaku', meaning: 'to bake bread' } },
  { char: '煮る', kana: 'にる', hasKanji: true, romaji: 'niru', meaning: 'to boil / simmer', emoji: '🍲', group: 'ichidan', word: { kana: '野菜を煮る', romaji: 'yasai wo niru', meaning: 'to simmer vegetables' } },
  { char: '切る', kana: 'きる', hasKanji: true, romaji: 'kiru', meaning: 'to cut', emoji: '✂️', group: 'godan', word: { kana: '野菜を切る', romaji: 'yasai wo kiru', meaning: 'to cut vegetables' } },
  { char: '混ぜる', kana: 'まぜる', hasKanji: true, romaji: 'mazeru', meaning: 'to mix', emoji: '🥄', group: 'ichidan', word: { kana: '卵を混ぜる', romaji: 'tamago wo mazeru', meaning: 'to mix eggs' } },
  { char: '冷やす', kana: 'ひやす', hasKanji: true, romaji: 'hiyasu', meaning: 'to chill', emoji: '🧊', group: 'godan', word: { kana: 'ジュースを冷やす', romaji: 'juusu wo hiyasu', meaning: 'to chill juice' } },
  { char: '温める', kana: 'あたためる', hasKanji: true, romaji: 'atatameru', meaning: 'to warm up', emoji: '♨️', group: 'ichidan', word: { kana: 'スープを温める', romaji: 'suupu wo atatameru', meaning: 'to warm up soup' } },
  { char: '味わう', kana: 'あじわう', hasKanji: true, romaji: 'ajiwau', meaning: 'to taste / savor', emoji: '👅', group: 'godan', word: { kana: '料理を味わう', romaji: 'ryouri wo ajiwau', meaning: 'to savor a dish' } },
  { char: '注文する', kana: 'ちゅうもんする', hasKanji: true, romaji: 'chuumon suru', meaning: 'to order (food)', emoji: '🍽️', group: 'suru', word: { kana: 'ピザを注文する', romaji: 'piza wo chuumon suru', meaning: 'to order pizza' } },

  // Sports & play
  { char: '蹴る', kana: 'ける', hasKanji: true, romaji: 'keru', meaning: 'to kick', emoji: '⚽', group: 'godan', word: { kana: 'ボールを蹴る', romaji: 'booru wo keru', meaning: 'to kick a ball' } },
  { char: '投げる', kana: 'なげる', hasKanji: true, romaji: 'nageru', meaning: 'to throw', emoji: '🏐', group: 'ichidan', word: { kana: 'ボールを投げる', romaji: 'booru wo nageru', meaning: 'to throw a ball' } },
  { char: '打つ', kana: 'うつ', hasKanji: true, romaji: 'utsu', meaning: 'to hit', emoji: '🏏', group: 'godan', word: { kana: 'ボールを打つ', romaji: 'booru wo utsu', meaning: 'to hit a ball' } },
  { char: '捕まえる', kana: 'つかまえる', hasKanji: true, romaji: 'tsukamaeru', meaning: 'to catch', emoji: '🎣', group: 'ichidan', word: { kana: '虫を捕まえる', romaji: 'mushi wo tsukamaeru', meaning: 'to catch a bug' } },
  { char: '逃げる', kana: 'にげる', hasKanji: true, romaji: 'nigeru', meaning: 'to escape / run away', emoji: '🏃‍♀️', group: 'ichidan', word: { kana: '犬から逃げる', romaji: 'inu kara nigeru', meaning: 'to run away from a dog' } },
  { char: '追う', kana: 'おう', hasKanji: true, romaji: 'ou', meaning: 'to chase', emoji: '🐾', group: 'godan', word: { kana: '夢を追う', romaji: 'yume wo ou', meaning: 'to chase a dream' } },
  { char: '勝つ', kana: 'かつ', hasKanji: true, romaji: 'katsu', meaning: 'to win', emoji: '🏆', group: 'godan', word: { kana: '試合に勝つ', romaji: 'shiai ni katsu', meaning: 'to win a match' } },
  { char: '負ける', kana: 'まける', hasKanji: true, romaji: 'makeru', meaning: 'to lose', emoji: '😞', group: 'ichidan', word: { kana: '試合に負ける', romaji: 'shiai ni makeru', meaning: 'to lose a match' } },

  // Health & body
  { char: '怪我する', kana: 'けがする', hasKanji: true, romaji: 'kega suru', meaning: 'to get injured', emoji: '🤕', group: 'suru', word: { kana: '足を怪我する', romaji: 'ashi wo kega suru', meaning: "to injure one's leg" } },
  { char: '痛む', kana: 'いたむ', hasKanji: true, romaji: 'itamu', meaning: 'to hurt / ache', emoji: '🤒', group: 'godan', word: { kana: '頭が痛む', romaji: 'atama ga itamu', meaning: "one's head hurts" } },
  { char: '眠る', kana: 'ねむる', hasKanji: true, romaji: 'nemuru', meaning: 'to sleep (deeply)', emoji: '💤', group: 'godan', word: { kana: 'ぐっすり眠る', romaji: 'gussuri nemuru', meaning: 'to sleep soundly' } },
  { char: '起こす', kana: 'おこす', hasKanji: true, romaji: 'okosu', meaning: 'to wake someone up', emoji: '⏰', group: 'godan', word: { kana: '弟を起こす', romaji: 'otouto wo okosu', meaning: "to wake up one's younger brother" } },
  { char: '触れる', kana: 'ふれる', hasKanji: true, romaji: 'fureru', meaning: 'to touch lightly / come into contact', emoji: '🤏', group: 'ichidan', word: { kana: '文化に触れる', romaji: 'bunka ni fureru', meaning: 'to come into contact with a culture' } },
  { char: '遅れる', kana: 'おくれる', hasKanji: true, romaji: 'okureru', meaning: 'to be late', emoji: '⏰', group: 'ichidan', word: { kana: '電車が遅れる', romaji: 'densha ga okureru', meaning: 'the train is late' } },
  { char: '間に合う', kana: 'まにあう', hasKanji: true, romaji: 'maniau', meaning: 'to make it in time', emoji: '⏱️', group: 'godan', word: { kana: '電車に間に合う', romaji: 'densha ni maniau', meaning: 'to make it in time for the train' } },

  // Movement & direction
  { char: '進む', kana: 'すすむ', hasKanji: true, romaji: 'susumu', meaning: 'to advance / proceed', emoji: '➡️', group: 'godan', word: { kana: '前に進む', romaji: 'mae ni susumu', meaning: 'to move forward' } },
  { char: '戻る', kana: 'もどる', hasKanji: true, romaji: 'modoru', meaning: 'to go back / return', emoji: '🔙', group: 'godan', word: { kana: '席に戻る', romaji: 'seki ni modoru', meaning: "to return to one's seat" } },
  { char: '曲がる', kana: 'まがる', hasKanji: true, romaji: 'magaru', meaning: 'to turn (direction)', emoji: '↪️', group: 'godan', word: { kana: '右に曲がる', romaji: 'migi ni magaru', meaning: 'to turn right' } },
  { char: '通る', kana: 'とおる', hasKanji: true, romaji: 'tooru', meaning: 'to pass through', emoji: '🚶', group: 'godan', word: { kana: 'トンネルを通る', romaji: 'tonneru wo tooru', meaning: 'to pass through a tunnel' } },
  { char: '越える', kana: 'こえる', hasKanji: true, romaji: 'koeru', meaning: 'to cross over / exceed', emoji: '🏔️', group: 'ichidan', word: { kana: '国境を越える', romaji: 'kokkyou wo koeru', meaning: 'to cross a border' } },
  { char: '越す', kana: 'こす', hasKanji: true, romaji: 'kosu', meaning: 'to move (residence) / pass', emoji: '📦', group: 'godan', word: { kana: '新居に越す', romaji: 'shinkyo ni kosu', meaning: 'to move to a new home' } },
  { char: '落ちる', kana: 'おちる', hasKanji: true, romaji: 'ochiru', meaning: 'to fall', emoji: '⬇️', group: 'ichidan', word: { kana: '葉が落ちる', romaji: 'ha ga ochiru', meaning: 'a leaf falls' } },
  { char: '落とす', kana: 'おとす', hasKanji: true, romaji: 'otosu', meaning: 'to drop', emoji: '📉', group: 'godan', word: { kana: '財布を落とす', romaji: 'saifu wo otosu', meaning: "to drop one's wallet" } },
  { char: '倒れる', kana: 'たおれる', hasKanji: true, romaji: 'taoreru', meaning: 'to collapse / fall over', emoji: '🤕', group: 'ichidan', word: { kana: '木が倒れる', romaji: 'ki ga taoreru', meaning: 'a tree falls over' } },
  { char: '倒す', kana: 'たおす', hasKanji: true, romaji: 'taosu', meaning: 'to knock down', emoji: '🥊', group: 'godan', word: { kana: '敵を倒す', romaji: 'teki wo taosu', meaning: 'to defeat an enemy' } },

  // Household chores
  { char: '磨く', kana: 'みがく', hasKanji: true, romaji: 'migaku', meaning: 'to polish / brush', emoji: '🪥', group: 'godan', word: { kana: '歯を磨く', romaji: 'ha wo migaku', meaning: "to brush one's teeth" } },
  { char: '拭く', kana: 'ふく', hasKanji: true, romaji: 'fuku', meaning: 'to wipe', emoji: '🧽', group: 'godan', word: { kana: '机を拭く', romaji: 'tsukue wo fuku', meaning: 'to wipe a desk' } },
  { char: '干す', kana: 'ほす', hasKanji: true, romaji: 'hosu', meaning: 'to dry (in the sun)', emoji: '☀️', group: 'godan', word: { kana: '洗濯物を干す', romaji: 'sentakumono wo hosu', meaning: 'to hang laundry to dry' } },
  { char: '畳む', kana: 'たたむ', hasKanji: true, romaji: 'tatamu', meaning: 'to fold', emoji: '👔', group: 'godan', word: { kana: '服を畳む', romaji: 'fuku wo tatamu', meaning: 'to fold clothes' } },
  { char: '片付ける', kana: 'かたづける', hasKanji: true, romaji: 'katazukeru', meaning: 'to tidy up', emoji: '🧹', group: 'ichidan', word: { kana: '部屋を片付ける', romaji: 'heya wo katazukeru', meaning: 'to tidy up a room' } },
  { char: '汚れる', kana: 'よごれる', hasKanji: true, romaji: 'yogoreru', meaning: 'to get dirty', emoji: '🟤', group: 'ichidan', word: { kana: '服が汚れる', romaji: 'fuku ga yogoreru', meaning: 'clothes get dirty' } },
  { char: '汚す', kana: 'よごす', hasKanji: true, romaji: 'yogosu', meaning: 'to make dirty', emoji: '💩', group: 'godan', word: { kana: '手を汚す', romaji: 'te wo yogosu', meaning: "to get one's hands dirty" } },
  { char: '壊れる', kana: 'こわれる', hasKanji: true, romaji: 'kowareru', meaning: 'to break (itself)', emoji: '💥', group: 'ichidan', word: { kana: '時計が壊れる', romaji: 'tokei ga kowareru', meaning: 'a clock breaks' } },
  { char: '壊す', kana: 'こわす', hasKanji: true, romaji: 'kowasu', meaning: 'to break (something)', emoji: '🔨', group: 'godan', word: { kana: 'おもちゃを壊す', romaji: 'omocha wo kowasu', meaning: 'to break a toy' } },
]

export const verbTiers = { 1: verbTier1, 2: verbTier2, 3: verbTier3 }

export const verbTierMeta = {
  1: { label: 'Lesson verbs', sublabel: 'Your 40 core verbs' },
  2: { label: 'Everyday essentials', sublabel: 'High-frequency verbs' },
  3: { label: 'Native everyday', sublabel: 'JLPT N4–N3 verbs' },
}

export const verbAllCharacters = [...verbTier1, ...verbTier2, ...verbTier3]
