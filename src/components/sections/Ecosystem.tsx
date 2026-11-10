import { useState } from "react";
import { useNavigate } from "react-router";

type NodePosition = "top" | "left" | "bottom" | "right" | "core";

type EcosystemNode = {
  id: string;
  position: NodePosition;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  detail?: string;
};

const ecosystemNodes: EcosystemNode[] = [
  {
    id: "sales",
    position: "top",
    title: "OPERASIONAL, PEMESANAN, & PEMBAYARAN",
    description: "Mengelola aktivitas bisnis sehari-hari, dari pemesanan hingga transaksi selesai.",
    features: [
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
  {
    id: "inventory",
    position: "left",
    title: "02 — INVENTARIS & RANTAI PASOKAN",
    description: "Mengontrol persediaan dan aliran barang dari pengadaan hingga penggunaan.",
    features: [
      "Pengelolaan Inventaris",
      "Supplier & Pembelian",
      "Gudang & Produksi",
      "Transfer Stok",
      "Stock Opname",
      "Perhitungan HPP",
    ],
  },
  {
    id: "business",
    position: "bottom",
    title: "03 — PENGELOLAAN BISNIS & KEUANGAN",
    description: "Mengendalikan berbagai aspek bisnis dari satu pusat backoffice terintegrasi.",
    features: [
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
  {
    id: "people",
    position: "right",
    title: "PENGELOLAAN KARYAWAN & PELANGGAN",
    description: "Mengelola tim operasional sekaligus membangun hubungan dengan pelanggan.",
    features: [
      "Karyawan — Data, Absensi, Shift, Performa, Komisi, Payroll",
      "Pelanggan — Database, Segmentasi, Program Loyalitas, Referral, Kampanye Marketing, Ulasan, Gift Card, Otomasi",
    ],
  },
  {
    id: "optimille",
    position: "core",
    title: "OPTIMILLE",
    badge: "Intelligence Layer",
    description: "Mengubah data dari seluruh aktivitas bisnis menjadi insight dan keputusan.",
    features: [],
    detail: "Intelligence layer mengolah data dari Penjualan, Inventaris, Keuangan, serta Karyawan & Pelanggan menjadi keputusan bisnis yang terarah.",
  },
];

function EcosystemCard({
  node,
  isExpanded,
  onExpand,
  onCollapse,
  destination,
}: {
  node: EcosystemNode;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  destination?: string;
}) {
  const isCore = node.position === "core";
  const navigate = useNavigate();
  const openNode = () => destination ? navigate(destination) : isExpanded ? onCollapse() : onExpand();

  return (
    <article
      className={`ecosystem-node ecosystem-node--${node.position}${isCore ? " ecosystem-node--intelligence" : ""}${isExpanded ? " is-expanded" : ""}`}
      tabIndex={0}
      aria-expanded={isExpanded}
      onMouseEnter={onExpand}
      onMouseLeave={onCollapse}
      onFocus={onExpand}
      onBlur={onCollapse}
      role={destination ? "link" : undefined}
      onClick={openNode}
      onKeyDown={(event) => {
        if (destination && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          navigate(destination);
        }
      }}
    >
      <div className="ecosystem-node__topline">
        <span className="ecosystem-node__signal" aria-hidden="true">
          <span />
        </span>
        {node.badge && <span className="ecosystem-node__badge">{node.badge}</span>}
        <span className="ecosystem-node__hint" aria-hidden="true">{isExpanded ? "−" : "+"}</span>
      </div>

      <h3>{node.title}</h3>
      <p>{node.description}</p>

      {isCore && (
        <div className="ecosystem-flow" aria-label="Data menuju analisis, insight, rekomendasi, dan keputusan">
          {["DATA", "ANALISIS", "INSIGHT", "REKOMENDASI", "KEPUTUSAN"].map((step, index) => (
            <span key={step}>
              {step}
              {index < 4 && <b aria-hidden="true">→</b>}
            </span>
          ))}
        </div>
      )}

      <div className="ecosystem-node__drawer" aria-hidden={!isExpanded}>
        <div className="ecosystem-node__drawer-inner">
          <div className="ecosystem-node__drawer-label">
            {isCore ? "Cara kerja OptiMille" : "Fitur yang terhubung"}
          </div>
          {node.detail ? (
            <p className="ecosystem-node__detail">{node.detail}</p>
          ) : (
            <div className="ecosystem-node__features">
              {node.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Ecosystem() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="ecosystem-section">
      <div className="container-page">
        <div className="ecosystem-heading">
          <p className="type-eyebrow">EKOSISTEM TERINTEGRASI</p>
          <h2>Satu Sistem untuk Seluruh Operasional Bisnis.</h2>
          <p className="ecosystem-heading__description">
            Mille menghubungkan berbagai kebutuhan operasional bisnis dalam satu ekosistem.
          </p>
          <a href="#" className="ecosystem-heading__link">
            Lihat Semua Produk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="ecosystem-diamond">
          <svg className="ecosystem-connectors" viewBox="0 0 1180 664" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="ecosystem-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.12" />
                <stop offset="50%" stopColor="var(--brand)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.12" />
              </linearGradient>
              <filter id="ecosystem-glow" x="-300%" y="-300%" width="700%" height="700%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path d="M590 184 C590 204 590 220 590 240" />
            <path d="M352 332 C370 332 384 332 404 332" />
            <path d="M828 332 C810 332 796 332 776 332" />
            <path d="M590 480 C590 460 590 444 590 424" />

            <g className="ecosystem-pulses" filter="url(#ecosystem-glow)">
              <circle r="4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M590 184 C590 204 590 220 590 240" /></circle>
              <circle r="4"><animateMotion dur="2.7s" begin="0.4s" repeatCount="indefinite" path="M352 332 C370 332 384 332 404 332" /></circle>
              <circle r="4"><animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite" path="M828 332 C810 332 796 332 776 332" /></circle>
              <circle r="4"><animateMotion dur="2.8s" begin="1.1s" repeatCount="indefinite" path="M590 480 C590 460 590 444 590 424" /></circle>
            </g>
          </svg>

          {ecosystemNodes.map((node) => (
            <EcosystemCard
              key={node.id}
              node={node}
              isExpanded={expandedId === node.id}
              onExpand={() => setExpandedId(node.id)}
              onCollapse={() => setExpandedId((current) => current === node.id ? null : current)}
              destination={node.id === "sales" ? "/produk/operasional-pemesanan-pembayaran" : node.id === "inventory" ? "/produk/inventaris-rantai-pasokan" : node.id === "business" ? "/produk/pengelolaan-bisnis-keuangan" : undefined}
            />
          ))}
        </div>
      </div>

      <style>{`
        .ecosystem-section {
          background: #f8fafc;
          padding-block: clamp(80px, 9vw, 128px);
          overflow: hidden;
        }

        .ecosystem-heading {
          max-width: 780px;
          margin: 0 auto clamp(64px, 7vw, 92px);
          text-align: center;
        }

        .ecosystem-heading > .type-eyebrow {
          margin-bottom: 14px;
        }

        .ecosystem-heading h2 {
          margin: 0;
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: clamp(30px, 3.4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--foreground);
        }

        .ecosystem-heading__description {
          max-width: 640px;
          margin: 20px auto 18px;
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.7;
          color: var(--muted-foreground);
        }

        .ecosystem-heading__link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--brand);
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: gap 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        .ecosystem-heading__link:hover {
          gap: 12px;
          color: var(--brand-gradient-end);
        }

        .ecosystem-diamond {
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-columns: minmax(250px, 1fr) minmax(320px, 1.18fr) minmax(250px, 1fr);
          grid-template-rows: repeat(3, 184px);
          grid-template-areas:
            ". top ."
            "left core right"
            ". bottom .";
          column-gap: clamp(36px, 5vw, 64px);
          row-gap: 56px;
          max-width: 1180px;
          min-height: 664px;
          margin: 0 auto 190px;
        }

        .ecosystem-connectors {
          position: absolute;
          inset: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        .ecosystem-connectors > path {
          fill: none;
          stroke: url(#ecosystem-line);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 5 7;
        }

        .ecosystem-pulses circle {
          fill: var(--brand);
        }

        .ecosystem-node {
          position: relative;
          z-index: 1;
          min-width: 0;
          min-height: 184px;
          padding: 24px 26px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-xl);
          box-shadow: 0 10px 34px rgba(15, 23, 42, 0.045);
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .ecosystem-node--top { grid-area: top; }
        .ecosystem-node--left { grid-area: left; }
        .ecosystem-node--bottom { grid-area: bottom; }
        .ecosystem-node--right { grid-area: right; }
        .ecosystem-node--core { grid-area: core; }

        .ecosystem-node:hover,
        .ecosystem-node:focus-visible,
        .ecosystem-node.is-expanded {
          z-index: 10;
          border-color: rgba(0, 154, 229, 0.45);
          box-shadow: 0 22px 54px rgba(15, 23, 42, 0.12), 0 0 0 4px rgba(0, 154, 229, 0.07);
          transform: translateY(-4px);
        }

        .ecosystem-node--intelligence {
          color: #ffffff;
          background: linear-gradient(145deg, #087fba 0%, var(--brand) 48%, #0072cc 100%);
          border-color: rgba(0, 154, 229, 0.8);
          box-shadow: 0 22px 54px rgba(0, 114, 204, 0.22), 0 0 0 8px rgba(0, 154, 229, 0.07);
        }

        .ecosystem-node--intelligence:hover,
        .ecosystem-node--intelligence:focus-visible,
        .ecosystem-node--intelligence.is-expanded {
          border-color: rgba(255, 255, 255, 0.72);
          box-shadow: 0 28px 64px rgba(0, 114, 204, 0.3), 0 0 0 10px rgba(0, 154, 229, 0.09);
        }

        .ecosystem-node__topline {
          display: flex;
          align-items: center;
          min-height: 24px;
          margin-bottom: 15px;
        }

        .ecosystem-node__signal {
          display: grid;
          width: 24px;
          height: 24px;
          place-items: center;
          border-radius: 999px;
          background: var(--brand-subtle);
        }

        .ecosystem-node__signal > span {
          width: 7px;
          height: 7px;
          border-radius: inherit;
          background: var(--brand);
          box-shadow: 0 0 0 4px rgba(0, 154, 229, 0.12);
        }

        .ecosystem-node--intelligence .ecosystem-node__signal {
          background: rgba(255, 255, 255, 0.16);
        }

        .ecosystem-node--intelligence .ecosystem-node__signal > span {
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.13);
        }

        .ecosystem-node__badge {
          margin-left: 9px;
          padding: 4px 9px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .ecosystem-node__hint {
          margin-left: auto;
          color: var(--brand);
          font-family: var(--font-display-family);
          font-size: 20px;
          font-weight: 500;
          line-height: 1;
          transition: transform 0.3s ease-in-out;
        }

        .ecosystem-node--intelligence .ecosystem-node__hint {
          color: rgba(255, 255, 255, 0.8);
        }

        .ecosystem-node.is-expanded .ecosystem-node__hint {
          transform: rotate(180deg);
        }

        .ecosystem-node h3 {
          margin: 0 0 9px;
          color: var(--foreground);
          font-family: var(--font-display-family);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.38;
          letter-spacing: -0.01em;
          text-align: center;
        }

        .ecosystem-node > p {
          margin: 0;
          color: var(--muted-foreground);
          font-size: 13px;
          line-height: 1.55;
          text-align: center;
        }

        .ecosystem-node--intelligence h3,
        .ecosystem-node--intelligence > p {
          color: #ffffff;
        }

        .ecosystem-node--intelligence > p {
          color: rgba(255, 255, 255, 0.78);
        }

        .ecosystem-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 17px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .ecosystem-flow span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.04em;
        }

        .ecosystem-flow b {
          color: rgba(255, 255, 255, 0.45);
          font-size: 10px;
          font-weight: 500;
        }

        .ecosystem-node__drawer {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: 100%;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
          transform: translateY(-8px);
          transition: all 0.3s ease-in-out;
        }

        .ecosystem-node--bottom .ecosystem-node__drawer {
          top: auto;
          bottom: calc(100% + 10px);
          transform: translateY(8px);
        }

        .ecosystem-node.is-expanded .ecosystem-node__drawer {
          max-height: 420px;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .ecosystem-node__drawer-inner {
          padding: 20px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-xl);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.15);
        }

        .ecosystem-node__drawer-label {
          margin-bottom: 12px;
          color: var(--brand);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .ecosystem-node__features {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ecosystem-node__features span {
          padding: 6px 9px;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 550;
          line-height: 1.35;
        }

        .ecosystem-node__detail {
          margin: 0;
          color: #475569 !important;
          font-size: 12.5px !important;
          line-height: 1.65 !important;
        }

        @media (max-width: 980px) {
          .ecosystem-diamond {
            grid-template-columns: minmax(210px, 1fr) minmax(280px, 1.1fr) minmax(210px, 1fr);
            column-gap: 28px;
          }

          .ecosystem-node {
            padding: 21px;
          }

          .ecosystem-connectors {
            opacity: 0.65;
          }
        }

        @media (max-width: 760px) {
          .ecosystem-section {
            overflow: visible;
          }

          .ecosystem-heading {
            margin-bottom: 48px;
            text-align: left;
          }

          .ecosystem-heading__description {
            margin-left: 0;
            margin-right: 0;
          }

          .ecosystem-diamond {
            display: flex;
            flex-direction: column;
            gap: 14px;
            min-height: 0;
            margin-bottom: 0;
          }

          .ecosystem-connectors {
            display: none;
          }

          .ecosystem-node {
            min-height: 0;
          }

          .ecosystem-node--intelligence {
            order: 5;
          }

          .ecosystem-node__drawer,
          .ecosystem-node--bottom .ecosystem-node__drawer {
            position: relative;
            top: auto;
            bottom: auto;
            margin-top: 0;
          }

          .ecosystem-node.is-expanded .ecosystem-node__drawer {
            margin-top: 16px;
          }

          .ecosystem-node__drawer-inner {
            box-shadow: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ecosystem-section *,
          .ecosystem-section *::before,
          .ecosystem-section *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }

          .ecosystem-pulses {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
