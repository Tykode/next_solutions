"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, CreditCard, BarChart3, Scale, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Monitor,
    title: "Caisses Tactiles",
    desc: "Toute la gamme AURES — Android et Windows — pour le retail, la restauration et les surfaces alimentaires. Modulaires, fiables, configurées sur mesure.",
    href: "/caisses",
    color: "#b07ae0",
    tags: ["Android", "Windows", "AURES"],
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Logiciels de Gestion",
    desc: "Kwisatz, WaveSoft, LEO 2, AEM — du caissier unique au réseau multi-sites. Centraliser, analyser, encaisser. Simple à prendre en main dès le premier jour.",
    href: "/logiciels",
    color: "#4f8ef7",
    tags: ["Kwisatz", "WaveSoft", "Multi-sites"],
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Terminaux de Paiement",
    desc: "Gamme Ingenico complète, vente ou location. IP, GSM, Wi-Fi, certification PCI PTS V6. Encaissez en boutique, au marché ou en livraison.",
    href: "/tpe",
    color: "#52c48a",
    tags: ["IP · GSM · Wi-Fi", "Ingenico", "PCI PTS V6"],
  },
  {
    num: "04",
    icon: Scale,
    title: "Balances",
    desc: "Mettler Toledo et Precia Molen, les références mondiales. Homologuées, robustes, adaptées au commerce guyanais — du marché au supermarché.",
    href: "/balances",
    color: "#e8748a",
    tags: ["Mettler Toledo", "Precia Molen", "Homologuée"],
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-28 bg-[var(--c-bg)] overflow-hidden">

      {/* Subtle section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-[11px] font-semibold text-[#f0a050]/60 uppercase tracking-[0.15em] mb-3">
              Ce que l&apos;on installe
            </p>
            <h2
              className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold text-white leading-[1.1] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4 gammes de solutions
              <br />
              <span className="text-white/30">pour votre commerce</span>
            </h2>
          </div>
          <p className="text-[14px] text-white/35 max-w-xs leading-relaxed md:text-right">
            Équipements certifiés, support 6j/7. De l&apos;encaissement à la gestion, une couverture complète depuis Cayenne.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={s.href}
                  className="group relative flex flex-col h-full p-6 rounded-2xl border border-white/[0.07] bg-[var(--c-surface)] hover:border-white/[0.13] hover:bg-[var(--c-card)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${s.color}12, transparent)`,
                    }}
                  />

                  {/* Number */}
                  <span
                    className="text-[11px] font-bold tracking-[0.1em] mb-5"
                    style={{ color: `${s.color}50` }}
                  >
                    {s.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${s.color}14` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>

                  {/* Title + desc */}
                  <h3
                    className="text-[16px] font-bold text-white/85 group-hover:text-white mb-2.5 transition-colors leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-white/35 leading-relaxed flex-1 mb-5">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ background: `${s.color}12`, color: `${s.color}99` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Arrow link */}
                  <div
                    className="flex items-center gap-1.5 text-[12.5px] font-semibold transition-all group-hover:gap-2"
                    style={{ color: `${s.color}80` }}
                  >
                    Découvrir
                    <ArrowUpRight
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      style={{ color: s.color }}
                    />
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
