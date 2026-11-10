import { Link } from "react-router"
import ArticleCard from "../blog/ArticleCard"
import { posts } from "../../data/blogData"

export default function Blog() {
  return (
    <section style={{ background: "var(--surface)", paddingBlock: "clamp(80px, 9vw, 128px)" }}>
      <div className="container-page">
        <div className="blog-header" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "flex-end", marginBottom: "clamp(40px, 5vw, 60px)" }}>
          <div>
            <p className="type-eyebrow" style={{ marginBottom: 14 }}>Insight & Edukasi</p>
            <h2 style={{ fontFamily: "var(--font-display-family)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--foreground)", marginBottom: 12 }}>
              Insight untuk Membantu Bisnis Bertumbuh.
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.1vw, 17px)", color: "var(--muted-foreground)", lineHeight: 1.65, maxWidth: 500 }}>
              Temukan insight, strategi, dan informasi terbaru untuk membantu Anda mengelola bisnis dengan lebih baik.
            </p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 pb-1 text-sm font-semibold text-brand no-underline transition hover:gap-3">
            Lihat Semua Artikel
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {posts.slice(0, 3).map((article, index) => (
            <div key={article.slug} className={`reveal reveal-delay-${index + 1}`}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
