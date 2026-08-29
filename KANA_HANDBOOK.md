# KANA QUEST — PROJECT HANDBOOK

> **Living document.** Update this at the end of every stage. Any new AI session should be able to read this file and understand the whole project without chat history.

---

## 1. What this is

Kana Quest is a Japanese learning web app — hiragana, katakana, kanji and verbs — built as a playful, collectible-card style game. It's a personal learning tool first (shaped around real lesson material from a Japanese teacher), not a commercial product.

**Live:** deployed on Vercel, auto-deploys on push to `master`
**Repo:** `kana-quest` (GitHub: auri88con)
**Brand:** part of the Aurora Labs 88 family

---

## 2. Stack

- **Vite + React** — frontend
- **Plain CSS** — no framework
- **localStorage** — all progress persistence (no backend yet; Firebase planned for Stages 15–17)
- **Fully offline capable**, responsive, mobile-first

---

## 3. Structure

**Main tabs:** Hiragana | Katakana | Kanji | Verbs

**Hiragana & Katakana:** grouped by rows (a, ka, sa, ta, na, ha, ma, ya, ra, wa + ん), each with dakuon, handakuon and yōon sections. Each character card: large character + romaji + example word + illustration.

**Kanji:** 4 difficulty tiers — Tier 1 Beginner (~100 N5, fully populated), Tier 2 Intermediate (N4–N3), Tier 3 Native everyday, Tier 4 Rare (optional).

**Verbs:** 3 tiers — Tier 1 is the teacher's lesson list (40 verbs, sacred: keep matching her material), Tier 2 everyday essentials, Tier 3 native everyday. Each verb has two separate conjugation views: **Polite** (ます/ません/ました/ませんでした) and **Plain** (ない/た/なかった + て-form).

**Game modes:**
- **Flashcard Quiz** — multiple choice or typed romaji, instant feedback, streak/score
- **Reading Game** — 5 difficulty levels, 2-char words up to sentences, forgiving romaji matching
- **Conjugation Quiz** (verbs) — verb + target form → answer


### Codebase map

```
src/
  main.jsx                 entry point
  App.jsx                  top-level view router (home vs. a section), wraps everything in ProgressProvider
  pages/
    Home.jsx                dashboard: aggregate + per-section stats, section cards
    SectionPage.jsx          mode tabs (Learn/Quiz/Reading) + tier tabs (Kanji, Verbs) for one section
  components/
    Header.jsx               logo bar
    CharacterBrowser.jsx      Learn-mode grid for Hiragana/Katakana (main rows + dakuon/handakuon/yoon sub-tabs)
    CharacterCard.jsx         one card: character, romaji, emoji, example word
    KanjiBrowser.jsx          Learn-mode grid for Kanji (flat grid per tier)
    KanjiCard.jsx             like CharacterCard but adds a meaning line
    VerbBrowser.jsx           Learn-mode grid for Verbs (flat grid per tier)
    VerbCard.jsx              dictionary form as hero + the conjugation table for the active style
    FlashcardQuiz.jsx         shared quiz engine for all sections; kanji/verbs pass an `answerModes` prop
                              to add a Reading/Meaning toggle on top of Multiple-Choice/Type
    ConjugationQuiz.jsx       verbs only: verb + target form -> typed or multiple-choice answer
    ReadingGame.jsx           shared reading-game engine; 5 levels, progressive unlock, forgiving romaji
    StreakStat.jsx            the streak pill; escalates animation/colour at streak 5 and 10
    Celebration.jsx           pop-in toast for streak milestones and reading-game level-ups
  context/
    ProgressContext.jsx       thin context wrapper around useProgress
  hooks/
    useProgress.js            all progress-mutating logic: markCharacterSeen, recordQuizAnswer,
                              recordReadingAnswer (reading-game level unlocks), recordConjugationAnswer
  utils/
    storage.js                localStorage read/write, default progress shape, safe merge-on-load
    quiz.js                   pickRandom, buildMultipleChoiceOptions - generic over a `keyFn`
    conjugate.js              the conjugation engine: POLITE_LABELS, PLAIN_LABELS, conjugate(verb)
    romaji.js                 forgiving romaji matching (shi/si, tsu/tu, chi/ti, fu/hu, ja/zya, wo/o, ...)
    messages.js               random encouraging/consoling quiz feedback strings
  data/
    hiragana.js, katakana.js  character sets grouped into main rows / voiced / handakuon / yoon
    kanji.js                  4 tiers of kanji
    verbs.js                  3 tiers of verbs, each tagged with its conjugation group
    readingGame.js            reading-game vocabulary, per section, per level (1-5)
```

