import { Component } from 'react'
import './ErrorBoundary.css'

// A screen's chunk can go missing for ordinary reasons: a flaky first
// navigation, or a new deploy landing while the app is open (the old hashed
// chunk no longer exists on the server). Without a boundary that unmounts the
// whole app, so catch it, and try one silent reload before showing anything —
// after a deploy the reload alone fixes it.
const CHUNK_ERROR = /dynamically imported module|Importing a module script failed|ChunkLoadError/i
const RELOAD_KEY = 'kana-quest-chunk-reload-at'
const RELOAD_COOLDOWN_MS = 60_000

function isChunkError(error) {
  return CHUNK_ERROR.test(error?.message ?? '')
}

// One auto-reload per minute at most, so a genuinely broken build can never
// put the app in a reload loop.
function mayAutoReload() {
  try {
    const last = Number(window.sessionStorage.getItem(RELOAD_KEY) ?? 0)
    if (Date.now() - last < RELOAD_COOLDOWN_MS) return false
    window.sessionStorage.setItem(RELOAD_KEY, String(Date.now()))
    return true
  } catch {
    return false
  }
}

export default class ErrorBoundary extends Component {
  state = { error: null, resetKey: this.props.resetKey }

  static getDerivedStateFromError(error) {
    return { error }
  }

  // Navigating away (the header still works from the error screen) clears it.
  static getDerivedStateFromProps(props, state) {
    if (props.resetKey === state.resetKey) return null
    return { error: null, resetKey: props.resetKey }
  }

  componentDidCatch(error, info) {
    console.error('Kana Quest hit an error.', error, info)
    if (isChunkError(error) && mayAutoReload()) {
      window.location.reload()
    }
  }

  render() {
    if (!this.state.error) return this.props.children

    const stale = isChunkError(this.state.error)
    return (
      <div className="app-error card-surface anim-pop-in" role="alert">
        <span className="app-error-emoji" aria-hidden="true">🧩</span>
        <h2>{stale ? 'A fresh version just landed' : 'That didn’t go to plan'}</h2>
        <p>
          {stale
            ? 'Kana Quest updated while you were playing, so this screen needs a reload. Your progress is safe.'
            : 'Something broke on this screen. Your progress is saved on this device, so nothing is lost.'}
        </p>
        <div className="app-error-actions">
          <button type="button" className="btn" onClick={() => window.location.reload()}>
            Reload
          </button>
          <button type="button" className="btn btn-outline" onClick={() => window.location.assign('/')}>
            Back to home
          </button>
        </div>
      </div>
    )
  }
}
