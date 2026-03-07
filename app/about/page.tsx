import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AboutSection } from "@/components/home/AboutSection";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "À propos de Next Solutions",
  description:
    "Next Solutions, spécialiste du point de vente en Guyane depuis 2014. Équipement, déploiement, formation et SAV — découvrez l'entreprise qui accompagne les commerçants guyanais.",
};

const values = [
  {
    title: "Ancrage guyanais",
    desc: "Nous connaissons les réalités du terrain. Nos équipes interviennent à Cayenne, Kourou, Saint-Laurent — partout où vous êtes.",
    color: "#f0a050",
  },
  {
    title: "Déploiement clé en main",
    desc: "Livraison, installation, formation de vos équipes — nous gérons tout. Vous êtes opérationnel dès le premier jour, sans stress.",
    color: "#b07ae0",
  },
  {
    title: "SAV 6j/7",
    desc: "Une panne ? Appelez notre hotline. Un technicien vous répond en direct et intervient sur site sous 24h si nécessaire.",
    color: "#4f8ef7",
  },
  {
    title: "+500 commerces équipés",
    desc: "Épiceries, supermarchés, marchés, restaurants, pharmacies — notre portefeuille couvre toute la palette du commerce guyanais.",
    color: "#52c48a",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="10 ans au service des commerçants guyanais"
        subtitle="500 commerces équipés en Guyane depuis 2014. Découvrez l'entreprise, ses engagements et son équipe technique basée à Cayenne."
        badge="À propos"
        breadcrumbs={[{ label: "À propos", href: "/about" }]}
      />

      <AboutSection />

      {/* Values */}
      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

          <Reveal className="mb-14">
            <h2
              className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce qui nous distingue
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group p-8 rounded-3xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-10 h-1 rounded-full mb-5 transition-all duration-300 group-hover:w-16"
                    style={{ background: item.color }}
                  />
                  <h3
                    className="text-[18px] font-bold text-white/85 group-hover:text-white mb-3 transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal info */}
      <section className="py-16 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                className="text-[22px] font-bold text-white/80 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Informations légales
              </h2>
              <div className="space-y-3 text-sm text-white/40">
                {[
                  { label: "Forme",   value: "SASU – Société par Actions Simplifiée Unipersonnelle" },
                  { label: "Adresse", value: "1436 Rte de Baduel, Cayenne 97300, Guyane française" },
                  { label: "SIRET",   value: "52217524900021" },
                  { label: "RCS",     value: "522 175 249 R.C.S. Cayenne" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3 py-2 border-b border-white/[0.05] last:border-0">
                    <span className="font-semibold text-white/55 w-28 shrink-0">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
