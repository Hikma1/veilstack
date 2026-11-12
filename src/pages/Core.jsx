import { intro, skills, languages, timeline } from '../data/profile'

export default function Core() {
  return (
    <section className="pt-6 pb-16">
      <p className="font-mono text-amber text-sm">CHAPTER 03 · THE CORE</p>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">
        The person <em className="text-amber">underneath</em>
      </h1>

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_420px]">
        <div>
          <p className="text-lg text-muted leading-relaxed max-w-xl">{intro}</p>
          <ul className="flex flex-wrap gap-2 mt-8 text-sm">
            {skills.map((s) => (
              <li key={s} className="px-3.5 py-2 rounded-full bg-layer-2 border border-line">
                {s}
              </li>
            ))}
          </ul>
          <p className="font-mono text-sm text-muted mt-7">{languages.join(' · ')}</p>
        </div>

        <ol className="flex flex-col">
          {timeline.map((t, i) => (
            <li key={t.what} className="flex gap-5 pb-7">
              <span
                className={`mt-2 h-2.5 w-2.5 flex-none rounded-full ${i === 0 ? 'bg-amber' : 'bg-[#4a5382]'}`}
              />
              <div>
                <p className="font-mono text-xs text-muted">{t.when}</p>
                <p className="text-lg mt-1">{t.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}