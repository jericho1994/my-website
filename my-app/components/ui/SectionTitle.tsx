import { ReactNode } from "react";

interface SectionTitleProps {
  /** Eyebrow label above the title (e.g. "// 01") */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

/**
 * SectionTitle
 * Reusable section heading with Star Wars-style accent line.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  children,
}: SectionTitleProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: "3rem" }}>
      {eyebrow && (
        <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>
          {eyebrow}
        </p>
      )}

      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.15 }}>
        {title}
      </h2>

      {/* Accent bar */}
      <div
        aria-hidden
        style={{
          display: "flex",
          justifyContent: centered ? "center" : "flex-start",
          marginTop: "0.9rem",
          marginBottom: subtitle ? "1rem" : 0,
        }}
      >
        <div
          style={{
            height: "3px",
            width: "60px",
            background:
              "linear-gradient(90deg, var(--color-saber-blue), var(--color-saber-gold))",
            borderRadius: "2px",
          }}
        />
      </div>

      {subtitle && (
        <p
          style={{
            maxWidth: "560px",
            margin: centered ? "0 auto" : "0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
