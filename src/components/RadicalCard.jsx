import { useProgressContext } from '../context/ProgressContext'
import { useCardStops } from '../hooks/useCardStops'
import { radicalMnemonics } from '../data/mnemonics'
import Mnemonic from './Mnemonic'
import './CharacterCard.css'
import './RadicalCard.css'

const MAX_EXAMPLES = 5

// Like KanjiCard, the root is a <div> rather than a <button>: the mnemonic
// disclosure below is a button of its own, and nesting buttons is invalid.
// Radicals live in their own progress bucket, so (unlike the kana and kanji
// cards) this doesn't take a `section` — there is only ever one.
export default function RadicalCard({ data, examples = [], focused = false, innerRef }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress.radicals?.seenCharacters.includes(data.char)
  const shown = examples.slice(0, MAX_EXAMPLES)
  const { cardRef, stopIndex, onKeyDown } = useCardStops()

  return (
    <div
      ref={(node) => {
        cardRef.current = node
        if (innerRef) innerRef.current = node
      }}
      className={`kana-card radical-card ${seen ? 'is-seen' : ''} ${focused ? 'is-focused' : ''}`}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

      <span className="radical-card-strokes">
        {data.strokes}
        <span className="radical-card-strokes-unit">{data.strokes === 1 ? 'stroke' : 'strokes'}</span>
      </span>

      <button
        type="button"
        className="radical-card-body card-stop"
        tabIndex={stopIndex(0)}
        onClick={() => markCharacterSeen('radicals', data.char)}
      >
        <span className="kana-card-char">{data.char}</span>

        {data.variants.length > 0 && (
          <span className="radical-card-variants">
            <span className="radical-card-variants-label">also written</span>
            {data.variants.map((variant) => (
              <span key={variant} className="radical-card-variant">
                {variant}
              </span>
            ))}
          </span>
        )}

        <span className="kanji-card-meaning">{data.name}</span>
        {data.nickname !== data.name && <span className="radical-card-nickname">“{data.nickname}”</span>}

        <span className="kana-card-illustration" aria-hidden="true">
          <span className="kana-card-emoji">{data.emoji}</span>
        </span>

        <span className="radical-card-meaning">{data.meaning}</span>

        {shown.length > 0 && (
          <span className="radical-card-examples">
            <span className="radical-card-examples-label">appears in</span>
            <span className="radical-card-examples-chars">
              {shown.join('　')}
              {/* Say so when the list is cut short, rather than quietly implying
                  this radical turns up in exactly five kanji. */}
              {examples.length > shown.length && (
                <span className="radical-card-examples-more">+{examples.length - shown.length}</span>
              )}
            </span>
          </span>
        )}
      </button>

      <Mnemonic entry={radicalMnemonics[data.char]} tabIndex={stopIndex(1)} />
    </div>
  )
}
