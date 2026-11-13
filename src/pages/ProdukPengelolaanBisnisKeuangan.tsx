import { type ReactNode } from "react";
import { Link } from "react-router";

type IconName =
  | "report"
  | "cash"
  | "menu"
  | "accounting"
  | "backoffice"
  | "outlet"
  | "performance"
  | "insight"
  | "budget"
  | "profit";

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    report: (
      <>
        <path d="M5 3h11l3 3v15H5V3Z" />
        <path d="M15 3v5h4M8 12h8M8 16h6" />
      </>
    ),
    cash: (
      <>
        <path d="M3 6h18v12H3z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M7 9H5v2M17 15h2v-2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 5h16M4 12h16M4 19h10" />
        <path d="M18 16v6M15 19h6" />
      </>
    ),
    accounting: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 19h8" />
      </>
    ),
    backoffice: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 9v12M6 6h.01M12 13h5M12 17h3" />
      </>
    ),
    outlet: (
      <>
        <path d="M3 10h18l-2-7H5l-2 7Z" />
        <path d="M5 10v11h14V10M9 21v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      </>
    ),
    performance: (
      <>
        <path d="M4 18a8 8 0 1 1 16 0" />
        <path d="m12 14 4-5M7 18h10" />
      </>
    ),
    insight: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 6-4 6 6 5-5" />
      </>
    ),
    budget: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3M8 8h.01" />
      </>
    ),
    profit: (
      <>
        <path d="M4 20V4M4 20h17" />
        <path d="m7 15 4-5 3 2 6-8" />
        <path d="M16 4h4v4" />
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
        Pengelolaan Bisnis & Keuangan
      </span>
    </nav>
  );
}

