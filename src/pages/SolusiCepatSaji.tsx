import { Link } from "react-router";

/* ─── Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: 28,
        display: "flex",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap",
      }}
    >
      {[
        { label: "Beranda", to: "/" },
        { label: "Solusi Bisnis", to: "/" },
        { label: "Cepat Saji", to: null },
      ].map((item, i) => (
        <span
          key={item.label}
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          {i > 0 && (
            <span style={{ fontSize: 12, color: "var(--border)" }}>/</span>
          )}
          {item.to ? (
            <Link
              to={item.to}
              style={{
                fontSize: 13,
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--brand)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--muted-foreground)";
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ─── Multi-outlet Dashboard Visual ─── */
function QsrDashboard() {
  const outlets = [
    {
      name: "Kelapa Gading",
      txTime: "38 dtk",
      txCount: 142,
      compliance: 98,
      status: "ok",
    },
    {
      name: "Sunter",
      txTime: "52 dtk",
      txCount: 96,
      compliance: 91,
      status: "warn",
    },
    {
      name: "Pluit",
      txTime: "41 dtk",
      txCount: 118,
      compliance: 97,
      status: "ok",
    },
    {
      name: "Penjaringan",
      txTime: "67 dtk",
      txCount: 74,
      compliance: 78,
      status: "alert",
    },
  ];

  const recipeItems = [
    { menu: "Nasi Ayam Goreng", status: "ok", note: "Semua outlet sesuai" },
    {
      menu: "Burger Spesial",
      status: "warn",
      note: "2 outlet perlu review porsi",
    },
    { menu: "Minuman Signature", status: "ok", note: "Takaran terstandar" },
  ];

  const statusColor: Record<string, string> = {
    ok: "#0EA86B",
    warn: "#E8820C",
    alert: "#E84545",
  };
  const statusLabel: Record<string, string> = {
    ok: "Normal",
    warn: "Perhatian",
    alert: "Tinjau",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Multi-outlet panel */}
      <div
        style={{
          background: "#111110",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            background: "#17171A",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#27C93F",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.06em",
              }}
            >
              PERFORMA SEMUA OUTLET
            </span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
            Live · 13:05 WIB
          </span>
        </div>
        <div
          style={{
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* Column headers */}
          <div
            className="qsr-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 72px 72px 80px",
              gap: 6,
              padding: "0 4px 4px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {["Outlet", "Waktu Tx", "Transaksi", "Kepatuhan"].map((h) => (
              <span
                key={h}
                className={
                  h === "Waktu Tx" || h === "Transaksi"
                    ? "qsr-hide-sm"
                    : undefined
                }
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {outlets.map((o) => (
            <div
              key={o.name}
              className="qsr-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 72px 72px 80px",
                gap: 6,
                alignItems: "center",
                padding: "6px 4px",
                borderRadius: 7,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: statusColor[o.status],
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.8)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {o.name}
                  </span>
                </div>
                <span className="qsr-meta">
                  {o.txTime} · {o.txCount} tx
                </span>
              </div>
              <span
                className="qsr-hide-sm"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color:
                    o.status === "alert"
                      ? "#E84545"
                      : o.status === "warn"
                        ? "#E8820C"
                        : "rgba(255,255,255,0.7)",
                }}
              >
                {o.txTime}
              </span>
              <span
                className="qsr-hide-sm"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}
              >
                {o.txCount}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div
                  style={{
                    flex: 1,
                    height: 3,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      width: `${o.compliance}%`,
                      height: "100%",
                      background:
                        o.compliance >= 95
                          ? "#0EA86B"
                          : o.compliance >= 85
                            ? "#E8820C"
                            : "#E84545",
                      borderRadius: 2,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: statusColor[o.status],
                    minWidth: 26,
                  }}
                >
                  {o.compliance}%
                </span>
              </div>
            </div>
          ))}
          {/* Alert banner */}
          <div
            style={{
              marginTop: 2,
              background: "rgba(232,69,69,0.08)",
              border: "1px solid rgba(232,69,69,0.2)",
              borderRadius: 7,
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span style={{ fontSize: 10, color: "#E84545" }}>⚠</span>
            <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.6)" }}>
              Penjaringan — waktu transaksi &gt;60 dtk, kepatuhan resep 78%
            </span>
          </div>
        </div>
      </div>

      {/* Recipe compliance + daily tx row */}
      <div
        className="dashboard-split"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
      >
        {/* Recipe compliance */}
        <div
          style={{
            background: "var(--card)",
            borderRadius: 14,
            border: "1px solid var(--border)",
            padding: "14px 14px 12px",
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: 10,
            }}
          >
            Kepatuhan Standar Resep
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {recipeItems.map((r) => (
              <div
                key={r.menu}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: r.status === "ok" ? "#0EA86B" : "#E8820C",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: 1,
                    }}
                  >
                    {r.menu}
                  </p>
                  <p style={{ fontSize: 9, color: "var(--muted-foreground)" }}>
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today aggregate */}
        <div
          style={{
            background: "var(--card)",
            borderRadius: 14,
            border: "1px solid var(--border)",
            padding: "14px 14px 12px",
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: 10,
            }}
          >
            Total Hari Ini · 4 Outlet
          </p>
          <p
            style={{
              fontFamily: "var(--font-display-family)",
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
              marginBottom: 2,
            }}
          >
            430 Tx
          </p>
          <p
            style={{
              fontSize: 10,
              color: "#0EA86B",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            +11% vs kemarin
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              ["Kelapa Gading", 142, 33],
              ["Sunter", 96, 22],
              ["Pluit", 118, 27],
              ["Penjaringan", 74, 17],
            ].map(([label, val, pct]) => (
              <div key={label as string}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 2,
                  }}
                >
                  <span
                    style={{ fontSize: 9.5, color: "var(--muted-foreground)" }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: 9.5,
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    {val} tx
                  </span>
                </div>
                <div
                  style={{
                    height: 3,
                    background: "var(--border)",
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      width: `${Number(pct) * 3}%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, var(--brand), #0072CC)",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      style={{
        paddingTop: "clamp(56px, 7vw, 88px)",
        paddingBottom: "clamp(64px, 8vw, 112px)",
        background:
          "linear-gradient(165deg, #FAFAF8 0%, #FFF7F0 55%, #FEF3E8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: "8%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,130,12,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: "5%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,154,229,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-page">
        <Breadcrumb />
        <div
          className="grid-2col-to-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 6vw, 88px)",
            alignItems: "center",
          }}
        >
          {/* Left copy */}
          <div style={{ maxWidth: 520 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 14px",
                background: "var(--brand-subtle)",
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--brand)",
                }}
              />
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--brand)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Solusi untuk Cepat Saji
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(30px, 3.6vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--foreground)",
                marginBottom: 22,
              }}
            >
              Transaksi Kilat,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand) 0%, #0072CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Konsisten
              </span>{" "}
              di Semua Outlet.
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.2vw, 18px)",
                color: "var(--muted-foreground)",
                lineHeight: 1.68,
                marginBottom: 32,
              }}
            >
              Bisnis cepat saji hidup dari kecepatan dan konsistensi. Mille
              membantu Anda mempercepat transaksi dan menjaga standar menu sama
              persis di setiap cabang.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 28,
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://partner.millehub.com/register-user"
                className="btn btn-primary btn-lg"
              >
                Coba Gratis
              </a>
              <a href="/jadwalkan-demo" className="btn btn-secondary btn-lg">
                Jadwalkan Demo
              </a>
            </div>

            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Gratis 14 hari", "Setup cepat", "Dukungan onboarding"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 13,
                      color: "var(--muted-foreground)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span style={{ color: "#0EA86B", fontWeight: 700 }}>✓</span>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right: dashboard */}
          <QsrDashboard />
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Section ─── */
const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Kecepatan Transaksi Kritis",
    body: "Setiap detik antrean berarti kehilangan potensi pelanggan berikutnya.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="13"
          y="3"
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="3"
          y="13"
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="13"
          y="13"
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
    title: "Banyak Outlet, Beda Standar",
    body: "Rasa dan porsi bisa berbeda antar cabang tanpa sistem yang menyatukan.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M2 2l20 20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Sulit Pantau Semua Outlet",
    body: "Owner tidak selalu bisa hadir fisik di tiap cabang untuk mengecek operasional.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6h18M3 10h18M3 14h10"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M16 17l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Waste Bahan Baku",
    body: "Tanpa data akurat, bahan baku sering terbuang atau justru kurang stok di cabang tertentu.",
  },
];

function ProblemSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        paddingBlock: "clamp(72px, 8vw, 108px)",
      }}
    >
      <div className="container-page">
        <div style={{ maxWidth: 560, marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-display-family)",
              fontWeight: 800,
              fontSize: "clamp(26px, 2.8vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
              marginBottom: 14,
            }}
          >
            Cepat Saji Menuntut Kecepatan dan Konsistensi Sekaligus.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.1vw, 17px)",
              color: "var(--muted-foreground)",
              lineHeight: 1.65,
            }}
          >
            Semakin banyak cabang, semakin kompleks tantangan operasionalnya.
            Standar yang longgar dan data yang tersebar bisa merugikan bisnis
            tanpa Anda sadari.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{
                padding: "28px 26px 30px",
                position: "relative",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.07)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "none";
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  right: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--border)",
                  letterSpacing: "0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "var(--brand-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brand)",
                  marginBottom: 18,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display-family)",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "-0.01em",
                  color: "var(--foreground)",
                  marginBottom: 7,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.6,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features Grid ─── */
const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3 9h18M9 9v12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "POS Kilat",
    desc: "Proses transaksi secepat mungkin — antarmuka sederhana, minim tap, antrean berkurang.",
    link: "Penjualan & Pemesanan",
    color: "var(--brand)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="9"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="13"
          y="3"
          width="9"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="2"
          y="14"
          width="9"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="13"
          y="14"
          width="9"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
    title: "Outlet Management",
    desc: "Pantau performa semua cabang dalam satu dashboard — penjualan, kepatuhan, dan alert real-time.",
    link: "Pengelolaan Toko Cabang",
    color: "#0072CC",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <rect
          x="9"
          y="3"
          width="6"
          height="4"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Standarisasi Resep",
    desc: "Pastikan takaran dan proses produksi sama di setiap outlet — deviasi terdeteksi otomatis.",
    link: "Operasional Bisnis",
    color: "#4A7CF6",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 21V12h6v9"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Inventaris & Distribusi",
    desc: "Kelola pasokan bahan baku ke semua cabang — transfer stok, alert reorder, dan laporan waste.",
    link: "Inventaris & Rantai Pasokan",
    color: "#0EA86B",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M2 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle
          cx="17"
          cy="9"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M14 20c0-2.485 1.343-4 3-4s3 1.515 3 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Karyawan & Shift",
    desc: "Atur jadwal kerja lintas outlet, pantau kehadiran, dan hitung biaya tenaga kerja per cabang.",
    link: "Pengelolaan Karyawan",
    color: "#E8820C",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 20l5-10 4 6 3-4 4 8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="5" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
    title: "Laporan Real-Time",
    desc: "Bandingkan performa penjualan antar cabang kapan saja — identifikasi outlet terbaik dan yang butuh perhatian.",
    link: "Keuangan & Akuntansi",
    color: "#E84545",
  },
];

function FeaturesSection() {
  return (
    <section
      style={{
        background: "var(--background)",
        paddingBlock: "clamp(80px, 9vw, 120px)",
      }}
    >
      <div className="container-page">
        <div
          className="grid-2col-to-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 4vw, 72px)",
            alignItems: "end",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}
        >
          <div>
            <p className="type-eyebrow" style={{ marginBottom: 14 }}>
              Fitur untuk Cepat Saji
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(26px, 2.8vw, 42px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--foreground)",
              }}
            >
              Semua yang Dibutuhkan Cepat Saji, dalam Satu Platform.
            </h2>
          </div>
          <p
            style={{
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: "var(--muted-foreground)",
              lineHeight: 1.7,
            }}
          >
            Mille mengintegrasikan kasir, manajemen multi-outlet, standar resep,
            dan distribusi bahan baku — dalam satu sistem yang bisa dipantau
            dari mana saja.
          </p>
        </div>

        <div
          className="grid-3col-to-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "26px 26px 22px",
                display: "flex",
                flexDirection: "column",
                transition:
                  "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 10px 32px ${f.color}12`;
                el.style.borderColor = f.color + "40";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--border)";
                el.style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: f.color + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: f.color,
                  marginBottom: 18,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display-family)",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "-0.015em",
                  color: "var(--foreground)",
                  marginBottom: 7,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: 16,
                }}
              >
                {f.desc}
              </p>
              <a
                href="#"
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: f.color,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  transition: "gap 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "9px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "5px";
                }}
              >
                {f.link}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── OptiMille Section ─── */
