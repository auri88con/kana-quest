import { useProgressContext } from '../context/ProgressContext'
import './CharacterCard.css'
import './RadicalCard.css'

const MAX_EXAMPLES = 5

// Radicals live in their own progress bucket, so (unlike the kana and kanji
// cards) this doesn't take a `section` — there is only ever one.
export default function RadicalCard({ data, examples = [] }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress.radicals?.seenCharacters.includes(data.char)
  const shown = examples.slice(0, MAX_EXAMPLES)

  return (
    <button
      type="button"
      className={`kana-card radical-card ${seen ? 'is-seen' : ''}`}
      onClick={() => markCharacterSeen('radicals', data.char)}
    >
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

      <span className="radical-card-strokes">
        {data.strokes}
        <span className="radical-card-strokes-unit">{data.strokes === 1 ? 'stroke' : 'strokes'}</span>
      </span>

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
          <span className="radical-card-examples-chars">{shown.join('　')}</span>
        </span>
      )}
    </button>
  )
}
