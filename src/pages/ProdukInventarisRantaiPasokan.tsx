import { type ReactNode } from "react";
import { Link } from "react-router";

type IconName =
  | "variance"
  | "price"
  | "alert"
  | "warehouse"
  | "inventory"
  | "supplier"
  | "production"
  | "transfer"
  | "opname"
  | "cogs";

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    variance: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="M3 8v9l9 5 9-5V8M12 13v9" />
        <path d="M16 5.2 7 10" />
      </>
    ),
    price: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 6-4 6 6 5-5" />
      </>
    ),
    alert: (
      <>
        <path d="m12 3 10 18H2L12 3Z" />
        <path d="M12 9v5M12 17h.01" />
      </>
    ),
    warehouse: (
      <>
        <path d="M3 9l9-6 9 6v12H3V9Z" />
        <path d="M7 13h4v4H7zM15 13h2M15 17h2" />
      </>
    ),
    inventory: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="M3 8v9l9 5 9-5V8M12 13v9" />
      </>
    ),
    supplier: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4M17 14v4M15 16h4" />
      </>
    ),
    production: (
      <>
        <path d="M4 20V9l5 3V8l5 3V4h6v16H4Z" />
        <path d="M8 16h2M14 16h2" />
      </>
    ),
    transfer: (
      <>
        <path d="M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4" />
      </>
    ),
    opname: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3h6v4H9zM8 12l2 2 4-4M8 18h8" />
      </>
    ),
    cogs: (
      <>
        <path d="M4 20V4M4 20h17M8 16v-5M13 16V7M18 16V3" />
        <path d="m7 7 4-3 4 2 5-4" />
      </>
    ),
  };

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
      {paths[name]}
    </svg>
  );
}

function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-[13px]"
    >
      <Link
        to="/"
        className="text-muted-foreground no-underline transition-colors hover:text-brand"
      >
        Beranda
      </Link>
      <span className="text-border">/</span>
      <Link
        to="/"
        className="text-muted-foreground no-underline transition-colors hover:text-brand"
      >
        Produk
      </Link>
      <span className="text-border">/</span>
      <span className="font-semibold text-foreground">
        Inventaris & Rantai Pasokan
      </span>
    </nav>
  );
}

