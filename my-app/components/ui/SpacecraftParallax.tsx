"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CRAFT_COMPONENTS, CRAFT_SIZES, type CraftType } from "./Spacecraft";

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

  const { w, h } = CRAFT_SIZES[craft];
  const Craft = CRAFT_COMPONENTS[craft];

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
      <Craft />
    </motion.div>
  );
}
