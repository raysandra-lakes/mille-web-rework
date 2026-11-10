export default function PrimaryCTA() {
  return (
    <section
      style={{
        background: "var(--foreground)",
        paddingBlock: "clamp(72px, 8vw, 112px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle brand-colored radial halos */}
      <div style={{ position: "absolute", top: "-40%", left: "10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,154,229,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-50%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,114,204,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Hairline grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Eyebrow */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", background: "rgba(0,154,229,0.15)", borderRadius: 999, border: "1px solid rgba(0,154,229,0.25)", marginBottom: 24 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--brand)" }} />
          <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--brand-light)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Mulai Sekarang</span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display-family)",
            fontWeight: 800,
            fontSize: "clamp(30px, 3.8vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: 680,
            margin: "0 auto 20px",
          }}
        >
          Siap Mengelola Bisnis dengan Lebih Terarah?
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 1.2vw, 18px)",
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Temukan bagaimana Mille dapat membantu menyederhanakan operasional dan memberikan visibilitas lebih baik terhadap bisnis Anda.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background: "linear-gradient(135deg, var(--brand), #0072CC)",
              borderRadius: "var(--radius-md)",
              fontSize: 15.5,
              fontWeight: 600,
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "transform 0.18s, box-shadow 0.18s",
              boxShadow: "0 8px 28px rgba(0,154,229,0.35)",
              fontFamily: "var(--font-body-family)",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 14px 40px rgba(0,154,229,0.45)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 8px 28px rgba(0,154,229,0.35)"; }}
          >
            Coba Gratis
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 35px",
              background: "transparent",
              borderRadius: "var(--radius-md)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              fontSize: 15.5,
              fontWeight: 600,
              color: "rgba(255,255,255,0.78)",
              textDecoration: "none",
              transition: "border-color 0.18s, color 0.18s, background 0.18s",
              fontFamily: "var(--font-body-family)",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.35)"; el.style.color = "#FFFFFF"; el.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.18)"; el.style.color = "rgba(255,255,255,0.78)"; el.style.background = "transparent"; }}
          >
            Jadwalkan Demo
          </a>
        </div>

        {/* Trust micro-line */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["✓ Gratis 30 hari", "✓ Dampingan Tim Ahli", "✓ Layanan Purna Jual"].map((t) => (
            <span key={t} style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
