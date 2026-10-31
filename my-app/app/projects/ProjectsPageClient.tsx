"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpacecraftParallax from "@/components/ui/SpacecraftParallax";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/projects";

const ALL = "All";
const TABS = [ALL, ...PROJECT_FILTERS];

/**
 * ProjectsPageClient
 * Full project grid with filter tabs by technology.
 */
export default function ProjectsPageClient() {
  const [activeTag, setActiveTag] = useState(ALL);

  const filtered =
    activeTag === ALL ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(activeTag));

  return (
    <div className="page" style={{ maxWidth: "1200px" }}>
      <SpacecraftParallax
        craft="millennium-falcon"
        side="right"
        top="2%"
        opacity={0.15}
        scale={0.9}
        parallaxRange={[-60, 60]}
      />

      <SectionTitle
        eyebrow="// Full Catalogue"
        title="All Projects"
        subtitle="Every project I've built — from hobby experiments to production systems serving thousands of users."
      />

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}
        role="tablist"
        aria-label="Filter projects by technology"
      >
        {TABS.map((tag) => (
          <button
            key={tag}
            id={`filter-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="filter-tab"
            role="tab"
            aria-selected={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} detailed index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          No projects found for &quot;{activeTag}&quot;.
        </motion.p>
      )}
    </div>
  );
}
