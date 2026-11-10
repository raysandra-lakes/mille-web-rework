import { useEffect, useMemo, useRef } from "react"
import { Link, useSearchParams } from "react-router"
import ArticleCard from "../components/blog/ArticleCard"
import ClosingBanner from "../components/shared/ClosingBanner"
import { categories, categoryColors, posts, type BlogCategory } from "../data/blogData"

const perPage = 6

function BlogHeader() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-20">
      <div className="absolute right-[8%] top-[-10rem] size-[30rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px]"><Link to="/" className="text-muted-foreground no-underline hover:text-brand">Beranda</Link><span className="text-border">/</span><span className="font-semibold text-foreground">Blog</span></nav>
        <div className="max-w-4xl"><div className="badge badge-brand mb-5">BLOG MILLE</div><h1 className="font-display text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground">Wawasan Bisnis dan Solusi Digital untuk Usaha yang Bertumbuh.</h1><p className="mt-6 max-w-3xl text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-muted-foreground">Insight bisnis, tips efisiensi operasional, dan panduan digitalisasi usaha untuk membantu mengelola bisnis modern.</p></div>
      </div>
    </section>
  )
}

function FeaturedArticle() {
  const article = posts[0]
  return (
    <Link to={`/blog/${article.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-white no-underline transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl lg:grid-cols-[1.05fr_.95fr]">
      <div className="aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto"><img src={article.img} alt={article.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-col justify-center p-7 lg:p-10"><span className="w-fit rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide text-white" style={{ background: categoryColors[article.category] }}>{article.category}</span><div className="mt-5 flex gap-3 text-xs text-muted-foreground"><span>{article.date}</span><span>·</span><span>{article.readTime} baca</span></div><h2 className="mt-4 font-display text-[clamp(1.65rem,3vw,2.6rem)] font-extrabold leading-tight tracking-[-0.025em] text-foreground">{article.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand transition group-hover:gap-3">Baca Selengkapnya →</span></div>
    </Link>
  )
}

export default function BlogIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get("kategori")
  const activeCategory = categories.includes(categoryParam as BlogCategory) ? categoryParam as BlogCategory : "Semua"
  const requestedPage = Math.max(1, Number(searchParams.get("halaman") || 1))
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => { document.title = "Blog Mille | Wawasan Bisnis & Solusi Digital Usaha" }, [])

  const filtered = useMemo(() => activeCategory === "Semua" ? posts : posts.filter((post) => post.category === activeCategory), [activeCategory])
  const showFeatured = activeCategory === "Semua" && requestedPage === 1
  const list = activeCategory === "Semua" ? filtered.slice(1) : filtered
  const pageCount = Math.max(1, Math.ceil(list.length / perPage))
  const page = Math.min(requestedPage, pageCount)
  const visible = list.slice((page - 1) * perPage, page * perPage)

  function update(category: string, nextPage = 1, shouldScroll = false) {
    const params = new URLSearchParams()
    if (category !== "Semua") params.set("kategori", category)
    if (nextPage > 1) params.set("halaman", String(nextPage))
    setSearchParams(params)
    if (shouldScroll) window.requestAnimationFrame(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
  }

  return (
    <>
      <BlogHeader />
      <section className="section-spacing bg-white">
        <div className="container-page">
          {showFeatured && <div className="mb-14"><FeaturedArticle /></div>}
          <div ref={gridRef} className="scroll-mt-24">
            <div className="mb-10 flex gap-2 overflow-x-auto pb-2" aria-label="Filter kategori blog">
              {["Semua", ...categories].map((category) => <button key={category} type="button" onClick={() => update(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${activeCategory === category ? "border-brand bg-brand text-white" : "border-border bg-white text-muted-foreground hover:border-brand/50 hover:text-brand"}`}>{category}</button>)}
            </div>
            {visible.length ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map((article, index) => <div key={article.slug} className={`reveal reveal-delay-${(index % 3) + 1}`}><ArticleCard article={article} /></div>)}</div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center"><h2 className="font-display text-xl font-extrabold text-foreground">Belum ada artikel di kategori ini.</h2><button type="button" onClick={() => update("Semua")} className="btn btn-primary mt-5">Lihat Semua Artikel</button></div>
            )}
            {pageCount > 1 && <nav aria-label="Pagination blog" className="mt-12 flex flex-wrap items-center justify-center gap-2"><button type="button" disabled={page === 1} onClick={() => update(activeCategory, page - 1, true)} className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground disabled:opacity-40">Sebelumnya</button>{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} type="button" aria-current={number === page ? "page" : undefined} onClick={() => update(activeCategory, number, true)} className={`grid size-9 place-items-center rounded-full text-xs font-bold ${number === page ? "bg-brand text-white" : "border border-border text-muted-foreground"}`}>{number}</button>)}<button type="button" disabled={page === pageCount} onClick={() => update(activeCategory, page + 1, true)} className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground disabled:opacity-40">Berikutnya</button></nav>}
          </div>
        </div>
      </section>
      <ClosingBanner title="Siap Mengelola Bisnis dengan Lebih Terkontrol?" primary={{ label: "Coba Gratis 30 Hari", href: "https://partner.millehub.com/register-user" }} secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }} />
    </>
  )
}
