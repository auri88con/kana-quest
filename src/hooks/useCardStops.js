import { useRef, useState } from 'react'

/**
 * Roving tabindex for a card that holds more than one control.
 *
 * A card is one Tab stop, not several: Tab moves between cards and the arrow
 * keys walk the controls inside the focused one. Without this, giving each card
 * a body button plus a mnemonic disclosure plus its radical chips would triple
 * the length of a grid for keyboard users — the Kanji Learn grid alone went from
 * 105 stops to 190 the moment the chips became buttons.
 *
 * Every control inside the card opts in with the `card-stop` class, and takes
 * its tabIndex from `stopIndex`. The active stop is held in state rather than
 * written onto the DOM, so a re-render can't strand a card with nothing
 * tabbable.
 *
 *   const { cardRef, stopIndex, onKeyDown } = useCardStops()
 *   <div ref={cardRef} onKeyDown={onKeyDown}>
 *     <button className="card-stop" tabIndex={stopIndex(0)}>…</button>
 *     <button className="card-stop" tabIndex={stopIndex(1)}>…</button>
 */
export function useCardStops() {
  const cardRef = useRef(null)
  const [active, setActive] = useState(0)

  function onKeyDown(event) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const stops = [...cardRef.current.querySelectorAll('.card-stop')]
    const index = stops.indexOf(document.activeElement)
    if (index < 0) return
    const next = index + (event.key === 'ArrowRight' ? 1 : -1)
    if (next < 0 || next >= stops.length) return
    event.preventDefault()
    setActive(next)
    stops[next].focus()
  }

  return { cardRef, stopIndex: (i) => (active === i ? 0 : -1), onKeyDown }
}
