"use client";

import { motion } from "framer-motion";
import {
  Briefcase, GraduationCap, MapPin, Calendar,
  Code2, Layers, Zap, Heart,
} from "lucide-react";
import SpacecraftParallax from "@/components/ui/SpacecraftParallax";
import SectionTitle from "@/components/ui/SectionTitle";

type EntryType = "work" | "education";

/* ---- Timeline data (replace the [ bracketed ] placeholders) ---- */
const TIMELINE: {
  year: string;
  role: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  type: EntryType;
}[] = [
  {
    year: "2024 – Present",
    role: "Senior Fullstack Developer",
    company: "[ Your Current Company ]",
    description:
      "Leading frontend architecture and building scalable backend services. Championing performance optimisation and design systems.",
    icon: <Briefcase size={18} />,
    type: "work",
  },
  {
    year: "2022 – 2024",
    role: "Fullstack Developer",
    company: "[ Previous Company ]",
    description:
      "Shipped production features serving 50k+ users. Introduced TypeScript, improved CI/CD pipelines, and reduced API response times by 40%.",
    icon: <Briefcase size={18} />,
    type: "work",
  },
  {
    year: "2020 – 2022",
    role: "Frontend Developer",
    company: "[ Freelance / Agency ]",
    description:
      "Delivered 15+ client websites and web apps. Specialised in React, animations, and SEO optimisation.",
    icon: <Briefcase size={18} />,
    type: "work",
  },
  {
    year: "2016 – 2020",
    role: "Bachelor's in Computer Science",
    company: "[ Your University ]",
    description:
      "Graduated with honours. Focused on software engineering, data structures, algorithms, and web technologies.",
    icon: <GraduationCap size={18} />,
    type: "education",
  },
];

const ABOUT_FACTS = [
  { icon: <MapPin size={18} />, label: "Location", value: "[ Your City, Country ]" },
  { icon: <Calendar size={18} />, label: "Experience", value: "5+ Years" },
  { icon: <Code2 size={18} />, label: "Projects", value: "50+ Shipped" },
  { icon: <Heart size={18} />, label: "Passion", value: "UI/UX & Animation" },
];

const TRAITS = [
  { icon: <Layers size={20} />, title: "Systems Thinker", desc: "I design full systems — from DB schema to pixel layout — before writing a line of code." },
  { icon: <Zap size={20} />, title: "Performance Obsessed", desc: "Sub-second load times aren't a bonus — they're a baseline requirement in my work." },
  { icon: <Code2 size={20} />, title: "Clean Code Advocate", desc: "Readable, maintainable, and well-documented code is how I show respect to future teammates." },
];

/** Accent colour for a timeline entry: blue for work, gold for education. */
const accent = (type: EntryType) =>
  type === "work" ? "var(--color-saber-blue)" : "var(--color-saber-gold)";
const accentGlow = (type: EntryType) =>
  type === "work" ? "var(--color-saber-blue-glow)" : "var(--color-saber-gold-glow)";

export default function AboutPageClient() {
  return (
    <div className="page" style={{ maxWidth: "1000px" }}>
      <SpacecraftParallax
        craft="tiefighter"
        side="right"
        top="5%"
        opacity={0.14}
        scale={0.9}
        parallaxRange={[-70, 70]}
      />

      {/* ---- INTRO ---- */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <SectionTitle
          eyebrow="// Who I Am"
          title="About Me"
          subtitle="I'm a fullstack developer with a deep passion for crafting seamless digital experiences — from architecting robust backend systems to sculpting pixel-perfect, animation-rich interfaces that breathe life into the web."
        />
      </motion.div>

      {/* ---- FACTS GRID ---- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "4rem",
        }}
      >
        {ABOUT_FACTS.map((fact) => (
          <div
            key={fact.label}
            className="glass"
            style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <span style={{ color: "var(--color-saber-blue)" }}>{fact.icon}</span>
            <div>
              <p className="eyebrow" style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                {fact.label}
              </p>
              <p style={{ color: "var(--color-text-primary)", fontSize: "0.95rem", fontWeight: 600 }}>
                {fact.value}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ---- TRAITS ---- */}
      <div style={{ marginBottom: "4.5rem" }}>
        <SectionTitle eyebrow="// How I Work" title="My Approach" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass"
              style={{ padding: "1.75rem" }}
            >
              <div style={{ color: "var(--color-saber-gold)", marginBottom: "0.75rem" }}>{t.icon}</div>
              <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>{t.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---- TIMELINE ---- */}
      <div>
        <SectionTitle eyebrow="// My Journey" title="Career Timeline" />
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "7px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(180deg, var(--color-saber-blue), var(--color-saber-gold), transparent)",
              borderRadius: "1px",
            }}
          />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ position: "relative", marginBottom: "2.5rem" }}
            >
              {/* Dot */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: "-2rem",
                  top: "0.2rem",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: accent(item.type),
                  border: "3px solid var(--color-space)",
                  boxShadow: `0 0 12px ${accentGlow(item.type)}`,
                }}
              />

              <div className="glass" style={{ padding: "1.5rem" }}>
                <p
                  className="eyebrow"
                  style={{ letterSpacing: "0.15em", color: accent(item.type), marginBottom: "0.4rem" }}
                >
                  {item.year}
                </p>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{item.role}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-saber-blue)", marginBottom: "0.75rem" }}>
                  {item.company}
                </p>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
