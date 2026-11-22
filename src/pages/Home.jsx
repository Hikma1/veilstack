import { Link } from 'react-router-dom'
import LayerStack from '../components/LayerStack'
import Typewriter from '../components/Typewriter'
import Marquee from '../components/Marquee'

const focus = ['back-end systems', 'AI models', 'blockchain']
const chapters = ['00 Surface', '01 Projects', '02 Craft', '03 The core', '04 Contact']
const delay = (ms) => ({ animationDelay: `${ms}ms` })

export default function Home() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-10rem)] flex flex-col">
      <p
        aria-hidden="true"
        lang="ar"
        dir="rtl"
        style={delay(400)}
        className="animate-fade absolute right-0 bottom-16 font-arabic font-bold text-layer-1 text-[120px] md:text-[210px] leading-none whitespace-nowrap select-none"
      >
        حكمة إبراهيم
      </p>

      <div className="relative flex-1 flex flex-col md:flex-row items-center gap-10 py-10">
        <div className="flex-1">
          <p className="animate-rise font-mono text-amber text-sm">CHAPTER 00 · THE SURFACE</p>
          <h1
            style={delay(120)}
            className="animate-rise font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mt-5"
          >
            I build what lives <em className="text-amber">beneath</em> the surface.
          </h1>
          <p style={delay(240)} className="animate-rise text-lg text-muted leading-relaxed max-w-lg mt-6">
            I'm Hikma Ibrahim, a computer science student at Addis Ababa University.
            This is my work, one layer at a time.
          </p>
          <p style={delay(300)} className="animate-rise font-mono text-sm text-muted mt-5">
            Exploring: <Typewriter words={focus} className="text-amber" />
          </p>
          <div style={delay(360)} className="animate-rise flex gap-3 mt-8">
            <Link
  to="/projects"
  className="group px-6 py-3.5 bg-amber text-ink rounded-xl font-semibold transition duration-300
    hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,185,76,0.3)]"
>
  Begin the story{' '}
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
</Link>
<Link
  to="/projects"
  className="px-6 py-3.5 border border-line rounded-xl transition duration-300
    hover:border-amber hover:text-amber"
>
  Skip to projects
</Link>
          </div>
        </div>
        <LayerStack />
      </div>

      <Marquee />

      <ol
        style={delay(900)}
        className="animate-fade relative flex justify-between border-t border-layer-3 py-5 font-mono text-xs text-muted"
      >
        {chapters.map((c, i) => (
          <li key={c} className={i === 0 ? 'text-amber' : ''}>{c}</li>
        ))}
      </ol>
    </section>
  )
}