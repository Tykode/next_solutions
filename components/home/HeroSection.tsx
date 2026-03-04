"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { value: "10+",  label: "ans d'expérience" },
  { value: "500+", label: "commerces équipés" },
  { value: "4",    label: "gammes de solutions" },
  { value: "6j/7", label: "support technique" },
];

const SERVICES = [
  { label: "Caisses Tactiles",    color: "#b07ae0", variant: "purple" as const },
  { label: "TPE & Monétique",     color: "#52c48a", variant: "green"  as const },
  { label: "Logiciels de Gestion",color: "#4f8ef7", variant: "blue"   as const },
  { label: "Balances",            color: "#e8748a", variant: "pink"   as const },
];

const easing = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const baseAnim = prefersReduced
    ? { initial: false as const }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  const t = (delay = 0) => ({ transition: { duration: 0.55, delay, ease: easing } });

  return (
    <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[var(--c-bg)]" />

      {/* Single warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_-5%,rgba(240,160,80,0.07),transparent)] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 pt-32 pb-24">

        {/* Location badge */}
        <motion.div {...baseAnim} {...t(0)} className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0a050]/[0.10] border border-[#f0a050]/20 text-[#f0a050] text-[12px] font-semibold">
            <MapPin className="w-3 h-3" />
            Cayenne · Guyane française · depuis 2014
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[820px] mb-6">
          <motion.h1
            {...baseAnim} {...t(0.07)}
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Spécialiste{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f0a050 0%, #f8c070 55%, #f0a050 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              monétique
            </span>
            <br />
            en Guyane
          </motion.h1>
        </div>

        {/* Subtitle — lisible */}
        <motion.p
          {...baseAnim} {...t(0.16)}
          className="text-[17px] text-white/62 leading-[1.75] max-w-[500px] mb-10"
        >
          Équipements point de vente éprouvés, déployés et maintenus par
          notre équipe à Cayenne. Caisses, TPE, logiciels, balances —
          un seul interlocuteur, une seule hotline.
        </motion.p>

        {/* CTAs */}
        <motion.div {...baseAnim} {...t(0.23)} className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/rendez-vous"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f0a050] hover:bg-[#f5b060] text-[#09080c] text-[14px] font-bold rounded-full transition-all duration-200 hover:shadow-[0_8px_32px_rgba(240,160,80,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarDays className="w-4 h-4" />
            Planifier un rendez-vous
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white/65 hover:text-white border border-white/[0.12] hover:border-white/[0.22] rounded-full transition-all duration-200 hover:bg-white/[0.04]"
          >
            Notre histoire
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Service badges */}
        <motion.div {...baseAnim} {...t(0.30)} className="flex flex-wrap gap-2 mb-20">
          {SERVICES.map(({ label, variant }) => (
            <Badge key={label} variant={variant}>
              {label}
            </Badge>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...baseAnim} {...t(0.38)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/[0.08] pt-8 max-w-[600px]"
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`pr-6 ${i > 0 ? "pl-6 border-l border-white/[0.08]" : ""}`}
            >
              <div
                className="text-[2rem] font-bold text-white leading-none mb-1 tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </div>
              <div className="text-[11.5px] text-white/45 leading-snug">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
