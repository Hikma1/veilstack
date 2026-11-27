import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toTop() {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border
        border-amber/60 bg-ink/80 text-amber backdrop-blur transition duration-300
        hover:-translate-y-1 hover:bg-amber hover:text-ink ${
          show ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
    >
      ↑
    </button>
  )
}