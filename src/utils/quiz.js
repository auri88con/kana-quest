export function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function pickRandom(array, excludeItem, keyFn = (item) => item.char) {
  if (array.length === 0) return null
  if (array.length === 1) return array[0]
  let choice = array[Math.floor(Math.random() * array.length)]
  let guard = 0
  while (excludeItem && keyFn(choice) === keyFn(excludeItem) && guard < 50) {
    choice = array[Math.floor(Math.random() * array.length)]
    guard += 1
  }
  return choice
}

// Builds shuffled multiple-choice answer options, guaranteeing no duplicate
// answer values among the options (some kana share a romanization, e.g.
// じ/ぢ = "ji"). `keyFn` extracts the answer value to show/compare (defaults
// to romaji); `excludeKeyFn` identifies "the same item" to exclude from the
// distractor pool (defaults to the character itself).
export function buildMultipleChoiceOptions(
  characters,
  correct,
  count = 4,
  keyFn = (item) => item.romaji,
  excludeKeyFn = (item) => item.char,
) {
  const usedKeys = new Set([keyFn(correct)])
  const pool = shuffle(characters.filter((c) => excludeKeyFn(c) !== excludeKeyFn(correct)))
  const distractors = []

  for (const candidate of pool) {
    if (distractors.length >= count - 1) break
    const key = keyFn(candidate)
    if (usedKeys.has(key)) continue
    usedKeys.add(key)
    distractors.push(key)
  }

  return shuffle([keyFn(correct), ...distractors])
}
