const STORAGE_KEY = 'kana-quest-progress-v1'

const defaultSectionProgress = () => ({
  seenCharacters: [],
  quiz: { attempts: 0, correct: 0, bestStreak: 0 },
})

export const defaultProgress = () => ({
  hiragana: defaultSectionProgress(),
  katakana: defaultSectionProgress(),
  kanji: defaultSectionProgress(),
})

export function loadProgress() {
  if (typeof window === 'undefined') return defaultProgress()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()
    const parsed = JSON.parse(raw)
    return { ...defaultProgress(), ...parsed }
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
