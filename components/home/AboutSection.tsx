"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const quadStats = [
  { label: "Expertise locale",  value: "10+",  color: "#f0a050" },
  { label: "Fondés en Guyane",  value: "2014", color: "#4f8ef7" },
  { label: "Support technique", value: "6j/7", color: "#52c48a" },
  { label: "Domaines couverts", value: "4",    color: "#b07ae0" },
];

const pillars = [
  {
    label: "Ancrage local",
    detail: "Présents à Cayenne depuis 2014 — un seul interlocuteur pour tout votre parc matériel.",
    color: "#f0a050",
  },
  {
    label: "Hotline 6j/7",
    detail: "Techniciens joignables du lundi au samedi. Intervention sur site sous 24h.",
    color: "#52c48a",
  },
  {
    label: "Clé en main",
    detail: "Installation, formation, mise à jour, SAV — inclus dans chaque contrat.",
    color: "#b07ae0",
  },
];

export function AboutSection() {
  return (
    <section className="relative py-28 bg-[var(--c-bg)] overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#4f8ef7]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* ── Main layout: headline left / image right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-28 items-center mb-24">

          {/* ── Left: text column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-9">
                <span className="block w-8 h-px bg-[#f0a050]/45 shrink-0" />
                <span className="text-[11px] font-semibold text-[#f0a050]/55 uppercase tracking-[0.16em]">
                  Next Solutions · Cayenne · 2014
                </span>
              </div>

              {/* Headline — very large, staggered fade */}
              <h2
                className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-[1.03] tracking-[-0.036em] mb-9"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">Pas de revendeur.</span>
                <br />
                <span className="text-white/18">Tout géré en direct,</span>
                <br />
                <span className="text-white/18">depuis Cayenne.</span>
              </h2>

              {/* Body */}
              <p className="text-[15px] text-white/38 leading-[1.82] mb-14 max-w-[500px]">
                Depuis 2014, Next Solutions équipe, forme et maintient les points
                de vente de Guyane. Équipement, déploiement, formation, SAV —
                nous couvrons chaque étape du commerce local.
              </p>
            </motion.div>

            {/* ── Stats quadrant — no cards, hairline grid ── */}
            <div className="grid grid-cols-2">
              {quadStats.map((s, i) => {
                const isLeft  = i % 2 === 0;
                const isTop   = i < 2;
                const classes = [
                  "border-white/[0.07]",
                  isLeft  ? "pr-8 border-r"              : "pl-8",
                  isTop   ? "py-8 border-b"              : "py-8",
                ].join(" ");
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.09 + 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={classes}
                  >
                    <div
                      className="text-[clamp(2.8rem,4.8vw,4.5rem)] font-bold leading-none tracking-[-0.045em] mb-3 tabular-nums"
                      style={{ color: s.color, fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[11.5px] text-white/28 leading-snug">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right: floating product image ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Diffused color glow behind product */}
            <div
              className="absolute inset-[10%] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, rgba(79,142,247,0.18), rgba(240,160,80,0.08) 55%, transparent 80%)",
                filter: "blur(32px)",
              }}
            />

            {/* Product image — no card, no border, floating */}
            <div className="relative w-full aspect-square max-w-[420px] mx-auto">
              <Image
                src="/images/caisse tactile/aer-store.png"
                alt="Caisse tactile AURES — Next Solutions"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.5))" }}
              />
            </div>

            {/* Floating year badge */}
            <div className="absolute -top-4 -right-2 sm:-right-6 glass rounded-2xl px-5 py-4 shadow-xl shadow-black/35">
              <div className="text-[10px] font-bold text-white/22 uppercase tracking-[0.14em] mb-1">
                Fondés en
              </div>
              <div
                className="text-[2.1rem] font-bold text-white/70 leading-none tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2014
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Pillar strip — border-separated, no cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/[0.07]"
        >
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={[
                "py-9 flex gap-4",
                i > 0 ? "sm:pl-10 sm:border-l border-white/[0.07]" : "",
                i < pillars.length - 1 ? "sm:pr-10 border-b sm:border-b-0 border-white/[0.06]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Colored dot */}
              <span
                className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0"
                style={{ background: p.color }}
              />
              <div>
                <div
                  className="text-[13.5px] font-bold text-white/72 mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.label}
                </div>
                <p className="text-[12.5px] text-white/28 leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
