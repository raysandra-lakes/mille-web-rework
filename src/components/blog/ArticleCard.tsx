import { useState } from "react"
import { Link } from "react-router"
import {
  categoryColors,
  type BlogPost,
} from "../../data/blogData"

export default function ArticleCard({ article }: { article: BlogPost }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/blog/${article.slug}`}
      aria-label={`Baca artikel: ${article.title}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", height: "100%", textDecoration: "none" }}
    >
      <article
        className="card"
        style={{
          overflow: "hidden",
          cursor: "pointer",
          transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
          borderColor: hovered ? "var(--foreground)" : "var(--border)",
          boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.09)" : "none",
          transform: hovered ? "translateY(-3px)" : "none",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10", background: "var(--surface)" }}>
          <img
            src={article.img}
            alt={article.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              padding: "4px 11px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
              background: categoryColors[article.category],
            }}
          >
            {article.category}
          </span>
        </div>
        <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{article.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--border)" }} />
            <span style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{article.readTime} baca</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-display-family)", fontWeight: 700, fontSize: 17, lineHeight: 1.4, letterSpacing: "-0.015em", color: "var(--foreground)", marginBottom: 12 }}>
            {article.title}
          </h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--muted-foreground)", marginBottom: 20 }}>
            {article.excerpt}
          </p>
          <span style={{ display: "flex", alignItems: "center", gap: hovered ? 10 : 6, marginTop: "auto", fontSize: 13.5, fontWeight: 600, color: hovered ? "var(--brand)" : "var(--muted-foreground)", transition: "color 0.2s, gap 0.2s" }}>
            Baca Selengkapnya
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
