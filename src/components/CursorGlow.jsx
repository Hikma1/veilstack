import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    let raf = 0
    function onMove(e) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!ref.current) return
        ref.current.style.setProperty('--mx', `${e.clientX}px`)
        ref.current.style.setProperty('--my', `${e.clientY}px`)
        ref.current.style.opacity = '1'
      })
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(245,185,76,0.08), transparent 70%)',
      }}
    />
  )
}