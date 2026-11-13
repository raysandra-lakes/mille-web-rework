import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router"
import ArticleCard from "../components/blog/ArticleCard"
import { categoryColor, formatCategory, formatDate, normalizeCategory, readingMinutes } from "../data/blogApi"
import { prepareArticle, type Heading } from "../data/markdown"
import { useBlogPost, useBlogPosts, useDocumentTitle } from "../data/useBlog"
import "../components/blog/blog.css"

const noHeadings: Heading[] = []

function ShareButtons({ title, onCopy }: { title: string; onCopy: () => void }) {
  const url = typeof window === "undefined" ? "" : window.location.href
  const links = [
    ["WhatsApp", `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`],
    ["X", `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`],
  ]
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onCopy}
        className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-brand hover:text-brand"
      >
        Salin Tautan
      </button>
      {links.map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-muted-foreground no-underline hover:border-brand hover:text-brand"
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default function BlogDetail() {
  const { slug = "" } = useParams()
  const { state, retry } = useBlogPost(slug)
  const { posts } = useBlogPosts()

  const post = state.status === "ready" ? state.post : null
  const body = state.status === "ready" ? state.body : ""

  const article = useMemo(
    () => (post ? prepareArticle(body, { title: post.title, cover: post.image }) : null),
    [post, body]
  )
  const headings = article?.headings ?? noHeadings
  const minutes = body ? readingMinutes(body) : 0

  const related = useMemo(() => {
    if (!post) return []
    const others = posts.filter((p) => p.slug !== post.slug)
    const same = others.filter((p) => normalizeCategory(p.dataCategory) === normalizeCategory(post.dataCategory))
    return [...same, ...others.filter((p) => !same.includes(p))].slice(0, 3)
  }, [posts, post])

  const [activeHeading, setActiveHeading] = useState("")
  const [progress, setProgress] = useState(0)
  const [toast, setToast] = useState(false)

  useDocumentTitle(
    post
      ? `${post.title} | Blog Mille`
      : state.status === "notfound"
        ? "Artikel tidak ditemukan | Blog Mille"
        : "Blog Mille"
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  // Progress bar baca
  useEffect(() => {
    if (!article) return
    const onScroll = () => {
      const el = document.getElementById("article-content")
      if (!el) return
      const start = el.offsetTop - 80
      const distance = el.offsetHeight - window.innerHeight
      setProgress(Math.max(0, Math.min(100, ((window.scrollY - start) / Math.max(distance, 1)) * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [article])

  // Heading aktif untuk Daftar Isi
  useEffect(() => {
    if (!headings.length) return
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveHeading(entry.target.id)),
      { rootMargin: "-20% 0px -70% 0px" }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [headings])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = window.location.href
      ta.style.cssText = "position:fixed;opacity:0"
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand("copy") } catch { /* abaikan */ }
      ta.remove()
    }
    setToast(true)
    window.setTimeout(() => setToast(false), 1800)
  }

  if (state.status === "loading") {
    return (
      <section className="section-spacing bg-white" aria-busy="true">
        <div className="container-page">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <div className="mx-auto h-6 w-28 animate-pulse rounded-full bg-surface" />
            <div className="h-12 animate-pulse rounded-lg bg-surface" />
            <div className="mx-auto h-12 w-2/3 animate-pulse rounded-lg bg-surface" />
          </div>
          <div className="mx-auto mt-10 aspect-video max-w-5xl animate-pulse rounded-2xl bg-surface" />
        </div>
      </section>
    )
  }

  if (state.status === "notfound") {
    return (
      <section className="section-spacing bg-white">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold text-foreground">Artikel tidak ditemukan</h1>
          <Link to="/blog" className="btn btn-primary btn-lg mt-7">Kembali ke Blog</Link>
        </div>
      </section>
    )
  }

  if (state.status === "error" || !post || !article) {
    return (
      <section className="section-spacing bg-white">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold text-foreground">Artikel belum bisa dimuat</h1>
          <p className="mt-4 text-sm text-muted-foreground">Periksa koneksi internet Anda lalu coba lagi.</p>
          <div className="mt-7 flex justify-center gap-3">
            <button type="button" onClick={retry} className="btn btn-primary">Coba Lagi</button>
            <Link to="/blog" className="btn btn-secondary">Kembali ke Blog</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="fixed left-0 right-0 top-16 z-[95] h-0.5 bg-border">
        <div className="h-full bg-brand transition-[width]" style={{ width: `${progress}%` }} />
      </div>

      <header className="bg-white pb-12 pt-14 lg:pb-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 overflow-hidden text-[13px]">
            <Link to="/" className="shrink-0 text-muted-foreground no-underline hover:text-brand">Beranda</Link>
            <span>/</span>
            <Link to="/blog" className="shrink-0 text-muted-foreground no-underline hover:text-brand">Blog</Link>
            <span>/</span>
            <span className="truncate font-semibold text-foreground">{post.title}</span>
          </nav>

          <div className="mx-auto max-w-[800px] text-center">
            <span
              className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold text-white"
              style={{ background: categoryColor(post.dataCategory) }}
            >
              {formatCategory(post.dataCategory)}
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-foreground">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {post.author} · {formatDate(post.date)} · {minutes} menit baca
            </p>
          </div>

          <div className="mx-auto mt-10 aspect-video max-w-5xl overflow-hidden rounded-2xl bg-surface">
            <img
              src={post.image}
              alt=""
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      <section className="bg-white pb-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,720px)_300px] lg:justify-center">
          <div className="min-w-0">
            <article
              key={post.slug}
              id="article-content"
              className="blog-article blog-md"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />

            <div className="mt-12 border-t border-border pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Bagikan artikel</p>
              <ShareButtons title={post.title} onCopy={copyLink} />
            </div>

            <div className="mt-10 rounded-2xl border border-brand/20 bg-brand-subtle p-7">
              <h2 className="font-display text-xl font-extrabold text-foreground">Coba Gratis 30 Hari atau Jadwalkan Demo</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary">Coba Gratis</a>
                <Link to="/jadwalkan-demo" className="btn btn-secondary">Jadwalkan Demo</Link>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {headings.length > 0 && (
              <div className="card hidden p-5 lg:block">
                <h2 className="font-display text-base font-extrabold text-foreground">Daftar Isi</h2>
                <nav className="mt-4 space-y-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      onClick={(event) => {
                        event.preventDefault()
                        document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className={`block border-l-2 py-1 pl-3 text-xs leading-relaxed no-underline ${
                        activeHeading === heading.id ? "border-brand text-brand" : "border-border text-muted-foreground"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="card mt-5 p-5">
              <h2 className="font-display text-lg font-extrabold text-foreground">Coba Gratis 30 Hari</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Kelola operasional bisnis dalam satu sistem terintegrasi.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="https://partner.millehub.com/register-user" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Coba Gratis</a>
                <Link to="/jadwalkan-demo" className="btn btn-secondary btn-sm">Jadwalkan Demo</Link>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Bagikan</p>
              <ShareButtons title={post.title} onCopy={copyLink} />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-spacing bg-surface">
          <div className="container-page">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="type-eyebrow mb-3">ARTIKEL TERKAIT</p>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">Baca Juga Artikel Lainnya</h2>
              </div>
              <Link to="/blog" className="text-sm font-bold text-brand no-underline">Lihat Semua Artikel →</Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white shadow-xl"
          role="status"
          aria-live="polite"
        >
          Tautan disalin
        </div>
      )}
    </>
  )
}