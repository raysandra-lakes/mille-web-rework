import { type ReactNode } from "react";
import { Link } from "react-router";

type IconName =
  | "channels"
  | "kitchen"
  | "tables"
  | "analytics"
  | "pos"
  | "qr"
  | "kiosk"
  | "queue"
  | "calendar"
  | "waiting"
  | "kds"
  | "floor"
  | "integration";

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    channels: (
      <>
        <path d="M4 5h16M4 12h10M4 19h7" />
        <circle cx="18" cy="16" r="3" />
        <path d="M18 14.5v3M16.5 16h3" />
      </>
    ),
    kitchen: (
      <>
        <path d="M5 4v16M9 4v7a2 2 0 0 1-4 0V4M16 4v16M16 4c3 2 4 5 4 8h-4" />
      </>
    ),
    tables: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 4v16M3 10h18M14 10v10" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 6-4 6 6 5-5" />
      </>
    ),
    pos: (
      <>
        <rect x="3" y="3" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 16v5M7 8h4M7 11h8" />
      </>
    ),
    qr: (
      <>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2M20 14v3M14 18h3v2M20 20h.01" />
      </>
    ),
    kiosk: (
      <>
        <rect x="6" y="2" width="12" height="17" rx="2" />
        <path d="M9 6h6M9 10h6M10 22h4M12 19v3" />
      </>
    ),
    queue: (
      <>
        <path d="M5 6h14M5 12h10M5 18h7" />
        <circle cx="19" cy="17" r="3" />
        <path d="M19 15.5V17l1 1" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h2M14 14h2M8 18h2" />
      </>
    ),
    waiting: (
      <>
        <path d="M5 5h14M5 12h10M5 19h7" />
        <path d="M18 13v6M15 16h6" />
      </>
    ),
    kds: (
      <>
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <path d="M7 22h10M12 18v4M6 8h4M6 12h8" />
      </>
    ),
    floor: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="2" />
        <rect x="13" y="6" width="5" height="4" rx="1" />
        <rect x="6" y="14" width="5" height="4" rx="1" />
        <circle cx="16" cy="16" r="2" />
      </>
    ),
    integration: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="m7 7 3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
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
        Operasional, Pemesanan, & Pembayaran
      </span>
    </nav>
  );
}

