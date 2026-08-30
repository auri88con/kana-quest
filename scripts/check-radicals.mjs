// Validates the radical data and every kanji "built from" breakdown.
//
// The rule this enforces is the one that keeps the feature honest: a kanji may
// only name components that exist in the radical set, and if those components
// don't account for the whole character the entry must say so with
// `partial: true`. Anything uncertain is left out rather than guessed at.
//
//   npm run check:radicals

import { radicals, radicalGroups, radicalByAnyForm } from '../src/data/radicals.js'
import { kanjiTier1, kanjiAllCharacters } from '../src/data/kanji.js'
import { radicalMnemonics } from '../src/data/mnemonics.js'

const errors = []
const warnings = []

const groupKeys = new Set(radicalGroups.map((g) => g.key))
const seenForms = new Map()

for (const r of radicals) {
  const where = `radical ${r.char}`
  if (!r.name || !r.nickname || !r.meaning) errors.push(`${where}: missing name, nickname or meaning`)
  if (!r.emoji) errors.push(`${where}: missing emoji`)
  if (!Number.isInteger(r.strokes) || r.strokes < 1) errors.push(`${where}: strokes must be a positive integer`)
  if (!groupKeys.has(r.group)) errors.push(`${where}: unknown group "${r.group}"`)
  if (!Array.isArray(r.variants)) errors.push(`${where}: variants must be an array`)

  for (const form of [r.char, ...(r.variants ?? [])]) {
    if (seenForms.has(form)) errors.push(`${where}: form ${form} is already used by ${seenForms.get(form)}`)
    else seenForms.set(form, r.char)
  }
}

for (const group of radicalGroups) {
  if (!radicals.some((r) => r.group === group.key)) warnings.push(`group "${group.key}" has no radicals`)
}

for (const kanji of kanjiAllCharacters) {
  const where = `kanji ${kanji.char}`
  if (kanji.components === undefined) {
    if (kanji.partial) errors.push(`${where}: partial: true without any components`)
    continue
  }
  if (!Array.isArray(kanji.components) || kanji.components.length === 0) {
    errors.push(`${where}: components must be a non-empty array`)
    continue
  }
  for (const form of kanji.components) {
    if (!radicalByAnyForm[form]) errors.push(`${where}: component ${form} is not in the radical set`)
  }
  if (kanji.partial !== undefined && kanji.partial !== true) {
    errors.push(`${where}: partial must be true or absent`)
  }
}

// Mnemonics are keyed by a radical's canonical char, so a typo or a renamed
// radical would otherwise leave a story orphaned and a card silently blank.
const radicalChars = new Set(radicals.map((r) => r.char))
for (const [char, entry] of Object.entries(radicalMnemonics)) {
  const where = `mnemonic ${char}`
  if (!radicalChars.has(char)) {
    errors.push(`${where}: no radical with this char (variants like 亻 must be keyed by their canonical form)`)
    continue
  }
  if (!entry.story?.trim()) errors.push(`${where}: missing story`)
  if (!entry.why?.trim()) errors.push(`${where}: missing why`)
}
const missingMnemonics = radicals.filter((r) => !radicalMnemonics[r.char])

// Unused radicals aren't a defect — the set teaches the common radicals, not
// only the ones Tier 1 happens to need — but it's worth seeing the number.
const used = new Set(kanjiAllCharacters.flatMap((k) => k.components ?? []).map((f) => radicalByAnyForm[f]?.char))
const withComponents = kanjiTier1.filter((k) => k.components)
const full = withComponents.filter((k) => !k.partial)

console.log(`radicals:      ${radicals.length} across ${radicalGroups.length} groups`)
console.log(`used by kanji: ${used.size}/${radicals.length}`)
console.log(
  `tier 1 broken down: ${withComponents.length}/${kanjiTier1.length}` +
    ` (${full.length} full, ${withComponents.length - full.length} partial)`,
)

console.log(
  `radical mnemonics: ${Object.keys(radicalMnemonics).length}/${radicals.length}` +
    (missingMnemonics.length ? ` — still to write: ${missingMnemonics.map((r) => r.char).join(' ')}` : ''),
)

for (const w of warnings) console.warn(`warning: ${w}`)

if (errors.length) {
  console.error(`\n${errors.length} error(s):`)
  for (const e of errors) console.error(`  ${e}`)
  process.exit(1)
}

console.log('\nradical data OK')
