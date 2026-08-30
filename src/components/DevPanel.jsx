import { useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { completedProgress, completedProgressSummary } from '../utils/devProgress'
import './DevPanel.css'

/**
 * Development-only tools, rendered by Settings behind `import.meta.env.DEV`.
 *
 * Deliberately not shipped. A one-tap "mark everything complete" control in the
 * real app would be one mistap away from erasing the learner's actual sense of
 * progress — which is the thing the whole app exists to build. If this ever
 * needs to be reachable on a phone against production, that is a decision to
 * take on purpose, not a default.
 */
export default function DevPanel() {
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
        Only in the dev build — this whole panel is dropped from a production bundle. Filling progress overwrites
        whatever is currently saved on this device; “Reset progress” above puts it back to empty.
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
      </div>
    </section>
  )
}
