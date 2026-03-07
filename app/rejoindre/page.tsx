import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import type { CSSProperties } from "react";
import { Users, TrendingUp, Heart, Zap } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Rejoignez-nous",
  description:
    "Rejoignez Next Solutions, spécialiste du point de vente en Guyane depuis 2014. Candidature spontanée, stage, alternance — une petite équipe, un vrai terrain.",
};

const perks = [
  {
    Icon: TrendingUp,
    title: "Évolution rapide",
    desc: "Le marché des solutions monétiques est en plein essor. Montez en compétences vite, évoluez avec l'entreprise — Next Solutions grandit avec ceux qui s'investissent.",
    color: "#f0a050",
  },
  {
    Icon: Heart,
    title: "Structure à taille humaine",
    desc: "Six personnes, zéro bureaucratie. Les décisions se prennent vite, chacun est responsable de son périmètre et l'entraide est la norme.",
    color: "#e8748a",
  },
  {
    Icon: Zap,
    title: "Matériel certifié, logiciels Cloud",
    desc: "Terminaux Ingenico, caisses AURES, logiciels WaveSoft et Kwisatz — vous intervenez sur les équipements réels qu'utilisent les commerces guyanais au quotidien.",
    color: "#4f8ef7",
  },
  {
    Icon: Users,
    title: "Impact local",
    desc: "Chaque commerce équipé, c'est une famille qui gagne du temps. Votre travail a un impact direct et visible sur l'économie locale.",
    color: "#52c48a",
  },
];

export default function RejoindrePage() {
  return (
    <>
      <PageHero
        title="Rejoignez l'équipe Next Solutions"
        subtitle="Six personnes, un atelier à Cayenne, 500 clients à équiper et maintenir. Si vous aimez la technique et le terrain, on a quelque chose pour vous."
        badge="Recrutement"
        breadcrumbs={[{ label: "Rejoignez-nous", href: "/rejoindre" }]}
        accentColor="#b07ae0"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

          {/* Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {perks.map(({ Icon, title, desc, color }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div
                  className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 h-full"
                  style={{ "--card-glow": `${color}20` } as CSSProperties}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3
                    className="text-[17px] font-bold text-white/85 group-hover:text-white mb-2 transition-colors tracking-[-0.01em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[13px] text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Application form */}
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.06] tracking-[-0.03em] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Envoyez-nous votre candidature
              </h2>
              <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
                <iframe
                  src="https://forms.monday.com/forms/embed/4bc0b75bac2abcdd30e2fbebeab2afcc?r=use1"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  title="Formulaire de candidature – Next Solutions"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
