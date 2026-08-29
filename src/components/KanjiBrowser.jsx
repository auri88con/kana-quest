import KanjiCard from './KanjiCard'
import '../components/CharacterBrowser.css'

export default function KanjiBrowser({ section, characters, onOpenRadical }) {
  return (
    <div className="character-browser">
      {/* Said once for the grid: repeating it per card would make screen-reader
          browsing unbearable. */}
      <p className="visually-hidden">
        Cards that show what a kanji is built from have their radicals on the left and right arrow keys.
      </p>
      <div className="row-grid anim-pop-in">
        {characters.map((c) => (
          <KanjiCard key={c.char} section={section} data={c} onOpenRadical={onOpenRadical} />
        ))}
      </div>
    </div>
  )
}
