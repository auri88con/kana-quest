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
- **localStorage** — all progress *and* preference persistence (no backend yet; Firebase planned for Stages 15–17)
- **Installable PWA** — web app manifest + a build-generated service worker; **fully offline capable**, responsive, mobile-first
- **History-API routing** — hand-rolled (`utils/routes.js` + `hooks/useRouter.js`), no router library

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
index.html                 app shell; PWA meta/manifest links + the pre-paint theme script
vercel.json                SPA rewrite (every route serves index.html) + no-cache headers for sw.js
scripts/
  service-worker.js         service worker source template (plain JS, never bundled)
  vite-plugin-service-worker.js
                            build plugin: stamps the hashed asset list into the template, emits dist/sw.js
  generate-icons.mjs        one-off: rasterises public/icons/icon.svg into the PNG icon set
public/
  manifest.webmanifest      name, colours, icons, section shortcuts
  icons/                    icon.svg (source + favicon) and the generated PNGs
  mascots/                  Nyasuke, Kon, Poko (Stage 14)
src/
  main.jsx                 entry point; registers the service worker in production builds
  App.jsx                  screen switcher driven by useRouter; wraps everything in Settings + Progress providers,
                           lazy-loads SectionPage/Settings behind a Skeleton, renders the install hint
  pages/
    Home.jsx                dashboard: aggregate + per-section stats, section cards
    SectionPage.jsx          mode tabs (Learn/Quiz/Reading) + tier tabs (Kanji, Verbs) for one section;
                             fully controlled by the route — it holds no tab state of its own
    Settings.jsx             appearance, quiz preferences, sound, reset actions, About
  components/
    Header.jsx               logo bar + settings gear
    InstallPrompt.jsx        dismissible "Install Kana Quest" hint (beforeinstallprompt browsers only)
    Skeleton.jsx             shimmer placeholder used as the lazy-screen Suspense fallback
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
    SettingsContext.jsx       thin context wrapper around useSettings
  hooks/
    useProgress.js            all progress-mutating logic: markCharacterSeen, recordQuizAnswer,
                              recordReadingAnswer (reading-game level unlocks), recordConjugationAnswer
    useSettings.js            preference state + persistence, and the side effects that apply it
                              (root data-theme / data-reduce-motion attributes, status-bar theme colour)
    useRouter.js              history-API router: push/replace navigation, popstate, scroll restoration
  utils/
    storage.js                localStorage read/write, default progress shape, safe merge-on-load
    settings.js               preference storage: defaults, merge-on-load, theme option list, theme colours
    routes.js                 URL <-> view mapping (parseLocation / formatView / sectionView)
    sound.js                  synthesised WebAudio blips for correct / wrong / streak milestone
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

### Routing & navigation

Every screen is addressable, so the phone's back button walks back through the app instead of exiting it:

```
/                              home dashboard
/settings                      settings screen
/hiragana                      a section in its default Learn mode
/kanji/quiz?tier=2             a section mode, with its tab state in the query
/verbs/conjugation?tier=1&style=plain
```

`utils/routes.js` is the pure URL↔view mapping (`parseLocation`, `formatView`, `sectionView`); `hooks/useRouter.js` owns the history API. The rules:

- **Screen and mode changes push** a history entry (home → section → Flashcard Quiz → back → Learn)
- **Refinement tabs replace** it (tier, polite/plain, kanji/kana) so back isn't clogged with them — `navigate(view, { replace: true })`
- `SectionPage` holds **no tab state of its own** — mode/tier/style/script come in as `view` props and go out through `onChange`. A new tab dimension means adding it to `routes.js` first
- Anything unparseable resolves to the `notfound` screen (a card with a way home), never a throw
- Scroll position is stashed on the entry being left and restored on `popstate`, with `history.scrollRestoration = 'manual'` — coming back to a long grid lands where you were
- Deep links need the host to serve `index.html` for unknown paths: that's what `vercel.json`'s rewrite does (and what the service worker does offline)

### Settings & preferences

A second localStorage blob, `kana-quest-settings-v1`, kept separate from progress and merged onto defaults the same field-by-field way:

```js
{ theme: 'system' | 'light' | 'dark',
  reduceMotion: false,
  sound: true,
  quiz: { answerMode: 'choice' | 'type', verbScript: 'char' | 'kana' },
  installHintDismissed: false }
```

`useSettings` applies them as side effects rather than prop-drilling: `data-theme` and `data-reduce-motion` on `<html>` (the CSS does the rest) plus the `<meta name="theme-color">` tint. `index.html` runs a tiny inline script that reads the same key before first paint, so a dark-theme user never sees a flash of cream — **if the storage key or theme shape changes, that script has to change with it.**

Settings → About shows the version from `package.json`, injected as the `__APP_VERSION__` define in `vite.config.js` — bump `version` when a stage ships (Stage 6.5 set it to `0.6.5`).

Preferences are defaults, not locks: `quiz.answerMode` seeds a quiz's input toggle and `quiz.verbScript` fills in the kanji/kana tab when the URL doesn't name one, but either can still be switched in the moment. Sound is synthesised in `utils/sound.js` (WebAudio, no audio files to ship or cache) and every call site gates on `settings.sound`.

### PWA & offline

