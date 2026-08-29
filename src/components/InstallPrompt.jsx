import { useEffect, useState } from 'react'
import { useSettingsContext } from '../context/SettingsContext'
import './InstallPrompt.css'

function isStandalone() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true
}

/**
 * A dismissible "Install Kana Quest" hint. Only ever appears in browsers that
 * fire `beforeinstallprompt` (Chrome/Edge/Android) — elsewhere it stays silent
 * rather than nagging with manual instructions. Dismissal is remembered in the
 * settings blob, so it asks once.
 */
export default function InstallPrompt() {
  const { settings, setSetting } = useSettingsContext()
  const [installEvent, setInstallEvent] = useState(null)

  useEffect(() => {
    function onBeforeInstallPrompt(event) {
      event.preventDefault()
      setInstallEvent(event)
    }
    function onInstalled() {
      setInstallEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (!installEvent || settings.installHintDismissed || isStandalone()) return null

  function dismiss() {
    setSetting('installHintDismissed', true)
    setInstallEvent(null)
  }

  async function install() {
    try {
      await installEvent.prompt()
      await installEvent.userChoice
    } catch (err) {
      console.warn('Install prompt failed.', err)
    }
    dismiss()
  }

  return (
    <div className="install-prompt anim-slide-up" role="dialog" aria-label="Install Kana Quest">
      <span className="install-prompt-icon" aria-hidden="true">📲</span>
      <div className="install-prompt-text">
        <strong>Install Kana Quest</strong>
        <span>Add it to your home screen — it works offline.</span>
      </div>
      <div className="install-prompt-actions">
        <button type="button" className="btn btn-sakura install-prompt-cta" onClick={install}>
          Install
        </button>
        <button type="button" className="icon-btn" onClick={dismiss} aria-label="Dismiss install hint">
          <span aria-hidden="true">✕</span>
        </button>
      </div>
    </div>
  )
}
