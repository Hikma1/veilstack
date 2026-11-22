import { useEffect, useRef, useState } from 'react'

export default function Timeline({ items }) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }
    let raf = 0

    function update() {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const mark = window.innerHeight * 0.6
      setProgress(Math.min(1, Math.max(0, (mark - r.top) / r.height)))
    }

function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

return (
    <ol ref={ref} className="relative flex flex-col">
      <span aria-hidden="true" className="absolute left-1 top-2 bottom-2 w-px bg-layer-3" />
      <span
        aria-hidden="true"
        className="absolute left-1 top-2 w-px bg-amber transition-[height] duration-150"
        style={{ height: `calc((100% - 1rem) * ${progress})` }}
      />
      {items.map((t, i) => {
        const threshold = items.length > 1 ? i / (items.length - 1) : 0
        const reached = progress >= threshold - 0.02
        return (
          <li key={t.what} className="relative flex gap-5 pb-8 last:pb-0">
            <span
              className={`relative z-10 mt-2 h-2.5 w-2.5 flex-none rounded-full border transition-all duration-500 ${
                reached
                  ? 'scale-125 border-amber bg-amber shadow-[0_0_12px_rgba(245,185,76,0.6)]'
                  : 'border-line bg-ink'
              }`}
            />
            <div>
              <p className="font-mono text-xs text-muted">{t.when}</p>
              <p className="mt-1 text-lg">{t.what}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}