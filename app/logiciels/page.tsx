import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductInfoBanner } from "@/components/shared/ProductInfoBanner";
import { ProductPageCTA } from "@/components/shared/ProductPageCTA";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Logiciels de Gestion",
  description:
    "Logiciels de gestion pour le commerce en Guyane — Kwisatz, WaveSoft, LEO 2, AEM Softs. Du point de vente unique au réseau multi-sites, personnalisables et simples à prendre en main.",
};

const products = [
  {
    name: "Kwisatz",
    description:
      "Le logiciel de caisse le plus déployé en Guyane. Interface simplifiée, stocks en temps réel, programme de fidélité, clôture comptable automatisée. Adapté au retail et à la restauration.",
    imageSrc: "/images/Kwisat.jpg",
  },
  {
    name: "LEO 2",
    description:
      "Solution complète pour la gestion multi-activités. Commandes fournisseurs, inventaires, analyses de rentabilité. Un tableau de bord pour piloter votre commerce en un coup d'œil.",
    imageSrc: "/images/LEO_2.jpg",
  },
  {
    name: "AEM Softs",
    description:
      "Robuste, personnalisable, éprouvé dans les grandes surfaces guyanaises. Gestion des rayons, codes-barres, promotions et inventaires. Performant même sur les configurations matérielles les plus sobres.",
    imageSrc: "/images/aem.jpg",
  },
  {
    name: "WaveSoft",
    description:
      "ERP-caisse nouvelle génération, synchronisation cloud, gestion comptable et RH intégrées — tout dans une interface moderne. Pour les commerçants qui pensent croissance et multi-sites.",
    imageSrc: "/images/WaveSoft.jpg",
  },
];

export default function LogicielsPage() {
  return (
    <>
      <PageHero
        title="Logiciels de gestion"
        subtitle="Kwisatz, WaveSoft, LEO 2, AEM Softs — des solutions qui centralisent ventes, stocks et encaissements. Du point de vente solo au réseau multi-sites. Formation et assistance incluses."
        badge="Logiciels de Gestion"
        breadcrumbs={[{ label: "Logiciels de Gestion", href: "/logiciels" }]}
        accentColor="#4f8ef7"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

          {/* Info banner */}
          <ProductInfoBanner
            accentColor="#4f8ef7"
            stats={[
              { label: "Gamme", value: "Simple POS · Multi-magasins" },
              { label: "Compatibilité", value: "Windows · Android · Cloud" },
              { label: "Accompagnement", value: "Formation & Support inclus" },
            ]}
          />

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i * 75} className="h-full">
                <ProductCard {...product} accentColor="#4f8ef7" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="h-full" />
              </Reveal>
            ))}
          </div>

          <ProductPageCTA accentColor="#4f8ef7" />
        </div>
      </section>
    </>
  );
}
