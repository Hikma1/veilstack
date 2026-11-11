import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="pt-10 pb-16">
      <p className="font-mono text-amber text-sm">CHAPTER 01 · PROJECTS</p>
      <h1 className="font-serif text-5xl mt-3">Layers of work</h1>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              to={`/projects/${p.slug}`}
              className="block h-full rounded-2xl border border-line bg-layer-1 p-6 hover:bg-layer-2 transition-colors"
            >
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h2 className="font-serif text-2xl mt-2">{p.title}</h2>
              <p className="text-muted mt-2">{p.hook}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}