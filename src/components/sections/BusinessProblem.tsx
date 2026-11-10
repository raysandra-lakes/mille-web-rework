const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h8v4H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17.5v1.5l1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Transaksi Bertambah",
    body: "Lonjakan volume transaksi membutuhkan keandalan sistem agar alur operasional tetap berjalan stabil, cepat, dan bebas hambatan.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 21v-2M18 21v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Outlet Bertambah",
    body: "Penambahan cabang menuntut kendali terpusat agar operasional terjaga, sekaligus memudahkan analisis performa setiap maupun keseluruhan outlet.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h18M3 12h14M3 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.5 18h3M20 16.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Stok Semakin Kompleks",
    body: "Kompleksitas persediaan memerlukan kontrol ketat agar stok selalu terjaga, harga bahan baku terkontrol, dan kualitas produk konsisten.",
  },
  {
    icon: (
      <svg width="30" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 20l5-10 4 6 3-4 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 6h2M20 5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Data Semakin Banyak",
    body: "Tumpukan data melimpah perlu dipilah dengan cermat untuk menghasilkan laporan akurat dan merumuskan strategi pengembangan bisnis.",
  },
];

export default function BusinessProblem() {
  return (
    <section
      style={{
        background: "var(--surface)",
        paddingTop: 20,
        paddingRight: 0,
        paddingBottom: 20,
        paddingLeft: 0,
        borderWidth: 1,
        borderColor: "rgb(0, 0, 0)",
        borderStyle: "none",
      }}
    >
      <div className="container-page">
        {/* Headline */}
        <div style={{ maxWidth: 620, marginBottom: "clamp(48px, 5vw, 72px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-display-family)",
              fontWeight: 800,
              fontSize: "clamp(30px, 3.2vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
              marginBottom: 18,
            }}
          >
            Bisnis Bertumbuh.<br />
            <span style={{ color: "var(--muted-foreground)", fontWeight: 400 }}>Operasional Semakin Kompleks.</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "var(--muted-foreground)",
              lineHeight: 1.65,
              borderWidth: 0,
              borderStyle: "none",
              boxShadow: "none",
              margin: 0,
              padding: 0,
              textAlign: "justify",
              width: 667,
            }}
          >
            Pengelolaan operasional dengan satu cabang memiliki dinamika yang relatif sederhana. Seiring berkembangnya skala usaha, setiap alur kerja menuntut kontrol, efisiensi, dan standardisasi yang presisi. Mille menghadirkan ekosistem terpadu untuk menyederhanakan seluruh kompleksitas operasional bisnis Anda.
          </p>
        </div>

        {/* 4 problem cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 28px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Step number */}
              <span
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--border)",
                  letterSpacing: "0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--brand-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brand)",
                  marginBottom: 20,
                }}
              >
                {p.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display-family)",
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "-0.015em",
                  color: "var(--foreground)",
                  marginBottom: 8,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
