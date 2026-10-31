import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jericho — fullstack developer, UI/UX enthusiast, and animation aficionado. Explore his journey, skills, and career timeline.",
  openGraph: {
    title: "About | Jericho Portfolio",
    description:
      "Fullstack developer with a passion for crafting seamless digital experiences.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
