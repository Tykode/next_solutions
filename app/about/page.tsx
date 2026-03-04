import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AboutSection } from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "À propos de Next Solutions",
  description:
    "Next Solutions, spécialiste du point de vente en Guyane depuis 2014. Équipement, déploiement, formation et SAV — découvrez l'entreprise qui accompagne les commerçants guyanais.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="10 ans au service des commerçants guyanais"
        subtitle="500 commerces équipés en Guyane depuis 2014. Découvrez l'entreprise, ses engagements et son équipe technique basée à Cayenne."
        badge="À propos"
        breadcrumbs={[{ label: "À propos", href: "/about" }]}
      />

      {/* Reuse home About section */}
      <AboutSection />

      {/* Values */}
      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white/80">
              Ce qui nous distingue
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ancrage guyanais",
                desc: "Nous connaissons les réalités du terrain. Nos équipes interviennent à Cayenne, Kourou, Saint-Laurent — partout où vous êtes.",
                color: "#F89851",
              },
              {
                title: "Déploiement clé en main",
                desc: "Livraison, installation, formation de vos équipes — nous gérons tout. Vous êtes opérationnel dès le premier jour, sans stress.",
                color: "#a07cc5",
              },
              {
                title: "SAV 6j/7",
                desc: "Une panne ? Appelez notre hotline. Un technicien vous répond en direct et intervient sur site sous 24h si nécessaire.",
                color: "#3f78e0",
              },
              {
                title: "+500 commerces équipés",
                desc: "Épiceries, supermarchés, marchés, restaurants, pharmacies — notre portefeuille couvre toute la palette du commerce guyanais.",
                color: "#7cb798",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12] transition-all"
              >
                <div
                  className="w-10 h-1 rounded-full mb-5"
                  style={{ background: item.color }}
                />
                <h3 className="text-xl font-bold text-white/80 mb-3">
                  {item.title}
                </h3>
                <p className="text-white/35 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal info */}
      <section className="py-16 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white/80 mb-6">
              Informations légales
            </h2>
            <div className="space-y-3 text-sm text-white/35">
              <div className="flex gap-3">
                <span className="font-semibold text-white/55 w-32 shrink-0">Forme</span>
                <span>SASU – Société par Actions Simplifiée Unipersonnelle</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white/55 w-32 shrink-0">Adresse</span>
                <span>1436 Rte de Baduel, Cayenne 97300, Guyane française</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white/55 w-32 shrink-0">SIRET</span>
                <span>52217524900021</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-white/55 w-32 shrink-0">RCS</span>
                <span>522 175 249 R.C.S. Cayenne</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
