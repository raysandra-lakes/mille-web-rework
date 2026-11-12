import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { Link, useLocation } from "react-router"
import { berlanggananItems } from "../components/nav/navData"
import {
  submitDemoRequest,
  type DemoRequestValues,
} from "../lib/demoRequest"
import {
  getTrackingData,
  trackingKeys,
} from "../lib/tracking"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

type FormValues = DemoRequestValues & {
  website: string
  consent: boolean
}

type FieldName =
  | "nama"
  | "email"
  | "no_telp"
  | "nama_usaha"
  | "jenis_usaha"
  | "provinsi"
  | "kota"
  | "consent"

type Errors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
  nama: "",
  email: "",
  no_telp: "",
  nama_usaha: "",
  jenis_usaha: "",
  provinsi: "",
  kota: "",
  pesan: "",
  website: "",
  consent: false,
}

const businessTypes = [
  ["restoran", "Restoran"],
  ["kedai_kopi", "Kedai Kopi"],
  ["cepat_saji", "Cepat Saji"],
  ["bakery", "Bakery"],
  ["retail", "Toko Retail"],
  ["salon", "Salon/Spa"],
  ["lainnya", "Lainnya"],
]

const provinces = [
  ["aceh", "Aceh"], ["bali", "Bali"], ["banten", "Banten"], ["bengkulu", "Bengkulu"],
  ["diy", "Daerah Istimewa Yogyakarta"], ["dki", "DKI Jakarta"], ["gorontalo", "Gorontalo"],
  ["jambi", "Jambi"], ["jabar", "Jawa Barat"], ["jateng", "Jawa Tengah"], ["jatim", "Jawa Timur"],
  ["kalbar", "Kalimantan Barat"], ["kalsel", "Kalimantan Selatan"], ["kalteng", "Kalimantan Tengah"],
  ["kaltim", "Kalimantan Timur"], ["kalut", "Kalimantan Utara"], ["babel", "Kepulauan Bangka Belitung"],
  ["kep_riau", "Kepulauan Riau"], ["lampung", "Lampung"], ["maluku", "Maluku"],
  ["maluku_utara", "Maluku Utara"], ["ntb", "Nusa Tenggara Barat"], ["ntt", "Nusa Tenggara Timur"],
  ["papua", "Papua"], ["papua_barat", "Papua Barat"], ["papua_barat_daya", "Papua Barat Daya"],
  ["papua_pegunungan", "Papua Pegunungan"], ["papua_selatan", "Papua Selatan"],
  ["papua_tengah", "Papua Tengah"], ["riau", "Riau"], ["sulbar", "Sulawesi Barat"],
  ["sulsel", "Sulawesi Selatan"], ["sultengah", "Sulawesi Tengah"], ["sultenggara", "Sulawesi Tenggara"],
  ["sulut", "Sulawesi Utara"], ["sumbar", "Sumatera Barat"], ["sumsel", "Sumatera Selatan"],
  ["sumut", "Sumatera Utara"],
]

const benefits = [
  "Jadwal fleksibel, ditentukan sesuai waktu Anda",
  "Melihat langsung bagaimana fitur Mille mengoptimalkan operasional bisnis",
  "Penawaran khusus yang mungkin tersedia hanya untuk peserta demo",
  "Melihat bagaimana AI dan analitik membantu pengambilan keputusan bisnis",
  "Masa coba gratis 30 hari tanpa komitmen",
  "Diskusi kebutuhan spesifik bisnis untuk menemukan solusi yang paling sesuai",
]

function DemoIntro() {
  return (
    <div className="max-w-xl">
      <div className="badge badge-brand mb-5">JADWALKAN DEMO</div>
      <h1 className="font-display text-[clamp(2.35rem,4.6vw,4.15rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground">
        Lihat Mille Bekerja untuk Bisnis Anda.
      </h1>
      <p className="mt-6 text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.75] text-muted-foreground">
        Isi formulir singkat ini, lalu tim Mille akan menghubungi untuk mengonfirmasi jadwal demo yang sesuai dengan jenis usaha dan kebutuhan Anda.
      </p>
    </div>
  )
}

