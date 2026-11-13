export const BLOG_BASE =
  "https://raw.githubusercontent.com/care-millehub/version-millehub-website/refs/heads/main/blog-content";

export interface BlogPost {
  slug: string;
  title: string;
  dataCategory: string;
  author: string;
  date: string;
  image: string;
  summary: string;
}

const time = (d: string) => {
  const t = new Date(d).getTime();
  return Number.isNaN(t) ? 0 : t;
};

/* Cache tingkat modul: daftar artikel hanya diunduh sekali untuk semua halaman */
let listPromise: Promise<BlogPost[]> | null = null;
let listCache: BlogPost[] | null = null;
const bodyCache = new Map<string, Promise<string>>();

export function peekPosts(): BlogPost[] | null {
  return listCache;
}

export function fetchPosts(): Promise<BlogPost[]> {
  if (!listPromise) {
    listPromise = fetch(`${BLOG_BASE}/blog.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal memuat daftar artikel (${res.status})`);
        return res.json() as Promise<BlogPost[]>;
      })
      .then((list) => {
        // Terbaru di atas
        listCache = [...list].sort((a, b) => time(b.date) - time(a.date));
        return listCache;
      })
      .catch((err) => {
        listPromise = null; // izinkan coba lagi
        throw err;
      });
  }
  return listPromise;
}

export function fetchPostBody(slug: string): Promise<string> {
  let p = bodyCache.get(slug);
  if (!p) {
    p = fetch(`${BLOG_BASE}/posts/${encodeURIComponent(slug)}.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`File artikel tidak ditemukan (${res.status})`);
        return res.text();
      })
      .catch((err) => {
        bodyCache.delete(slug);
        throw err;
      });
    bodyCache.set(slug, p);
  }
  return p;
}

/* ---------- Helper tampilan ---------- */

export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}

export const normalizeCategory = (c: string) => c.trim().toLowerCase();

// "tips & trick" -> "Tips & Trick"
export const formatCategory = (c: string) =>
  normalizeCategory(c).replace(/\b[a-z]/g, (m) => m.toUpperCase());

export const readingMinutes = (md: string) =>
  Math.max(1, Math.round(md.trim().split(/\s+/).length / 200));

/* ---------- Kategori ---------- */

// "tips & trick" -> "tips-trick" (dipakai untuk URL ?kategori=)
export const slugifyCategory = (c: string) =>
  normalizeCategory(c)
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Warna badge per kategori. Kalau `categoryColors` di blogData.ts-mu sudah punya warna, pakai itu saja.
const CATEGORY_COLORS: Record<string, string> = {
  "business-insight": "#0B7BBF",
  "tips-trick": "#B85C0F",
  inspiration: "#0B8A5A",
  "tech-future-trend": "#4D5BB5",
};

export const categoryColor = (c: string) => CATEGORY_COLORS[slugifyCategory(c)] ?? "#475569";