import { useEffect, type ReactNode } from "react"
import { Link, useParams } from "react-router"
import { produkGroups } from "../nav/navData"
import {
  fiturLinks,
  getFiturBySlug,
  type FiturEntry,
  type MockupItem,
  type MockupStatus,
} from "../../data/fiturData"

const statusClasses: Record<MockupStatus, string> = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
  brand: "bg-brand",
}

function FeatureIcon({ index }: { index: number }) {
  const paths: ReactNode[] = [
    <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 8h10M7 12h7M7 16h4" /></>,
    <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2M20 14v3M14 18h3v2M20 20h.01" /></>,
    <><path d="M4 6h16M4 12h16M4 18h16" /><circle cx="8" cy="6" r="2" /><circle cx="15" cy="12" r="2" /></>,
    <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    <><path d="M20 12 12 20 4 12V4h8l8 8Z" /><circle cx="8.5" cy="8.5" r="1.5" /></>,
    <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
  ]
  return <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index % paths.length]}</svg>
}

function MockupList({ items }: { items: MockupItem[] }) {
  return <div className="space-y-2">{items.map((item) => <div key={item.label} className="flex items-center rounded-xl bg-white/7 px-3 py-3"><span className={`mr-3 size-2 rounded-full ${statusClasses[item.status ?? "brand"]}`} /><span className="font-display text-xs font-bold text-white">{item.label}</span><span className="ml-auto rounded-full bg-white/8 px-2 py-1 text-[8px] font-bold text-white/55">{item.value}</span></div>)}</div>
}

function MockupGrid({ items }: { items: MockupItem[] }) {
  return <div className="grid grid-cols-2 gap-3">{items.map((item, index) => <div key={item.label} className="rounded-xl bg-white/7 p-4"><span className={`block size-2 rounded-full ${statusClasses[item.status ?? (index % 2 ? "emerald" : "brand")]}`} /><div className="mt-6 text-xs font-bold text-white">{item.label}</div>{item.value && <div className="mt-1 text-[9px] text-white/40">{item.value}</div>}</div>)}</div>
}

function MockupBoard({ columns }: { columns: { title: string; items: string[] }[] }) {
  return <div className="grid grid-cols-3 gap-2">{columns.map((column, index) => <div key={column.title} className="rounded-xl bg-white/5 p-2"><div className={`mb-2 text-[7px] font-bold uppercase ${index === 0 ? "text-brand-light" : index === 1 ? "text-amber-400" : "text-emerald-400"}`}>{column.title}</div>{column.items.map((item) => <div key={item} className="mb-2 rounded-lg bg-white/8 px-2 py-2 text-[7px] font-semibold text-white/65">{item}</div>)}</div>)}</div>
}

function MockupCards({ items, button }: { items: MockupItem[]; button?: string }) {
  return <><div className="grid grid-cols-2 gap-3">{items.map((item, index) => <div key={item.label} className="overflow-hidden rounded-xl bg-white shadow-sm"><div className={`h-14 ${index % 3 === 0 ? "bg-brand/20" : index % 3 === 1 ? "bg-amber-400/20" : "bg-emerald-400/20"}`}><div className="grid h-full place-items-center"><span className="grid size-8 place-items-center rounded-full bg-white/70 text-xs font-bold text-brand">{item.label.charAt(0)}</span></div></div><div className="p-2"><div className="text-[8px] font-bold text-slate-700">{item.label}</div>{item.value && <div className="mt-1 text-[8px] text-slate-400">{item.value}</div>}</div></div>)}</div>{button && <div className="mt-3 rounded-lg bg-brand py-2.5 text-center text-[8px] font-bold text-white">{button}</div>}</>
}

export function FiturMockup({
  mockup,
  compact = false,
}: {
  mockup: FiturEntry["mockup"]
  compact?: boolean
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_28px_80px_rgba(15,23,42,.22)] ${compact ? "max-w-lg" : ""}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-[#171a20] px-4 py-3">
        <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-400" /><span className="text-[9px] font-bold tracking-wider text-white/50">{mockup.title}</span></div>
        <span className="text-[8px] text-white/30">MILLE · LIVE</span>
      </div>
      <div className={`bg-[#1d2129] ${compact ? "p-4" : "p-5 sm:p-6"}`}>
        {mockup.variant === "list" && <MockupList items={mockup.items} />}
        {mockup.variant === "grid" && <MockupGrid items={mockup.items} />}
        {mockup.variant === "board" && <MockupBoard columns={mockup.columns ?? []} />}
        {mockup.variant === "cards" && <MockupCards items={mockup.items} button={mockup.button} />}
      </div>
    </div>
  )
}

