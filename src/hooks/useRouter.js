import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { formatView, parseLocation } from '../utils/routes'

function currentView() {
  if (typeof window === 'undefined') return { screen: 'home' }
  return parseLocation(window.location.pathname, window.location.search)
}

/**
 * History-API router for the app's handful of screens.
 *
 * - `navigate(view)` pushes a history entry (screen and mode changes), so the
 *   browser/phone back button steps back through the app. Navigating to the URL
 *   you are already on is a no-op — re-tapping the active tab (or the logo on
 *   home) must not stack entries that make Back look broken
 * - `navigate(view, { replace: true })` swaps the current entry instead — used
 *   for tab refinements (tier, polite/plain, kanji/kana) so the back button
 *   isn't clogged with them
 * - scroll position is stashed on the entry being left and restored on `popstate`,
 *   so coming back to a long character grid lands where you were
 * - the address bar is canonicalised after every parse, so a URL carrying
 *   something the app had to fall back on (`/verbs/learn?tier=4`, which verbs
 *   doesn't have) stops claiming a state the screen isn't in
 */
export function useRouter() {
  const [view, setView] = useState(currentView)
  const pendingScroll = useRef(null)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (view.screen === 'notfound') return
    const canonical = formatView(view)
    if (canonical !== window.location.pathname + window.location.search) {
      window.history.replaceState(window.history.state, '', canonical)
    }
  }, [view])

  useEffect(() => {
    function onPopState(event) {
      pendingScroll.current = event.state?.scrollY ?? 0
      setView(currentView())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useLayoutEffect(() => {
    if (pendingScroll.current === null) return
    const top = pendingScroll.current
    pendingScroll.current = null
    // The restored grid may still be laying out; a frame later is reliably
    // after paint on every browser we care about.
    // Two-argument scrollTo rather than the options object: it is always
    // instant, and it doesn't depend on `behavior: 'instant'` support.
    window.scrollTo(0, top)
    requestAnimationFrame(() => window.scrollTo(0, top))
  }, [view])

  const navigate = useCallback((next, { replace = false } = {}) => {
    const url = formatView(next)
    if (!replace && url === window.location.pathname + window.location.search) return
    if (replace) {
      window.history.replaceState({ ...window.history.state, view: next.screen }, '', url)
    } else {
      // Remember where we were before leaving, so popping back can restore it.
      window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '')
      window.history.pushState({ view: next.screen, scrollY: 0 }, '', url)
      pendingScroll.current = 0
    }
    setView(next)
  }, [])

  return { view, navigate }
}
