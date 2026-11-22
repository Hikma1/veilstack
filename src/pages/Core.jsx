import { intro, skills, languages, timeline } from '../data/profile'
import Reveal from '../components/Reveal'
import Timeline from '../components/Timeline'

export default function Core() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <p
        aria-hidden="true"
        lang="ar"
        dir="rtl"
        className="pointer-events-none absolute -top-6 right-0 select-none font-arabic text-[140px] md:text-[220px] font-bold leading-none text-layer-1"
      >
        حكمة
      </p>

      <div className="relative">
        <p className="animate-rise font-mono text-amber text-sm">CHAPTER 03 · THE CORE</p>
        <h1
          style={{ animationDelay: '120ms' }}
          className="animate-rise font-serif text-5xl md:text-6xl mt-3"
        >
          The person <em className="text-amber">underneath</em>
        </h1>

        <div className="mt-12 grid gap-14 md:grid-cols-[1fr_380px]">
          <div>
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-10 font-mono text-xs text-muted">STACK</h2>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line bg-layer-2 px-3.5 py-2 transition duration-300
                      hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-10 font-mono text-xs text-muted">LANGUAGES</h2>
              <p className="mt-3 font-mono text-sm">{languages.join(' · ')}</p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <h2 className="mb-5 font-mono text-xs text-muted">TIMELINE</h2>
            <Timeline items={timeline} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}