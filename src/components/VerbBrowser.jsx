import VerbCard from './VerbCard'
import '../components/CharacterBrowser.css'

export default function VerbBrowser({ section, characters, style }) {
  return (
    <div className="character-browser">
      <div className="row-grid verb-grid anim-pop-in">
        {characters.map((c) => (
          <VerbCard key={c.char} section={section} data={c} style={style} />
        ))}
      </div>
    </div>
  )
}
