// Hidden access to the dev tools panel in a production build.
//
// Five taps on the About card, then a four-digit code — the Android developer-
// options gesture. The unlock is remembered so a phone doesn't have to repeat
// it after every reload, and it can be locked again from inside the panel.
//
// This is obscurity, not security. The code sits in the shipped bundle and
// anyone reading the JavaScript can find it. It exists to stop the panel being
// reached by accident, because "mark everything complete" would wipe out the
// real sense of progress the app is trying to build. Never put anything behind
// it that actually needs protecting.

const STORAGE_KEY = 'kana-quest-dev-unlocked'
const CODE = '6896'

export const TAPS_REQUIRED = 5
// The tap run has to be deliberate: pause and it starts again.
export const TAP_WINDOW_MS = 2000
// Only start hinting once it can't really be an accident any more.
export const TAPS_BEFORE_HINT = 3

export function isDevUnlocked() {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function isCorrectCode(input) {
  return input.trim() === CODE
}

export function setDevUnlocked(unlocked) {
  if (typeof window === 'undefined') return
  try {
    if (unlocked) window.localStorage.setItem(STORAGE_KEY, 'true')
    else window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Private browsing and blocked storage: the unlock just won't persist.
  }
}
