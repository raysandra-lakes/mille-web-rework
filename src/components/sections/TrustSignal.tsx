/* Generic placeholders only — never use real brand names without verified client data */
const count = 8;

export default function TrustSignal() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--background)",
        padding: "36px 0",
      }}
    >
      <div className="container-page">
        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--muted-foreground)",
            letterSpacing: "0.02em",
            marginBottom: 28,
          }}
        >
          Dipercaya oleh bisnis yang terus bertumbuh
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 18px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--card)",
                opacity: 0.65,
                transition: "opacity 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.65";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Mark placeholder */}
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 6,
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
                  whiteSpace: "nowrap",
                }}
              >
                [Customer Logo]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
