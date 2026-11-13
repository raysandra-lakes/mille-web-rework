import { type ReactNode } from "react";
import { Link } from "react-router";
import { Breadcrumb } from "../components/product/ProductDetailPage";
import { produkGroups } from "../components/nav/navData";

type IconName =
  | "queue"
  | "payment"
  | "stock"
  | "shield"
  | "mobile"
  | "options"
  | "promo"
  | "tax"
  | "recipe";

const iconPaths: Record<IconName, ReactNode> = {
  queue: (
    <>
      <path d="M4 6h16M4 12h11M4 18h7" />
      <circle cx="19" cy="17" r="3" />
      <path d="M19 15.5V17l1 1" />
    </>
  ),
  payment: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  stock: (
    <>
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  mobile: (
    <>
      <rect x="3" y="4" width="13" height="14" rx="2" />
      <path d="M7 8h5M7 12h3M19 8v12M16 20h6" />
    </>
  ),
  options: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="8" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="11" cy="18" r="2" />
    </>
  ),
  promo: (
    <>
      <path d="M20 12 12 20 4 12V4h8l8 8Z" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m14 9-5 5" />
    </>
  ),
  tax: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h3M15 15h1M8 18h8" />
    </>
  ),
  recipe: (
    <>
      <path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h3" />
      <path d="M3 6h3M3 10h3M3 14h3M3 18h3" />
    </>
  ),
};

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
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
      {iconPaths[name]}
    </svg>
  );
}

const problems = [
  {
    icon: "queue" as IconName,
    title: "Antrean Menumpuk di Jam Ramai",
    copy: "Input pesanan dan pembayaran yang lambat memperpanjang waktu tunggu dan menurunkan kepuasan pelanggan.",
  },
  {
    icon: "payment" as IconName,
    title: "Pembayaran Sulit Direkonsiliasi",
    copy: "Transaksi tunai, QRIS, dan kartu yang dicatat terpisah menyulitkan pencocokan saat tutup kasir.",
  },
  {
    icon: "stock" as IconName,
    title: "Stok Tidak Sinkron dengan Penjualan",
    copy: "Pembaruan stok yang tertunda membuat ketersediaan produk di lapangan berbeda dengan data.",
  },
  {
    icon: "shield" as IconName,
    title: "Transaksi Sensitif Sulit Dipantau",
    copy: "Refund, void, dan pemberian akses tanpa kontrol berisiko menimbulkan kebocoran dan kesalahan.",
  },
];

const features = [
  {
    icon: "mobile" as IconName,
    title: "Kasir & Mobile POS",
    copy: "Terima pesanan dari meja kasir maupun perangkat mobile agar layanan tidak tertahan di satu titik.",
    visual: "mobile",
  },
  {
    icon: "payment" as IconName,
    title: "Pembayaran Fleksibel",
    copy: "Dukung QRIS dinamis, kartu melalui mesin EDC bank, serta pemisahan dan penggabungan tagihan.",
    visual: "payment",
  },
  {
    icon: "options" as IconName,
    title: "Variasi & Produk Tambahan",
    copy: "Atur varian dan tambahan menu agar pesanan tercatat sesuai permintaan pelanggan.",
    visual: "options",
  },
  {
    icon: "promo" as IconName,
    title: "Diskon, Voucher & Promosi",
    copy: "Jalankan promo dengan aturan yang jelas dan terhitung otomatis saat transaksi.",
    visual: "promo",
  },
  {
    icon: "tax" as IconName,
    title: "Pajak & Biaya Layanan",
    copy: "Terapkan pajak dan biaya layanan secara otomatis agar struk dan laporan konsisten.",
    visual: "tax",
  },
  {
    icon: "recipe" as IconName,
    title: "Resep & Bahan",
    copy: "Kaitkan menu dengan resep sehingga pemakaian bahan baku tercatat otomatis.",
    visual: "recipe",
  },
];

