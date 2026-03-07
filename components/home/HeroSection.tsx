"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { CountUp } from "@/components/shared/CountUp";

const STATS = [
  { value: "10+",  label: "ans en Guyane",       color: "#f0a050" },
  { value: "500+", label: "commerces équipés",    color: "#4f8ef7" },
  { value: "4",    label: "gammes de solutions",  color: "#b07ae0" },
  { value: "6j/7", label: "support technique",    color: "#52c48a" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center bg-[var(--c-bg)] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[500px] bg-[#f0a050]/[0.045] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[400px] bg-[#b07ae0]/[0.03] blur-[110px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 pt-32 pb-24">

        {/* Location badge */}
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2 text-[#f0a050] text-[12px] font-semibold mb-10 px-3.5 py-1.5 rounded-full border border-[#f0a050]/[0.22] bg-[#f0a050]/[0.06]">
            <MapPin className="w-3.5 h-3.5" />
            Cayenne · Guyane française · depuis 2014
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h1
            className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white max-w-[820px] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Spécialiste{" "}
            <span className="text-[#f0a050]">monétique</span>
            {" "}en Guyane
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
          <p className="text-[16px] sm:text-[17px] text-white/62 leading-[1.75] max-w-[480px] mb-10">
            Équipements point de vente éprouvés, déployés et maintenus par
            notre équipe à Cayenne. Caisses, TPE, logiciels, balances —
            un seul interlocuteur, une seule hotline.
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up flex flex-wrap gap-3 mb-20" style={{ animationDelay: "240ms" }}>
          <Link
            href="/rendez-vous"
            className="btn-shimmer inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f0a050] text-[#09080c] text-[14px] font-bold rounded-full transition-all duration-200 hover:bg-[#f5b060] hover:shadow-[0_0_32px_rgba(240,160,80,0.35)] active:scale-[0.97]"
          >
            <CalendarDays className="w-4 h-4" />
            Planifier un rendez-vous
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white/65 hover:text-white border border-white/[0.12] hover:border-white/[0.22] rounded-full transition-all duration-200"
          >
            Notre histoire
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Stats — fix mobile border: only odd indices get border-l always; i=2 only on sm+ */}
        <div className="animate-fade-up" style={{ animationDelay: "320ms" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/[0.08] pt-8 max-w-[580px]">
            {STATS.map(({ value, label, color }, i) => (
              <div
                key={label}
                className={[
                  "pr-4 sm:pr-6",
                  i % 2 !== 0 ? "pl-4 sm:pl-6 border-l border-white/[0.08]" : "",
                  i === 2 ? "sm:pl-6 sm:border-l sm:border-white/[0.08]" : "",
                ].filter(Boolean).join(" ")}
              >
                <CountUp
                  value={value}
                  className="text-[1.85rem] sm:text-[2rem] font-bold leading-none mb-1 tracking-[-0.03em]"
                  style={{ color, fontFamily: "var(--font-display)" }}
                />
                <div className="text-[11px] sm:text-[11.5px] text-white/45 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
