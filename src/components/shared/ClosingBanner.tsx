import { Link } from "react-router"

export default function ClosingBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  const primaryExternal = primary.href.startsWith("http")
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-center text-white lg:py-28">
      <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="container-page relative">
        <h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">{title}</h2>
        {description && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55">{description}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {primaryExternal ? (
            <a href={primary.href} className="btn btn-primary btn-lg">{primary.label}</a>
          ) : (
            <Link to={primary.href} className="btn btn-primary btn-lg">{primary.label}</Link>
          )}
          {secondary && <Link to={secondary.href} className="btn btn-lg border border-white/25 bg-white/8 text-white transition hover:border-white/45 hover:bg-white/14">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  )
}
