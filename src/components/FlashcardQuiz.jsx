import { useRef, useState } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { useSettingsContext } from '../context/SettingsContext'
import { buildMultipleChoiceOptions, pickRandom } from '../utils/quiz'
import { isRomajiMatch } from '../utils/romaji'
import { randomCorrectMessage, randomWrongMessage } from '../utils/messages'
import { playSound } from '../utils/sound'
import { mnemonicFor, readingMnemonicFor } from '../data/mnemonics/index'
import StreakStat from './StreakStat'
import Celebration from './Celebration'
import Mnemonic from './Mnemonic'
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

// The line under the feedback headline. Characters carry an example word;
// callers whose items don't (radicals) pass their own.
function defaultNote(item) {
  return (
    <>
      {item.word.kana} <span className="quiz-feedback-romaji">({item.word.romaji})</span> — {item.word.meaning}
    </>
  )
}

export default function FlashcardQuiz({
  section,
  characters,
  answerModes = DEFAULT_ANSWER_MODES,
  promptKey = 'char',
  noteFor = defaultNote,
  markSeenOnCorrect = false,
}) {
  const { recordQuizAnswer, markCharacterSeen } = useProgressContext()
  const { settings } = useSettingsContext()
  // Seeded from the saved preference; switching it here is just for this session.
  const [answerMode, setAnswerMode] = useState(settings.quiz.answerMode) // 'choice' | 'type'
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
  const activeMode = answerModes.find((m) => m.key === target)
  const promptLabel = activeMode?.prompt ?? DEFAULT_ANSWER_MODES[0].prompt
  const typePlaceholder = activeMode?.placeholder ?? (target === 'meaning' ? 'type the meaning…' : 'type the romaji…')

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
    recordQuizAnswer(section, isCorrect, newStreak, current.char)
    // Radicals lead their screen with an "n/66 met" count, so getting one right
    // in the quiz has to move it — otherwise a whole session reads as no
    // progress. The character sections count "met" as "looked at in Learn", and
    // opt out.
    if (markSeenOnCorrect && isCorrect) markCharacterSeen(section, current.char)
    const milestone = isCorrect && newStreak > 0 && newStreak % STREAK_MILESTONE === 0
    if (settings.sound) playSound(milestone ? 'celebrate' : isCorrect ? 'correct' : 'wrong')
    if (milestone) {
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
        <span className="quiz-char">{current[promptKey]}</span>

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
              placeholder={typePlaceholder}
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
            <p className="quiz-feedback-word">{noteFor(current)}</p>

            {/* Only when you got it wrong. Right answers get the celebration;
                this is the moment a story is actually worth reading, and putting
                it here rather than back on the card is the point of the stage. */}
            {feedback === 'wrong' && (
              <Mnemonic
                entry={mnemonicFor(section, current.char)}
                // The reading hook only helps if the reading is what you missed.
                reading={target === 'romaji' ? readingMnemonicFor(section, current.char) : undefined}
                defaultOpen
                variant="feedback"
              />
            )}

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
