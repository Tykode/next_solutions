import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Users, TrendingUp, Heart, Zap } from "lucide-react";

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
    color: "#F89851",
  },
  {
    Icon: Heart,
    title: "Structure à taille humaine",
    desc: "Six personnes, zéro bureaucratie. Les décisions se prennent vite, chacun est responsable de son périmètre et l'entraide est la norme.",
    color: "#d16b86",
  },
  {
    Icon: Zap,
    title: "Matériel certifié, logiciels Cloud",
    desc: "Terminaux Ingenico, caisses AURES, logiciels WaveSoft et Kwisatz — vous intervenez sur les équipements réels qu'utilisent les commerces guyanais au quotidien.",
    color: "#3f78e0",
  },
  {
    Icon: Users,
    title: "Impact local",
    desc: "Chaque commerce équipé, c'est une famille qui gagne du temps. Votre travail a un impact direct et visible sur l'économie locale.",
    color: "#7cb798",
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
        accentColor="#a07cc5"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          {/* Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {perks.map(({ Icon, title, desc, color }) => (
              <div
                key={title}
                className="p-6 rounded-3xl border border-white/[0.07] bg-white/[0.03] hover:shadow-md transition-shadow text-center"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-white/80 mb-2">{title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Monday.com form embed */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white/80 text-center mb-8">
              Envoyez-nous votre candidature
            </h2>
            <div className="rounded-3xl overflow-hidden border border-white/[0.07] shadow-lg">
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
        </div>
      </section>
    </>
  );
}
