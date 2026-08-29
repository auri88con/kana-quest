import { lazy, Suspense, useEffect, useRef } from 'react'
import { ProgressProvider } from './context/ProgressContext'
import { SettingsProvider } from './context/SettingsContext'
import Header from './components/Header'
import Home from './pages/Home'
import Skeleton from './components/Skeleton'
import InstallPrompt from './components/InstallPrompt'
import UpdateToast from './components/UpdateToast'
import ErrorBoundary from './components/ErrorBoundary'
import { useRouter } from './hooks/useRouter'
import { HOME_VIEW, sectionView, viewLabel } from './utils/routes'
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
  const mainRef = useRef(null)
  const isFirstRender = useRef(true)
  const screenKey = `${view.screen}:${view.section ?? ''}`

  const goHome = () => navigate({ ...HOME_VIEW })
  const openSettings = () => navigate({ screen: 'settings' })
  const openSection = (section) => navigate(sectionView(section))

  // Section tabs patch the current view: mode changes are worth a back-button
  // step, tier/style/script refinements replace the entry instead.
  const updateSection = (patch, options) => navigate({ ...view, ...patch }, options)

  // Tab titles and back-history entries should say which screen they are.
  useEffect(() => {
    const label = viewLabel(view)
    document.title = view.screen === 'home' ? 'Kana Quest' : `${label} · Kana Quest`
  }, [view])

  // Keyboard and screen-reader users would otherwise be left at the top of the
  // document after a navigation, with nothing announced.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    mainRef.current?.focus()
  }, [screenKey, view.mode])

  return (
    <SettingsProvider>
      <ProgressProvider>
        <div className="app-shell">
          <Header onLogoClick={goHome} onOpenSettings={openSettings} settingsActive={view.screen === 'settings'} />
          <p className="visually-hidden" role="status" aria-live="polite">
            {viewLabel(view)}
          </p>
          <main className="app-main" ref={mainRef} tabIndex={-1}>
            <ErrorBoundary resetKey={screenKey}>
              <Suspense fallback={<Skeleton variant={view.screen === 'settings' ? 'panels' : 'grid'} />}>
                {/* Keyed on the screen so each arrival gets its springy entrance. */}
                <div className="view-swap" key={screenKey}>
                  {view.screen === 'home' && <Home onOpenSection={openSection} />}
                  {view.screen === 'section' && (
                    <SectionPage view={view} onChange={updateSection} onBack={goHome} />
                  )}
                  {view.screen === 'settings' && <Settings onBack={goHome} />}
                  {view.screen === 'notfound' && <NotFound onBack={goHome} />}
                </div>
              </Suspense>
            </ErrorBoundary>
          </main>
          <div className="app-toasts">
            <UpdateToast />
            <InstallPrompt />
          </div>
        </div>
      </ProgressProvider>
    </SettingsProvider>
  )
}
