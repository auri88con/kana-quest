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

// Builds shuffled multiple-choice romaji options, guaranteeing no duplicate
// romaji among the options (some kana share a romanization, e.g. じ/ぢ = "ji").
export function buildMultipleChoiceOptions(characters, correct, count = 4) {
  const usedRomaji = new Set([correct.romaji])
  const pool = shuffle(characters.filter((c) => c.char !== correct.char))
  const distractors = []

  for (const candidate of pool) {
    if (distractors.length >= count - 1) break
    if (usedRomaji.has(candidate.romaji)) continue
    usedRomaji.add(candidate.romaji)
    distractors.push(candidate.romaji)
  }

  return shuffle([correct.romaji, ...distractors])
}
