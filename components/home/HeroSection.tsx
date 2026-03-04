"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const STATS = [
  { value: "10+",  label: "ans en Guyane" },
  { value: "500+", label: "commerces équipés" },
  { value: "4",    label: "gammes de solutions" },
  { value: "6j/7", label: "support technique" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center bg-[var(--c-bg)]">

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 pt-32 pb-24">

        {/* Location */}
        <div className="flex items-center gap-2 text-[#f0a050] text-[12.5px] font-semibold mb-10">
          <MapPin className="w-3.5 h-3.5" />
          Cayenne · Guyane française · depuis 2014
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white max-w-[820px] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Spécialiste{" "}
          <span className="text-[#f0a050]">monétique</span>
          {" "}en Guyane
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] text-white/62 leading-[1.75] max-w-[480px] mb-10">
          Équipements point de vente éprouvés, déployés et maintenus par
          notre équipe à Cayenne. Caisses, TPE, logiciels, balances —
          un seul interlocuteur, une seule hotline.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-20">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f0a050] hover:bg-[#f5b060] text-[#09080c] text-[14px] font-bold rounded-full transition-colors duration-200"
          >
            <CalendarDays className="w-4 h-4" />
            Planifier un rendez-vous
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white/65 hover:text-white border border-white/[0.12] hover:border-white/[0.22] rounded-full transition-colors duration-200"
          >
            Notre histoire
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-white/[0.08] pt-8 max-w-[580px]">
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
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
