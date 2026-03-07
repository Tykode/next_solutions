import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";

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
    <section className="relative py-24 bg-[var(--c-bg)]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-center mb-20">

          {/* ── Left: text ── */}
          <div>
            <Reveal>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#f0a050]/40 shrink-0" />
                <span className="text-[11px] font-semibold text-[#f0a050]/60 uppercase tracking-[0.16em]">
                  Next Solutions · Cayenne · 2014
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">Pas de revendeur.</span>
                <br />
                <span className="text-white/50">Tout géré en direct,</span>
                <br />
                <span className="text-white/50">depuis Cayenne.</span>
              </h2>

              {/* Body */}
              <p className="text-[15px] text-white/60 leading-[1.8] mb-12 max-w-[500px]">
                Depuis 2014, Next Solutions équipe, forme et maintient les points
                de vente de Guyane. Équipement, déploiement, formation, SAV —
                nous couvrons chaque étape du commerce local.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={100}>
              <div className="grid grid-cols-2">
                {quadStats.map((s, i) => {
                  const isLeft = i % 2 === 0;
                  const isTop  = i < 2;
                  return (
                    <div
                      key={s.label}
                      className={[
                        "border-white/[0.08]",
                        isLeft ? "pr-8 border-r" : "pl-8",
                        isTop  ? "py-8 border-b" : "py-8",
                      ].join(" ")}
                    >
                      <CountUp
                        value={s.value}
                        className="text-[clamp(2.6rem,4.5vw,4.2rem)] font-bold leading-none tracking-[-0.04em] mb-2.5 tabular-nums"
                        style={{ color: s.color, fontFamily: "var(--font-display)" }}
                      />
                      <div className="text-[12px] text-white/42 leading-snug">
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ── Right: product image ── */}
          <Reveal delay={120} className="relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[420px] mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-4 bg-[#f0a050]/[0.07] blur-[64px] rounded-full" />
              <Image
                src="/images/caisse tactile/aer-store.png"
                alt="Caisse tactile AURES — Next Solutions"
                fill
                className="object-contain relative z-10"
                style={{ filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.5))" }}
              />
            </div>
          </Reveal>
        </div>

        {/* ── Pillar strip ── */}
        <Reveal delay={60}>
          <Separator className="mb-0" />
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className={[
                  "py-9 flex gap-4 group",
                  i > 0 ? "sm:pl-10 sm:border-l border-white/[0.08]" : "",
                  i < pillars.length - 1 ? "sm:pr-10 border-b sm:border-b-0 border-white/[0.07]" : "",
                ].filter(Boolean).join(" ")}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${p.color}18` }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                </div>
                <div>
                  <div
                    className="text-[14px] font-bold text-white/80 group-hover:text-white mb-1.5 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.label}
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
