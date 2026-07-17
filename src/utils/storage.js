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

export const defaultProgress = () => ({
  hiragana: defaultSectionProgress(),
  katakana: defaultSectionProgress(),
  kanji: defaultSectionProgress(),
})

// Merges saved progress onto fresh defaults section-by-section (rather than a
// shallow top-level spread) so progress saved before a new nested field was
// introduced (e.g. readingGame) doesn't wipe that field back to undefined.
function mergeSectionProgress(defaults, saved) {
  if (!saved) return defaults
  return {
    ...defaults,
    ...saved,
    quiz: { ...defaults.quiz, ...saved.quiz },
    readingGame: {
      ...defaults.readingGame,
      ...saved.readingGame,
      levelProgress: { ...defaults.readingGame.levelProgress, ...saved.readingGame?.levelProgress },
    },
  }
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
