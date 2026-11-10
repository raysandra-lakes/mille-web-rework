import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import MilleLogo from "./MilleLogo";
import {
  produkGroups,
  solusiItems,
  optimiItems,
  berlanggananItems,
  lainnyaItems,
} from "./nav/navData";

type MenuKey = "produk" | "solusi" | "optimille" | "berlangganan" | "lainnya" | null;

/* ─── Logo ─── */
function NavbarLogo() {
  return (
    <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", userSelect: "none" }} aria-label="Mille — Beranda">
      <MilleLogo variant="light" height={28} />
    </a>
  );
}

/* ─── Arrow icon ─── */
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{
        transition: "transform 0.2s ease",
        transform: open ? "rotate(-180deg)" : "rotate(0deg)",
        color: "currentColor",
      }}
    >
      <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Mega Menu: Produk ─── */
function ProdukMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="mega-menu-panel" style={{ left: 0, right: 0, maxWidth: "none", maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "34px clamp(20px,3.5vw,64px)" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: 6 }}>
            Produk Mille
          </h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: 15 }}>
            Kelola seluruh operasional bisnis dalam satu sistem terintegrasi.
          </p>
        </div>

        {/* Responsive 5-column product architecture */}
        <div className="produk-menu-grid">
          {produkGroups.map((group) => (
            <div key={group.num} style={{ minWidth: 0 }}>
              <div style={{ marginBottom: 12 }}>
                <span style={{ display: "block", fontFamily: "var(--font-body-family)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--brand)", opacity: 0.72, marginBottom: 8 }}>
                  {group.num}
                </span>
                <Link
                  to={group.href}
                  onClick={onClose}
                  style={{ display: "inline-block", fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 14, lineHeight: 1.35, letterSpacing: "-0.01em", color: "var(--foreground)", marginBottom: 7, textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                >
                  {group.title}
                </Link>
                <p style={{ fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                  {group.desc}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={onClose}
                    style={{
                      fontSize: 13.5,
                      color: "var(--muted-foreground)",
                      padding: "3px 0",
                      textDecoration: "none",
                      transition: "color 0.15s",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--brand)", opacity: 0.35, display: "inline-block", flexShrink: 0 }} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 8, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <a
            href="#"
            onClick={onClose}
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--brand)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "gap 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}
          >
            Lihat Semua Produk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Dropdown: Solusi Bisnis ─── */
function SolusiMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="dropdown-panel" style={{ width: 480 }}>
      <div style={{ padding: "24px 28px 20px" }}>
        <p style={{ fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 15, color: "var(--foreground)", marginBottom: 4 }}>Solusi Bisnis</p>
        <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 20 }}>
          Solusi yang disesuaikan dengan kebutuhan operasional setiap bisnis.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {solusiItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 12px",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: 18, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 2 }}>{item.title}</p>
                <p style={{ fontSize: 12.5, color: "var(--muted-foreground)", lineHeight: 1.45 }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
          <a href="#" onClick={onClose} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--brand)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
            Lihat Semua Solusi
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Dropdown: OptiMille ─── */
function OptiMilleMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="dropdown-panel" style={{ width: 460 }}>
      <div style={{ padding: "24px 28px 20px" }}>
        {/* Header with visual */}
        <div style={{ background: "linear-gradient(135deg, var(--brand-subtle) 0%, #F3E8FF 100%)", borderRadius: "var(--radius-md)", padding: "16px 18px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: "linear-gradient(135deg, var(--brand) 0%, #0072CC 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2L9.8 6.2L14 7L10.9 10.1L11.7 14.2L8 12L4.3 14.2L5.1 10.1L2 7L6.2 6.2L8 2Z" fill="white" /></svg>
            </div>
            <span style={{ fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 14, color: "var(--brand)" }}>OptiMille</span>
          </div>
          <p style={{ fontSize: 12.5, color: "var(--foreground)", lineHeight: 1.55, opacity: 0.75 }}>
            Kecerdasan bisnis untuk membantu Anda memahami data, menemukan insight, dan mengambil keputusan dengan lebih tepat.
          </p>
          {/* Mini chart decoration */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginTop: 12, opacity: 0.6 }}>
            {[40, 55, 38, 70, 52, 84, 65, 90].map((h, i) => (
              <div key={i} style={{ flex: 1, height: h * 0.4, background: i === 7 ? "var(--brand)" : "rgba(0,154,229,0.25)", borderRadius: 2, transition: "height 0.3s" }} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {optimiItems.map((item) => (
            <a
              key={item.title}
              href="#"
              onClick={onClose}
              style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "9px 12px", borderRadius: "var(--radius-md)", textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg, var(--brand), #0072CC)", flexShrink: 0, marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: "var(--foreground)", marginBottom: 1 }}>{item.title}</p>
                <p style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
          <Link to="/optimille" onClick={onClose} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--brand)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
            Kenali OptiMille
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Dropdown: Berlangganan ─── */
function BerlanggananMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="dropdown-panel" style={{ width: 380 }}>
      <div style={{ padding: "24px 28px 20px" }}>
        <p style={{ fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 15, color: "var(--foreground)", marginBottom: 16 }}>Berlangganan Mille</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {berlanggananItems.map((item) => (
            <a
              key={item.title}
              href="#"
              onClick={onClose}
              style={{ display: "flex", flexDirection: "column", padding: "10px 12px", borderRadius: "var(--radius-md)", textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 2 }}>{item.title}</p>
              <p style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>{item.desc}</p>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
          <Link to="/berlangganan" onClick={onClose} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--brand)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
            Lihat Paket
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Dropdown: Lainnya ─── */
function LainnyaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="dropdown-panel" style={{ width: 220, right: 0, left: "auto" }}>
      <div style={{ padding: "12px 8px" }}>
        {lainnyaItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            onClick={onClose}
            style={{ display: "block", padding: "9px 16px", fontSize: 14, color: "var(--foreground)", textDecoration: "none", borderRadius: "var(--radius-sm)", transition: "background 0.15s, color 0.15s", fontWeight: 500 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.color = "var(--brand)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground)"; }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile Nav ─── */
function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (key: string) => setExpanded((v) => (v === key ? null : key));

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const sections = [
    {
      key: "produk",
      label: "Produk",
      items: produkGroups.flatMap((group, index) => [
        { label: group.title, href: group.href },
        ...(index === 0 ? group.items : []),
      ]),
    },
    { key: "solusi", label: "Solusi Bisnis", items: solusiItems.map((item) => ({ label: item.title, href: "#" })) },
    { key: "optimille", label: "OptiMille", items: optimiItems.map((item) => ({ label: item.title, href: "/optimille" })) },
    { key: "berlangganan", label: "Berlangganan", items: berlanggananItems.map((item) => ({ label: item.title, href: item.href })) },
    { key: "lainnya", label: "Lainnya", items: lainnyaItems.map((item) => ({ label: item.title, href: item.href })) },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 999, top: 60, background: "#fff", overflowY: "auto" }}>
      <div style={{ padding: "16px 24px 32px" }}>
        {sections.map((s) => (
          <div key={s.key} style={{ borderBottom: "1px solid var(--border)" }}>
            <button
              onClick={() => toggle(s.key)}
              style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-display-family)", fontSize: 16, fontWeight: 600, color: "var(--foreground)" }}
            >
              {s.label}
              <ChevronDown open={expanded === s.key} />
            </button>
            {expanded === s.key && (
              <div style={{ paddingBottom: 12 }}>
                {s.items.map((item) => (
                  <Link key={`${s.key}-${item.label}`} to={item.href} onClick={onClose} style={{ display: "block", padding: "8px 12px", fontSize: 14, color: "var(--muted-foreground)", textDecoration: "none", borderRadius: "var(--radius-sm)" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
          <a href="#" onClick={onClose} className="btn btn-primary" style={{ justifyContent: "center" }}>Coba Gratis</a>
          <a href="#" onClick={onClose} className="btn btn-secondary" style={{ justifyContent: "center" }}>Masuk</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveMenu(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Click-outside to close */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const navItems: { key: MenuKey; label: string }[] = [
    { key: "produk", label: "Produk" },
    { key: "solusi", label: "Solusi Bisnis" },
    { key: "optimille", label: "OptiMille" },
    { key: "berlangganan", label: "Berlangganan" },
    { key: "lainnya", label: "Lainnya" },
  ];

  return (
    <>
      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .navbar-root.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }
        .navbar-root:not(.scrolled) {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 80px);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        .nav-item {
          position: relative;
        }
        .nav-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 13px;
          font-family: var(--font-body-family);
          font-size: 14.5px;
          font-weight: 500;
          color: var(--muted-foreground);
          background: none;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
          line-height: 1;
        }
        .nav-trigger:hover,
        .nav-trigger.active {
          color: var(--foreground);
          background: var(--surface);
        }
        .nav-trigger.active {
          color: var(--brand);
        }
        .produk-menu-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 28px;
        }
        .mega-menu-panel {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: #fff;
          border-bottom: 1px solid var(--border);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
          animation: menuSlideDown 0.18s ease;
          z-index: 99;
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.04);
          animation: menuSlideDown 0.18s ease;
          z-index: 99;
          overflow: hidden;
        }
        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--foreground);
          border-radius: 1px;
          transition: transform 0.2s, opacity 0.2s;
        }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .nav-actions .btn-secondary { display: none; }
        }
        @media (min-width: 901px) and (max-width: 1180px) {
          .produk-menu-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 32px;
          }
        }
      `}</style>

      <nav ref={navRef} className={`navbar-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop nav links */}
          <div className="nav-links">
            {navItems.map(({ key, label }) => (
              <div
                key={key}
                className="nav-item"
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`nav-trigger${activeMenu === key ? " active" : ""}`}
                  onClick={() => setActiveMenu((v) => (v === key ? null : key))}
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                >
                  {label}
                  <ChevronDown open={activeMenu === key} />
                </button>

                {activeMenu === key && (
                  <div onMouseEnter={cancelClose} onMouseLeave={closeMenu}>
                    {key === "produk" && <ProdukMenu onClose={() => setActiveMenu(null)} />}
                    {key === "solusi" && <SolusiMenu onClose={() => setActiveMenu(null)} />}
                    {key === "optimille" && <OptiMilleMenu onClose={() => setActiveMenu(null)} />}
                    {key === "berlangganan" && <BerlanggananMenu onClose={() => setActiveMenu(null)} />}
                    {key === "lainnya" && <LainnyaMenu onClose={() => setActiveMenu(null)} />}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <a href="#" className="btn btn-ghost btn-sm" style={{ color: "var(--muted-foreground)", fontSize: 14, fontWeight: 500 }}>
              Masuk
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              {"Coba Gratis  "}
            </a>
            {/* Mobile hamburger */}
            <button
              className="hamburger"
              aria-label="Buka menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Overlay behind mega menus */}
      {activeMenu && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 98, top: 64 }}
          onClick={() => setActiveMenu(null)}
        />
      )}
    </>
  );
}
