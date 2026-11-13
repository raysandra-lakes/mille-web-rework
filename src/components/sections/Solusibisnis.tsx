import { useState } from "react";
import { Link } from "react-router";

const industries = [
  {
    title: "Restoran",
    hook: "Stabil dan Nyaman.",
    desc: "Optimalkan alur transaksi, antrean, hingga tata ruang meja untuk tingkatkan kenyamanan pelanggan.",
    img: "/assets/solution/deu.jpg",
    alt: "Interior restoran modern",
    color: "var(--brand)",
    to: "/solusi/restoran",
  },
  {
    title: "Kedai Kopi",
    hook: "Konsisten dan Loyal.",
    desc: "Jaga standar rasa produk secara presisi sekaligus bangun hubungan erat untuk tingkatkan retensi pelanggan.",
    img: "/assets/solution/tikom.webp",
    alt: "Barista menyeduh kopi",
    color: "#0072CC",
    to: "/solusi/kedai-kopi",
  },
  {
    title: "Cepat Saji",
    hook: "Cepat dan Tepat.",
    desc: "Percepat alur pemesanan, efisiensi operasional dapur, hingga penyajian tanpa mengorbankan akurasi.",
    img: "/assets/solution/wow.webp",
    alt: "Counter restoran cepat saji",
    color: "#E8820C",
    to: "/solusi/cepat-saji",
  },
  {
    title: "Bakery",
    hook: "Konsisten dan Terukur.",
    desc: "Pertahankan standar mutu resep serta optimalkan alur supply chain dari produksi hingga distribusi.",
    img: "/assets/solution/gingin.jpg",
    alt: "Display roti di toko bakery",
    color: "#4A7CF6",
    to: "/solusi/bakery",
  },
  {
    title: "Toko Ritel",
    hook: "Terintegrasi dan Efisien.",
    desc: "Kendalikan operasional multi-outlet serta efisiensi rantai pasokan untuk pengelolaan gudang yang efektif.",
    img: "/assets/solution/offy.webp",
    alt: "Toko ritel modern dengan display produk",
    color: "#0EA86B",
    to: "/solusi/toko-retail",
  },
  {
    title: "Salon & Spa",
    hook: "Personal dan Terstruktur.",
    desc: "Tingkatkan loyalitas pelanggan melalui layanan personal serta optimalkan transparansi komisi karyawan.",
    img: "/assets/solution/sendja.webp",
    alt: "Perawatan facial di salon spa",
    color: "#E84545",
    to: "/solusi/salon-spa",
  },
];

function IndustryCard({ industry }: { industry: (typeof industries)[0] }) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = industry.to ? Link : "div";
  const wrapperProps = industry.to
    ? { to: industry.to, style: { textDecoration: "none", display: "block" } }
    : {};

  return (
    <Wrapper {...(wrapperProps as any)}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          border: `1.5px solid ${hovered ? industry.color + "50" : "var(--border)"}`,
          background: "var(--card)",
          cursor: "pointer",
          transition: "border-color 0.22s, box-shadow 0.22s, transform 0.22s",
          boxShadow: hovered
            ? `0 16px 48px ${industry.color}14, 0 4px 16px rgba(0,0,0,0.06)`
            : "none",
          transform: hovered ? "translateY(-4px)" : "none",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "16/9",
            background: "#E4E2DC",
          }}
        >
          <img
            src={industry.img}
            alt={industry.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              display: "block",
            }}
          />
          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${industry.color}60 0%, transparent 55%)`,
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.3s",
            }}
          />
          {/* Industry label pill on image */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              padding: "4px 12px",
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.04em",
            }}
          >
            {industry.title}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "18px 20px 20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.015em",
                color: "var(--foreground)",
                marginBottom: 5,
              }}
            >
              {industry.title}
            </p>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--muted-foreground)",
                lineHeight: 1.55,
              }}
            >
              <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>
                {industry.hook}
              </strong>{" "}
              {industry.desc}
            </p>
          </div>
          {/* Arrow */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: `1.5px solid ${hovered ? industry.color : "var(--border)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: hovered ? industry.color : "var(--muted-foreground)",
              transition: "all 0.22s",
              transform: hovered ? "translateX(3px)" : "none",
              background: hovered ? industry.color + "0D" : "transparent",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default function SolusiSection() {
  return (
    <section
      style={{
        background: "var(--background)",
        paddingBlock: "clamp(80px, 9vw, 128px)",
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div
          className="grid-2col-to-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 4vw, 80px)",
            alignItems: "end",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}
        >
          <div>
            <p className="type-eyebrow" style={{ marginBottom: 14 }}>
              Solusi Bisnis
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 46px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--foreground)",
              }}
            >
              Dirancang untuk Berbagai Model Bisnis.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(15px, 1.2vw, 17px)",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Setiap bisnis memiliki kebutuhan operasional yang berbeda. Mille
              menyediakan solusi yang dapat disesuaikan dengan karakteristik dan
              skala bisnis Anda.
            </p>
            <a
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--brand)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "gap 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.gap = "10px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.gap = "6px";
              }}
            >
              Lihat Semua Solusi Bisnis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 3×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="grid-3col-to-2"
        >
          {industries.map((ind) => (
            <IndustryCard key={ind.title} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
