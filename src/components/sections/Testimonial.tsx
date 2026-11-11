export default function Testimonial() {
  return (
    <section style={{ background: "var(--background)", paddingBlock: "clamp(80px, 9vw, 128px)" }}>
      <div className="container-page">
        {/* Section label */}
        <p className="type-eyebrow" style={{ marginBottom: 40, textAlign: "center" }}>Cerita dari Pengguna Mille</p>

        <div
          className="testimonial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "center",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
          }}
        >
          {/* Left: business image + identity */}
          <div className="testimonial-image" style={{ position: "relative", minHeight: 480 }}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&h=720&fit=crop&auto=format"
              alt="Suasana restoran modern"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
            />
            {/* Dark overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,16,0.75) 0%, rgba(17,17,16,0.15) 60%)" }} />

            {/* Business identity at bottom of image */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px" }}>
              {/* Logo placeholder */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", marginBottom: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8, fontWeight: 800, color: "#fff" }}>NR</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.02em" }}>[Customer Logo]</span>
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-display-family)", marginBottom: 2 }}>[Customer Name]</p>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)" }}>[Position] · [Business Name]</p>
            </div>
          </div>

          {/* Right: quote */}
          <div style={{ padding: "clamp(36px, 4vw, 56px) clamp(32px, 4vw, 56px) clamp(36px, 4vw, 56px) 0" }}>
            {/* Large decorative quote mark */}
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 96,
                lineHeight: 0.6,
                color: "var(--brand)",
                opacity: 0.18,
                marginBottom: 24,
                userSelect: "none",
              }}
            >
              "
            </div>

            <blockquote
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 600,
                fontSize: "clamp(20px, 2vw, 28px)",
                lineHeight: 1.45,
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
                margin: 0,
                marginBottom: 32,
              }}
            >
              "Mille membantu kami mengelola operasional dengan lebih mudah, terutama ketika bisnis kami semakin berkembang."
            </blockquote>

            <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 36 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "var(--foreground)", fontFamily: "var(--font-display-family)" }}>[Customer Name]</p>
              <p style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>[Position] · [Business Name]</p>
            </div>

            {/* Metrics placeholder row */}
            <div
              className="testimonial-metrics"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "var(--border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              {[
                { value: "XX", unit: "Outlet", label: "Dikelola dengan Mille" },
                { value: "XX%", unit: "", label: "Efisiensi Operasional" },
                { value: "XX%", unit: "", label: "Pertumbuhan Bisnis" },
              ].map((m) => (
                <div key={m.label} style={{ background: "var(--surface)", padding: "16px 14px", textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display-family)",
                      fontWeight: 800,
                      fontSize: 24,
                      letterSpacing: "-0.03em",
                      color: "var(--foreground)",
                      marginBottom: 2,
                    }}
                  >
                    {m.value}
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{m.unit}</span>
                  </p>
                  <p style={{ fontSize: 11, color: "var(--muted-foreground)", lineHeight: 1.4 }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div style={{ display: "flex", gap: 6, marginTop: 24 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 0 ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === 0 ? "var(--brand)" : "var(--border)",
                    transition: "width 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
