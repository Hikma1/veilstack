import Reveal from './Reveal'

export default function Divider() {
  return (
    <Reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <div aria-hidden="true" className="flex items-center gap-5">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-line" />
        <span lang="ar" dir="rtl" className="font-arabic text-3xl font-bold text-amber">
          حكمة
        </span>
         <span className="h-px flex-1 bg-linear-to-l from-transparent to-line" />
      </div>
    </Reveal>
  )
}