"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project, ProjectStatus } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  /** Show full long description (used on /projects page) */
  detailed?: boolean;
  index?: number;
}

const STATUS_CLASS: Record<ProjectStatus, string> = {
  Live: "status-live",
  "In Progress": "status-in-progress",
  Archived: "status-archived",
};

/**
 * ProjectCard
 * Glassmorphism card for displaying portfolio projects.
 * Supports both compact (Home) and detailed (Projects page) views.
 */
export default function ProjectCard({
  project,
  detailed = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      style={{ padding: detailed ? "2rem" : "1.5rem" }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
        <h3 style={{ fontSize: detailed ? "1.3rem" : "1.1rem" }}>{project.title}</h3>
        {project.status && (
          <span className={`status-badge ${STATUS_CLASS[project.status]}`}>
            {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.95rem", lineHeight: 1.65, flex: 1 }}>
        {detailed && project.longDescription
          ? project.longDescription
          : project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
              aria-label={`View ${project.title} live site`}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
