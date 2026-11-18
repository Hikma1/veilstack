import { skills } from '../data/profile'

export default function Marquee() {
  const items = [...skills, ...skills]
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-t border-layer-3 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <ul className="flex w-max animate-marquee font-mono text-sm text-muted hover:[animation-play-state:paused]">
        {items.map((s, i) => (
          <li key={i} className="pr-10">{s}</li>
        ))}
      </ul>
    </div>
  )
}