function OptiMilleSection() {
  const outletPerf = [
    { name: "Kelapa Gading", delta: "+14%", pct: 82, trend: "up" },
    { name: "Pluit", delta: "+9%", pct: 71, trend: "up" },
    { name: "Sunter", delta: "-3%", pct: 54, trend: "down", warn: true },
    { name: "Penjaringan", delta: "-11%", pct: 32, trend: "down", alert: true },
  ];

  return (
    <section
      style={{
        background: "#0E0E10",
        paddingBlock: "clamp(72px, 8vw, 112px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "25%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,154,229,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-page"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="grid-2col-to-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "start",
          }}
        >
          {/* Left: AI chat */}
          <div
            style={{
              background: "#17171A",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                background: "#111113",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, var(--brand), #0072CC)",
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
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                OPTIMILLE — CEPAT SAJI
              </span>
            </div>

            <div style={{ padding: "18px 18px 14px" }}>
              {/* User question */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    background: "rgba(0,154,229,0.16)",
                    border: "1px solid rgba(0,154,229,0.22)",
                    borderRadius: "14px 14px 3px 14px",
                    padding: "9px 14px",
                    maxWidth: "85%",
                  }}
                >
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
                    Outlet mana yang performanya menurun minggu ini?
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: "flex", gap: 9, marginBottom: 14 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    background:
                      "linear-gradient(135deg, var(--brand), #0072CC)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      background: "#1C1C22",
                      borderRadius: "3px 14px 14px 14px",
                      padding: "14px 16px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: 8,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      Tren Performa Outlet — 7 Hari
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginBottom: 12,
                      }}
                    >
                      {outletPerf.map((o) => (
                        <div key={o.name}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 3,
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                color: "rgba(255,255,255,0.7)",
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                              }}
                            >
                              {o.alert && (
                                <span style={{ fontSize: 9, color: "#E84545" }}>
                                  ▼
                                </span>
                              )}
                              {o.warn && (
                                <span style={{ fontSize: 9, color: "#E8820C" }}>
                                  ▼
                                </span>
                              )}
                              {!o.alert && !o.warn && (
                                <span style={{ fontSize: 9, color: "#0EA86B" }}>
                                  ▲
                                </span>
                              )}
                              {o.name}
                            </span>
                            <span
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                color: o.alert
                                  ? "#E84545"
                                  : o.warn
                                    ? "#E8820C"
                                    : "#0EA86B",
                              }}
                            >
                              {o.delta}
                            </span>
                          </div>
                          <div
                            style={{
                              height: 4,
                              background: "rgba(255,255,255,0.06)",
                              borderRadius: 2,
                            }}
                          >
                            <div
                              style={{
                                width: `${o.pct}%`,
                                height: "100%",
                                background: o.alert
                                  ? "#E84545"
                                  : o.warn
                                    ? "#E8820C"
                                    : "linear-gradient(90deg, var(--brand), #0072CC)",
                                borderRadius: 2,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Recommendations per outlet */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(232,69,69,0.08)",
                          borderRadius: 8,
                          padding: "8px 12px",
                          border: "1px solid rgba(232,69,69,0.2)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: "#E84545", fontWeight: 700 }}>
                            Penjaringan −11%:{" "}
                          </span>
                          Waktu transaksi &gt;60 dtk dan kepatuhan resep 78% —
                          cek kapasitas karyawan dan update SOP produksi.
                        </p>
                      </div>
                      <div
                        style={{
                          background: "rgba(232,130,12,0.08)",
                          borderRadius: 8,
                          padding: "8px 12px",
                          border: "1px solid rgba(232,130,12,0.2)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: "#E8820C", fontWeight: 700 }}>
                            Sunter −3%:{" "}
                          </span>
                          Stok bahan baku di bawah threshold — jadwalkan
                          distribusi dari gudang pusat.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {[
                      "Detail Penjaringan",
                      "Bandingkan semua outlet",
                      "Jadwalkan distribusi stok",
                    ].map((s) => (
                      <button
                        key={s}
                        style={{
                          padding: "5px 10px",
                          borderRadius: 20,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          fontSize: 10.5,
                          color: "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                          fontFamily: "var(--font-body-family)",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(0,154,229,0.14)";
                          e.currentTarget.style.color =
                            "rgba(255,255,255,0.85)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.05)";
                          e.currentTarget.style.color = "rgba(255,255,255,0.5)";
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
                  gap: 8,
                  background: "#111113",
                  borderRadius: 10,
                  padding: "8px 12px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    flex: 1,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.2)",
                    fontStyle: "italic",
                  }}
                >
                  Tanya tentang outlet, stok, atau performa cabang...
                </p>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 7,
                    background:
                      "linear-gradient(135deg, var(--brand), #0072CC)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8l12-6-5 6 5 6-12-6z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div style={{ paddingTop: 16 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 13px",
                background: "rgba(0,154,229,0.12)",
                borderRadius: 999,
                border: "1px solid rgba(0,154,229,0.2)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  background: "linear-gradient(135deg, var(--brand), #0072CC)",
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
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--brand-light)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                OptiMille untuk Cepat Saji
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(26px, 2.8vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
                marginBottom: 18,
              }}
            >
              Tahu Outlet Mana yang Butuh Perhatian,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--brand), #0072CC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tanpa Harus Datang Langsung.
              </span>
            </h2>

            <p
              style={{
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              OptiMille memantau performa setiap cabang secara real-time — dari
              kecepatan transaksi hingga kepatuhan resep — dan langsung
              memberikan rekomendasi tindakan yang konkret.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 32,
              }}
            >
              {[
                {
                  label:
                    "Deteksi outlet bermasalah sebelum berdampak ke revenue",
                  color: "var(--brand)",
                },
                {
                  label: "Pantau kepatuhan standar resep per cabang otomatis",
                  color: "#0072CC",
                },
                {
                  label: "Rekomendasi distribusi stok antar outlet",
                  color: "#4A7CF6",
                },
                {
                  label: "Bandingkan performa antar cabang dalam satu tampilan",
                  color: "#0EA86B",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "linear-gradient(135deg, var(--brand), #0072CC)",
                borderRadius: "var(--radius-md)",
                fontSize: 14,
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "transform 0.18s, box-shadow 0.18s",
                boxShadow: "0 4px 20px rgba(0,154,229,0.3)",
                fontFamily: "var(--font-body-family)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 8px 28px rgba(0,154,229,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "none";
                el.style.boxShadow = "0 4px 20px rgba(0,154,229,0.3)";
              }}
            >
              Kenali OptiMille
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
    </section>
  );
}

/* ─── Testimonial ─── */
function TestimonialSection() {
  return (
    <section
      style={{
        background: "var(--background)",
        paddingBlock: "clamp(72px, 8vw, 108px)",
      }}
    >
      <div className="container-page">
        <div
          className="testimonial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "center",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <div
            className="testimonial-image"
            style={{ position: "relative", minHeight: 440 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=680&fit=crop&auto=format"
              alt="Outlet restoran cepat saji modern"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                position: "absolute",
                inset: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(17,17,16,0.75) 0%, rgba(17,17,16,0.1) 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 28px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "5px 12px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 7,
                  border: "1px solid rgba(255,255,255,0.14)",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    background: "var(--brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 7, fontWeight: 800, color: "#fff" }}>
                    CL
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  [Customer Logo]
                </span>
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display-family)",
                  marginBottom: 2,
                }}
              >
                [Customer Name]
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                [Position] · [Business Name]
              </p>
            </div>
          </div>

          {/* Quote */}
          <div
            style={{
              padding:
                "clamp(32px, 4vw, 52px) clamp(28px, 4vw, 52px) clamp(32px, 4vw, 52px) 0",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 88,
                lineHeight: 0.6,
                color: "var(--brand)",
                opacity: 0.15,
                marginBottom: 20,
                userSelect: "none",
              }}
            >
              "
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 600,
                fontSize: "clamp(18px, 1.8vw, 24px)",
                lineHeight: 1.48,
                letterSpacing: "-0.018em",
                color: "var(--foreground)",
                margin: 0,
                marginBottom: 28,
              }}
            >
              "Sekarang kami bisa pantau semua cabang dari satu layar, dan rasa
              menu tetap konsisten di mana pun."
            </blockquote>
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "var(--foreground)",
                  fontFamily: "var(--font-display-family)",
                  marginBottom: 2,
                }}
              >
                [Customer Name]
              </p>
              <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
                [Position] · [Business Name]
              </p>
            </div>
            <span className="badge badge-brand">Cepat Saji</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Closing CTA ─── */
function ClosingCTA() {
  return (
    <section
      style={{
        background: "var(--foreground)",
        paddingBlock: "clamp(64px, 8vw, 104px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "8%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,154,229,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,114,204,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-page"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <p
          className="type-eyebrow"
          style={{ color: "rgba(255,255,255,0.4)", marginBottom: 16 }}
        >
          Mulai Sekarang
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display-family)",
            fontWeight: 800,
            fontSize: "clamp(26px, 3.2vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.028em",
            color: "#FFFFFF",
            maxWidth: 640,
            margin: "0 auto 16px",
          }}
        >
          Siap Menyamakan Standar di Semua Outlet Anda?
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 1.1vw, 17px)",
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.68,
            maxWidth: 480,
            margin: "0 auto 36px",
          }}
        >
          Tim Mille siap membantu Anda merancang sistem yang menjaga konsistensi
          dan kecepatan di setiap cabang.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <a
            href="/jadwalkan-demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 34px",
              background: "linear-gradient(135deg, var(--brand), #0072CC)",
              borderRadius: "var(--radius-md)",
              fontSize: 15,
              fontWeight: 600,
              color: "#FFFFFF",
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(0,154,229,0.35)",
              fontFamily: "var(--font-body-family)",
              transition: "transform 0.18s, box-shadow 0.18s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 14px 40px rgba(0,154,229,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "none";
              el.style.boxShadow = "0 8px 28px rgba(0,154,229,0.35)";
            }}
          >
            Jadwalkan Demo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://partner.millehub.com/register-user"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 33px",
              background: "transparent",
              borderRadius: "var(--radius-md)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              fontSize: 15,
              fontWeight: 600,
              color: "rgba(255,255,255,0.78)",
              textDecoration: "none",
              fontFamily: "var(--font-body-family)",
              transition: "border-color 0.18s, color 0.18s, background 0.18s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.color = "#FFFFFF";
              el.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.18)";
              el.style.color = "rgba(255,255,255,0.78)";
              el.style.background = "transparent";
            }}
          >
            Coba Gratis
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "✓ Gratis 14 hari",
            "✓ Tanpa kartu kredit",
            "✓ Setup dalam 30 menit",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page root ─── */
export default function SolusiCepatSaji() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <OptiMilleSection />
      <TestimonialSection />
      <ClosingCTA />
    </>
  );
}