const transactionSteps = [
  {
    title: "Pemesanan",
    copy: "Catat pesanan dengan cepat, lengkap dengan variasi dan produk tambahan.",
  },
  {
    title: "Pembayaran",
    copy: "Terima berbagai metode pembayaran dalam satu alur.",
  },
  { title: "Stok", copy: "Stok dan bahan baku terbarui sesuai penjualan." },
  {
    title: "Laporan",
    copy: "Penjualan dan laba langsung tersaji secara real-time.",
  },
  {
    title: "Otorisasi",
    copy: "Setiap aksi tercatat dan dibatasi sesuai peran karyawan.",
  },
];

const integratedBlocks = [
  {
    eyebrow: "STOK",
    title: "Stok Ikut Diperbarui Setiap Kali Terjadi Penjualan.",
    copy: "Setiap transaksi langsung memengaruhi stok, sehingga ketersediaan produk di kasir selalu sesuai kondisi sebenarnya.",
    points: [
      "Pembaruan stok otomatis dari setiap penjualan",
      "Pengaturan ketersediaan produk dan buffer stok",
      "Terhubung ke stok opname dan prediksi kebutuhan bahan baku",
    ],
    visual: "stock",
  },
  {
    eyebrow: "LAPORAN",
    title: "Laporan Penjualan dan Laba yang Siap Dibaca Kapan Saja.",
    copy: "Performa outlet dapat dipantau secara real-time dari mana saja untuk mendukung keputusan harian.",
    points: [
      "Laporan penjualan dan laba real-time",
      "Analisis berbasis data untuk membaca performa penjualan",
      "Notifikasi untuk hal sensitif yang butuh tindakan segera",
    ],
    visual: "report",
  },
  {
    eyebrow: "OTORISASI",
    title: "Kontrol Transaksi yang Lebih Ketat tanpa Memperlambat Kasir.",
    copy: "Akses karyawan dibatasi sesuai peran, sementara sistem berbasis AI membantu mengenali pola transaksi yang mencurigakan.",
    points: [
      "Hak akses sesuai tugas dan tanggung jawab",
      "Pemberitahuan real-time untuk refund dan void",
      "Fraud Detection System berbasis AI",
    ],
    visual: "authorization",
  },
];

const businesses = [
  { label: "Restoran", href: "/solusi/restoran" },
  { label: "Kedai Kopi", href: "/solusi/kedai-kopi" },
  { label: "Cepat Saji", href: "/solusi/cepat-saji" },
  { label: "Bakery", href: "/solusi/bakery" },
  { label: "Toko Retail", href: "/solusi/toko-retail" },
  { label: "Salon & Spa", href: "/solusi/salon-spa" },
];

