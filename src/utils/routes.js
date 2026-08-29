// URL <-> view mapping. Every screen the app can show is addressable, so the
// phone's back button walks back through the app instead of leaving it, and a
// deep link (or a manifest shortcut like /verbs) opens the right screen.
//
//   /                       home dashboard
//   /settings               settings screen
//   /hiragana               a section, in its default Learn mode
//   /kanji/quiz?tier=2      a section mode, with its tab state in the query
//   /verbs/conjugation?tier=1&style=plain
//
// Anything unrecognised resolves to the `notfound` screen rather than throwing.

export const SECTIONS = ['hiragana', 'katakana', 'kanji', 'verbs']

export const SECTION_MODES = {
  hiragana: ['learn', 'quiz', 'reading'],
  katakana: ['learn', 'quiz', 'reading'],
  kanji: ['learn', 'quiz', 'reading'],
  verbs: ['learn', 'quiz', 'reading', 'conjugation'],
}

export const HOME_VIEW = { screen: 'home' }

const STYLES = ['polite', 'plain']
const SCRIPTS = ['char', 'kana']
const MAX_TIER = 4

function parseTier(raw) {
  const tier = Number(raw)
  return Number.isInteger(tier) && tier >= 1 && tier <= MAX_TIER ? tier : 1
}

export function parseLocation(pathname, search = '') {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return { ...HOME_VIEW }
  if (segments.length === 1 && segments[0] === 'settings') return { screen: 'settings' }

  const [section, rawMode] = segments
  if (!SECTIONS.includes(section) || segments.length > 2) return { screen: 'notfound' }

  const modes = SECTION_MODES[section]
  const mode = rawMode ?? 'learn'
  if (!modes.includes(mode)) return { screen: 'notfound' }

  const params = new URLSearchParams(search)
  const style = params.get('style')
  const script = params.get('script')

  return {
    screen: 'section',
    section,
    mode,
    tier: parseTier(params.get('tier')),
    style: STYLES.includes(style) ? style : 'polite',
    // Left null when absent so the section page can fall back to the user's
    // saved kanji/kana preference instead of a hardcoded default.
    script: SCRIPTS.includes(script) ? script : null,
  }
}

export function formatView(view) {
  if (view.screen === 'settings') return '/settings'
  if (view.screen !== 'section') return '/'

  const params = new URLSearchParams()
  if (view.tier && view.tier !== 1) params.set('tier', String(view.tier))
  if (view.style && view.style !== 'polite') params.set('style', view.style)
  if (view.script) params.set('script', view.script)

  const query = params.toString()
  const path = view.mode && view.mode !== 'learn' ? `/${view.section}/${view.mode}` : `/${view.section}`
  return query ? `${path}?${query}` : path
}

const SECTION_LABELS = {
  hiragana: 'Hiragana',
  katakana: 'Katakana',
  kanji: 'Kanji',
  verbs: 'Verbs',
}

const MODE_LABELS = {
  learn: 'Learn',
  quiz: 'Flashcard Quiz',
  reading: 'Reading Game',
  conjugation: 'Conjugation Quiz',
}

// Spoken by the route announcer after each navigation, so screen-reader users
// hear where they landed.
export function viewLabel(view) {
  if (view.screen === 'settings') return 'Settings'
  if (view.screen === 'notfound') return 'Page not found'
  if (view.screen === 'section') return `${SECTION_LABELS[view.section]}, ${MODE_LABELS[view.mode]}`
  return 'Home'
}

export function sectionView(section, patch = {}) {
  return { screen: 'section', section, mode: 'learn', tier: 1, style: 'polite', script: null, ...patch }
}
