import { useState } from "react";
import { Link } from "react-router";
import { Breadcrumb, LineIcon } from "../components/product/ProductDetailPage";

const values = [
  { title: "Deteksi Dini & Peringatan Otomatis", copy: "Mengenali anomali operasional, kebocoran stok, dan potensi penurunan omzet sebelum berdampak pada keuangan." },
  { title: "Prediksi Tren & Permintaan", copy: "Memproyeksikan volume pesanan dan kebutuhan bahan baku berdasarkan tren histori, cuaca, dan pola hari libur." },
  { title: "Otomasi Tugas Repetitif", copy: "Mengeliminasi rekapitulasi data manual dan membuat draft keputusan pembelian stok atau promosi secara otomatis." },
  { title: "Interaksi Bahasa Alami", copy: "Cukup ajukan pertanyaan dalam bahasa sehari-hari untuk mendapatkan analisis komprehensif tanpa perlu keahlian olah data." },
];

const capabilities = [
  { title: "Smart Inventory Forecasting", copy: "Memprediksi sisa umur persediaan bahan baku dan memberikan rekomendasi pembuatan Purchase Order (PO) secara presisi.", type: "Stok Susu UHT", metric: "18 jam", rows: ["Proyeksi habis · Sabtu 16:00", "Kebutuhan · 48 karton", "Supplier utama · PT Fresh Milk"], action: "Terbitkan PO ke Pemasok" },
  { title: "Peak-Hour & Staffing Optimization", copy: "Menganalisis jam sibuk mendatang dan memberikan rekomendasi penataan jadwal shift staf untuk cegah penumpukan antrean.", type: "Heatmap Jam Sibuk", metric: "18–20", rows: ["Kasir · +1 staf", "Dapur · +2 staf", "Proyeksi antrean · −38%"], action: "Sesuaikan Jadwal Shift" },
  { title: "Menu Performance & Pricing Intelligence", copy: "Mengkategorikan menu berdasarkan margin profitabilitas dan popularitas (Menu Engineering) serta saran penyesuaian harga.", type: "Menu Engineering", metric: "4 kuadran", rows: ["Star · Kopi Susu", "Plowhorse · Croissant", "Puzzle · Matcha Latte"], action: "Buat Paket Bundling" },
  { title: "Customer Churn Prevention & Loyalty AI", copy: "Mendeteksi pelanggan berkategori VIP yang berpotensi pasif dan merekomendasikan skema penawaran personal.", type: "Churn Alert", metric: "142 VIP", rows: ["High risk · 38 pelanggan", "Medium · 104 pelanggan", "Rekomendasi · Voucher 20%"], action: "Kirim via WhatsApp" },
  { title: "Financial Anomaly & Leakage Detection", copy: "Menganalisis selisih persediaan, pembatalan transaksi kasir (void), dan pengeluaran tidak wajar secara real-time.", type: "Audit Anomali", metric: "3 alert", rows: ["High Risk · Void berulang", "Medium · Selisih stok", "Low · Overtime biaya"], action: "Buka Laporan Audit" },
  { title: "Multi-Outlet Benchmark & Insight", copy: "Membandingkan efisiensi operasional dan pertumbuhan antar cabang serta memetakan faktor kunci keberhasilan cabang terbaik.", type: "Benchmark Cabang", metric: "+18.4%", rows: ["Kemang · Skor 94", "Senayan · Skor 88", "Bandung · Skor 81"], action: "Lihat Faktor Pendorong" },
];

const demos = [
  { label: "Prediksi Stok", prompt: "Bahan baku apa yang berisiko habis saat weekend esok hari?", answer: "Berdasarkan histori penjualan Sabtu-Minggu, stok 'Susu UHT' diprediksi habis pada Sabtu pukul 16:00. Disarankan melakukan order ulang sebanyak 48 Karton hari ini.", stat: "48 Karton", note: "Rekomendasi order ulang" },
  { label: "Analisis Profitabilitas", prompt: "Mengapa profit bersih Cabang Jakarta Selatan turun 5% minggu ini?", answer: "Penurunan dipicu oleh kenaikan HPP bahan baku utama Daging Ayam (+4.2%) dan lonjakan biaya lembur staf saat jam sibuk Jumat malam.", stat: "−5.0%", note: "Perubahan profit bersih" },
  { label: "Strategi Penjualan", prompt: "Menu apa yang cocok untuk dijadikan paket bundling promo makan siang?", answer: "Rekomendasi Paket: 'Es Kopi Susu' (Margin 68%) + 'Croissant Cokelat' (Margin 52%). Kombinasi ini diproyeksikan menaikkan AOV sebesar +18%.", stat: "+18%", note: "Proyeksi kenaikan AOV" },
];

