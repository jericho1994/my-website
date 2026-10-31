/**
 * site.ts
 * Single source of truth for site-wide identity: name, URL, email, socials.
 * Edit here and every page, the metadata and the contact list update together.
 */
export const SITE = {
  name: "Jericho",
  /** Short name shown in the hero heading */
  nickname: "Echo",
  url: "https://jericho.dev",
  email: "hello@jericho.dev",
  twitterHandle: "@jericho1994",
  title: "Jericho | Fullstack Developer",
  description:
    "Fullstack developer specializing in crafting robust backend systems and pixel-perfect, animation-rich frontend experiences. Expert in Next.js, TypeScript, React, and cloud infrastructure.",
} as const;

export type SocialId = "github" | "linkedin" | "email" | "twitter";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  /** Human-readable handle shown next to the icon on the contact page */
  handle: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/jericho1994",
    handle: "@jericho1994",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jericho-logronio-83138a110/",
    handle: "Jericho Logronio",
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${SITE.email}`,
    handle: SITE.email,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    href: "https://twitter.com/jericho1994",
    handle: SITE.twitterHandle,
  },
];