function BackofficeDashboard() {
  const outlets = [
    ["Kemang", "Rp38.2jt", "+16%", 88],
    ["Senayan", "Rp31.8jt", "+11%", 76],
    ["Kelapa Gading", "Rp27.4jt", "+8%", 68],
  ];

  return (
    <div className="relative mx-auto max-w-[600px]">
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#171a20] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold tracking-[0.08em] text-white/50">
              MILLE BACKOFFICE
            </span>
          </div>
          <span className="rounded-md bg-white/6 px-2 py-1 text-[10px] text-white/40">
            5 Outlet · Live
          </span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Consolidated Revenue
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                  Rp 142.5jt
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
                +18% vs bulan lalu
              </span>
            </div>
            <svg
              className="h-20 w-full"
              viewBox="0 0 300 84"
              fill="none"
              aria-label="Grafik pendapatan terkonsolidasi"
            >
              <path
                d="M3 72 38 60l32 8 35-33 34 12 33-28 34 12 38-21 53 7"
                stroke="#009AE5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 72 38 60l32 8 35-33 34 12 33-28 34 12 38-21 53 7v67H3Z"
                fill="url(#revenue-area)"
                opacity=".12"
              />
              <defs>
                <linearGradient
                  id="revenue-area"
                  x1="150"
                  y1="8"
                  x2="150"
                  y2="84"
                >
                  <stop stopColor="#009AE5" />
                  <stop offset="1" stopColor="#009AE5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {outlets.map(([name, value, growth, progress]) => (
                <div
                  key={name as string}
                  className="rounded-lg bg-slate-50 p-2"
                >
                  <div className="text-[7px] text-slate-400">
                    {name as string}
                  </div>
                  <div className="mt-1 text-[9px] font-bold text-slate-700">
                    {value as string}
                  </div>
                  <div className="mt-1 h-1 rounded bg-slate-200">
                    <div
                      className="h-1 rounded bg-brand"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-1 text-[7px] font-semibold text-emerald-500">
                    {growth as string}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-white/35">
                P&L Summary
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["Pendapatan", "Rp142.5jt", "text-white"],
                  ["HPP", "− Rp51.8jt", "text-amber-400"],
                  ["Beban", "− Rp34.2jt", "text-rose-400"],
                ].map(([label, value, color]) => (
                  <div key={label} className="flex justify-between text-[8px]">
                    <span className="text-white/45">{label}</span>
                    <b className={color}>{value}</b>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-[9px]">
                <span className="font-bold">Laba Bersih</span>
                <b className="text-emerald-400">Rp56.5jt</b>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white p-3">
              <div className="mb-3 flex justify-between">
                <span className="text-[9px] font-bold text-slate-800">
                  Status Outlet
                </span>
                <span className="text-[8px] text-slate-400">Hari ini</span>
              </div>
              {[
                ["Kemang", "Normal", "bg-emerald-400"],
                ["Senayan", "Jam sibuk", "bg-amber-400"],
                ["Kelapa Gading", "Normal", "bg-emerald-400"],
              ].map(([name, status, color]) => (
                <div
                  key={name}
                  className="mb-2 flex items-center rounded-lg bg-slate-50 px-2 py-2"
                >
                  <span className={`mr-2 size-1.5 rounded-full ${color}`} />
                  <span className="text-[8px] font-semibold text-slate-600">
                    {name}
                  </span>
                  <span className="ml-auto text-[7px] text-slate-400">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const problems = [
  {
    icon: "report" as IconName,
    title: "Laporan Terpisah-pisah",
    copy: "Data konsolidasi antar cabang harus direkap secara manual, membuang waktu dan berisiko terjadi kesalahan konsolidasi data.",
  },
  {
    icon: "cash" as IconName,
    title: "Kurang Visibilitas Arus Kas",
    copy: "Pergerakan arus kas dan pengeluaran operasional di setiap cabang sulit dipantau secara langsung dan transparan.",
  },
  {
    icon: "menu" as IconName,
    title: "Lambat Memperbarui Menu & Harga",
    copy: "Perubahan harga atau penambahan menu baru harus diatur satu per satu di setiap cabang tanpa adanya sinkronisasi terpusat.",
  },
  {
    icon: "accounting" as IconName,
    title: "Pembukuan & Akuntansi Manual",
    copy: "Pencatatan transaksi kasir harus diinput ulang secara manual ke sistem akuntansi, memicu selisih pembukuan di akhir periode.",
  },
];

const features = [
  {
    icon: "backoffice" as IconName,
    title: "Centralized Backoffice",
    copy: "Kelola seluruh konfigurasi sistem, hak akses pengguna, dan kebijakan operasional seluruh outlet dari satu antarmuka terpusat.",
    visual: "backoffice",
  },
  {
    icon: "outlet" as IconName,
    title: "Pengelolaan Toko Cabang",
    copy: "Kontrol dan bandingkan performa operasional tiap cabang secara terpisah maupun terkonsolidasi dalam satu dashboard.",
    visual: "branches",
  },
  {
    icon: "menu" as IconName,
    title: "Pengaturan Menu & Harga",
    copy: "Pembaruan katalog menu, variasi harga per wilayah, serta program promosi secara serentak ke seluruh outlet dalam hitungan detik.",
    visual: "pricing",
  },
  {
    icon: "performance" as IconName,
    title: "Monitoring Performa Outlet",
    copy: "Pantau indikator kinerja utama (KPI) operasional setiap cabang secara real-time untuk penanganan kendala yang lebih cepat.",
    visual: "performance",
  },
  {
    icon: "insight" as IconName,
    title: "Laporan & Insight Bisnis",
    copy: "Akses laporan analisis penjualan, produk terlaris, jam terramai, hingga tren perilaku pelanggan secara komprehensif.",
    visual: "insight",
  },
  {
    icon: "accounting" as IconName,
    title: "Sistem Akuntansi",
    copy: "Sistem akuntansi otomatis yang terhubung langsung dengan seluruh transaksi kasir, pembelian, dan pengeluaran operasional.",
    visual: "accounting",
  },
  {
    icon: "budget" as IconName,
    title: "Budgeting",
    copy: "Tetapkan dan pantau batasan anggaran operasional per departemen atau per cabang guna mengendalikan potensi pembengkakan biaya.",
    visual: "budget",
  },
  {
    icon: "profit" as IconName,
    title: "HPP & Profit",
    copy: "Analisis margin keuntungan bersih dan persentase HPP per menu secara akurat berdasarkan pembaruan harga bahan baku.",
    visual: "profit",
  },
  {
    icon: "report" as IconName,
    title: "Laporan Keuangan",
    copy: "Hasilkan Laporan Laba Rugi (P&L), Neraca (Balance Sheet), dan Laporan Perubahan Modal secara otomatis sesuai standar akuntansi.",
    visual: "reports",
  },
  {
    icon: "cash" as IconName,
    title: "Arus Kas",
    copy: "Pantau arus kas masuk dan keluar (Cash Flow) secara detail untuk menjaga likuiditas dan stabilitas keuangan bisnis.",
    visual: "cashflow",
  },
];

function MiniBars({
  values,
  negative = false,
}: {
  values: number[];
  negative?: boolean;
}) {
  return (
    <div className="flex h-16 items-end gap-1.5">
      {values.map((height, index) => (
        <span
          key={index}
          className={`flex-1 rounded-t ${negative && index % 3 === 1 ? "bg-rose-300" : "bg-brand/70"}`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "backoffice") {
    return (
      <div className="grid h-full grid-cols-[.65fr_1.35fr] bg-slate-100">
        <div className="bg-[#171a20] p-3 text-white">
          <div className="mb-4 text-[8px] font-bold text-white/45">
            CONTROL CENTER
          </div>
          {["Dashboard", "Outlet", "Pengguna", "Kebijakan"].map(
            (item, index) => (
              <div
                key={item}
                className={`mb-2 rounded px-2 py-2 text-[7px] font-semibold ${index === 0 ? "bg-brand text-white" : "text-white/45"}`}
              >
                {item}
              </div>
            ),
          )}
        </div>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Outlet Aktif", "5"],
              ["Pengguna", "48"],
              ["Transaksi", "12.842"],
              ["Pendapatan", "142.5jt"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white p-2 shadow-sm">
                <div className="text-[7px] text-slate-400">{label}</div>
                <div className="mt-1 font-display text-[11px] font-bold text-slate-700">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-lg bg-white p-3 shadow-sm">
            <MiniBars values={[42, 58, 50, 76, 68, 88, 80]} />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "branches") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Komparasi Cabang
          </span>
          <span className="text-[7px] text-slate-400">Bulan berjalan</span>
        </div>
        <div className="grid grid-cols-[1fr_.7fr_.55fr_.55fr] rounded-t bg-slate-100 px-2 py-2 text-[7px] font-bold text-slate-400">
          <span>Outlet</span>
          <span>Sales</span>
          <span>Trx</span>
          <span>Profit</span>
        </div>
        {[
          ["Kemang", "38.2jt", "1.248", "31%"],
          ["Senayan", "31.8jt", "986", "28%"],
          ["Gading", "27.4jt", "842", "26%"],
          ["Pusat", "45.1jt", "1.534", "34%"],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-[1fr_.7fr_.55fr_.55fr] border-x border-b border-slate-100 px-2 py-2.5 text-[8px] text-slate-600"
          >
            <b>{row[0]}</b>
            <span>{row[1]}</span>
            <span>{row[2]}</span>
            <span className="font-bold text-emerald-500">{row[3]}</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "pricing") {
    return (
      <div className="grid h-full grid-cols-[1.15fr_.85fr] gap-2 bg-slate-100 p-3">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="mb-3 text-[8px] font-bold text-slate-700">
            Menu & Pricing Tier
          </div>
          {[
            ["Kopi Susu", "Rp28.000"],
            ["Matcha Latte", "Rp32.000"],
            ["Croissant", "Rp30.000"],
          ].map(([name, price]) => (
            <div
              key={name}
              className="mb-2 flex justify-between rounded bg-slate-50 px-2 py-2 text-[7px]"
            >
              <b className="text-slate-600">{name}</b>
              <span className="text-slate-500">{price}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-lg bg-white p-3 shadow-sm">
            <div className="text-[7px] text-slate-400">Wilayah</div>
            <div className="mt-1 text-[8px] font-bold text-slate-700">
              Jabodetabek
            </div>
            <div className="mt-2 rounded bg-brand-subtle p-1.5 text-center text-[7px] font-bold text-brand">
              5 Outlet dipilih
            </div>
          </div>
          <div className="mt-auto rounded-lg bg-brand px-2 py-3 text-center text-[7px] font-bold text-white">
            Publish to All Outlets
          </div>
        </div>
      </div>
    );
  }

  if (kind === "performance") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="mb-3 flex justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Live Outlet Performance
          </span>
          <span className="flex items-center gap-1 text-[7px] text-emerald-500">
            <i className="size-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Kecepatan", "92%", "border-emerald-400"],
            ["Jam Sibuk", "78%", "border-amber-400"],
            ["Omzet", "86%", "border-brand"],
          ].map(([label, value, color]) => (
            <div
              key={label}
              className="rounded-lg bg-white p-2 text-center shadow-sm"
            >
              <div
                className={`mx-auto grid size-12 place-items-center rounded-full border-4 ${color} text-[10px] font-bold text-slate-700`}
              >
                {value}
              </div>
              <div className="mt-2 text-[7px] font-semibold text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Kemang", "Normal"],
            ["Senayan", "Padat"],
            ["Gading", "Normal"],
          ].map(([name, status], index) => (
            <div
              key={name}
              className="rounded bg-white p-2 text-[7px] shadow-sm"
            >
              <b className="text-slate-600">{name}</b>
              <div
                className={index === 1 ? "text-amber-500" : "text-emerald-500"}
              >
                {status}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "insight") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex gap-1.5">
          {["30 Hari", "Produk", "QRIS"].map((filter, index) => (
            <span
              key={filter}
              className={`rounded px-2 py-1 text-[7px] font-semibold ${index === 0 ? "bg-brand text-white" : "bg-slate-100 text-slate-500"}`}
            >
              {filter}
            </span>
          ))}
        </div>
        <svg
          className="h-24 w-full"
          viewBox="0 0 300 100"
          fill="none"
          aria-label="Tren penjualan"
        >
          <path
            d="M4 82 38 64l30 8 34-38 32 16 35-31 32 18 40-26 55 10"
            stroke="#009AE5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M4 82 38 64l30 8 34-38 32 16 35-31 32 18 40-26 55 10"
            stroke="#009AE5"
            strokeWidth="9"
            strokeOpacity=".08"
          />
        </svg>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Terlaris", "Kopi Susu"],
            ["Jam Ramai", "12–14"],
            ["AOV", "Rp68k"],
          ].map(([label, value]) => (
            <div key={label} className="rounded bg-slate-50 p-2">
              <div className="text-[7px] text-slate-400">{label}</div>
              <div className="mt-1 text-[8px] font-bold text-slate-700">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "accounting") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="mb-3 flex justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Jurnal Otomatis
          </span>
          <span className="rounded bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
            Tersinkron
          </span>
        </div>
        {[
          ["Penjualan POS #8421", "Kas", "Pendapatan", "8.420.000"],
          ["Pembelian PO-0248", "Persediaan", "Utang", "3.180.000"],
          ["Biaya Operasional", "Beban", "Kas", "980.000"],
        ].map(([title, debit, credit, amount]) => (
          <div key={title} className="mb-2 rounded-lg bg-white p-2.5 shadow-sm">
            <div className="flex justify-between">
              <b className="text-[7px] text-slate-600">{title}</b>
              <span className="text-[7px] font-bold text-slate-700">
                {amount}
              </span>
            </div>
            <div className="mt-1 text-[6px] text-slate-400">
              Debit: {debit} · Kredit: {credit}
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-dashed border-brand/30 py-2 text-center text-[7px] font-semibold text-brand">
          + Dibentuk otomatis dari transaksi
        </div>
      </div>
    );
  }

  if (kind === "budget") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Budget vs Actual Spend
          </span>
          <span className="text-[7px] text-slate-400">Mei 2026</span>
        </div>
        {[
          ["Operasional", "68%", "Rp68jt / 100jt", "bg-brand"],
          ["Marketing", "84%", "Rp42jt / 50jt", "bg-amber-400"],
          ["SDM", "56%", "Rp28jt / 50jt", "bg-emerald-400"],
          ["Maintenance", "92%", "Rp18.4jt / 20jt", "bg-rose-400"],
        ].map(([label, width, value, color]) => (
          <div key={label} className="mb-3">
            <div className="mb-1.5 flex justify-between text-[7px]">
              <b className="text-slate-600">{label}</b>
              <span className="text-slate-400">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className={`h-2 rounded-full ${color}`} style={{ width }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "profit") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="mb-3 text-[9px] font-bold text-slate-700">
          Gross Profit per Produk
        </div>
        {[
          ["Kopi Susu", "Rp28k", "Rp10.5k", "62.5%", "text-emerald-500"],
          ["Matcha Latte", "Rp32k", "Rp14.8k", "53.8%", "text-emerald-500"],
          ["Croissant", "Rp30k", "Rp17.2k", "42.7%", "text-amber-500"],
          ["Pasta Truffle", "Rp78k", "Rp49.5k", "36.5%", "text-rose-500"],
        ].map(([name, price, cogs, margin, color]) => (
          <div
            key={name}
            className="mb-2 grid grid-cols-[1.2fr_.55fr_.55fr_.45fr] items-center rounded-lg bg-white p-2 shadow-sm"
          >
            <b className="text-[7px] text-slate-600">{name}</b>
            <span className="text-[7px] text-slate-400">{price}</span>
            <span className="text-[7px] text-slate-400">{cogs}</span>
            <span className={`text-right text-[7px] font-bold ${color}`}>
              {margin}
            </span>
          </div>
        ))}
        <div className="grid grid-cols-[1.2fr_.55fr_.55fr_.45fr] px-2 text-[6px] uppercase text-slate-400">
          <span>Produk</span>
          <span>Harga</span>
          <span>HPP</span>
          <span className="text-right">Margin</span>
        </div>
      </div>
    );
  }

  if (kind === "reports") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
          <div>
            <div className="text-[9px] font-bold text-slate-700">
              P&L Statement
            </div>
            <div className="text-[6px] text-slate-400">Periode Mei 2026</div>
          </div>
          <span className="rounded bg-brand-subtle px-2 py-1 text-[7px] font-bold text-brand">
            Otomatis
          </span>
        </div>
        {[
          ["Pendapatan Bersih", "142.500.000", false],
          ["Harga Pokok Penjualan", "(51.800.000)", true],
          ["Laba Kotor", "90.700.000", false],
          ["Beban Operasional", "(34.200.000)", true],
          ["Laba Bersih", "56.500.000", false],
        ].map(([label, value, expense], index) => (
          <div
            key={label as string}
            className={`flex justify-between py-2 text-[8px] ${index === 2 || index === 4 ? "border-t border-slate-200 font-bold text-slate-800" : "text-slate-500"}`}
          >
            <span>{label as string}</span>
            <span className={expense ? "text-rose-500" : ""}>
              {value as string}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full bg-[#171a20] p-3 text-white">
      <div className="mb-3 flex justify-between">
        <span className="text-[9px] font-bold">Cash Flow Waterfall</span>
        <span className="text-[7px] text-white/35">Mei 2026</span>
      </div>
      <div className="flex h-28 items-end gap-2 border-b border-white/10 px-1">
        {[
          ["Awal", 42, "bg-slate-400"],
          ["Sales", 78, "bg-emerald-400"],
          ["Beli", 32, "bg-rose-400"],
          ["Opex", 44, "bg-rose-400"],
          ["Lain", 18, "bg-emerald-400"],
          ["Akhir", 58, "bg-brand"],
        ].map(([label, height, color]) => (
          <div
            key={label as string}
            className="flex flex-1 flex-col items-center justify-end"
          >
            <span className="mb-1 text-[6px] text-white/35">
              {label as string}
            </span>
            <span
              className={`w-full rounded-t ${color}`}
              style={{ height: `${height}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Kas Masuk", "184jt", "text-emerald-400"],
          ["Kas Keluar", "128jt", "text-rose-400"],
          ["Net Flow", "+56jt", "text-brand-light"],
        ].map(([label, value, color]) => (
          <div key={label} className="rounded bg-white/6 p-2">
            <div className="text-[6px] text-white/35">{label}</div>
            <div className={`mt-1 text-[8px] font-bold ${color}`}>{value}</div>
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
              Kendalikan Seluruh Operasional dan Keuangan Bisnis Anda dari Satu
              Pusat Control Backoffice.
            </h1>
            <p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">
              Satu pusat kendali terintegrasi untuk mengatur, memantau, dan
              menganalisis performa berbagai outlet. Mille menyatukan manajemen
              cabang, pengaturan menu, laporan bisnis, hingga pembukuan keuangan
              dalam satu platform.
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
          <BackofficeDashboard />
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
            Mengelola Banyak Cabang dan Keuangan Bisnis Penuh Tantangan.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Tanpa pusat kontrol terpadu, pemantauan performa antar cabang serta
            pembukuan keuangan rentan terhadap ketidakakuratan dan keterlambatan
            keputusan.
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
              FITUR PENGELOLAAN BISNIS & KEUANGAN
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
              Semua yang Dibutuhkan untuk Mengendalikan Bisnis dalam Satu
              Platform.
            </h2>
          </div>
          <p className="pb-1 text-base leading-relaxed text-muted-foreground">
            Mille menyatukan seluruh fungsi manajemen dan keuangan — dari
            pengaturan multi-cabang, laporan eksekutif, hingga akuntansi
            otomatis — tanpa perlu aplikasi terpisah.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group reveal reveal-delay-${(index % 2) + 1} grid min-h-[350px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)] lg:grid-cols-[.88fr_1.12fr] lg:gap-5`}
            >
              <div className="mb-5 flex items-start gap-3 lg:mb-0">
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
              <div className="min-h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
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
          Siap Mewujudkan Pengelolaan Bisnis dan Keuangan yang Terkontrol dan
          Transparan?
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
      </div>
    </section>
  );
}

export default function ProdukPengelolaanBisnisKeuangan() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <ClosingCta />
    </>
  );
}
