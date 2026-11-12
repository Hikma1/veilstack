import { useState } from 'react'
import { contact } from '../data/profile'

const FORM_URL = '' // paste your Formspree endpoint here, e.g. https://formspree.io/f/xxxxxxx

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-xl border border-line bg-layer-1 px-4 py-3 outline-none focus:border-amber'

  return (
    <section className="pt-6 pb-16 max-w-xl">
      <p className="font-mono text-amber text-sm">CHAPTER 04 · CONTACT</p>
      <h1 className="font-serif text-5xl mt-3">Send a signal</h1>
      <p className="text-muted mt-4">
        Or write directly:{' '}
        <a className="text-amber underline" href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      {FORM_URL ? (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input name="name" required className={field} />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input name="email" type="email" required className={field} />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Message
            <textarea name="message" rows="5" required className={field} />
          </label>
          <button
            disabled={status === 'sending'}
            className="px-6 py-3.5 bg-amber text-ink rounded-xl font-semibold disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p role="status" className="text-sm text-muted">
            {status === 'sent' && 'Thank you, your message is on its way.'}
            {status === 'error' && 'Something went wrong. Please email me directly.'}
          </p>
        </form>
      ) : null}

      <ul className="mt-8 flex gap-6 font-mono text-sm">
        <li><a className="hover:text-amber" href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
        {contact.linkedin && (
          <li><a className="hover:text-amber" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        )}
      </ul>
    </section>
  )
}