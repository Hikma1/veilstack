export default function SpotlightCard({ children, className = '' }) {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-layer-1
        transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(300px circle at var(--x) var(--y), rgba(245,185,76,0.15), transparent 70%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}