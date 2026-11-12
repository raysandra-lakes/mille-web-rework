import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { Link } from "react-router";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

type NodeId = "sales" | "inventory" | "business" | "people" | "optimille";

interface Group {
  label?: string;
  items: string[];
  ordered?: boolean; // tampil bernomor (untuk alur kerja)
}

interface EcosystemNode {
  id: NodeId;
  short: string; // nama pendek untuk tombol di diagram
  title: string;
  description: string;
  note?: string;
  groups: Group[];
  to?: string; // halaman produk (kalau ada)
  icon: ReactNode;
}

const icon = (children: ReactNode) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MODULES: EcosystemNode[] = [
  {
    id: "sales",
    short: "Operasional & Pembayaran",
    title: "Operasional, Pemesanan & Pembayaran",
    description: "Mengelola aktivitas bisnis sehari-hari, dari pemesanan hingga transaksi selesai.",
    to: "/produk/operasional-pemesanan-pembayaran",
    icon: icon(
      <>
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
        <path d="M9 8h6M9 12h6" />
      </>
    ),
    groups: [
      {
        items: [
          "Point of Sale",
          "QR Order",
          "Self Order Kiosk",
          "Order Queue",
          "Reservasi",
          "Waiting List",
          "Kitchen Display System",
          "Tata Ruang & Meja",
          "Integrasi Online",
        ],
      },
    ],
  },
  {
    id: "inventory",
    short: "Inventaris & Pasokan",
    title: "Inventaris & Rantai Pasokan",
    description: "Mengontrol persediaan dan aliran barang dari pengadaan hingga penggunaan.",
    to: "/produk/inventaris-rantai-pasokan",
    icon: icon(
      <>
        <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
        <path d="M3 7.5 12 12l9-4.5M12 12v9" />
      </>
    ),
    groups: [
      {
        items: [
          "Pengelolaan Inventaris",
          "Supplier & Pembelian",
          "Gudang & Produksi",
          "Transfer Stok",
          "Stock Opname",
          "Perhitungan HPP",
        ],
      },
    ],
  },
  {
    id: "business",
    short: "Bisnis & Keuangan",
    title: "Pengelolaan Bisnis & Keuangan",
    description: "Mengendalikan berbagai aspek bisnis dari satu pusat backoffice terintegrasi.",
    to: "/produk/pengelolaan-bisnis-keuangan",
    icon: icon(
      <>
        <path d="M4 20V4M4 20h16" />
        <path d="M8 16v-4M12 16V8M16 16v-6" />
      </>
    ),
    groups: [
      {
        items: [
          "Pengelolaan Toko Cabang",
          "Pengaturan Menu & Harga",
          "Monitoring Performa Outlet",
          "Laporan & Insight Bisnis",
          "Sistem Akuntansi",
          "Budgeting",
          "HPP & Profit",
          "Laporan Keuangan",
          "Arus Kas",
          "Centralized Backoffice",
        ],
      },
    ],
  },
  {
    id: "people",
    short: "Karyawan & Pelanggan",
    title: "Pengelolaan Karyawan & Pelanggan",
    description: "Mengelola tim operasional sekaligus membangun hubungan dengan pelanggan.",
    icon: icon(
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3 2.7-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M16.5 14.6c2.3.1 3.7 1.4 4.2 4" />
      </>
    ),
    groups: [
      { label: "Karyawan", items: ["Data", "Absensi", "Shift", "Performa", "Komisi", "Payroll"] },
      {
        label: "Pelanggan",
        items: [
          "Database",
          "Segmentasi",
          "Program Loyalitas",
          "Referral",
          "Kampanye Marketing",
          "Ulasan",
          "Gift Card",
          "Otomasi",
        ],
      },
    ],
  },
];

const FLOW = ["Data", "Analisis", "Insight", "Rekomendasi", "Keputusan"];

