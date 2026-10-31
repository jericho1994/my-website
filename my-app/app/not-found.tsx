"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

/**
 * not-found.tsx
 * Custom Star Wars 404 page.
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Big 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(6rem, 18vw, 12rem)",
          fontWeight: 900,
          lineHeight: 1,
          background:
            "linear-gradient(135deg, var(--color-saber-blue), var(--color-saber-gold))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1rem",
          textShadow: "none",
          filter: "drop-shadow(0 0 40px rgba(0,212,255,0.3))",
        }}
      >
        404
      </motion.h1>

      {/* Death Star SVG */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.35, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ marginBottom: "2rem" }}
        aria-hidden
      >
        <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
          <circle cx="70" cy="70" r="65" fill="#2a3a4a" stroke="#3d5060" strokeWidth="2" />
          <line x1="5" y1="55" x2="135" y2="55" stroke="#3d5060" strokeWidth="2" />
          <circle cx="90" cy="55" r="18" fill="#445566" stroke="#3d5060" strokeWidth="1.5" />
          <circle cx="90" cy="55" r="10" fill="#334455" />
          <circle cx="90" cy="55" r="4" fill="#223344" />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
          letterSpacing: "0.08em",
          color: "var(--color-saber-gold)",
          marginBottom: "0.75rem",
        }}
      >
        These are not the droids you&apos;re looking for.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        style={{
          color: "var(--color-text-muted)",
          maxWidth: "420px",
          fontSize: "1rem",
          lineHeight: 1.7,
          marginBottom: "2rem",
        }}
      >
        The page you are looking for has jumped to hyperspace — or perhaps it never
        existed in this galaxy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <Link href="/" className="btn-primary" id="not-found-home-btn">
          <Home size={16} /> Return Home
        </Link>
      </motion.div>
    </div>
  );
}
