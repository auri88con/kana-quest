// Cross-references between the radical set and the kanji built from it.
// Derived rather than stored: kanji.js already names each character's parts, so
// the reverse index can never drift out of sync with it.

import { kanjiAllCharacters } from '../data/kanji'
import { radicalByAnyForm } from '../data/radicals'

// Radical char -> the kanji that use it, in the order the kanji data lists them
// (so Tier 1's everyday characters come first).
export const kanjiByRadical = kanjiAllCharacters.reduce((map, kanji) => {
  for (const form of kanji.components ?? []) {
    const radical = radicalByAnyForm[form]
    if (!radical) continue
    const list = (map[radical.char] ??= [])
    if (!list.includes(kanji.char)) list.push(kanji.char)
  }
  return map
}, {})

// The radical entries a kanji is built from, in the order kanji.js lists them.
// Unknown forms are dropped rather than rendered blank — check-radicals.mjs
// fails the build if one ever appears, so this is belt and braces.
export function componentsOf(kanji) {
  return (kanji.components ?? []).map((form) => radicalByAnyForm[form]).filter(Boolean)
}
