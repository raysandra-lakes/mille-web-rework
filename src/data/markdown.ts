import { marked } from "marked";
import DOMPurify from "dompurify";

let hooked = false;
function ensureHook() {
  if (hooked) return;
  hooked = true;
  // Link keluar dibuka di tab baru
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node instanceof HTMLAnchorElement && /^https?:/i.test(node.getAttribute("href") ?? "")) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
}

export function renderMarkdown(md: string): string {
  ensureHook();
  const html = marked.parse(md, { async: false, gfm: true }) as string;
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}

export interface Heading {
  id: string;
  text: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const norm = (s: string | null) => (s ?? "").replace(/\s+/g, " ").trim().toLowerCase();

/**
 * Markdown -> HTML aman + daftar heading untuk "Daftar Isi".
 * - h2 diberi id (kalau tidak ada h2, pakai h3)
 * - h1 pertama dibuang kalau sama dengan judul (sudah tampil di header)
 * - gambar pertama dibuang kalau sama dengan gambar sampul (sudah tampil di header)
 */
export function prepareArticle(md: string, opts: { title: string; cover?: string }) {
  const tpl = document.createElement("template");
  tpl.innerHTML = renderMarkdown(md);
  const root = tpl.content;

  const h1 = root.querySelector("h1");
  if (h1 && norm(h1.textContent) === norm(opts.title)) h1.remove();

  const first = root.firstElementChild;
  const img = first?.tagName === "IMG" ? first : first?.querySelector("img");
  if (opts.cover && first && img && norm(first.textContent) === "" && img.getAttribute("src") === opts.cover) {
    first.remove();
  }

  let nodes = Array.from(root.querySelectorAll("h2"));
  if (nodes.length === 0) nodes = Array.from(root.querySelectorAll("h3"));

  const used = new Set<string>();
  const headings: Heading[] = nodes.map((el) => {
    const text = (el.textContent ?? "").trim();
    const base = `bagian-${slugify(text) || "isi"}`;
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    el.id = id;
    return { id, text };
  });

  return { html: tpl.innerHTML, headings };
}