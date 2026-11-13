import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* DATA TESTIMONI                                                      */
/* Menambah testimoni baru: salin satu blok, isi data, selesai.        */
/* ------------------------------------------------------------------ */

interface TestimonialItem {
  id: string;
  videoId: string; // ID video YouTube
  url: string; // tautan "Lihat selengkapnya"
  vertical?: boolean; // true untuk YouTube Shorts (video portrait)
  logo?: string; // foto/logo kecil di dekat nama
  name?: string; // nama orang (kalau ada)
  role: string;
  business: string;
  quote?: string; // kosong = hanya video yang ditampilkan
}

const logo = (file: string) => `/assets/client-img/${file}`;

const testimonials: TestimonialItem[] = [
  {
    id: "deu-coffee",
    videoId: "IEXcHcRfi3M",
    url: "https://youtube.com/shorts/IEXcHcRfi3M?feature=share",
    vertical: true,
    logo: logo("deu-coffee.webp"),
    role: "Founder",
    business: "De.u Coffee",
    quote: undefined,
  },
  {
    id: "dr-ells",
    videoId: "U_CeeXEitI0",
    url: "https://youtu.be/U_CeeXEitI0?si=wdOeHij3culu8sG6",
    logo: logo("dr-ells.webp"),
    role: "Founder",
    business: "dr.Ells Coffee",
    quote:
      "Saya sudah menggunakan 5 lebih POS lain dan ini yang paling kita cocok, terutama fitur pengelolaan outlet…",
  },
  {
    id: "kino-kimi",
    videoId: "m9NbjVqmSo0",
    url: "https://youtube.com/shorts/m9NbjVqmSo0?feature=share",
    vertical: true,
    logo: logo("kinokimi.webp"),
    role: "Founder",
    business: "Kino-Kimi Coffee",
    quote: undefined,
  },
  {
    id: "gin-gin",
    videoId: "zx-nPbDOzuM",
    url: "https://youtube.com/shorts/zx-nPbDOzuM?feature=share",
    vertical: true,
    logo: logo("gin-gin.webp"),
    name: "Sandi",
    role: "Owner",
    business: "Gin-Gin Bakery Shop",
    quote: undefined,
  },
  {
    id: "roempi",
    videoId: "rqTXOCC3ddw",
    url: "https://youtu.be/rqTXOCC3ddw?si=ANCS6UcO655F8Z1d",
    logo: logo("roempi.webp"),
    name: "Albert",
    role: "Owner",
    business: "Roempi Coffee & Toko Akarasa",
    quote:
      "Dengan adanya Mille, saya tidak lagi khawatir soal fraud, karyawan bisa kerja dengan benar…",
  },
];

/* ------------------------------------------------------------------ */
/* VIDEO: gambar sampul dulu, iframe YouTube baru dimuat saat diklik   */
/* ------------------------------------------------------------------ */