Plain CSS, one `.css` file per component, class names global by convention. No TypeScript, no CSS modules, no state library beyond `useProgress` + React Context.

### Data shapes

**`data/hiragana.js` / `data/katakana.js`** — grouped arrays (`...MainRows`, `...Voiced`, `...Handakuon`, `...Yoon`, plus flattened `...AllCharacters` / `...AllGroups`). A group looks like:

```js
{ id: 'a', label: 'あ row', characters: [
  { char: 'あ', romaji: 'a', emoji: '🌅', word: { kana: 'あさ', romaji: 'asa', meaning: 'morning' } },
]}
```

**`data/kanji.js`** — `kanjiTier1`–`kanjiTier4`, plus `kanjiTiers` (keyed 1–4), `kanjiTierMeta` (labels) and `kanjiAllCharacters` (flattened, used by the dashboard):

```js
{ char: '一', romaji: 'ichi', meaning: 'one', emoji: '1️⃣', word: { kana: '一つ', romaji: 'hitotsu', meaning: 'one (thing)' } }
```

`romaji` is the single most common reading in isolation — on'yomi for verb/adjective-type kanji, kun'yomi for standalone native nouns (see the comment block at the top of the file). `meaning` may hold two alternates separated by ` / `, but the meaning quiz only uses the *first*, so prefer a single primary meaning.

**`data/verbs.js`** — `verbTier1`–`verbTier3`, plus `verbTiers`, `verbTierMeta` and `verbAllCharacters`:

```js
{ char: '食べる', kana: 'たべる', hasKanji: true, romaji: 'taberu', meaning: 'to eat', emoji: '🍽️',
  group: 'ichidan', word: { kana: '朝ご飯を食べる', romaji: 'asagohan wo taberu', meaning: 'to eat breakfast' } }
```

`group` is `godan` / `ichidan` / `irregular` and drives `utils/conjugate.js`. `hasKanji: false` marks verbs normally written in kana (もらう, あげる, できる) so the kanji/kana toggle skips them. **Tier 1 is the teacher's lesson list in her exact order — do not reorder or prune it**; new lesson verbs get appended.

**`data/readingGame.js`** — `readingGameWords`, keyed by section then level (`1`–`5`), entries `{ kana, romaji, meaning }`. Levels roughly track written length (L1 = 2 characters, L5 = 5+ or short sentences). `READING_GAME_UNLOCK_THRESHOLD` (currently 5) controls how many correct answers unlock the next level.

Romaji everywhere uses the literal-transliteration convention — long vowels spelled per the actual kana (`koori`, not `kōri`), topic-marker は written `wa`, object-marker を written `wo` (both interchangeable with `o` at match time via `utils/romaji.js`, but they read better in feedback).

### Progress & storage

One JSON blob in `localStorage` under `kana-quest-progress-v1`:

```js
{
  hiragana: { seenCharacters: [...], quiz: { attempts, correct, bestStreak },
              readingGame: { unlockedLevel, attempts, correct, bestStreak, levelProgress: { 1: n, ... } } },
  katakana: { ...same },
  kanji:    { ...same },
  verbs:    { ...same, conjugation: { polite: {...}, plain: {...} } },
}
```

`utils/storage.js` merges saved data onto fresh defaults **section-by-section and field-by-field** (not a shallow top-level spread), so adding a new progress field later doesn't wipe itself back to `undefined` for existing users — that's how `readingGame` and `conjugation` were added without migrations. Keep that pattern, and keep new mastery data SRS-ready (Stage 9 must pick it up without a migration).

### Adding a whole new section

1. Add a data file under `data/` in a compatible shape.
2. Add a `defaultSectionProgress()`-shaped entry in `utils/storage.js`'s `defaultProgress()`.
3. Add it to `SECTION_CONFIG` in `SectionPage.jsx` and `SECTION_META` in `Home.jsx`.
4. The browsers, `FlashcardQuiz` and `ReadingGame` are already generic over `section` — no component changes unless it needs its own answer dimension, in which case pass a custom `answerModes` prop.

