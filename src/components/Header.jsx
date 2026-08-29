import './Header.css'

export default function Header({ onLogoClick, onOpenSettings, settingsActive }) {
  return (
    <header className="app-header">
      <button className="app-logo" onClick={onLogoClick}>
        <span className="app-logo-mark" aria-hidden="true">🎌</span>
        <span className="app-logo-text">Kana Quest</span>
      </button>

      <button
        type="button"
        className={`icon-btn header-settings-btn ${settingsActive ? 'is-active' : ''}`}
        onClick={onOpenSettings}
        aria-label="Settings"
        aria-current={settingsActive ? 'page' : undefined}
        title="Settings"
      >
        <span aria-hidden="true">⚙️</span>
      </button>
    </header>
  )
}
