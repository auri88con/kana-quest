import { useProgressContext } from '../context/ProgressContext'
import './CharacterCard.css'

export default function CharacterCard({ section, data }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress[section]?.seenCharacters.includes(data.char)

  return (
    <button
      type="button"
      className={`kana-card ${seen ? 'is-seen' : ''}`}
      onClick={() => markCharacterSeen(section, data.char)}
    >
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

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
  )
}
