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