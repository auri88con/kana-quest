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

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress())
  }, [])

  return { progress, markCharacterSeen, recordQuizAnswer, recordReadingAnswer, resetProgress }
}
