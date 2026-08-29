import { Fragment } from 'react'
import { useProgressContext } from '../context/ProgressContext'
import { componentsOf } from '../utils/radicals'
import '../components/CharacterCard.css'
import './KanjiCard.css'

export default function KanjiCard({ section, data }) {
  const { progress, markCharacterSeen } = useProgressContext()
  const seen = progress[section]?.seenCharacters.includes(data.char)
  // Only the kanji whose parts we can actually name carry a breakdown; the rest
  // render exactly as they did before.
  const parts = componentsOf(data)

  return (
    <button
      type="button"
      className={`kana-card ${seen ? 'is-seen' : ''}`}
      onClick={() => markCharacterSeen(section, data.char)}
    >
      {seen && <span className="kana-card-check" aria-hidden="true">✓</span>}

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

      {parts.length > 0 && (
        <span className="kanji-parts">
          {/* "contains" when the listed radicals don't account for every stroke,
              so the card never overclaims what it can explain. */}
          <span className="kanji-parts-label">{data.partial ? 'contains' : 'built from'}</span>
          <span className="kanji-parts-list">
            {parts.map((radical, i) => (
              <Fragment key={`${radical.char}-${i}`}>
                {i > 0 && (
                  <span className="kanji-parts-plus" aria-hidden="true">
                    +
                  </span>
                )}
                <span className="kanji-parts-chip">
                  <span className="kanji-parts-chip-char">{radical.char}</span>
                  <span className="kanji-parts-chip-name">{radical.name}</span>
                </span>
              </Fragment>
            ))}
          </span>
        </span>
      )}
    </button>
  )
}
