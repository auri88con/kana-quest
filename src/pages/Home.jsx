import { hiraganaAllCharacters } from '../data/hiragana'
import { katakanaAllCharacters } from '../data/katakana'
import { kanjiAllCharacters } from '../data/kanji'
import { useProgressContext } from '../context/ProgressContext'
import './Home.css'

const SECTION_META = {
  hiragana: { label: 'Hiragana', emoji: 'あ', total: hiraganaAllCharacters.length, ready: true, tagline: 'The everyday syllabary' },
  katakana: { label: 'Katakana', emoji: 'ア', total: katakanaAllCharacters.length, ready: true, tagline: 'For loanwords & names' },
  kanji: { label: 'Kanji', emoji: '漢', total: kanjiAllCharacters.length, ready: true, tagline: 'Meaning-packed characters' },
}

export default function Home({ onOpenSection }) {
  const { progress } = useProgressContext()
  const sections = Object.entries(SECTION_META)

  const totalSeen = sections.reduce((sum, [key]) => sum + (progress[key]?.seenCharacters.length ?? 0), 0)
  const totalChars = sections.reduce((sum, [, meta]) => sum + meta.total, 0)
  const totalAttempts = sections.reduce(
    (sum, [key]) => sum + (progress[key]?.quiz.attempts ?? 0) + (progress[key]?.readingGame.attempts ?? 0),
    0,
  )
  const totalCorrect = sections.reduce(
    (sum, [key]) => sum + (progress[key]?.quiz.correct ?? 0) + (progress[key]?.readingGame.correct ?? 0),
    0,
  )
  const bestStreak = sections.reduce(
    (max, [key]) => Math.max(max, progress[key]?.quiz.bestStreak ?? 0, progress[key]?.readingGame.bestStreak ?? 0),
    0,
  )
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null

  return (
    <div className="home">
      <section className="home-hero anim-pop-in">
        <h1>Kana Quest</h1>
        <p className="home-hero-sub">Learn to read Japanese, one playful card at a time 🌸</p>
      </section>

      <section className="dashboard card-surface">
        <h2>Your progress</h2>
        <div className="dashboard-stats">
          <div className="stat">
            <span className="stat-value">
              {totalSeen}
              <span className="stat-of">/{totalChars || '—'}</span>
            </span>
            <span className="stat-label">characters met</span>
          </div>
          <div className="stat">
            <span className="stat-value">{accuracy === null ? '—' : `${accuracy}%`}</span>
            <span className="stat-label">quiz accuracy</span>
          </div>
          <div className="stat">
            <span className={`stat-value ${bestStreak > 0 ? 'is-flaming' : ''}`}>🔥 {bestStreak}</span>
            <span className="stat-label">best streak</span>
          </div>
        </div>
      </section>

      <section className="section-grid">
        {sections.map(([key, meta]) => {
          const seen = progress[key]?.seenCharacters.length ?? 0
          const pct = meta.total > 0 ? Math.round((seen / meta.total) * 100) : 0
          const quiz = progress[key]?.quiz
          const reading = progress[key]?.readingGame
          const sectionAttempts = (quiz?.attempts ?? 0) + (reading?.attempts ?? 0)
          const sectionCorrect = (quiz?.correct ?? 0) + (reading?.correct ?? 0)
          const sectionAccuracy = sectionAttempts > 0 ? Math.round((sectionCorrect / sectionAttempts) * 100) : null
          const sectionBestStreak = Math.max(quiz?.bestStreak ?? 0, reading?.bestStreak ?? 0)
          const sectionReadingLevel = reading?.unlockedLevel ?? 1
          return (
            <button key={key} type="button" className="section-card card-surface" onClick={() => onOpenSection(key)}>
              <span className="section-card-emoji" aria-hidden="true">{meta.emoji}</span>
              <h3>{meta.label}</h3>
              <p className="section-card-tagline">{meta.tagline}</p>
              {meta.ready ? (
                <>
                  <div className="section-card-progress">
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="section-card-progress-label">{seen}/{meta.total}</span>
                  </div>
                  <div className="section-card-stats">
                    <span className="mini-stat" title="Quiz + reading game accuracy">
                      🎯 {sectionAccuracy === null ? '—' : `${sectionAccuracy}%`}
                    </span>
                    <span className={`mini-stat ${sectionBestStreak > 0 ? 'is-flaming' : ''}`} title="Best streak">
                      🔥 {sectionBestStreak}
                    </span>
                    <span className="mini-stat" title="Reading game level unlocked">
                      📝 Lv{sectionReadingLevel}/5
                    </span>
                  </div>
                </>
              ) : (
                <span className="badge-soon">Coming soon</span>
              )}
            </button>
          )
        })}
      </section>
    </div>
  )
}
