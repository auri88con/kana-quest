import { useEffect, useRef, useState } from 'react'
import { TAPS_REQUIRED, TAP_WINDOW_MS, TAPS_BEFORE_HINT, isCorrectCode } from '../utils/devAccess'
import './DevUnlock.css'

/**
 * The About card, doubling as the way in to the dev tools.
 *
 * Five taps within a couple of seconds each, then the code. The tap run resets
 * if you pause, so it takes intent rather than fidgeting. Nothing about the
 * card looks interactive until you are most of the way there.
 */
export default function DevUnlock({ version, onUnlock }) {
  const [taps, setTaps] = useState(0)
  const [asking, setAsking] = useState(false)
  const [code, setCode] = useState('')
  const [wrong, setWrong] = useState(false)
  const resetTimer = useRef(null)
  // The count lives in a ref, not in state: taps that land faster than React
  // re-renders would otherwise each read the same stale value and never add up.
  // State only mirrors it for the "n more taps…" hint.
  const tapCount = useRef(0)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  function forgetTaps() {
    tapCount.current = 0
    setTaps(0)
  }

  function handleTap() {
    if (asking) return
    clearTimeout(resetTimer.current)
    tapCount.current += 1
    if (tapCount.current >= TAPS_REQUIRED) {
      forgetTaps()
      setAsking(true)
      return
    }
    setTaps(tapCount.current)
    resetTimer.current = setTimeout(forgetTaps, TAP_WINDOW_MS)
  }

  function submit(event) {
    event.preventDefault()
    if (isCorrectCode(code)) {
      setAsking(false)
      setCode('')
      setWrong(false)
      onUnlock()
      return
    }
    setWrong(true)
    setCode('')
  }

  const remaining = TAPS_REQUIRED - taps

  return (
    <section className="settings-card card-surface settings-about">
      {/* A hidden gesture, not a control: deliberately not a button, and it
          announces nothing until it is nearly done. */}
      <div className="settings-about-tap" onClick={handleTap}>
        <h3 className="settings-heading">About</h3>
        <p className="settings-about-title">Kana Quest</p>
        <p className="settings-note">by Aurora Labs 88 🌸</p>
        <p className="settings-version">Version {version}</p>
      </div>

      {taps >= TAPS_BEFORE_HINT && !asking && (
        <p className="settings-note dev-unlock-hint anim-pop-in" role="status">
          {remaining} more {remaining === 1 ? 'tap' : 'taps'}…
        </p>
      )}

      {asking && (
        <form className="dev-unlock" onSubmit={submit}>
          <label className="dev-unlock-label" htmlFor="dev-code">
            Enter the code
          </label>
          <div className="dev-unlock-row">
            <input
              id="dev-code"
              className={`dev-unlock-input ${wrong ? 'is-wrong anim-wiggle' : ''}`}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              maxLength={8}
              autoFocus
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setWrong(false)
              }}
            />
            <button type="submit" className="btn btn-sakura" disabled={!code.trim()}>
              Unlock
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setAsking(false)
                setCode('')
                setWrong(false)
              }}
            >
              Cancel
            </button>
          </div>
          {wrong && (
            <p className="settings-note is-wrong" role="status">
              Not that one.
            </p>
          )}
        </form>
      )}
    </section>
  )
}
