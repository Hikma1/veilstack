import { useEffect, useState } from 'react'

export default function Typewriter({ words, className = '' }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    const word = words[i]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const wait = done ? 1400 : empty ? 300 : deleting ? 40 : 80

    const t = setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) {
        setDeleting(false)
        setI((i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, wait)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className={className}>
        {text}
        <span className="animate-blink">|</span>
      </span>
    </>
  )
}