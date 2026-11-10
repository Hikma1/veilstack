const layers = [
  {
    label: 'LAYER 01 · SURFACE',
    box: 'left-0 top-0 bg-layer-1 border-line text-muted',
    move: 'group-hover:translate-y-0',
  },
  {
    label: 'LAYER 02 · PROJECTS',
    box: 'left-[30px] top-[70px] bg-layer-2 border-line text-text/80',
    move: 'group-hover:translate-y-[14px]',
  },
  {
    label: 'LAYER 03 · CRAFT',
    box: 'left-[60px] top-[140px] bg-layer-3 border-[#4a5382] text-text/90',
    move: 'group-hover:translate-y-[28px]',
  },
  {
    label: 'LAYER 04 · THE CORE',
    box: 'left-[90px] top-[210px] bg-amber border-amber text-ink font-medium',
    move: 'group-hover:translate-y-[42px]',
    arabic: true,
  },
]

export default function LayerStack() {
  return (
    <div className="group relative w-[440px] h-[440px] max-w-full">
      {layers.map((l) => (
        <div
          key={l.label}
          className={`absolute w-[340px] h-[200px] rounded-2xl border p-[18px] font-mono text-xs
            transition-transform duration-500 ease-out motion-reduce:transition-none
            ${l.box} ${l.move}`}
        >
          {l.label}
          {l.arabic && (
            <p
              lang="ar"
              dir="rtl"
              className="font-arabic font-bold text-center text-[92px] leading-[1.1] mt-6"
            >
              حكمة
            </p>
          )}
        </div>
      ))}
    </div>
  )
}