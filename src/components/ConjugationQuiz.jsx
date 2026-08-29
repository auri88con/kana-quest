import { useRef, useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { useSettingsContext } from '../context/SettingsContext'
import { buildMultipleChoiceOptions, pickRandom } from '../utils/quiz'
import { isRomajiMatch } from '../utils/romaji'
import { randomCorrectMessage, randomWrongMessage } from '../utils/messages'
import { conjugate } from '../utils/conjugate'
import { playSound } from '../utils/sound'
import StreakStat from './StreakStat'
import Celebration from './Celebration'
import './FlashcardQuiz.css'
import './ConjugationQuiz.css'

const STREAK_MILESTONE = 5
const CELEBRATION_DURATION_MS = 2600

function allForms(verb, style) {
  return conjugate(verb)[style]
}

function askableForms(verb, style) {
  return allForms(verb, style).filter((f) => f.key !== 'dictionary')
}

export default function ConjugationQuiz({ verbs, style }) {
  const { recordConjugationAnswer } = useProgressContext()
  const { settings } = useSettingsContext()
  const [answerMode, setAnswerMode] = useState(settings.quiz.answerMode) // 'choice' | 'type'
  const [current, setCurrent] = useState(() => pickRandom(verbs))
  const [targetForm, setTargetForm] = useState(() => pickRandom(askableForms(current, style)))
  const [options, setOptions] = useState(() =>
    buildMultipleChoiceOptions(allForms(current, style), targetForm, 4, (f) => f.kana, (f) => f.key),
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

  function refreshQuestion(nextVerb, nextStyle) {
    const nextTarget = pickRandom(askableForms(nextVerb, nextStyle))
    setCurrent(nextVerb)
    setTargetForm(nextTarget)
    setOptions(buildMultipleChoiceOptions(allForms(nextVerb, nextStyle), nextTarget, 4, (f) => f.kana, (f) => f.key))
    setTypedAnswer('')
    setFeedback(null)
    setSelected(null)
  }

  function nextQuestion() {
    refreshQuestion(pickRandom(verbs, current, (v) => v.char), style)
  }

  function handleAnswer(isCorrect, chosenValue) {
    setSelected(chosenValue)
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setFeedbackMessage(isCorrect ? randomCorrectMessage() : randomWrongMessage(targetForm.kana))
    setAnswered((n) => n + 1)
    const newStreak = isCorrect ? streak + 1 : 0
    setStreak(newStreak)
    setBestStreak((b) => Math.max(b, newStreak))
    if (isCorrect) setScore((s) => s + 1)
    recordConjugationAnswer(style, current.char, isCorrect, newStreak)
    const milestone = isCorrect && newStreak > 0 && newStreak % STREAK_MILESTONE === 0
    if (settings.sound) playSound(milestone ? 'celebrate' : isCorrect ? 'correct' : 'wrong')
    if (milestone) {
      triggerCelebration(`🔥 ${newStreak} in a row!`)
    }
  }

  function handleChoiceClick(option) {
    if (feedback) return
    handleAnswer(option === targetForm.kana, option)
  }

  function handleTypeSubmit(e) {
    e.preventDefault()
    if (feedback || !typedAnswer.trim()) return
    const isCorrect = isRomajiMatch(typedAnswer, targetForm.romaji)
    handleAnswer(isCorrect, typedAnswer.trim().toLowerCase())
  }

  if (!current || !targetForm) return null

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

      <div
        className={`quiz-card card-surface ${feedback === 'correct' ? 'anim-correct' : ''} ${
          feedback === 'wrong' ? 'anim-wiggle' : ''
        }`}
      >
        <span className="quiz-prompt-label">{targetForm.label}?</span>
        <span className="quiz-char">{current.char}</span>
        <span className="conjugation-quiz-meaning">{current.meaning}</span>

        {answerMode === 'choice' ? (
          <div className="quiz-options">
            {options.map((option) => {
              const isCorrectOption = option === targetForm.kana
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
            <p className="quiz-feedback-headline">{feedbackMessage}</p>
            <p className="quiz-feedback-word">
              {targetForm.kanji} <span className="quiz-feedback-romaji">({targetForm.romaji})</span>
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