const CORE: EcosystemNode = {
  id: "optimille",
  short: "OptiMille",
  title: "OptiMille",
  description: "Mengubah data dari seluruh aktivitas bisnis menjadi insight dan keputusan.",
  note: "Intelligence layer mengolah data dari Penjualan, Inventaris, Keuangan, serta Karyawan & Pelanggan menjadi keputusan bisnis yang terarah.",
  icon: icon(
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 12.5l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  groups: [{ label: "Alur kerja", items: FLOW, ordered: true }],
};

const ORDER: NodeId[] = [...MODULES.map((m) => m.id), CORE.id];
const ALL: EcosystemNode[] = [...MODULES, CORE];

const AUTO_MS = 7000; // jeda perpindahan otomatis (sampai pengunjung mengklik sesuatu)

/* ------------------------------------------------------------------ */
/* DAFTAR FITUR                                                        */
/* ------------------------------------------------------------------ */

function FeatureGroups({ groups }: { groups: Group[] }) {
  return (
    <div>
      {groups.map((g, gi) => (
        <div className="eco-group" key={g.label ?? gi}>
          {g.label && <h4 className="eco-group__label">{g.label}</h4>}
          <ul className={`eco-list${g.ordered ? " is-ordered" : ""}`}>
            {g.items.map((item, i) => (
              <li key={item} style={{ "--n": i } as CSSProperties}>
                {g.ordered && <span className="eco-list__n">{String(i + 1).padStart(2, "0")}</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION                                                             */
/* ------------------------------------------------------------------ */

export default function Ecosystem() {
  const [active, setActive] = useState<NodeId>("sales");
  const [auto, setAuto] = useState(true); // berhenti permanen setelah pengunjung memilih sendiri
  const [inView, setInView] = useState(false);
  const [seen, setSeen] = useState(false);
  const [paused, setPaused] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Partial<Record<NodeId, HTMLButtonElement | null>>>({});

  // Matikan perpindahan otomatis untuk pengguna "reduce motion"
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);

  // Deteksi apakah diagram sedang terlihat di layar
  useEffect(() => {
    const el = stageRef.current;
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
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && inView && !paused;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      setActive((cur) => ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]);
    }, AUTO_MS);
    return () => window.clearTimeout(t);
  }, [running, active]);

  const select = (id: NodeId, focus = false) => {
    setActive(id);
    setAuto(false);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = ORDER.indexOf(active);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % ORDER.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + ORDER.length) % ORDER.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = ORDER.length - 1;
    if (next >= 0) {
      e.preventDefault();
      select(ORDER[next], true);
    }
  };

  const node = ALL.find((n) => n.id === active)!;
  const isCore = active === "optimille";
  const activeIdx = MODULES.findIndex((m) => m.id === active);

  // Posisi segmen garis horizontal yang menyala (tengah tiap kolom dihitung persis dari grid)
  const center = (i: number) => `calc((100% - 3 * var(--gap)) * ${(2 * i + 1) / 8} + ${i} * var(--gap))`;
  let busOn: CSSProperties;
  if (isCore) busOn = { left: center(0), right: `calc(100% - (${center(3)}))`, transformOrigin: "center" };
  else if (activeIdx < 2) busOn = { left: center(activeIdx), right: "50%", transformOrigin: "left" };
  else busOn = { left: "50%", right: `calc(100% - (${center(activeIdx)}))`, transformOrigin: "right" };

  return (
    <section className="eco-section">
      <div className="container-page">
        <div className="eco-head">
          <div>
            <p className="type-eyebrow">EKOSISTEM TERINTEGRASI</p>
            <h2>Satu Sistem untuk Seluruh Operasional Bisnis.</h2>
          </div>
          <p className="eco-lead">
            Mille menghubungkan berbagai kebutuhan operasional bisnis dalam satu ekosistem. Pilih
            salah satu modul untuk melihat fitur yang terhubung.
          </p>
        </div>

        <div
          className="eco-root"
          style={{ "--eco-ms": `${AUTO_MS}ms` } as CSSProperties}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div ref={stageRef} className={`eco-stage${seen ? " is-in" : ""}`}>
            <div role="tablist" aria-label="Modul ekosistem Mille" onKeyDown={onKeyDown}>
              {/* Empat modul */}
              <div className="eco-modules">
                {MODULES.map((m, i) => {
                  const on = active === m.id;
                  const count = m.groups.reduce((n, g) => n + g.items.length, 0);
                  return (
                    <button
                      key={m.id}
                      ref={(el) => {
                        tabRefs.current[m.id] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`eco-tab-${m.id}`}
                      aria-selected={on}
                      aria-controls="eco-panel"
                      tabIndex={on ? 0 : -1}
                      className={`eco-tab${on ? " is-active" : ""}${on && running ? " is-timing" : ""}`}
                      onClick={() => select(m.id)}
                    >
                      <span className="eco-tab__top">
                        <span className="eco-tab__icon">{m.icon}</span>
                        <span className="eco-tab__num">{String(i + 1).padStart(2, "0")}</span>
                      </span>
                      <span className="eco-tab__name">{m.short}</span>
                      <span className="eco-tab__meta">{count} fitur</span>
                      <span className="eco-bar" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>

              {/* Garis penghubung: modul terpilih tersambung ke OptiMille */}
              <div className="eco-wires" aria-hidden="true" key={active}>
                <div className="eco-stubs">
                  {MODULES.map((m, i) => (
                    <span key={m.id} className={`eco-stub${isCore || i === activeIdx ? " is-on" : ""}`} />
                  ))}
                </div>
                <span className="eco-bus" />
                <span className="eco-bus-on" style={busOn} />
                <span className="eco-drop" />
                <span className="eco-drop-on" />
              </div>

              {/* OptiMille */}
              <button
                ref={(el) => {
                  tabRefs.current.optimille = el;
                }}
                type="button"
                role="tab"
                id="eco-tab-optimille"
                aria-selected={isCore}
                aria-controls="eco-panel"
                tabIndex={isCore ? 0 : -1}
                className={`eco-core${isCore ? " is-active" : ""}${isCore && running ? " is-timing" : ""}`}
                onClick={() => select("optimille")}
              >
                <span className="eco-core__head">
                  <span className="eco-core__icon">{CORE.icon}</span>
                  <span className="eco-core__name">OptiMille</span>
                  <span className="eco-core__badge">Intelligence Layer</span>
                </span>
                <span className="eco-core__desc">{CORE.description}</span>
                <span className="eco-core__flow" aria-hidden="true">
                  {FLOW.map((s, i) => (
                    <span key={s}>
                      {s}
                      {i < FLOW.length - 1 && <i>→</i>}
                    </span>
                  ))}
                </span>
                <span className="eco-bar" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Panel detail */}
          <div className="eco-panel" id="eco-panel" role="tabpanel" aria-labelledby={`eco-tab-${active}`}>
            <div className="eco-panel__inner" key={active}>
              <div>
                <p className="eco-panel__kicker">
                  {isCore ? "Intelligence layer" : `${String(activeIdx + 1).padStart(2, "0")} / ${String(MODULES.length).padStart(2, "0")}`}
                </p>
                <h3>{node.title}</h3>
                <p className="eco-panel__desc">{node.description}</p>
                {node.note && <p className="eco-panel__note">{node.note}</p>}
                {node.to && (
                  <Link className="eco-cta" to={node.to}>
                    Lihat selengkapnya
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}
              </div>
              <FeatureGroups groups={node.groups} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .eco-section {
          background: var(--background);
          padding-block: clamp(72px, 9vw, 128px);
          overflow: hidden;
        }

        /* ---------- Heading ---------- */
        .eco-head {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: clamp(24px, 5vw, 72px);
          align-items: end;
          margin-bottom: clamp(40px, 5vw, 64px);
        }
        .eco-head .type-eyebrow { margin-bottom: 14px; }
        .eco-head h2 {
          margin: 0;
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: clamp(30px, 3.6vw, 52px);
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: var(--foreground);
          text-wrap: balance;
        }
        .eco-lead {
          margin: 0;
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.7;
          color: var(--muted-foreground);
        }

        /* ---------- Stage ---------- */
        .eco-root { --gap: 14px; }
        .eco-stage {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .eco-stage.is-in { opacity: 1; transform: none; }

        .eco-modules {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--gap);
        }

        .eco-tab {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 18px 18px 20px;
          text-align: left;
          font: inherit;
          color: var(--foreground);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl, 18px);
          cursor: pointer;
          overflow: hidden;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .eco-tab:hover {
          border-color: color-mix(in srgb, var(--foreground) 35%, var(--border));
          transform: translateY(-2px);
        }
        .eco-tab.is-active {
          background: var(--card);
          border-color: var(--foreground);
          transform: none;
        }
        .eco-tab__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 14px;
        }
        .eco-tab__icon { display: flex; color: var(--muted-foreground); transition: color 0.25s; }
        .eco-tab.is-active .eco-tab__icon { color: var(--brand); }
        .eco-tab__num {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          font-variant-numeric: tabular-nums;
          color: var(--muted-foreground);
        }
        .eco-tab__name {
          font-family: var(--font-display-family);
          font-weight: 700;
          font-size: 16px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .eco-tab__meta { font-size: 13px; color: var(--muted-foreground); }

        /* Garis progres perpindahan otomatis */
        .eco-bar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: var(--brand);
          transform: scaleX(0);
          transform-origin: left;
        }
        .is-timing > .eco-bar { animation: eco-time var(--eco-ms, 7000ms) linear forwards; }

        /* ---------- Garis penghubung ---------- */
        .eco-wires { position: relative; height: 44px; }
        .eco-stubs {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--gap);
          height: 22px;
        }
        .eco-stub { position: relative; display: block; height: 100%; }
        .eco-stub::before,
        .eco-stub::after {
          content: "";
          position: absolute;
          top: 0;
          left: calc(50% - 1px);
          width: 2px;
          height: 100%;
        }
        .eco-stub::before { background: var(--border); }
        .eco-stub.is-on::after {
          background: var(--brand);
          transform-origin: top;
          animation: eco-draw-y 0.28s ease-out both;
        }
        .eco-bus {
          position: absolute;
          top: 21px;
          left: calc((100% - 3 * var(--gap)) / 8);
          right: calc((100% - 3 * var(--gap)) / 8);
          height: 2px;
          background: var(--border);
        }
        .eco-bus-on {
          position: absolute;
          top: 21px;
          height: 2px;
          background: var(--brand);
          animation: eco-draw-x 0.32s ease-out 0.26s both;
        }
        .eco-drop,
        .eco-drop-on {
          position: absolute;
          top: 22px;
          left: calc(50% - 1px);
          width: 2px;
          height: 22px;
        }
        .eco-drop { background: var(--border); }
        .eco-drop-on {
          background: var(--brand);
          transform-origin: top;
          animation: eco-draw-y 0.24s ease-out 0.54s both;
        }

        /* ---------- OptiMille ---------- */
        .eco-core {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px 28px;
          width: 100%;
          padding: 20px 24px;
          text-align: left;
          font: inherit;
          color: #fff;
          background: color-mix(in srgb, var(--brand) 80%, #031a29);
          border: 0;
          border-radius: var(--radius-xl, 18px);
          cursor: pointer;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .eco-core:hover { transform: translateY(-2px); }
        .eco-core.is-active {
          transform: none;
          box-shadow: 0 0 0 3px var(--surface), 0 0 0 5px var(--brand);
        }
        .eco-core__head { display: flex; align-items: center; gap: 12px; }
        .eco-core__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.14);
        }
        .eco-core__name {
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.02em;
        }
        .eco-core__badge {
          padding: 3px 9px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .eco-core__desc {
          flex: 1 1 240px;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.86);
        }
        .eco-core__flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }
        .eco-core__flow i { margin-left: 8px; font-style: normal; opacity: 0.5; }
        .eco-core .eco-bar { background: #fff; opacity: 0.7; }

        /* ---------- Panel detail ---------- */
        .eco-panel {
          margin-top: clamp(20px, 3vw, 32px);
          min-height: 340px;
          padding: clamp(22px, 3.4vw, 44px);
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl, 18px);
        }
        .eco-panel__inner {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(24px, 4vw, 64px);
          animation: eco-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .eco-panel__kicker {
          margin: 0 0 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-variant-numeric: tabular-nums;
          color: var(--brand);
        }
        .eco-panel h3 {
          margin: 0 0 12px;
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: clamp(22px, 2.4vw, 32px);
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--foreground);
        }
        .eco-panel__desc { margin: 0; font-size: 15px; line-height: 1.7; color: var(--muted-foreground); }
        .eco-panel__note {
          margin: 16px 0 0;
          padding-left: 14px;
          border-left: 2px solid var(--brand);
          font-size: 14px;
          line-height: 1.65;
          color: var(--foreground);
        }
        .eco-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding-bottom: 3px;
          font-size: 14px;
          font-weight: 650;
          color: var(--foreground);
          text-decoration: none;
          border-bottom: 1.5px solid var(--brand);
          transition: gap 0.25s, color 0.25s;
        }
        .eco-cta:hover { gap: 12px; color: var(--brand); }

        .eco-group + .eco-group { margin-top: 28px; }
        .eco-group__label {
          margin: 0 0 4px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }
        .eco-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 32px;
        }
        .eco-list li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 11px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14.5px;
          line-height: 1.4;
          color: var(--foreground);
          opacity: 0;
          animation: eco-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: calc(var(--n) * 28ms + 80ms);
        }
        .eco-list li::before {
          content: "";
          flex: none;
          width: 5px;
          height: 5px;
          border-radius: 1px;
          background: var(--brand);
          transform: translateY(-2px) rotate(45deg);
        }
        .eco-list.is-ordered { grid-template-columns: 1fr; }
        .eco-list.is-ordered li::before { display: none; }
        .eco-list__n {
          min-width: 22px;
          font-size: 12px;
          font-variant-numeric: tabular-nums;
          color: var(--muted-foreground);
        }

        .eco-tab:focus-visible,
        .eco-core:focus-visible,
        .eco-cta:focus-visible { outline: 2px solid var(--brand); outline-offset: 3px; }

        /* ---------- Keyframes ---------- */
        @keyframes eco-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes eco-time { to { transform: scaleX(1); } }
        @keyframes eco-draw-y { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes eco-draw-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        /* ---------- Responsif ---------- */
        @media (max-width: 900px) {
          .eco-head { grid-template-columns: 1fr; align-items: start; }
          .eco-modules { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .eco-wires { display: none; }
          .eco-core { margin-top: var(--gap); }
          .eco-panel__inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .eco-list { grid-template-columns: 1fr; }
          .eco-core { padding: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .eco-stage { opacity: 1; transform: none; transition: none; }
          .eco-panel__inner,
          .eco-stub.is-on::after,
          .eco-bus-on,
          .eco-drop-on,
          .is-timing > .eco-bar { animation: none; }
          .eco-list li { opacity: 1; animation: none; }
          .eco-tab, .eco-core, .eco-cta { transition: none; }
          .eco-tab:hover, .eco-core:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}