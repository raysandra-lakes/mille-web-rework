import { useEffect } from "react";
import { Link } from "react-router";
import ClosingBanner from "../components/shared/ClosingBanner";
import PageHeader from "../components/shared/PageHeader";
import { produkGroups } from "../components/nav/navData";
import { title } from "process";

const founders = [
  {
    name: "Christopher Jonathan,Ph.D.",
    img: "/christopher.webp",
    title: "FOUNDER",
  },
  {
    name: "Albert Jonathan,Ph.D.",
    img: "/albert.webp",
    title: "FOUNDER",
  },
  {
    name: "Alvin Jonathan,Ph.D.",
    img: "/alvin.webp",
    title: "FOUNDER",
  },
];

const values = [
  [
    "Sistem Digitalisasi",
    "Mendigitalkan proses bisnis agar lebih cepat dan tercatat rapi.",
  ],
  ["Keamanan", "Menjaga keamanan data dan transaksi pelaku usaha."],
  ["Bisnis", "Berorientasi pada pertumbuhan dan hasil nyata bagi usaha."],
  [
    "Hubungan Kemitraan",
    "Membangun hubungan jangka panjang dengan mitra dan pelanggan.",
  ],
  ["Kerja Sama Tim", "Bekerja lintas tim untuk menghasilkan solusi yang utuh."],
  ["Analisis Data", "Mengubah data operasional menjadi dasar keputusan."],
];

function MissionSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="type-eyebrow mb-4">MISI</p>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
            Satu Sistem untuk Seluruh Operasional.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Banyak usaha mengelola kasir, stok, karyawan, dan laporan di alat
            yang terpisah. Mille hadir untuk menyatukannya agar keputusan bisnis
            diambil dari data yang akurat dan terkini.
          </p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border bg-[#101216] p-6 shadow-xl">
          <div className="absolute right-0 top-0 size-56 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative grid h-full grid-cols-2 gap-3">
            <div className="col-span-2 rounded-xl bg-white p-4">
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Mille Business System
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Penjualan", "Inventaris", "Keuangan"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-slate-50 p-3 text-center text-[8px] font-bold text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {["Karyawan", "Pelanggan"].map((item) => (
              <div key={item} className="rounded-xl bg-white/8 p-4 text-white">
                <div className="size-2 rounded-full bg-brand" />
                <div className="mt-8 font-display text-sm font-bold">
                  {item}
                </div>
                <div className="mt-2 h-1.5 rounded bg-white/10">
                  <div className="h-full w-2/3 rounded bg-brand" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="type-eyebrow mb-3">NILAI KAMI</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
            Prinsip yang Menjaga Setiap Langkah Tetap Terarah.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {values.map(([title, copy], index) => (
            <article
              key={title}
              className={`card reveal reveal-delay-${(index % 3) + 1} relative p-6`}
            >
              <span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-border">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="pr-12 font-display text-lg font-extrabold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="type-eyebrow mb-3">FOUNDERS</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
            Dibangun oleh Tim yang Memahami Data dan Operasional.
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {founders.map((founder) => (
            <article key={founder.name} className="card p-6 text-center">
              <img
                src={founder.img}
                alt={founder.name}
                className="mx-auto size-55 rounded-full object-cover"
              />
              <h3
                style={{ fontSize: 17 }}
                className="mt-5 font-display text-base font-extrabold text-foreground"
              >
                {founder.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {founder.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section-spacing bg-[#F8FAFC]">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="type-eyebrow mb-3">YANG KAMI BANGUN</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
            Ekosistem Produk untuk Berbagai Kebutuhan Bisnis.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {produkGroups.map((group) => (
            <Link
              key={group.num}
              to={group.href}
              className="card group p-5 no-underline transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
            >
              <span className="text-xs font-bold text-brand">{group.num}</span>
              <h3 className="mt-4 font-display text-base font-extrabold leading-snug text-foreground">
                {group.title}
              </h3>
              <span className="mt-6 inline-flex text-xs font-bold text-muted-foreground group-hover:text-brand">
                Pelajari →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const socials = [
    ["Instagram", "https://www.instagram.com/mille.hub/"],
    ["Facebook", "https://www.facebook.com/profile.php?id=100065279869206"],
    ["YouTube", "https://www.youtube.com/@millepos2009"],
    ["LinkedIn", "https://www.linkedin.com/company/lakes-system/mycompany/"],
  ];
  return (
    <section className="section-spacing bg-white">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-surface p-7 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="type-eyebrow mb-3">KONTAK</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                Terhubung dengan Tim Mille.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                PT. Lakes Konstelasi Data
                <br />
                Jalan Hegarmanah No.53, Bandung, 40141, Indonesia.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <a
                href="https://wa.me/628112290898"
                className="rounded-xl border border-border bg-white p-4 font-semibold text-foreground no-underline"
              >
                Sales · +62 811 229 0898
              </a>
              <a
                href="https://wa.me/628112480898"
                className="rounded-xl border border-border bg-white p-4 font-semibold text-foreground no-underline"
              >
                Support · +62 811 248 0898
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {socials.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-muted-foreground no-underline hover:border-brand hover:text-brand"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TentangPerusahaan() {
  useEffect(() => {
    document.title = "Tentang Perusahaan | Mille";
  }, []);
  return (
    <>
      <PageHeader
        chip="TENTANG MILLE"
        title="Membantu Bisnis Anda Berkembang dan Mencapai Tujuannya."
        description="Mille dikembangkan oleh PT. Lakes Konstelasi Data, berbasis di Bandung, untuk menyatukan operasional bisnis dalam satu sistem."
        current="Tentang Perusahaan"
      />
      <MissionSection />
      <ValuesSection />
      <FoundersSection />
      <ProductsSection />
      <ContactSection />
      <ClosingBanner
        title="Siap Melihat Mille untuk Bisnis Anda?"
        primary={{
          label: "Coba Gratis 30 Hari",
          href: "https://partner.millehub.com/register-user",
        }}
        secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }}
      />
    </>
  );
}