function HeroDashboard() {
  const tables = [
    ["M01", "Kosong", "bg-emerald-400"],
    ["M02", "Terisi", "bg-brand"],
    ["M03", "Reservasi", "bg-amber-400"],
    ["M04", "Terisi", "bg-brand"],
  ];

  return (
    <div className="relative mx-auto max-w-[580px]">
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#171a20] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold tracking-[0.08em] text-white/50">
              MILLE OPERATIONS
            </span>
          </div>
          <span className="rounded-md bg-white/6 px-2 py-1 text-[10px] text-white/40">
            Outlet Utama · Live
          </span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Point of Sale
                </div>
                <div className="mt-1 font-display text-sm font-bold text-slate-900">
                  Pesanan #M-2841
                </div>
              </div>
              <span className="rounded-full bg-brand-subtle px-2 py-1 text-[9px] font-bold text-brand">
                DINE IN
              </span>
            </div>
            <div className="space-y-2">
              {[
                ["Kopi Susu Mille", "2", "Rp56.000"],
                ["Croissant Butter", "1", "Rp32.000"],
                ["Pasta Truffle", "1", "Rp78.000"],
              ].map(([item, quantity, price]) => (
                <div
                  key={item}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg bg-slate-50 px-3 py-2"
                >
                  <span className="text-[11px] font-medium text-slate-700">
                    {item}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    ×{quantity}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700">
                    {price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-[11px] text-slate-400">
                Total pembayaran
              </span>
              <span className="font-display text-base font-extrabold text-slate-900">
                Rp166.000
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Split Bill", "QRIS", "Bayar"].map((label, index) => (
                <div
                  key={label}
                  className={`rounded-lg px-2 py-2 text-center text-[9px] font-bold ${index === 2 ? "bg-brand text-white" : "border border-slate-200 text-slate-500"}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-white/35">
                Penjualan Hari Ini
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold">
                Rp 8.4jt
              </div>
              <div className="mt-1 text-[10px] font-semibold text-emerald-400">
                +12% vs kemarin
              </div>
              <svg
                className="mt-4 h-9 w-full"
                viewBox="0 0 160 38"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 32 24 26l18 4 22-16 18 7 22-15 18 7 18-9 18 3"
                  stroke="#33AEED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 32 24 26l18 4 22-16 18 7 22-15 18 7 18-9 18 3v31H2Z"
                  fill="url(#sales-fill)"
                  opacity=".14"
                />
                <defs>
                  <linearGradient
                    id="sales-fill"
                    x1="80"
                    y1="4"
                    x2="80"
                    y2="38"
                  >
                    <stop stopColor="#33AEED" />
                    <stop offset="1" stopColor="#33AEED" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex-1 rounded-xl bg-white p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-800">
                  Status Meja
                </span>
                <span className="text-[9px] text-slate-400">12 meja</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {tables.map(([table, status, color]) => (
                  <div
                    key={table}
                    className="rounded-lg border border-slate-100 p-2"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`size-1.5 rounded-full ${color}`} />
                      <span className="text-[9px] font-bold text-slate-700">
                        {table}
                      </span>
                    </div>
                    <div className="mt-1 text-[8px] text-slate-400">
                      {status}
                    </div>
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

const problems = [
  {
    icon: "channels" as IconName,
    title: "Pesanan dari Banyak Kanal",
    copy: "Pemesanan dine-in, online order, dan delivery yang masuk bersamaan sering kali sulit dikoordinasikan secara manual.",
  },
  {
    icon: "kitchen" as IconName,
    title: "Koordinasi Dapur & Kasir",
    copy: "Miskomunikasi antara staf kasir dan tim dapur berisiko menyebabkan keterlambatan hingga kesalahan pembuatan pesanan.",
  },
  {
    icon: "tables" as IconName,
    title: "Manajemen Meja & Antrean",
    copy: "Pencatatan status meja, pencatatan reservasi, serta antrean secara manual berpotensi menimbulkan tumpang tindih (double booking).",
  },
  {
    icon: "analytics" as IconName,
    title: "Sulit Menentukan Kanal Efektif",
    copy: "Data penjualan terkumpul di berbagai perangkat tanpa analisis terpusat mengenai performa saluran pemesanan.",
  },
];

const features = [
  {
    icon: "pos" as IconName,
    title: "Point of Sale",
    copy: "Proses transaksi kasir yang responsif, fleksibel untuk berbagai metode pembayaran, dan terintegrasi langsung dengan pembaruan stok.",
    visual: "pos",
  },
  {
    icon: "qr" as IconName,
    title: "QR Order",
    copy: "Pelanggan dapat memindai kode QR untuk mengakses menu, melakukan pemesanan, dan menyelesaikan pembayaran mandiri dari meja.",
    visual: "qr",
  },
  {
    icon: "kiosk" as IconName,
    title: "Self Order Kiosk",
    copy: "Layar pemesanan mandiri intuitif untuk mengurai antrean kasir serta mengoptimalkan nilai transaksi melalui rekomendasi produk.",
    visual: "kiosk",
  },
  {
    icon: "queue" as IconName,
    title: "Order Queue",
    copy: "Sistem manajemen antrean terstruktur untuk memantau status pemrosesan hingga pemanggilan pesanan secara transparan.",
    visual: "queue",
  },
  {
    icon: "calendar" as IconName,
    title: "Reservasi",
    copy: "Kelola pemesanan tempat pelanggan secara terencana tanpa risiko bentrok dan terhubung langsung ke pemetaan meja.",
    visual: "reservation",
  },
  {
    icon: "waiting" as IconName,
    title: "Waiting List",
    copy: "Atur antrean pelanggan walk-in secara teratur dilengkapi notifikasi otomatis saat meja siap digunakan.",
    visual: "waiting",
  },
  {
    icon: "kds" as IconName,
    title: "Kitchen Display System",
    copy: "Pesanan terkirim secara otomatis ke layar dapur secara real-time guna meminimalkan kesalahan dan mempercepat penyiapan.",
    visual: "kds",
  },
  {
    icon: "floor" as IconName,
    title: "Tata Ruang & Meja",
    copy: "Pantau denah area, ketersediaan meja, serta status pembersihan secara terpusat dari satu layar.",
    visual: "floor",
  },
  {
    icon: "integration" as IconName,
    title: "Integrasi Online",
    copy: "Hubungkan pesanan dari berbagai platform pengiriman online secara otomatis ke sistem POS dan dapur tanpa input ulang.",
    visual: "integration",
  },
];

function QrPattern() {
  return (
    <svg
      viewBox="0 0 44 44"
      className="size-11 rounded bg-white p-1"
      aria-label="Contoh kode QR"
    >
      <path
        fill="#111827"
        d="M2 2h12v12H2zm3 3v6h6V5zM30 2h12v12H30zm3 3v6h6V5zM2 30h12v12H2zm3 3v6h6v-6zM18 2h4v4h-4zM22 6h4v4h-4zM18 10h8v4h-8zM16 18h4v4h-4zM22 16h4v8h-4zM28 18h4v4h-4zM34 18h8v4h-8zM18 28h4v6h-4zM24 26h4v4h-4zM30 26h4v8h-4zM36 26h6v4h-6zM22 34h6v4h-6zM18 38h4v4h-4zM28 38h4v4h-4zM34 34h8v8h-4v-4h-4z"
      />
    </svg>
  );
}

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "qr") {
    return (
      <div className="relative h-full overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1556742205-e10c9486e506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBRUiUyMGNvZGUlMjBtZW51JTIwc21hcnRwaG9uZSUyMG9yZGVyaW5nfGVufDF8fHx8MTc5MTM0MTY5MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Meja restoran untuk pengalaman pemesanan melalui QR"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-end gap-3">
          <QrPattern />
          <div className="rounded-xl border border-white/20 bg-white/90 p-2.5 shadow-lg backdrop-blur">
            <div className="mb-1 text-[8px] font-bold text-slate-900">
              Menu Mille
            </div>
            <div className="h-1.5 w-16 rounded bg-brand/20" />
            <div className="mt-1 h-1.5 w-11 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "pos") {
    return (
      <div className="grid h-full grid-cols-[1fr_.72fr] gap-2 bg-slate-100 p-3">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="mb-2 text-[8px] font-bold text-slate-500">
            TRANSAKSI #1824
          </div>
          {["Latte", "Croissant", "Pasta"].map((item, index) => (
            <div
              key={item}
              className="mb-1.5 flex justify-between rounded bg-slate-50 px-2 py-1.5 text-[8px] text-slate-600"
            >
              <span>{item}</span>
              <b>{["28k", "32k", "78k"][index]}</b>
            </div>
          ))}
          <div className="mt-2 flex justify-between border-t border-slate-100 pt-2 text-[9px] font-bold">
            <span>Total</span>
            <span>Rp138k</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {["Split Bill", "QRIS", "Kartu"].map((label, index) => (
            <div
              key={label}
              className={`flex flex-1 items-center justify-center rounded-lg text-[8px] font-bold ${index === 1 ? "bg-brand text-white" : "bg-white text-slate-500 shadow-sm"}`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "kiosk") {
    return (
      <div className="flex h-full items-end justify-center bg-gradient-to-b from-slate-100 to-slate-200 pt-4">
        <div className="w-32 rounded-t-[18px] border-[5px] border-slate-800 bg-white p-2 shadow-xl">
          <div className="mb-2 flex items-center justify-between text-[7px] font-bold">
            <span>Pesan Mandiri</span>
            <span className="text-brand">Mille</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              "bg-amber-100",
              "bg-orange-100",
              "bg-emerald-100",
              "bg-sky-100",
            ].map((color, index) => (
              <div key={color} className="rounded border border-slate-100 p-1">
                <div className={`h-7 rounded ${color}`} />
                <div className="mt-1 text-[6px] font-semibold text-slate-600">
                  Menu {index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded bg-brand py-1 text-center text-[7px] font-bold text-white">
            Lihat Pesanan
          </div>
        </div>
      </div>
    );
  }

  if (kind === "queue") {
    return (
      <div className="grid h-full grid-cols-2 gap-2 bg-[#161a21] p-3 text-white">
        {[
          ["DIPROSES", ["A-021", "A-024", "B-009"]],
          ["SIAP DIAMBIL", ["A-018", "B-007", "A-020"]],
        ].map(([title, orders], column) => (
          <div key={title as string} className="rounded-lg bg-white/6 p-2">
            <div
              className={`mb-2 text-[7px] font-bold tracking-wider ${column ? "text-emerald-400" : "text-amber-400"}`}
            >
              {title as string}
            </div>
            {(orders as string[]).map((order) => (
              <div
                key={order}
                className="mb-1.5 rounded bg-white/8 px-2 py-2 text-center font-display text-[11px] font-bold"
              >
                {order}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "reservation") {
    return (
      <div className="h-full bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Reservasi · Mei
          </span>
          <span className="rounded bg-brand-subtle px-2 py-1 text-[7px] font-bold text-brand">
            + Booking
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }, (_, index) => (
            <div
              key={index}
              className={`flex aspect-square items-center justify-center rounded text-[7px] ${[8, 12, 17, 22].includes(index) ? "bg-brand font-bold text-white" : "bg-slate-50 text-slate-400"}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
            DP Lunas
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-1 text-[7px] font-bold text-amber-600">
            Menunggu Konfirmasi
          </span>
        </div>
      </div>
    );
  }

  if (kind === "waiting") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">
            Antrean Walk-in
          </span>
          <span className="text-[8px] text-slate-400">8 menunggu</span>
        </div>
        {[
          ["W-018", "4 orang", "Meja siap"],
          ["W-019", "2 orang", "12 menit"],
          ["W-020", "5 orang", "18 menit"],
        ].map(([id, people, status], index) => (
          <div
            key={id}
            className="mb-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg border border-slate-100 bg-white p-2 shadow-sm"
          >
            <span
              className={`size-2 rounded-full ${index === 0 ? "bg-emerald-400" : "bg-amber-400"}`}
            />
            <div>
              <div className="text-[8px] font-bold text-slate-700">{id}</div>
              <div className="text-[7px] text-slate-400">{people}</div>
            </div>
            <span className="text-[7px] font-semibold text-brand">
              {status}
            </span>
          </div>
        ))}
        <div className="rounded-lg bg-brand px-3 py-2 text-center text-[7px] font-bold text-white">
          Kirim notifikasi meja siap
        </div>
      </div>
    );
  }

  if (kind === "kds") {
    return (
      <div className="grid h-full grid-cols-3 gap-2 bg-[#11151b] p-3">
        {[
          ["BARU", "border-sky-400", ["#1842", "4 item"]],
          ["DIPROSES", "border-amber-400", ["#1840", "7 menit"]],
          ["TERLAMBAT", "border-rose-400", ["#1836", "16 menit"]],
        ].map(([status, border, details]) => (
          <div
            key={status as string}
            className={`rounded-lg border-t-2 ${border as string} bg-white/6 p-2 text-white`}
          >
            <div className="text-[7px] font-bold text-white/45">
              {status as string}
            </div>
            <div className="mt-3 font-display text-[11px] font-extrabold">
              {(details as string[])[0]}
            </div>
            <div className="mt-1 text-[7px] text-white/45">
              {(details as string[])[1]}
            </div>
            <div className="mt-4 h-1 rounded bg-white/8">
              <div className="h-1 w-2/3 rounded bg-brand" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "floor") {
    return (
      <div className="h-full bg-slate-100 p-3">
        <div className="relative h-full rounded-lg border border-dashed border-slate-300 bg-white">
          {[
            ["left-[12%] top-[14%]", "bg-emerald-100 border-emerald-300", "M1"],
            ["left-[43%] top-[12%]", "bg-brand-subtle border-brand/30", "M2"],
            ["right-[10%] top-[18%]", "bg-amber-100 border-amber-300", "M3"],
            ["left-[22%] bottom-[12%]", "bg-slate-100 border-slate-300", "M4"],
            [
              "right-[24%] bottom-[10%]",
              "bg-brand-subtle border-brand/30",
              "M5",
            ],
          ].map(([position, color, table]) => (
            <div
              key={table}
              className={`absolute ${position} flex size-11 items-center justify-center rounded-xl border ${color} text-[8px] font-bold text-slate-600`}
            >
              {table}
            </div>
          ))}
          <div className="absolute bottom-2 left-2 flex gap-2 text-[6px] text-slate-400">
            <span>● Kosong</span>
            <span>● Terisi</span>
            <span>● Reservasi</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center bg-slate-50">
      <div className="absolute left-5 top-5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] font-bold text-slate-500 shadow-sm">
        Kanal A · Aktif
      </div>
      <div className="absolute right-5 top-5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] font-bold text-slate-500 shadow-sm">
        Kanal B · Aktif
      </div>
      <div className="absolute bottom-5 left-5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] font-bold text-slate-500 shadow-sm">
        Kanal C · Aktif
      </div>
      <div className="absolute bottom-5 right-5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[8px] font-bold text-slate-500 shadow-sm">
        Kanal D · Aktif
      </div>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 180"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M80 40 160 90 240 40M80 140l80-50 80 50"
          stroke="#009AE5"
          strokeOpacity=".2"
          strokeDasharray="4 5"
        />
      </svg>
      <div className="relative grid size-16 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_30px_rgba(0,154,229,.3)]">
        <Icon name="integration" className="size-7" />
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
          <div className="max-w-[610px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              PRODUK MILLE
            </div>
            <h1 className="mb-6 font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">
              Kelola Penjualan dan Operasional Bisnis dari Pesanan hingga Kasir
              dalam Satu Sistem.
            </h1>
            <p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">
              Integrasikan seluruh alur operasional dapur, kasir, inventaris,
              hingga pencatatan transaksi secara real-time. Mille memastikan
              koordinasi antar divisi berjalan presisi tanpa kendala komunikasi.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://partner.millehub.com/register-user"
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
          <HeroDashboard />
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
            Operasional Bisnis Memiliki Kompleksitas Tinggi.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pengelolaan alur transaksi dan pelayanan secara manual berpotensi
            menimbulkan hambatan operasional serta penurunan kualitas layanan
            pelanggan.
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
            <p className="type-eyebrow mb-4">FITUR UNTUK OPERASIONAL</p>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
              Semua yang Dibutuhkan Operasional Bisnis dalam Satu Platform.
            </h2>
          </div>
          <p className="pb-1 text-base leading-relaxed text-muted-foreground">
            Mille menyatukan setiap lini operasional — dari alur pemesanan,
            dapur, manajemen antrean, hingga rekapitulasi transaksi — tanpa
            perlu menggunakan sistem terpisah.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`product-feature-card reveal reveal-delay-${(index % 3) + 1} group flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)]`}
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
              <div className="mt-auto h-[205px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
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
          Siap Mewujudkan Operasional Bisnis yang Lebih Cepat dan Bebas
          Hambatan?
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

export default function ProdukOperasionalPemesananPembayaran() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <ClosingCta />
    </>
  );
}
