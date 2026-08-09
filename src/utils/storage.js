import { READING_GAME_LEVELS } from '../data/readingGame'

const STORAGE_KEY = 'kana-quest-progress-v1'

const defaultReadingGameProgress = () => ({
  unlockedLevel: 1,
  attempts: 0,
  correct: 0,
  bestStreak: 0,
  levelProgress: Object.fromEntries(READING_GAME_LEVELS.map((level) => [level, 0])),
})

const defaultSectionProgress = () => ({
  seenCharacters: [],
  quiz: { attempts: 0, correct: 0, bestStreak: 0 },
  readingGame: defaultReadingGameProgress(),
})

// verbMastery is keyed by verb `char` -> { attempts, correct, lastCorrect,
// lastPracticedAt } — a normalized per-verb accuracy/recency record a future
// SRS stage can schedule from, without any SRS logic needed yet.
const defaultConjugationStyleProgress = () => ({
  attempts: 0,
  correct: 0,
  bestStreak: 0,
  verbMastery: {},
})

const defaultVerbSectionProgress = () => ({
  seenCharacters: [],
  quiz: { attempts: 0, correct: 0, bestStreak: 0 },
  readingGame: defaultReadingGameProgress(),
  conjugation: {
    polite: defaultConjugationStyleProgress(),
    plain: defaultConjugationStyleProgress(),
  },
})

export const defaultProgress = () => ({
  hiragana: defaultSectionProgress(),
  katakana: defaultSectionProgress(),
  kanji: defaultSectionProgress(),
  verbs: defaultVerbSectionProgress(),
})

function mergeConjugationStyleProgress(defaults, saved) {
  if (!saved) return defaults
  return {
    ...defaults,
    ...saved,
    verbMastery: { ...defaults.verbMastery, ...saved.verbMastery },
  }
}

// Merges saved progress onto fresh defaults section-by-section (rather than a
// shallow top-level spread) so progress saved before a new nested field was
// introduced (e.g. readingGame, conjugation) doesn't wipe that field back to
// undefined.
function mergeSectionProgress(defaults, saved) {
  if (!saved) return defaults
  const merged = {
    ...defaults,
    ...saved,
    quiz: { ...defaults.quiz, ...saved.quiz },
    readingGame: {
      ...defaults.readingGame,
      ...saved.readingGame,
      levelProgress: { ...defaults.readingGame.levelProgress, ...saved.readingGame?.levelProgress },
    },
  }
  if (defaults.conjugation) {
    merged.conjugation = {
      polite: mergeConjugationStyleProgress(defaults.conjugation.polite, saved.conjugation?.polite),
      plain: mergeConjugationStyleProgress(defaults.conjugation.plain, saved.conjugation?.plain),
    }
  }
  return merged
}

export function loadProgress() {
  if (typeof window === 'undefined') return defaultProgress()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()
    const parsed = JSON.parse(raw)
    const defaults = defaultProgress()
    const merged = {}
    for (const key of Object.keys(defaults)) {
      merged[key] = mergeSectionProgress(defaults[key], parsed[key])
    }
    return merged
  } catch (err) {
    console.warn('Failed to load Kana Quest progress, starting fresh.', err)
    return defaultProgress()
  }
}

export function saveProgress(progress) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (err) {
    console.warn('Failed to save Kana Quest progress.', err)
  }
}
