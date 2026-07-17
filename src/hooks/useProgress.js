import { useCallback, useEffect, useState } from 'react'
import { defaultProgress, loadProgress, saveProgress } from '../utils/storage'

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

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress())
  }, [])

  return { progress, markCharacterSeen, recordQuizAnswer, resetProgress }
}