function DemoInformation() {
  const subscriptionHref = berlanggananItems[0]?.href.split("#")[0] || "#"
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Yang Akan Anda Dapatkan</h2>
        <ul className="mt-5 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-subtle text-[10px] font-extrabold text-brand">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-6">
        <p className="type-eyebrow mb-2">LAYANAN SALES MILLE</p>
        <h2 className="font-display text-lg font-extrabold text-foreground">Kepuasan Anda adalah prioritas kami.</h2>
        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
          <a href="mailto:admin@millehub.com" className="block text-inherit no-underline hover:text-brand">admin@millehub.com</a>
          <p>+62 811 2290 898</p>
          <p>Senin - Minggu, 09.00 - 22.00</p>
        </div>
        <a href="https://wa.me/628112290898" target="_blank" rel="noreferrer" className="btn btn-secondary mt-5">Hubungi Sales via WhatsApp</a>
      </div>
      <div className="flex flex-col gap-3 text-sm font-semibold">
        <a href="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="text-brand no-underline">Ingin mencoba sendiri? Coba Gratis 30 Hari →</a>
        <Link to={subscriptionHref} className="text-muted-foreground no-underline hover:text-brand">Lihat paket langganan →</Link>
      </div>
    </div>
  )
}

function SuccessState({
  values,
  preference,
}: {
  values: DemoRequestValues
  preference: string
}) {
  const businessLabel = businessTypes.find(([value]) => value === values.jenis_usaha)?.[1] ?? values.jenis_usaha
  const provinceLabel = provinces.find(([value]) => value === values.provinsi)?.[1] ?? values.provinsi
  return (
    <div className="text-center" role="status" aria-live="polite">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-2xl font-extrabold text-emerald-600">✓</div>
      <h2 className="mt-6 font-display text-2xl font-extrabold text-foreground">Permintaan Demo Terkirim.</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Terima kasih. Tim Mille akan menghubungi Anda untuk mengonfirmasi jadwal demo.</p>
      <dl className="mt-7 space-y-3 rounded-xl bg-surface p-5 text-left text-sm">
        <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Nama</dt><dd className="font-semibold text-foreground">{values.nama}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Usaha</dt><dd className="font-semibold text-foreground">{values.nama_usaha}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Jenis usaha</dt><dd className="font-semibold text-foreground">{businessLabel}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Lokasi</dt><dd className="text-right font-semibold text-foreground">{values.kota}, {provinceLabel}</dd></div>
        {preference && <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Preferensi</dt><dd className="font-semibold text-foreground">{preference}</dd></div>}
      </dl>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
        <Link to="/blog" className="btn btn-secondary">Baca Blog Mille</Link>
      </div>
    </div>
  )
}

