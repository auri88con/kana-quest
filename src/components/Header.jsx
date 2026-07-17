import './Header.css'

export default function Header({ onLogoClick }) {
  return (
    <header className="app-header">
      <button className="app-logo" onClick={onLogoClick}>
        <span className="app-logo-mark" aria-hidden="true">🎌</span>
        <span className="app-logo-text">Kana Quest</span>
      </button>
    </header>
  )
}
