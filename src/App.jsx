import { useState } from 'react'
import { ProgressProvider } from './context/ProgressContext'
import Header from './components/Header'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import './App.css'

export default function App() {
  const [view, setView] = useState({ screen: 'home' })

  function goHome() {
    setView({ screen: 'home' })
  }

  function openSection(section) {
    setView({ screen: 'section', section })
  }

  return (
    <ProgressProvider>
      <div className="app-shell">
        <Header onLogoClick={goHome} />
        <main className="app-main">
          {view.screen === 'home' && <Home onOpenSection={openSection} />}
          {view.screen === 'section' && <SectionPage section={view.section} onBack={goHome} />}
        </main>
      </div>
    </ProgressProvider>
  )
}
