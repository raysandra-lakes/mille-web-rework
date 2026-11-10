import { useEffect, type ReactNode } from "react"
import { Link } from "react-router"
import ClosingBanner from "../components/shared/ClosingBanner"
import PageHeader from "../components/shared/PageHeader"
import SupportForm from "../components/shared/SupportForm"
import { berlanggananItems } from "../components/nav/navData"

function ContactIcon({ children }: { children: ReactNode }) {
  return <div className="grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand">{children}</div>
}

function ContactSection() {
  const contacts = [
    { title: "Email", value: "care@millehub.com", action: "Kirim Email", href: "mailto:care@millehub.com", icon: <path d="M3 5h18v14H3zM3 7l9 6 9-6" /> },
    { title: "WhatsApp & Telepon Support", value: "+62 811 2480 898", action: "Chat WhatsApp", href: "https://wa.me/628112480898", icon: <><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-4.5A8 8 0 1 1 20 11.5Z" /><path d="M8 8c.5 3 2 4.5 5 5" /></> },
    { title: "Jam Layanan", value: "09.00 - 22.00", action: "Lihat FAQ", href: "/faq", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  ]
  return (
    <section className="section-spacing bg-white"><div className="container-page"><div className="grid gap-5 md:grid-cols-3">{contacts.map((contact, index) => <article key={contact.title} className={`card reveal reveal-delay-${index + 1} p-6`}><ContactIcon><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{contact.icon}</svg></ContactIcon><h2 className="mt-5 font-display text-lg font-extrabold text-foreground">{contact.title}</h2><p className="mt-2 text-sm text-muted-foreground">{contact.value}</p><a href={contact.href} className="mt-5 inline-flex text-sm font-bold text-brand no-underline">{contact.action} →</a></article>)}</div></div></section>
  )
}

function ActionsSection() {
  const subscriptionHref = berlanggananItems[0]?.href.split("#")[0] || "#"
  const actions = [
    { title: "Berlangganan", copy: "Jelajahi pilihan paket sesuai kebutuhan bisnis Anda", href: subscriptionHref, external: false },
    { title: "Hubungi Sales", copy: "Diskusikan kebutuhan bisnis Anda dengan tim Sales", href: "https://wa.me/628112290898", external: true },
    { title: "Coba Gratis", copy: "Mulai uji coba 30 hari", href: "https://partner.millehub.com/register-user", external: true },
  ]
  return <section className="section-spacing bg-surface"><div className="container-page"><div className="mb-10 max-w-2xl"><p className="type-eyebrow mb-3">AKSES CEPAT</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Pilih Bantuan yang Dibutuhkan.</h2></div><div className="grid gap-5 md:grid-cols-3">{actions.map((action) => <article key={action.title} className="card p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"><h3 className="font-display text-lg font-extrabold text-foreground">{action.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{action.copy}</p>{action.external ? <a href={action.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-bold text-brand no-underline">Buka →</a> : <Link to={action.href} className="mt-5 inline-flex text-sm font-bold text-brand no-underline">Buka →</Link>}</article>)}</div></div></section>
}

function FormSection() {
  return <section className="section-spacing bg-white"><div className="container-page grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="type-eyebrow mb-3">KIRIM PERTANYAAN</p><h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Tim Support Siap Membantu.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Jelaskan kebutuhan atau kendala secara ringkas agar tim dapat menindaklanjuti dengan tepat.</p><Link to="/faq" className="mt-6 inline-flex text-sm font-bold text-brand no-underline">Cari jawaban cepat di FAQ →</Link><p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">PT. Lakes Konstelasi Data<br />Jalan Hegarmanah No.53, Bandung, 40141, Indonesia.</p></div><div className="rounded-2xl border border-border bg-surface p-6 lg:p-8"><SupportForm /></div></div></section>
}

export default function Support() {
  useEffect(() => { document.title = "Support | Mille" }, [])
  return (
    <>
      <PageHeader chip="SUPPORT" title="Bantuan untuk Operasional Bisnis Anda." description="Hubungi tim Mille untuk kendala penggunaan, pertanyaan akun, atau kebutuhan lain." current="Support" />
      <ContactSection />
      <ActionsSection />
      <FormSection />
      <ClosingBanner title="Operasional Tetap Berjalan dengan Dukungan yang Tepat." description="Tim Mille siap membantu kebutuhan penggunaan dan pengelolaan akun." primary={{ label: "Lihat FAQ", href: "/faq" }} secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }} />
    </>
  )
}