function InventoryDashboard() {
  const stockRows = [
    {
      item: "Biji Kopi Arabica",
      stock: "42 kg",
      location: "Gudang Utama",
      level: 82,
      status: "Aman",
    },
    {
      item: "Susu Fresh",
      stock: "18 L",
      location: "Outlet Kemang",
      level: 34,
      status: "Menipis",
    },
    {
      item: "Sirup Vanilla",
      stock: "3 botol",
      location: "Outlet Pusat",
      level: 12,
      status: "Kritis",
    },
  ];

  return (
    <div className="relative mx-auto max-w-[590px]">
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#171a20] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold tracking-[0.08em] text-white/50">
              MILLE INVENTORY
            </span>
          </div>
          <span className="rounded-md bg-white/6 px-2 py-1 text-[10px] text-white/40">
            Semua Lokasi · Live
          </span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Dashboard Stok Real-Time
                </div>
                <div className="mt-1 font-display text-sm font-bold text-slate-900">
                  Persediaan Aktif
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
                1.284 SKU
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-100">
              <div className="grid grid-cols-[1.3fr_.6fr_.5fr] bg-slate-50 px-3 py-2 text-[8px] font-bold uppercase tracking-wide text-slate-400">
                <span>Material</span>
                <span>Stok</span>
                <span>Status</span>
              </div>
              {stockRows.map((row) => (
                <div
                  key={row.item}
                  className="grid grid-cols-[1.3fr_.6fr_.5fr] items-center border-t border-slate-100 px-3 py-2.5"
                >
                  <div>
                    <div className="text-[9px] font-semibold text-slate-700">
                      {row.item}
                    </div>
                    <div className="text-[7px] text-slate-400">
                      {row.location}
                    </div>
                  </div>
                  <span className="text-[9px] font-semibold text-slate-600">
                    {row.stock}
                  </span>
                  <span
                    className={`text-[8px] font-bold ${
                      row.status === "Aman"
                        ? "text-emerald-500"
                        : row.status === "Menipis"
                          ? "text-amber-500"
                          : "text-rose-500"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-white/35">
                Nilai Inventaris
              </div>
              <div className="mt-2 font-display text-xl font-extrabold">
                Rp 287.4jt
              </div>
              <div className="mt-1 text-[9px] font-semibold text-emerald-400">
                +6.8% bulan ini
              </div>
              <div className="mt-4 flex h-8 items-end gap-1">
                {[42, 56, 48, 70, 62, 82, 74, 90].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-sm bg-brand/70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white p-3">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-rose-50 text-rose-500">
                  <Icon name="alert" className="size-3.5" />
                </span>
                <span className="text-[9px] font-bold text-slate-800">
                  Stok Kritis
                </span>
                <span className="ml-auto rounded-full bg-rose-50 px-1.5 py-0.5 text-[8px] font-bold text-rose-500">
                  3
                </span>
              </div>
              {[
                ["Sirup Vanilla", "3 botol"],
                ["Cup 12oz", "24 pcs"],
                ["Gula Aren", "2.4 kg"],
              ].map(([item, quantity]) => (
                <div
                  key={item}
                  className="mb-2 flex items-center justify-between rounded-lg bg-slate-50 px-2 py-2"
                >
                  <span className="text-[8px] font-medium text-slate-600">
                    {item}
                  </span>
                  <span className="text-[8px] font-bold text-rose-500">
                    {quantity}
                  </span>
                </div>
              ))}
              <div className="mt-2 rounded-lg bg-brand py-2 text-center text-[8px] font-bold text-white">
                Buat Purchase Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const problems = [
  {
    icon: "variance" as IconName,
    title: "Selisih Stok & Material Hilang",
    copy: "Pencatatan persediaan secara manual menyulitkan pelacakan material keluar-masuk, memicu potensi selisih dan kebocoran stok.",
  },
  {
    icon: "price" as IconName,
    title: "Fluktuasi Harga Bahan Baku",
    copy: "Perubahan harga beli dari pemasok yang tidak terpantau membuat perhitungan HPP menjadi tidak akurat dan menekan margin laba.",
  },
  {
    icon: "alert" as IconName,
    title: "Keterlambatan Pengadaan Barang",
    copy: "Tidak adanya peringatan batas minimum persediaan menyebabkan bahan baku habis secara mendadak di tengah operasional.",
  },
  {
    icon: "warehouse" as IconName,
    title: "Koordinasi Antar Gudang & Cabang",
    copy: "Pengiriman dan transfer bahan antar gudang atau cabang rawan miskomunikasi tanpa adanya pencatatan surat jalan digital.",
  },
];

const features = [
  {
    icon: "inventory" as IconName,
    title: "Pengelolaan Inventaris",
    copy: "Pantau ketersediaan persediaan bahan baku dan barang jadi secara real-time di seluruh lokasi bisnis.",
    visual: "inventory",
  },
  {
    icon: "supplier" as IconName,
    title: "Supplier & Pembelian",
    copy: "Kelola data pemasok, terbitkan Purchase Order (PO) secara sistematis, dan catat penerimaan barang tanpa selisih.",
    visual: "supplier",
  },
  {
    icon: "production" as IconName,
    title: "Gudang & Produksi",
    copy: "Atur alur konversi bahan baku menjadi produk jadi melalui pencatatan resep standar (BOM) dan pelacakan hasil produksi.",
    visual: "production",
  },
  {
    icon: "transfer" as IconName,
    title: "Transfer Stok",
    copy: "Koordinasikan pengiriman persediaan antar gudang atau antar cabang secara transparan dengan dokumen pengiriman digital.",
    visual: "transfer",
  },
  {
    icon: "opname" as IconName,
    title: "Stock Opname",
    copy: "Sederhanakan proses audit fisik persediaan dengan sistem pemindaian barcode serta rekapitulasi selisih otomatis.",
    visual: "opname",
  },
  {
    icon: "cogs" as IconName,
    title: "Perhitungan HPP",
    copy: "Hitung Harga Pokok Penjualan (HPP) secara presisi menggunakan metode COGS terintegrasi untuk menjaga tingkat profitabilitas.",
    visual: "cogs",
  },
];

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "inventory") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Matriks Inventaris
          </span>
          <span className="rounded bg-brand-subtle px-2 py-1 text-[7px] font-bold text-brand">
            Real-time
          </span>
        </div>
        <div className="grid grid-cols-[1.3fr_.5fr_.5fr_.4fr] rounded-t-lg bg-slate-100 px-2 py-2 text-[7px] font-bold text-slate-400">
          <span>Material</span>
          <span>Unit</span>
          <span>Stok</span>
          <span>Min.</span>
        </div>
        {[
          ["Tepung Protein", "kg", "68", "20", "bg-emerald-400"],
          ["Minyak Goreng", "L", "24", "12", "bg-emerald-400"],
          ["Susu Fresh", "L", "11", "15", "bg-rose-400"],
          ["Cup 12oz", "pcs", "86", "100", "bg-amber-400"],
        ].map(([item, unit, stock, minimum, color]) => (
          <div
            key={item}
            className="grid grid-cols-[1.3fr_.5fr_.5fr_.4fr] items-center border-x border-b border-slate-100 px-2 py-2 text-[8px] text-slate-600"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <i className={`size-1.5 rounded-full ${color}`} />
              {item}
            </span>
            <span>{unit}</span>
            <b>{stock}</b>
            <span>{minimum}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "supplier") {
    return (
      <div className="grid h-full grid-cols-[1.2fr_.8fr] gap-2 bg-slate-100 p-3">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="mb-3 flex justify-between">
            <span className="text-[8px] font-bold text-slate-700">
              PURCHASE ORDER
            </span>
            <span className="text-[8px] font-bold text-brand">PO-0248</span>
          </div>
          {[
            ["Supplier", "PT Bahan Nusantara"],
            ["Tanggal", "24 Mei 2026"],
            ["Total", "Rp18.420.000"],
          ].map(([label, value]) => (
            <div key={label} className="mb-2">
              <div className="text-[7px] text-slate-400">{label}</div>
              <div className="mt-0.5 text-[8px] font-semibold text-slate-600">
                {value}
              </div>
            </div>
          ))}
          <div className="mt-3 rounded bg-brand py-1.5 text-center text-[7px] font-bold text-white">
            Terbitkan PO
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            ["Dibuat", "Selesai"],
            ["Dikirim", "Selesai"],
            ["Diterima", "Verifikasi"],
          ].map(([label, status], index) => (
            <div
              key={label}
              className="flex-1 rounded-lg bg-white p-2 shadow-sm"
            >
              <span
                className={`mb-1.5 block size-2 rounded-full ${
                  index < 2 ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              <div className="text-[7px] font-bold text-slate-600">{label}</div>
              <div className="text-[6px] text-slate-400">{status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "production") {
    return (
      <div className="relative h-full overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1764795850513-fa8a469a4600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBpbnZlbnRvcnklMjB3b3JrZXIlMjB0YWJsZXQlMjBzaGVsdmVzJTIwbG9naXN0aWNzfGVufDF8fHx8MTc5MTM0NDA1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tim gudang memeriksa persediaan menggunakan tablet"
          loading="lazy"
          className="h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-slate-950/5" />
        <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-slate-950/75 p-3 text-white backdrop-blur">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[8px] font-bold">BOM · Kopi Susu 1L</span>
            <span className="rounded bg-brand px-2 py-1 text-[7px] font-bold">
              Produksi 24
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[7px] text-white/60">
            <span>
              Biji Kopi
              <br />
              <b className="text-white">−2.4 kg</b>
            </span>
            <span>
              Susu
              <br />
              <b className="text-white">−18 L</b>
            </span>
            <span>
              Gula Aren
              <br />
              <b className="text-white">−4.8 kg</b>
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "transfer") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Surat Jalan Digital
          </span>
          <span className="text-[8px] font-bold text-brand">SJ-1892</span>
        </div>
        <div className="mb-4 flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
          <div>
            <div className="text-[7px] text-slate-400">Dari</div>
            <div className="text-[8px] font-bold text-slate-700">
              Gudang Pusat
            </div>
          </div>
          <span className="text-brand">→</span>
          <div className="text-right">
            <div className="text-[7px] text-slate-400">Tujuan</div>
            <div className="text-[8px] font-bold text-slate-700">
              Outlet Kemang
            </div>
          </div>
        </div>
        <div className="relative flex justify-between px-2">
          <div className="absolute left-6 right-6 top-2 h-px bg-slate-200" />
          {[
            ["Pending", true],
            ["In-Transit", true],
            ["Received", false],
          ].map(([label, active]) => (
            <div key={label as string} className="relative text-center">
              <span
                className={`mx-auto mb-2 block size-4 rounded-full border-4 border-slate-50 ${
                  active ? "bg-brand" : "bg-slate-300"
                }`}
              />
              <span className="text-[7px] font-semibold text-slate-500">
                {label as string}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-2 text-[7px] text-slate-500">
          12 item · 84 unit · Diperbarui 10 menit lalu
        </div>
      </div>
    );
  }

  if (kind === "opname") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Stock Opname · Mei
          </span>
          <span className="rounded bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
            78% selesai
          </span>
        </div>
        <div className="grid grid-cols-[1.3fr_.5fr_.5fr_.45fr] rounded-t-lg bg-slate-100 px-2 py-2 text-[7px] font-bold text-slate-400">
          <span>Item</span>
          <span>Sistem</span>
          <span>Fisik</span>
          <span>Selisih</span>
        </div>
        {[
          ["Biji Kopi", "42", "42", "0"],
          ["Susu Fresh", "18", "17", "−1"],
          ["Cup 12oz", "86", "82", "−4"],
          ["Sirup Vanilla", "3", "3", "0"],
        ].map(([item, system, physical, difference]) => (
          <div
            key={item}
            className="grid grid-cols-[1.3fr_.5fr_.5fr_.45fr] border-x border-b border-slate-100 px-2 py-2 text-[8px] text-slate-600"
          >
            <b>{item}</b>
            <span>{system}</span>
            <span>{physical}</span>
            <span
              className={
                difference === "0"
                  ? "text-emerald-500"
                  : "font-bold text-rose-500"
              }
            >
              {difference}
            </span>
          </div>
        ))}
        <div className="mt-3 flex gap-2">
          <div className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-[7px] font-bold text-slate-500">
            Scan Barcode
          </div>
          <div className="flex-1 rounded-lg bg-brand py-2 text-center text-[7px] font-bold text-white">
            Rekonsiliasi
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-[.8fr_1.2fr] gap-3 bg-slate-50 p-3">
      <div className="rounded-lg bg-[#171a20] p-3 text-white">
        <div className="text-[7px] font-bold uppercase tracking-wider text-white/40">
          HPP Produk
        </div>
        <div className="mt-2 text-[10px] font-bold">Kopi Susu Mille</div>
        <div className="mt-1 font-display text-xl font-extrabold">
          Rp 14.280
        </div>
        <div className="mt-1 text-[7px] font-semibold text-emerald-400">
          Margin 62.4%
        </div>
        <div className="mt-4 flex h-12 items-end gap-1">
          {[38, 52, 44, 68, 58, 76, 64].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-brand/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <div className="mb-3 text-[8px] font-bold text-slate-700">
          Breakdown HPP
        </div>
        {[
          ["Bahan baku", "Rp9.400", "66%"],
          ["Kemasan", "Rp1.880", "13%"],
          ["Tenaga kerja", "Rp2.100", "15%"],
          ["Overhead", "Rp900", "6%"],
        ].map(([label, value, width]) => (
          <div key={label} className="mb-2">
            <div className="mb-1 flex justify-between text-[7px]">
              <span className="text-slate-500">{label}</span>
              <b className="text-slate-700">{value}</b>
            </div>
            <div className="h-1.5 rounded bg-slate-100">
              <div className="h-1.5 rounded bg-brand" style={{ width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-24">
      <div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/8 blur-3xl" />
      <div className="container-page relative">
        <Breadcrumb />
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-20">
          <div className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              PRODUK MILLE
            </div>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,4vw,3.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">
              Kontrol Persediaan dan Rantai Pasokan Bisnis Anda secara Presisi
              dari Pengadaan hingga Penggunaan.
            </h1>
            <p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">
              Lebih dari sekadar mengelola stok, Mille menghubungkan alur
              pengadaan barang, manajemen persediaan, proses produksi, hingga
              perhitungan HPP secara otomatis dalam satu sistem terpadu.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                to="https://partner.millehub.com/register-user"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Coba Gratis
              </Link>
              <Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg">
                Jadwalkan Demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                "✓ Gratis 14 hari",
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
          <InventoryDashboard />
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">
            Pengelolaan Persediaan Tanpa Sistem Memiliki Risiko Tinggi.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ketidaksesuaian data stok dan biaya bahan baku berpotensi memicu
            kerugian finansial serta gangguan kontinuitas operasional bisnis.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className={`card reveal reveal-delay-${index + 1} relative p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border/55">
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

function FeaturesSection() {
  return (
    <section className="section-spacing bg-[#F8FAFC]">
      <div className="container-page">
        <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div>
            <p className="type-eyebrow mb-4">
              FITUR UNTUK INVENTARIS & RANTAI PASOKAN
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
              Semua yang Dibutuhkan untuk Mengontrol Persediaan dalam Satu
              Platform.
            </h2>
          </div>
          <p className="pb-1 text-base leading-relaxed text-muted-foreground">
            Mille menyatukan seluruh mata rantai pasokan — dari pembelian ke
            supplier, manajemen gudang, alur produksi, hingga audit persediaan —
            secara efisien dan terstruktur.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group reveal reveal-delay-${(index % 3) + 1} flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)]`}
            >
              <div className="mb-5 flex items-start gap-3">
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
              <div className="mt-auto h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105">
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

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-center text-white lg:py-28">
      <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="container-page relative">
        <h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
          Siap Mewujudkan Pengelolaan Persediaan yang Lebih Akurat dan Bebas
          Selisih?
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://partner.millehub.com/register-user"
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
      </div>
    </section>
  );
}

export default function ProdukInventarisRantaiPasokan() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <ClosingCta />
    </>
  );
}
