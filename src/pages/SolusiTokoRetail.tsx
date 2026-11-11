import { createElement, type ReactNode } from "react"
import { Link } from "react-router"

// Compose the site's existing typography tokens with semantic elements.
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
    inventory: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="M3 8v9l9 5 9-5V8M12 13v9M7.5 5.5l9 5" />
      </>
    ),
    outlet: (
      <>
        <path d="M3 10h18l-2-7H5l-2 7ZM5 10v11h14V10M9 21v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      </>
    ),
    transfer: (
      <>
        <path d="M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v18h17M8 16v-5M13 16V7M18 16V4" />
      </>
    ),
    pos: (
      <>
        <rect x="3" y="3" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 16v5M7 8h4M7 11h8" />
      </>
    ),
    customer: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" />
      </>
    ),
    loyalty: (
      <>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </>
    ),
    ai: (
      <>
        <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3ZM20 2v4M18 4h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    alert: (
      <>
        <path d="m12 3 10 18H2L12 3ZM12 9v5M12 17h.01" />
      </>
    ),
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

const products = [
  {
    name: "Basic Tee · M",
    sku: "APP-001-M",
    stock: [8, 64, 32],
    critical: true,
  },
  { name: "Canvas Tote", sku: "ACC-024", stock: [42, 5, 28], critical: true },
  {
    name: "Everyday Shirt · L",
    sku: "APP-018-L",
    stock: [36, 48, 24],
    critical: false,
  },
  { name: "Classic Cap", sku: "ACC-012", stock: [28, 36, 45], critical: false },
]

function RetailDashboard() {
  return (
    <div
      className="min-w-0 rounded-xl border border-border bg-card p-4 shadow-xl sm:p-6"
      role="img"
      aria-label="Contoh dashboard inventaris: stok per SKU di Outlet A, B, dan C, dua alert stok menipis, dan performa penjualan setiap outlet."
    >
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-brand-subtle p-2 text-brand">
            <Icon kind="inventory" />
          </span>
          <div>
            <Text variant="type-heading-md">Inventaris</Text>
            <span className="text-xs text-muted-foreground">
              Semua outlet · Hari ini
            </span>
          </div>
        </div>
        <span className="badge badge-neutral">Contoh data</span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          ["Total SKU", "2.480"],
          ["Outlet aktif", "3"],
          ["Stok menipis", "2 SKU"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-surface p-3">
            <span className="block text-xs text-muted-foreground">{label}</span>
            <span className="mt-1 block font-display text-lg font-bold text-foreground sm:text-2xl">
              {value}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-4 flex items-start gap-2 rounded-md border border-brand/20 bg-brand-subtle p-3 text-brand">
        <Icon kind="alert" className="size-4 shrink-0" />
        <span className="text-xs leading-relaxed">
          <strong>2 SKU perlu perhatian.</strong> Cek stok dan rencanakan
          transfer antar outlet.
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <caption className="sr-only">
            Level stok per SKU di setiap outlet
          </caption>
          <thead className="text-muted-foreground">
            <tr>
              {["Produk / SKU", "Outlet A", "Outlet B", "Outlet C"].map(
                (label) => (
                  <th
                    key={label}
                    className="border-b border-border px-2 py-3 font-medium"
                  >
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td className="border-b border-border px-2 py-3">
                  <span className="block font-semibold">{product.name}</span>
                  <span className="text-muted-foreground">{product.sku}</span>
                </td>
                {product.stock.map((stock, i) => (
                  <td key={i} className="border-b border-border px-2 py-3">
                    <span
                      className={
                        stock < 10
                          ? "rounded-sm bg-brand-subtle px-2 py-1 font-bold text-brand"
                          : "text-foreground"
                      }
                    >
                      {stock}
                      {stock < 10 ? " !" : ""}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <Text variant="type-heading-md" className="mb-3">
          Penjualan per outlet
        </Text>
        {[
          ["Outlet A", "Rp12,8 jt", "w-4/5"],
          ["Outlet B", "Rp9,6 jt", "w-3/5"],
          ["Outlet C", "Rp8,0 jt", "w-1/2"],
        ].map(([outlet, sales, width]) => (
          <div
            key={outlet}
            className="mb-3 grid grid-cols-3 items-center gap-3 text-xs"
          >
            <span className="text-muted-foreground">{outlet}</span>
            <div className="h-1.5 rounded-full bg-surface">
              <div className={`h-full rounded-full bg-brand ${width}`} />
            </div>
            <span className="text-right font-semibold">{sales}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const problems = [
  {
    icon: "inventory",
    title: "SKU Terlalu Banyak",
    body: "Ribuan varian produk sulit dipantau satu per satu secara manual.",
  },
  {
    icon: "outlet",
    title: "Stok Tersebar di Banyak Outlet",
    body: "Stok berlebih di satu toko, kehabisan di toko lain, tanpa visibilitas terpusat.",
  },
  {
    icon: "transfer",
    title: "Transfer Stok Ribet",
    body: "Memindahkan barang antar outlet butuh koordinasi dan pencatatan yang rapi.",
  },
  {
    icon: "chart",
    title: "Sulit Tahu Produk Terlaris",
    body: "Data penjualan ada di tiap outlet, tapi jarang disatukan jadi insight.",
  },
]
const features = [
  {
    icon: "inventory",
    title: "Inventaris Multi-Outlet",
    body: "Pantau stok semua produk di semua cabang dari satu dashboard.",
  },
  {
    icon: "transfer",
    title: "Transfer Stok",
    body: "Pindahkan barang antar outlet dengan pencatatan otomatis.",
  },
  {
    icon: "pos",
    title: "POS Retail",
    body: "Proses transaksi cepat dengan pencarian produk instan.",
  },
  {
    icon: "customer",
    title: "Customer Insight",
    body: "Pahami pola belanja dan preferensi pelanggan.",
  },
  {
    icon: "loyalty",
    title: "Loyalty Program",
    body: "Bangun program loyalitas untuk retensi pelanggan.",
  },
  {
    icon: "chart",
    title: "Laporan Performa Outlet",
    body: "Bandingkan penjualan dan stok antar cabang.",
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
          <Text className="text-sm">{item.body}</Text>
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
            OptiMille untuk Toko Retail
          </Text>
          <Text
            as="h2"
            variant="type-display-md"
            className="mb-6 font-extrabold"
          >
            Tahu Produk Mana yang Harus Ditambah,{" "}
            <span className="text-gradient-brand">Sebelum Kehabisan.</span>
          </Text>
          <Text variant="type-body-lg" className="mb-7">
            Ubah ribuan baris data stok menjadi langkah yang jelas. Tanya
            OptiMille untuk melihat SKU kritis, prioritas restock, dan peluang
            transfer antar outlet.
          </Text>
          <div className="space-y-4">
            {[
              "Temukan stok kritis di setiap cabang",
              "Manfaatkan stok berlebih sebelum restock",
              "Ambil keputusan berdasarkan data penjualan",
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
            Produk apa yang stoknya kritis minggu ini?
          </div>
          <div className="flex items-start gap-3">
            <Icon kind="ai" className="mt-1 size-5 shrink-0 text-brand-light" />
            <div className="min-w-0 flex-1">
              <div className="mb-4 text-sm leading-relaxed text-card/80">
                Ada{" "}
                <strong className="text-card">2 SKU dengan stok kritis</strong>.
                Berikut langkah yang bisa Anda prioritaskan:
              </div>
              <div className="space-y-3">
                <div className="rounded-md border border-card/10 bg-card/5 p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold">Basic Tee · M</span>
                    <span className="text-xs text-brand-light">
                      Outlet A · 8 pcs
                    </span>
                  </div>
                  <div className="text-xs leading-relaxed text-card/65">
                    Transfer 24 pcs dari Outlet B yang memiliki stok 64 pcs.
                    Prioritaskan untuk menjaga ketersediaan di Outlet A.
                  </div>
                </div>
                <div className="rounded-md border border-card/10 bg-card/5 p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold">Canvas Tote</span>
                    <span className="text-xs text-brand-light">
                      Outlet B · 5 pcs
                    </span>
                  </div>
                  <div className="text-xs leading-relaxed text-card/65">
                    Transfer 15 pcs dari Outlet A untuk kebutuhan segera, lalu
                    restock 40 pcs untuk mengantisipasi permintaan minggu ini.
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-md border border-brand/30 bg-brand/10 p-3 text-xs leading-relaxed text-card/80">
                <strong className="text-brand-light">Rekomendasi:</strong>{" "}
                Dahulukan transfer stok yang tersedia sebelum melakukan
                pembelian baru.
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

export default function SolusiTokoRetail() {
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
              Toko Retail
            </span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Text variant="type-eyebrow" className="mb-5">
                SOLUSI UNTUK TOKO RETAIL
              </Text>
              <Text
                as="h1"
                variant="type-display-lg"
                className="mb-6 font-extrabold"
              >
                Kendalikan Stok Ribuan SKU di Semua Outlet,{" "}
                <span className="text-gradient-brand">dari Satu Sistem.</span>
              </Text>
              <Text variant="type-body-lg" className="mb-8">
                Semakin banyak produk dan outlet, semakin sulit tahu stok mana
                yang menipis dan mana yang menumpuk. Mille menyatukan
                inventaris, transfer stok, dan data pelanggan Anda dalam satu
                tempat.
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
            <RetailDashboard />
          </div>
        </div>
      </section>
      <section className="section-spacing bg-surface">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <Text variant="type-eyebrow" className="mb-4">
              Tantangan Bisnis Retail
            </Text>
            <Text
              as="h2"
              variant="type-display-md"
              className="mb-5 font-extrabold"
            >
              Retail Bermain dengan Skala dan Variasi Tinggi.
            </Text>
            <Text variant="type-body-lg">
              Semakin besar bisnis Anda, semakin penting visibilitas stok yang
              akurat di setiap titik jual.
            </Text>
          </div>
          <Cards items={problems} />
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <Text variant="type-eyebrow" className="mb-4">
              Satu Sistem, Semua Outlet
            </Text>
            <Text
              as="h2"
              variant="type-display-md"
              className="mb-5 font-extrabold"
            >
              Dari Stok hingga Pelanggan, Semua Terkendali.
            </Text>
            <Text variant="type-body-lg">
              Enam fitur yang bekerja bersama untuk operasional retail yang
              lebih rapi dan keputusan yang lebih tepat.
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
                src="https://images.unsplash.com/photo-1777136977034-71cbc026c9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xvdGhpbmclMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc5MDkyNDU2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior toko retail dengan rak pakaian dan display aksesori"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <Text variant="type-eyebrow" className="mb-5">
                Cerita Bisnis Retail
              </Text>
              <blockquote>
                <Text variant="type-heading-lg" className="mb-7">
                  “Sekarang kami tahu persis kapan harus restock dan outlet mana
                  yang butuh transfer stok, tanpa harus cek manual satu-satu.”
                </Text>
              </blockquote>
              <div className="border-t border-border pt-5">
                <div className="mb-1 font-semibold">[Customer Name]</div>
                <div className="text-sm text-muted-foreground">
                  [Position] · [Business Name]
                </div>
                <span className="badge badge-neutral mt-4">Toko Retail</span>
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
            Siap Mengendalikan Stok di Semua Outlet Anda?
          </Text>
          <Text
            variant=""
            className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-card/60 sm:text-lg"
          >
            Satukan inventaris, transaksi, dan insight pelanggan. Tim Mille siap
            membantu Anda menemukan solusi untuk bisnis retail Anda.
          </Text>
          <Actions closing />
        </div>
      </section>
    </>
  )
}
