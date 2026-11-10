import { useState, type FormEvent } from "react"
import { submitForm } from "../../lib/submitForm"

type Errors = Partial<Record<"name" | "email" | "topic" | "message" | "consent", string>>

export default function SupportForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const values = Object.fromEntries(form.entries())
    const nextErrors: Errors = {}
    if (!String(values.name || "").trim()) nextErrors.name = "Nama wajib diisi."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email || ""))) nextErrors.email = "Masukkan email yang valid."
    if (!values.topic) nextErrors.topic = "Pilih topik pertanyaan."
    if (!String(values.message || "").trim()) nextErrors.message = "Pesan wajib diisi."
    if (!values.consent) nextErrors.consent = "Persetujuan diperlukan untuk mengirim pesan."
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setLoading(true)
    await submitForm(values)
    setLoading(false)
    setSuccess(true)
  }

  if (success) {
    return <div className="rounded-2xl border border-brand/25 bg-brand-subtle p-8 text-center" role="status" aria-live="polite"><div className="mx-auto grid size-12 place-items-center rounded-full bg-brand text-xl font-bold text-white">✓</div><h3 className="mt-5 font-display text-xl font-extrabold text-foreground">Pesan terkirim.</h3><p className="mt-2 text-sm text-muted-foreground">Tim Support akan menghubungi Anda melalui email.</p></div>
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-foreground">Nama<span className="text-rose-500">*</span><input name="name" aria-invalid={!!errors.name} className={fieldClass} />{errors.name && <span className="mt-1 block text-xs text-rose-600">{errors.name}</span>}</label>
        <label className="text-sm font-semibold text-foreground">Email<span className="text-rose-500">*</span><input name="email" type="email" aria-invalid={!!errors.email} className={fieldClass} />{errors.email && <span className="mt-1 block text-xs text-rose-600">{errors.email}</span>}</label>
      </div>
      <label className="block text-sm font-semibold text-foreground">Topik<span className="text-rose-500">*</span><select name="topic" defaultValue="" aria-invalid={!!errors.topic} className={fieldClass}><option value="" disabled>Pilih topik</option><option>Kendala Teknis</option><option>Akun & Langganan</option><option>Fitur</option><option>Lainnya</option></select>{errors.topic && <span className="mt-1 block text-xs text-rose-600">{errors.topic}</span>}</label>
      <label className="block text-sm font-semibold text-foreground">Pesan<span className="text-rose-500">*</span><textarea name="message" maxLength={500} rows={6} aria-invalid={!!errors.message} className={fieldClass} />{errors.message && <span className="mt-1 block text-xs text-rose-600">{errors.message}</span>}</label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><input name="consent" type="checkbox" aria-invalid={!!errors.consent} className="mt-1 size-4 accent-[var(--brand)]" /><span>Saya menyetujui penggunaan data ini untuk menindaklanjuti pertanyaan.</span></label>
      {errors.consent && <span className="block text-xs text-rose-600">{errors.consent}</span>}
      <button type="submit" disabled={loading} className="btn btn-primary btn-lg disabled:cursor-wait disabled:opacity-60">{loading ? "Mengirim..." : "Kirim Pertanyaan"}</button>
      <div aria-live="polite" className="sr-only">{loading ? "Pesan sedang dikirim." : ""}</div>
    </form>
  )
}
