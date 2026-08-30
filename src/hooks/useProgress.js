import { useCallback, useEffect, useState } from 'react'
import { defaultProgress, loadProgress, saveProgress } from '../utils/storage'
import { READING_GAME_UNLOCK_THRESHOLD } from '../data/readingGame'

// A per-item accuracy/recency record, in the shape the SRS stage schedules
// from. Shared by conjugation practice and by any section that keeps a
// section-level `mastery` map (radicals, today).
function bumpMastery(map, key, isCorrect) {
  const prior = map[key] ?? { attempts: 0, correct: 0, lastCorrect: false, lastPracticedAt: 0 }
  return {
    ...map,
    [key]: {
      attempts: prior.attempts + 1,
      correct: prior.correct + (isCorrect ? 1 : 0),
      lastCorrect: isCorrect,
      lastPracticedAt: Date.now(),
    },
  }
}

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

  // `itemChar` is optional: sections that keep a `mastery` map also get a
  // per-item record, and the ones that don't simply ignore it.
  const recordQuizAnswer = useCallback((section, isCorrect, streakAfter, itemChar) => {
    setProgress((prev) => {
      const sectionData = prev[section] ?? defaultProgress()[section]
      const quiz = sectionData.quiz
      const next = {
        ...sectionData,
        quiz: {
          attempts: quiz.attempts + 1,
          correct: quiz.correct + (isCorrect ? 1 : 0),
          bestStreak: Math.max(quiz.bestStreak, streakAfter),
        },
      }
      if (sectionData.mastery && itemChar) {
        next.mastery = bumpMastery(sectionData.mastery, itemChar, isCorrect)
      }
      return { ...prev, [section]: next }
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
              verbMastery: bumpMastery(styleProgress.verbMastery, verbChar, isCorrect),
            },
          },
        },
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress())
  }, [])

  // Swap the whole blob at once. Used by the dev-only "fill everything" panel
  // today, and it is the shape cloud sync will need when a remote save has to
  // replace the local one wholesale.
  const replaceProgress = useCallback((next) => {
    setProgress(next)
  }, [])

  return {
    progress,
    markCharacterSeen,
    recordQuizAnswer,
    recordReadingAnswer,
    recordConjugationAnswer,
    resetProgress,
    replaceProgress,
  }
}
