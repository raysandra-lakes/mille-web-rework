import { useEffect, useMemo, useRef, useState } from "react";
import { clients } from "../../data/client";
import type { Client } from "../../data/client.types";

function LogoItem({
  customer,
  onSelect,
  focusable,
}: {
  customer: Client;
  onSelect: (c: Client, trigger: HTMLElement) => void;
  focusable: boolean; // false untuk grup duplikat (aria-hidden)
}) {
  const clickable = Boolean(customer.testimonial);

  const content = (
    <>
      {customer.logo ? (
        <img
          src={customer.logo}
          alt={customer.name}
          loading="lazy"
          className="logo-img"
          draggable={false}
        />
      ) : (
        <>
          <span className="logo-mark" />
          <span className="logo-label">{customer.name}</span>
        </>
      )}
    </>
  );

  if (!clickable) {
    return (
      <div className="logo-item" title={customer.sector}>
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="logo-item is-clickable"
      title={customer.name}
      tabIndex={focusable ? 0 : -1}
      aria-haspopup="dialog"
      aria-label={`Lihat testimoni ${customer.name}`}
      onClick={(e) => onSelect(customer, e.currentTarget)}
    >
      {content}
    </button>
  );
}

function MarqueeRow({
  items,
  onSelect,
  paused,
  reverse = false,
  duration = 40,
}: {
  items: Client[];
  onSelect: (c: Client, trigger: HTMLElement) => void;
  paused: boolean;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className={`marquee${paused ? " is-paused" : ""}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group} aria-hidden={group === 1}>
            {items.map((c) => (
              <LogoItem
                key={`${group}-${c.id}`}
                customer={c}
                onSelect={onSelect}
                focusable={group === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars" role="img" aria-label={`Rating ${rating} dari 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={n <= rating ? "var(--brand)" : "none"}
          stroke="var(--brand)"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialModal({ customer, onClose }: { customer: Client; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const t = customer.testimonial!;

  useEffect(() => {
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Kunci scroll halaman selama modal terbuka
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const meta = [customer.sector, customer.location, customer.since && `${customer.since}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="tm-backdrop" onClick={onClose}>
      <div
        className="tm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tm-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="tm-close" onClick={onClose} aria-label="Tutup">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="tm-head">
          {customer.logo ? (
            <img src={customer.logo} alt="" className="tm-logo" />
          ) : (
            <span className="logo-mark tm-mark" />
          )}
          <div>
            <h3 id="tm-title" className="tm-name">{customer.name}</h3>
            {meta && <p className="tm-meta">{meta}</p>}
          </div>
        </div>

        {t.rating && <Stars rating={t.rating} />}

        <blockquote className="tm-quote">“{t.quote}”</blockquote>

        <div className="tm-author">
          <strong>{t.author}</strong>
          <span>{t.role}</span>
        </div>

        {customer.website && (
          <a className="tm-link" href={customer.website} target="_blank" rel="noopener noreferrer">
            Kunjungi website →
          </a>
        )}
      </div>
    </div>
  );
}

export default function CustomerLogos() {
  const [selected, setSelected] = useState<Client | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const [rowA, rowB] = useMemo(() => {
    const half = Math.ceil(clients.length / 2);
    return [clients.slice(0, half), clients.slice(half)];
  }, []);

  const open = (c: Client, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(c);
  };

  const close = () => {
    setSelected(null);
    // Kembalikan fokus ke logo yang tadi diklik
    triggerRef.current?.focus();
  };

  return (
    <section style={{ background: "var(--surface)", paddingBlock: "clamp(72px, 8vw, 112px)" }}>
      <style>{`
        .marquee {  
        --item-pad-y: clamp(16px, 1.6vw, 22px);
        --item-pad-x: clamp(22px, 2.2vw, 32px);
        --item-gap: 14px;         
        --item-radius: 14px;
        --item-spacing: 16px;     
        --logo-h: clamp(36px, 3.4vw, 52px);  
        --logo-max-w: 180px;
        --mark-size: clamp(36px, 3.4vw, 48px); 
        --label-size: clamp(14px, 1.2vw, 17px);

          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
                  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee:hover .marquee-track,
        .marquee:has(focus-visible) .marquee-track {
          animation-play-state: paused;
        }
        .marquee-group {
          display: flex;
          gap: var(--item-spacing);
          padding-right: var(--item-spacing);
          flex-shrink: 0;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .logo-item {
          display: flex;
          align-items: center;
          gap: var(--item-gap);
          padding: var(--item-pad-y) var(--item-pad-x);
          border: 1px solid var(--border);
          border-radius: var(--item-radius);
          background: var(--card);
          opacity: 0.6;
          cursor: default;
          font: inherit;
          color: inherit;
          transition: border-color 0.2s, opacity 0.2s, transform 0.2s;
        }
        .logo-item.is-clickable { cursor: pointer; }
        .logo-item:hover,
        .logo-item:focus-visible {
          opacity: 1;
          border-color: var(--foreground);
        }
        .logo-item:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }

        .logo-mark {
          width: var(--mark-size, 28px);
          height: var(--mark-size, 28px);
          border-radius: 7px;
          background: var(--surface);
          border: 1px solid var(--border);
          flex-shrink: 0;
          }
        .logo-img {
          height: var(--logo-h);
          width: auto;
          max-width: var(--logo-max-w);
          object-fit: contain;
          filter: grayscale(1);
          transition: filter 0.2s;
        }
        .logo-item:hover .logo-img { filter: grayscale(0); }
        .logo-label {
          font-size: var(--label-size);
          font-weight: 500;
          color: var(--muted-foreground);
          font-family: var(--font-body-family);
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        /* ---------- Modal testimoni ---------- */
        .tm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          animation: tm-fade 0.2s ease both;
        }
        .tm-dialog {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 680px;
          max-height: calc(100dvh - 190px);
          overflow-y: auto;
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--card);
          color: var(--foreground);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
          animation: tm-pop 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .tm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: transparent;
          color: var(--foreground);
          cursor: pointer;
        }
        .tm-close:hover { background: var(--surface); }
        .tm-close:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }

        .tm-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; padding-right: 40px; }
        .tm-mark { width: 44px; height: 44px; border-radius: 10px; }
        .tm-logo { height: 80px; width: auto; max-width: 120px; object-fit: contain; }
        .tm-name {
          margin: 0;
          font-family: var(--font-display-family);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.02em;
        }
        .tm-meta { margin: 2px 0 0; font-size: 13px; color: var(--muted-foreground); }
        .stars { display: flex; gap: 2px; margin-bottom: 14px; }
        .tm-quote {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.7;
          color: var(--foreground);
        }
        .tm-author { display: flex; flex-direction: column; gap: 2px; font-size: 14px; }
        .tm-author span { color: var(--muted-foreground); font-size: 13px; }
        .tm-link {
          display: inline-block;
          margin-top: 18px;
          font-size: 14px;
          font-weight: 600;
          color: var(--brand);
          text-decoration: none;
        }
        .tm-link:hover { text-decoration: underline; }

        @keyframes tm-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes tm-pop {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .marquee { overflow-x: auto; }
          .tm-backdrop, .tm-dialog { animation: none; }
          .logo-item.is-clickable:hover { transform: none; }
        }
      `}</style>

      <div className="container-page">
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

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          <MarqueeRow items={rowA} onSelect={open} paused={!!selected} duration={50} />
          <MarqueeRow items={rowB} onSelect={open} paused={!!selected} duration={58} reverse />
        </div>
      </div>

      {selected?.testimonial && <TestimonialModal customer={selected} onClose={close} />}
    </section>
  );
}