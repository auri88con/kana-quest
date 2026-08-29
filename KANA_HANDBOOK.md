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

---

## 4. Design language

Playful and cartoon-friendly — approachable for kids, still good for adults. Sakura pink / indigo / warm cream / red palette. Rounded shapes, bouncy micro-animations. Characters are the hero of every card.

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
| 20 | Journey mode (guided lesson path) | ⬜ |

*(Full stage briefs for Stage 6.5 onward are not yet written down — capture them in `kana-quest-stages-6-plus.md` when they are.)*

---

## 8. Future ideas (not scheduled)

Streak freeze · leaderboards/leagues · push notification reminders · leveled tap-to-explain reading stories · mascot animated shorts for TikTok (Nano Banana Pro → Seedance 2.0 pipeline)
