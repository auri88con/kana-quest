import RadicalCard from './RadicalCard'
import { useProgressContext } from '../context/ProgressContext'
import { radicals, radicalsByGroup } from '../data/radicals'
import { kanjiByRadical } from '../utils/radicals'
import './CharacterBrowser.css'
import './RadicalBrowser.css'

export default function RadicalBrowser({ onOpenLearn }) {
  const { progress } = useProgressContext()
  const met = progress.radicals?.seenCharacters.length ?? 0

  return (
    <div className="character-browser radical-browser">
      <div className="radical-flow card-surface anim-pop-in">
        <span className="radical-flow-emoji" aria-hidden="true">🧩</span>
        <div className="radical-flow-body">
          <h3>Learn these first</h3>
          <p>
            Kanji aren’t random squiggles — almost all of them are assembled from a small set of parts. Meet the
            parts here, and the characters start explaining themselves.
          </p>
          <div className="radical-flow-actions">
            <span className="radical-flow-count">
              {met}
              <span className="radical-flow-count-of">/{radicals.length} met</span>
            </span>
            <button type="button" className="btn btn-outline" onClick={onOpenLearn}>
              Then the kanji →
            </button>
          </div>
        </div>
      </div>

      {radicalsByGroup.map((group) => (
        <div className="row-section" key={group.key}>
          <h4 className="row-section-label">
            <span aria-hidden="true">{group.emoji}</span> {group.label}
          </h4>
          <div className="radical-grid">
            {group.radicals.map((radical) => (
              <RadicalCard key={radical.char} data={radical} examples={kanjiByRadical[radical.char]} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
