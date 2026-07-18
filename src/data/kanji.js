// Kanji data set, organized into 4 difficulty tiers.
//
// Reading convention: `romaji` is the single most common reading of the
// character in isolation (chosen per the "most common reading" brief) —
// for verbs/adjectives this is usually the on'yomi shared by common
// compounds, for standalone native nouns it's the kun'yomi. `word` is a
// real, accurate example word using the kanji (which may use a different
// reading than the card's primary `romaji` — that's normal in Japanese
// and shown honestly rather than hidden).
//
// Tier 1 is the standard JLPT N5 kanji set. A few characters have more
// than one extremely common reading (e.g. 四 yon/shi, 日 nichi/hi) — the
// choice made here is a defensible primary pick, not the "only" answer.

export const kanjiTier1 = [
  // Numbers
  { char: '一', romaji: 'ichi', meaning: 'one', emoji: '1️⃣', word: { kana: '一つ', romaji: 'hitotsu', meaning: 'one (thing)' } },
  { char: '二', romaji: 'ni', meaning: 'two', emoji: '2️⃣', word: { kana: '二つ', romaji: 'futatsu', meaning: 'two (things)' } },
  { char: '三', romaji: 'san', meaning: 'three', emoji: '3️⃣', word: { kana: '三つ', romaji: 'mittsu', meaning: 'three (things)' } },
  { char: '四', romaji: 'yon', meaning: 'four', emoji: '4️⃣', word: { kana: '四人', romaji: 'yonin', meaning: 'four people' } },
  { char: '五', romaji: 'go', meaning: 'five', emoji: '5️⃣', word: { kana: '五つ', romaji: 'itsutsu', meaning: 'five (things)' } },
  { char: '六', romaji: 'roku', meaning: 'six', emoji: '6️⃣', word: { kana: '六つ', romaji: 'muttsu', meaning: 'six (things)' } },
  { char: '七', romaji: 'nana', meaning: 'seven', emoji: '7️⃣', word: { kana: '七つ', romaji: 'nanatsu', meaning: 'seven (things)' } },
  { char: '八', romaji: 'hachi', meaning: 'eight', emoji: '8️⃣', word: { kana: '八つ', romaji: 'yattsu', meaning: 'eight (things)' } },
  { char: '九', romaji: 'kyuu', meaning: 'nine', emoji: '9️⃣', word: { kana: '九つ', romaji: 'kokonotsu', meaning: 'nine (things)' } },
  { char: '十', romaji: 'juu', meaning: 'ten', emoji: '🔟', word: { kana: '十日', romaji: 'tooka', meaning: 'the 10th day / ten days' } },
  { char: '百', romaji: 'hyaku', meaning: 'hundred', emoji: '💯', word: { kana: '百円', romaji: 'hyakuen', meaning: '100 yen' } },
  { char: '千', romaji: 'sen', meaning: 'thousand', emoji: '🧮', word: { kana: '千円', romaji: "sen'en", meaning: '1000 yen' } },
  { char: '万', romaji: 'man', meaning: 'ten thousand', emoji: '🔢', word: { kana: '一万', romaji: 'ichiman', meaning: 'ten thousand' } },
  { char: '円', romaji: 'en', meaning: 'yen', emoji: '💴', word: { kana: '千円', romaji: "sen'en", meaning: '1000 yen' } },

  // Calendar & time
  { char: '日', romaji: 'nichi', meaning: 'day / sun', emoji: '☀️', word: { kana: '日曜日', romaji: 'nichiyoubi', meaning: 'Sunday' } },
  { char: '月', romaji: 'getsu', meaning: 'month / moon', emoji: '🌙', word: { kana: '月曜日', romaji: 'getsuyoubi', meaning: 'Monday' } },
  { char: '火', romaji: 'ka', meaning: 'fire', emoji: '🔥', word: { kana: '火曜日', romaji: 'kayoubi', meaning: 'Tuesday' } },
  { char: '水', romaji: 'sui', meaning: 'water', emoji: '💧', word: { kana: '水曜日', romaji: 'suiyoubi', meaning: 'Wednesday' } },
  { char: '木', romaji: 'moku', meaning: 'tree / wood', emoji: '🌳', word: { kana: '木曜日', romaji: 'mokuyoubi', meaning: 'Thursday' } },
  { char: '金', romaji: 'kin', meaning: 'gold / money', emoji: '🪙', word: { kana: '金曜日', romaji: 'kinyoubi', meaning: 'Friday' } },
  { char: '土', romaji: 'do', meaning: 'earth / soil', emoji: '🟤', word: { kana: '土曜日', romaji: 'doyoubi', meaning: 'Saturday' } },
  { char: '年', romaji: 'nen', meaning: 'year', emoji: '📅', word: { kana: '今年', romaji: 'kotoshi', meaning: 'this year' } },
  { char: '時', romaji: 'ji', meaning: 'hour / time', emoji: '⏰', word: { kana: '時間', romaji: 'jikan', meaning: 'time / hours' } },
  { char: '分', romaji: 'fun', meaning: 'minute', emoji: '⏱️', word: { kana: '五分', romaji: 'gofun', meaning: 'five minutes' } },
  { char: '週', romaji: 'shuu', meaning: 'week', emoji: '🗓️', word: { kana: '今週', romaji: 'konshuu', meaning: 'this week' } },
  { char: '今', romaji: 'ima', meaning: 'now', emoji: '👉', word: { kana: '今日', romaji: 'kyou', meaning: 'today' } },
  { char: '半', romaji: 'han', meaning: 'half', emoji: '➗', word: { kana: '半分', romaji: 'hanbun', meaning: 'half' } },
  { char: '毎', romaji: 'mai', meaning: 'every', emoji: '🔁', word: { kana: '毎日', romaji: 'mainichi', meaning: 'every day' } },

  // People & family
  { char: '人', romaji: 'hito', meaning: 'person', emoji: '🧍', word: { kana: '一人', romaji: 'hitori', meaning: 'one person / alone' } },
  { char: '私', romaji: 'watashi', meaning: 'I / me', emoji: '🙋', word: { kana: '私たち', romaji: 'watashitachi', meaning: 'we / us' } },
  { char: '名', romaji: 'na', meaning: 'name', emoji: '🏷️', word: { kana: '名前', romaji: 'namae', meaning: 'name' } },
  { char: '前', romaji: 'mae', meaning: 'before / front', emoji: '➡️', word: { kana: '駅前', romaji: 'ekimae', meaning: 'in front of the station' } },
  { char: '後', romaji: 'go', meaning: 'after / behind', emoji: '⬅️', word: { kana: '午後', romaji: 'gogo', meaning: 'afternoon / p.m.' } },
  { char: '友', romaji: 'tomo', meaning: 'friend', emoji: '🤝', word: { kana: '友達', romaji: 'tomodachi', meaning: 'friend' } },
  { char: '男', romaji: 'otoko', meaning: 'man', emoji: '🚹', word: { kana: '男の子', romaji: 'otokonoko', meaning: 'boy' } },
  { char: '女', romaji: 'onna', meaning: 'woman', emoji: '🚺', word: { kana: '女の子', romaji: 'onnanoko', meaning: 'girl' } },
  { char: '子', romaji: 'ko', meaning: 'child', emoji: '🧒', word: { kana: '子供', romaji: 'kodomo', meaning: 'child / children' } },
  { char: '父', romaji: 'chichi', meaning: 'father', emoji: '👨', word: { kana: 'お父さん', romaji: 'otousan', meaning: 'father' } },
  { char: '母', romaji: 'haha', meaning: 'mother', emoji: '👩', word: { kana: 'お母さん', romaji: 'okaasan', meaning: 'mother' } },
  { char: '先', romaji: 'sen', meaning: 'previous / ahead', emoji: '🏃', word: { kana: '先生', romaji: 'sensei', meaning: 'teacher' } },
  { char: '生', romaji: 'sei', meaning: 'life / birth', emoji: '🌱', word: { kana: '学生', romaji: 'gakusei', meaning: 'student' } },

  // Nature
  { char: '山', romaji: 'yama', meaning: 'mountain', emoji: '⛰️', word: { kana: '富士山', romaji: 'fujisan', meaning: 'Mt. Fuji' } },
  { char: '川', romaji: 'kawa', meaning: 'river', emoji: '🏞️', word: { kana: '小川', romaji: 'ogawa', meaning: 'stream / brook' } },
  { char: '空', romaji: 'sora', meaning: 'sky', emoji: '🌌', word: { kana: '空港', romaji: 'kuukou', meaning: 'airport' } },
  { char: '雨', romaji: 'ame', meaning: 'rain', emoji: '🌧️', word: { kana: '大雨', romaji: 'ooame', meaning: 'heavy rain' } },
  { char: '花', romaji: 'hana', meaning: 'flower', emoji: '🌸', word: { kana: '花火', romaji: 'hanabi', meaning: 'fireworks' } },
  { char: '石', romaji: 'ishi', meaning: 'stone', emoji: '🪨', word: { kana: '石けん', romaji: 'sekken', meaning: 'soap' } },
  { char: '天', romaji: 'ten', meaning: 'heaven / sky', emoji: '☁️', word: { kana: '天気', romaji: 'tenki', meaning: 'weather' } },
  { char: '気', romaji: 'ki', meaning: 'spirit / feeling', emoji: '💨', word: { kana: '元気', romaji: 'genki', meaning: 'healthy / energetic' } },
  { char: '電', romaji: 'den', meaning: 'electricity', emoji: '⚡', word: { kana: '電車', romaji: 'densha', meaning: 'train' } },
  { char: '車', romaji: 'kuruma', meaning: 'car', emoji: '🚗', word: { kana: '自転車', romaji: 'jitensha', meaning: 'bicycle' } },
  { char: '犬', romaji: 'inu', meaning: 'dog', emoji: '🐕', word: { kana: '子犬', romaji: 'koinu', meaning: 'puppy' } },
  { char: '米', romaji: 'kome', meaning: 'rice', emoji: '🍚', word: { kana: 'お米', romaji: 'okome', meaning: 'rice' } },
  { char: '茶', romaji: 'cha', meaning: 'tea', emoji: '🍵', word: { kana: 'お茶', romaji: 'ocha', meaning: 'tea' } },
  { char: '魚', romaji: 'sakana', meaning: 'fish', emoji: '🐟', word: { kana: '魚屋', romaji: 'sakanaya', meaning: 'fish shop' } },

  // Colors
  { char: '白', romaji: 'shiro', meaning: 'white', emoji: '⚪', word: { kana: '白い', romaji: 'shiroi', meaning: 'white' } },
  { char: '赤', romaji: 'aka', meaning: 'red', emoji: '🔴', word: { kana: '赤い', romaji: 'akai', meaning: 'red' } },
  { char: '青', romaji: 'ao', meaning: 'blue', emoji: '🔵', word: { kana: '青い', romaji: 'aoi', meaning: 'blue' } },
  { char: '黒', romaji: 'kuro', meaning: 'black', emoji: '⚫', word: { kana: '黒い', romaji: 'kuroi', meaning: 'black' } },

  // Directions & position
  { char: '上', romaji: 'ue', meaning: 'up / above', emoji: '⬆️', word: { kana: '上手', romaji: 'jouzu', meaning: 'skilled' } },
  { char: '下', romaji: 'shita', meaning: 'down / below', emoji: '⬇️', word: { kana: '下手', romaji: 'heta', meaning: 'unskilled' } },
  { char: '左', romaji: 'hidari', meaning: 'left', emoji: '⬅️', word: { kana: '左手', romaji: 'hidarite', meaning: 'left hand' } },
  { char: '右', romaji: 'migi', meaning: 'right', emoji: '➡️', word: { kana: '右手', romaji: 'migite', meaning: 'right hand' } },
  { char: '中', romaji: 'naka', meaning: 'middle / inside', emoji: '🎯', word: { kana: '中国', romaji: 'chuugoku', meaning: 'China' } },
  { char: '外', romaji: 'soto', meaning: 'outside', emoji: '🚪', word: { kana: '外国', romaji: 'gaikoku', meaning: 'foreign country' } },
  { char: '東', romaji: 'higashi', meaning: 'east', emoji: '🌅', word: { kana: '東京', romaji: 'toukyou', meaning: 'Tokyo' } },
  { char: '西', romaji: 'nishi', meaning: 'west', emoji: '🌇', word: { kana: '西口', romaji: 'nishiguchi', meaning: 'west exit' } },
  { char: '南', romaji: 'minami', meaning: 'south', emoji: '🧭', word: { kana: '南口', romaji: 'minamiguchi', meaning: 'south exit' } },
  { char: '北', romaji: 'kita', meaning: 'north', emoji: '🧭', word: { kana: '北口', romaji: 'kitaguchi', meaning: 'north exit' } },

  // Size & basic adjectives (on'yomi shown; kun adjective form in the example word)
  { char: '大', romaji: 'dai', meaning: 'big', emoji: '🐘', word: { kana: '大学', romaji: 'daigaku', meaning: 'university' } },
  { char: '小', romaji: 'shou', meaning: 'small', emoji: '🐜', word: { kana: '小学校', romaji: 'shougakkou', meaning: 'elementary school' } },
  { char: '高', romaji: 'kou', meaning: 'tall / expensive', emoji: '🏔️', word: { kana: '高い', romaji: 'takai', meaning: 'tall / expensive' } },
  { char: '安', romaji: 'an', meaning: 'cheap', emoji: '🏷️', word: { kana: '安い', romaji: 'yasui', meaning: 'cheap' } },
  { char: '新', romaji: 'shin', meaning: 'new', emoji: '✨', word: { kana: '新しい', romaji: 'atarashii', meaning: 'new' } },
  { char: '古', romaji: 'ko', meaning: 'old', emoji: '🏺', word: { kana: '古い', romaji: 'furui', meaning: 'old' } },
  { char: '多', romaji: 'ta', meaning: 'many', emoji: '➕', word: { kana: '多い', romaji: 'ooi', meaning: 'many / a lot' } },
  { char: '少', romaji: 'shou', meaning: 'few', emoji: '➖', word: { kana: '少ない', romaji: 'sukunai', meaning: 'few / a little' } },

  // Body
  { char: '目', romaji: 'me', meaning: 'eye', emoji: '👁️', word: { kana: '目玉焼き', romaji: 'medamayaki', meaning: 'fried egg' } },
  { char: '耳', romaji: 'mimi', meaning: 'ear', emoji: '👂', word: { kana: '耳たぶ', romaji: 'mimitabu', meaning: 'earlobe' } },
  { char: '口', romaji: 'kuchi', meaning: 'mouth', emoji: '👄', word: { kana: '入り口', romaji: 'iriguchi', meaning: 'entrance' } },
  { char: '手', romaji: 'te', meaning: 'hand', emoji: '✋', word: { kana: '手紙', romaji: 'tegami', meaning: 'letter' } },
  { char: '足', romaji: 'ashi', meaning: 'foot / leg', emoji: '🦶', word: { kana: '足りない', romaji: 'tarinai', meaning: 'not enough' } },

  // Common verbs (on'yomi shown; kun dictionary-form verb in the example word)
  { char: '行', romaji: 'kou', meaning: 'go', emoji: '🚶', word: { kana: '行く', romaji: 'iku', meaning: 'to go' } },
  { char: '来', romaji: 'rai', meaning: 'come', emoji: '🔜', word: { kana: '来る', romaji: 'kuru', meaning: 'to come' } },
  { char: '見', romaji: 'ken', meaning: 'see', emoji: '👀', word: { kana: '見る', romaji: 'miru', meaning: 'to see / look' } },
  { char: '食', romaji: 'shoku', meaning: 'eat', emoji: '🍽️', word: { kana: '食べる', romaji: 'taberu', meaning: 'to eat' } },
  { char: '飲', romaji: 'in', meaning: 'drink', emoji: '🥤', word: { kana: '飲む', romaji: 'nomu', meaning: 'to drink' } },
  { char: '読', romaji: 'doku', meaning: 'read', emoji: '📖', word: { kana: '読む', romaji: 'yomu', meaning: 'to read' } },
  { char: '書', romaji: 'sho', meaning: 'write', emoji: '✍️', word: { kana: '書く', romaji: 'kaku', meaning: 'to write' } },
  { char: '話', romaji: 'wa', meaning: 'talk', emoji: '💬', word: { kana: '話す', romaji: 'hanasu', meaning: 'to speak' } },
  { char: '聞', romaji: 'bun', meaning: 'hear', emoji: '👂', word: { kana: '聞く', romaji: 'kiku', meaning: 'to hear / ask' } },
  { char: '買', romaji: 'bai', meaning: 'buy', emoji: '🛒', word: { kana: '買う', romaji: 'kau', meaning: 'to buy' } },
  { char: '休', romaji: 'kyuu', meaning: 'rest', emoji: '🛌', word: { kana: '休む', romaji: 'yasumu', meaning: 'to rest / be absent' } },
  { char: '立', romaji: 'ritsu', meaning: 'stand', emoji: '🧍', word: { kana: '立つ', romaji: 'tatsu', meaning: 'to stand' } },
  { char: '入', romaji: 'nyuu', meaning: 'enter', emoji: '🔑', word: { kana: '入る', romaji: 'hairu', meaning: 'to enter' } },
  { char: '出', romaji: 'shutsu', meaning: 'exit', emoji: '🚪', word: { kana: '出る', romaji: 'deru', meaning: 'to exit / leave' } },

  // School & misc essentials
  { char: '学', romaji: 'gaku', meaning: 'study', emoji: '🎓', word: { kana: '学校', romaji: 'gakkou', meaning: 'school' } },
  { char: '校', romaji: 'kou', meaning: 'school', emoji: '🏫', word: { kana: '高校', romaji: 'koukou', meaning: 'high school' } },
  { char: '語', romaji: 'go', meaning: 'language', emoji: '💬', word: { kana: '日本語', romaji: 'nihongo', meaning: 'Japanese language' } },
  { char: '国', romaji: 'koku', meaning: 'country', emoji: '🌏', word: { kana: '韓国', romaji: 'kankoku', meaning: 'Korea' } },
  { char: '会', romaji: 'kai', meaning: 'meet', emoji: '🤝', word: { kana: '会社', romaji: 'kaisha', meaning: 'company' } },
  { char: '社', romaji: 'sha', meaning: 'company / shrine', emoji: '⛩️', word: { kana: '神社', romaji: 'jinja', meaning: 'Shinto shrine' } },
  { char: '本', romaji: 'hon', meaning: 'book / origin', emoji: '📕', word: { kana: '日本', romaji: 'nihon', meaning: 'Japan' } },
  { char: '何', romaji: 'nan', meaning: 'what', emoji: '❓', word: { kana: '何人', romaji: 'nannin', meaning: 'how many people' } },
  { char: '間', romaji: 'kan', meaning: 'interval / between', emoji: '↔️', word: { kana: '人間', romaji: 'ningen', meaning: 'human being' } },
]

