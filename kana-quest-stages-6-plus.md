# KANA QUEST — MEGA-PROMPT PART 2 (Stages 6+)

Stages 1–5 are already built and live. Paste each stage below into Claude Code one at a time, in order. Wait for a stage to be complete, tested, committed, and pushed before pasting the next.

Reminder for every stage: commit and push to the **kana-quest** repo with a clear message when done (Vercel auto-deploys), and update CLAUDE.md whenever a stage adds a new system.

---

## STAGE 6 — Verbs Section

Add a new **Verbs** main tab, structured like the Kanji tab: difficulty tiers, character-style cards, and all the existing game modes.

**Tier structure (sub-tabs, like kanji):**
- **Tier 1 — Lesson verbs:** the 40 verbs from my lesson list below, in this exact order. This tier is sacred — keep it matching my teacher's list so the app mirrors my lessons
- **Tier 2 — Everyday essentials:** the next ~60 most commonly used Japanese verbs not already in Tier 1 (think: 知る, 思う, 言う, 分かる, 持つ, 取る, 出る, 入る, 始める, 終わる, できる, なる, 死ぬ, 泳ぐ, 歌う, 教える, 覚える, 忘れる, 開ける, 閉める... fill it out with genuinely high-frequency verbs, accurate readings, no invented data)
- **Tier 3 — Native everyday:** ~100 further verbs Japanese people use daily (N4–N3 frequency range)
- Structure the data files so more tiers or verbs can be added trivially later

**Card design:** kanji form large, kana reading as furigana above it (matching my lesson sheet), romaji, English meaning(s), and an emoji/simple illustration in the app's existing card style. Where a verb is normally written in kana (もらう, あげる, できる), just show the kana.

**Conjugations — two separate tabs: Polite & Plain:**
Inside the Verbs section, add a top-level style switcher with **two completely separate tabs**, each showing its own full 5-form set for every verb:

**Polite tab (ます form):**
1. Dictionary form — 食べる (taberu)
2. Present polite — 食べます (tabemasu)
3. Present negative — 食べません (tabemasen)
4. Past — 食べました (tabemashita)
5. Past negative — 食べませんでした (tabemasen deshita)

**Plain tab (casual form):**
1. Dictionary form — 食べる (taberu) *(this IS the plain present)*
2. Present negative — 食べない (tabenai)
3. Past — 食べた (tabeta)
4. Past negative — 食べなかった (tabenakatta)
5. Include the て-form as the fifth row — 食べて (tabete) — since it's the backbone of casual speech

- The two tabs are fully separate views with separate progress tracking, so I can master polite forms first and treat plain forms as their own challenge later (or vice versa)
- Tag every verb with its group (godan / ichidan / irregular, incl. する verbs and 来る) and generate both conjugation sets from the group rules — then verify them; irregulars and exceptions (行く → 行った, ある → ない) must be hardcoded correctly, never guessed
- On each card: the dictionary form stays the big hero character, with a clean conjugation table underneath showing that tab's 5 forms with kana readings and romaji
- **Conjugations in the games too, not just the browse view:** add a **Conjugation Quiz** mode per tab — shown a verb and a target form ("食べる → past negative?"), answer by typing or multiple choice, in whichever style tab you're in; and let the flashcard/reading games optionally serve conjugated forms once a verb's dictionary form has been practised
- Conjugation practice results feed per-verb, per-style progress tracking

**Game modes — everything the other tabs have:**
- **Flashcard Quiz** per tier: verb → meaning or verb → reading, toggleable, multiple choice or typed
- **Reading Game**: type the romaji for the verb; higher levels can show short verb phrases (コーヒーを飲む → "koohii wo nomu")
- A **kanji/kana toggle** in quizzes: practice recognising verbs in kanji form or kana-only form
- Progress, streaks, and accuracy tracked per tier in localStorage, plugged into the dashboard — and structure mastery data so the SRS stage later picks these up automatically

