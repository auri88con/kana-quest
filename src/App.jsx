import { lazy, Suspense } from 'react'
import { ProgressProvider } from './context/ProgressContext'
import { SettingsProvider } from './context/SettingsContext'
import Header from './components/Header'
import Home from './pages/Home'
import Skeleton from './components/Skeleton'
import InstallPrompt from './components/InstallPrompt'
import { useRouter } from './hooks/useRouter'
import { HOME_VIEW, sectionView } from './utils/routes'
import './App.css'

// Code-split the screens you reach from home: the dashboard paints immediately,
// and the shimmer placeholder covers the chunk fetch. Every chunk is precached
// by the service worker, so this stays instant offline too.
const SectionPage = lazy(() => import('./pages/SectionPage'))
const Settings = lazy(() => import('./pages/Settings'))

function NotFound({ onBack }) {
  return (
    <div className="not-found card-surface anim-pop-in">
      <span className="not-found-emoji" aria-hidden="true">🗺️</span>
      <h2>That page wandered off</h2>
      <p>The link you followed isn’t part of Kana Quest — but home is one tap away.</p>
      <button type="button" className="btn" onClick={onBack}>
        Back to the dashboard
      </button>
    </div>
  )
}

export default function App() {
  const { view, navigate } = useRouter()

  const goHome = () => navigate({ ...HOME_VIEW })
  const openSettings = () => navigate({ screen: 'settings' })
  const openSection = (section) => navigate(sectionView(section))

  // Section tabs patch the current view: mode changes are worth a back-button
  // step, tier/style/script refinements replace the entry instead.
  const updateSection = (patch, options) => navigate({ ...view, ...patch }, options)

  return (
    <SettingsProvider>
      <ProgressProvider>
        <div className="app-shell">
          <Header onLogoClick={goHome} onOpenSettings={openSettings} settingsActive={view.screen === 'settings'} />
          <main className="app-main">
            <Suspense fallback={<Skeleton />}>
              {/* Keyed on the screen so each arrival gets its springy entrance. */}
              <div className="view-swap" key={`${view.screen}:${view.section ?? ''}`}>
                {view.screen === 'home' && <Home onOpenSection={openSection} />}
                {view.screen === 'section' && (
                  <SectionPage view={view} onChange={updateSection} onBack={goHome} />
                )}
                {view.screen === 'settings' && <Settings onBack={goHome} />}
                {view.screen === 'notfound' && <NotFound onBack={goHome} />}
              </div>
            </Suspense>
          </main>
          <InstallPrompt />
        </div>
      </ProgressProvider>
    </SettingsProvider>
  )
}
