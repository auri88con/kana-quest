import { useState } from 'react'
import './Mnemonic.css'

/**
 * The "How to remember" disclosure on a character card.
 *
 * Collapsed by default so the grid keeps its shape — the stories are long, and
 * they are for the moment you are stuck, not for every glance at the card.
 *
 * `story` is the silly hook and `why` is the honest explanation beneath it; see
 * the header of data/mnemonics.js for why both exist. Renders nothing at all
 * when there is no entry yet, so a half-written script degrades to the card as
 * it was rather than to an empty box.
 */
export default function Mnemonic({ entry, tabIndex }) {
  const [open, setOpen] = useState(false)
  if (!entry) return null

  return (
    <div className={`mnemonic ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="mnemonic-toggle card-stop"
        tabIndex={tabIndex}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">💡</span>
        How to remember
        <span className="mnemonic-caret" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="mnemonic-body">
          <p className="mnemonic-story">{entry.story}</p>
          <p className="mnemonic-why">{entry.why}</p>
        </div>
      )}
    </div>
  )
}
