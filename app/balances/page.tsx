import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductInfoBanner } from "@/components/shared/ProductInfoBanner";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Balances",
  description:
    "Balances de marché et de caisse en Guyane — Mettler Toledo et Precia Molen. Junior Plate, BM5 ARM, STAR, FreshBase. Homologuées, précises, adaptées au commerce local.",
};

const products = [
  {
    name: "Balance Junior Plate",
    description:
      "Compacte, abordable et homologuée. La Junior Plate s'installe partout et répond à tous les usages du quotidien. La balance d'entrée de gamme parfaite pour les marchands, épiceries et étals.",
    imageSrc: "/images/BALANCEJUNIORPLATE-marques.jpg",
  },
  {
    name: "Balance BM5 ARM Bi Corps",
    description:
      "La balance professionnelle par excellence. Processeur Dual Core ARM, scanner intégré, imprimante coulissante. Précision et rapidité au service du commerce alimentaire moderne.",
    imageSrc: "/images/BALANCE BM5 ARM BI CORPS-marques.png",
  },
  {
    name: "Balance de Comptoir STAR",
    description:
      "Le best-seller Precia Molen pour les boucheries et les comptoirs. Écran clair, programmation intuitive, connectivité Ethernet. Fiable, homologuée, prête à l'emploi dès la sortie de la boîte.",
    imageSrc: "/images/Balance-PRECIAMOLEN.jpg",
  },
  {
    name: "FreshBase avec afficheur sur colonne",
    description:
      "Conçue pour les environnements actifs et humides. Changement de rouleau ultra-rapide, résistante aux projections. La balance des professionnels de la marée, de la charcuterie et du frais.",
    imageSrc: "/images/FreshBaseavecafficheur sur colonne.jpeg",
  },
];

export default function BalancesPage() {
  return (
    <>
      <PageHero
        title="Nos balances"
        subtitle="Mettler Toledo et Precia Molen — les références mondiales du pesage professionnel. Homologuées métrologie légale, robustes, adaptées au commerce guyanais."
        badge="Balances"
        breadcrumbs={[{ label: "Balances", href: "/balances" }]}
        accentColor="#e8748a"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

          {/* Info banner */}
          <ProductInfoBanner
            accentColor="#e8748a"
            stats={[
              { label: "Marques", value: "Mettler Toledo · Precia Molen" },
              { label: "Usage", value: "Marché · Caisse · Comptoir" },
              { label: "Certification", value: "Homologation métrologie légale" },
            ]}
          />

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i * 75} className="h-full">
                <ProductCard {...product} accentColor="#e8748a" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