function HeroSection({ data }: { data: FiturEntry }) {
  return <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-24"><div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/10 blur-3xl" /><div className="container-page relative"><nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[13px]"><Link to="/" className="text-muted-foreground no-underline hover:text-brand">Beranda</Link><span className="text-border">/</span><Link to={produkGroups[0].href} className="text-muted-foreground no-underline hover:text-brand">Produk</Link><span className="text-border">/</span><span className="font-semibold text-foreground">{data.name}</span></nav><div className="grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-20"><div className="max-w-[630px]"><div className="badge badge-brand mb-6"><span className="size-1.5 rounded-full bg-brand" />{data.chip}</div><h1 className="mb-6 font-display text-[clamp(2.2rem,4vw,3.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">{data.h1}</h1><p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">{data.intro}</p><div className="mb-7 flex flex-wrap gap-3"><Link to="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Coba Gratis</Link><Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg">Jadwalkan Demo</Link></div><div className="flex flex-wrap gap-x-5 gap-y-2">{["✓ Gratis 30 hari", "✓ Setup cepat", "✓ Dukungan onboarding"].map((item) => <span key={item} className="text-xs font-medium text-muted-foreground">{item}</span>)}</div></div><div className="relative mx-auto w-full max-w-[600px]"><div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" /><div className="relative"><FiturMockup mockup={data.mockup} /></div></div></div></div></section>
}

function ProblemsSection({ data }: { data: FiturEntry }) {
  return <section className="section-spacing bg-surface"><div className="container-page"><div className="mb-14 max-w-3xl"><p className="type-eyebrow mb-4">TANTANGAN</p><h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">Proses yang Terpisah-pisah Menghambat Operasional.</h2></div><div className="grid gap-4 md:grid-cols-3">{data.problems.map((problem, index) => <article key={problem.title} className={`card reveal reveal-delay-${index + 1} relative p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg`}><span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border/60">{String(index + 1).padStart(2, "0")}</span><div className="mb-6 grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand"><FeatureIcon index={index} /></div><h3 className="mb-3 pr-8 font-display text-base font-bold leading-snug text-foreground">{problem.title}</h3><p className="text-[13.5px] leading-relaxed text-muted-foreground">{problem.text}</p></article>)}</div></div></section>
}

function FeaturesSection({ data }: { data: FiturEntry }) {
  return <section className="section-spacing bg-[#F8FAFC]"><div className="container-page"><div className="mb-14 max-w-3xl"><p className="type-eyebrow mb-4">FITUR {data.name.toUpperCase()}</p><h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Semua yang Dibutuhkan untuk {data.name} dalam Satu Sistem.</h2></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{data.features.map((feature, index) => <article key={feature.title} className={`group reveal reveal-delay-${(index % 3) + 1} min-h-[230px] rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)]`}><div className="grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand"><FeatureIcon index={index} /></div><h3 className="mt-6 font-display text-lg font-bold tracking-tight text-foreground">{feature.title}</h3><p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{feature.text}</p></article>)}</div></div></section>
}

function FlowSection({ data }: { data: FiturEntry }) {
  return <section className="section-spacing bg-white"><div className="container-page"><div className="mx-auto mb-14 max-w-3xl text-center"><p className="type-eyebrow mb-4">ALUR KERJA</p><h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Alur yang Sederhana dalam Empat Langkah.</h2></div><ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{data.flow.map((step, index) => <li key={step.title} className={`reveal reveal-delay-${index + 1} relative rounded-2xl border border-border bg-white p-6 shadow-sm`}><div className="mb-5"><span className="relative z-10 grid size-10 place-items-center rounded-full bg-brand font-display text-sm font-extrabold text-white">{index + 1}</span>{index < data.flow.length - 1 && <span className="absolute left-10 top-11 hidden h-px w-[calc(100%+1.25rem)] bg-brand/25 lg:block" aria-hidden="true" />}</div><h3 className="font-display text-base font-bold text-foreground">{step.title}</h3><p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{step.text}</p></li>)}</ol></div></section>
}

function IntegratedSection({ data }: { data: FiturEntry }) {
  return <section className="section-spacing bg-surface"><div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><div><p className="type-eyebrow mb-4">TERINTEGRASI</p><h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">{data.block.title}</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">{data.block.text}</p><ul className="mt-7 space-y-3">{data.block.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-subtle text-[10px] font-bold text-brand">✓</span>{point}</li>)}</ul></div><FiturMockup mockup={data.mockup} compact /></div></section>
}

function RelatedSection({ data }: { data: FiturEntry }) {
  return <section className="section-spacing bg-white"><div className="container-page"><div className="mb-10 text-center"><h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">Terintegrasi dengan Fitur Lainnya.</h2></div><div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">{data.related.map((slug, index) => { const item = fiturLinks[slug]; return <Link key={slug} to={item.href} className="card group p-6 no-underline transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"><span className="text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-display text-lg font-extrabold text-foreground">{item.label}</h3><span className="mt-6 inline-flex text-xs font-bold text-muted-foreground group-hover:text-brand">Pelajari →</span></Link> })}</div></div></section>
}

function ClosingSection({ data }: { data: FiturEntry }) {
  return <section className="relative overflow-hidden bg-foreground py-20 text-center text-white lg:py-28"><div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" /><div className="container-page relative"><h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">Siap Mencoba {data.name} di Outlet Anda?</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55">Mulai uji coba 30 hari atau jadwalkan demo bersama tim Mille.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Coba Gratis 30 Hari</Link><Link to="/jadwalkan-demo" className="btn btn-lg border border-white/25 bg-white/8 text-white transition hover:border-white/45 hover:bg-white/14">Jadwalkan Demo</Link></div><Link to={produkGroups[0].href} className="mt-7 inline-flex text-xs font-semibold text-white/45 no-underline transition hover:text-brand-light">Lihat semua produk Operasional, Pemesanan, & Pembayaran →</Link></div></section>
}

function NotFound() {
  return <section className="section-spacing bg-white"><div className="container-page text-center"><h1 className="font-display text-4xl font-extrabold text-foreground">Halaman tidak ditemukan</h1><Link to={produkGroups[0].href} className="btn btn-primary btn-lg mt-7">Kembali ke Produk</Link></div></section>
}

export default function FiturPage() {
  const { slug = "" } = useParams()
  const data = getFiturBySlug(slug)
  useEffect(() => { document.title = data ? `${data.name} | Mille` : "Halaman tidak ditemukan | Mille" }, [data])
  if (!data) return <NotFound />
  return <><HeroSection data={data} /><ProblemsSection data={data} /><FeaturesSection data={data} /><FlowSection data={data} /><IntegratedSection data={data} /><RelatedSection data={data} /><ClosingSection data={data} /></>
}