// Tier 2: common N4-level kanji. Starter set — grow this list over time.
export const kanjiTier2 = [
  { char: '動', romaji: 'dou', meaning: 'move', emoji: '🏃', word: { kana: '自動車', romaji: 'jidousha', meaning: 'automobile' } },
  { char: '働', romaji: 'dou', meaning: 'work', emoji: '💼', word: { kana: '働く', romaji: 'hataraku', meaning: 'to work' } },
  { char: '使', romaji: 'shi', meaning: 'use', emoji: '🔧', word: { kana: '使う', romaji: 'tsukau', meaning: 'to use' } },
  { char: '作', romaji: 'saku', meaning: 'make', emoji: '🛠️', word: { kana: '作る', romaji: 'tsukuru', meaning: 'to make' } },
  { char: '始', romaji: 'shi', meaning: 'begin', emoji: '▶️', word: { kana: '始まる', romaji: 'hajimaru', meaning: 'to begin' } },
  { char: '終', romaji: 'shuu', meaning: 'end', emoji: '🏁', word: { kana: '終わる', romaji: 'owaru', meaning: 'to end' } },
  { char: '持', romaji: 'ji', meaning: 'hold', emoji: '🤲', word: { kana: '持つ', romaji: 'motsu', meaning: 'to hold / have' } },
  { char: '待', romaji: 'tai', meaning: 'wait', emoji: '⏳', word: { kana: '待つ', romaji: 'matsu', meaning: 'to wait' } },
  { char: '知', romaji: 'chi', meaning: 'know', emoji: '💡', word: { kana: '知る', romaji: 'shiru', meaning: 'to know' } },
  { char: '思', romaji: 'shi', meaning: 'think', emoji: '💭', word: { kana: '思う', romaji: 'omou', meaning: 'to think' } },
  { char: '教', romaji: 'kyou', meaning: 'teach', emoji: '🏫', word: { kana: '教える', romaji: 'oshieru', meaning: 'to teach' } },
  { char: '習', romaji: 'shuu', meaning: 'learn', emoji: '📚', word: { kana: '習う', romaji: 'narau', meaning: 'to learn' } },
  { char: '歩', romaji: 'ho', meaning: 'walk', emoji: '🚶', word: { kana: '歩く', romaji: 'aruku', meaning: 'to walk' } },
  { char: '走', romaji: 'sou', meaning: 'run', emoji: '🏃', word: { kana: '走る', romaji: 'hashiru', meaning: 'to run' } },
  { char: '泳', romaji: 'ei', meaning: 'swim', emoji: '🏊', word: { kana: '泳ぐ', romaji: 'oyogu', meaning: 'to swim' } },
  { char: '乗', romaji: 'jou', meaning: 'ride', emoji: '🚃', word: { kana: '乗る', romaji: 'noru', meaning: 'to ride' } },
  { char: '降', romaji: 'kou', meaning: 'get off / descend', emoji: '🚶', word: { kana: '降りる', romaji: 'oriru', meaning: 'to get off / descend' } },
  { char: '着', romaji: 'chaku', meaning: 'wear / arrive', emoji: '👕', word: { kana: '着る', romaji: 'kiru', meaning: 'to wear' } },
  { char: '開', romaji: 'kai', meaning: 'open', emoji: '🚪', word: { kana: '開ける', romaji: 'akeru', meaning: 'to open' } },
  { char: '閉', romaji: 'hei', meaning: 'close', emoji: '🚫', word: { kana: '閉める', romaji: 'shimeru', meaning: 'to close' } },
  { char: '売', romaji: 'bai', meaning: 'sell', emoji: '🏷️', word: { kana: '売る', romaji: 'uru', meaning: 'to sell' } },
  { char: '貸', romaji: 'tai', meaning: 'lend', emoji: '🤲', word: { kana: '貸す', romaji: 'kasu', meaning: 'to lend' } },
  { char: '借', romaji: 'shaku', meaning: 'borrow', emoji: '🙏', word: { kana: '借りる', romaji: 'kariru', meaning: 'to borrow' } },
  { char: '送', romaji: 'sou', meaning: 'send', emoji: '📤', word: { kana: '送る', romaji: 'okuru', meaning: 'to send' } },
  { char: '料', romaji: 'ryou', meaning: 'fee / materials', emoji: '💰', word: { kana: '料理', romaji: 'ryouri', meaning: 'cooking / cuisine' } },
  { char: '理', romaji: 'ri', meaning: 'logic / reason', emoji: '🧠', word: { kana: '理由', romaji: 'riyuu', meaning: 'reason' } },
  { char: '楽', romaji: 'raku', meaning: 'comfort / fun', emoji: '🎵', word: { kana: '音楽', romaji: 'ongaku', meaning: 'music' } },
  { char: '顔', romaji: 'kao', meaning: 'face', emoji: '😊', word: { kana: '笑顔', romaji: 'egao', meaning: 'smiling face' } },
  { char: '声', romaji: 'sei', meaning: 'voice', emoji: '📢', word: { kana: '大声', romaji: 'oogoe', meaning: 'loud voice' } },
  { char: '言', romaji: 'gen', meaning: 'say', emoji: '💬', word: { kana: '言葉', romaji: 'kotoba', meaning: 'word / language' } },
]

