import { Fragment } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { componentsOf } from '../utils/radicals'
import { useCardStops } from '../hooks/useCardStops'
import { kanjiMnemonics, kanjiReadingMnemonics } from '../data/mnemonics/index'
import Mnemonic from './Mnemonic'
import '../components/CharacterCard.css'
import './KanjiCard.css'

// The card is a <div> rather than a <button> because the radical chips are
// themselves buttons, and a button inside a button is invalid. The card body
// carries the "mark it met" click; :hover and :active still reach .kana-card
// from either child, so the lift and squish are unchanged.
//
// Keyboard: the card is one composite stop, not several. Tab moves card to card
// (105 stops on the Tier 1 grid, as before the chips existed — putting every
// chip in the tab order would have made it 190), and ←/→ walk the body and its
// chips once you are on a card. That's the standard roving-tabindex pattern.
export default function KanjiCard({ section, data, onOpenRadical }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress[section]?.seenCharacters.includes(data.char)
  // Only the kanji whose parts we can actually name carry a breakdown; the rest
  // render exactly as they did before.
  const parts = componentsOf(data)
  const { cardRef, stopIndex, onKeyDown } = useCardStops()

  return (
    <div
      ref={cardRef}
      className={`kana-card kanji-card ${seen ? 'is-seen' : ''}`}
      onKeyDown={onKeyDown}
    >
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

      <button
        type="button"
        className="kana-card-body card-stop"
        tabIndex={stopIndex(0)}
        onClick={() => markCharacterSeen(section, data.char)}
      >
        <span className="kana-card-char">{data.char}</span>
        <span className="kanji-card-meaning">{data.meaning}</span>
        <span className="kana-card-romaji">{data.romaji}</span>

        <span className="kana-card-illustration" aria-hidden="true">
          <span className="kana-card-emoji">{data.emoji}</span>
        </span>

        <span className="kana-card-word">
          <span className="kana-card-word-kana">{data.word.kana}</span>
          <span className="kana-card-word-romaji">{data.word.romaji}</span>
          <span className="kana-card-word-meaning">“{data.word.meaning}”</span>
        </span>
      </button>

      {parts.length > 0 && (
        <div className="kanji-parts">
          {/* "contains" when the listed radicals don't account for every stroke,
              so the card never overclaims what it can explain. */}
          <span className="kanji-parts-label">{data.partial ? 'contains' : 'built from'}</span>
          <div className="kanji-parts-list">
            {parts.map((radical, i) => (
              <Fragment key={`${radical.char}-${i}`}>
                {i > 0 && (
                  <span className="kanji-parts-plus" aria-hidden="true">
                    +
                  </span>
                )}
                <button
                  type="button"
                  className="kanji-parts-chip card-stop"
                  tabIndex={stopIndex(i + 1)}
                  onClick={() => onOpenRadical?.(radical.char)}
                  title={`See ${radical.name} in Radicals`}
                >
                  <span className="kanji-parts-chip-char">{radical.char}</span>
                  <span className="kanji-parts-chip-name">{radical.name}</span>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Last stop on the card, after the body and every chip. */}
      <Mnemonic entry={kanjiMnemonics[data.char]}
        reading={kanjiReadingMnemonics[data.char]} tabIndex={stopIndex(parts.length + 1)} />
    </div>
  )
}
