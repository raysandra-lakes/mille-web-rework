/* Customer logo wall — generic placeholders only; never use real brand names without verified client data */

const customers = [
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "Ritel" },
  { label: "[Customer Logo]", sector: "Ritel" },
  { label: "[Customer Logo]", sector: "Ritel" },
  { label: "[Customer Logo]", sector: "Salon & Spa" },
  { label: "[Customer Logo]", sector: "F&B" },
  { label: "[Customer Logo]", sector: "Service" },
];

function LogoPlaceholder({ sector }: { sector: string }) {
  return (
    <div
      title={sector}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 20px",
        border: "1px solid var(--border)",
        borderRadius: 10,
        background: "var(--card)",
        transition: "border-color 0.2s, opacity 0.2s",
        opacity: 0.6,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "1";
        el.style.borderColor = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "0.6";
        el.style.borderColor = "var(--border)";
      }}
    >
      {/* Monochrome mark placeholder */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--muted-foreground)",
          fontFamily: "var(--font-body-family)",
          whiteSpace: "nowrap",
          letterSpacing: "0.01em",
        }}
      >
        [Customer Logo]
      </span>
    </div>
  );
}

export default function CustomerLogos() {
  return (
    <section style={{ background: "var(--surface)", paddingBlock: "clamp(72px, 8vw, 112px)", height: 520 }}>
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 4vw, 60px)" }}>
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
            Dipercaya oleh Bisnis yang Terus Bertumbuh.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.1vw, 17px)",
              color: "var(--muted-foreground)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Mille digunakan oleh berbagai bisnis untuk membantu mengelola operasional dan mendukung pertumbuhan mereka.
          </p>
        </div>

        {/* Logo wall */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {customers.map((c, i) => (
            <LogoPlaceholder key={i} sector={c.sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