// Tier 3: common everyday jōyō kanji beyond N4. Starter set — grow this list over time.
export const kanjiTier3 = [
  { char: '質', romaji: 'shitsu', meaning: 'quality', emoji: '❓', word: { kana: '質問', romaji: 'shitsumon', meaning: 'question' } },
  { char: '問', romaji: 'mon', meaning: 'ask / question', emoji: '❔', word: { kana: '問題', romaji: 'mondai', meaning: 'problem / question' } },
  { char: '題', romaji: 'dai', meaning: 'topic / title', emoji: '📋', word: { kana: '宿題', romaji: 'shukudai', meaning: 'homework' } },
  { char: '試', romaji: 'shi', meaning: 'try / test', emoji: '📝', word: { kana: '試験', romaji: 'shiken', meaning: 'exam' } },
  { char: '験', romaji: 'ken', meaning: 'test / effect', emoji: '🧪', word: { kana: '経験', romaji: 'keiken', meaning: 'experience' } },
  { char: '数', romaji: 'suu', meaning: 'number', emoji: '🔢', word: { kana: '数学', romaji: 'suugaku', meaning: 'mathematics' } },
  { char: '字', romaji: 'ji', meaning: 'character / letter', emoji: '🔤', word: { kana: '漢字', romaji: 'kanji', meaning: 'kanji / Chinese character' } },
  { char: '文', romaji: 'bun', meaning: 'sentence / writing', emoji: '📄', word: { kana: '文化', romaji: 'bunka', meaning: 'culture' } },
  { char: '化', romaji: 'ka', meaning: 'change / -ization', emoji: '🔄', word: { kana: '化学', romaji: 'kagaku', meaning: 'chemistry' } },
  { char: '物', romaji: 'butsu', meaning: 'thing', emoji: '📦', word: { kana: '食べ物', romaji: 'tabemono', meaning: 'food' } },
  { char: '色', romaji: 'iro', meaning: 'color', emoji: '🎨', word: { kana: '茶色', romaji: 'chairo', meaning: 'brown' } },
  { char: '好', romaji: 'suki', meaning: 'like / fond of', emoji: '💗', word: { kana: '大好き', romaji: 'daisuki', meaning: 'love / very fond of' } },
  { char: '悪', romaji: 'aku', meaning: 'bad', emoji: '😈', word: { kana: '悪い', romaji: 'warui', meaning: 'bad' } },
  { char: '牛', romaji: 'gyuu', meaning: 'cow / beef', emoji: '🐄', word: { kana: '牛乳', romaji: 'gyuunyuu', meaning: 'milk' } },
  { char: '豚', romaji: 'ton', meaning: 'pig', emoji: '🐖', word: { kana: 'とんかつ', romaji: 'tonkatsu', meaning: 'pork cutlet' } },
  { char: '肉', romaji: 'niku', meaning: 'meat', emoji: '🥩', word: { kana: '牛肉', romaji: 'gyuuniku', meaning: 'beef' } },
  { char: '野', romaji: 'ya', meaning: 'field', emoji: '🌾', word: { kana: '野菜', romaji: 'yasai', meaning: 'vegetable' } },
  { char: '菜', romaji: 'sai', meaning: 'vegetable / greens', emoji: '🥬', word: { kana: '白菜', romaji: 'hakusai', meaning: 'Chinese cabbage' } },
  { char: '弟', romaji: 'tei', meaning: 'younger brother', emoji: '👦', word: { kana: '兄弟', romaji: 'kyoudai', meaning: 'siblings' } },
  { char: '兄', romaji: 'kei', meaning: 'older brother', emoji: '🧑', word: { kana: 'お兄さん', romaji: 'oniisan', meaning: 'older brother' } },
  { char: '姉', romaji: 'shi', meaning: 'older sister', emoji: '👩', word: { kana: 'お姉さん', romaji: 'oneesan', meaning: 'older sister' } },
  { char: '妹', romaji: 'mai', meaning: 'younger sister', emoji: '👧', word: { kana: '姉妹', romaji: 'shimai', meaning: 'sisters' } },
  { char: '族', romaji: 'zoku', meaning: 'family / tribe', emoji: '👪', word: { kana: '家族', romaji: 'kazoku', meaning: 'family' } },
  { char: '家', romaji: 'ka', meaning: 'house / family', emoji: '🏠', word: { kana: '作家', romaji: 'sakka', meaning: 'author / writer' } },
  { char: '歌', romaji: 'ka', meaning: 'song', emoji: '🎤', word: { kana: '歌う', romaji: 'utau', meaning: 'to sing' } },
  { char: '音', romaji: 'on', meaning: 'sound', emoji: '🔊', word: { kana: '発音', romaji: 'hatsuon', meaning: 'pronunciation' } },
  { char: '映', romaji: 'ei', meaning: 'reflect / project', emoji: '🎬', word: { kana: '映画', romaji: 'eiga', meaning: 'movie' } },
  { char: '画', romaji: 'ga', meaning: 'picture / stroke', emoji: '🖼️', word: { kana: '漫画', romaji: 'manga', meaning: 'comic / manga' } },
  { char: '体', romaji: 'tai', meaning: 'body', emoji: '💪', word: { kana: '体育', romaji: 'taiiku', meaning: 'physical education' } },
  { char: '病', romaji: 'byou', meaning: 'illness', emoji: '🤒', word: { kana: '病院', romaji: 'byouin', meaning: 'hospital' } },
  { char: '院', romaji: 'in', meaning: 'institution', emoji: '🏥', word: { kana: '大学院', romaji: 'daigakuin', meaning: 'graduate school' } },
  { char: '医', romaji: 'i', meaning: 'medicine / doctor', emoji: '⚕️', word: { kana: '医者', romaji: 'isha', meaning: 'doctor' } },
  { char: '者', romaji: 'sha', meaning: 'person (suffix)', emoji: '🧑', word: { kana: '若者', romaji: 'wakamono', meaning: 'young person' } },
]

