import { useState, type ReactNode } from "react";
import { Link } from "react-router";

export type FeatureItem = {
  title: string;
  copy: string;
  visual: string;
  labels: string[];
  metric?: string;
};

export type ProductPageConfig = {
  name: string;
  headline: string;
  intro: string;
  problemHeadline: string;
  problemIntro: string;
  problems: { title: string; copy: string }[];
  featureEyebrow: string;
  featureHeadline: string;
  featureIntro: string;
  features: FeatureItem[];
  aiHeadline: string;
  aiPrompt: string;
  aiAnswer: string;
  closingHeadline: string;
  dashboard: "people" | "customers";
};

const iconPaths = [
  <path key="people" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
  <path key="clock" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2" />,
  <path key="chart" d="M4 20V10M10 20V4M16 20v-7M22 20H2M3 7l6-4 6 6 6-5" />,
  <path key="spark" d="m12 3 1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3ZM5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15ZM19 13l.7 1.3L21 15l-1.3.7L19 17l-.7-1.3L17 15l1.3-.7L19 13Z" />,
];

export function LineIcon({ index = 0, className = "size-5" }: { index?: number; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[index % iconPaths.length]}
    </svg>
  );
}

export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[13px]">
      <Link to="/" className="text-muted-foreground no-underline transition-colors hover:text-brand">Beranda</Link>
      {items.map((item, index) => (
        <span className="contents" key={item}>
          <span className="text-border">/</span>
          <span className={index === items.length - 1 ? "font-semibold text-foreground" : "text-muted-foreground"}>{item}</span>
        </span>
      ))}
    </nav>
  );
}

function MiniTrend({ customer = false }: { customer?: boolean }) {
  return (
    <svg className="h-16 w-full" viewBox="0 0 280 64" fill="none" aria-label="Grafik tren">
      <path d={customer ? "M2 55 34 48l31 3 35-22 34 8 38-28 34 17 37-13 35 5" : "M2 48 37 45l30-8 33 5 34-22 38 8 34-15 37 8 35-13"} stroke="#009AE5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d={customer ? "M2 55 34 48l31 3 35-22 34 8 38-28 34 17 37-13 35 5" : "M2 48 37 45l30-8 33 5 34-22 38 8 34-15 37 8 35-13"} stroke="#009AE5" strokeWidth="10" strokeOpacity=".08" />
    </svg>
  );
}

function HeroDashboard({ mode }: { mode: ProductPageConfig["dashboard"] }) {
  const customer = mode === "customers";
  return (
    <div className="relative mx-auto max-w-[610px]">
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#171a20] px-5 py-3">
          <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-400" /><span className="text-[10px] font-bold tracking-[0.08em] text-white/50">{customer ? "MILLE CUSTOMER HUB" : "MILLE PEOPLE"}</span></div>
          <span className="rounded-md bg-white/6 px-2 py-1 text-[10px] text-white/40">Live · 5 Outlet</span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1.16fr_.84fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand"><LineIcon index={customer ? 3 : 0} /></div>
              <div><div className="text-[9px] uppercase tracking-wider text-slate-400">{customer ? "Customer Profile" : "Dashboard Karyawan"}</div><div className="font-display text-sm font-bold text-slate-800">{customer ? "Alya Putri · Platinum" : "Tim Operasional Aktif"}</div></div>
              <span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">{customer ? "VIP" : "On shift"}</span>
            </div>
            <div className="my-4 grid grid-cols-3 gap-2">
              {(customer ? [["Belanja", "Rp8.4jt"], ["Kunjungan", "32x"], ["Poin", "4.280"]] : [["Hadir", "48"], ["Shift", "12"], ["Terlambat", "1"]]).map(([label, value]) => <div key={label} className="rounded-lg bg-slate-50 p-2"><div className="text-[7px] text-slate-400">{label}</div><div className="mt-1 text-[10px] font-bold text-slate-700">{value}</div></div>)}
            </div>
            <MiniTrend customer={customer} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-white/35">{customer ? "Active Loyalty Members" : "Absensi Hari Ini"}</div>
              <div className="mt-2 font-display text-3xl font-extrabold">{customer ? "12.4k" : "98%"}</div>
              <div className="mt-1 text-[9px] font-semibold text-emerald-400">{customer ? "+24% QoQ" : "Hadir / On-time"}</div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-brand" /></div>
            </div>
            <div className="flex-1 rounded-xl bg-white p-3">
              <div className="mb-3 text-[9px] font-bold text-slate-700">{customer ? "Campaign Conversion" : "Gaji & Komisi"}</div>
              {(customer ? [["Delivered", "94%"], ["Read", "76%"], ["Convert", "18.6%"]] : [["Payroll", "Rp184.2jt"], ["Komisi", "Rp22.8jt"], ["Status", "Siap diproses"]]).map(([label, value], index) => <div key={label} className="mb-2 flex items-center justify-between rounded-lg bg-slate-50 px-2 py-2 text-[8px]"><span className="text-slate-400">{label}</span><b className={index === 2 ? "text-emerald-500" : "text-slate-700"}>{value}</b></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ item, index }: { item: FeatureItem; index: number }) {
  return (
    <div className={`h-full p-4 ${index % 3 === 1 ? "bg-[#171a20] text-white" : "bg-slate-50 text-slate-700"}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[9px] font-bold">{item.visual}</span>
        <span className={`rounded px-2 py-1 text-[7px] font-bold ${index % 3 === 1 ? "bg-white/8 text-brand-light" : "bg-brand-subtle text-brand"}`}>LIVE</span>
      </div>
      {item.metric && <div className="mb-3 flex items-end justify-between"><div><div className={`text-[7px] ${index % 3 === 1 ? "text-white/35" : "text-slate-400"}`}>Ringkasan</div><div className="font-display text-2xl font-extrabold">{item.metric}</div></div><div className="text-[8px] font-bold text-emerald-500">+12.8%</div></div>}
      <div className="space-y-2">
        {item.labels.slice(0, 4).map((label, labelIndex) => (
          <div key={label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-[8px] shadow-sm ${index % 3 === 1 ? "bg-white/6" : "bg-white"}`}>
            <span className={`grid size-6 shrink-0 place-items-center rounded-md font-bold ${labelIndex === 0 ? "bg-brand text-white" : index % 3 === 1 ? "bg-white/8 text-white/55" : "bg-slate-100 text-slate-400"}`}>{String(labelIndex + 1).padStart(2, "0")}</span>
            <span className="font-semibold">{label}</span>
            <span className={`ml-auto size-1.5 rounded-full ${labelIndex === 2 ? "bg-amber-400" : "bg-emerald-400"}`} />
          </div>
        ))}
      </div>
      <div className={`mt-3 flex h-8 items-end gap-1 ${item.metric ? "" : "pt-1"}`}>
        {[44, 66, 52, 78, 61, 88, 74, 92].map((height, barIndex) => <span key={barIndex} className={`flex-1 rounded-t ${barIndex === 7 ? "bg-brand" : index % 3 === 1 ? "bg-white/15" : "bg-brand/20"}`} style={{ height: `${height}%` }} />)}
      </div>
    </div>
  );
}