function PosScreen() {
  const orders = [
    ["2×", "Kopi Susu", "56.000"],
    ["1×", "Croissant", "30.000"],
    ["1×", "Matcha Latte", "32.000"],
  ];
  return (
    <div className="relative mx-auto max-w-[620px]">
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#171a20] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold tracking-wider text-white/50">
              MILLE POS · KASIR 01
            </span>
          </div>
          <span className="rounded-md bg-white/6 px-2 py-1 text-[9px] text-white/40">
            Outlet Kemang
          </span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1.22fr_.78fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[8px] uppercase tracking-wider text-slate-400">
                  Pesanan #M-0842
                </div>
                <div className="mt-1 font-display text-sm font-bold text-slate-800">
                  Kasir Utama
                </div>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-600">
                Diproses
              </span>
            </div>
            <div className="space-y-2">
              {orders.map(([qty, item, price]) => (
                <div
                  key={item}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-[8px]"
                >
                  <span className="font-bold text-brand">{qty}</span>
                  <span className="font-semibold text-slate-600">{item}</span>
                  <span className="font-bold text-slate-700">Rp{price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-3">
              <div className="text-[8px] text-slate-400">Total pembayaran</div>
              <div className="font-display text-xl font-extrabold text-slate-900">
                Rp118.000
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <span className="rounded-lg border border-slate-200 px-2 py-2 text-center text-[7px] font-bold text-slate-500">
                Split Bill
              </span>
              <span className="rounded-lg border border-brand/30 bg-brand-subtle px-2 py-2 text-center text-[7px] font-bold text-brand">
                QRIS
              </span>
              <span className="rounded-lg bg-brand px-2 py-2 text-center text-[7px] font-bold text-white">
                Bayar
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white">
              <div className="text-[8px] uppercase tracking-wider text-white/35">
                Penjualan Hari Ini
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold">
                Rp18.4jt
              </div>
              <div className="mt-1 text-[8px] font-semibold text-emerald-400">
                186 transaksi selesai
              </div>
              <div className="mt-4 flex h-10 items-end gap-1">
                {[35, 54, 42, 68, 58, 88, 72, 94].map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t ${index === 7 ? "bg-brand" : "bg-white/12"}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon name="stock" className="size-4" />
                </span>
                <div>
                  <div className="text-[8px] text-slate-400">Sinkronisasi</div>
                  <div className="text-[9px] font-bold text-slate-700">
                    Stok diperbarui otomatis
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ["Susu UHT", "− 400 ml"],
                  ["Biji Kopi", "− 36 gr"],
                  ["Croissant", "− 1 pcs"],
                ].map(([item, amount]) => (
                  <div
                    key={item}
                    className="flex justify-between rounded bg-slate-50 px-2 py-2 text-[7px]"
                  >
                    <span className="text-slate-500">{item}</span>
                    <b className="text-slate-700">{amount}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-24">
      <div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-page relative">
        <Breadcrumb items={["Produk", "Point of Sale"]} />
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-20">
          <div className="max-w-[630px]">
            <div className="badge badge-brand mb-6">
              <span className="size-1.5 rounded-full bg-brand" />
              POINT OF SALE
            </div>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,4vw,3.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">
              Proses Setiap Transaksi Lebih Cepat dan Akurat, dari Kasir hingga
              Laporan.
            </h1>
            <p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">
              Mille POS menyatukan pemesanan di kasir, berbagai metode
              pembayaran, pembaruan stok, dan laporan penjualan dalam satu
              sistem, sehingga antrean bergerak lebih cepat dan data bisnis
              selalu terbarui.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                to="https://partner.millehub.com/register-user"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                Coba Gratis
              </Link>
              <Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg">
                Jadwalkan Demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                "✓ Gratis 30 hari",
                "✓ Setup cepat",
                "✓ Dukungan onboarding",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <PosScreen />
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <div className="mb-14 max-w-3xl">
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">
            Kasir yang Tidak Terintegrasi Memperlambat Layanan dan Menyulitkan
            Kontrol.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Proses transaksi yang manual atau terpisah-pisah berpotensi
            menimbulkan antrean, selisih pencatatan, dan celah pengawasan.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className={`card reveal reveal-delay-${index + 1} relative p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg`}
            >
              <span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-6 grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand">
                <Icon name={problem.icon} />
              </div>
              <h3 className="mb-3 font-display text-base font-bold leading-snug text-foreground">
                {problem.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                {problem.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "mobile")
    return (
      <div className="grid h-full grid-cols-[1fr_.6fr] gap-3 bg-slate-50 p-4">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-3 text-[8px] font-bold text-slate-700">
            Kasir Utama
          </div>
          {["Kopi Susu", "Matcha Latte", "Croissant"].map((item, index) => (
            <div
              key={item}
              className="mb-2 flex justify-between rounded bg-slate-50 px-2 py-2 text-[7px]"
            >
              <span>{item}</span>
              <b>{index + 1}×</b>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-[#171a20] p-2 text-white shadow-lg">
          <div className="mx-auto mb-3 h-1 w-6 rounded bg-white/15" />
          {["Meja 04", "2 item", "Rp86k"].map((item) => (
            <div
              key={item}
              className="mb-2 rounded bg-white/8 px-2 py-2 text-center text-[6px]"
            >
              {item}
            </div>
          ))}
          <div className="mt-3 rounded bg-brand py-2 text-center text-[6px] font-bold">
            Simpan
          </div>
        </div>
      </div>
    );
  if (kind === "payment")
    return (
      <div className="h-full bg-white p-4">
        <div className="mb-3 flex justify-between">
          <span className="text-[8px] font-bold text-slate-700">
            Pilih Pembayaran
          </span>
          <span className="text-[8px] font-bold text-slate-800">Rp118.000</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Tunai", "QRIS", "Kartu"].map((item, index) => (
            <div
              key={item}
              className={`rounded-lg border p-3 text-center text-[7px] font-bold ${index === 1 ? "border-brand bg-brand-subtle text-brand" : "border-slate-200 text-slate-500"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-slate-50 p-3 text-center text-[7px] font-semibold text-slate-500">
            Split Bill
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center text-[7px] font-semibold text-slate-500">
            Gabung Tagihan
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-brand py-2.5 text-center text-[8px] font-bold text-white">
          Konfirmasi Pembayaran
        </div>
      </div>
    );
  if (kind === "options")
    return (
      <div className="h-full bg-slate-50 p-4">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="text-[8px] font-bold text-slate-700">Kopi Susu</div>
          <div className="mt-3 text-[7px] text-slate-400">Ukuran</div>
          <div className="mt-1 flex gap-2">
            {["Regular", "Large"].map((item, index) => (
              <span
                key={item}
                className={`rounded px-2 py-1.5 text-[7px] font-semibold ${index ? "bg-brand text-white" : "bg-slate-100 text-slate-500"}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3 text-[7px] text-slate-400">Produk tambahan</div>
          {["Extra shot", "Oat milk", "Less ice"].map((item, index) => (
            <div
              key={item}
              className="mt-1.5 flex justify-between rounded bg-slate-50 px-2 py-2 text-[7px] text-slate-600"
            >
              <span>{item}</span>
              <span className={index < 2 ? "text-brand" : "text-slate-300"}>
                {index < 2 ? "✓" : "+"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  if (kind === "promo")
    return (
      <div className="h-full bg-[#171a20] p-4 text-white">
        <div className="mb-3 text-[8px] font-bold">Promo Aktif</div>
        {[
          ["HAPPYHOUR", "20%", "bg-brand"],
          ["MEMBER10", "10%", "bg-emerald-500"],
          ["WEEKDAY", "15%", "bg-amber-400"],
        ].map(([code, value, color]) => (
          <div
            key={code}
            className="mb-2 flex items-center rounded-lg bg-white/6 p-2.5"
          >
            <span className={`mr-2 size-2 rounded-full ${color}`} />
            <span className="text-[7px] font-semibold">{code}</span>
            <b className="ml-auto text-[8px]">{value}</b>
          </div>
        ))}
        <div className="mt-3 rounded-lg border border-dashed border-white/15 py-2 text-center text-[7px] text-white/40">
          + Tambah kode voucher
        </div>
      </div>
    );
  if (kind === "tax")
    return (
      <div className="h-full bg-white p-4">
        <div className="mb-3 text-[8px] font-bold text-slate-700">
          Ringkasan Tagihan
        </div>
        {[
          ["Subtotal", "Rp100.000"],
          ["Pajak 10%", "Rp10.000"],
          ["Biaya layanan 8%", "Rp8.000"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between border-b border-slate-100 py-2.5 text-[7px] text-slate-500"
          >
            <span>{label}</span>
            <b className="text-slate-700">{value}</b>
          </div>
        ))}
        <div className="mt-3 flex justify-between rounded-lg bg-brand-subtle p-3 text-[9px] font-bold text-brand">
          <span>Total</span>
          <span>Rp118.000</span>
        </div>
        <div className="mt-3 text-center text-[6px] text-slate-400">
          Terhitung otomatis pada struk dan laporan
        </div>
      </div>
    );
  return (
    <div className="h-full bg-slate-50 p-4">
      <div className="mb-3 flex justify-between">
        <span className="text-[8px] font-bold text-slate-700">
          Resep · Kopi Susu
        </span>
        <span className="rounded bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
          Aktif
        </span>
      </div>
      {[
        ["Biji Kopi", "18 gr"],
        ["Susu UHT", "200 ml"],
        ["Gula Aren", "25 ml"],
        ["Es Batu", "120 gr"],
      ].map(([item, amount], index) => (
        <div
          key={item}
          className="mb-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm"
        >
          <span
            className={`size-2 rounded-full ${index === 3 ? "bg-amber-400" : "bg-brand"}`}
          />
          <span className="text-[7px] font-semibold text-slate-600">
            {item}
          </span>
          <b className="text-[7px] text-slate-500">{amount}</b>
        </div>
      ))}
      <div className="mt-2 rounded-lg bg-brand py-2 text-center text-[7px] font-bold text-white">
        Tersinkron ke stok
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="section-spacing bg-[#F8FAFC]">
      <div className="container-page">
        <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div>
            <p className="type-eyebrow mb-4">FITUR POINT OF SALE</p>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
              Semua yang Dibutuhkan Kasir dalam Satu Layar.
            </h2>
          </div>
          <p className="pb-1 text-base leading-relaxed text-muted-foreground">
            Dirancang agar kasir bekerja cepat dengan sedikit langkah, tanpa
            mengorbankan ketepatan pencatatan.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group reveal reveal-delay-${(index % 3) + 1} flex min-h-[390px] flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)]`}
            >
              <div className="flex items-start gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-subtle text-brand">
                  <Icon name={feature.icon} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {feature.copy}
                  </p>
                </div>
              </div>
              <div className="mt-5 min-h-[220px] flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="h-full transition-transform duration-300 group-hover:scale-105">
                  <FeatureVisual kind={feature.visual} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransactionFlowSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="type-eyebrow mb-4">ALUR TRANSAKSI</p>
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
            Satu Transaksi, Terhubung ke Seluruh Operasional.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Setiap penjualan di kasir otomatis memperbarui pembayaran, stok,
            laporan, dan catatan otorisasi tanpa input ulang.
          </p>
        </div>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {transactionSteps.map((step, index) => (
            <li
              key={step.title}
              className={`reveal reveal-delay-${index + 1} relative rounded-2xl border border-border bg-white p-5 shadow-sm`}
            >
              <div className="mb-5 flex items-center">
                <span className="relative z-10 grid size-10 place-items-center rounded-full bg-brand font-display text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                {index < transactionSteps.length - 1 && (
                  <span
                    className="absolute left-10 top-10 hidden h-px w-[calc(100%+1.25rem)] bg-brand/25 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function IntegratedVisual({ kind }: { kind: string }) {
  if (kind === "stock")
    return (
      <div className="h-full bg-white p-5">
        <div className="mb-4 flex justify-between">
          <div>
            <div className="text-[8px] uppercase text-slate-400">
              Live inventory
            </div>
            <div className="font-display text-lg font-bold text-slate-800">
              Pemakaian Bahan
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
            Sinkron
          </span>
        </div>
        {[
          ["Biji Kopi", "8.4 kg", 78],
          ["Susu UHT", "24.8 L", 54],
          ["Gula Aren", "12.2 L", 68],
          ["Croissant", "18 pcs", 32],
        ].map(([item, stock, width], index) => (
          <div key={item as string} className="mb-3 rounded-xl bg-slate-50 p-3">
            <div className="flex justify-between text-[8px]">
              <b className="text-slate-600">{item as string}</b>
              <span
                className={
                  index === 3 ? "font-bold text-amber-500" : "text-slate-500"
                }
              >
                {stock as string}
              </span>
            </div>
            <div className="mt-2 h-1.5 rounded bg-slate-200">
              <div
                className={`h-1.5 rounded ${index === 3 ? "bg-amber-400" : "bg-brand"}`}
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  if (kind === "report")
    return (
      <div className="h-full bg-[#171a20] p-5 text-white">
        <div className="flex justify-between">
          <div>
            <div className="text-[8px] uppercase text-white/30">
              Penjualan real-time
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold">
              Rp18.4jt
            </div>
          </div>
          <span className="text-[8px] font-bold text-emerald-400">+12.4%</span>
        </div>
        <svg
          className="mt-5 h-24 w-full"
          viewBox="0 0 300 90"
          fill="none"
          aria-label="Grafik laporan penjualan"
        >
          <path
            d="M4 78 38 62l30 8 34-35 32 14 35-30 32 16 40-25 55 11"
            stroke="#009AE5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M4 78 38 62l30 8 34-35 32 14 35-30 32 16 40-25 55 11"
            stroke="#009AE5"
            strokeWidth="10"
            strokeOpacity=".09"
          />
        </svg>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Transaksi", "186"],
            ["Laba", "6.2jt"],
            ["AOV", "98k"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/6 p-2">
              <div className="text-[6px] text-white/30">{label}</div>
              <div className="mt-1 text-[9px] font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="h-full bg-slate-50 p-5">
      <div className="mb-4 flex justify-between">
        <div>
          <div className="text-[8px] uppercase text-slate-400">
            Audit aktivitas
          </div>
          <div className="font-display text-lg font-bold text-slate-800">
            Kontrol Transaksi
          </div>
        </div>
        <span className="rounded-full bg-brand-subtle px-2 py-1 text-[8px] font-bold text-brand">
          AI aktif
        </span>
      </div>
      {[
        ["Refund #0841", "Persetujuan Manager", "bg-amber-400"],
        ["Void #0838", "Terverifikasi", "bg-emerald-400"],
        ["Diskon manual #0831", "Perlu ditinjau", "bg-rose-400"],
      ].map(([action, status, color]) => (
        <div
          key={action}
          className="mb-3 flex items-center rounded-xl bg-white p-3 shadow-sm"
        >
          <span className={`mr-3 size-2 rounded-full ${color}`} />
          <div>
            <div className="text-[8px] font-bold text-slate-700">{action}</div>
            <div className="mt-0.5 text-[7px] text-slate-400">{status}</div>
          </div>
          <span className="ml-auto text-[10px] text-slate-300">›</span>
        </div>
      ))}
      <div className="mt-4 rounded-xl border border-brand/20 bg-brand-subtle p-3 text-[8px] leading-relaxed text-brand">
        <b>Fraud Detection:</b> 1 pola transaksi memerlukan peninjauan.
      </div>
    </div>
  );
}

function IntegratedSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page space-y-16 lg:space-y-24">
        {integratedBlocks.map((block, index) => (
          <article
            key={block.eyebrow}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
          >
            <div className={index % 2 ? "lg:order-2" : ""}>
              <p className="type-eyebrow mb-4">{block.eyebrow}</p>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">
                {block.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {block.copy}
              </p>
              <ul className="mt-7 space-y-3">
                {block.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-subtle text-[10px] font-bold text-brand">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`min-h-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.09)] ${index % 2 ? "lg:order-1" : ""}`}
            >
              <IntegratedVisual kind={block.visual} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BusinessTypesSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-page text-center">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">
          Digunakan oleh Berbagai Jenis Usaha.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {businesses.map((business) => (
            <Link
              key={business.label}
              to={business.href}
              className="badge badge-neutral px-4 py-2 no-underline transition hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
            >
              {business.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const stores = [
    {
      label: "App Store",
      href: "https://apps.apple.com/id/app/mille-pos/id6465954107",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/search?q=mille%20pos&c=apps",
    },
    {
      label: "Microsoft Store",
      href: "https://apps.microsoft.com/detail/9NM3LFT53GXP",
    },
  ];
  return (
    <section className="bg-surface py-8">
      <div className="container-page flex flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <div className="font-display text-xl font-extrabold text-foreground">
            Unduh Mille POS
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            Gunakan aplikasi kasir pada perangkat operasional yang kompatibel.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {stores.map((store) => (
            <a
              key={store.label}
              href={store.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-xs font-bold text-foreground no-underline transition hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {store.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-center text-white lg:py-28">
      <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="container-page relative">
        <h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
          Siap Membuat Proses Kasir Lebih Cepat dan Terkontrol?
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="https://partner.millehub.com/register-user"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg"
          >
            Coba Gratis 30 Hari
          </Link>
          <Link
            to="/jadwalkan-demo"
            className="btn btn-lg border border-white/25 bg-white/8 text-white backdrop-blur transition hover:border-white/45 hover:bg-white/14"
          >
            Jadwalkan Demo
          </Link>
        </div>
        <Link
          to={produkGroups[0].href}
          className="mt-7 inline-flex text-xs font-semibold text-white/45 no-underline transition hover:text-brand-light"
        >
          Lihat semua produk Operasional, Pemesanan, & Pembayaran →
        </Link>
      </div>
    </section>
  );
}

export default function ProdukPointOfSale() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <TransactionFlowSection />
      <IntegratedSection />
      <BusinessTypesSection />
      <DownloadSection />
      <ClosingCtaSection />
    </>
  );
}
