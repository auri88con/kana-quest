# Kana Quest

A playful, cartoon-styled web app for learning to read Japanese — Hiragana, Katakana, and Kanji — built as a Vite + React single-page app with no backend. All progress lives in `localStorage`.

Live: https://kana-quest-eta.vercel.app
Repo: https://github.com/auri88con/kana-quest

## Stack

- Vite + React (JSX, no TypeScript)
- Plain CSS per component (no Tailwind, no CSS modules — class names are global by convention, one `.css` file per component)
- No external state library — a single `useProgress` hook + React Context
- No backend, no auth, no build-time data fetching — everything is static JS data files bundled at build time

## Running it

```
npm install
npm run dev      # dev server, defaults to http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

Deploys to Vercel via `vercel --prod` (project `kana-quest` under the `aurora-labs88` scope). Not currently wired to auto-deploy on push — redeploy manually after merging changes you want live.

## App structure

Three top-level sections — **Hiragana**, **Katakana**, **Kanji** — each with three modes: **Learn** (browse cards), **Flashcard Quiz**, and **Reading Game**. Kanji additionally has 4 difficulty **tiers** (Beginner/Intermediate/Native everyday/Rare) that scope the Learn and Quiz modes; the Reading Game uses its own independent 5-level system shared by all three sections.

```
src/
  main.jsx                 entry point
  App.jsx                  top-level view router (home vs. a section), wraps everything in ProgressProvider
  pages/
    Home.jsx                dashboard: aggregate + per-section stats, section cards
    SectionPage.jsx          mode tabs (Learn/Quiz/Reading) + tier tabs (Kanji only) for one section
  components/
    Header.jsx               logo bar
    CharacterBrowser.jsx      Learn-mode grid for Hiragana/Katakana (main rows + dakuon/handakuon/yōon sub-tabs)
    CharacterCard.jsx         one flippable-feeling card: character, romaji, emoji, example word
    KanjiBrowser.jsx          Learn-mode grid for Kanji (flat grid per tier, no row grouping)
    KanjiCard.jsx             like CharacterCard but adds a meaning line (kanji cards need it, kana cards don't)
    FlashcardQuiz.jsx         shared quiz engine for all 3 sections; kanji passes an `answerModes` prop to add
                              a Reading/Meaning toggle on top of the existing Multiple-Choice/Type toggle
    ReadingGame.jsx           shared reading-game engine for all 3 sections; 5 levels, progressive unlock,
                              forgiving romaji matching
    StreakStat.jsx            the 🔥 streak pill; escalates animation/color at streak 5 and 10
    Celebration.jsx           the pop-in toast used for streak milestones and reading-game level-ups
  context/
    ProgressContext.jsx       thin context wrapper around useProgress
  hooks/
    useProgress.js            all progress-mutating logic: markCharacterSeen, recordQuizAnswer,
                              recordReadingAnswer (handles reading-game level-unlock logic)
  utils/
    storage.js                localStorage read/write + the default progress shape + safe merge-on-load
                              (so adding new progress fields later doesn't wipe old saved data)
    quiz.js                   pickRandom, buildMultipleChoiceOptions — both generic over a `keyFn` so they
                              work for romaji-based kana quizzes and meaning-or-reading kanji quizzes alike
    romaji.js                 forgiving romaji matching (shi/si, tsu/tu, chi/ti, fu/hu, ja/zya, wo/o, …)
    messages.js                random encouraging/consoling quiz feedback strings
  data/
    hiragana.js, katakana.js  character sets grouped into main rows / voiced / handakuon / yōon
    kanji.js                   4 tiers of kanji (see below)
    readingGame.js              reading-game vocabulary, per section, per level (1–5)
```

## Data files — shapes and where to add content

### `data/hiragana.js` / `data/katakana.js`

Each exports grouped arrays (`hiraganaMainRows`, `hiraganaVoiced`, `hiraganaHandakuon`, `hiraganaYoon`, and the flattened `hiraganaAllCharacters` / `hiraganaAllGroups`). A group looks like:

```js
{ id: 'a', label: 'あ row', characters: [
  { char: 'あ', romaji: 'a', emoji: '🌅', word: { kana: 'あさ', romaji: 'asa', meaning: 'morning' } },
  ...
]}
```

To add a character: append it to the right group's `characters` array with the same 4 fields. `word.kana` is displayed as-is (can be kana or kanji+kana), `word.romaji` should follow the existing literal-transliteration convention already used in the file (long vowels spelled out per the actual kana, e.g. `koori` not `kōri`).

### `data/kanji.js`

Four exports — `kanjiTier1` (JLPT N5, fully populated, ~105 kanji), `kanjiTier2` (N4–N3 starter set), `kanjiTier3` (common everyday jōyō starter set), `kanjiTier4` (rare/optional-challenge starter set) — plus `kanjiTiers` (keyed 1–4), `kanjiTierMeta` (tier labels), and `kanjiAllCharacters` (flattened, used for the Home dashboard total). Entry shape:

```js
{ char: '一', romaji: 'ichi', meaning: 'one', emoji: '1️⃣', word: { kana: '一つ', romaji: 'hitotsu', meaning: 'one (thing)' } }
```

Notes for adding kanji:
- `romaji` is the single most common reading in isolation — on'yomi for verb/adjective-type kanji (matching common compounds), kun'yomi for standalone native nouns. See the comment block at the top of the file for the full rationale.
- `meaning` can hold a single word, or two alternates separated by ` / ` (e.g. `"before / front"`) — `FlashcardQuiz`'s meaning-quiz mode only ever uses the *first* alternate for multiple-choice options and displayed feedback, but typed-mode isn't currently leniency-checked against the second alternate, so prefer a single primary meaning unless a genuine double-meaning is unavoidable.
- `word` should be a real, verifiable word — don't invent one. If genuinely unsure of a reading, leave the kanji out rather than guess (this app treats accuracy as more important than coverage, especially for kanji).
- To grow Tier 2/3/4, just append more entries — the starter sets are intentionally small and the shape is identical to Tier 1, so there's no structural work needed, only content.
- To add a Tier 5, add a new `kanjiTier5` export, an entry in `kanjiTiers` and `kanjiTierMeta`, and include it in the `kanjiAllCharacters` spread — `SectionPage.jsx` builds its tier tabs by iterating `kanjiTierMeta`, so no other code changes are needed.

### `data/readingGame.js`

`readingGameWords` is keyed by section (`hiragana` / `katakana` / `kanji`), then by level (`1`–`5`). Each entry:

```js
{ kana: 'ねこ', romaji: 'neko', meaning: 'cat' }
```

`kana` can contain kanji too (it's just "the text shown as the prompt"). Levels are meant to roughly track written length: L1 = 2-character words, up to L5 = 5+ character words or short sentences. `READING_GAME_UNLOCK_THRESHOLD` (currently 5) in this file controls how many correct answers at a level unlock the next one — change it once, it applies everywhere via `useProgress.js`.

To add vocabulary: append to the right section/level array with the same 3 fields. Same accuracy bar as kanji — real words/sentences only, and romaji should use the literal-transliteration convention (see existing entries), including writing the topic-marker は as `wa` and the object-marker を as `wo` (both interchangeable with `o` at match time via `utils/romaji.js`, but `wa`/`wo` read better in the feedback UI).

## Progress & storage shape

One JSON blob in `localStorage` under key `kana-quest-progress-v1`, structured as:

```js
{
  hiragana: { seenCharacters: [...chars], quiz: { attempts, correct, bestStreak }, readingGame: { unlockedLevel, attempts, correct, bestStreak, levelProgress: {1: n, 2: n, ...} } },
  katakana: { ...same shape },
  kanji:    { ...same shape },
}
```

`utils/storage.js` merges saved data onto fresh defaults **section-by-section and field-by-field** (not a shallow top-level spread) specifically so that adding a new progress field later (like `readingGame` was added in Stage 3) doesn't silently wipe itself back to `undefined` for users with older saved progress. Keep that pattern if you add another nested field.

## Adding a whole new section (e.g. if a "Vocabulary" tab were added later)

1. Add a data file under `data/` in a compatible shape (characters need `char`/`romaji`/`emoji`/`word`, or reuse the kanji shape if it needs a `meaning` too).
2. Add a `defaultSectionProgress()`-shaped entry for it in `utils/storage.js`'s `defaultProgress()`.
3. Add it to `SECTION_CONFIG` in `SectionPage.jsx` and `SECTION_META` in `Home.jsx`.
4. `CharacterBrowser`/`KanjiBrowser`, `FlashcardQuiz`, and `ReadingGame` are already generic over `section` — no component changes needed unless the new section needs its own quiz-answer dimension (like kanji's Reading/Meaning toggle), in which case pass a custom `answerModes` prop.

## Design system

All shared visual primitives (`.btn`, `.card-surface`, `.pill-tabs`/`.pill-tab`, the `pop-in`/`wiggle`/`correct-bounce`/`flame-flicker` keyframes, and the color/radius/shadow CSS variables) live in `src/index.css`. Component-specific CSS files should reuse these rather than redefining colors or shadows — the palette (sakura pink, indigo, cream, hinomaru red) is defined once as CSS custom properties on `:root`.
