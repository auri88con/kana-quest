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
