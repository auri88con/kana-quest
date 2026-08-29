import KanjiCard from './KanjiCard'
import '../components/CharacterBrowser.css'

export default function KanjiBrowser({ section, characters, onOpenRadical }) {
  return (
    <div className="character-browser">
      <div className="row-grid anim-pop-in">
        {characters.map((c) => (
          <KanjiCard key={c.char} section={section} data={c} onOpenRadical={onOpenRadical} />
        ))}
      </div>
    </div>
  )
}
