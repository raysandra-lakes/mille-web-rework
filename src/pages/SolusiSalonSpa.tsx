import { createElement, type ReactNode } from "react"
import { Link } from "react-router"

// Keep semantic typography aligned with the existing solution pages.
function Text({
  as = "p",
  variant = "type-body-md",
  className = "",
  children,
}: {
  as?: "p" | "h1" | "h2" | "h3"
  variant?: string
  className?: string
  children: ReactNode
}) {
  return createElement(as, { className: `${variant} ${className}` }, children)
}

function Icon({
  kind,
  className = "size-5",
}: {
  kind: string
  className?: string
}) {
  const paths: Record<string, ReactNode> = {
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2M8 18h2" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" />
      </>
    ),
    commission: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M3 10h18M7 15h3M16 14v3M14.5 15.5h3" />
      </>
    ),
    loyalty: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
    chart: <path d="M4 3v18h17M8 16v-5M13 16V7M18 16V4" />,
    pos: (
      <>
        <rect x="3" y="3" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 16v5M7 8h4M7 11h8" />
      </>
    ),
    insight: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2M10 8l1.5 1.5L15 6" />
      </>
    ),
    ai: (
      <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3ZM20 2v4M18 4h4" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[kind]}
    </svg>
  )
}

function Actions({ closing = false }: { closing?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${closing ? "justify-center" : ""}`}>
      <Link to="#" className="btn btn-primary btn-lg">
        {closing ? "Jadwalkan Demo" : "Coba Gratis"}
      </Link>
      <Link to="#" className="btn btn-secondary btn-lg">
        {closing ? "Coba Gratis" : "Jadwalkan Demo"}
      </Link>
    </div>
  )
}

const therapists = [
  {
    name: "Terapis A",
    specialty: "Facial & skincare",
    initial: "A",
    commission: "Rp240.000",
  },
  {
    name: "Terapis B",
    specialty: "Massage & relaksasi",
    initial: "B",
    commission: "Rp180.000",
  },
  {
    name: "Terapis C",
    specialty: "Hair & styling",
    initial: "C",
    commission: "Rp120.000",
  },
]
const schedule = [
  { time: "09.00", bookings: ["Facial Glow", null, "Hair Spa"] },
  { time: "11.00", bookings: [null, "Body Massage", null] },
  { time: "13.00", bookings: ["Facial Glow", null, "Hair Spa"] },
  { time: "15.00", bookings: [null, "Body Massage", null] },
]

function ReservationDashboard() {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-card p-4 shadow-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-brand-subtle p-2 text-brand">
            <Icon kind="calendar" />
          </span>
          <div>
            <Text variant="type-heading-md">Reservasi</Text>
            <span className="text-xs text-muted-foreground">
              Jadwal terapis · Hari ini
            </span>
          </div>
        </div>
        <span className="badge badge-neutral">Contoh data</span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          ["Booking terisi", "6"],
          ["Slot kosong", "6"],
          ["Terapis aktif", "3"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-surface p-3">
            <span className="block text-xs text-muted-foreground">{label}</span>
            <span className="mt-1 block font-display text-2xl font-bold">
              {value}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-semibold">Jadwal Hari Ini</span>
        <div className="flex gap-3 text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-brand" />
            Terisi
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full border border-border bg-surface" />
            Kosong
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <caption className="sr-only">
            Contoh jadwal booking per terapis hari ini
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="px-1 py-3 font-medium text-muted-foreground"
              >
                Jam
              </th>
              {therapists.map((therapist) => (
                <th
                  scope="col"
                  key={therapist.name}
                  className="whitespace-nowrap px-2 py-3 font-semibold"
                >
                  {therapist.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((slot) => (
              <tr key={slot.time}>
                <th
                  scope="row"
                  className="border-t border-border py-3 pr-2 font-medium text-muted-foreground"
                >
                  {slot.time}
                </th>
                {slot.bookings.map((booking, i) => (
                  <td key={i} className="border-t border-border p-1.5">
                    <div
                      className={`rounded-md border p-2 ${
                        booking
                          ? "border-brand/20 bg-brand-subtle"
                          : "border-dashed border-border bg-surface"
                      }`}
                    >
                      <span
                        className={`block font-semibold ${
                          booking ? "text-brand" : "text-muted-foreground"
                        }`}
                      >
                        {booking || "Slot kosong"}
                      </span>
                      <span className="mt-1 block text-muted-foreground">
                        {booking ? "Terisi · 60 menit" : "Tersedia"}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 rounded-lg border border-border p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="font-display text-sm font-semibold">
            Ringkasan Komisi
          </span>
          <span className="text-xs font-semibold text-brand">
            Total Rp540.000
          </span>
        </div>
        <div className="space-y-3">
          {therapists.map((therapist) => (
            <div key={therapist.name} className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold">
                {therapist.initial}
              </span>
              <div className="flex-1">
                <span className="block text-xs font-semibold">
                  {therapist.name}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {therapist.specialty}
                </span>
              </div>
              <span className="text-xs font-semibold">
                {therapist.commission}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
          Dihitung otomatis dari treatment yang selesai.
        </div>
      </div>
    </div>
  )
}

const problems = [
  {
    icon: "calendar",
    title: "Booking per Terapis Rumit",
    body: "Setiap terapis punya jadwal dan spesialisasi berbeda, rawan bentrok kalau dicatat manual.",
  },
  {
    icon: "commission",
    title: "Komisi Sulit Dihitung",
    body: "Komisi per treatment dan per karyawan butuh perhitungan yang akurat dan transparan.",
  },
  {
    icon: "loyalty",
    title: "Retensi Pelanggan Rendah",
    body: "Tanpa sistem loyalitas, pelanggan mudah pindah ke kompetitor.",
  },
  {
    icon: "chart",
    title: "Sulit Lacak Layanan Favorit",
    body: "Data treatment yang laris jarang dianalisis untuk strategi promosi.",
  },
]
const features = [
  {
    icon: "calendar",
    title: "Reservasi & Booking",
    body: "Jadwalkan layanan per terapis tanpa bentrok waktu.",
  },
  {
    icon: "team",
    title: "Manajemen Terapis",
    body: "Atur spesialisasi, ketersediaan, dan performa tiap terapis.",
  },
  {
    icon: "commission",
    title: "Komisi Otomatis",
    body: "Hitung komisi karyawan per treatment secara otomatis dan transparan.",
  },
  {
    icon: "loyalty",
    title: "Loyalty Program",
    body: "Bangun program membership dan reward untuk pelanggan setia.",
  },
  {
    icon: "pos",
    title: "POS Layanan",
    body: "Proses pembayaran treatment dan produk dalam satu transaksi.",
  },
  {
    icon: "insight",
    title: "Customer Insight",
    body: "Pahami preferensi dan riwayat kunjungan tiap pelanggan.",
  },
]

function Cards({
  items,
  feature = false,
}: {
  items: typeof problems
  feature?: boolean
}) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${
        feature ? "lg:grid-cols-3" : "xl:grid-cols-4"
      }`}
    >
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`card reveal reveal-delay-${i + 1} p-7 transition-shadow hover:shadow-lg`}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-md bg-brand-subtle p-3 text-brand">
              <Icon kind={item.icon} />
            </span>
            <span className="text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <Text as="h3" variant="type-heading-md" className="mb-3">
            {item.title}
          </Text>
          <Text>{item.body}</Text>
        </div>
      ))}
    </div>
  )
}