**Tier 1 — populate with these exactly:**
1. 食べる (たべる, taberu) — eat
2. 飲む (のむ, nomu) — drink
3. 寝る (ねる, neru) — sleep
4. 起きる (おきる, okiru) — wake up
5. 行く (いく, iku) — go
6. 来る (くる, kuru) — come
7. 帰る (かえる, kaeru) — return / go home
8. 見る (みる, miru) — see / watch
9. 聞く (きく, kiku) — listen / ask
10. 話す (はなす, hanasu) — speak
11. 読む (よむ, yomu) — read
12. 書く (かく, kaku) — write
13. 買う (かう, kau) — buy
14. 売る (うる, uru) — sell
15. 作る (つくる, tsukuru) — make
16. 働く (はたらく, hataraku) — work
17. 勉強する (べんきょうする, benkyou suru) — study
18. 遊ぶ (あそぶ, asobu) — play / hang out
19. 走る (はしる, hashiru) — run
20. 歩く (あるく, aruku) — walk
21. 乗る (のる, noru) — ride / get on
22. 降りる (おりる, oriru) — get off
23. 会う (あう, au) — meet
24. 待つ (まつ, matsu) — wait
25. 送る (おくる, okuru) — see off / send
26. もらう (morau) — receive
27. あげる (ageru) — give
28. 借りる (かりる, kariru) — borrow
29. 貸す (かす, kasu) — lend
30. 使う (つかう, tsukau) — use
31. 電話する (でんわする, denwa suru) — call (on the phone)
32. 撮る (とる, toru) — take a photo
33. 洗う (あらう, arau) — wash
34. 着る (きる, kiru) — wear
35. 脱ぐ (ぬぐ, nugu) — take off (shoes/clothes)
36. 入れる (いれる, ireru) — put in
37. 出す (だす, dasu) — take out / put out
38. 座る (すわる, suwaru) — sit
39. 立つ (たつ, tatsu) — stand
40. 休む (やすむ, yasumu) — rest / take a break
<!-- If I give you more lesson verbs later, append them to Tier 1 in order -->

Later stages (radicals, mnemonics, SRS, writing, listening) should treat verbs as first-class content alongside kana and kanji.

---

## STAGE 6.5 — Feel & Flow Pass (PWA + Polish)

Make Kana Quest feel like an installed native app, not a website.

