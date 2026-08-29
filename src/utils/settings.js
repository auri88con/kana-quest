// User preferences (appearance, quiz defaults, sound) — kept separate from
// `utils/storage.js`, which owns learning progress. Same merge-on-load rule
// applies: saved values are merged onto fresh defaults field-by-field, so a
// preference added in a later stage never reads back as `undefined`.

export const SETTINGS_STORAGE_KEY = 'kana-quest-settings-v1'

export const THEME_OPTIONS = [
  { key: 'system', label: 'System', hint: 'Follow your device' },
  { key: 'light', label: 'Light', hint: 'Warm cream' },
  { key: 'dark', label: 'Dark', hint: 'Evening indigo' },
]

export const defaultSettings = () => ({
  theme: 'system', // 'system' | 'light' | 'dark'
  reduceMotion: false,
  sound: true,
  quiz: {
    answerMode: 'choice', // 'choice' | 'type' — the input every quiz opens with
    verbScript: 'char', // 'char' | 'kana' — kanji or kana-only verb prompts
  },
  installHintDismissed: false,
})

export function loadSettings() {
  const defaults = defaultSettings()
  if (typeof window === 'undefined') return defaults
  try {
    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY)
    if (!raw) return defaults
    const saved = JSON.parse(raw)
    return {
      ...defaults,
      ...saved,
      quiz: { ...defaults.quiz, ...saved?.quiz },
    }
  } catch (err) {
    console.warn('Failed to load Kana Quest settings, using defaults.', err)
    return defaults
  }
}

export function saveSettings(settings) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
  } catch (err) {
    console.warn('Failed to save Kana Quest settings.', err)
  }
}

// Theme colours mirrored from the palettes in index.css — used for the
// <meta name="theme-color"> tint of the phone status bar in standalone mode.
export const THEME_COLORS = {
  light: '#fffaf0',
  dark: '#221f33',
}
