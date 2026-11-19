import { useRef, useState } from 'react'

const layers = [
  { label: 'LAYER 01 · SURFACE', box: 'left-0 top-0 bg-layer-1 border-line text-muted' },
  { label: 'LAYER 02 · PROJECTS', box: 'left-[30px] top-[70px] bg-layer-2 border-line text-text/80' },
  { label: 'LAYER 03 · CRAFT', box: 'left-[60px] top-[140px] bg-layer-3 border-[#4a5382] text-text/90' },
  { label: 'LAYER 04 · THE CORE', box: 'left-[90px] top-[210px] bg-amber border-amber text-ink font-medium', arabic: true },
]

export default function LayerStack() {
  const [spread, setSpread] = useState(false)
  const tilt = useRef(null)
  const lastPointer = useRef('mouse')

  function handleMove(e) {
    if (e.pointerType !== 'mouse' || !tilt.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    tilt.current.style.transform =
      `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg)`
  }

  function reset() {
    if (tilt.current) tilt.current.style.transform = ''
  }

  return (
    <div
      className="relative w-110 h-110 max-w-full"
      onPointerDown={(e) => { lastPointer.current = e.pointerType }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setSpread(true)}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setSpread(false); reset() }}
      onPointerMove={handleMove}
      onClick={() => lastPointer.current !== 'mouse' && setSpread((s) => !s)}
    >
      <div className="absolute inset-0 animate-float">
        <div ref={tilt} className="absolute inset-0 transition-transform duration-200 ease-out">
          {layers.map((l, i) => (
            <div
              key={l.label}
              style={{
                translate: `0 ${spread ? i * 14 : 0}px`,
                animationDelay: `${300 + i * 150}ms`,
              }}
              className={`absolute w-[340px] h-[200px] rounded-2xl border p-[18px] font-mono text-xs
                animate-rise transition-transform duration-500 ease-out ${l.box}`}
            >
              {l.label}
              {l.arabic && (
                <p lang="ar" dir="rtl" className="font-arabic font-bold text-center text-[92px] leading-[1.1] mt-6">
                  حكمة
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}