import { useProgressContext } from '../context/ProgressContext'
import { conjugate } from '../utils/conjugate'
import '../components/CharacterCard.css'
import './VerbCard.css'

export default function VerbCard({ section, data, style }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress[section]?.seenCharacters.includes(data.char)
  const forms = conjugate(data)[style]

  return (
    <div className={`kana-card verb-card ${seen ? 'is-seen' : ''}`}>
      <button type="button" className="verb-card-hero" onClick={() => markCharacterSeen(section, data.char)}>
        {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

        {data.hasKanji && <span className="verb-card-furigana">{data.kana}</span>}
        <span className="kana-card-char">{data.char}</span>
        <span className="kana-card-romaji">{data.romaji}</span>
        <span className="kanji-card-meaning">{data.meaning}</span>

        <span className="kana-card-illustration" aria-hidden="true">
          <span className="kana-card-emoji">{data.emoji}</span>
        </span>
      </button>

      <table className="verb-conjugation-table">
        <tbody>
          {forms.map((form) => (
            <tr key={form.key}>
              <th>{form.label}</th>
              <td>
                <span className="verb-form-kanji">{form.kanji}</span>
                <span className="verb-form-kana">{form.kana}</span>
                <span className="verb-form-romaji">({form.romaji})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span className="kana-card-word">
        <span className="kana-card-word-kana">{data.word.kana}</span>
        <span className="kana-card-word-romaji">{data.word.romaji}</span>
        <span className="kana-card-word-meaning">“{data.word.meaning}”</span>
      </span>
    </div>
  )
}