function OptiDashboard() {
  return (
    <div className="relative mx-auto max-w-[620px]">
      <div className="absolute -inset-10 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101216] shadow-[0_32px_90px_rgba(15,23,42,0.3)]">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3 text-white">
          <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-brand"><LineIcon index={3} className="size-4" /></span><span className="text-[10px] font-bold tracking-wider">OPTIMILLE LIVE INTELLIGENCE</span></div>
          <span className="flex items-center gap-1.5 text-[8px] text-emerald-400"><span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />Analyzing</span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1.12fr_.88fr]">
          <div className="rounded-xl bg-white p-4">
            <div className="text-[9px] font-bold text-slate-700">Proyeksi Omzet 30 Hari</div>
            <div className="mt-1 flex items-end gap-2"><span className="font-display text-2xl font-extrabold text-slate-900">Rp184.8jt</span><span className="mb-1 text-[8px] font-bold text-emerald-500">+12.6%</span></div>
            <svg className="mt-4 h-24 w-full" viewBox="0 0 300 92" fill="none" aria-label="Grafik proyeksi omzet">
              <path d="M2 78 36 66l30 5 34-28 32 10 36-32 34 14 38-25 56 8" stroke="#009AE5" strokeWidth="3" strokeLinecap="round" />
              <path d="M2 78 36 66l30 5 34-28 32 10 36-32 34 14 38-25 56 8v74H2Z" fill="url(#opti-area)" opacity=".12" />
              <path d="M170 21 204 35l38-25 56 8" stroke="#009AE5" strokeWidth="3" strokeDasharray="5 5" />
              <defs><linearGradient id="opti-area" x1="150" y1="8" x2="150" y2="92"><stop stopColor="#009AE5" /><stop offset="1" stopColor="#009AE5" stopOpacity="0" /></linearGradient></defs>
            </svg>
            <div className="mt-3 rounded-xl bg-slate-50 p-3"><div className="mb-2 text-[8px] font-semibold text-slate-400">Anda bertanya</div><div className="text-[9px] font-semibold leading-relaxed text-slate-700">Apa risiko operasional terbesar minggu ini?</div></div>
            <div className="mt-2 rounded-xl bg-brand-subtle p-3"><div className="mb-2 flex items-center gap-1 text-[8px] font-bold text-brand"><span className="inline-block size-1 animate-pulse rounded-full bg-brand" />OptiMille sedang menganalisis</div><div className="text-[8px] leading-relaxed text-slate-600">Ditemukan potensi kehabisan 3 bahan baku utama sebelum weekend...</div></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#1d2129] p-4 text-white"><div className="text-[8px] uppercase tracking-wider text-white/35">Live Insight Stream</div><div className="mt-3 space-y-3">{[["high", "Stok susu tersisa 18 jam", "bg-rose-400"], ["medium", "Antrean naik 12% pukul 18:00", "bg-amber-400"], ["opportunity", "AOV berpotensi naik +18%", "bg-emerald-400"]].map(([type, text, color]) => <div key={text} className="flex gap-2 border-b border-white/8 pb-2 last:border-0"><span className={`mt-1 size-1.5 shrink-0 rounded-full ${color}`} /><div><div className="text-[6px] uppercase text-white/30">{type}</div><div className="text-[8px] text-white/70">{text}</div></div></div>)}</div></div>
            <div className="rounded-xl bg-brand p-4 text-white"><div className="text-[8px] font-bold uppercase tracking-wider text-white/65">Rekomendasi Prioritas</div><div className="mt-2 text-[10px] font-semibold leading-relaxed">Terbitkan PO 48 karton Susu UHT hari ini.</div><div className="mt-3 rounded-lg bg-white/15 px-3 py-2 text-center text-[8px] font-bold">Tinjau Rekomendasi</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityVisual({ capability, index }: { capability: (typeof capabilities)[number]; index: number }) {
  return (
    <div className={`h-full p-4 ${index % 2 ? "bg-[#171a20] text-white" : "bg-slate-50 text-slate-700"}`}>
      <div className="mb-4 flex items-start justify-between"><div><div className={`text-[7px] uppercase tracking-wider ${index % 2 ? "text-white/35" : "text-slate-400"}`}>{capability.type}</div><div className="mt-1 font-display text-2xl font-extrabold">{capability.metric}</div></div><span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[7px] font-bold text-emerald-500">AI INSIGHT</span></div>
      <div className="space-y-2">{capability.rows.map((row, rowIndex) => <div key={row} className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-[8px] ${index % 2 ? "bg-white/6" : "bg-white shadow-sm"}`}><span className={`size-1.5 rounded-full ${rowIndex === 0 ? "bg-brand" : rowIndex === 1 ? "bg-amber-400" : "bg-emerald-400"}`} /><span>{row}</span></div>)}</div>
      <div className="mt-3 rounded-lg bg-brand px-3 py-2.5 text-center text-[8px] font-bold text-white">{capability.action}</div>
    </div>
  );
}

function DemoSandbox() {
  const [active, setActive] = useState(0);
  const demo = demos[active];
  return (
    <section className="section-spacing bg-foreground text-white">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center"><p className="type-eyebrow mb-4 text-brand-light">LIVE AI SANDBOX</p><h2 className="font-display text-[clamp(2rem,3.8vw,3.3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">Coba Rasakan Kemudahan Berinteraksi dengan OptiMille.</h2><p className="mt-5 text-base leading-relaxed text-white/50">Pilih salah satu skenario di bawah ini untuk melihat bagaimana OptiMille merespons pertanyaan operasional Anda secara instan:</p></div>
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Skenario OptiMille">
            {demos.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${active === index ? "bg-brand text-white shadow-lg shadow-brand/20" : "border border-white/10 bg-white/5 text-white/50 hover:border-white/25 hover:text-white"}`}>{item.label}</button>)}
          </div>
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/6 shadow-2xl lg:grid-cols-[1.25fr_.75fr]">
            <div className="p-5 sm:p-8">
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4"><span className="grid size-9 place-items-center rounded-xl bg-brand"><LineIcon index={3} className="size-4" /></span><div><div className="text-xs font-bold">OptiMille Assistant</div><div className="text-[9px] text-emerald-400">● Online · Data terkini</div></div></div>
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-brand px-4 py-3 text-sm leading-relaxed">{demo.prompt}</div>
              <div className="mt-4 max-w-[94%] rounded-2xl rounded-tl-sm bg-white/8 px-5 py-4 text-sm leading-relaxed text-white/75"><span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-brand-light">Analisis selesai dalam 1.4 detik</span>{demo.answer}</div>
            </div>
            <div className="border-t border-white/10 bg-[#111318] p-6 lg:border-l lg:border-t-0">
              <div className="text-[9px] font-bold uppercase tracking-wider text-white/30">Impact Snapshot</div><div className="mt-4 font-display text-4xl font-extrabold text-white">{demo.stat}</div><div className="mt-1 text-xs text-white/40">{demo.note}</div>
              <div className="mt-8 space-y-3">{["Data transaksi terverifikasi", "Analisis lintas outlet", "Rekomendasi siap dijalankan"].map((item) => <div key={item} className="flex items-center gap-2 text-[11px] text-white/55"><span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-[9px] font-bold text-emerald-400">✓</span>{item}</div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OptiMille() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F3F9FD_48%,#EAF6FC_100%)] py-16 lg:py-24">
        <div className="absolute right-[5%] top-[-12rem] size-[38rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative">
          <Breadcrumb items={["OptiMille"]} />
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-20">
            <div className="max-w-[650px]"><div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-brand"><span className="size-1.5 rounded-full bg-brand" />AI BUSINESS INTELLIGENCE MILLE</div><h1 className="mb-6 font-display text-[clamp(2.2rem,4vw,3.55rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-foreground">Asisten AI Cerdas yang Mengubah Data Operasional Menjadi Keputusan Bisnis yang Presisi.</h1><p className="mb-8 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.72] text-muted-foreground">OptiMille bekerja secara kontinu di latar belakang sistem Anda — menganalisis jutaan titik data dari transaksi, inventaris, hingga perilaku pelanggan untuk memberikan rekomendasi proaktif dan prediksi akurat secara real-time.</p><div className="mb-7 flex flex-wrap gap-3"><Link to="#" className="btn btn-primary btn-lg">Coba OptiMille Gratis</Link><a href="#simulasi-ai" className="btn btn-secondary btn-lg">Lihat Simulasi AI</a></div><div className="flex flex-wrap gap-x-5 gap-y-2">{["✓ Terintegrasi otomatis", "✓ Tanpa konfigurasi rumit", "✓ Privasi data terjamin"].map((item) => <span key={item} className="text-xs font-medium text-muted-foreground">{item}</span>)}</div></div>
            <OptiDashboard />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="container-page"><div className="mb-14 max-w-2xl"><p className="type-eyebrow mb-4">MENGAPA OPTIMILLE?</p><h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-foreground">Bukan Sekadar Laporan, Tapi Rekomendasi Langkah Nyata.</h2><p className="text-base leading-relaxed text-muted-foreground">Laporan konvensional hanya memberi tahu apa yang telah terjadi. OptiMille memberi tahu apa yang sedang terjadi dan langkah apa yang harus Anda ambil selanjutnya.</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{values.map((item, index) => <article key={item.title} className={`card reveal reveal-delay-${index + 1} relative p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}><span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border/55">{String(index + 1).padStart(2, "0")}</span><div className="mb-6 grid size-11 place-items-center rounded-xl bg-brand-subtle text-brand"><LineIcon index={index} /></div><h3 className="mb-3 font-display text-base font-bold leading-snug text-foreground">{item.title}</h3><p className="text-[13.5px] leading-relaxed text-muted-foreground">{item.copy}</p></article>)}</div></div>
      </section>

      <section className="section-spacing bg-[#F8FAFC]">
        <div className="container-page"><div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-20"><div><p className="type-eyebrow mb-4">KAPABILITAS OPTIMILLE</p><h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">AI yang Memahami Setiap Lini Operasional Bisnis Anda.</h2></div><p className="pb-1 text-base leading-relaxed text-muted-foreground">OptiMille terhubung langsung ke seluruh modul produk Mille untuk memberikan kecerdasan terpadu di setiap keputusan.</p></div>
          <div className="grid gap-5 md:grid-cols-2">{capabilities.map((item, index) => <article key={item.title} className={`group reveal reveal-delay-${(index % 2) + 1} grid min-h-[350px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_44px_rgba(15,23,42,.1)] lg:grid-cols-[.9fr_1.1fr] lg:gap-5`}><div className="mb-5 flex items-start gap-3 lg:mb-0"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-subtle text-brand"><LineIcon index={index + 1} /></div><div><h3 className="font-display text-lg font-bold tracking-tight text-foreground">{item.title}</h3><p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{item.copy}</p></div></div><div className="min-h-[220px] overflow-hidden rounded-xl border border-slate-200 shadow-sm"><div className="h-full transition-transform duration-300 group-hover:scale-105"><CapabilityVisual capability={item} index={index} /></div></div></article>)}</div>
        </div>
      </section>

      <div id="simulasi-ai"><DemoSandbox /></div>

      <section className="relative overflow-hidden bg-white py-20 text-center lg:py-28"><div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" /><div className="container-page relative"><h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">Siap Menjalankan Bisnis yang Lebih Cerdas Bersama OptiMille?</h2><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="#" className="btn btn-primary btn-lg">Coba Gratis 30 Hari</Link><Link to="#" className="btn btn-secondary btn-lg">Jadwalkan Demo AI</Link></div></div></section>
    </>
  );
}
