import Link from "next/link";
import { CalendarDays, Phone, Mail, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const channels = [
  {
    Icon: Phone,
    label: "Appelez-nous",
    value: "+0594 25 13 26",
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
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <Card className="p-10 md:p-14 bg-[var(--c-surface)] border-white/[0.10]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            {/* Left text */}
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold text-[#f0a050]/70 uppercase tracking-[0.15em] mb-3">
                Prochaine étape
              </p>
              <h2
                className="text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold text-white leading-[1.1] tracking-[-0.025em] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Votre équipement,
                <br />
                <span className="text-white/45">livré et installé à Cayenne.</span>
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
                  className={`group flex items-center gap-4 p-4 rounded-2xl border transition-colors duration-200 ${
                    primary
                      ? "bg-[#f0a050] border-[#f0a050] hover:bg-[#f5b060]"
                      : "border-white/[0.09] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.16]"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={primary ? { background: "rgba(9,8,12,0.2)" } : { background: `${color}18` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: primary ? "#09080c" : color }}
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
                    className={`w-4 h-4 shrink-0 ${primary ? "text-[#09080c]/50" : "text-white/25 group-hover:text-white/55"} transition-colors`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
