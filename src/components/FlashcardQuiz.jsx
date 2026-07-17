import { useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { buildMultipleChoiceOptions, pickRandom } from '../utils/quiz'
import './FlashcardQuiz.css'

export default function FlashcardQuiz({ section, characters }) {
  const { recordQuizAnswer } = useProgressContext()
  const [answerMode, setAnswerMode] = useState('choice') // 'choice' | 'type'
  const [current, setCurrent] = useState(() => pickRandom(characters))
  const [options, setOptions] = useState(() => buildMultipleChoiceOptions(characters, current))
  const [typedAnswer, setTypedAnswer] = useState('')
  const [feedback, setFeedback] = useState(null) // null | 'correct' | 'wrong'
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answered, setAnswered] = useState(0)

  function nextQuestion() {
    const next = pickRandom(characters, current)
    setCurrent(next)
    setOptions(buildMultipleChoiceOptions(characters, next))
    setTypedAnswer('')
    setFeedback(null)
    setSelected(null)
  }

  function handleAnswer(isCorrect, chosenValue) {
    setSelected(chosenValue)
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setAnswered((n) => n + 1)
    const newStreak = isCorrect ? streak + 1 : 0
    setStreak(newStreak)
    setBestStreak((b) => Math.max(b, newStreak))
    if (isCorrect) setScore((s) => s + 1)
    recordQuizAnswer(section, isCorrect, newStreak)
  }

  function handleChoiceClick(option) {
    if (feedback) return
    handleAnswer(option === current.romaji, option)
  }

  function handleTypeSubmit(e) {
    e.preventDefault()
    if (feedback || !typedAnswer.trim()) return
    const normalized = typedAnswer.trim().toLowerCase()
    handleAnswer(normalized === current.romaji, normalized)
  }

  if (!current) return null

  return (
    <div className="flashcard-quiz">
      <div className="quiz-toolbar">
        <div className="pill-tabs">
          <button
            className={`pill-tab ${answerMode === 'choice' ? 'is-active' : ''}`}
            onClick={() => setAnswerMode('choice')}
          >
            Multiple Choice
          </button>
          <button
            className={`pill-tab ${answerMode === 'type' ? 'is-active' : ''}`}
            onClick={() => setAnswerMode('type')}
          >
            Type Answer
          </button>
        </div>
        <div className="quiz-stats">
          <span className="quiz-stat">⭐ {score}</span>
          <span className="quiz-stat">🔥 {streak}</span>
        </div>
      </div>

      <div
        className={`quiz-card card-surface ${feedback === 'correct' ? 'anim-correct' : ''} ${
          feedback === 'wrong' ? 'anim-wiggle' : ''
        }`}
      >
        <span className="quiz-prompt-label">What sound is this?</span>
        <span className="quiz-char">{current.char}</span>

        {answerMode === 'choice' ? (
          <div className="quiz-options">
            {options.map((option) => {
              const isCorrectOption = option === current.romaji
              const shouldHighlight = feedback && (option === selected || (feedback === 'wrong' && isCorrectOption))
              let stateClass = ''
              if (shouldHighlight) stateClass = isCorrectOption ? 'is-correct' : 'is-wrong'
              return (
                <button
                  key={option}
                  type="button"
                  className={`quiz-option ${stateClass}`}
                  onClick={() => handleChoiceClick(option)}
                  disabled={!!feedback}
                >
                  {option}
                </button>
              )
            })}
          </div>
        ) : (
          <form className="quiz-type-form" onSubmit={handleTypeSubmit}>
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
        )}

        {feedback && (
          <div className={`quiz-feedback ${feedback}`}>
            <p className="quiz-feedback-headline">
              {feedback === 'correct' ? 'Nice! 🎉' : `Not quite — it's "${current.romaji}"`}
            </p>
            <p className="quiz-feedback-word">
              {current.word.kana} <span className="quiz-feedback-romaji">({current.word.romaji})</span> —{' '}
              {current.word.meaning}
            </p>
            <button className="btn" onClick={nextQuestion}>
              Next →
            </button>
          </div>
        )}
      </div>

      <p className="quiz-progress-note">
        {answered} answered this session · best streak {bestStreak}
      </p>
    </div>
  )
}
