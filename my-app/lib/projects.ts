/**
 * projects.ts
 * Central data source for portfolio projects.
 * Edit this file to update your project listings across all pages.
 */

export type ProjectStatus = "Live" | "In Progress" | "Archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: ProjectStatus;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description:
      "A Star Wars-themed personal portfolio built with Next.js, TypeScript, Framer Motion, and Tailwind CSS featuring hyperspace animations and scroll-driven spacecraft parallax.",
    longDescription:
      "A fully custom Star Wars-themed portfolio website. Engineered with Next.js 16 App Router, TypeScript, Framer Motion for cinematic animations, and Tailwind CSS v4. Features include a canvas-based hyperspace jump loader, scroll-driven parallax spacecraft backgrounds (X-Wing, TIE Fighter, Millennium Falcon, Star Destroyer), glassmorphism cards, and a dark/light mode toggle.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/jericho1994/my-website",
    liveUrl: "#",
    status: "Live",
    featured: true,
  },
  {
    id: "project-2",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard built on Next.js and PostgreSQL.",
    longDescription:
      "A production-grade full-stack e-commerce solution featuring server-side rendering, real-time stock updates via WebSockets, Stripe payment integration, JWT authentication, an admin dashboard with analytics charts, and PostgreSQL with Prisma ORM. Optimized for Core Web Vitals with a 95+ Lighthouse score.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    status: "Live",
    featured: true,
  },
  {
    id: "project-3",
    title: "Real-Time Chat App",
    description:
      "A WebSocket-powered real-time messaging application with rooms, file sharing, and end-to-end encryption.",
    longDescription:
      "Built with Node.js, Socket.IO, and React. Supports multiple chat rooms, direct messaging, file uploads via AWS S3, message history with infinite scroll, and end-to-end encryption using the Web Crypto API. Deployed on AWS EC2 with an Nginx reverse proxy.",
    tech: ["React", "Node.js", "Socket.IO", "AWS S3", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    status: "Live",
    featured: true,
  },
  {
    id: "project-4",
    title: "AI Content Generator",
    description:
      "An OpenAI-powered content generation tool for blogs, social media, and marketing copy with a custom prompt builder.",
    longDescription:
      "Integrates the OpenAI GPT-4 API to generate SEO-optimised blog posts, social media captions, and ad copy. Features a drag-and-drop prompt template builder, output history with versioning, export to Markdown/HTML/PDF, and usage analytics dashboard. Built with Next.js API routes and MongoDB.",
    tech: ["Next.js", "OpenAI API", "MongoDB", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Progress",
    featured: false,
  },
  {
    id: "project-5",
    title: "DevOps Dashboard",
    description:
      "A unified monitoring dashboard aggregating metrics from multiple cloud providers with alerting and incident management.",
    longDescription:
      "A real-time DevOps monitoring platform that ingests metrics from AWS CloudWatch, GCP Monitoring, and Datadog APIs. Features customisable widget dashboards, threshold-based alerting via Slack/email, incident timeline management, and multi-tenant team support. Built on a microservices architecture with gRPC.",
    tech: ["React", "Node.js", "gRPC", "Docker", "Kubernetes"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Progress",
    featured: false,
  },
  {
    id: "project-6",
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform React Native fitness app with workout logging, progress charts, and nutrition tracking.",
    longDescription:
      "A React Native app for iOS and Android that tracks workouts, sets/reps/weights, body measurements, and macros. Integrates with Apple Health and Google Fit. Features animated progress charts, a custom exercise library with instructional videos, and a social challenges system.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Apple Health API"],
    githubUrl: "#",
    liveUrl: "#",
    status: "Archived",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

/** Technologies offered as filter tabs on the /projects page. */
export const PROJECT_FILTERS = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "AWS",
  "React Native",
];
