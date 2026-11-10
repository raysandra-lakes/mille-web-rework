import { Link } from "react-router"

export default function PageHeader({
  chip,
  title,
  description,
  current,
}: {
  chip: string
  title: string
  description: string
  current: string
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-20">
      <div className="absolute right-[8%] top-[-10rem] size-[30rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px]">
          <Link to="/" className="text-muted-foreground no-underline hover:text-brand">Beranda</Link>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">{current}</span>
        </nav>
        <div className="max-w-4xl">
          <div className="badge badge-brand mb-5">{chip}</div>
          <h1 className="font-display text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground">{title}</h1>
          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  )
}
