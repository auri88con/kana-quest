import { useRef, useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { buildMultipleChoiceOptions, pickRandom } from '../utils/quiz'
import { isRomajiMatch } from '../utils/romaji'
import { randomCorrectMessage, randomWrongMessage } from '../utils/messages'
import StreakStat from './StreakStat'
import Celebration from './Celebration'
import './FlashcardQuiz.css'

const STREAK_MILESTONE = 5
const CELEBRATION_DURATION_MS = 2600

const DEFAULT_ANSWER_MODES = [{ key: 'romaji', label: 'Romaji', prompt: 'What sound is this?' }]

// For kanji, `meaning` can hold alternates like "before / front" — only the
// first is used as the quiz answer, keeping options/feedback single words.
function answerValue(item, targetKey) {
  const raw = item[targetKey]
  return targetKey === 'meaning' ? raw.split('/')[0].trim() : raw
}

function isAnswerMatch(input, targetKey, correctValue) {
  if (targetKey === 'romaji') return isRomajiMatch(input, correctValue)
  return input.trim().toLowerCase() === correctValue.trim().toLowerCase()
}

export default function FlashcardQuiz({ section, characters, answerModes = DEFAULT_ANSWER_MODES }) {
  const { recordQuizAnswer } = useProgressContext()
  const [answerMode, setAnswerMode] = useState('choice') // 'choice' | 'type'
  const [target, setTarget] = useState(answerModes[0].key)
  const [current, setCurrent] = useState(() => pickRandom(characters))
  const [options, setOptions] = useState(() =>
    buildMultipleChoiceOptions(characters, current, 4, (item) => answerValue(item, target)),
  )
  const [typedAnswer, setTypedAnswer] = useState('')
  const [feedback, setFeedback] = useState(null) // null | 'correct' | 'wrong'
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [celebration, setCelebration] = useState(null)
  const celebrationTimeout = useRef(null)

  function triggerCelebration(message) {
    setCelebration(message)
    clearTimeout(celebrationTimeout.current)
    celebrationTimeout.current = setTimeout(() => setCelebration(null), CELEBRATION_DURATION_MS)
  }

  const correctValue = answerValue(current, target)
  const promptLabel = answerModes.find((m) => m.key === target)?.prompt ?? DEFAULT_ANSWER_MODES[0].prompt

  function refreshQuestion(next, nextTarget = target) {
    setCurrent(next)
    setOptions(buildMultipleChoiceOptions(characters, next, 4, (item) => answerValue(item, nextTarget)))
    setTypedAnswer('')
    setFeedback(null)
    setSelected(null)
  }

  function nextQuestion() {
    refreshQuestion(pickRandom(characters, current))
  }

  function selectTarget(key) {
    if (key === target) return
    setTarget(key)
    refreshQuestion(pickRandom(characters, current), key)
  }

  function handleAnswer(isCorrect, chosenValue) {
    setSelected(chosenValue)
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setFeedbackMessage(isCorrect ? randomCorrectMessage() : randomWrongMessage(correctValue))
    setAnswered((n) => n + 1)
    const newStreak = isCorrect ? streak + 1 : 0
    setStreak(newStreak)
    setBestStreak((b) => Math.max(b, newStreak))
    if (isCorrect) setScore((s) => s + 1)
    recordQuizAnswer(section, isCorrect, newStreak)
    if (isCorrect && newStreak > 0 && newStreak % STREAK_MILESTONE === 0) {
      triggerCelebration(`🔥 ${newStreak} in a row!`)
    }
  }

  function handleChoiceClick(option) {
    if (feedback) return
    handleAnswer(option === correctValue, option)
  }

  function handleTypeSubmit(e) {
    e.preventDefault()
    if (feedback || !typedAnswer.trim()) return
    const isCorrect = isAnswerMatch(typedAnswer, target, correctValue)
    handleAnswer(isCorrect, typedAnswer.trim().toLowerCase())
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
          <StreakStat streak={streak} />
        </div>
      </div>

      <Celebration message={celebration} />

      {answerModes.length > 1 && (
        <div className="pill-tabs target-tabs">
          {answerModes.map((mode) => (
            <button
              key={mode.key}
              className={`pill-tab ${target === mode.key ? 'is-active' : ''}`}
              onClick={() => selectTarget(mode.key)}
            >
              {mode.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={`quiz-card card-surface ${feedback === 'correct' ? 'anim-correct' : ''} ${
          feedback === 'wrong' ? 'anim-wiggle' : ''
        }`}
      >
        <span className="quiz-prompt-label">{promptLabel}</span>
        <span className="quiz-char">{current.char}</span>

        {answerMode === 'choice' ? (
          <div className="quiz-options">
            {options.map((option) => {
              const isCorrectOption = option === correctValue
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
              placeholder={target === 'meaning' ? 'type the meaning…' : 'type the romaji…'}
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
            <p className="quiz-feedback-headline">{feedbackMessage}</p>
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
