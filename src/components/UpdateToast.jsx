import { useEffect, useState } from 'react'
import './UpdateToast.css'

/**
 * Tells you when a new build has taken over.
 *
 * The service worker serves navigations from its cache, so a deploy lands
 * silently: the new worker installs in the background and the *next* load is
 * the new version. Without this, the app just looks stale. When the new worker
 * claims the page (`controllerchange`), we offer the reload that swaps it in.
 *
 * Ignores the very first controller a page ever gets — that's the initial
 * install, not an update.
 */
export default function UpdateToast() {
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return undefined
    const hadController = !!navigator.serviceWorker.controller
    if (!hadController) return undefined

    function onControllerChange() {
      setUpdated(true)
    }
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange)
    return () => navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange)
  }, [])

  if (!updated) return null

  return (
    <div className="toast-bar update-toast anim-slide-up" role="status">
      <span className="toast-bar-icon" aria-hidden="true">✨</span>
      <div className="toast-bar-text">
        <strong>New version ready</strong>
        <span>Refresh to pick up the latest Kana Quest.</span>
      </div>
      <div className="toast-bar-actions">
        <button type="button" className="btn update-toast-cta" onClick={() => window.location.reload()}>
          Refresh
        </button>
        <button type="button" className="icon-btn" onClick={() => setUpdated(false)} aria-label="Dismiss update notice">
          <span aria-hidden="true">✕</span>
        </button>
      </div>
    </div>
  )
}
