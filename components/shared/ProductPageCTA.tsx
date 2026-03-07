import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

interface ProductPageCTAProps {
  accentColor?: string;
}

export function ProductPageCTA({ accentColor = "#f0a050" }: ProductPageCTAProps) {
  return (
    <Reveal className="mt-16">
      <div
        className="rounded-2xl p-8 sm:p-10 border relative overflow-hidden text-center"
        style={{
          background: `${accentColor}06`,
          borderColor: `${accentColor}18`,
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${accentColor}0a, transparent)`,
          }}
        />

        <div className="relative">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
            style={{ color: `${accentColor}aa` }}
          >
            Prêt à équiper votre commerce ?
          </p>
          <h3
            className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white tracking-[-0.02em] mb-2 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Audit gratuit · Devis sans engagement
          </h3>
          <p className="text-[13.5px] text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            Notre équipe à Cayenne analyse votre installation actuelle et vous recommande
            le matériel adapté à votre activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/rendez-vous"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-[13.5px] rounded-full text-[#09080c] transition-all duration-200 hover:brightness-105 hover:shadow-[0_0_24px_rgba(0,0,0,0.2)] active:scale-[0.97]"
              style={{ background: accentColor }}
            >
              <CalendarDays className="w-4 h-4" />
              Planifier un rendez-vous
            </Link>
            <a
              href="tel:+594594251326"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13.5px] font-medium text-white/65 border border-white/[0.1] hover:border-white/[0.2] hover:text-white rounded-full transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              0594 25 13 26
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
