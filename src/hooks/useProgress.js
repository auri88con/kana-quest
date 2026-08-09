import { useCallback, useEffect, useState } from 'react'
import { defaultProgress, loadProgress, saveProgress } from '../utils/storage'
import { READING_GAME_UNLOCK_THRESHOLD } from '../data/readingGame'

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const markCharacterSeen = useCallback((section, char) => {
    setProgress((prev) => {
      const sectionData = prev[section] ?? defaultProgress()[section]
      if (sectionData.seenCharacters.includes(char)) return prev
      return {
        ...prev,
        [section]: {
          ...sectionData,
          seenCharacters: [...sectionData.seenCharacters, char],
        },
      }
    })
  }, [])

  const recordQuizAnswer = useCallback((section, isCorrect, streakAfter) => {
    setProgress((prev) => {
      const sectionData = prev[section] ?? defaultProgress()[section]
      const quiz = sectionData.quiz
      return {
        ...prev,
        [section]: {
          ...sectionData,
          quiz: {
            attempts: quiz.attempts + 1,
            correct: quiz.correct + (isCorrect ? 1 : 0),
            bestStreak: Math.max(quiz.bestStreak, streakAfter),
          },
        },
      }
    })
  }, [])

  const recordReadingAnswer = useCallback((section, level, isCorrect, streakAfter) => {
    setProgress((prev) => {
      const sectionData = prev[section] ?? defaultProgress()[section]
      const readingGame = sectionData.readingGame
      const priorLevelCorrect = readingGame.levelProgress[level] ?? 0
      const levelCorrect = isCorrect
        ? Math.min(priorLevelCorrect + 1, READING_GAME_UNLOCK_THRESHOLD)
        : priorLevelCorrect

      let unlockedLevel = readingGame.unlockedLevel
      if (isCorrect && level === unlockedLevel && levelCorrect >= READING_GAME_UNLOCK_THRESHOLD) {
        unlockedLevel = Math.min(unlockedLevel + 1, 5)
      }

      return {
        ...prev,
        [section]: {
          ...sectionData,
          readingGame: {
            unlockedLevel,
            attempts: readingGame.attempts + 1,
            correct: readingGame.correct + (isCorrect ? 1 : 0),
            bestStreak: Math.max(readingGame.bestStreak, streakAfter),
            levelProgress: { ...readingGame.levelProgress, [level]: levelCorrect },
          },
        },
      }
    })
  }, [])

  // Conjugation practice only exists for the verbs section, so (unlike the
  // generic actions above) this is deliberately hardcoded to `verbs` rather
  // than taking a `section` param — keeps the special-casing contained here
  // instead of sprinkling `if (section === 'verbs')` through shared code.
  const recordConjugationAnswer = useCallback((style, verbChar, isCorrect, streakAfter) => {
    setProgress((prev) => {
      const sectionData = prev.verbs ?? defaultProgress().verbs
      const styleProgress = sectionData.conjugation[style]
      const prior = styleProgress.verbMastery[verbChar] ?? {
        attempts: 0,
        correct: 0,
        lastCorrect: false,
        lastPracticedAt: 0,
      }
      return {
        ...prev,
        verbs: {
          ...sectionData,
          conjugation: {
            ...sectionData.conjugation,
            [style]: {
              attempts: styleProgress.attempts + 1,
              correct: styleProgress.correct + (isCorrect ? 1 : 0),
              bestStreak: Math.max(styleProgress.bestStreak, streakAfter),
              verbMastery: {
                ...styleProgress.verbMastery,
                [verbChar]: {
                  attempts: prior.attempts + 1,
                  correct: prior.correct + (isCorrect ? 1 : 0),
                  lastCorrect: isCorrect,
                  lastPracticedAt: Date.now(),
                },
              },
            },
          },
        },
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress())
  }, [])

  return {
    progress,
    markCharacterSeen,
    recordQuizAnswer,
    recordReadingAnswer,
    recordConjugationAnswer,
    resetProgress,
  }
}
