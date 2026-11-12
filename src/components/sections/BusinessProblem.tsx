import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* HOOK: animasi dimulai saat elemen masuk layar                       */
/* ------------------------------------------------------------------ */

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen] as const;
}

/* ------------------------------------------------------------------ */
/* ILUSTRASI (SVG inline, warna mengikuti --brand)                     */
/* ------------------------------------------------------------------ */

function ArtTransactions() {
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      {/* Struk transaksi */}
      <rect x="24" y="22" width="112" height="136" rx="12" fill="var(--card)" stroke="var(--border)" />
      <g className="bp-rows">
        {[46, 70, 94].map((y) => (
          <g key={y}>
            <circle cx="44" cy={y} r="7" fill="currentColor" fillOpacity=".18" />
            <path d={`M41 ${y}l2.4 2.4L48 ${y - 3}`} stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="58" y={y - 5} width="48" height="4" rx="2" fill="var(--border)" />
            <rect x="58" y={y + 2} width="30" height="3" rx="1.5" fill="var(--border)" />
            <rect x="112" y={y - 3} width="14" height="5" rx="2.5" fill="currentColor" fillOpacity=".45" />
          </g>
        ))}
      </g>
      <rect x="36" y="124" width="88" height="22" rx="8" fill="currentColor" />
      <rect x="46" y="132" width="34" height="5" rx="2.5" fill="var(--card)" fillOpacity=".85" />

      {/* Grafik batang */}
      <rect x="152" y="22" width="148" height="136" rx="12" fill="var(--card)" stroke="var(--border)" />
      <g className="bp-bars">
        {[
          [172, 32],
          [194, 50],
          [216, 40],
          [238, 72],
          [260, 96],
        ].map(([x, h]) => (
          <rect key={x} className="bp-bar" x={x} y={140 - h} width="16" height={h} rx="4" fill="currentColor" fillOpacity={h > 90 ? 1 : 0.35} />
        ))}
      </g>
      <path className="bp-draw" pathLength="100" d="M180 108 L202 90 L224 98 L246 66 L268 42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Koin melayang */}
      <g className="bp-float">
        <circle cx="296" cy="30" r="14" fill="currentColor" />
        <circle cx="296" cy="30" r="9" fill="none" stroke="var(--card)" strokeOpacity=".7" strokeWidth="1.5" />
        <path d="M296 25v10M293 28h6" stroke="var(--card)" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ArtOutlets() {
  const nodes = [
    [56, 46],
    [264, 46],
    [56, 136],
    [264, 136],
  ];
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      {/* Garis penghubung dengan aliran data */}
      {nodes.map(([x, y]) => (
        <line key={`l${x}${y}`} className="bp-flow" x1="160" y1="90" x2={x} y2={y} stroke="currentColor" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
      ))}

      {/* Pusat kendali */}
      <circle className="bp-pulse" cx="160" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle className="bp-pulse bp-pulse-2" cx="160" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="160" cy="90" r="28" fill="currentColor" />
      <path d="M148 84h24l-2-8h-20zM150 84v14h20V84M157 98v-7h6v7" stroke="var(--card)" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />

      {/* Outlet */}
      {nodes.map(([x, y], i) => (
        <g key={`n${x}${y}`} className="bp-node" style={{ animationDelay: `${0.25 + i * 0.12}s` }}>
          <rect x={x - 22} y={y - 22} width="44" height="44" rx="12" fill="var(--card)" stroke="var(--border)" />
          <path d={`M${x - 11} ${y - 3}h22l-2-8h-18zM${x - 9} ${y - 3}v12h18V${y - 3}`} fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx={x + 17} cy={y - 17} r="4.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

function ArtStock() {
  const box = (x: number, y: number, key: string, strong = false) => (
    <g key={key}>
      <rect x={x} y={y} width="40" height="40" rx="6" fill={strong ? "currentColor" : "var(--card)"} fillOpacity={strong ? 0.9 : 1} stroke={strong ? "currentColor" : "var(--border)"} />
      <path d={`M${x} ${y + 14}h40`} stroke={strong ? "var(--card)" : "currentColor"} strokeOpacity={strong ? 0.6 : 0.35} />
      <rect x={x + 14} y={y + 14} width="12" height="8" rx="2" fill={strong ? "var(--card)" : "currentColor"} fillOpacity={strong ? 0.8 : 0.3} />
    </g>
  );

  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      {/* Rak */}
      <path d="M24 152h190" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
      <g className="bp-boxes">
        {box(40, 112, "a")}
        {box(84, 112, "b", true)}
        {box(128, 112, "c")}
        {box(62, 70, "d")}
        {box(106, 70, "e")}
      </g>
      {/* Kotak yang baru masuk */}
      <g className="bp-drop">{box(84, 28, "f", true)}</g>

      {/* Indikator stok */}
      <rect x="236" y="30" width="22" height="120" rx="11" fill="var(--card)" stroke="var(--border)" />
      <rect className="bp-bar" x="240" y="66" width="14" height="80" rx="7" fill="currentColor" />
      {[44, 90, 136].map((y, i) => (
        <g key={y}>
          <rect x="272" y={y - 4} width="32" height="8" rx="4" fill="var(--border)" />
          <circle className="bp-blink" style={{ animationDelay: `${i * 0.4}s` }} cx="268" cy={y} r="0" fill="currentColor" />
          <circle cx="268" cy={y} r="3" fill="currentColor" fillOpacity=".5" />
        </g>
      ))}
    </svg>
  );
}

function ArtData() {
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <defs>
        <linearGradient id="bp-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity=".28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Kartu grafik */}
      <rect x="20" y="22" width="190" height="136" rx="12" fill="var(--card)" stroke="var(--border)" />
      {[56, 86, 116].map((y) => (
        <line key={y} x1="34" y1={y} x2="196" y2={y} stroke="var(--border)" strokeDasharray="3 5" />
      ))}
      <path className="bp-fade" d="M34 130 L76 100 L112 112 L152 66 L196 40 L196 142 L34 142 Z" fill="url(#bp-area)" />
      <path className="bp-draw" pathLength="100" d="M34 130 L76 100 L112 112 L152 66 L196 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[
        [34, 130],
        [76, 100],
        [112, 112],
        [152, 66],
        [196, 40],
      ].map(([x, y], i) => (
        <circle key={x} className="bp-dot" style={{ animationDelay: `${0.5 + i * 0.22}s` }} cx={x} cy={y} r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="2.5" />
      ))}

      {/* Donut */}
      <rect x="226" y="22" width="80" height="84" rx="12" fill="var(--card)" stroke="var(--border)" />
      <circle cx="266" cy="64" r="22" fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="9" />
      <circle className="bp-donut" cx="266" cy="64" r="22" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray="0 100" transform="rotate(-90 266 64)" />

      {/* Kartu kecil melayang */}
      <g className="bp-float">
        <rect x="226" y="118" width="80" height="40" rx="10" fill="currentColor" />
        <rect x="237" y="130" width="34" height="5" rx="2.5" fill="var(--card)" fillOpacity=".85" />
        <rect x="237" y="141" width="52" height="4" rx="2" fill="var(--card)" fillOpacity=".5" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* Opsional: isi `image` dengan path foto untuk menggantikan ilustrasi */
/* ------------------------------------------------------------------ */

interface Problem {
  title: string;
  body: string;
  icon: ReactNode;
  art: ReactNode;
  image?: string; // mis. "/assets/problem/transaksi.webp"
}

const problems: Problem[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h8v4H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17.5v1.5l1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    art: <ArtTransactions />,
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
    art: <ArtOutlets />,
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
    art: <ArtStock />,
    title: "Stok Semakin Kompleks",
    body: "Kompleksitas persediaan memerlukan kontrol ketat agar stok selalu terjaga, harga bahan baku terkontrol, dan kualitas produk konsisten.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 20l5-10 4 6 3-4 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 6h2M20 5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    art: <ArtData />,
    title: "Data Semakin Banyak",
    body: "Tumpukan data melimpah perlu dipilah dengan cermat untuk menghasilkan laporan akurat dan merumuskan strategi pengembangan bisnis.",
  },
];

/* ------------------------------------------------------------------ */
/* KARTU                                                               */
/* ------------------------------------------------------------------ */

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  const [ref, seen] = useInView<HTMLElement>(0.25);

  // Cahaya lembut yang mengikuti kursor
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      className={`bp-card${seen ? " is-in" : ""}`}
      style={{ ["--i" as string]: index }}
      onMouseMove={onMove}
    >
      <div className="bp-art">
        <span className="bp-art-grid" aria-hidden="true" />
        {problem.image ? (
          <img className="bp-img" src={problem.image} alt="" loading="lazy" />
        ) : (
          problem.art
        )}
        <span className="bp-num">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="bp-body">
        <div className="bp-icon">{problem.icon}</div>
        <h3 className="bp-title">{problem.title}</h3>
        <p className="bp-text">{problem.body}</p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION                                                             */
/* ------------------------------------------------------------------ */

export default function BusinessProblem() {
  const [headRef, headSeen] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="bp-section">
      <style>{`
        .bp-section {
          position: relative;
          overflow: hidden;
          background: var(--surface);
          padding-block: clamp(64px, 8vw, 120px);
        }

        /* ---------- Dekorasi latar ---------- */
        .bp-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(var(--border) 1px, transparent 1px);
          background-size: 24px 24px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 25%, #000 15%, transparent 72%);
                  mask-image: radial-gradient(ellipse at 50% 25%, #000 15%, transparent 72%);
          opacity: 0.8;
        }
        .bp-blob {
          position: absolute;
          border-radius: 50%;
          background: var(--brand);
          filter: blur(80px);
          opacity: 0.14;
          pointer-events: none;
          animation: bp-drift 14s ease-in-out infinite alternate;
        }
        .bp-blob.b1 { width: 420px; height: 420px; top: -140px; right: -120px; }
        .bp-blob.b2 { width: 360px; height: 360px; bottom: -140px; left: -120px; animation-delay: -6s; }
        .bp-deco { position: absolute; pointer-events: none; color: var(--brand); }
        .bp-deco.ring {
          top: 12%; right: 7%;
          width: 74px; height: 74px;
          border: 2px solid currentColor;
          border-radius: 50%;
          opacity: 0.28;
          animation: bp-float 7s ease-in-out infinite;
        }
        .bp-deco.plus {
          bottom: 14%; left: 5%;
          width: 26px; height: 26px;
          opacity: 0.4;
          animation: bp-spin 18s linear infinite;
        }
        .bp-deco.plus::before, .bp-deco.plus::after {
          content: ""; position: absolute; background: currentColor; border-radius: 2px;
        }
        .bp-deco.plus::before { left: 50%; top: 0; width: 3px; height: 100%; transform: translateX(-50%); }
        .bp-deco.plus::after  { top: 50%; left: 0; height: 3px; width: 100%; transform: translateY(-50%); }
        .bp-deco.dots {
          top: 46%; left: 3%;
          width: 70px; height: 70px;
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: 14px 14px;
          opacity: 0.3;
          animation: bp-float 9s ease-in-out infinite reverse;
        }

        .bp-inner { position: relative; z-index: 1; }

        /* ---------- Heading ---------- */
        .bp-head { max-width: 760px; margin-bottom: clamp(40px, 5vw, 72px); opacity: 0; }
        .bp-head.is-in { opacity: 1; animation: bp-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
        .bp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--card);
          font-size: 13px; font-weight: 600;
          color: var(--foreground);
          margin-bottom: 20px;
        }
        .bp-eyebrow i {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--brand);
          box-shadow: 0 0 0 0 var(--brand);
          animation: bp-ring 2s ease-out infinite;
        }
        .bp-h2 {
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: clamp(30px, 3.4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--foreground);
          margin: 0 0 18px;
        }
        .bp-h2 span { color: var(--muted-foreground); font-weight: 400; }
        .bp-lead {
          margin: 0;
          font-size: clamp(15px, 1.2vw, 18px);
          line-height: 1.7;
          color: var(--muted-foreground);
        }

        /* ---------- Grid: 2 kartu per baris ---------- */
        .bp-grid-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(16px, 2.2vw, 32px);
        }
        @media (max-width: 720px) {
          .bp-grid-cards { grid-template-columns: 1fr; }
          .bp-deco.ring, .bp-deco.dots { display: none; }
        }

        /* ---------- Kartu ---------- */
        .bp-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg, 20px);
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s, border-color 0.3s;
        }
        .bp-card.is-in {
          opacity: 1;
          animation: bp-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards;
          animation-delay: calc(var(--i) * 140ms);
        }
        .bp-card:hover {
          transform: translateY(-6px);
          border-color: var(--brand);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.1);
        }
        .bp-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          background: radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), var(--brand-subtle), transparent 70%);
        }
        .bp-card:hover::before { opacity: 1; }

        /* Area ilustrasi */
        .bp-art {
          position: relative;
          z-index: 1;
          height: clamp(190px, 20vw, 260px);
          padding: clamp(14px, 1.6vw, 22px);
          color: var(--brand);
          background: linear-gradient(135deg, var(--brand-subtle), transparent 75%);
          border-bottom: 1px solid var(--border);
        }
        .bp-art-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--border) 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.7;
        }
        .bp-art svg { position: relative; display: block; width: 100%; height: 100%; overflow: visible; }
        .bp-img { position: relative; width: 100%; height: 100%; object-fit: contain; border-radius: 12px; }
        .bp-num {
          position: absolute; top: 14px; right: 18px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.06em;
          color: var(--muted-foreground);
          opacity: 0.7;
        }

        /* Isi teks */
        .bp-body { position: relative; z-index: 1; padding: clamp(22px, 2.4vw, 34px); }
        .bp-icon {
          display: flex; align-items: center; justify-content: center;
          width: 48px; height: 48px;
          margin-bottom: 18px;
          border-radius: 14px;
          background: var(--brand-subtle);
          color: var(--brand);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bp-card:hover .bp-icon { transform: rotate(-8deg) scale(1.1); }
        .bp-title {
          margin: 0 0 10px;
          font-family: var(--font-display-family);
          font-weight: 700;
          font-size: clamp(18px, 1.6vw, 22px);
          letter-spacing: -0.015em;
          color: var(--foreground);
        }
        .bp-text { margin: 0; font-size: 15px; line-height: 1.7; color: var(--muted-foreground); }

        /* ---------- Animasi bagian ilustrasi (jalan saat kartu terlihat) ---------- */
        .bp-bar { transform-box: fill-box; transform-origin: bottom; transform: scaleY(0); }
        .is-in .bp-bar { animation: bp-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; animation-delay: 0.3s; }
        .is-in .bp-bars .bp-bar:nth-child(2) { animation-delay: 0.42s; }
        .is-in .bp-bars .bp-bar:nth-child(3) { animation-delay: 0.54s; }
        .is-in .bp-bars .bp-bar:nth-child(4) { animation-delay: 0.66s; }
        .is-in .bp-bars .bp-bar:nth-child(5) { animation-delay: 0.78s; }

        .bp-draw { stroke-dasharray: 100; stroke-dashoffset: 100; }
        .is-in .bp-draw { animation: bp-line 1.6s ease forwards 0.5s; }

        .bp-fade { opacity: 0; }
        .is-in .bp-fade { animation: bp-show 1s ease forwards 1.2s; }

        .bp-dot { opacity: 0; transform-box: fill-box; transform-origin: center; }
        .is-in .bp-dot { animation: bp-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .bp-rows > g { opacity: 0; }
        .is-in .bp-rows > g { animation: bp-slide 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .is-in .bp-rows > g:nth-child(1) { animation-delay: 0.2s; }
        .is-in .bp-rows > g:nth-child(2) { animation-delay: 0.4s; }
        .is-in .bp-rows > g:nth-child(3) { animation-delay: 0.6s; }

        .bp-node { opacity: 0; transform-box: fill-box; transform-origin: center; }
        .is-in .bp-node { animation: bp-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .bp-boxes > g { opacity: 0; }
        .is-in .bp-boxes > g { animation: bp-slide 0.5s ease forwards; }
        .is-in .bp-boxes > g:nth-child(1) { animation-delay: 0.1s; }
        .is-in .bp-boxes > g:nth-child(2) { animation-delay: 0.2s; }
        .is-in .bp-boxes > g:nth-child(3) { animation-delay: 0.3s; }
        .is-in .bp-boxes > g:nth-child(4) { animation-delay: 0.45s; }
        .is-in .bp-boxes > g:nth-child(5) { animation-delay: 0.55s; }

        .bp-drop { opacity: 0; }
        .is-in .bp-drop { animation: bp-dropin 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.9s; }

        .bp-donut { }
        .is-in .bp-donut { animation: bp-donut 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.6s; }

        .bp-float { animation: bp-float 4.5s ease-in-out infinite; }
        .bp-flow { stroke-dasharray: 4 7; animation: bp-dash 1.1s linear infinite; }
        .bp-pulse { transform-box: fill-box; transform-origin: center; opacity: 0; animation: bp-ping 2.8s ease-out infinite; }
        .bp-pulse-2 { animation-delay: 1.4s; }
        .bp-blink { animation: bp-blink 1.8s ease-out infinite; }

        /* ---------- Keyframes ---------- */
        @keyframes bp-rise  { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bp-grow  { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes bp-line  { to { stroke-dashoffset: 0; } }
        @keyframes bp-show  { to { opacity: 1; } }
        @keyframes bp-pop   { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }
        @keyframes bp-slide { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes bp-dropin { from { opacity: 0; transform: translateY(-70px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bp-donut { to { stroke-dasharray: 72 100; } }
        @keyframes bp-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes bp-dash  { to { stroke-dashoffset: -22; } }
        @keyframes bp-ping  { 0% { opacity: 0.55; transform: scale(1); } 100% { opacity: 0; transform: scale(2); } }
        @keyframes bp-blink { 0% { r: 3; opacity: 0.6; } 100% { r: 11; opacity: 0; } }
        @keyframes bp-ring  { 0% { box-shadow: 0 0 0 0 rgba(0,0,0,0); } 70% { box-shadow: 0 0 0 8px transparent; } }
        @keyframes bp-drift { from { transform: translate(0, 0) scale(1); } to { transform: translate(40px, 30px) scale(1.15); } }
        @keyframes bp-spin  { to { transform: rotate(360deg); } }

        /* ---------- Hormati pengaturan reduce motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .bp-card, .bp-head { opacity: 1 !important; animation: none !important; }
          .bp-bar { transform: scaleY(1) !important; animation: none !important; }
          .bp-draw { stroke-dashoffset: 0 !important; animation: none !important; }
          .bp-fade, .bp-dot, .bp-node, .bp-rows > g, .bp-boxes > g, .bp-drop { opacity: 1 !important; animation: none !important; }
          .bp-donut { stroke-dasharray: 72 100 !important; animation: none !important; }
          .bp-blob, .bp-deco, .bp-float, .bp-flow, .bp-pulse, .bp-blink, .bp-eyebrow i { animation: none !important; }
          .bp-card:hover { transform: none; }
        }
      `}</style>

      {/* Dekorasi latar */}
      <span className="bp-grid" aria-hidden="true" />
      <span className="bp-blob b1" aria-hidden="true" />
      <span className="bp-blob b2" aria-hidden="true" />
      <span className="bp-deco ring" aria-hidden="true" />
      <span className="bp-deco plus" aria-hidden="true" />
      <span className="bp-deco dots" aria-hidden="true" />

      <div className="container-page bp-inner">
        <div ref={headRef} className={`bp-head${headSeen ? " is-in" : ""}`}>
          <span className="bp-eyebrow">
            <i /> Tantangan Bisnis yang Berkembang
          </span>
          <h2 className="bp-h2">
            Bisnis Bertumbuh.
            <br />
            <span>Operasional Semakin Kompleks.</span>
          </h2>
          <p className="bp-lead">
            Pengelolaan operasional dengan satu cabang memiliki dinamika yang relatif sederhana.
            Seiring berkembangnya skala usaha, setiap alur kerja menuntut kontrol, efisiensi, dan
            standardisasi yang presisi. Mille menghadirkan ekosistem terpadu untuk menyederhanakan
            seluruh kompleksitas operasional bisnis Anda.
          </p>
        </div>

        <div className="bp-grid-cards">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} problem={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}