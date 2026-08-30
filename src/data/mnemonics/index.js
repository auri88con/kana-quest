// The mnemonic corpus, split one file per script so each stays readable and
// editable on its own. See radicals.js for the two-field convention (`story` is
// the playful hook, `why` is the grounded reason) and the rule that keeps the
// stories honest.

import {
  hiraganaMnemonics,
  hiraganaVoicedMnemonics,
  hiraganaHandakuonMnemonics,
  hiraganaYoonMnemonics,
} from './hiragana'
import {
  katakanaMnemonics,
  katakanaVoicedMnemonics,
  katakanaHandakuonMnemonics,
  katakanaYoonMnemonics,
} from './katakana'

import { radicalMnemonics } from './radicals'
import { kanjiMnemonics, kanjiReadingMnemonics } from './kanji'

export { radicalMnemonics } from './radicals'
export { kanjiMnemonics, kanjiReadingMnemonics } from './kanji'

// Flattened per section, because the kana browsers render every row from one
// list and shouldn't have to know which of the four groups a character came
// from. A section with no stories written yet is simply an empty map, and the
// disclosure renders nothing.
export const kanaMnemonics = {
  hiragana: {
    ...hiraganaMnemonics,
    ...hiraganaVoicedMnemonics,
    ...hiraganaHandakuonMnemonics,
    ...hiraganaYoonMnemonics,
  },
  katakana: {
    ...katakanaMnemonics,
    ...katakanaVoicedMnemonics,
    ...katakanaHandakuonMnemonics,
    ...katakanaYoonMnemonics,
  },
}

// One lookup for the shared quiz engine, which knows its section but not which
// corpus that section's stories live in. Verbs have no mnemonics by design, and
// simply come back undefined.
export function mnemonicFor(section, char) {
  if (section === 'radicals') return radicalMnemonics[char]
  if (section === 'kanji') return kanjiMnemonics[char]
  return kanaMnemonics[section]?.[char]
}

// Only kanji carry a reading hook, and it is only worth showing when the
// question was about the reading in the first place.
export function readingMnemonicFor(section, char) {
  return section === 'kanji' ? kanjiReadingMnemonics[char] : undefined
}
