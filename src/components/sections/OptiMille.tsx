
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

/* AI Chat UI */
function AIChatInterface() {
  const insights = [
    { label: "Penjualan", value: "↑ 14%", sub: "vs bulan lalu", color: "#0EA86B" },
    { label: "Produk Terlaris", value: "Arabika Latte", sub: "312 porsi terjual", color: ORANGE },
    { label: "Outlet Terbaik", value: "Grand Indonesia", sub: "Rp 18.4jt revenue", color: ORANGE_LIGHT },
    { label: "Margin Rata-rata", value: "62.3%", sub: "+3.1pp vs target", color: "#F8B36B" },
  ];

  return (
    <div
      style={{
        background: "#0E0E10",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.2)",
        fontFamily: "var(--font-body-family)",
        userSelect: "none",
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          background: "#17171A",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
            <div
              key={c}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: c,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            OPTIMILLE
          </span>
        </div>

        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#27C93F",
          }}
        />
      </div>

      <div style={{ padding: "20px" }}>
        {/* User question bubble */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
          <div
            style={{
              background: "rgba(242,140,40,0.16)",
              border: "1px solid rgba(242,140,40,0.25)",
              borderRadius: "16px 16px 4px 16px",
              padding: "10px 16px",
              maxWidth: "82%",
            }}
          >
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.88)", lineHeight: 1.5 }}>
              Bagaimana performa bisnis saya bulan ini?
            </p>
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9,
              background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z"
                fill="white"
              />
            </svg>
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                background: "#1C1C20",
                borderRadius: "4px 16px 16px 16px",
                padding: "14px 16px",
                border: "1px solid rgba(255,255,255,0.07)",
                marginBottom: 10,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 8,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                Ringkasan Performa — Agustus 2025
              </p>

              <p
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                Bisnis Anda menunjukkan pertumbuhan yang kuat bulan ini. Total penjualan mencapai{" "}
                <strong style={{ color: ORANGE }}>Rp 287 juta</strong>, meningkat 14% dibanding Juli.
                Margin bersih juga membaik ke{" "}
                <strong style={{ color: "#0EA86B" }}>62.3%</strong>.
              </p>

              {/* Insight grid */}
              <div
                className="grid-2col-tight"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                {insights.map((ins) => (
                  <div
                    key={ins.label}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: 3,
                        fontWeight: 500,
                      }}
                    >
                      {ins.label}
                    </p>

                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: ins.color,
                        fontFamily: "var(--font-display-family)",
                        letterSpacing: "-0.02em",
                        marginBottom: 1,
                      }}
                    >
                      {ins.value}
                    </p>

                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
                      {ins.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trend spark */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 600,
                    }}
                  >
                    TREN PENJUALAN 30 HARI
                  </p>
                  <span style={{ fontSize: 10, color: "#0EA86B", fontWeight: 600 }}>
                    +14%
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 32 }}>
                  {[38, 52, 44, 62, 55, 70, 60, 78, 68, 85, 74, 92, 82, 98, 88].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: "2px 2px 0 0",
                        background:
                          i === 14
                            ? `linear-gradient(180deg, ${ORANGE_LIGHT}, ${ORANGE_DARK})`
                            : `rgba(242,140,40,${0.15 + (i / 14) * 0.3})`,
                        transition: "height 0.4s",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div
                style={{
                  background: "rgba(242,140,40,0.08)",
                  borderRadius: 10,
                  padding: "10px 14px",
                  border: "1px solid rgba(242,140,40,0.18)",
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 5,
                      background: "rgba(242,140,40,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v4M5 7.5v1"
                        stroke={ORANGE_LIGHT}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <p
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.55,
                    }}
                  >
                    <strong style={{ color: ORANGE_LIGHT }}>Rekomendasi:</strong> Outlet SCBD
                    menunjukkan pertumbuhan tertinggi (+12%). Pertimbangkan menambah kapasitas
                    atau jam operasional.
                  </p>
                </div>
              </div>
            </div>

            {/* Suggested action */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[
                "Lihat detail per outlet",
                "Analisis stok bulan ini",
                "Bandingkan dengan Juli",
              ].map((s) => (
                <button
                  key={s}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 11.5,
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    fontFamily: "var(--font-body-family)",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(242,140,40,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            background: "#17171A",
            borderRadius: 12,
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              flex: 1,
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
              fontStyle: "italic",
            }}
          >
            Tanya tentang bisnis Anda...
          </p>

          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 8l12-6-5 6 5 6-12-6z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
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
              background: "rgba(242,140,40,0.12)",
              borderRadius: 999,
              border: "1px solid rgba(242,140,40,0.2)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 5,
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z"
                  fill="white"
                />
              </svg>
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
          <AIChatInterface />

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
                href="#"
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
