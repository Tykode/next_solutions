"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useRef } from "react";

const STATS = [
  { value: "10+",  label: "Ans en Guyane" },
  { value: "500+", label: "Commerces équipés" },
  { value: "4",    label: "Gammes de solutions" },
  { value: "6j/7", label: "Support direct" },
];

const SERVICES = [
  { label: "Caisses Tactiles",   color: "#b07ae0" },
  { label: "TPE & Monétique",    color: "#52c48a" },
  { label: "Logiciels de Gestion", color: "#4f8ef7" },
  { label: "Balances",           color: "#e8748a" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, shouldReduceMotion ? 1 : 0]);

  return (
    <section ref={ref} className="relative min-h-dvh flex flex-col justify-center overflow-hidden">

      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-[var(--c-bg)]" />

      {/* Radial gradient center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(240,160,80,0.09),transparent)]" />

      {/* Ambient orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#b07ae0]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-[#4f8ef7]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#f0a050]/7 rounded-full blur-[80px]" />
      </motion.div>

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-[15%] w-px h-full opacity-[0.07]"
          style={{ background: "linear-gradient(180deg, transparent, #f0a050 30%, #f0a050 70%, transparent)" }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 pt-32 pb-24"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0a050]/[0.10] border border-[#f0a050]/20 text-[#f0a050] text-[12px] font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0a050] animate-pulse" />
            Cayenne · Guyane française · fondé en 2014
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[820px] mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Spécialiste
            <br />
            <span className="relative inline-block">
              <span
                className="relative z-10"
                style={{
                  background: "linear-gradient(135deg, #f0a050 0%, #f8c882 60%, #f0a050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                monétique
              </span>
              {/* underline accent */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#f0a050]/30 rounded-full" />
            </span>{" "}
            en Guyane
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17px] text-white/42 leading-relaxed max-w-[480px] mb-10"
        >
          Équipements point de vente éprouvés, déployés et maintenus localement.
          Caisses, TPE, logiciels, balances — un seul interlocuteur, une seule hotline, à Cayenne.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <Link
            href="/rendez-vous"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f0a050] hover:bg-[#f5b060] text-[#05080f] text-[14px] font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(240,160,80,0.4)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <CalendarDays className="w-4 h-4" />
            Planifier un rendez-vous
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white/60 hover:text-white border border-white/[0.1] hover:border-white/[0.2] rounded-full transition-all duration-200 hover:bg-white/[0.04]"
          >
            Notre histoire
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Service tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-2 mb-20"
        >
          {SERVICES.map(({ label, color }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.38 + i * 0.06 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[12.5px] font-medium"
              style={{
                borderColor: `${color}22`,
                background: `${color}0d`,
                color: `${color}cc`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/[0.07] pt-8 max-w-[600px]"
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`pr-6 ${i > 0 ? "pl-6 border-l border-white/[0.07]" : ""}`}
            >
              <div
                className="text-[2rem] font-bold text-white leading-none mb-1 tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </div>
              <div className="text-[11.5px] text-white/35 leading-tight">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
