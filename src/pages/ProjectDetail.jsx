import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import NotFound from './NotFound'

const layerInfo = [
  ['surface', 'LAYER 01 · THE SURFACE', 'What it does, and who it is for', 'bg-layer-1'],
  ['mechanism', 'LAYER 02 · THE MECHANISM', 'How it works under the hood', 'bg-layer-2'],
  ['core', 'LAYER 03 · THE CORE', 'What went wrong, and what I learned', 'bg-layer-3'],
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="pt-6 pb-16">
      <Link to="/projects" className="font-mono text-xs text-amber">← ALL CHAPTERS</Link>
      <h1 className="font-serif text-5xl md:text-6xl mt-6">{p.title}</h1>
      <p className="text-lg text-muted mt-4 max-w-xl">{p.hook}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-3">
          {layerInfo.map(([key, label, question, bg]) => (
            <details key={key} className={`group rounded-2xl border border-line ${bg} p-5`}>
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span>
                  <span className="block font-mono text-xs text-amber">{label}</span>
                  <span className="block text-lg mt-1">{question}</span>
                </span>
                <span className="text-amber text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted leading-relaxed">{p.layers[key]}</p>
            </details>
          ))}
        </div>

        <aside className="flex flex-col gap-5">
          <div className="border-t border-line pt-3">
            <p className="font-mono text-xs text-muted">ROLE</p>
            <p className="mt-1">{p.role}</p>
          </div>
          <div className="border-t border-line pt-3">
            <p className="font-mono text-xs text-muted">STACK</p>
            <p className="mt-1">{p.stack.join(' · ')}</p>
          </div>
          <div className="border-t border-line pt-3">
            <p className="font-mono text-xs text-muted">RESULT</p>
            <p className="mt-1">{p.result}</p>
          </div>
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer"
               className="px-5 py-3 bg-amber text-ink rounded-xl font-semibold text-center">
              View source on GitHub
            </a>
          )}
          <Link to={`/projects/${next.slug}`}
                className="px-5 py-3 border border-line rounded-xl text-center">
            Next chapter →
          </Link>
        </aside>
      </div>
    </article>
  )
}