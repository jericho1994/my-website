import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Jericho's portfolio of fullstack projects — from e-commerce platforms and real-time apps to AI tools and DevOps dashboards.",
  openGraph: {
    title: "Projects | Jericho Portfolio",
    description:
      "Fullstack projects showcasing Next.js, TypeScript, Node.js, cloud infrastructure, and more.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}