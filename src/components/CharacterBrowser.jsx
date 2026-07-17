import { useState } from 'react'
import CharacterCard from './CharacterCard'
import './CharacterBrowser.css'

function RowSection({ section, group, compact }) {
  return (
    <div className="row-section">
      <h4 className="row-section-label">{group.label}</h4>
      <div className={`row-grid ${compact ? 'row-grid-compact' : ''}`}>
        {group.characters.map((c) => (
          <CharacterCard key={c.char} section={section} data={c} />
        ))}
      </div>
    </div>
  )
}

export default function CharacterBrowser({ section, rowGroups, dakuonGroups, handakuonGroups, yoonGroups }) {
  const [tab, setTab] = useState('main')

  return (
    <div className="character-browser">
      <div className="pill-tabs browser-tabs">
        <button
          className={`pill-tab ${tab === 'main' ? 'is-active' : ''}`}
          onClick={() => setTab('main')}
        >
          Main Rows
        </button>
        <button
          className={`pill-tab ${tab === 'dakuon' ? 'is-active' : ''}`}
          onClick={() => setTab('dakuon')}
        >
          Dakuon &amp; More
        </button>
      </div>

      {tab === 'main' && (
        <div className="anim-pop-in">
          {rowGroups.map((group) => (
            <RowSection key={group.id} section={section} group={group} />
          ))}
        </div>
      )}

      {tab === 'dakuon' && (
        <div className="anim-pop-in">
          <h3 className="browser-subheading">Voiced sounds (濁音 dakuon)</h3>
          {dakuonGroups.map((group) => (
            <RowSection key={group.id} section={section} group={group} />
          ))}

          <h3 className="browser-subheading">Handakuon (半濁音 p-sounds)</h3>
          {handakuonGroups.map((group) => (
            <RowSection key={group.id} section={section} group={group} />
          ))}

          <h3 className="browser-subheading">Combination sounds (拗音 yōon)</h3>
          {yoonGroups.map((group) => (
            <RowSection key={group.id} section={section} group={group} compact />
          ))}
        </div>
      )}
    </div>
  )
}
