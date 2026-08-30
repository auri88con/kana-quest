import { useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { completedProgress, completedProgressSummary } from '../utils/devProgress'
import './DevPanel.css'

/**
 * Dev tools. Always shown in a dev build; in production it takes the hidden
 * About-card gesture (five taps, then the code) to reach — see utils/devAccess.js.
 *
 * It is deliberately hard to get to rather than absent, because "mark everything
 * complete" is one mistap away from erasing the learner's real sense of
 * progress, which is the thing the whole app exists to build. `onLock` is only
 * passed when it was opened by the gesture; in dev there is nothing to lock.
 */
export default function DevPanel({ onLock }) {
  const { progress, replaceProgress } = useProgressContext()
  const [filled, setFilled] = useState(false)
  const summary = completedProgressSummary()

  const seen = (key) => progress[key]?.seenCharacters.length ?? 0
  const counts = [
    ['hiragana', 'Hiragana'],
    ['katakana', 'Katakana'],
    ['kanji', 'Kanji'],
    ['verbs', 'Verbs'],
    ['radicals', 'Radicals'],
  ]

  function fillEverything() {
    replaceProgress(completedProgress())
    setFilled(true)
  }

  return (
    <section className="settings-card card-surface dev-panel">
      <h3 className="settings-heading">
        <span aria-hidden="true">🛠️</span> Dev tools
      </h3>
      <p className="settings-note">
        Filling progress overwrites whatever is currently saved on this device; “Reset progress” above puts it back to
        empty. {onLock ? 'Lock this again when you are done so it can’t be hit by accident.' : 'Always visible in the dev build.'}
      </p>

      <ul className="dev-panel-counts">
        {counts.map(([key, label]) => {
          const total = summary.find(([name]) => name === label)?.[1] ?? 0
          const met = seen(key)
          return (
            <li key={key} className={met >= total ? 'is-complete' : ''}>
              <span className="dev-panel-label">{label}</span>
              <span className="dev-panel-value">
                {met}/{total}
              </span>
            </li>
          )
        })}
      </ul>

      {filled && (
        <p className="settings-note is-done anim-pop-in" role="status">
          Everything marked complete — quizzes at 100%, reading game at level 5, all mastery records written.
        </p>
      )}

      <div className="settings-danger-actions">
        <button type="button" className="btn" onClick={fillEverything}>
          Mark everything 100% complete
        </button>
        {onLock && (
          <button type="button" className="btn btn-outline" onClick={onLock}>
            🔒 Lock dev tools
          </button>
        )}
      </div>
    </section>
  )
}