function DemoForm() {
  const location = useLocation()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [preference, setPreference] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState<DemoRequestValues | null>(null)
  const [failed, setFailed] = useState(false)

  const fieldClass = "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = event.target
    const nextValue = type === "checkbox" ? (event.target as HTMLInputElement).checked : value
    setValues((current) => ({ ...current, [name]: nextValue }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function validate(cleanedPhone: string) {
    const next: Errors = {}
    const required: FieldName[] = ["nama", "email", "no_telp", "nama_usaha", "jenis_usaha", "provinsi", "kota"]
    required.forEach((field) => {
      if (!String(field === "no_telp" ? cleanedPhone : values[field]).trim()) next[field] = "Field ini wajib diisi."
    })
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Format email tidak valid."
    if (cleanedPhone && !/^\d{9,14}$/.test(cleanedPhone)) next.no_telp = "Nomor telepon tidak valid."
    if (!values.consent) next.consent = "Field ini wajib diisi."
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFailed(false)
    const cleanedPhone = values.no_telp.replace(/\D/g, "")
    setValues((current) => ({ ...current, no_telp: cleanedPhone }))
    const nextErrors = validate(cleanedPhone)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      window.requestAnimationFrame(() => document.getElementById(firstError)?.focus())
      return
    }

    const message = [
      values.pesan.trim(),
      preference ? `Preferensi waktu: ${preference}` : "",
    ].filter(Boolean).join("\n\n")
    const payload: DemoRequestValues = {
      nama: values.nama.trim(),
      email: values.email.trim(),
      no_telp: cleanedPhone,
      nama_usaha: values.nama_usaha.trim(),
      jenis_usaha: values.jenis_usaha,
      provinsi: values.provinsi,
      kota: values.kota.trim(),
      pesan: message,
    }

    if (values.website) {
      setSubmitted(payload)
      return
    }

    setLoading(true)
    try {
      const tracking = getTrackingData()
      const stateOrigin = (location.state as { from?: string } | null)?.from
      if (stateOrigin) tracking.halaman_asal = stateOrigin
      await submitDemoRequest(payload, tracking)
      const marketing = trackingKeys.reduce<Record<string, string>>((result, key) => {
        if (tracking[key]) result[key] = tracking[key]!
        return result
      }, {})
      window.dataLayer?.push({
        event: "demo_form_submit",
        jenis_usaha: payload.jenis_usaha,
        provinsi: payload.provinsi,
        ...marketing,
      })
      setSubmitted(payload)
    } catch {
      setFailed(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return <SuccessState values={submitted} preference={preference} />

  const errorText = (field: FieldName) => errors[field] ? <span className="mt-1 block text-xs font-medium text-rose-600">{errors[field]}</span> : null
  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulir request demo">
      {failed && (
        <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4" role="alert" aria-live="assertive">
          <p className="text-sm font-semibold text-rose-700">Pengiriman gagal. Silakan coba lagi atau hubungi Sales via WhatsApp.</p>
          <button type="button" onClick={() => setFailed(false)} className="mt-3 text-sm font-bold text-rose-700 underline">Coba lagi</button>
        </div>
      )}
      <h2 className="font-display text-2xl font-extrabold text-foreground">Formulir Request Demo</h2>
      <fieldset className="mt-7 space-y-5">
        <legend className="mb-4 text-xs font-bold uppercase tracking-wider text-brand">Data Diri</legend>
        <label htmlFor="nama" className="block text-sm font-semibold text-foreground">Nama<span className="text-rose-500">*</span><input id="nama" name="nama" value={values.nama} onChange={handleChange} aria-invalid={!!errors.nama} className={fieldClass} />{errorText("nama")}</label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">Email<span className="text-rose-500">*</span><input id="email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={!!errors.email} className={fieldClass} />{errorText("email")}</label>
          <label htmlFor="no_telp" className="block text-sm font-semibold text-foreground">Nomor Telepon/WhatsApp<span className="text-rose-500">*</span><input id="no_telp" name="no_telp" inputMode="tel" value={values.no_telp} onChange={handleChange} aria-invalid={!!errors.no_telp} className={fieldClass} />{errorText("no_telp")}</label>
        </div>
      </fieldset>
      <fieldset className="mt-8 space-y-5 border-t border-border pt-7">
        <legend className="mb-4 text-xs font-bold uppercase tracking-wider text-brand">Data Usaha</legend>
        <label htmlFor="nama_usaha" className="block text-sm font-semibold text-foreground">Nama Usaha<span className="text-rose-500">*</span><input id="nama_usaha" name="nama_usaha" value={values.nama_usaha} onChange={handleChange} aria-invalid={!!errors.nama_usaha} className={fieldClass} />{errorText("nama_usaha")}</label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label htmlFor="jenis_usaha" className="block text-sm font-semibold text-foreground">Jenis Usaha<span className="text-rose-500">*</span><select id="jenis_usaha" name="jenis_usaha" value={values.jenis_usaha} onChange={handleChange} aria-invalid={!!errors.jenis_usaha} className={fieldClass}><option value="">Pilih jenis usaha</option>{businessTypes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>{errorText("jenis_usaha")}</label>
          <label htmlFor="provinsi" className="block text-sm font-semibold text-foreground">Provinsi<span className="text-rose-500">*</span><select id="provinsi" name="provinsi" value={values.provinsi} onChange={handleChange} aria-invalid={!!errors.provinsi} className={fieldClass}><option value="">Pilih provinsi</option>{provinces.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>{errorText("provinsi")}</label>
        </div>
        <label htmlFor="kota" className="block text-sm font-semibold text-foreground">Kota<span className="text-rose-500">*</span><input id="kota" name="kota" value={values.kota} onChange={handleChange} aria-invalid={!!errors.kota} className={fieldClass} />{errorText("kota")}</label>
      </fieldset>
      <fieldset className="mt-8 border-t border-border pt-7">
        <legend className="mb-4 text-xs font-bold uppercase tracking-wider text-brand">Tambahan</legend>
        <p className="text-sm font-semibold text-foreground">Preferensi waktu demo <span className="font-normal text-muted-foreground">(opsional)</span></p>
        <div className="mt-3 flex flex-wrap gap-2">{["Pagi", "Siang", "Sore", "Malam"].map((time) => <button key={time} type="button" aria-pressed={preference === time} onClick={() => setPreference((current) => current === time ? "" : time)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${preference === time ? "border-brand bg-brand text-white" : "border-border bg-white text-muted-foreground hover:border-brand/50 hover:text-brand"}`}>{time}</button>)}</div>
        <label htmlFor="pesan" className="mt-5 block text-sm font-semibold text-foreground">Pesan <span className="font-normal text-muted-foreground">(opsional)</span><textarea id="pesan" name="pesan" rows={4} maxLength={300} value={values.pesan} onChange={handleChange} placeholder="Ceritakan kebutuhan bisnis Anda..." className={fieldClass} /></label>
        <label htmlFor="consent" className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={handleChange} aria-invalid={!!errors.consent} className="mt-1 size-4 accent-[var(--brand)]" /><span>Saya setuju dihubungi oleh tim Mille terkait demo ini.<span className="text-rose-500">*</span></span></label>
        {errorText("consent")}
        <label aria-hidden="true" className="absolute left-[-9999px]"><span>Website</span><input name="website" value={values.website} onChange={handleChange} aria-hidden="true" tabIndex={-1} autoComplete="off" /></label>
      </fieldset>
      <button type="submit" disabled={loading} className="btn btn-primary btn-lg mt-7 w-full disabled:cursor-wait disabled:opacity-60">{loading ? "Mengirim..." : "Jadwalkan Demo"}</button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Gratis, tanpa kewajiban berlangganan.</p>
      <div className="sr-only" aria-live="polite">{loading ? "Permintaan demo sedang dikirim." : ""}</div>
    </form>
  )
}

export default function JadwalkanDemo() {
  useEffect(() => { document.title = "Jadwalkan Demo | Mille" }, [])
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-14 lg:py-20">
      <div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-[13px]"><Link to="/" className="text-muted-foreground no-underline hover:text-brand">Beranda</Link><span className="text-border">/</span><span className="font-semibold text-foreground">Jadwalkan Demo</span></nav>
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div className="order-1 lg:col-start-1 lg:row-start-1"><DemoIntro /></div>
          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="card bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,.09)] lg:sticky lg:top-24 lg:p-8"><DemoForm /></div>
          </div>
          <div className="order-3 lg:col-start-1 lg:row-start-2"><DemoInformation /></div>
        </div>
      </div>
    </section>
  )
}
