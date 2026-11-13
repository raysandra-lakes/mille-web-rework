import { useMemo, useRef } from "react"
import { Link, useSearchParams } from "react-router"
import ArticleCard, { ArticleSkeleton } from "../components/blog/ArticleCard"
import ClosingBanner from "../components/shared/ClosingBanner"
import { categoryColor, formatCategory, formatDate, slugifyCategory, type BlogPost } from "../data/blogApi"
import { useBlogPosts, useDocumentTitle } from "../data/useBlog"

const perPage = 6

function BlogHeader() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#FAFAF8_0%,#F5FAFD_52%,#EEF8FD_100%)] py-16 lg:py-20">
      <div className="absolute right-[8%] top-[-10rem] size-[30rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px]">
          <Link to="/" className="text-muted-foreground no-underline hover:text-brand">Beranda</Link>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">Blog</span>
        </nav>
        <div className="max-w-4xl">
          <div className="badge badge-brand mb-5">BLOG MILLE</div>
          <h1 className="font-display text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground">
            Wawasan Bisnis dan Solusi Digital untuk Usaha yang Bertumbuh.
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.75] text-muted-foreground">
            Insight bisnis, tips efisiensi operasional, dan panduan digitalisasi usaha untuk membantu mengelola bisnis modern.
          </p>
        </div>
      </div>
    </section>
  )
}

function NewArticle({ article }: { article: BlogPost }) {
  return (
    <Link
      to={`/blog/${encodeURIComponent(article.slug)}`}
      className="group grid overflow-hidden rounded-2xl border border-border bg-white no-underline transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl lg:grid-cols-[1.05fr_.95fr]"
    >
      <div className="aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto">
        <img
          src={article.image}
          alt=""
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-7 lg:p-10">
        <span
          className="w-fit rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide text-white"
          style={{ background: categoryColor(article.dataCategory) }}
        >
          {formatCategory(article.dataCategory)}
        </span>
        <div className="mt-5 flex gap-3 text-xs text-muted-foreground">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.author}</span>
          <span>·</span>
          <span className=" rounded-full px-3 py-0. text-[12px] font-bold tracking-wide text-white" 
            style={{ background: "var(--brand)" }} >NEW</span>
        </div>
        <h2 className="mt-4 font-display text-[clamp(1.65rem,3vw,2.6rem)] font-extrabold leading-tight tracking-[-0.025em] text-foreground">
          {article.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand transition group-hover:gap-3">
          Baca Selengkapnya →
        </span>
      </div>
    </Link>
  )
}

function pageItems(current: number, total: number): (number | "…")[] {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1)
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  const items: (number | "…")[] = [1]
  if (start > 2) items.push(start === 3 ? 2 : "…")
  for (let p = start; p <= end; p++) items.push(p)
  if (end < total - 1) items.push(end === total - 2 ? total - 1 : "…")
  items.push(total)
  return items
}

