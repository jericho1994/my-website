"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type CraftType = "xwing" | "tiefighter" | "millennium-falcon" | "star-destroyer";

interface SpacecraftParallaxProps {
  craft: CraftType;
  /** Side of the screen: "left" | "right" */
  side?: "left" | "right";
  /** Vertical position as a percentage string e.g. "20%" */
  top?: string;
  /** Base opacity (0–1) */
  opacity?: number;
  /** Scale multiplier */
  scale?: number;
  /** Parallax scroll range: [start, end] in px relative to section */
  parallaxRange?: [number, number];
}

/* ---- Inline SVG spacecraft (all drawn top-down, nose pointing left) ---- */
const crafts: Record<CraftType, ReactNode> = {
  xwing: (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Port S-foils (top half) — mirrored below for starboard */}
      {[0, 1].map((half) => (
        <g key={half} transform={half ? "translate(0,160) scale(1,-1)" : undefined}>
          {/* Laser cannons running forward from each wingtip */}
          <line x1="66" y1="11" x2="182" y2="11" stroke="#8a97a6" strokeWidth="3" strokeLinecap="round" />
          <line x1="66" y1="11" x2="76" y2="11" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="19" x2="218" y2="19" stroke="#8a97a6" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="19" x2="118" y2="19" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round" />
          {/* Rear-splayed wing */}
          <polygon points="170,70 190,70 222,22 204,22" fill="#aab6c3" stroke="#6f7f90" strokeWidth="1" />
          <rect x="202" y="24" width="14" height="5" fill="#d23c3c" transform="rotate(-56 209 26)" />
          {/* Front-splayed wing */}
          <polygon points="158,70 178,70 186,14 168,14" fill="#cfd8e2" stroke="#6f7f90" strokeWidth="1" />
          <rect x="167" y="20" width="14" height="5" fill="#d23c3c" transform="rotate(-80 174 22)" />
          {/* Engine nacelles at the wing roots */}
          <rect x="162" y="48" width="38" height="11" rx="5" fill="#8e9cab" stroke="#5f6f80" strokeWidth="1" />
          <rect x="154" y="58" width="40" height="12" rx="6" fill="#a8b4c0" stroke="#5f6f80" strokeWidth="1" />
          <ellipse cx="200" cy="53.5" rx="7" ry="6" fill="#ff8a8a" opacity="0.35" />
          <ellipse cx="200" cy="53.5" rx="3" ry="4" fill="#ffb3b3" />
          <ellipse cx="195" cy="64" rx="8" ry="7" fill="#ff8a8a" opacity="0.35" />
          <ellipse cx="195" cy="64" rx="3.5" ry="4.5" fill="#ffb3b3" />
        </g>
      ))}
      {/* Fuselage */}
      <path d="M 4 80 L 30 73 L 118 70 L 196 72 L 202 80 L 196 88 L 118 90 L 30 87 Z" fill="#dde5ed" stroke="#6f7f90" strokeWidth="1" />
      <path d="M 30 73 L 118 70 L 118 80 L 30 80 Z" fill="#c3cdd8" opacity="0.6" />
      {/* Cockpit canopy */}
      <path d="M 116 74 L 146 74 L 154 80 L 146 86 L 116 86 L 110 80 Z" fill="#23384f" stroke="#44617f" strokeWidth="1" />
      <path d="M 120 76 L 142 76 L 146 80 L 120 80 Z" fill="#5f8fc0" opacity="0.45" />
      {/* Astromech droid behind the cockpit */}
      <circle cx="166" cy="80" r="5" fill="#4a7fc2" stroke="#2c4e7c" strokeWidth="1" />
    </svg>
  ),
  tiefighter: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hexagonal solar panels — port drawn, starboard mirrored */}
      {[0, 1].map((half) => (
        <g key={half} transform={half ? "translate(200,0) scale(-1,1)" : undefined}>
          <polygon points="22,6 52,6 72,100 52,194 22,194 0,100" fill="#17222f" stroke="#3b5270" strokeWidth="1.5" />
          {/* Radiator spokes */}
          <g stroke="#2d4259" strokeWidth="1">
            <line x1="36" y1="6" x2="36" y2="194" />
            <line x1="0" y1="100" x2="72" y2="100" />
            <line x1="22" y1="6" x2="36" y2="100" />
            <line x1="52" y1="6" x2="36" y2="100" />
            <line x1="22" y1="194" x2="36" y2="100" />
            <line x1="52" y1="194" x2="36" y2="100" />
            <line x1="0" y1="100" x2="36" y2="52" />
            <line x1="0" y1="100" x2="36" y2="148" />
          </g>
          {/* Pylon */}
          <rect x="70" y="93" width="34" height="14" rx="2" fill="#3c4c5c" stroke="#55687c" strokeWidth="1" />
          <rect x="66" y="88" width="10" height="24" rx="2" fill="#4a5c6e" />
        </g>
      ))}
      {/* Cockpit pod */}
      <circle cx="100" cy="100" r="36" fill="#2a3a4c" stroke="#4e6580" strokeWidth="2" />
      <circle cx="100" cy="100" r="27" fill="#1c2836" />
      {/* Viewport with 8-spoke frame */}
      <circle cx="100" cy="100" r="21" fill="#0a1522" stroke="#6fb7e6" strokeWidth="1.5" />
      <g stroke="#6fb7e6" strokeWidth="1" opacity="0.8">
        <line x1="100" y1="79" x2="100" y2="121" />
        <line x1="79" y1="100" x2="121" y2="100" />
        <line x1="85" y1="85" x2="115" y2="115" />
        <line x1="115" y1="85" x2="85" y2="115" />
      </g>
      <circle cx="100" cy="100" r="7" fill="#0a1522" stroke="#6fb7e6" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="3" fill="#8fd3ff" opacity="0.7" />
    </svg>
  ),
  "millennium-falcon": (
    <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Engine glow across the stern */}
      <path d="M 234 56 Q 258 100 234 144" stroke="#5aa9ff" strokeWidth="16" fill="none" opacity="0.25" strokeLinecap="round" />
      <path d="M 234 56 Q 258 100 234 144" stroke="#9ccbff" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round" />
      {/* Forward mandibles */}
      <polygon points="16,50 84,44 96,86 16,86" fill="#9ea9b5" stroke="#6b7784" strokeWidth="1" />
      <polygon points="16,150 84,156 96,114 16,114" fill="#9ea9b5" stroke="#6b7784" strokeWidth="1" />
      <rect x="16" y="56" width="68" height="4" fill="#7f8b98" opacity="0.6" />
      <rect x="16" y="140" width="68" height="4" fill="#7f8b98" opacity="0.6" />
      {/* Main saucer */}
      <ellipse cx="150" cy="100" rx="92" ry="82" fill="#a7b1bc" stroke="#6b7784" strokeWidth="1.5" />
      <ellipse cx="150" cy="100" rx="70" ry="62" fill="#b8c2cc" stroke="#7d8996" strokeWidth="1" />
      {/* Hull plating details */}
      <g stroke="#7b8794" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M 98 62 Q 150 40 204 62" />
        <path d="M 98 138 Q 150 160 204 138" />
        <line x1="150" y1="18" x2="150" y2="182" />
        <line x1="64" y1="100" x2="236" y2="100" />
      </g>
      {/* Quad laser turret (dorsal) */}
      <circle cx="150" cy="100" r="11" fill="#6f7b88" stroke="#4f5a66" strokeWidth="1" />
      <circle cx="150" cy="100" r="5" fill="#4f5a66" />
      {/* Sensor dish */}
      <circle cx="150" cy="48" r="13" fill="#8a95a2" stroke="#5f6b78" strokeWidth="1" />
      <circle cx="150" cy="48" r="7" fill="#6b7784" />
      <circle cx="150" cy="48" r="2" fill="#c9d2db" />
      {/* Starboard cockpit tube */}
      <rect x="94" y="150" width="90" height="26" rx="13" fill="#9ea9b5" stroke="#6b7784" strokeWidth="1" />
      <ellipse cx="106" cy="163" rx="10" ry="9" fill="#23384f" stroke="#44617f" strokeWidth="1" />
      <path d="M 100 158 L 112 158 L 114 163 L 100 163 Z" fill="#5f8fc0" opacity="0.45" />
    </svg>
  ),
  "star-destroyer": (
    <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Ion engines at the stern */}
      <circle cx="398" cy="76" r="16" fill="#3b7bff" opacity="0.25" />
      <circle cx="398" cy="100" r="19" fill="#3b7bff" opacity="0.25" />
      <circle cx="398" cy="124" r="16" fill="#3b7bff" opacity="0.25" />
      {/* Main wedge hull */}
      <polygon points="0,100 400,28 400,172" fill="#9aa6b2" stroke="#6c7883" strokeWidth="1.5" />
      <polygon points="0,100 400,28 400,34 14,100" fill="#c9d2db" opacity="0.5" />
      {/* Raised superstructure tiers */}
      <polygon points="110,100 392,62 392,138" fill="#b5c0cb" stroke="#7e8a96" strokeWidth="1" />
      <polygon points="200,100 388,80 388,120" fill="#c6d0da" stroke="#8a97a3" strokeWidth="1" />
      {/* Trench and panel lines */}
      <g stroke="#6c7883" strokeWidth="1" opacity="0.5">
        <line x1="20" y1="100" x2="330" y2="100" />
        <line x1="60" y1="90" x2="392" y2="46" />
        <line x1="60" y1="110" x2="392" y2="154" />
      </g>
      {/* Turbolaser batteries along the trench */}
      {[150, 190, 230, 270, 310].map((x) => (
        <g key={x} fill="#6c7883">
          <circle cx={x} cy={100 - (x - 110) * 0.14 - 6} r="3" />
          <circle cx={x} cy={100 + (x - 110) * 0.14 + 6} r="3" />
        </g>
      ))}
      {/* Command tower: neck, bridge bar and deflector globes */}
      <rect x="318" y="92" width="40" height="16" rx="2" fill="#8d99a5" stroke="#6c7883" strokeWidth="1" />
      <rect x="354" y="72" width="30" height="56" rx="3" fill="#b5c0cb" stroke="#6c7883" strokeWidth="1" />
      <rect x="360" y="90" width="18" height="20" rx="2" fill="#c9d2db" stroke="#7e8a96" strokeWidth="1" />
      <circle cx="369" cy="66" r="7" fill="#d3dbe3" stroke="#6c7883" strokeWidth="1" />
      <circle cx="369" cy="134" r="7" fill="#d3dbe3" stroke="#6c7883" strokeWidth="1" />
      {/* Engine nozzles */}
      <circle cx="398" cy="76" r="9" fill="#6fa6ff" opacity="0.9" />
      <circle cx="398" cy="100" r="11" fill="#6fa6ff" opacity="0.9" />
      <circle cx="398" cy="124" r="9" fill="#6fa6ff" opacity="0.9" />
    </svg>
  ),
};

/* Rendered size at scale = 1, matching each viewBox aspect ratio */
const craftSizes: Record<CraftType, { w: number; h: number }> = {
  xwing:               { w: 300, h: 200 },
  tiefighter:          { w: 200, h: 200 },
  "millennium-falcon": { w: 340, h: 262 },
  "star-destroyer":    { w: 520, h: 248 },
};

/**
 * SpacecraftParallax
 * Renders a Star Wars spacecraft that drifts as the user scrolls.
 * Wrap in a `position: relative` container element.
 */
export default function SpacecraftParallax({
  craft,
  side = "right",
  top = "10%",
  opacity = 0.18,
  scale = 1,
  parallaxRange = [-60, 60],
}: SpacecraftParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

  const { w, h } = craftSizes[craft];

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        top,
        [side]: side === "right" ? "-60px" : "-80px",
        width: w * scale,
        height: h * scale,
        opacity,
        y,
        pointerEvents: "none",
        zIndex: 0,
        filter: "drop-shadow(0 0 24px rgba(0,200,255,0.25))",
      }}
      aria-hidden="true"
    >
      {crafts[craft]}
    </motion.div>
  );
}
