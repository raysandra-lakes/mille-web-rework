export default function Accordion({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  const id = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 bg-transparent px-5 py-5 text-left font-display text-base font-bold text-foreground"
      >
        {question}
        <svg className={`size-5 shrink-0 text-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div id={id} className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden"><p className="border-t border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground">{answer}</p></div>
      </div>
    </div>
  )
}
