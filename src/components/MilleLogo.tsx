import { useId } from "react";

interface MilleLogoProps {
  variant?: "light" | "dark";
  /** Height in px; width scales proportionally */
  height?: number;
  className?: string;
  /** Aktifkan animasi intro + hover (default: true) */
  animated?: boolean;
  /** Cincin pulse berulang di titik brand (default: true) */
  loop?: boolean;
}

export default function MilleLogo({
  variant = "light",
  height = 30,
  className,
  animated = true,
  loop = true,
}: MilleLogoProps) {
  // ID unik per instance agar clipPath tidak bentrok kalau logo dipakai di banyak tempat
  const clipId = `mille-clip-${useId().replace(/:/g, "")}`;

  const classes = [
    "mille-logo",
    animated ? "is-animated" : "",
    animated && loop ? "is-looping" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        .mille-logo { overflow: visible; }

        /* Semua elemen yang dianimasikan memakai pusat/tepi dirinya sendiri sebagai titik transformasi */
        .mille-logo .mille-reveal,
        .mille-logo .mille-dot,
        .mille-logo .mille-dot-hover,
        .mille-logo .mille-ring {
          transform-box: fill-box;
        }

        /* ---------- Intro: teks terbuka dari kiri ke kanan ---------- */
        .mille-logo.is-animated .mille-reveal {
          transform-origin: left center;
          animation: mille-reveal 0.75s cubic-bezier(0.65, 0, 0.35, 1) both;
        }
        .mille-logo.is-animated .mille-text {
          animation: mille-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ---------- Intro: titik jatuh & memantul ---------- */
        .mille-logo.is-animated .mille-dot {
          transform-origin: center;
          animation: mille-drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both;
        }

        /* ---------- Idle: cincin pulse ---------- */
        .mille-logo .mille-ring { opacity: 0; }
        .mille-logo.is-looping .mille-ring {
          transform-origin: center;
          animation: mille-ping 2.8s ease-out 1.6s infinite;
        }

        /* ---------- Hover: titik memantul ---------- */
        .mille-logo.is-animated:hover .mille-dot-hover {
          transform-origin: center;
          animation: mille-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes mille-reveal {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes mille-rise {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mille-drop {
          0%   { opacity: 0; transform: translateY(-14px) scale(0.4); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mille-ping {
          0%   { opacity: 0.45; transform: scale(1); }
          70%  { opacity: 0;    transform: scale(3.2); }
          100% { opacity: 0;    transform: scale(3.2); }
        }
        @keyframes mille-bounce {
          0%   { transform: translateY(0) scale(1); }
          40%  { transform: translateY(-5px) scale(1.25); }
          100% { transform: translateY(0) scale(1); }
        }

        /* Hormati pengaturan "reduce motion" */
        @media (prefers-reduced-motion: reduce) {
          .mille-logo .mille-reveal,
          .mille-logo .mille-text,
          .mille-logo .mille-dot,
          .mille-logo .mille-ring,
          .mille-logo .mille-dot-hover {
            animation: none !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 90 40"
        width={(height / 40) * 90}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        role="img"
        aria-label="Mille"
      >
        <defs>
          <clipPath id={clipId}>
            {/* Area yang "terbuka" saat intro; sedikit lebih besar dari teks agar tidak terpotong */}
            <rect className="mille-reveal" x="-2" y="-4" width="84" height="48" />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          <text
            className="mille-text"
            x="0"
            y="32"
            fontFamily="var(--font-display-family)"
            fontWeight="800"
            fontSize="40"
            letterSpacing="-0.04em"
            textLength="78"
            lengthAdjust="spacingAndGlyphs"
            fill={variant === "light" ? "var(--foreground)" : "var(--card)"}
          >
            mille
          </text>
        </g>

        {/* Cincin pulse di belakang titik */}
        <circle className="mille-ring" cx="85" cy="8" r="4" fill="var(--brand)" />

        {/* Wrapper terpisah agar animasi hover tidak memicu ulang animasi intro */}
        <g className="mille-dot-hover">
          <circle className="mille-dot" cx="85" cy="8" r="4" fill="var(--brand)" />
        </g>
      </svg>
    </>
  );
}