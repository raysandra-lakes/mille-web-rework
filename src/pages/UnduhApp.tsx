import { useEffect } from "react"
import ClosingBanner from "../components/shared/ClosingBanner"
import PageHeader from "../components/shared/PageHeader"

const appGroups = [
  {
    title: "Mille POS",
    description: "Aplikasi operasional untuk kasir dan aktivitas outlet sehari-hari.",
    platforms: [
      ["Android", "https://play.google.com/store/apps/details?id=com.millehub.pos"],
      ["iOS", "https://apps.apple.com/id/app/mille-pos/id6465954107?platform=ipad"],
      ["Windows", "https://apps.microsoft.com/detail/9NM3LFT53GXP"],
    ],
  },
  {
    title: "Mille Partner",
    description: "Aplikasi backoffice untuk memantau dan mengelola bisnis.",
    platforms: [
      ["Android", "https://play.google.com/store/search?q=mille%20partner&c=apps"],
      ["iOS", "https://apps.apple.com/id/app/mille-partner/id6752648192"],
      ["Windows", "https://apps.microsoft.com/detail/9nr803dnqgff?hl=en-US&gl=ID"],
    ],
  },
]

function DeviceMockup({ platform, partner }: { platform: string; partner: boolean }) {
  if (platform === "Windows") return <div className="relative h-28 w-40"><div className="h-24 rounded-xl border-4 border-slate-700 bg-[#171a20] p-2 shadow-xl"><div className={`h-full rounded ${partner ? "bg-gradient-to-br from-brand/60 to-slate-800" : "bg-brand-subtle"} p-2`}><div className="h-2 w-14 rounded bg-brand" /><div className="mt-3 grid grid-cols-3 gap-1">{[1,2,3,4,5,6].map((item) => <span key={item} className="h-7 rounded bg-white/55" />)}</div></div></div><div className="mx-auto h-4 w-16 bg-slate-700 [clip-path:polygon(30%_0,70%_0,100%_100%,0_100%)]" /></div>
  return <div className={`grid h-32 ${platform === "iOS" ? "w-20 rounded-[20px]" : "w-24 rounded-xl"} border-4 border-slate-700 bg-[#171a20] p-2 shadow-xl`}><div className={`rounded-lg ${partner ? "bg-gradient-to-b from-brand/70 to-brand/10" : "bg-white"} p-2`}><div className="h-2 w-10 rounded bg-brand" /><div className="mt-3 space-y-1.5">{[1,2,3].map((item) => <div key={item} className={`h-6 rounded ${partner ? "bg-white/15" : "bg-slate-100"}`} />)}</div></div></div>
}

function AppGroupsSection() {
  return <section className="section-spacing bg-white"><div className="container-page space-y-16">{appGroups.map((group, groupIndex) => <div key={group.title}><div className="mb-8 max-w-2xl"><p className="type-eyebrow mb-3">GRUP {groupIndex + 1}</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">{group.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.description}</p></div><div className="grid gap-5 md:grid-cols-3">{group.platforms.map(([platform, href]) => <article key={platform} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"><div className="grid h-56 place-items-center bg-surface"><div className="transition duration-300 group-hover:scale-105"><DeviceMockup platform={platform} partner={groupIndex === 1} /></div></div><div className="p-5"><h3 className="font-display text-lg font-extrabold text-foreground">{platform}</h3><a href={href} target="_blank" rel="noreferrer" className="btn btn-secondary mt-4 w-full">Unduh untuk {platform}</a></div></article>)}</div></div>)}</div></section>
}

function GettingStartedSection() {
  const steps = ["Unduh aplikasi", "Daftar atau masuk ke akun Mille", "Atur menu dan mulai bertransaksi"]
  return <section className="section-spacing bg-surface"><div className="container-page"><div className="mb-10 text-center"><p className="type-eyebrow mb-3">CARA MEMULAI</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Mulai Menggunakan Mille dalam Tiga Langkah.</h2></div><ol className="grid gap-4 md:grid-cols-3">{steps.map((step, index) => <li key={step} className="card p-6"><span className="grid size-10 place-items-center rounded-full bg-brand font-display text-sm font-extrabold text-white">{index + 1}</span><h3 className="mt-5 font-display text-base font-extrabold text-foreground">{step}</h3></li>)}</ol><div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand/20 bg-brand-subtle p-7 md:flex-row"><div><h3 className="font-display text-xl font-extrabold text-foreground">Butuh bantuan memasang aplikasi?</h3><a href="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm font-semibold text-brand no-underline">Belum punya akun? Coba Gratis 30 Hari →</a></div><a href="https://wa.me/628112480898" target="_blank" rel="noreferrer" className="btn btn-primary">Hubungi Support via WhatsApp</a></div></div></section>
}

export default function UnduhApp() {
  useEffect(() => { document.title = "Unduh App | Mille" }, [])
  return <><PageHeader chip="UNDUH APP" title="Aplikasi Mille di Perangkat yang Anda Gunakan." description="Unduh Mille POS untuk operasional kasir dan Mille Partner untuk memantau serta mengelola bisnis, tersedia untuk Android, iOS, dan Windows." current="Unduh App" /><AppGroupsSection /><GettingStartedSection /><ClosingBanner title="Siap Mencoba Mille?" primary={{ label: "Coba Gratis 30 Hari", href: "https://partner.millehub.com/register-user" }} secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }} /></>
}
