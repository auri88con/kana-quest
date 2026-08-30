import { useEffect, useRef, useState } from 'react'
import { useSettingsContext } from '../context/SettingsContext'
import { useProgressContext } from '../context/ProgressContext'
import DevPanel from '../components/DevPanel'
import { THEME_OPTIONS } from '../utils/settings'
import { playSound } from '../utils/sound'
import './Settings.css'

const APP_VERSION = typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : 'dev'

function SettingRow({ label, hint, children }) {
  return (
    <div className="setting-row">
      <div className="setting-row-text">
        <span className="setting-row-label">{label}</span>
        {hint && <span className="setting-row-hint">{hint}</span>}
      </div>
      <div className="setting-row-control">{children}</div>
    </div>
  )
}

function ChoiceGroup({ label, options, value, onChange }) {
  return (
    <div className="pill-tabs setting-choice" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          className={`pill-tab ${value === option.key ? 'is-active' : ''}`}
          onClick={() => onChange(option.key)}
          aria-pressed={value === option.key}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

function Toggle({ label, checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`toggle ${checked ? 'is-on' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="toggle-knob" />
    </button>
  )
}

const RESET_NOTICE_MS = 5000

export default function Settings({ onBack }) {
  const { settings, systemDark, setSetting, setQuizSetting, resetSettings } = useSettingsContext()
  const { resetProgress } = useProgressContext()
  const [confirmingReset, setConfirmingReset] = useState(false)
  const [resetDone, setResetDone] = useState(false)
  const noticeTimeout = useRef(null)

  useEffect(() => () => clearTimeout(noticeTimeout.current), [])

  // The theme pills otherwise look duplicated whenever System resolves to the
  // same thing as the pinned option next to it. This reports what the *device*
  // prefers, not the theme currently in force — otherwise pinning Light makes
  // the System pill claim the device is light too.
  const themeOptions = THEME_OPTIONS.map((option) =>
    option.key === 'system'
      ? { ...option, label: `System · ${systemDark ? 'Dark' : 'Light'}` }
      : option,
  )

  function handleSoundChange(next) {
    setSetting('sound', next)
    if (next) playSound('correct')
  }

  function handleResetProgress() {
    resetProgress()
    setConfirmingReset(false)
    setResetDone(true)
    // A note, not a new screen state: the reset buttons stay reachable.
    clearTimeout(noticeTimeout.current)
    noticeTimeout.current = setTimeout(() => setResetDone(false), RESET_NOTICE_MS)
  }

  return (
    <div className="settings-page">
      <div className="settings-top">
        <button type="button" className="btn btn-outline back-btn" onClick={onBack}>
          ← Home
        </button>
        <h2>Settings</h2>
      </div>

      <section className="settings-card card-surface">
        <h3 className="settings-heading">Appearance</h3>
        <SettingRow label="Theme" hint="Cream by day, indigo by night">
          <ChoiceGroup
            label="Theme"
            options={themeOptions}
            value={settings.theme}
            onChange={(key) => setSetting('theme', key)}
          />
        </SettingRow>
        <SettingRow label="Reduce motion" hint="Calms the bounces, pops and slides">
          <Toggle
            label="Reduce motion"
            checked={settings.reduceMotion}
            onChange={(next) => setSetting('reduceMotion', next)}
          />
        </SettingRow>
      </section>

      <section className="settings-card card-surface">
        <h3 className="settings-heading">Quiz preferences</h3>
        <SettingRow label="Default answer input" hint="How every quiz opens">
          <ChoiceGroup
            label="Default answer input"
            options={[
              { key: 'choice', label: 'Multiple choice' },
              { key: 'type', label: 'Type answer' },
            ]}
            value={settings.quiz.answerMode}
            onChange={(key) => setQuizSetting('answerMode', key)}
          />
        </SettingRow>
        <SettingRow label="Verb quiz display" hint="Show verbs in kanji or kana only">
          <ChoiceGroup
            label="Verb quiz display"
            options={[
              { key: 'char', label: '漢字' },
              { key: 'kana', label: 'かな' },
            ]}
            value={settings.quiz.verbScript}
            onChange={(key) => setQuizSetting('verbScript', key)}
          />
        </SettingRow>
        <SettingRow label="Sound effects" hint="Little chimes for right and wrong">
          <Toggle label="Sound effects" checked={settings.sound} onChange={handleSoundChange} />
        </SettingRow>
      </section>

      <section className="settings-card card-surface">
        <h3 className="settings-heading">Your data</h3>
        <p className="settings-note">
          Everything — progress, streaks and these preferences — is stored on this device only. Nothing is uploaded, and
          the app keeps working with no connection.
        </p>
        {resetDone && (
          <p className="settings-note is-done anim-pop-in" role="status">
            Progress cleared. Time for a fresh quest! 🌱
          </p>
        )}

        {confirmingReset ? (
          <div className="settings-danger-confirm">
            <p className="settings-note">Clear every character marked as met, all quiz stats and unlocked levels?</p>
            <div className="settings-danger-actions">
              <button type="button" className="btn btn-danger" onClick={handleResetProgress}>
                Yes, reset progress
              </button>
              <button type="button" className="btn btn-outline" onClick={() => setConfirmingReset(false)}>
                Keep it
              </button>
            </div>
          </div>
        ) : (
          <div className="settings-danger-actions">
            <button type="button" className="btn btn-outline" onClick={() => setConfirmingReset(true)}>
              Reset progress
            </button>
            <button type="button" className="btn btn-outline" onClick={resetSettings}>
              Reset preferences
            </button>
          </div>
        )}
      </section>

      {/* Dropped entirely from a production build — see DevPanel.jsx. */}
      {import.meta.env.DEV && <DevPanel />}

      <section className="settings-card card-surface settings-about">
        <h3 className="settings-heading">About</h3>
        <p className="settings-about-title">Kana Quest</p>
        <p className="settings-note">by Aurora Labs 88 🌸</p>
        <p className="settings-version">Version {APP_VERSION}</p>
      </section>
    </div>
  )
}