function VideoStage({
  videoId,
  vertical,
  title,
  active,
}: {
  videoId: string;
  vertical?: boolean;
  title: string;
  active: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  // Geser ke slide lain = video berhenti (iframe dilepas)
  useEffect(() => {
    if (!active) setPlaying(false);
  }, [active]);

  return (
    <div className="ts-stage">
      <div className={`ts-video ${vertical ? "is-v" : "is-h"}`}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
            title={`Video testimoni ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="ts-play"
            tabIndex={active ? 0 : -1}
            aria-label={`Putar video testimoni ${title}`}
            onClick={() => setPlaying(true)}
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              draggable={false}
            />
            <span className="ts-play__btn" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

/* Foto kecil; kalau file tidak ada, tampil inisial */
function Avatar({ src, label }: { src?: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return (
      <span className="ts-avatar ts-avatar--fallback" aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    <img
      className="ts-avatar"
      src={src}
      alt=""
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

/* ------------------------------------------------------------------ */
/* SECTION                                                             */
/* ------------------------------------------------------------------ */

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const n = testimonials.length;

  const step = (dir: number) => setIndex((i) => (i + dir + n) % n);

  return (
    <section
      style={{
        background: "var(--background)",
        paddingBlock: "clamp(80px, 9vw, 128px)",
      }}
    >
      <style>{`
        .ts-card {
          overflow: hidden;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl, 20px);
        }
        .ts-viewport { overflow: hidden; touch-action: pan-y; }
        .ts-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ts-slide {
          flex: 0 0 100%;
          min-width: 0;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        }
        @media (max-width: 860px) {
          .ts-slide { grid-template-columns: 1fr; }
        }

        /* ---------- Video ---------- */
        .ts-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111110D6;
        }
        .ts-video {
          position: relative;
          overflow: hidden;
          background: #000;
        }
        .ts-video.is-h { width: 100%; aspect-ratio: 16 / 9; }
        .ts-video.is-v { height: clamp(380px, 38vw, 500px); aspect-ratio: 9 / 16; }
        @media (max-width: 860px) {
          .ts-video.is-v { height: clamp(340px, 80vw, 460px); }
        }
        .ts-video iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          border: 0;
        }
        .ts-play {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          padding: 0; border: 0;
          background: #000;
          cursor: pointer;
        }
        .ts-play img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ts-play::after {
          content: "";
          position: absolute; inset: 0;
          background: rgba(0, 0, 0, 0.25);
          transition: background 0.3s;
        }
        .ts-play:hover::after { background: rgba(0, 0, 0, 0.1); }
        .ts-play__btn {
          position: absolute; z-index: 1;
          top: 50%; left: 50%;
          display: flex; align-items: center; justify-content: center;
          width: 64px; height: 64px;
          padding-left: 3px;
          color: #111110;
          background: #fff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ts-play:hover .ts-play__btn { transform: translate(-50%, -50%) scale(1.08); }
        .ts-play:focus-visible { outline: 3px solid var(--brand); outline-offset: -3px; }

        /* ---------- Teks ---------- */
        .ts-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(28px, 4vw, 56px);
        }
        .ts-mark {
          margin-bottom: 20px;
          font-family: Georgia, serif;
          font-size: 88px;
          line-height: 0.6;
          color: var(--brand);
          opacity: 0.2;
          user-select: none;
        }
        .ts-quote {
          margin: 0 0 28px;
          font-family: var(--font-display-family);
          font-weight: 600;
          font-size: clamp(19px, 1.9vw, 26px);
          line-height: 1.5;
          letter-spacing: -0.015em;
          color: var(--foreground);
        }
        .ts-empty {
          margin: 0 0 28px;
          font-size: 16px;
          line-height: 1.65;
          color: var(--muted-foreground);
        }
        .ts-person { display: flex; align-items: center; gap: 14px; }
        .ts-avatar {
          flex: none;
          width: 48px; height: 48px;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: var(--surface);
          object-fit: cover;
        }
        .ts-avatar--fallback {
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display-family);
          font-weight: 800; font-size: 14px;
          color: var(--brand);
          background: var(--brand-subtle);
        }
        .ts-name {
          margin: 0;
          font-family: var(--font-display-family);
          font-weight: 700; font-size: 15px;
          color: var(--foreground);
        }
        .ts-role { margin: 2px 0 0; font-size: 13.5px; color: var(--muted-foreground); }
        .ts-more {
          align-self: flex-start;
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 26px; padding-bottom: 3px;
          font-size: 14px; font-weight: 650;
          color: var(--foreground);
          text-decoration: none;
          border-bottom: 1.5px solid var(--brand);
          transition: gap 0.25s, color 0.25s;
        }
        .ts-more:hover { gap: 12px; color: var(--brand); }
        .ts-more:focus-visible { outline: 2px solid var(--brand); outline-offset: 4px; }

        /* ---------- Kontrol ---------- */
        .ts-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; margin-top: 20px;
        }
        .ts-dots { display: flex; align-items: center; }
        .ts-dot {
          padding: 9px 3px;
          background: none; border: 0; cursor: pointer;
        }
        .ts-dot span {
          display: block;
          width: 6px; height: 6px;
          border-radius: 3px;
          background: var(--border);
          transition: width 0.3s, background 0.3s;
        }
        .ts-dot:hover span { background: var(--muted-foreground); }
        .ts-dot[aria-current="true"] span { width: 22px; background: var(--brand); }
        .ts-dot:focus-visible { outline: 2px solid var(--brand); outline-offset: 1px; border-radius: 6px; }

        .ts-arrows { display: flex; align-items: center; gap: 10px; }
        .ts-count {
          margin-right: 6px;
          font-size: 13px; font-variant-numeric: tabular-nums;
          color: var(--muted-foreground);
        }
        .ts-arrow {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px;
          color: var(--foreground);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 50%;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .ts-arrow:hover { border-color: var(--foreground); background: var(--card); }
        .ts-arrow:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          .ts-track, .ts-play__btn, .ts-play::after, .ts-dot span { transition: none; }
        }
      `}</style>

      <div className="container-page">
        <p
          className="type-eyebrow"
          style={{ marginBottom: 14, textAlign: "center" }}
        >
          Cerita dari Pengguna Mille
        </p>
        <h2
          style={{
            margin: "0 0 clamp(32px, 4vw, 48px)",
            textAlign: "center",
            fontFamily: "var(--font-display-family)",
            fontWeight: 800,
            fontSize: "clamp(28px, 3.2vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.028em",
            color: "var(--foreground)",
          }}
        >
          Apa Kata Mereka?
        </h2>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimoni pengguna Mille"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") step(-1);
            if (e.key === "ArrowRight") step(1);
          }}
        >
          <div className="ts-card">
            <div
              className="ts-viewport"
              onTouchStart={(e) => {
                touch.current = {
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                };
              }}
              onTouchEnd={(e) => {
                const start = touch.current;
                touch.current = null;
                if (!start) return;
                const dx = e.changedTouches[0].clientX - start.x;
                const dy = e.changedTouches[0].clientY - start.y;
                // Geser horizontal yang cukup jauh dan lebih dominan daripada geser vertikal
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2)
                  step(dx < 0 ? 1 : -1);
              }}
            >
              <div
                className="ts-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => {
                  const active = i === index;
                  const title = t.name
                    ? `${t.name}, ${t.business}`
                    : t.business;
                  return (
                    <div
                      key={t.id}
                      className="ts-slide"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} dari ${n}`}
                      aria-hidden={!active}
                    >
                      <VideoStage
                        videoId={t.videoId}
                        vertical={t.vertical}
                        title={title}
                        active={active}
                      />

                      <div className="ts-body">
                        {t.quote ? (
                          <>
                            <div className="ts-mark" aria-hidden="true">
                              “
                            </div>
                            <blockquote className="ts-quote">
                              {t.quote}
                            </blockquote>
                          </>
                        ) : (
                          <p className="ts-empty">
                            Tonton cerita {t.business} bersama Mille di video
                            ini.
                          </p>
                        )}

                        <div className="ts-person">
                          <Avatar src={t.logo} label={t.business} />
                          <div>
                            <p className="ts-name">{t.name ?? t.business}</p>
                            <p className="ts-role">
                              {t.name ? `${t.role} · ${t.business}` : t.role}
                            </p>
                          </div>
                        </div>

                        <a
                          className="ts-more"
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={active ? 0 : -1}
                        >
                          Lihat selengkapnya <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="ts-controls">
            <div className="ts-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className="ts-dot"
                  aria-label={`Testimoni ${t.business}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                >
                  <span />
                </button>
              ))}
            </div>

            <div className="ts-arrows">
              <span className="ts-count" aria-hidden="true">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(n).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="ts-arrow"
                aria-label="Testimoni sebelumnya"
                onClick={() => step(-1)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                className="ts-arrow"
                aria-label="Testimoni berikutnya"
                onClick={() => step(1)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
