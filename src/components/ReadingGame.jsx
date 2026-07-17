import { useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { pickRandom } from '../utils/quiz'
import { isRomajiMatch } from '../utils/romaji'
import { READING_GAME_LEVELS, READING_GAME_UNLOCK_THRESHOLD } from '../data/readingGame'
import './ReadingGame.css'

const byKana = (word) => word.kana

export default function ReadingGame({ section, wordsByLevel }) {
  const { progress, recordReadingAnswer } = useProgressContext()
  const readingProgress = progress[section].readingGame
  const unlockedLevel = readingProgress.unlockedLevel

  const [level, setLevel] = useState(unlockedLevel)
  const [current, setCurrent] = useState(() => pickRandom(wordsByLevel[unlockedLevel], null, byKana))
  const [typedAnswer, setTypedAnswer] = useState('')
  const [feedback, setFeedback] = useState(null) // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestSessionStreak, setBestSessionStreak] = useState(0)
  const [answered, setAnswered] = useState(0)

  function selectLevel(lvl) {
    if (lvl > unlockedLevel || lvl === level) return
    setLevel(lvl)
    setCurrent(pickRandom(wordsByLevel[lvl], null, byKana))
    setTypedAnswer('')
    setFeedback(null)
  }

  function nextQuestion() {
    setCurrent(pickRandom(wordsByLevel[level], current, byKana))
    setTypedAnswer('')
    setFeedback(null)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (feedback || !typedAnswer.trim()) return
    const isCorrect = isRomajiMatch(typedAnswer, current.romaji)
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setAnswered((n) => n + 1)
    const newStreak = isCorrect ? streak + 1 : 0
    setStreak(newStreak)
    setBestSessionStreak((b) => Math.max(b, newStreak))
    if (isCorrect) setScore((s) => s + 1)
    recordReadingAnswer(section, level, isCorrect, newStreak)
  }

  if (!current) return null

  const levelCorrectCount = readingProgress.levelProgress[level] ?? 0
  const showUnlockProgress = level === unlockedLevel && level < 5

  return (
    <div className="reading-game">
      <div className="pill-tabs level-tabs">
        {READING_GAME_LEVELS.map((lvl) => {
          const locked = lvl > unlockedLevel
          return (
            <button
              key={lvl}
              type="button"
              className={`pill-tab level-tab ${level === lvl ? 'is-active' : ''} ${locked ? 'is-locked' : ''}`}
              onClick={() => selectLevel(lvl)}
              disabled={locked}
              title={locked ? `Reach ${READING_GAME_UNLOCK_THRESHOLD} correct on Level ${lvl - 1} to unlock` : undefined}
            >
              {locked ? '🔒 ' : ''}Level {lvl}
            </button>
          )
        })}
      </div>

      {showUnlockProgress && (
        <div className="unlock-progress">
          <div className="unlock-progress-bar">
            <div
              className="unlock-progress-bar-fill"
              style={{ width: `${Math.min(100, (levelCorrectCount / READING_GAME_UNLOCK_THRESHOLD) * 100)}%` }}
            />
          </div>
          <span className="unlock-progress-label">
            {levelCorrectCount}/{READING_GAME_UNLOCK_THRESHOLD} correct to unlock Level {level + 1}
          </span>
        </div>
      )}

      <div className="quiz-toolbar reading-toolbar">
        <div className="quiz-stats">
          <span className="quiz-stat">⭐ {score}</span>
          <span className="quiz-stat">🔥 {streak}</span>
        </div>
      </div>

      <div
        className={`quiz-card card-surface reading-card ${feedback === 'correct' ? 'anim-correct' : ''} ${
          feedback === 'wrong' ? 'anim-wiggle' : ''
        }`}
      >
        <span className="quiz-prompt-label">Type the romaji reading</span>
        <span className="reading-word">{current.kana}</span>

        <form className="quiz-type-form" onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            disabled={!!feedback}
            placeholder="type the romaji…"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className={feedback === 'wrong' ? 'is-wrong' : feedback === 'correct' ? 'is-correct' : ''}
          />
          {!feedback && (
            <button className="btn btn-sakura" type="submit" disabled={!typedAnswer.trim()}>
              Check
            </button>
          )}
        </form>

        {feedback && (
          <div className={`quiz-feedback ${feedback}`}>
            <p className="quiz-feedback-headline">
              {feedback === 'correct' ? 'Nice! 🎉' : `Not quite — it's "${current.romaji}"`}
            </p>
            <p className="quiz-feedback-word">{current.meaning}</p>
            <button className="btn" onClick={nextQuestion}>
              Next →
            </button>
          </div>
        )}
      </div>

      <p className="quiz-progress-note">
        {answered} answered this session · best streak {bestSessionStreak}
      </p>
    </div>
  )
}
