"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HyperspaceLoader
 * Full-screen Star Wars hyperspace jump animation shown on first page load.
 * Uses canvas to render warp-speed star streaks, then fades out.
 */
export default function HyperspaceLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const NUM_STARS = 300;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    type Star = {
      x: number; y: number;
      px: number; py: number;
      speed: number; size: number;
      hue: number;
    };

    const stars: Star[] = Array.from({ length: NUM_STARS }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 4 + 1;
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        px: cx,
        py: cy,
        speed: Math.random() * 12 + 4,
        size: Math.random() * 1.5 + 0.5,
        hue: Math.random() > 0.5 ? 195 : 50, // cyan or gold
      };
    });

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 5, 15, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.px = s.x;
        s.py = s.y;
        const dx = s.x - cx;
        const dy = s.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const newDist = dist + s.speed * (1 + frame / 40);
        s.x = cx + Math.cos(angle) * newDist;
        s.y = cy + Math.sin(angle) * newDist;

        const gradient = ctx.createLinearGradient(s.px, s.py, s.x, s.y);
        gradient.addColorStop(0, `hsla(${s.hue}, 100%, 70%, 0)`);
        gradient.addColorStop(1, `hsla(${s.hue}, 100%, 90%, 0.9)`);

        ctx.beginPath();
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.size;
        ctx.stroke();

        // Reset star when off screen
        if (s.x < 0 || s.x > canvas.width || s.y < 0 || s.y > canvas.height) {
          const a = Math.random() * Math.PI * 2;
          const r = Math.random() * 4 + 1;
          s.x = cx + Math.cos(a) * r;
          s.y = cy + Math.sin(a) * r;
          s.px = s.x;
          s.py = s.y;
        }
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    // Trigger fade-out at ~1.8s, remove at ~2.4s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2500);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#00050f",
        transition: "opacity 0.7s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {/* Crawl text overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.7rem, 2vw, 1rem)",
            letterSpacing: "0.3em",
            color: "#ffd700",
            textTransform: "uppercase",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.7s ease",
          }}
        >
          Jumping to hyperspace…
        </p>
      </div>
    </div>
  );
}