// Tier 4: rarer kanji, clearly optional — a fun challenge beyond everyday use.
// Some of these (e.g. 兎) are real, correctly-read characters that are less
// common in modern print (often written in kana instead) rather than being
// invented — flagged here for transparency, not because the reading is unsure.
export const kanjiTier4 = [
  { char: '鬼', romaji: 'oni', meaning: 'ogre / demon', emoji: '👹', word: { kana: '鬼ごっこ', romaji: 'onigokko', meaning: 'tag (the game)' } },
  { char: '竜', romaji: 'ryuu', meaning: 'dragon', emoji: '🐉', word: { kana: '恐竜', romaji: 'kyouryuu', meaning: 'dinosaur' } },
  { char: '虎', romaji: 'tora', meaning: 'tiger', emoji: '🐯', word: { kana: '虎', romaji: 'tora', meaning: 'tiger' } },
  { char: '狼', romaji: 'ookami', meaning: 'wolf', emoji: '🐺', word: { kana: '狼', romaji: 'ookami', meaning: 'wolf' } },
  { char: '熊', romaji: 'kuma', meaning: 'bear', emoji: '🐻', word: { kana: '熊', romaji: 'kuma', meaning: 'bear' } },
  { char: '鶴', romaji: 'tsuru', meaning: 'crane (bird)', emoji: '🕊️', word: { kana: '折り鶴', romaji: 'orizuru', meaning: 'paper crane' } },
  { char: '亀', romaji: 'kame', meaning: 'turtle', emoji: '🐢', word: { kana: '亀', romaji: 'kame', meaning: 'turtle' } },
  { char: '蛇', romaji: 'hebi', meaning: 'snake', emoji: '🐍', word: { kana: '蛇', romaji: 'hebi', meaning: 'snake' } },
  { char: '鯨', romaji: 'kujira', meaning: 'whale', emoji: '🐋', word: { kana: '鯨', romaji: 'kujira', meaning: 'whale' } },
  { char: '蝶', romaji: 'chou', meaning: 'butterfly', emoji: '🦋', word: { kana: '蝶々', romaji: 'choucho', meaning: 'butterfly' } },
  { char: '蜂', romaji: 'hachi', meaning: 'bee', emoji: '🐝', word: { kana: '蜂蜜', romaji: 'hachimitsu', meaning: 'honey' } },
  { char: '狐', romaji: 'kitsune', meaning: 'fox', emoji: '🦊', word: { kana: '狐', romaji: 'kitsune', meaning: 'fox' } },
  { char: '猿', romaji: 'saru', meaning: 'monkey', emoji: '🐒', word: { kana: '猿', romaji: 'saru', meaning: 'monkey' } },
  { char: '鹿', romaji: 'shika', meaning: 'deer', emoji: '🦌', word: { kana: '鹿', romaji: 'shika', meaning: 'deer' } },
  { char: '象', romaji: 'zou', meaning: 'elephant', emoji: '🐘', word: { kana: '象', romaji: 'zou', meaning: 'elephant' } },
  { char: '羊', romaji: 'hitsuji', meaning: 'sheep', emoji: '🐑', word: { kana: '羊', romaji: 'hitsuji', meaning: 'sheep' } },
  { char: '馬', romaji: 'uma', meaning: 'horse', emoji: '🐴', word: { kana: '木馬', romaji: 'mokuba', meaning: 'rocking horse' } },
  { char: '兎', romaji: 'usagi', meaning: 'rabbit', emoji: '🐇', word: { kana: '兎', romaji: 'usagi', meaning: 'rabbit' } },
  { char: '狸', romaji: 'tanuki', meaning: 'raccoon dog', emoji: '🦝', word: { kana: '狸', romaji: 'tanuki', meaning: 'raccoon dog' } },
  { char: '霜', romaji: 'shimo', meaning: 'frost', emoji: '❄️', word: { kana: '霜', romaji: 'shimo', meaning: 'frost' } },
  { char: '雷', romaji: 'kaminari', meaning: 'thunder', emoji: '⚡', word: { kana: '雷', romaji: 'kaminari', meaning: 'thunder' } },
  { char: '嵐', romaji: 'arashi', meaning: 'storm', emoji: '🌪️', word: { kana: '嵐', romaji: 'arashi', meaning: 'storm' } },
  { char: '虹', romaji: 'niji', meaning: 'rainbow', emoji: '🌈', word: { kana: '虹', romaji: 'niji', meaning: 'rainbow' } },
  { char: '霧', romaji: 'kiri', meaning: 'fog', emoji: '🌫️', word: { kana: '霧', romaji: 'kiri', meaning: 'fog' } },
  { char: '剣', romaji: 'ken', meaning: 'sword', emoji: '⚔️', word: { kana: '剣', romaji: 'ken', meaning: 'sword' } },
  { char: '盾', romaji: 'tate', meaning: 'shield', emoji: '🛡️', word: { kana: '盾', romaji: 'tate', meaning: 'shield' } },
  { char: '城', romaji: 'shiro', meaning: 'castle', emoji: '🏯', word: { kana: 'お城', romaji: 'oshiro', meaning: 'castle' } },
  { char: '橋', romaji: 'hashi', meaning: 'bridge', emoji: '🌉', word: { kana: '橋', romaji: 'hashi', meaning: 'bridge' } },
  { char: '森', romaji: 'mori', meaning: 'forest', emoji: '🌲', word: { kana: '森', romaji: 'mori', meaning: 'forest' } },
  { char: '林', romaji: 'hayashi', meaning: 'woods / grove', emoji: '🌳', word: { kana: '林', romaji: 'hayashi', meaning: 'woods / grove' } },
]

export const kanjiTiers = {
  1: kanjiTier1,
  2: kanjiTier2,
  3: kanjiTier3,
  4: kanjiTier4,
}

export const kanjiTierMeta = {
  1: { label: 'Beginner', sublabel: 'JLPT N5' },
  2: { label: 'Intermediate', sublabel: 'JLPT N4–N3' },
  3: { label: 'Native everyday', sublabel: 'Common jōyō kanji' },
  4: { label: 'Rare', sublabel: 'Optional challenge' },
}

export const kanjiAllCharacters = [...kanjiTier1, ...kanjiTier2, ...kanjiTier3, ...kanjiTier4]
