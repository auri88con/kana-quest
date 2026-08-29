# Kana Quest

A playful, cartoon-styled web app for learning to read Japanese — Hiragana, Katakana, Kanji and Verbs. Vite + React single-page app, no backend; all progress lives in `localStorage`.

Live: https://kana-quest-eta.vercel.app
Repo: https://github.com/auri88con/kana-quest

## Read this first

**[`KANA_HANDBOOK.md`](KANA_HANDBOOK.md) is the single source of truth for this project** — architecture, codebase map, data file shapes, progress/storage model, design language, mascots, conventions and stage history. Read it before changing anything. Keep project detail there; this file stays short.

**[`kana-quest-stages-6-plus.md`](kana-quest-stages-6-plus.md)** holds the per-stage briefs (Stages 6–19) — what each stage must deliver.

## Commands

```
npm install
npm run dev       # dev server, defaults to http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Conventions

- **Work in stages.** Build the stage that was asked for and stop — don't build ahead into the next one.
- **Every stage ends with:** test → commit → push → update `KANA_HANDBOOK.md`. Pushes to `master` auto-deploy to Vercel (project `kana-quest`, scope `aurora-labs88`), so `vercel --prod` is only needed for local-only changes.
- **Never invent Japanese data.** Readings, conjugations and meanings must be accurate; irregulars hardcoded, never generated. If unsure of a reading, leave the entry out rather than guess.
- **Verbs Tier 1 is the teacher's lesson list** — keep it matching her material, in her order.
- Plain CSS, one `.css` file per component, reusing the shared primitives and palette variables in `src/index.css`. No Tailwind, no CSS modules, no TypeScript, no state library.
- Progress data must stay SRS-ready and merge safely onto defaults field-by-field, so new fields never wipe existing saved progress.