- **Manifest** (`public/manifest.webmanifest`): standalone display, cream theme, the icon set, and shortcuts straight into each section (`/hiragana`, `/kanji`, …)
- **Icons**: `public/icons/icon.svg` is the source of truth (and the favicon). `node scripts/generate-icons.mjs` re-rasterises the PNGs — any/maskable at 192 and 512, plus the 180px apple-touch icon — with Playwright's Chromium. Regenerate and commit them whenever the artwork changes
- **Service worker**: `scripts/service-worker.js` is a plain-JS template; `scripts/vite-plugin-service-worker.js` stamps in the build's hashed asset list and a cache name derived from it, then emits `dist/sw.js`. A changed build ⇒ a new cache name ⇒ old caches dropped on activate. Build-only, so `npm run dev` stays cache-free
- **What's precached**: the app shell, every JS/CSS chunk, the woff2 fonts, the manifest and the icons. Deliberately *not* precached: source maps, the woff twins of the woff2 fonts, and the mascot art — those fall to the runtime cache on first use. Fonts are imported as **latin subsets only** (`@fontsource/nunito/latin-400.css`), since the Japanese glyphs come from the system font and the other subsets would be dead weight in the cache
- **Navigations** are served cache-first from the shell, so a deep link opened offline still boots. The shell is cached by hand (not via `addAll`) because a host that redirects `/index.html` → `/` returns a response flagged as redirected, and handing one of those to a navigation throws
- **Install hint**: `InstallPrompt` shows only where `beforeinstallprompt` fires, and remembers its dismissal in settings

### Adding a whole new section

1. Add a data file under `data/` in a compatible shape.
2. Add a `defaultSectionProgress()`-shaped entry in `utils/storage.js`'s `defaultProgress()`.
3. Add it to `SECTION_CONFIG` in `SectionPage.jsx` and `SECTION_META` in `Home.jsx`.
4. The browsers, `FlashcardQuiz` and `ReadingGame` are already generic over `section` — no component changes unless it needs its own answer dimension, in which case pass a custom `answerModes` prop.

To add a kanji or verb tier: add the export, an entry in `...Tiers` and `...TierMeta`, and include it in the flattened `...AllCharacters`. `SectionPage.jsx` builds tier tabs by iterating the meta, so nothing else changes.
---

## 4. Design language

Playful and cartoon-friendly — approachable for kids, still good for adults. Sakura pink / indigo / warm cream / red palette. Rounded shapes, bouncy micro-animations. Characters are the hero of every card.

All shared visual primitives — `.btn` (+ `-sakura`/`-outline`/`-danger`), `.icon-btn`, `.back-btn`, `.card-surface`, `.pill-tabs`/`.pill-tab`, `.skeleton`, the `pop-in` / `wiggle` / `correct-bounce` / `flame-flicker` / `view-in` / `pane-in` / `slide-up` / `shimmer` keyframes, and the colour, radius and shadow CSS variables — live in `src/index.css`. Component CSS reuses those rather than redefining colours or shadows.

**Hue tokens vs. role tokens.** `:root` defines both: hue tokens (`--color-sakura`, `--color-indigo`, `--color-gold` …) keep their value in every theme, while role tokens are what components should actually reach for — `--color-surface`, `--color-surface-alt`, `--color-ink`, `--color-heading`, `--color-text-muted`, `--color-text-faint`, `--color-border`, `--color-border-soft`, `--color-on-accent` (text on an accent fill, always white), `--color-accent-text` (indigo as *text*, lightened in dark), `--color-success-soft`, `--color-danger-soft`, `--color-page-top`/`--color-page-bottom`. The `:root[data-theme='dark']` block re-points **only the role tokens**, so anything written in roles is themed for free. Adding a hardcoded hex to a component stylesheet is the one thing that breaks dark mode.

**Depth (Stage 6.5).** Cards get `--shadow-card`: a 1px light top edge (`inset 0 1px 0 var(--edge-highlight)`, light catching the edge) + a solid stacked shadow for the cartoon cut-out look + a soft ambient one; `--shadow-card-hover` and `--shadow-card-press` are the lifted and pressed variants. Rules of the depth pass:

- **Every tappable thing has a pressed state** — a small scale-down plus a tightened shadow, on `:active`
- **Hover lift is desktop-only**, inside `@media (hover: hover) and (pointer: fine)` — on touch a hover style just sticks
- `--ease-spring` (`cubic-bezier(0.34, 1.56, 0.64, 1)`) is the house easing for anything that should feel springy
- Screen changes animate via `.view-swap` (keyed on the route in `App.jsx`), tab changes via `.section-pane` (keyed on mode/tier/style/script) — fast, never sluggish
- `.skeleton` + `Skeleton.jsx` cover anything that takes a moment (today: the lazily-loaded section and settings chunks)
- **Motion is opt-out**: both `@media (prefers-reduced-motion: reduce)` and the Settings toggle (`:root[data-reduce-motion='true']`) collapse animation and transition durations

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
- Screens are addressable: a new screen or tab dimension goes into `utils/routes.js` first, so the back button keeps working
- Component CSS uses **role tokens**, never raw hex — that's what keeps light and dark themes in step
- Preferences belong in `utils/settings.js` (defaults + merge-on-load), progress in `utils/storage.js`; never mix the two blobs
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
| 6.5 | Feel & flow — installable PWA + offline, depth/press/motion pass, dark theme, history-API navigation, settings screen | ✅ Done |
| 7 | Radicals system | ⬜ Next |
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
