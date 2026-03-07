import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Caisses Tactiles",
  description:
    "Caisses tactiles AURES en Guyane — Android et Windows. Aer STORE, Aer POSII, KOMET, KYRA, TWIST-P, NINO III. Pour le retail, la restauration et les surfaces alimentaires.",
};

const products = [
  {
    name: "Aer STORE",
    description:
      "La référence AURES pour la grande distribution et le retail multi-caisses. Modulaire, disponible en plusieurs formats d'écran. Robuste et performante dans les environnements les plus exigeants.",
    imageSrc: "/images/caisse tactile/aer-store.png",
  },
  {
    name: "Aer POSII",
    description:
      "Compact et puissant, l'Aer POSII s'installe dans les petits espaces sans sacrifier les performances. Interface intuitive, démarrage rapide — parfait pour les boutiques et petites enseignes.",
    imageSrc: "/images/caisse tactile/AerPOSII-FEC.png",
  },
  {
    name: "KOMET",
    description:
      "Tout-en-un AURES : caisse tactile, imprimante thermique et périphériques intégrés. Câblage minimal, installation en une heure. Pour les points de vente qui veulent aller à l'essentiel.",
    imageSrc: "/images/caisse tactile/DSC_9016.png",
  },
  {
    name: "KYRA",
    description:
      "Kiosque de paiement autonome acceptant espèces, carte et NFC. Réduisez les files d'attente, libérez vos caissiers. Idéal pour les surfaces à fort débit.",
    imageSrc: "/images/caisse tactile/Kyra-aures.jpg",
  },
  {
    name: "TWIST-P",
    description:
      "La caisse AURES pliable et modulable. Face client orientable, nombreux ports d'extension. S'adapte à tous vos agencements de comptoir sans contraindre votre espace.",
    imageSrc: "/images/caisse tactile/TWIST-P-aures-1.jpg",
  },
  {
    name: "NINO III",
    description:
      "14 pouces en format ultra-compact. La caisse tactile qui ne prend pas de place mais ne fait aucune concession sur la puissance. Idéale pour les petites surfaces et les corners.",
    imageSrc: "/images/caisse tactile/NINOIII-aures-01.png",
  },
];

export default function CaissesPage() {
  return (
    <>
      <PageHero
        title="Nos caisses tactiles"
        subtitle="Toute la gamme AURES disponible en Guyane — Android et Windows, pour le retail, la restauration et les surfaces alimentaires. Robustes, modulaires, configurées sur mesure."
        badge="Caisses Tactiles"
        breadcrumbs={[{ label: "Caisses Tactiles", href: "/caisses" }]}
        accentColor="#b07ae0"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

          {/* Info banner */}
          <Reveal className="mb-14">
            <div className="p-6 rounded-2xl bg-[#b07ae0]/[0.06] border border-[#b07ae0]/15">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Systèmes", value: "Android & Windows" },
                  { label: "Usage", value: "Retail · Restauration · Surfaces alim." },
                  { label: "Marque", value: "AURES Technologies" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-[10.5px] font-semibold text-white/25 uppercase tracking-[0.12em] mb-1.5">
                      {label}
                    </div>
                    <div className="text-[15px] font-bold text-white/75">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i * 70} className="h-full">
                <ProductCard {...product} accentColor="#b07ae0" className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