**PWA (installable app):**
- Add a full web app manifest (name, short name, theme colour matching the app palette, icons — generate a proper icon set from the app's branding) and a service worker so the app is fully installable to the home screen on phone and desktop
- Complete offline support: the whole app must work with no connection (it's localStorage-based already, so cache all assets/fonts properly)
- A subtle, dismissible "Install Kana Quest" hint for browsers that support it

**Depth & touch feel (the app currently reads flat):**
- Cards: soft shadow below + subtle 1px lighter top border (light catching the edge), gentle hover lift on desktop
- Pressed state on every tappable thing: slight scale-down + shadow tighten on touch
- Springy transitions between tabs and screens (slide/fade, fast, never sluggish)
- Skeleton shimmer placeholders anywhere content takes a moment
- Restrained — depth, not clutter; keep the playful pastel palette

**Navigation:**
- Wire tab/screen changes into the browser history API so the phone's back button navigates within the app instead of exiting it
- Smooth scroll restoration when returning to a grid

**Settings page:**
- A proper settings screen (gear icon): theme/appearance options, quiz preferences (multiple choice vs typed default, kanji/kana display toggle), sound on/off, and an About section ("Kana Quest by Aurora Labs 88", version number)
- All persisted in localStorage

**Project handbook:**
- Create **KANA_HANDBOOK.md** in the repo root: current feature list, architecture overview, data file structure, design language, stage history, and conventions — a living document kept up to date at the end of every future stage so any new session can onboard without chat history

---

## STAGE 7 — Radicals System

Restructure kanji learning around **radicals** — the building blocks kanji are made from. This makes kanji feel logical instead of random.

- Add a **Radicals section** inside the Kanji tab (its own sub-tab, before the tiers): the ~50 most common radicals, each with its shape, English meaning/nickname, and a simple visual card matching the app's style
- For every Tier 1 kanji, add a **"Built from" breakdown** on its card showing which radicals compose it (e.g. 休 = person + tree → "a person resting against a tree")
- Extend the kanji data structure so every kanji can list its component radicals — populate Tier 1 fully and accurately; flag anything uncertain rather than guessing
- Add a **Radicals flashcard quiz** (same quiz engine as everything else)
- Suggested learning flow shown in the UI: learn radicals first → then the kanji that use them
- Track radical mastery in localStorage like everything else

---

## STAGE 8 — Mnemonics & Stories

Add a memorable story layer on top of the radicals system (WaniKani-style, but in our playful voice):

- Every **radical** gets a 1–2 sentence mnemonic tying its shape to its meaning
- Every **Tier 1 kanji** gets a 2–3 sentence mnemonic story that combines its radicals' meanings into the kanji's meaning (e.g. "A **person** leaning against a **tree** is taking a **rest** — 休")
- Where useful, add a second short mnemonic for the reading
- Show mnemonics on character cards (expandable "How to remember" section) and in quiz feedback when you get one wrong — that's the moment a story sticks
- Tone: punchy, silly, vivid. Silly stories are more memorable than sensible ones
- Also add simple mnemonics for the trickiest-to-confuse kana pairs (シ/ツ, ソ/ン, れ/ね/わ, etc.)
- Keep all mnemonic text in the data files so it's easy to edit or extend later

---

## STAGE 9 — Spaced Repetition (SRS)

Add a spaced repetition system across the whole app:
- Track every character, radical, and word individually in localStorage: times seen, times correct/wrong, and a mastery level (e.g. New → Learning → Familiar → Mastered)
- Correct answers move an item up a level and increase the time before it's shown again; wrong answers knock it down and bring it back sooner
- Add a **Smart Review** mode on the home screen: a mixed quiz built automatically from whatever is due for review right now, across all scripts
- Show due-for-review counts on the dashboard (e.g. "12 items due")
- Keep it beginner-friendly: no jargon like "SRS intervals" in the UI — just "Review time!" and friendly mastery labels with visual progress (e.g. items turning gold when mastered)
- Note: a later stage will extend these mastery levels into a full "burning" system, so keep the level structure easy to extend

---

## STAGE 10 — Font Trainer

Japanese characters can look very different across fonts (さ and き connect their strokes in some fonts but not others, り changes shape, handwritten styles differ from print). Add:
- A **font switcher** in settings: at least 4 Japanese font styles — a standard print font (Mincho-style), a modern sans (Gothic-style), a rounded/maru font, and a handwritten-style font. Load them via Google Fonts (e.g. Noto Serif JP, Noto Sans JP, Zen Maru Gothic, and a handwriting-style JP font) with sensible fallbacks
- A **Font Shuffle** toggle in both quiz modes: every question renders in a randomly chosen font so I learn to recognise characters in any style
- A **font comparison view** on each character card: tap a character to see it displayed side-by-side in all fonts at once
- Make sure font loading doesn't slow the app down (preload, font-display swap)

---

## STAGE 11 — Writing Practice

Add a writing mode for hiragana, katakana, and Tier 1 kanji:
- A drawing canvas where I draw the character with mouse or finger (touch support essential)
- **Stroke order animations**: show the character being drawn stroke by stroke, then let me trace over a faint outline, then draw from memory
- Store stroke-order data locally (use an open dataset like KanjiVG for stroke paths)
- Lenient checking: compare stroke count and rough shape/direction rather than demanding pixel perfection, with encouraging feedback
- Three difficulty levels per character: Watch → Trace → Draw from memory

---

## STAGE 12 — Listening Mode

Add a listening quiz using the browser's built-in speech synthesis (Japanese voice, no external APIs):
- The app speaks a character, word, or short phrase out loud; I type the romaji (or pick from multiple choice on easier difficulty)
- A replay button and a slower-speed button
- Difficulty levels matching the reading game (single characters up to short sentences)
- Combine with SRS: listening results feed into the same mastery tracking
- Handle the case where the browser has no Japanese voice installed: detect it and show a friendly message with instructions

---

## STAGE 13 — Daily Challenge, Streaks & Achievements

Add the daily habit layer:
- A **Daily Challenge**: one short mixed quiz per day (10–15 questions) drawing from all unlocked content, weighted toward due reviews
- **Streak tracking** with a calendar view showing which days I practiced, current streak, and best streak
- **Achievements** with fun cartoon badges: e.g. "First 10 characters mastered", "All dakuon mastered", "7-day streak", "100 correct answers", "Read your first sentence"
- Small celebratory animations when earning badges or extending streaks
- A stats page: total characters mastered per script, accuracy over time, longest streak

Then update CLAUDE.md to document all new systems.

---

## STAGE 14 — Mascot Trio (Nyasuke, Kon & Poko)

The app now has three official mascots. Their images are in `public/mascots/`: `nyasuke` (black samurai cat), `kon` (nine-tailed fox), `poko` (purple-brown tanuki). Check the actual file extensions in that folder and reference them correctly.

**Who they are (personality drives their animations):**
- **Nyasuke** — a tiny black cat samurai (a playful nod to Yasuke). Confident, cocky, cheeky. Wears an oversized golden kabuto helmet that's comically too big and carries a katana.
- **Kon** — a male nine-tailed fox scholar with round glasses and a navy kimono. Smug and studious, but hopelessly clumsy — he trips over his own nine tails constantly. Named after the sound foxes make in Japanese folklore (kon kon).
- **Poko** — a female tanuki in a school uniform, holding a clipboard/briefcase. Full tsundere: acts grumpy and unimpressed, but her blush gives away that she secretly cares a lot. Named after the "pon poko" belly-drum sound of tanuki folklore.

**Integration requirements:**

1. **Quiz result reactions.** After every quiz, flashcard session, or reading game, ONE of the three mascots appears at random with a reaction based on performance:
   - **Great score:** celebration — Nyasuke does a victory jump and his helmet slips over his eyes mid-celebration; Kon does a proud smug bow then trips over a tail; Poko turns away with arms crossed saying something tsundere ("I-it's not like I'm impressed or anything...") while visibly blushing and sneaking a peek
   - **Poor score:** encouragement — Nyasuke dramatically cries anime tears then pumps himself up; Kon adjusts his glasses and offers a slightly smug "study tip" while stumbling; Poko scolds you but her blush shows she believes in you
   - **Beat your previous best:** an extra hyped version of the celebration
2. **Perfect streak celebration.** If the user scores 100% on 10 quizzes in a row, trigger a special full-screen celebration with ALL THREE mascots together — confetti, mochi, cake, the works.
3. **Streak milestone celebrations** (extends the Stage 13 streak system): at 7, 30, 50, 100, 365, and 730 days, show a trio celebration that gets progressively more elaborate and ridiculous at each milestone (day 365 should feel like a festival; day 730 they're practically exploding with pride).
4. **Animation approach:** animate the PNG images with CSS/JS motion — bouncing, jumping, tilting, shaking, squash-and-stretch, plus overlay effects (speech bubbles, sweat drops, anime tears, sparkles, confetti). Do NOT redraw or replace the images with SVG recreations — the PNGs ARE the characters. Speech bubbles carry their personality in short punchy lines; give each character a small pool of varied lines so reactions don't repeat every time.
5. **Home screen presence:** one random mascot hangs out on the home screen each visit, with a subtle idle animation (breathing, occasional blink or bounce) and a tap/click reaction (a little hop plus a personality line).
6. Keep it charming, not intrusive: reactions play for a couple of seconds and never block the user from moving on (tap to skip).

Then update CLAUDE.md with the mascot system documentation.

---

## STAGE 15 — Accounts, Part 1: Auth Foundation

Turn Kana Quest into a multi-account app using **Firebase** (free Spark plan):
- Set up a Firebase project (walk me through the console steps I need to do manually, then wire the config into the app via environment variables — never commit keys)
- Add **Firebase Authentication**: email + password signup and login, plus "Continue with Google" if straightforward
- Build friendly signup/login screens matching the app's playful style (mascot on the login screen welcoming you)
- Add a **Guest mode** button: full app access without an account, progress stays in localStorage exactly as it works today
- Logged-in state shown in the header (avatar/initial + name), with a simple account menu (profile, log out)
- Handle errors gracefully: wrong password, existing email, weak password, offline — all with friendly messages

---

## STAGE 16 — Accounts, Part 2: Cloud Progress Sync

Move progress to per-user cloud storage:
- Store each user's progress in **Firestore** under their user ID: mastery levels, SRS data, streaks, achievements, settings — everything currently in localStorage
- **Migration flow:** when a guest signs up or logs in for the first time, offer to import their existing localStorage progress into their account (one tap)
- **Offline-first:** keep using localStorage as the working copy and sync to Firestore in the background — the app must stay fully usable offline, syncing when connection returns
- Handle conflicts sensibly (most recent data wins per item)
- Multiple accounts on the same device must stay fully separate — logging out and into another account shows that account's progress only
- Keep Firestore reads/writes efficient enough to stay comfortably within the free tier (batch writes, sync on session end / meaningful checkpoints, not on every answer)

---

## STAGE 17 — Accounts, Part 3: Profiles & Polish

Finish the account experience:
- **Profile page:** display name, avatar picker (let users pick one of the three mascots or a colour/emoji avatar), account created date, and their headline stats
- **Account management:** change display name, change password, delete account (with confirmation and full data wipe)
- Per-account settings sync (font choice, quiz preferences, etc.)
- Security pass: Firestore security rules so users can only ever read/write their own data — test this
- Full test pass: signup → play → log out → second account → separate progress → log back in → everything intact
- Update CLAUDE.md with the full auth + sync architecture

---

## STAGE 18 — Burning System

Extend the SRS mastery ladder into a full WaniKani-style progression:
- Mastery stages become: **Apprentice → Guru → Master → Enlightened → Burned**
- **Burned** = truly mastered: the item retires from regular reviews entirely — a big satisfying moment
- A special **burn animation** when an item is burned (flame effect on the card turning it gold/charred-gold) — and the mascots join in: whoever appears gives a special "burned" reaction
- A **Burned collection** page: a trophy-room grid of everything you've burned, filterable by script/tier
- **Unburn option:** tap any burned item to resurrect it back into reviews if you feel it slipping
- Dashboard shows counts per stage (e.g. 24 Apprentice, 13 Guru, 5 Burned) with a satisfying visual
- Migrate existing mastery data into the new stage names without losing anyone's progress

---

## STAGE 19 — Marquee & Showcase

Make the app feel alive with a rotating showcase banner:
- A **marquee banner** on the home screen rotating through: recent achievements earned, latest burns, current streak hype ("🔥 Day 23!"), items due for review, and rotating Japanese learning tips or fun facts
- Smooth auto-rotation with manual swipe/arrows, pausable, never annoying
- Mascots occasionally pop into the banner with a personality line
- With accounts live, show per-user highlights ("Your best week yet — 340 answers!")
- Keep it lightweight and dismissible — it should add charm, not clutter

---

## FUTURE IDEAS (not scheduled yet)

- **Streak Freeze** — earnable protection so one missed day doesn't kill a long streak
- **Leaderboards/leagues** — weekly XP leagues between users (needs accounts, now possible)
- **Notifications** — gentle daily practice reminders (web push)
- **Leveled reading stories** — tap-any-word-to-explain graded stories (Satori Reader-style)
