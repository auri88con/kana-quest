import { useProgressContext } from '../context/ProgressContext'
import { useCardStops } from '../hooks/useCardStops'
import Mnemonic from './Mnemonic'
import './CharacterCard.css'

// A <div> root with the card face as a button inside it, matching KanjiCard and
// RadicalCard: the mnemonic disclosure is a button of its own, and a button
// inside a button is invalid. `mnemonic` is undefined until the kana stories
// land, and Mnemonic renders nothing for that — the card is unchanged.
export default function CharacterCard({ section, data, mnemonic }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress[section]?.seenCharacters.includes(data.char)
  const { cardRef, stopIndex, onKeyDown } = useCardStops()

  return (
    <div ref={cardRef} className={`kana-card ${seen ? 'is-seen' : ''}`} onKeyDown={onKeyDown}>
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

      <button
        type="button"
        className="kana-card-body card-stop"
        tabIndex={stopIndex(0)}
        onClick={() => markCharacterSeen(section, data.char)}
      >
        <span className="kana-card-char">{data.char}</span>
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

      <Mnemonic entry={mnemonic} tabIndex={stopIndex(1)} />
    </div>
  )
}