To add a kanji or verb tier: add the export, an entry in `...Tiers` and `...TierMeta`, and include it in the flattened `...AllCharacters`. `SectionPage.jsx` builds tier tabs by iterating the meta, so nothing else changes.
---

## 4. Design language

Playful and cartoon-friendly — approachable for kids, still good for adults. Sakura pink / indigo / warm cream / red palette. Rounded shapes, bouncy micro-animations. Characters are the hero of every card.

All shared visual primitives — `.btn`, `.card-surface`, `.pill-tabs`/`.pill-tab`, the `pop-in` / `wiggle` / `correct-bounce` / `flame-flicker` keyframes, and the colour, radius and shadow CSS variables — live in `src/index.css`. The palette is defined once as custom properties on `:root`; component CSS reuses those rather than redefining colours or shadows.

---

## 5. Mascots

Three mascots live in `public/mascots/`:

- **Nyasuke** — black cat samurai, oversized golden kabuto helmet, katana. Confident, cocky, cheeky. (Nod to Yasuke.)
- **Kon** — male nine-tailed fox scholar, round glasses, navy kimono. Smug and studious but hopelessly clumsy — trips over his own tails.
- **Poko** — female tanuki in a school uniform. Full tsundere: acts unimpressed, blush gives her away.

They react after quizzes, celebrate streaks and milestones, and idle on the home screen. **Animate the mascot images with CSS/JS motion — never redraw them as SVG.** Files are JPEGs: `nyasuke.jpg`, `kon.jpg`, `poko.jpg` (1024×1024).

---

## 6. Conventions

- Every stage ends with: test → commit → push (Vercel auto-deploys) → update this handbook
- **This handbook is the single source of truth for project state.** `CLAUDE.md` deliberately stays short (build commands + conventions) and points here; put project detail here, not there
- Data lives in dedicated data files, structured so new content (verbs, decks, tiers) can be added by dropping in a file
- All progress structures should be SRS-ready — mastery data must survive the SRS stage without migration pain
- Never invent Japanese data. Readings, conjugations and meanings must be accurate; irregulars hardcoded, not generated
- Errors and empty states always offer a way forward, never a dead end

---

## 7. Stage history

| Stage | What it added | Status |
|---|---|---|
| 1 | Foundation, full hiragana, flashcard quiz, localStorage | ✅ Done |
| 2 | Full katakana | ✅ Done |
| 3 | Reading game, 5 levels | ✅ Done |
| 4 | Kanji tab, 4 tiers | ✅ Done |
| 5 | Polish & gamification, dashboard, streaks | ✅ Done |
| 6 | Verbs tab — 3 tiers, polite/plain conjugations, conjugation quiz | ✅ Done |
| 6.5 | Feel & flow — PWA, depth pass, navigation, settings, this handbook | ⬜ Next |
| 7 | Radicals system | ⬜ |
| 8 | Mnemonics & stories | ⬜ |
| 9 | Spaced repetition (SRS) | ⬜ |
| 10 | Font trainer | ⬜ |
| 11 | Writing practice | ⬜ |
| 12 | Listening mode | ⬜ |
| 13 | Daily challenge, streaks & achievements | ⬜ |
| 14 | Mascot trio | ⬜ |
| 15–17 | Accounts — Firebase auth, cloud sync, profiles | ⬜ |
| 18 | Burning system | ⬜ |
| 19 | Marquee & showcase | ⬜ |
| 20 | Journey mode (guided lesson path) | 💡 Idea — no brief written yet |

*(Full per-stage briefs — scope, requirements and content lists for Stage 6 through Stage 19 — live in [`kana-quest-stages-6-plus.md`](kana-quest-stages-6-plus.md) in the repo root. That doc is the source of truth for what each stage must deliver; this table is just the index. Stage 20 is an idea only — it has no brief in that doc, and needs one written before it is built.)*

---

## 8. Future ideas (not scheduled)

Streak freeze · leaderboards/leagues · push notification reminders · leveled tap-to-explain reading stories · mascot animated shorts for TikTok (Nano Banana Pro → Seedance 2.0 pipeline)
