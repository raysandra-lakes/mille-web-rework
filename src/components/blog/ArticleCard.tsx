import type { CSSProperties } from "react";
import { Link } from "react-router";
import {
  categoryColor,
  formatCategory,
  formatDate,
  type BlogPost,
} from "../../data/blogApi";
import "./blog.css";

export default function ArticleCard({
  article,
  index = 0,
}: {
  article: BlogPost;
  index?: number;
}) {
  return (
    <Link
      to={`/blog/${encodeURIComponent(article.slug)}`}
      style={{ "--i": index } as CSSProperties}
      className="bl-in group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white no-underline transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl"
    >
      <div className="aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span
          className="w-fit rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide text-white"
          style={{ background: categoryColor(article.dataCategory) }}
        >
          {formatCategory(article.dataCategory)}
        </span>
        <p className="mt-4 text-xs text-muted-foreground">
          {formatDate(article.date)}
        </p>
        <h3 className="mt-3 line-clamp-3 font-display text-lg font-extrabold leading-snug tracking-[-0.015em] text-foreground">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {article.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-brand transition group-hover:gap-3">
          Baca Selengkapnya →
        </span>
      </div>
    </Link>
  );
}

export function ArticleSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-border bg-white"
    >
      <div className="aspect-[16/10] animate-pulse bg-surface" />
      <div className="space-y-3 p-6">
        <div className="h-6 w-28 animate-pulse rounded-full bg-surface" />
        <div className="h-3 w-24 animate-pulse rounded bg-surface" />
        <div className="h-5 animate-pulse rounded bg-surface" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-surface" />
        <div className="h-3 animate-pulse rounded bg-surface" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-surface" />
      </div>
    </div>
  );
}
