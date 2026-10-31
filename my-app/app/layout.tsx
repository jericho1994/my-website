import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Starfield from "@/components/ui/Starfield";
import HyperspaceLoader from "@/components/ui/HyperspaceLoader";
import { SITE } from "@/lib/site";

// Self-hosted via next/font: no external request, no layout shift.
// The CSS variables are consumed in globals.css (--font-display / --font-body / --font-sans).
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-orbitron",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name} Portfolio`,
  },
  description: SITE.description,
  keywords: [
    SITE.name,
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
    "Web Development",
    "UI/UX",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: `${SITE.name} Portfolio`,
    title: SITE.title,
    description:
      "Fullstack developer specializing in seamless digital experiences — robust backends and pixel-perfect frontends.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description:
      "Fullstack developer specializing in seamless digital experiences.",
    creator: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <HyperspaceLoader />
          <Starfield />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
