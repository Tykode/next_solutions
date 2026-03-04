"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Phone, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    Icon: Phone,
    label: "Appeler",
    value: "+0594 25 13 26",
    href: "tel:+594594251326",
    color: "#52c48a",
  },
  {
    Icon: Mail,
    label: "Écrire",
    value: "contact@next-solutions.fr",
    href: "mailto:contact@next-solutions.fr",
    color: "#4f8ef7",
  },
  {
    Icon: CalendarDays,
    label: "Planifier",
    value: "Prendre rendez-vous",
    href: "/rendez-vous",
    color: "#f0a050",
    primary: true,
  },
];

export function CTASection() {
  return (
    <section className="relative py-28 bg-[var(--c-bg)] overflow-hidden">
      {/* separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Amber radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#f0a050]/7 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden">

          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(240,160,80,0.08),transparent)] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f0a050]/30 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-lg"
            >
              <p className="text-[11px] font-semibold text-[#f0a050]/60 uppercase tracking-[0.15em] mb-3">
                Prochaine étape
              </p>
              <h2
                className="text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold text-white leading-[1.1] tracking-[-0.025em] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Votre équipement,
                <br />
                <span className="text-white/30">livré et installé à Cayenne.</span>
              </h2>
              <p className="text-[14px] text-white/35 leading-relaxed">
                Audit gratuit, devis sans engagement, installation et formation incluses.
                Notre équipe est à Cayenne — pas à l&apos;autre bout du monde.
              </p>
            </motion.div>

            {/* Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
            >
              {channels.map(({ Icon, label, value, href, color, primary }) => (
                <Link
                  key={label}
                  href={href}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
                    primary
                      ? "bg-[#f0a050] border-[#f0a050] hover:bg-[#f5b060] hover:shadow-[0_0_32px_rgba(240,160,80,0.35)]"
                      : "border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${primary ? "bg-[var(--c-bg)]/20" : ""}`}
                    style={!primary ? { background: `${color}18` } : {}}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: primary ? "#05080f" : color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[11.5px] font-semibold uppercase tracking-wide mb-0.5 ${primary ? "text-[#05080f]/70" : "text-white/30"}`}>
                      {label}
                    </div>
                    <div className={`text-[13.5px] font-semibold truncate ${primary ? "text-[#05080f]" : "text-white/70"}`}>
                      {value}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${primary ? "text-[#05080f]/50" : "text-white/20 group-hover:text-white/50"}`}
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
