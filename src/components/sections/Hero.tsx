import { useState, useEffect } from "react";

/* ─── Mini sparkline SVG ─── */
function Sparkline({ color = "var(--brand)", values }: { color?: string; values: number[] }) {
  const w = 80, h = 28;
  const max = Math.max(...values), min = Math.min(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x},${y}`;
  });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline points={pts.join(" ")} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1].split(",")[0]} cy={pts[pts.length - 1].split(",")[1]} r="2.5" fill={color} />
    </svg>
  );
}

/* ─── Dashboard visual (right column) ─── */
function DashboardVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 3200);
    return () => clearInterval(t);
  }, []);

  const sales = [42, 58, 51, 70, 65, 80, 74, 92, 85, 98, 91, 107];
  const bars = [60, 45, 72, 55, 88, 65, 78];
  const outlets = [
    { name: "Grand Indonesia", rev: "Rp 18.4jt", pct: 82, trend: "+8%" },
    { name: "Senayan City", rev: "Rp 14.1jt", pct: 64, trend: "+3%" },
    { name: "SCBD Tower", rev: "Rp 11.7jt", pct: 53, trend: "+12%" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 560 }}>
      {/* Main dashboard card */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 20,
          border: "1px solid var(--border)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        {/* Dashboard header bar */}
        <div style={{ background: "var(--foreground)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 5 }}>
              {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>MILLE DASHBOARD</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ padding: "3px 10px", background: "rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
              Agustus 2025
            </div>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#27C93F" }} />
          </div>
        </div>

        <div style={{ padding: "20px 20px 4px" }}>
          {/* KPI row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
            {[
              { label: "Total Penjualan", value: "Rp 287jt", delta: "+14%", color: "var(--brand)" },
              { label: "Transaksi", value: "4.821", delta: "+7%", color: "#0072CC" },
              { label: "Laba Bersih", value: "Rp 61jt", delta: "+19%", color: "#0EA86B" },
            ].map((kpi) => (
              <div key={kpi.label} style={{ background: "var(--background)", borderRadius: 10, padding: "10px 12px", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: 10, color: "var(--muted-foreground)", marginBottom: 4, fontWeight: 500 }}>{kpi.label}</p>
                <p style={{ fontSize: 15, fontWeight: 700, fontFamily: "var(--font-display-family)", color: "var(--foreground)", letterSpacing: "-0.02em" }}>{kpi.value}</p>
                <p style={{ fontSize: 10, color: kpi.color, fontWeight: 600, marginTop: 2 }}>{kpi.delta} vs bulan lalu</p>
              </div>
            ))}
          </div>

          {/* Sales chart + Outlet performance row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
            {/* Bar chart */}
            <div style={{ background: "var(--background)", borderRadius: 10, padding: "12px 14px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "var(--foreground)", marginBottom: 10 }}>Penjualan Harian</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 44 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: "3px 3px 0 0",
                      background: i === bars.length - 1
                        ? "linear-gradient(180deg, var(--brand), #0072CC)"
                        : "var(--border)",
                      transition: "height 0.6s ease",
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
                  <span key={d} style={{ fontSize: 9, color: "var(--muted-foreground)" }}>{d}</span>
                ))}
              </div>
            </div>

            {/* Outlet performance */}
            <div style={{ background: "var(--background)", borderRadius: 10, padding: "12px 14px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "var(--foreground)", marginBottom: 8 }}>Performa Outlet</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {outlets.map((o) => (
                  <div key={o.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 9.5, color: "var(--foreground)", fontWeight: 500 }}>{o.name}</span>
                      <span style={{ fontSize: 9, color: "#0EA86B", fontWeight: 600 }}>{o.trend}</span>
                    </div>
                    <div style={{ height: 4, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ width: `${o.pct}%`, height: "100%", background: "linear-gradient(90deg, var(--brand), #0072CC)", borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: inventory + employee + customer */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
            {/* Inventory */}
            <div style={{ background: "var(--background)", borderRadius: 10, padding: "10px 12px", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: "var(--foreground)" }}>Inventaris</p>
                <span style={{ fontSize: 9, color: "#E8820C", fontWeight: 600, background: "#FEF3E2", padding: "2px 6px", borderRadius: 4 }}>3 stok rendah</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[["Arabika", 82], ["Susu UHT", 34], ["Cup 16oz", 18]].map(([n, p]) => (
                  <div key={n as string}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 9, color: "var(--muted-foreground)" }}>{n}</span>
                      <span style={{ fontSize: 9, color: (p as number) < 30 ? "#E8820C" : "var(--muted-foreground)" }}>{p}%</span>
                    </div>
                    <div style={{ height: 3, background: "var(--border)", borderRadius: 2, overflow: "hidden", marginTop: 2 }}>
                      <div style={{ width: `${p}%`, height: "100%", background: (p as number) < 30 ? "#E8820C" : "#0EA86B", borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee */}
            <div style={{ background: "var(--background)", borderRadius: 10, padding: "10px 12px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>Karyawan Aktif</p>
              <p style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-display-family)", color: "var(--foreground)", letterSpacing: "-0.03em" }}>47</p>
              <p style={{ fontSize: 9, color: "var(--muted-foreground)", marginBottom: 6 }}>dari 52 terdaftar</p>
              <div style={{ display: "flex", gap: -4 }}>
                {["var(--brand)", "#0072CC", "var(--brand-light)", "#0EA86B", "#4A7CF6"].map((c, i) => (
                  <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i > 0 ? -6 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 7, color: "#fff", fontWeight: 700 }}>{["A", "B", "C", "D", "E"][i]}</span>
                  </div>
                ))}
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--border)", border: "2px solid #fff", marginLeft: -6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 7, color: "var(--muted-foreground)", fontWeight: 600 }}>+42</span>
                </div>
              </div>
            </div>

            {/* Customer */}
            <div style={{ background: "var(--background)", borderRadius: 10, padding: "10px 12px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>Pelanggan</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 2 }}>
                <p style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-display-family)", color: "var(--foreground)", letterSpacing: "-0.03em" }}>12.4K</p>
                <span style={{ fontSize: 9, color: "#0EA86B", fontWeight: 600 }}>+328 baru</span>
              </div>
              <Sparkline color="var(--brand)" values={[30, 42, 38, 55, 50, 68, 64, 80, 75, 92, 88, 105]} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating OptiMille insight card */}
      <div
        style={{
          position: "absolute",
          bottom: -24,
          left: -28,
          background: "#FFFFFF",
          borderRadius: 14,
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          padding: "14px 18px",
          maxWidth: 220,
          animation: "floatCard 5s ease-in-out infinite",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg, var(--brand), #0072CC)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z" fill="white" /></svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--brand)", fontFamily: "var(--font-display-family)" }}>OptiMille</span>
        </div>
        <p style={{ fontSize: 11.5, color: "var(--foreground)", fontWeight: 600, lineHeight: 1.4, marginBottom: 4 }}>
          Penjualan akhir pekan 34% lebih tinggi
        </p>
        <p style={{ fontSize: 10.5, color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          Pertimbangkan menambah shift Sabtu–Minggu di outlet Senayan
        </p>
      </div>

      {/* Floating keuangan card */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: -32,
          background: "#FFFFFF",
          borderRadius: 14,
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          padding: "12px 16px",
          maxWidth: 180,
          animation: "floatCard 6s ease-in-out infinite 1s",
        }}
      >
        <p style={{ fontSize: 10, color: "var(--muted-foreground)", marginBottom: 3, fontWeight: 500 }}>Arus Kas Bulan Ini</p>
        <p style={{ fontSize: 17, fontWeight: 800, fontFamily: "var(--font-display-family)", color: "var(--foreground)", letterSpacing: "-0.025em" }}>+Rp 43.2jt</p>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#0EA86B", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M4 6V2M2 4l2-2 2 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" /></svg>
          </div>
          <span style={{ fontSize: 10, color: "#0EA86B", fontWeight: 600 }}>+23% vs bulan lalu</span>
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

/* ─── Hero Section ─── */
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "clamp(640px, 82vh, 760px)",
        paddingTop: "clamp(120px, 14vw, 168px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--foreground)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        {...{ "webkit-playsinline": "true" }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/assets/video/mille-hero-banner.webm" type="video/webm" />
      </video>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(5,12,18,0.52) 0%, rgba(5,12,18,0.46) 48%, rgba(5,12,18,0.62) 100%)",
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 15px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", borderRadius: 999, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#69CFFF", boxShadow: "0 0 0 4px rgba(105,207,255,0.15)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                SISTEM ERP UNTUK F&amp;B, RITEL, DAN JASA
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display-family)",
                fontWeight: 800,
                fontSize: "clamp(38px, 4.2vw, 60px)",
                lineHeight: 1.07,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              Satu Sistem untuk{" "}
              <span
                className="shimmer-blue"
              >
                Mengelola, Memahami,
              </span>
              {" "}
              dan Mengembangkan Bisnis
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 1.3vw, 19px)",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Mille membantu bisnis menghubungkan penjualan, operasional, transaksi, inventaris, karyawan, pelanggan, keuangan, serta didukung oleh Artificial Intelligence (AI) dalam satu sistem terintegrasi.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
              <a
                href="#"
                className="btn btn-primary btn-lg"
                style={{ gap: 8, boxShadow: "0 12px 36px rgba(0,154,229,0.35)" }}
              >
                Coba Gratis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#" className="btn btn-secondary btn-lg" style={{ color: "#FFFFFF", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", backdropFilter: "blur(12px)" }}>
                Jadwalkan Demo
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
