import { Link } from "react-router"
import MilleLogo from "./MilleLogo"
import { produkGroups } from "./nav/navData"

type FooterColumn = {
  heading: string
  headingHref?: string
  links: { label: string; href: string }[]
  appBadges?: boolean
}

const footerColumns: FooterColumn[] = [
  {
    heading: produkGroups[0].title,
    headingHref: produkGroups[0].href,
    links: produkGroups[0].items,
  },
  {
    heading: "Produk Lainnya",
    links: [
      ...produkGroups
        .slice(1)
        .map((group) => ({ label: group.title, href: group.href })),
      { label: "OptiMille AI", href: "/optimille" },
    ],
  },
  {
    heading: "Solusi Bisnis",
    links: [
      { label: "Restoran", href: "/solusi/restoran" },
      { label: "Kedai Kopi", href: "/solusi/kedai-kopi" },
      { label: "Cepat Saji", href: "/solusi/cepat-saji" },
      { label: "Bakery", href: "/solusi/bakery" },
      { label: "Toko Ritel", href: "/solusi/toko-retail" },
      { label: "Salon & Spa", href: "/solusi/salon-spa" },
    ],
  },
  {
    heading: "Perusahaan",
    links: [
      { label: "Tentang Perusahaan", href: "/tentang-perusahaan" },
      { label: "Blog", href: "/blog" },
      { label: "Karir", href: "/karir" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Download",
    links: [{ label: "Unduh App", href: "/unduh" }],
    appBadges: true,
  },
]

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12a4 4 0 104 4V4a5 5 0 005 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: "var(--foreground)", color: "#FFFFFF" }}>
      {/* Main footer body */}
      <div
        className="container-page"
        style={{ paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: 0 }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1.3fr 1.1fr 0.9fr 0.9fr 1fr",
            gap: "clamp(24px, 3vw, 48px)",
            marginBottom: "clamp(48px, 5vw, 72px)",
          }}
        >
          {/* Brand column */}
          <div style={{ paddingRight: 16 }}>
            {/* Logo */}
            <div style={{ marginBottom: 16 }}>
              <MilleLogo variant="dark" height={30} />
            </div>

            <p
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                marginBottom: 24,
                maxWidth: 260,
              }}
            >
              Platform Operasional &amp; Manajemen Bisnis Terintegrasi untuk
              F&amp;B, ritel, dan bisnis layanan di Indonesia.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition:
                      "background 0.15s, color 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(0,154,229,0.2)"
                    el.style.color = "var(--brand-light)"
                    el.style.borderColor = "rgba(0,154,229,0.3)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(255,255,255,0.04)"
                    el.style.color = "rgba(255,255,255,0.45)"
                    el.style.borderColor = "rgba(255,255,255,0.1)"
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              {col.headingHref ? (
                <Link
                  to={col.headingHref}
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.4,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 16,
                    textDecoration: "none",
                  }}
                >
                  {col.heading}
                </Link>
              ) : (
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.4,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </p>
              )}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = "#FFFFFF"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.55)"
                    }}
                  >
                    {col.heading === "Download" && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ opacity: 0.5 }}
                      >
                        <path
                          d="M8 2v9M5 8l3 3 3-3M3 13h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingBlock: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.3)" }}>
            © 2026 Mille. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.7)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.3)"
                  }}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
