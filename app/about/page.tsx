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
              className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-white leading-[1.04] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce qui nous distingue
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className={i === 0 ? "md:col-span-2" : ""}>
                <div className={`group border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 rounded-3xl ${
                  i === 0
                    ? "p-10 md:flex md:items-start md:gap-12"
                    : "p-8"
                }`}>
                  <div className={i === 0 ? "shrink-0" : ""}>
                    <div
                      className={`rounded-full mb-5 transition-all duration-300 group-hover:scale-x-125 origin-left ${i === 0 ? "w-14 h-1.5" : "w-10 h-1"}`}
                      style={{ background: item.color }}
                    />
                    <h3
                      className={`font-bold text-white/85 group-hover:text-white mb-3 transition-colors ${i === 0 ? "text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.02em]" : "text-[18px]"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-white/50 leading-relaxed ${i === 0 ? "text-[15px] md:pt-1" : "text-[14px]"}`}>{item.desc}</p>
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
