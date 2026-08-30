// Development-only: build a progress blob with everything finished, so the
// "done" state of the dashboard, the section cards and the met counters can be
// looked at without grinding through 484 characters by hand.
//
// This is not shipped. The only caller is a panel in Settings guarded by
// `import.meta.env.DEV`, so the whole module is dropped from a production
// build — a one-tap "fill everything" button in the real app would be one
// mistap away from erasing the learner's actual sense of progress, which is
// the thing the app exists to build.
//
// It is written the same way real progress is: onto `defaultProgress()`, field
// by field, so it stays correct when a new section or a new field is added.

import { hiraganaAllCharacters } from '../data/hiragana'
import { katakanaAllCharacters } from '../data/katakana'
import { kanjiAllCharacters } from '../data/kanji'
import { verbAllCharacters } from '../data/verbs'
import { radicals } from '../data/radicals'
import { READING_GAME_LEVELS, READING_GAME_UNLOCK_THRESHOLD } from '../data/readingGame'
import { defaultProgress } from './storage'

const NOW = () => Date.now()

// A perfect record for one item, in the same shape the SRS stage will read.
const masteredItem = () => ({ attempts: 3, correct: 3, lastCorrect: true, lastPracticedAt: NOW() })

const perfectQuiz = (count) => ({ attempts: count, correct: count, bestStreak: count })

const completedReadingGame = () => ({
  unlockedLevel: READING_GAME_LEVELS[READING_GAME_LEVELS.length - 1],
  attempts: 50,
  correct: 50,
  bestStreak: 50,
  levelProgress: Object.fromEntries(READING_GAME_LEVELS.map((l) => [l, READING_GAME_UNLOCK_THRESHOLD])),
})

export function completedProgress() {
  const progress = defaultProgress()

  const fillSection = (key, characters) => {
    progress[key].seenCharacters = characters.map((c) => c.char)
    progress[key].quiz = perfectQuiz(characters.length)
    progress[key].readingGame = completedReadingGame()
  }

  fillSection('hiragana', hiraganaAllCharacters)
  fillSection('katakana', katakanaAllCharacters)
  fillSection('kanji', kanjiAllCharacters)
  fillSection('verbs', verbAllCharacters)

  for (const style of ['polite', 'plain']) {
    progress.verbs.conjugation[style] = {
      ...perfectQuiz(verbAllCharacters.length),
      verbMastery: Object.fromEntries(verbAllCharacters.map((v) => [v.char, masteredItem()])),
    }
  }

  progress.radicals.seenCharacters = radicals.map((r) => r.char)
  progress.radicals.quiz = perfectQuiz(radicals.length)
  progress.radicals.mastery = Object.fromEntries(radicals.map((r) => [r.char, masteredItem()]))

  return progress
}

// What the panel reports back, so the numbers can be checked against the
// dashboard without opening devtools.
export function completedProgressSummary() {
  return [
    ['Hiragana', hiraganaAllCharacters.length],
    ['Katakana', katakanaAllCharacters.length],
    ['Kanji', kanjiAllCharacters.length],
    ['Verbs', verbAllCharacters.length],
    ['Radicals', radicals.length],
  ]
}
