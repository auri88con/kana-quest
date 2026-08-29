import './Skeleton.css'

/**
 * Shimmer placeholder shown while a screen's chunk is still arriving (the
 * section and settings screens are code-split). Mirrors the real layout — a
 * title, a row of tabs and a card grid — so the swap doesn't jump.
 */
export default function Skeleton({ cards = 10 }) {
  return (
    <div className="skeleton-screen" role="status" aria-label="Loading">
      <div className="skeleton skeleton-title" />
      <div className="skeleton-tabs">
        <span className="skeleton skeleton-tab" />
        <span className="skeleton skeleton-tab" />
        <span className="skeleton skeleton-tab" />
      </div>
      <div className="skeleton-grid">
        {Array.from({ length: cards }, (_, i) => (
          <div key={i} className="skeleton skeleton-card" />
        ))}
      </div>
      <span className="visually-hidden">Loading…</span>
    </div>
  )
}
