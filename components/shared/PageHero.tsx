"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

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

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${accentColor}0e, transparent)`,
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute top-0 right-[18%] w-px h-full opacity-[0.06] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent, ${accentColor} 30%, ${accentColor} 70%, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 text-[12px] text-white/25 mb-8 font-medium"
          >
            <Link href="/" className="hover:text-white/55 transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 opacity-40" />
                <Link href={crumb.href} className="hover:text-white/55 transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11.5px] font-semibold mb-5 uppercase tracking-widest"
            style={{
              background: `${accentColor}0f`,
              borderColor: `${accentColor}25`,
              color: `${accentColor}cc`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-[1.08] tracking-[-0.03em] max-w-3xl mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[15px] text-white/38 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
