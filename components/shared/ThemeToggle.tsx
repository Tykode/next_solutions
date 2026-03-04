"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className={cn(
        "relative p-2 rounded-xl transition-all duration-200",
        "text-white/45 hover:text-white/90 hover:bg-white/[0.07]",
        className
      )}
    >
      <span
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-200"
        style={{ background: "radial-gradient(circle at center, rgba(240,160,80,0.08), transparent)" }}
      />
      {isDark ? (
        <Sun className="relative w-4 h-4" />
      ) : (
        <Moon className="relative w-4 h-4" />
      )}
    </button>
  );
}
