"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Code2, Server, Globe, Cpu, ArrowDown, ChevronRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/BrandIcons";
import SpacecraftParallax from "@/components/ui/SpacecraftParallax";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

/* ---- Skill list ---- */
const SKILLS = [
  {
    icon: <Code2 size={24} />,
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  {
    icon: <Server size={24} />,
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    icon: <Globe size={24} />,
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    icon: <Cpu size={24} />,
    label: "Other",
    items: ["GraphQL", "REST APIs", "WebSockets", "Prisma", "MongoDB"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem 4rem",
          overflow: "hidden",
        }}
      >
        {/* X-Wing flying across the hero; drifts with scroll */}
        <SpacecraftParallax
          craft="xwing"
          side="right"
          top="18%"
          opacity={0.22}
          scale={1.1}
          parallaxRange={[-40, 160]}
        />

        {/* Radial glow behind hero text */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ zIndex: 1, maxWidth: "800px", width: "100%" }}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow"
            style={{ fontSize: "0.75rem", letterSpacing: "0.3em", marginBottom: "1rem" }}
          >
            {"// Fullstack Developer & UI Craftsman"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Hello, I&apos;m <span className="gradient-text">{SITE.nickname}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.2rem",
              maxWidth: "560px",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            I architect{" "}
            <span style={{ color: "var(--color-saber-blue)" }}>robust backend systems</span>{" "}
            and sculpt{" "}
            <span style={{ color: "var(--color-saber-gold)" }}>pixel-perfect interfaces</span>{" "}
            that breathe life into the web — from distributed APIs to cinematic
            front-end animations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
          >
            <Link href="/projects" className="btn-primary" id="hero-view-projects">
              View Projects <ChevronRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost" id="hero-contact">
              Get In Touch
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem" }}>
            {SOCIAL_LINKS.map(({ id, href, label }) => (
              <motion.a
                key={id}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <SocialIcon id={id} size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--color-text-muted)",
            opacity: 0.5,
          }}
          aria-hidden
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>

      <div className="gradient-divider" />

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section id="featured-projects" className="section">
        <SpacecraftParallax
          craft="tiefighter"
          side="left"
          top="15%"
          opacity={0.12}
          scale={0.85}
          parallaxRange={[-50, 50]}
        />

        <div className="container">
          <SectionTitle
            eyebrow="// 01 — Selected Work"
            title="Featured Projects"
            subtitle="A selection of projects that showcase my ability to architect scalable systems and craft exceptional user experiences."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: "2.5rem", textAlign: "center" }}
          >
            <Link href="/projects" className="btn-ghost" id="home-view-all-projects">
              View All Projects <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="section">
        <SpacecraftParallax
          craft="millennium-falcon"
          side="right"
          top="5%"
          opacity={0.12}
          scale={0.7}
          parallaxRange={[-40, 40]}
        />

        <div className="container">
          <SectionTitle
            eyebrow="// 02 — Tech Stack"
            title="Skills & Technologies"
            subtitle="Tools and technologies I use to build fast, scalable, and beautiful applications."
            centered
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass"
                style={{ padding: "1.75rem" }}
              >
                <div style={{ color: "var(--color-saber-blue)", marginBottom: "0.75rem" }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: "0.9rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  {skill.label}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--color-saber-blue)",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA STRIP ===================== */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 2rem" }}
        >
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Ready to build something amazing?
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "1rem" }}>
            Let&apos;s work together
          </h2>
          <p style={{ maxWidth: "480px", margin: "0 auto 2rem" }}>
            Whether you need a new product built from scratch or want to level up
            an existing one — I&apos;m open to opportunities.
          </p>
          <Link href="/contact" className="btn-primary" id="cta-contact">
            Start a Conversation <ChevronRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