function OptiMille() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <Text variant="type-eyebrow" className="mb-4">
            OptiMille untuk Salon & Spa
          </Text>
          <Text as="h2" variant="type-display-md" className="mb-6">
            Tahu Layanan Mana yang Paling Diminati, dan{" "}
            <span className="text-gradient-brand">
              Kapan Pelanggan Akan Kembali.
            </span>
          </Text>
          <Text variant="type-body-lg" className="mb-7">
            Dari tren treatment hingga pola kunjungan, OptiMille membantu Anda
            membaca data bisnis dan menentukan langkah berikutnya. Rencanakan
            promosi dan jadwal terapis dengan lebih terarah.
          </Text>
          <div className="space-y-4">
            {[
              "Temukan treatment yang paling diminati",
              "Sesuaikan jadwal terapis di jam sibuk",
              "Rancang promosi untuk kunjungan berikutnya",
            ].map((label) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <Icon kind="check" className="size-4 text-brand" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal rounded-xl border border-foreground/10 bg-foreground p-5 text-card shadow-xl sm:p-7">
          <div className="mb-6 flex items-center gap-3 border-b border-card/10 pb-4">
            <span className="rounded-md bg-brand/20 p-2 text-brand-light">
              <Icon kind="ai" />
            </span>
            <div>
              <span className="block font-display font-bold">OptiMille</span>
              <span className="text-xs text-card/60">Asisten bisnis Anda</span>
            </div>
            <span className="ml-auto rounded-full border border-card/15 px-2 py-1 text-xs text-card/60">
              Contoh AI
            </span>
          </div>
          <div className="mb-6 ml-6 rounded-lg bg-card/10 p-4 text-sm">
            Treatment apa yang paling laris bulan ini?
          </div>
          <div className="flex items-start gap-3">
            <Icon kind="ai" className="mt-1 size-5 shrink-0 text-brand-light" />
            <div className="min-w-0 flex-1">
              <div className="mb-4 text-sm leading-relaxed text-card/80">
                <strong className="text-card">Facial Glow</strong> menjadi
                layanan paling diminati dengan 86 treatment bulan ini. Berikut
                tiga layanan teratas:
              </div>
              <div className="space-y-3">
                {[
                  ["Facial Glow", "86 treatment", "w-full"],
                  ["Body Massage", "64 treatment", "w-3/4"],
                  ["Hair Spa", "42 treatment", "w-1/2"],
                ].map(([name, count, width], i) => (
                  <div
                    key={name}
                    className="rounded-md border border-card/10 bg-card/5 p-3"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold">
                        {String(i + 1).padStart(2, "0")} · {name}
                      </span>
                      <span className="text-brand-light">{count}</span>
                    </div>
                    <div className="h-1 rounded-full bg-card/10">
                      <div
                        className={`h-full rounded-full bg-brand ${width}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-brand/30 bg-brand/10 p-4 text-xs leading-relaxed text-card/80">
                <strong className="text-brand-light">Rekomendasi:</strong>{" "}
                Tambahkan 2 slot terapis facial pada pukul 15.00–18.00. Buat
                paket Facial Glow + Hair Spa untuk mendorong kunjungan kembali.
              </div>
              <div className="mt-4 text-xs text-card/40">
                Ilustrasi rekomendasi berdasarkan data contoh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SolusiSalonSpa() {
  return (
    <>
      <section className="section-spacing bg-background">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-brand">
              Beranda
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/" className="hover:text-brand">
              Solusi Bisnis
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-foreground">
              Salon & Spa
            </span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Text variant="type-eyebrow" className="mb-5">
                SOLUSI UNTUK SALON & SPA
              </Text>
              <Text as="h1" variant="type-display-lg" className="mb-6">
                Atur Jadwal Terapis, Komisi, dan Pelanggan{" "}
                <span className="text-gradient-brand">dalam Satu Sistem.</span>
              </Text>
              <Text variant="type-body-lg" className="mb-8">
                Bisnis layanan hidup dari jadwal yang rapi dan pelanggan yang
                kembali lagi. Mille membantu Anda mengelola reservasi per
                terapis, komisi karyawan, dan loyalitas pelanggan tanpa ribet.
              </Text>
              <Actions />
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                {["Gratis 14 hari", "Setup cepat", "Dukungan onboarding"].map(
                  (label) => (
                    <span key={label} className="flex items-center gap-1.5">
                      <Icon kind="check" className="size-4 text-brand" />
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
            <ReservationDashboard />
          </div>
        </div>
      </section>
      <section className="section-spacing bg-surface">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <Text variant="type-eyebrow" className="mb-4">
              Tantangan Bisnis Layanan
            </Text>
            <Text as="h2" variant="type-display-md" className="mb-5">
              Bisnis Layanan Butuh Koordinasi Jadwal yang Presisi.
            </Text>
            <Text variant="type-body-lg">
              Dari reservasi hingga kunjungan berikutnya, setiap detail
              menentukan pengalaman pelanggan dan kelancaran tim Anda.
            </Text>
          </div>
          <Cards items={problems} />
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <Text variant="type-eyebrow" className="mb-4">
              Satu Sistem, Semua Layanan
            </Text>
            <Text as="h2" variant="type-display-md" className="mb-5">
              Jadwal Rapi, Tim Terarah, Pelanggan Kembali.
            </Text>
            <Text variant="type-body-lg">
              Enam fitur yang saling terhubung untuk mengelola layanan,
              karyawan, dan hubungan pelanggan dengan lebih mudah.
            </Text>
          </div>
          <Cards items={features} feature />
        </div>
      </section>
      <OptiMille />
      <section className="section-spacing">
        <div className="container-page">
          <div className="card reveal grid overflow-hidden md:grid-cols-2">
            <div className="min-h-72">
              <img
                src="https://images.unsplash.com/photo-1693578538512-fc66f318c833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvcnxlbnwxfHx8fDE3OTA5MjQ3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior spa dengan kursi relaksasi dan suasana yang tenang"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <Text variant="type-eyebrow" className="mb-5">
                Cerita Bisnis Salon & Spa
              </Text>
              <blockquote>
                <Text variant="type-heading-lg" className="mb-7">
                  “Jadwal terapis jadi jauh lebih teratur, dan komisi karyawan
                  dihitung otomatis tanpa drama akhir bulan.”
                </Text>
              </blockquote>
              <div className="border-t border-border pt-5">
                <div className="mb-1 font-semibold">[Customer Name]</div>
                <div className="text-sm text-muted-foreground">
                  [Position] · [Business Name]
                </div>
                <span className="badge badge-neutral mt-4">Salon & Spa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing bg-foreground text-center text-card">
        <div className="container-page">
          <Text
            variant=""
            className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-light"
          >
            Mulai Sekarang
          </Text>
          <Text
            as="h2"
            variant=""
            className="mx-auto mb-6 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-card sm:text-4xl"
          >
            Siap Mengelola Jadwal dan Pelanggan Lebih Terarah?
          </Text>
          <Text
            variant=""
            className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-card/60 sm:text-lg"
          >
            Satukan reservasi, komisi, dan loyalitas pelanggan. Tim Mille siap
            membantu Anda menemukan solusi untuk bisnis salon dan spa Anda.
          </Text>
          <Actions closing />
        </div>
      </section>
    </>
  )
}
