import { Link } from "react-router";
import { Breadcrumb } from "../components/product/ProductDetailPage";

type AddOn = {
  title: string;
  label: string;
  features: string[];
};

const basicTargets = [
  "Restoran & kafe skala kecil–menengah",
  "Gerai makanan cepat saji (quick service)",
  "Kedai kopi, bakery, dan dessert shop",
  "Usaha ritel skala kecil–menengah",
  "Bisnis Food & Beverage (F&B) yang ingin mulai membangun sistem digital secara bertahap",
];

const basicFeatures = [
  "1 Aplikasi Kasir / Point of Sale (POS)",
  "Stock Keeping Unit (SKU) Tanpa Batas",
  "Fitur Inventaris Dasar (Resep, Bahan, Recording)",
  "Laporan Penjualan Menyeluruh",
  "Perhitungan Harga Pokok Penjualan (HPP) & Laba",
  "Program Loyalitas",
  "5 Akun Frontliner / Operasional",
  "1 Akun Back Office Super Admin & 1 Akun Back Office Tambahan",
  "5 Omni-Channel Pricebook",
  "2 Sesi Training & Dedicated PIC + Grup WhatsApp",
];

const addOns: AddOn[] = [
  { title: "Modul Restoran", label: "OPERASIONAL LAYANAN", features: ["Layout Ruangan & Meja", "Kitchen Display System (KDS)", "Self Ordering Kiosk", "Sistem Reservasi", "Laporan Riwayat Pencetakan", "Order Queue", "Waiting List"] },
  { title: "Rantai Pasokan", label: "SUPPLY CHAIN", features: ["Pemasok (Supplier)", "Inventory Request (IR)", "Purchase Order (PO)", "Transfer Order (TO)", "Produksi & Bahan 1/2 Jadi", "Central Kitchen & Gudang", "Multi Divisi", "Manajemen Inventaris Lanjutan"] },
  { title: "Sistem Akuntansi", label: "KEUANGAN", features: ["Neraca", "Laba Rugi", "Arus Kas", "Buku Besar", "Neraca Saldo", "Aset/Depresiasi/Amortisasi", "Jurnal Umum & Biaya", "Chart of Account (CoA)", "Utang & Piutang"] },
  { title: "Pengelolaan Karyawan", label: "PEOPLE", features: ["Absensi", "Komisi", "Performa Karyawan"] },
  { title: "Akun Tambahan Operasional", label: "AKSES TIM", features: ["Tambahan 3 Akun Back Office", "Tambahan 15 Akun Frontliner/Operasional", "5 Akun Tambahan (Frontliner/Back Office)"] },
  { title: "Integrasi Layanan Pesan-Antar", label: "DELIVERY", features: ["Integrasi GrabFood", "GoFood", "GoSend"] },
  { title: "Kasir Multi Perangkat", label: "PERANGKAT", features: ["Penggunaan Tanpa Batas Perangkat dalam Satu Outlet"] },
  { title: "Sistem Pemesanan Digital", label: "DIGITAL ORDER", features: ["Pemesanan via QR / Online Order", "Customer Pre-Order (PO)"] },
  { title: "Integrasi Notifikasi & Pesan", label: "MESSAGING", features: ["Integrasi Pesan Otomatis WhatsApp & Email"] },
  { title: "Integrasi Sistem Pembayaran", label: "PAYMENT", features: ["Pembayaran QRIS", "Mesin EDC", "Pengelolaan Voucher"] },
  { title: "Pengelolaan Pelanggan", label: "CRM", features: ["Database Pelanggan", "Rekomendasi Menu", "Umpan Balik Pelanggan (Feedback)"] },
  { title: "Integrasi Sistem via API", label: "DEVELOPER", features: ["Dukungan RESTful API untuk Integrasi Kustom"] },
];

const proCriteria = [
  "Memiliki alur operasional kompleks (multi-perangkat, self-ordering kiosk, hingga KDS dapur)",
  "Membutuhkan efisiensi pengelolaan inventaris multi-outlet, multi-gudang, & akuntansi terintegrasi",
  "Mengandalkan business insight berbasis data untuk memantau performa dan rekomendasi strategis",
];

const proFeatures = [
  "Seluruh Fitur Subscription Mille",
  "Kasir Multi Perangkat (Tanpa Batas Perangkat dalam Satu Outlet)",
  "Modul Restoran Lengkap & Sistem Pemesanan Digital",
  "Integrasi Pesan-Antar, Notifikasi & Pembayaran (QRIS/EDC)",
  "Rantai Pasokan & Sistem Akuntansi Komprehensif",
  "Pengelolaan Karyawan & CRM Pelanggan",
  "4 Sesi Training & Dedicated PIC + Grup WhatsApp",
];

