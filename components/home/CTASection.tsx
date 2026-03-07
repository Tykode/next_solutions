import Link from "next/link";
import { CalendarDays, Phone, Mail, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/Reveal";
import { SectionDivider } from "@/components/shared/SectionDivider";

const channels = [
  {
    Icon: Phone,
    label: "Appelez-nous",
    value: "0594 25 13 26",
    href: "tel:+594594251326",
    color: "#52c48a",
    primary: false,
  },
  {
    Icon: Mail,
    label: "Envoyez un email",
    value: "contact@next-solutions.fr",
    href: "mailto:contact@next-solutions.fr",
    color: "#4f8ef7",
    primary: false,
  },
  {
    Icon: CalendarDays,
    label: "Planifier un rendez-vous",
    value: "Audit gratuit, sans engagement",
    href: "/rendez-vous",
    color: "#f0a050",
    primary: true,
  },
];

export function CTASection() {
  return (
    <section className="relative py-24 bg-[var(--c-bg)]">
      <SectionDivider />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <Reveal>
          <Card className="p-10 md:p-14 bg-[var(--c-surface)] border-white/[0.10] relative overflow-hidden">

            {/* Colored top border */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#b07ae0]/40 via-[#f0a050]/80 to-[#52c48a]/40 pointer-events-none" />

            {/* Decorative corner glows */}
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#f0a050]/[0.08] blur-[70px] rounded-full pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#b07ae0]/[0.05] blur-[60px] rounded-full pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-10">

              {/* Left text */}
              <div className="max-w-lg">
                <p className="text-[11px] font-semibold text-[#f0a050]/70 uppercase tracking-[0.15em] mb-3">
                  Prochaine étape
                </p>
                <h2
                  className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Votre équipement,
                  <br />
                  <span className="text-white/40">livré et installé à Cayenne.</span>
                </h2>
                <p className="text-[14px] text-white/58 leading-relaxed">
                  Audit gratuit, devis sans engagement, installation et formation incluses.
                  Notre équipe est à Cayenne — pas à l&apos;autre bout du monde.
                </p>
              </div>

              {/* Channels */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                {channels.map(({ Icon, label, value, href, color, primary }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
                      primary
                        ? "btn-shimmer bg-[#f0a050] border-[#f0a050] hover:bg-[#f5b060] hover:shadow-[0_0_32px_rgba(240,160,80,0.3)] active:scale-[0.98]"
                        : "border-white/[0.09] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.16]"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={primary ? { background: "rgba(9,8,12,0.2)" } : { background: `${color}18` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: primary ? "#ffffff" : color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[12px] font-semibold mb-0.5 ${primary ? "text-[#09080c]/70" : "text-white/45"}`}>
                        {label}
                      </div>
                      <div className={`text-[13.5px] font-bold truncate ${primary ? "text-[#09080c]" : "text-white/75"}`}>
                        {value}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200 ${
                        primary ? "text-[#09080c]/50" : "text-white/40 group-hover:text-white/65"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
