// Forgiving romaji matching: accepts common alternate romanizations
// (Hepburn vs. Kunrei-shiki/Nihon-shiki) by normalizing both the typed
// answer and the canonical romaji to the same baseline before comparing.
const ALT_TO_CANON = [
  ['sya', 'sha'], ['syu', 'shu'], ['syo', 'sho'],
  ['tya', 'cha'], ['tyu', 'chu'], ['tyo', 'cho'],
  ['zya', 'ja'], ['zyu', 'ju'], ['zyo', 'jo'],
  ['jya', 'ja'], ['jyu', 'ju'], ['jyo', 'jo'],
  ['si', 'shi'], ['ti', 'chi'], ['tu', 'tsu'], ['hu', 'fu'],
  ['zi', 'ji'], ['di', 'ji'], ['du', 'zu'],
  ['wo', 'o'],
]

export function normalizeRomaji(input) {
  let value = (input ?? '').toLowerCase().trim().replace(/[^a-z]/g, '')
  for (const [alt, canon] of ALT_TO_CANON) {
    value = value.split(alt).join(canon)
  }
  return value
}

export function isRomajiMatch(input, canonicalRomaji) {
  if (!input || !input.trim()) return false
  return normalizeRomaji(input) === normalizeRomaji(canonicalRomaji)
}
