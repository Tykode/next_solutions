"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
  accentColor?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs,
  accentColor = "#f0a050",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative pt-36 pb-20 overflow-hidden bg-[var(--c-bg)]", className)}>

      {/* Glow doux */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 45% at 50% -5%, ${accentColor}0a, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 text-[12px] text-white/38 mb-8 font-medium"
          >
            <Link href="/" className="hover:text-white/65 transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 opacity-40" />
                <Link href={crumb.href} className="hover:text-white/65 transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge shadcn */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <Badge
              style={{
                background: `${accentColor}12`,
                borderColor: `${accentColor}28`,
                color: accentColor,
              }}
              className="uppercase tracking-widest text-[11px]"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
              {badge}
            </Badge>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-[1.08] tracking-[-0.03em] max-w-3xl mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </motion.h1>

        {/* Subtitle — lisible */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[15px] text-white/60 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