function AiInsight({ config }: { config: ProductPageConfig }) {
  const [visible, setVisible] = useState(true);
  return (
    <section className="section-spacing relative overflow-hidden bg-foreground text-white">
      <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <p className="type-eyebrow mb-4 text-brand-light">OPTIMILLE INTELLIGENCE</p>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">{config.aiHeadline}</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50">Analisis proaktif dari data operasional Mille, disajikan sebagai rekomendasi yang langsung dapat ditindaklanjuti.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/6 p-4 shadow-2xl backdrop-blur sm:p-6">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4"><span className="grid size-8 place-items-center rounded-lg bg-brand text-white"><LineIcon index={3} className="size-4" /></span><div><div className="text-xs font-bold">OptiMille</div><div className="text-[9px] text-emerald-400">● Analisis real-time</div></div></div>
          <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-brand px-4 py-3 text-sm leading-relaxed">{config.aiPrompt}</div>
          {visible && <div className="mt-4 max-w-[92%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-4 text-sm leading-relaxed text-white/75"><span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-brand-light">Rekomendasi OptiMille</span>{config.aiAnswer}</div>}
          <button type="button" onClick={() => setVisible((value) => !value)} className="mt-5 rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-brand/60 hover:text-white">{visible ? "Sembunyikan insight" : "Tampilkan insight"}</button>
        </div>
      </div>
    </section>
  );
}

export default function ProductDetailPage({ config }: { config: ProductPageConfig }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-24">
        <div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/8 blur-3xl" />
        <div className="container-page relative">
          <Breadcrumb items={["Produk", config.name]} />
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-20">
            <div className="max-w-[630px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-brand"><span className="size-1.5 rounded-full bg-brand" />PRODUK MILLE</div>
              <h1 className="mb-6 font-display text-[clamp(2.2rem,4vw,3.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">{config.headline}</h1>
              <p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">{config.intro}</p>
              <div className="mb-7 flex flex-wrap gap-3"><Link to="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Coba Gratis</Link><Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg">Jadwalkan Demo</Link></div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">{["✓ Gratis 14 hari", "✓ Setup cepat", "✓ Dukungan onboarding"].map((item) => <span key={item} className="text-xs font-medium text-muted-foreground">{item}</span>)}</div>
            </div>
            <HeroDashboard mode={config.dashboard} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="container-page">
          <div className="mb-14 max-w-2xl"><h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">{config.problemHeadline}</h2><p className="text-base leading-relaxed text-muted-foreground">{config.problemIntro}</p></div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {config.problems.map((problem, index) => <article key={problem.title} className={`card reveal reveal-delay-${index + 1} relative p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}><span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border/55">{String(index + 1).padStart(2, "0")}</span><div className="mb-6 grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand"><LineIcon index={index} /></div><h3 className="mb-3 font-display text-base font-bold leading-snug text-foreground">{problem.title}</h3><p className="text-[13.5px] leading-relaxed text-muted-foreground">{problem.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#F8FAFC]">
        <div className="container-page">
          <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div><p className="type-eyebrow mb-4">{config.featureEyebrow}</p><h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">{config.featureHeadline}</h2></div>
            <p className="pb-1 text-base leading-relaxed text-muted-foreground">{config.featureIntro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {config.features.map((feature, index) => <article key={feature.title} className={`group reveal reveal-delay-${(index % 2) + 1} grid min-h-[350px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)] lg:grid-cols-[.88fr_1.12fr] lg:gap-5`}><div className="mb-5 flex items-start gap-3 lg:mb-0"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-subtle text-brand"><LineIcon index={index} /></div><div><h3 className="font-display text-lg font-bold tracking-tight text-foreground">{feature.title}</h3><p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{feature.copy}</p></div></div><div className="min-h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"><div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"><FeatureVisual item={feature} index={index} /></div></div></article>)}
          </div>
        </div>
      </section>

      <AiInsight config={config} />

      <section className="relative overflow-hidden bg-white py-20 text-center lg:py-28">
        <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative"><h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">{config.closingHeadline}</h2><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Coba Gratis 30 Hari</Link><Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg">Jadwalkan Demo</Link></div></div>
      </section>
    </>
  );
}
