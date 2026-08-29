import './Skeleton.css'

/**
 * Shimmer placeholder shown while a screen's chunk is still arriving (the
 * section and settings screens are code-split). Mirrors the real layout of
 * whichever screen is coming, so the swap doesn't jump.
 */
export default function Skeleton({ variant = 'grid', cards = 10, panels = 3 }) {
  return (
    <div className="skeleton-screen" role="status" aria-label="Loading">
      <div className="skeleton skeleton-title" />

      {variant === 'grid' ? (
        <>
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
        </>
      ) : (
        <div className="skeleton-panels">
          {Array.from({ length: panels }, (_, i) => (
            <div key={i} className="skeleton skeleton-panel" />
          ))}
        </div>
      )}

      <span className="visually-hidden">Loading…</span>
    </div>
  )
}
