interface MilleLogoProps {
  variant?: "light" | "dark";
  /** Height in px; width scales proportionally */
  height?: number;
  className?: string;
}

export default function MilleLogo({ variant = "light", height = 30, className }: MilleLogoProps) {
  return (
    <svg
      viewBox="0 0 90 40"
      width={(height / 40) * 90}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mille"
    >
      <text
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
      <circle cx="85" cy="8" r="4" fill="var(--brand)" />
    </svg>
  );
}
