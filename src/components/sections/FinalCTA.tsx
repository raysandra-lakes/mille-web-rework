export default function FinalCTA() {
  return (
    <section
      style={{
        background: "var(--background)",
        height: 409,
        paddingTop: 57,
        paddingBottom: 57,
      }}
    >
      <div className="container-page">
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 80px)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
          className="final-cta-grid"
        >
          {/* Subtle brand glow */}
          <div style={{ position: "absolute", top: "-80%", right: "15%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,154,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Left: copy */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <p className="type-eyebrow" style={{ marginBottom: 14 }} />
            <h2
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(26px, 2.8vw, 42px)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                color: "var(--foreground)",
                marginBottom: 14,
              }}
            >
              Mari Temukan Solusi yang Tepat untuk Bisnis Anda.
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.1vw, 17px)", color: "var(--muted-foreground)", lineHeight: 1.65, maxWidth: 480 }}>
              Ceritakan kebutuhan dan tantangan bisnis Anda. Tim Mille siap membantu menemukan solusi yang sesuai.
            </p>
          </div>

          {/* Right: CTAs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "stretch",
              minWidth: 200,
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="#"
              className="btn btn-primary"
              style={{ justifyContent: "center", fontSize: 15, padding: "15px 28px" }}
            >
              Jadwalkan Demo
            </a>
            <a
              href="#"
              className="btn btn-secondary"
              style={{ justifyContent: "center", fontSize: 15, padding: "14px 27px" }}
            >
              Coba Gratis 30 Hari
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
