import { useCallback, useEffect, useMemo, useState } from 'react'
import { defaultSettings, loadSettings, saveSettings, THEME_COLORS } from '../utils/settings'

const DARK_QUERY = '(prefers-color-scheme: dark)'

function systemPrefersDark() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia(DARK_QUERY).matches
}

export function useSettings() {
  const [settings, setSettings] = useState(loadSettings)
  const [systemDark, setSystemDark] = useState(systemPrefersDark)

  useEffect(() => {
    saveSettings(settings)
  }, [settings])

  // Only matters while the theme is 'system', but the listener is cheap and
  // keeping it unconditional keeps the hook order simple.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    const media = window.matchMedia(DARK_QUERY)
    const onChange = (event) => setSystemDark(event.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const resolvedTheme = settings.theme === 'system' ? (systemDark ? 'dark' : 'light') : settings.theme

  // The palette lives in CSS: this just flips the root attributes the palette
  // and the motion rules key off (and re-tints the phone status bar).
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.style.colorScheme = resolvedTheme
    let meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', THEME_COLORS[resolvedTheme])
  }, [resolvedTheme])

  useEffect(() => {
    document.documentElement.dataset.reduceMotion = settings.reduceMotion ? 'true' : 'false'
  }, [settings.reduceMotion])

  const setSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }, [])

  const setQuizSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, quiz: { ...prev.quiz, [key]: value } }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings())
  }, [])

  return useMemo(
    () => ({ settings, resolvedTheme, systemDark, setSetting, setQuizSetting, resetSettings }),
    [settings, resolvedTheme, systemDark, setSetting, setQuizSetting, resetSettings],
  )
}
