"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const noopSubscribe = () => () => {};

/**
 * ThemeToggle
 * Sun / Moon button to switch between dark and light modes.
 * Currently not rendered — drop `<ThemeToggle />` into Navbar to enable it.
 */
export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  // false during SSR, true after hydration — avoids a server/client icon mismatch
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  if (!mounted) return <div style={{ width: 40, height: 40 }} aria-hidden />;

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      className="icon-btn theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
