
/* OptiMille signature section */

const ORANGE = "#F28C28";
const ORANGE_LIGHT = "#FFAB52";
const ORANGE_DARK = "#C96A12";

const steps = [
  {
    num: "01",
    label: "Data",
    detail: "Seluruh data bisnis terkumpul otomatis — transaksi, stok, karyawan, keuangan.",
    color: "#F8B36B",
  },
  {
    num: "02",
    label: "Analisis",
    detail: "Data diproses dan dipadukan lintas area operasional secara real-time.",
    color: "#F49A45",
  },
  {
    num: "03",
    label: "Insight",
    detail: "Pola bisnis ditemukan — tren penjualan, anomali stok, perilaku pelanggan.",
    color: ORANGE,
  },
  {
    num: "04",
    label: "Rekomendasi",
    detail: "Peluang dan masalah teridentifikasi dengan konteks yang relevan.",
    color: ORANGE_DARK,
  },
  {
    num: "05",
    label: "Keputusan",
    detail: "Pemilik bisnis dapat bertindak dengan arah yang lebih tepat dan percaya diri.",
    color: "#0EA86B",
  },
];


/* AI Chat Screenshot */
function AIChatScreenshot() {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.2)",
        background: "#0E0E10",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <img
        src="/mille-ai-sales-analytics-dashboard.png"
        alt="Mille AI menganalisis data penjualan outlet secara otomatis"
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

/* Main OptiMille Section */
export default function OptiMilleSection() {
  return (
    <section
      style={{
        background: "#0E0E10",
        paddingBlock: "clamp(80px, 9vw, 128px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242,140,40,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,106,18,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 5vw, 72px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 14px",
              background: "rgba(242, 141, 40, 0.27)",
              borderRadius: 999,
              border: "1px solid rgba(242,140,40,0.2)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/mille-partner-logo.png" alt="mille-partner" style={{
                width: 30,
                height: 30,
              }} />
            </div>

            <span
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: ORANGE_LIGHT,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              OptiMille AI Intelligence
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display-family)",
              fontWeight: 800,
              fontSize: "clamp(28px, 3.2vw, 50px)",
              lineHeight: 1.1,
              letterSpacing: "-0.028em",
              color: "#FFFFFF",
              maxWidth: 700,
              margin: "0 auto 18px",
            }}
          >
            Data Tidak Hanya untuk Dilihat.{" "}
            <span
              className="shimmer-orange"
            >
              Gunakan untuk Mengambil Keputusan.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            OptiMille membantu Anda memahami data bisnis, menemukan insight, dan mendapatkan
            rekomendasi untuk mengambil keputusan dengan lebih terarah.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className="grid-2col-to-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "start",
          }}
        >
          {/* Left: AI chat UI */}
          <AIChatScreenshot />

          {/* Right: Process steps */}
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 32,
              }}
            >
              Cara Kerja OptiMille
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    gap: 20,
                    position: "relative",
                  }}
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 19,
                        top: 44,
                        bottom: -24,
                        width: 1.5,
                        background: `linear-gradient(180deg, ${step.color}55, ${steps[i + 1].color}20)`,
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Number circle */}
                  <div
                    style={{
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: `${step.color}18`,
                        border: `1.5px solid ${step.color}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow:
                          i === 2
                            ? "0 0 22px rgba(242,140,40,0.18)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: step.color,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: 28, paddingTop: 8 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display-family)",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#FFFFFF",
                        marginBottom: 5,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.label}
                    </p>

                    <p
                      style={{
                        fontSize: 13.5,
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: 16,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <a
                href="/optimille"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                  borderRadius: "var(--radius-md)",
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px rgba(242,140,40,0.3)",
                  fontFamily: "var(--font-body-family)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 8px 32px rgba(242,140,40,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "0 4px 20px rgba(242,140,40,0.3)";
                }}
              >
                Kenali OptiMille
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
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
        </div>
      </div>
    </section>
  );
}
