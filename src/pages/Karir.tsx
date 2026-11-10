import { useEffect, useRef, useState } from "react"
import ClosingBanner from "../components/shared/ClosingBanner"
import PageHeader from "../components/shared/PageHeader"
import { careerDepartments, careersData } from "../data/careersData"

type Career = (typeof careersData)[number]

function WhyJoinSection() {
  const items = [
    ["Dampak Nyata", "Mengerjakan produk yang membantu tim bisnis menjalankan aktivitas sehari-hari."],
    ["Belajar Bersama", "Berbagi pengetahuan dan memperbaiki cara kerja melalui umpan balik."],
    ["Kolaborasi Lintas Tim", "Bekerja bersama produk, teknologi, penjualan, dan operasional."],
    ["Lingkungan yang Suportif", "Menjaga komunikasi terbuka dan saling membantu menyelesaikan masalah."],
  ]
  return <section className="section-spacing bg-white"><div className="container-page"><div className="mb-10 max-w-2xl"><p className="type-eyebrow mb-3">MENGAPA BERGABUNG</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Ruang untuk Berkarya dan Bertumbuh Bersama.</h2><p className="mt-3 text-xs text-muted-foreground">Informasi budaya kerja berikut merupakan contoh dan wajib diverifikasi HR.</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{items.map(([title, copy], index) => <article key={title} className={`card reveal reveal-delay-${index + 1} p-6`}><span className="text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-display text-lg font-extrabold text-foreground">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div></div></section>
}

function CareerModal({ career, onClose }: { career: Career; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const panel = panelRef.current
    panel?.querySelector<HTMLElement>("button, a")?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
      if (event.key !== "Tab" || !panel) return
      const focusable = [...panel.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; previous?.focus() }
  }, [onClose])
  return <div className="fixed inset-0 z-[130] grid place-items-center bg-foreground/65 p-4" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="career-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl lg:p-8"><div className="flex items-start justify-between gap-5"><div><span className="badge badge-brand">{career.department}</span><h2 id="career-title" className="mt-4 font-display text-2xl font-extrabold text-foreground">{career.title}</h2><p className="mt-2 text-sm text-muted-foreground">{career.location} · {career.type}</p></div><button type="button" onClick={onClose} aria-label="Tutup dialog" className="grid size-10 place-items-center rounded-full border border-border bg-white text-xl text-muted-foreground">×</button></div><p className="mt-7 text-sm leading-relaxed text-muted-foreground">{career.description}</p><h3 className="mt-7 font-display text-lg font-extrabold text-foreground">Kualifikasi</h3><ul className="mt-4 space-y-3">{career.qualifications.map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />{item}</li>)}</ul>{/* TODO: Ganti href dengan tautan lamaran resmi setelah tersedia. */}<a href="#" className="btn btn-primary btn-lg mt-8">Lamar</a></div></div>
}

function OpeningsSection() {
  const [department, setDepartment] = useState("Semua")
  const [selected, setSelected] = useState<Career | null>(null)
  const visible = careersData.filter((career) => department === "Semua" || career.department === department)
  return <section className="section-spacing bg-surface"><div className="container-page"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="type-eyebrow mb-3">LOWONGAN TERBUKA</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Temukan Peran yang Sesuai.</h2></div><div className="flex gap-2 overflow-x-auto pb-1">{careerDepartments.map((item) => <button key={item} type="button" onClick={() => setDepartment(item)} aria-pressed={department === item} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${department === item ? "border-brand bg-brand text-white" : "border-border bg-white text-muted-foreground"}`}>{item}</button>)}</div></div>{visible.length ? <div className="grid gap-4 lg:grid-cols-3">{visible.map((career) => <button key={career.title} type="button" onClick={() => setSelected(career)} className="card group p-6 text-left transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"><span className="text-xs font-bold uppercase tracking-wider text-brand">{career.department}</span><h3 className="mt-4 font-display text-lg font-extrabold text-foreground">{career.title}</h3><p className="mt-2 text-xs text-muted-foreground">{career.location} · {career.type}</p><span className="mt-6 inline-flex text-xs font-bold text-muted-foreground group-hover:text-brand">Lihat Detail →</span></button>)}</div> : <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted-foreground">Belum ada lowongan yang sesuai saat ini.</div>}</div>{selected && <CareerModal career={selected} onClose={() => setSelected(null)} />}</section>
}

function RecruitmentSection() {
  const steps = ["Kirim Lamaran", "Seleksi Berkas", "Wawancara", "Penawaran"]
  return <section className="section-spacing bg-white"><div className="container-page"><div className="mb-10 text-center"><p className="type-eyebrow mb-3">ALUR REKRUTMEN</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Proses yang Jelas dari Awal hingga Akhir.</h2></div><ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <li key={step} className="card p-6"><span className="grid size-10 place-items-center rounded-full bg-brand font-display text-sm font-extrabold text-white">{index + 1}</span><h3 className="mt-5 font-display text-base font-extrabold text-foreground">{step}</h3></li>)}</ol></div></section>
}

export default function Karir() {
  useEffect(() => { document.title = "Karir | Mille" }, [])
  return <><PageHeader chip="KARIR" title="Bergabung dan Bangun Produk yang Dipakai Bisnis Setiap Hari." description="Kami mencari orang yang peduli pada kualitas dan senang menyelesaikan masalah nyata di lapangan." current="Karir" /><WhyJoinSection /><OpeningsSection /><RecruitmentSection /><ClosingBanner title="Tidak Menemukan Posisi yang Cocok?" description="Tetap kirimkan profil Anda, kami simpan untuk peluang berikutnya." primary={{ label: "Hubungi Kami", href: "/support" }} /></>
}