export default function BlogIndex() {
  useDocumentTitle("Blog Mille | Wawasan Bisnis & Solusi Digital Usaha")

  const { posts, status, retry } = useBlogPosts()
  const [searchParams, setSearchParams] = useSearchParams()
  const gridRef = useRef<HTMLDivElement>(null)

  // Kategori diambil dari data, jadi kategori baru di repo otomatis muncul
  const categories = useMemo(() => {
    const map = new Map<string, { label: string; count: number }>()
    posts.forEach((p) => {
      const key = slugifyCategory(p.dataCategory)
      const cur = map.get(key)
      map.set(key, { label: cur?.label ?? formatCategory(p.dataCategory), count: (cur?.count ?? 0) + 1 })
    })
    return [...map.entries()].map(([key, v]) => ({ key, ...v }))
  }, [posts])

  const categoryParam = searchParams.get("kategori")
  const activeCategory = categories.some((c) => c.key === categoryParam) ? (categoryParam as string) : "all"
  const query = searchParams.get("q") ?? ""
  const requestedPage = Math.max(1, Number(searchParams.get("halaman")) || 1)

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return posts.filter(
      (p) =>
        (activeCategory === "all" || slugifyCategory(p.dataCategory) === activeCategory) &&
        (!needle || `${p.title} ${p.summary}`.toLowerCase().includes(needle))
    )
  }, [posts, activeCategory, query])

  const isDefaultView = activeCategory === "all" && !query.trim()
  const featured = isDefaultView ? posts[0] : undefined
  const list = featured ? filtered.slice(1) : filtered
  const pageCount = Math.max(1, Math.ceil(list.length / perPage))
  const page = Math.min(requestedPage, pageCount)
  const visible = list.slice((page - 1) * perPage, page * perPage)
  const showFeatured = Boolean(featured) && page === 1

  function update(next: { category?: string; q?: string; page?: number }, opts: { scroll?: boolean; replace?: boolean } = {}) {
    const category = next.category ?? activeCategory
    const q = next.q ?? query
    const nextPage = next.page ?? 1
    const params = new URLSearchParams()
    if (category !== "all") params.set("kategori", category)
    if (q.trim()) params.set("q", q)
    if (nextPage > 1) params.set("halaman", String(nextPage))
    setSearchParams(params, { replace: opts.replace })

    if (opts.scroll) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      window.requestAnimationFrame(() =>
        gridRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
      )
    }
  }

  return (
    <>
      <BlogHeader />
      <section className="section-spacing bg-white">
        <div className="container-page">
          {status === "ready" && showFeatured && featured && (
            <div className="mb-14">
              <NewArticle article={featured} />
            </div>
          )}

          <div ref={gridRef} className="scroll-mt-24">
            {status === "ready" && (
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter kategori blog">
                  {[{ key: "all", label: "Semua", count: posts.length }, ...categories].map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => update({ category: c.key })}
                      aria-pressed={activeCategory === c.key}
                      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        activeCategory === c.key
                          ? "border-brand bg-brand text-white"
                          : "border-border bg-white text-muted-foreground hover:border-brand/50 hover:text-brand"
                      }`}
                    >
                      {c.label} <span className="ml-1 opacity-60">{c.count}</span>
                    </button>
                  ))}
                </div>

                <label className="relative block lg:w-72">
                  <span className="sr-only">Cari artikel</span>
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    placeholder="Cari artikel di sini"
                    onChange={(e) => update({ q: e.target.value }, { replace: true })}
                    className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-brand"
                  />
                </label>
              </div>
            )}

            {status === "ready" && !isDefaultView && (
              <p role="status" className="mb-6 text-sm text-muted-foreground">
                {filtered.length} artikel{query.trim() && <> untuk “{query.trim()}”</>}
                <button
                  type="button"
                  onClick={() => setSearchParams({})}
                  className="ml-3 font-semibold text-brand underline underline-offset-4"
                >
                  Hapus filter
                </button>
              </p>
            )}

            {status === "loading" && (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: perPage }, (_, i) => <ArticleSkeleton key={i} />)}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
                <h2 className="font-display text-xl font-extrabold text-foreground">Artikel belum bisa dimuat.</h2>
                <p className="mt-2 text-sm text-muted-foreground">Periksa koneksi internet Anda lalu coba lagi.</p>
                <button type="button" onClick={retry} className="btn btn-primary mt-5">Coba Lagi</button>
              </div>
            )}

            {status === "ready" && visible.length === 0 && !showFeatured && (
              <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
                <h2 className="font-display text-xl font-extrabold text-foreground">
                  {isDefaultView ? "Belum ada artikel." : "Tidak ada artikel yang cocok."}
                </h2>
                {!isDefaultView && (
                  <button type="button" onClick={() => setSearchParams({})} className="btn btn-primary mt-5">
                    Lihat Semua Artikel
                  </button>
                )}
              </div>
            )}

            {status === "ready" && visible.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" key={`${activeCategory}|${query}|${page}`}>
                {visible.map((article, index) => (
                  <ArticleCard key={article.slug} article={article} index={index} />
                ))}
              </div>
            )}

            {status === "ready" && pageCount > 1 && (
              <nav aria-label="Pagination blog" className="mt-12 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => update({ page: page - 1 }, { scroll: true })}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground disabled:opacity-40"
                >
                  Sebelumnya
                </button>
                {pageItems(page, pageCount).map((item, i) =>
                  item === "…" ? (
                    <span key={`dots-${i}`} className="px-1 text-muted-foreground" aria-hidden="true">…</span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      aria-current={item === page ? "page" : undefined}
                      onClick={() => update({ page: item }, { scroll: true })}
                      className={`grid size-9 place-items-center rounded-full text-xs font-bold ${
                        item === page ? "bg-brand text-white" : "border border-border text-muted-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
                <button
                  type="button"
                  disabled={page === pageCount}
                  onClick={() => update({ page: page + 1 }, { scroll: true })}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground disabled:opacity-40"
                >
                  Berikutnya
                </button>
              </nav>
            )}
          </div>
        </div>
      </section>

      <ClosingBanner
        title="Siap Mengelola Bisnis dengan Lebih Terkontrol?"
        primary={{ label: "Coba Gratis 30 Hari", href: "https://partner.millehub.com/register-user" }}
        secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }}
      />
    </>
  )
}