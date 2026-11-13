import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Link } from "react-router";

/* OptiMille signature section */

const ORANGE = "#F28C28";
const ORANGE_LIGHT = "#FFAB52";
const ORANGE_DARK = "#C96A12";

const STEP_MS = 3600; // lama tiap tahap menyala sebelum pindah ke tahap berikutnya

interface Step {
  num: string;
  label: string;
  detail: string;
  color: string;
  glyph: ReactNode; // ikon garis kecil di sisi kanan, tergambar saat tahap aktif
}

const steps: Step[] = [
  {
    num: "01",
    label: "Data",
    detail:
      "Seluruh data bisnis terkumpul otomatis — transaksi, stok, karyawan, keuangan.",
    color: "#F8B36B",
    glyph: (
      <>
        <ellipse
          className="draw"
          pathLength={1}
          cx="16"
          cy="8"
          rx="9"
          ry="3.5"
        />
        <path
          className="draw"
          pathLength={1}
          d="M7 8v8c0 2 4 3.5 9 3.5s9-1.5 9-3.5V8"
        />
        <path
          className="draw"
          pathLength={1}
          d="M7 16v8c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-8"
        />
      </>
    ),
  },
  {
    num: "02",
    label: "Analisis",
    detail:
      "Data diproses dan dipadukan lintas area operasional secara real-time.",
    color: "#F49A45",
    glyph: (
      <>
        <path className="draw" pathLength={1} d="M4 26h24" />
        <path className="draw" pathLength={1} d="M8 22v-7M16 22V7M24 22v-9" />
      </>
    ),
  },
  {
    num: "03",
    label: "Insight",
    detail:
      "Pola bisnis ditemukan — tren penjualan, anomali stok, perilaku pelanggan.",
    color: ORANGE,
    glyph: (
      <>
        <path className="draw" pathLength={1} d="M4 24l7-8 5 4 8-11" />
        <circle className="draw" pathLength={1} cx="25" cy="8" r="2.4" />
      </>
    ),
  },
  {
    num: "04",
    label: "Rekomendasi",
    detail: "Peluang dan masalah teridentifikasi dengan konteks yang relevan.",
    color: ORANGE_DARK,
    glyph: (
      <>
        <path className="draw" pathLength={1} d="M8 28V5" />
        <path className="draw" pathLength={1} d="M8 6h16l-3 5 3 5H8" />
      </>
    ),
  },
  {
    num: "05",
    label: "Keputusan",
    detail:
      "Pemilik bisnis dapat bertindak dengan arah yang lebih tepat dan percaya diri.",
    color: "#0EA86B",
    glyph: (
      <>
        <circle className="draw" pathLength={1} cx="16" cy="16" r="11" />
        <path className="draw" pathLength={1} d="M10.5 16.5l4 4 7-8" />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* SECTION                                                             */
/* ------------------------------------------------------------------ */

export default function OptiMilleSection() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [seen, setSeen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  // Animasi masuk dan alur hanya berjalan saat section terlihat
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className={`om-section${seen ? " is-in" : ""}`}>
      <style>{`
        .om-section {
          position: relative;
          background: #0E0E10;
          padding-block: clamp(80px, 9vw, 128px);
          border-block: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Kemunculan bertahap saat section masuk layar */
        .om-r {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--d, 0s);
        }
        .is-in .om-r { opacity: 1; transform: none; }

        /* ---------- Header ---------- */
        .om-head {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
          gap: clamp(24px, 5vw, 72px);
          align-items: end;
          margin-bottom: clamp(48px, 6vw, 80px);
        }
        .om-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px 5px 6px;
          border: 1px solid rgba(242, 140, 40, 0.35);
          border-radius: 999px;
          background: rgba(242, 141, 40, 0.35);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${ORANGE_LIGHT};
        }
        .om-pill img { display: block; width: 22px; height: 22px; object-fit: contain; }
        .om-h2 {
          margin: 20px 0 0;
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: clamp(28px, 3.4vw, 50px);
          line-height: 1.08;
          letter-spacing: -0.028em;
          color: #fff;
          text-wrap: balance;
        }
        .om-accent { color: ${ORANGE_LIGHT}; }
        .om-lead {
          margin: 0;
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
        }

        /* ---------- Layout dua kolom ---------- */
        .om-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(40px, 5vw, 72px);
          align-items: start;
        }

        /* ---------- Screenshot ---------- */
        .om-shot { margin: 0; max-width: 640px; }
        .om-shot__frame {
          overflow: hidden;
          background: #16161A;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          clip-path: inset(0 0 100% 0 round 16px);
          transition: clip-path 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }
        .is-in .om-shot__frame { clip-path: inset(0 0 0 0 round 16px); }
        .om-shot img {
          display: block;
          width: 100%;
          height: auto;
          transform: scale(1.05);
          transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }
        .is-in .om-shot img { transform: scale(1); }
        .om-shot figcaption {
          margin-top: 14px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.42);
        }

        /* ---------- Cara kerja ---------- */
        .om-steps-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .om-kicker {
          margin: 0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
        }
        .om-count {
          font-size: 12px;
          letter-spacing: 0.04em;
          font-variant-numeric: tabular-nums;
          color: rgba(255, 255, 255, 0.4);
        }
        .om-steps { list-style: none; margin: 0; padding: 0; }
        .om-step { position: relative; padding-bottom: 28px; }

        .om-step__btn {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr) 32px;
          column-gap: 20px;
          width: 100%;
          padding: 0;
          margin: 0;
          font: inherit;
          color: inherit;
          text-align: left;
          background: none;
          border: 0;
          border-radius: 12px;
          cursor: pointer;
        }
        .om-step__btn:focus-visible { outline: 2px solid ${ORANGE}; outline-offset: 6px; }

        /* Garis penghubung antar tahap: terisi seiring tahap berjalan */
        .om-seg {
          position: absolute;
          left: 19px;
          top: 46px;
          bottom: 4px;
          width: 2px;
          overflow: hidden;
          border-radius: 1px;
          background: rgba(255, 255, 255, 0.09);
        }
        .om-seg-fill {
          display: block;
          width: 100%;
          height: 100%;
          background: var(--c);
          transform: scaleY(0);
          transform-origin: top;
        }
        .is-done .om-seg-fill { transform: scaleY(1); }
        .is-current .om-seg-fill { animation: om-travel var(--ms, 3600ms) linear forwards; }

        /* Tahan alur saat section di luar layar, saat di-hover, atau saat navigasi keyboard */
        .om-steps.is-held .om-seg-fill { animation-play-state: paused; }
        @media (hover: hover) {
          .om-steps:hover .om-seg-fill { animation-play-state: paused; }
        }
        .om-steps:has(:focus-visible) .om-seg-fill { animation-play-state: paused; }

        /* Lingkaran nomor */
        .om-node {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.16);
          background: transparent;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.45);
          transition: background 0.4s, color 0.4s, border-color 0.4s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .is-done .om-node {
          border-color: color-mix(in srgb, var(--c) 55%, transparent);
          background: color-mix(in srgb, var(--c) 16%, transparent);
          color: var(--c);
        }
        .is-current .om-node {
          border-color: var(--c);
          background: var(--c);
          color: #0E0E10;
          transform: scale(1.06);
        }

        /* Teks */
        .om-step__text { padding-top: 7px; }
        .om-step__label {
          display: block;
          margin-bottom: 5px;
          font-family: var(--font-display-family);
          font-weight: 700;
          font-size: 17px;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.62);
          transition: color 0.3s;
        }
        .om-step__detail {
          display: block;
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s;
        }
        .om-step__btn:hover .om-step__label { color: #fff; }
        .is-done .om-step__label { color: rgba(255, 255, 255, 0.85); }
        .is-current .om-step__label { color: #fff; }
        .is-current .om-step__detail { color: rgba(255, 255, 255, 0.78); }

        /* Ikon kecil yang tergambar saat tahap aktif */
        .om-glyph {
          padding-top: 6px;
          color: var(--c);
          opacity: 0.28;
          transition: opacity 0.4s;
        }
        .is-done .om-glyph { opacity: 0.55; }
        .is-current .om-glyph { opacity: 1; }
        .om-glyph svg {
          display: block;
          width: 32px;
          height: 32px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .om-glyph .draw { stroke-dasharray: 1; stroke-dashoffset: 0; }
        .is-current .om-glyph .draw { animation: om-draw 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }

        /* ---------- CTA ---------- */
        .om-cta-wrap {
          margin-top: 4px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .om-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          background: ${ORANGE};
          color: #17110A;
          border-radius: var(--radius-md, 10px);
          font-family: var(--font-body-family);
          font-size: 14.5px;
          font-weight: 650;
          text-decoration: none;
          transition: background 0.2s, gap 0.25s;
        }
        .om-cta:hover { background: ${ORANGE_LIGHT}; gap: 14px; }
        .om-cta:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

        /* ---------- Keyframes ---------- */
        @keyframes om-travel { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes om-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }

        /* ---------- Responsif ---------- */
        @media (max-width: 900px) {
          .om-head { grid-template-columns: 1fr; align-items: start; }
          .om-grid { grid-template-columns: 1fr; }
          .om-shot { max-width: 560px; }
        }
        @media (max-width: 420px) {
          .om-step__btn { grid-template-columns: 40px minmax(0, 1fr); }
          .om-glyph { display: none; }
        }

        /* ---------- Reduce motion: tampil statis, tahap tetap bisa diklik ---------- */
        @media (prefers-reduced-motion: reduce) {
          .om-r { opacity: 1; transform: none; transition: none; }
          .om-shot__frame { clip-path: none; transition: none; }
          .om-shot img { transform: none; transition: none; }
          .om-seg-fill { animation: none !important; transform: scaleY(1); }
          .is-current .om-glyph .draw { animation: none; }
          .om-node, .om-step__label, .om-step__detail, .om-glyph { transition: none; }
        }
      `}</style>

      <div className="container-page">
        {/* Header */}
        <div className="om-head">
          <div className="om-r">
            <span className="om-pill">
              <img
                src="/mille-partner-logo.png"
                alt=""
                width={22}
                height={22}
              />
              OptiMille AI Intelligence
            </span>
            <h2 className="om-h2">
              Data Tidak Hanya untuk Dilihat.{" "}
              <span className="om-accent">
                Gunakan untuk Mengambil Keputusan.
              </span>
            </h2>
          </div>
          <p
            className="om-lead om-r"
            style={{ "--d": "0.12s" } as CSSProperties}
          >
            OptiMille membantu Anda memahami data bisnis, menemukan insight, dan
            mendapatkan rekomendasi untuk mengambil keputusan dengan lebih
            terarah.
          </p>
        </div>

        <div className="om-grid">
          {/* Kiri: screenshot */}
          <figure className="om-shot">
            <div className="om-shot__frame">
              <img
                src="/mille-ai-sales-analytics-dashboard.png"
                alt="Mille AI menganalisis data penjualan outlet secara otomatis"
                loading="lazy"
              />
            </div>
            <figcaption
              className="om-r"
              style={{ "--d": "0.7s" } as CSSProperties}
            >
              Mille AI menganalisis data penjualan outlet secara otomatis.
            </figcaption>
          </figure>

          {/* Kanan: cara kerja */}
          <div className="om-r" style={{ "--d": "0.2s" } as CSSProperties}>
            <div className="om-steps-top">
              <p className="om-kicker">Cara Kerja OptiMille</p>
              <span className="om-count" aria-hidden="true">
                Tahap {String(active + 1).padStart(2, "0")} /{" "}
                {String(steps.length).padStart(2, "0")}
              </span>
            </div>

            <ol className={`om-steps${inView ? "" : " is-held"}`}>
              {steps.map((s, i) => {
                const state =
                  i < active
                    ? "is-done"
                    : i === active
                      ? "is-current"
                      : "is-todo";
                return (
                  <li
                    key={s.num}
                    className={`om-step ${state}`}
                    style={
                      {
                        "--c": s.color,
                        "--ms": `${STEP_MS}ms`,
                      } as CSSProperties
                    }
                  >
                    {/* Garis ke tahap berikutnya; saat penuh, giliran tahap berikutnya (atau mengulang dari awal) */}
                    <span className="om-seg" aria-hidden="true">
                      <span
                        className="om-seg-fill"
                        onAnimationEnd={(e) => {
                          if (e.animationName === "om-travel" && i === active) {
                            setActive((i + 1) % steps.length);
                          }
                        }}
                      />
                    </span>

                    <button
                      type="button"
                      className="om-step__btn"
                      aria-current={i === active ? "step" : undefined}
                      onClick={() => setActive(i)}
                    >
                      <span className="om-node">{s.num}</span>
                      <span className="om-step__text">
                        <span className="om-step__label">{s.label}</span>
                        <span className="om-step__detail">{s.detail}</span>
                      </span>
                      <span className="om-glyph" aria-hidden="true">
                        <svg viewBox="0 0 32 32">{s.glyph}</svg>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="om-cta-wrap">
              <Link to="/optimille" className="om-cta">
                Kenali OptiMille
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