const hardware = [
  { title: "iMin Swan 1 Pro", detail: 'Dual Display 15.6" + 10.1"', type: "terminal" },
  { title: "Samsung Tab A11+", detail: 'WiFi Only · 11.0"', type: "tablet" },
  { title: "Epson Printer Series", detail: "TM-T82X Thermal LAN & TM-U220B Dot Matrix", type: "printer" },
  { title: "XPrinter & C58BT", detail: "XP-4601B Label BT & Bluetooth Printer", type: "label" },
  { title: "Perangkat Pendukung", detail: "TP-Link Archer C-64, Cash Drawer & Mille POS Stand", type: "support" },
];

function CheckIcon({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-extrabold ${inverse ? "bg-brand text-white" : "bg-brand-subtle text-brand"}`}>
      ✓
    </span>
  );
}

function FeatureList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-sm leading-relaxed ${inverse ? "text-white/70" : "text-muted-foreground"}`}>
          <CheckIcon inverse={inverse} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TargetList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-sm leading-relaxed ${inverse ? "text-white/60" : "text-muted-foreground"}`}>
          <span className={`mt-2 size-1.5 shrink-0 rounded-full ${inverse ? "bg-brand-light" : "bg-brand"}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanPreview({ pro = false }: { pro?: boolean }) {
  const rows = pro
    ? [["Outlet terhubung", "24"], ["Modul aktif", "12"], ["Pengguna", "186"], ["Integrasi", "9"]]
    : [["Outlet aktif", "1"], ["SKU terdaftar", "Tanpa batas"], ["Akun tim", "7"], ["Pricebook", "5"]];
  return (
    <div className={`overflow-hidden rounded-2xl border shadow-xl ${pro ? "border-white/10 bg-white/6" : "border-slate-200 bg-slate-50"}`}>
      <div className={`flex items-center justify-between border-b px-4 py-3 ${pro ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
        <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-400" /><span className={`text-[9px] font-bold tracking-wider ${pro ? "text-white/50" : "text-slate-500"}`}>MILLE CONTROL CENTER</span></div>
        <span className={`text-[8px] ${pro ? "text-white/30" : "text-slate-400"}`}>Live overview</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        {rows.map(([label, value], index) => (
          <div key={label} className={`rounded-xl p-3 ${pro ? "bg-white/6" : "bg-white shadow-sm"}`}>
            <div className={`text-[8px] ${pro ? "text-white/35" : "text-slate-400"}`}>{label}</div>
            <div className={`mt-1 font-display text-base font-extrabold ${pro ? "text-white" : "text-slate-800"}`}>{value}</div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-200/20"><div className={`h-full rounded-full bg-brand ${index === 0 ? "w-[84%]" : index === 1 ? "w-[68%]" : index === 2 ? "w-[76%]" : "w-[58%]"}`} /></div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className={`rounded-xl p-3 ${pro ? "bg-[#111318]" : "bg-white shadow-sm"}`}>
          <div className={`mb-3 text-[8px] font-bold ${pro ? "text-white/50" : "text-slate-500"}`}>Performa operasional</div>
          <div className="flex h-16 items-end gap-1.5">
            {[42, 58, 48, 72, 64, 88, 78, 94].map((height, index) => <span key={index} className={`flex-1 rounded-t ${index === 7 ? "bg-brand" : pro ? "bg-white/12" : "bg-brand/20"}`} style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AddOnCard({ item, index }: { item: AddOn; index: number }) {
  return (
    <article className={`group reveal reveal-delay-${(index % 3) + 1} flex min-h-[330px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.09)]`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.08em] text-brand">{item.label}</span>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-tight text-foreground">{item.title}</h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-subtle font-display text-xs font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="h-px bg-slate-100" />
      <ul className="mt-5 flex-1 space-y-2.5">
        {item.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/60" />{feature}</li>)}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[11px] font-semibold text-slate-400">Aktifkan sesuai kebutuhan</span>
        <Link to="#" className="text-xs font-bold text-brand no-underline transition group-hover:translate-x-1">Konsultasi →</Link>
      </div>
    </article>
  );
}

function DeviceVisual({ type }: { type: string }) {
  const common = "border-2 border-slate-700 bg-[#171a20] shadow-xl";
  if (type === "terminal") return <div className="relative h-28 w-36"><div className={`absolute left-1 top-0 h-20 w-24 rounded-lg ${common}`}><div className="m-2 h-12 rounded bg-gradient-to-br from-brand/70 to-brand/10" /></div><div className={`absolute right-0 top-5 h-14 w-16 rounded-md ${common}`}><div className="m-1.5 h-8 rounded bg-brand/20" /></div><div className="absolute bottom-0 left-10 h-8 w-10 bg-slate-700 [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)]" /></div>;
  if (type === "tablet") return <div className={`grid h-28 w-20 place-items-center rounded-xl ${common}`}><div className="h-20 w-14 rounded-md bg-gradient-to-b from-brand/70 to-brand/10 p-2"><div className="h-1.5 w-8 rounded bg-white/50" /><div className="mt-2 grid grid-cols-2 gap-1">{[1, 2, 3, 4].map((item) => <span key={item} className="h-5 rounded bg-white/20" />)}</div></div></div>;
  if (type === "printer") return <div className="relative h-24 w-28 rounded-xl bg-slate-700 p-3 shadow-xl"><div className="absolute -top-5 left-5 h-10 w-16 rounded-t bg-white shadow"><div className="mx-auto mt-2 h-1 w-10 bg-slate-200" /><div className="mx-auto mt-1 h-1 w-8 bg-slate-200" /></div><div className="mt-5 h-3 rounded bg-[#111318]" /><span className="absolute bottom-3 right-3 size-2 rounded-full bg-emerald-400" /></div>;
  if (type === "label") return <div className="relative h-24 w-28 rounded-xl bg-[#171a20] p-3 shadow-xl"><div className="h-3 rounded bg-slate-700" /><div className="mx-auto mt-3 h-14 w-16 rounded-b bg-white p-2"><div className="h-5 border border-slate-200" /><div className="mt-1 flex gap-0.5">{[1, 2, 3, 4, 5, 6].map((item) => <span key={item} className="h-4 w-0.5 bg-slate-700" />)}</div></div></div>;
  return <div className="relative h-28 w-36"><div className="absolute left-0 top-2 h-16 w-24 rounded-xl bg-slate-700 shadow-xl"><div className="mx-auto mt-3 flex w-16 justify-between">{[1, 2, 3, 4].map((item) => <span key={item} className="size-1.5 rounded-full bg-brand" />)}</div><div className="mx-auto mt-4 h-1.5 w-12 rounded bg-slate-500" /></div><div className="absolute bottom-0 right-0 h-16 w-24 rounded-lg border-2 border-slate-600 bg-slate-200 shadow-xl"><div className="mx-auto mt-3 h-2 w-14 rounded bg-slate-400" /><div className="mx-auto mt-4 h-5 w-16 rounded bg-slate-300" /></div></div>;
}

export default function Berlangganan() {
  return (
    <>
      <section id="header" className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-24">
        <div className="absolute right-[8%] top-[-10rem] size-[32rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative">
          <Breadcrumb items={["Berlangganan"]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-brand"><span className="size-1.5 rounded-full bg-brand" />BERLANGGANAN & SOLUSI MILLE</div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-foreground">Solusi untuk Semua Kebutuhan Bisnis Anda.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-muted-foreground">Mille terbukti dan berhasil membantu berbagai jenis usaha, mulai dari skala kecil, menengah hingga atas. Tentukan paket yang sesuai dengan kebutuhan atau lakukan upgrade untuk mendapatkan fitur dan layanan yang lebih baik.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/jadwalkan-demo" className="btn btn-primary btn-lg">Jadwalkan Demo →</Link><Link to="#" className="btn btn-secondary btn-lg">Hubungi Kami →</Link></div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">{["✓ Uji coba gratis 14 hari", "✓ Onboarding terpandu", "✓ Tanpa biaya tersembunyi"].map((item) => <span key={item} className="text-xs font-medium text-muted-foreground">{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="basic" className="section-spacing bg-white scroll-mt-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,.08)]">
            <div className="grid gap-10 p-7 lg:grid-cols-[1.02fr_.98fr] lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-brand-subtle px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-brand">FONDASI DIGITAL UMKM</span>
                <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,3.15rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Mille Basic — Fondasi Digital untuk UMKM agar Lebih Terstruktur & Terkontrol.</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">Berlangganan Mille Basic sudah mencakup kebutuhan untuk usaha kecil dan menengah (UMKM), termasuk aplikasi kasir, pengelolaan stok dasar, laporan penjualan menyeluruh, hingga dukungan purna jual.</p>
                <div className="mt-8"><p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">Cocok untuk bisnis</p><TargetList items={basicTargets} /></div>
                <Link to="/jadwalkan-demo" className="btn btn-secondary btn-lg mt-8">Jadwalkan Demo Sekarang</Link>
              </div>
              <div className="flex flex-col gap-5">
                <PlanPreview />
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><p className="mb-5 font-display text-lg font-bold text-foreground">Fitur utama yang sudah termasuk</p><FeatureList items={basicFeatures} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="add-on" className="section-spacing scroll-mt-20 bg-[#F8FAFC]">
        <div className="container-page">
          <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div><p className="type-eyebrow mb-4">FITUR TAMBAHAN</p><h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Lengkapi Langganan Mille dengan Modul Tambahan.</h2></div>
            <p className="pb-1 text-base leading-relaxed text-muted-foreground">Pilih modul spesifik di bawah ini sesuai dengan kebutuhan operasional Anda untuk meningkatkan kapabilitas dan efisiensi bisnis.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{addOns.map((item, index) => <AddOnCard key={item.title} item={item} index={index} />)}</div>
        </div>
      </section>

      <section id="pro" className="section-spacing scroll-mt-20 bg-white">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border-2 border-brand bg-foreground text-white shadow-[0_28px_90px_rgba(0,154,229,.16)]">
            <div className="absolute right-0 top-0 size-[28rem] rounded-full bg-brand/15 blur-3xl" />
            <div className="relative grid gap-12 p-7 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-brand px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-white">SOLUSI TERDEPAN & PALING LENGKAP</span>
                <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,3.15rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">Mille Pro — Dirancang untuk Bisnis yang Siap Dikelola Secara Profesional.</h2>
                <p className="mt-5 text-base leading-relaxed text-white/60">Satu paket komprehensif yang telah mencakup seluruh modul operasional, rantai pasokan, akuntansi, hingga integrasi lanjutan untuk pertumbuhan terarah dan berkelanjutan.</p>
                <div className="mt-8"><p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/80">Ideal untuk bisnis yang</p><TargetList items={proCriteria} inverse /></div>
                <Link to="/jadwalkan-demo" className="btn btn-primary btn-lg mt-8">Jadwalkan Demo Sekarang</Link>
              </div>
              <div className="flex flex-col gap-5">
                <PlanPreview pro />
                <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur"><p className="mb-5 font-display text-lg font-bold">Seluruh kapabilitas dalam satu paket</p><FeatureList items={proFeatures} inverse /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hardware" className="section-spacing scroll-mt-20 bg-surface">
        <div className="container-page">
          <div className="mb-14 max-w-3xl"><p className="type-eyebrow mb-4">HARDWARE OPERASIONAL</p><h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Jenis Perangkat yang Umum Digunakan.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">Perangkat keras tangguh yang direkomendasikan dan teruji kompatibel penuh dengan sistem Mille POS.</p></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {hardware.map((item) => <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"><div className="grid h-48 place-items-center bg-gradient-to-br from-slate-50 to-slate-100"><div className="transition-transform duration-300 group-hover:scale-105"><DeviceVisual type={item.type} /></div></div><div className="p-5"><h3 className="font-display text-base font-bold leading-snug text-foreground">{item.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p><div className="mt-4 text-[10px] font-bold tracking-wider text-emerald-600">✓ KOMPATIBEL DENGAN MILLE</div></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="grid items-center gap-8 rounded-2xl border border-brand/20 bg-brand-subtle p-7 lg:grid-cols-[auto_1fr_auto] lg:p-10">
            <div className="grid size-14 place-items-center rounded-2xl bg-brand text-white"><svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13a8 8 0 0 1 16 0M4 13v5a2 2 0 0 0 2 2h2v-8H4v1ZM20 13v5a2 2 0 0 1-2 2h-2v-8h4v1ZM12 20v2" /></svg></div>
            <div><h2 className="font-display text-[clamp(1.6rem,2.5vw,2.35rem)] font-extrabold leading-tight tracking-[-0.02em] text-foreground">Nikmati Dukungan Purna Jual Mille yang Responsif & Profesional.</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Tim support profesional kami selalu siap memberikan bantuan terbaik yang dapat diandalkan untuk memastikan bisnis Anda berjalan lancar setiap saat.</p></div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand"><span className="size-2 animate-pulse rounded-full bg-emerald-500" />Tim support siap membantu</div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-20 text-center text-white lg:py-28">
        <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="container-page relative"><h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">Siap Memulai Usaha dengan Solusi Kami?</h2><p className="mx-auto mt-5 max-w-2xl text-base text-white/55">Kembangkan dan Tingkatkan Omset Usaha Anda Dengan Mille Sekarang!</p><div className="mt-9"><Link to="/jadwalkan-demo" className="btn btn-primary btn-lg">Jadwalkan Demo</Link></div></div>
      </section>
    </>
  );
}
