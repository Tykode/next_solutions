import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Terminaux de Paiement Électronique",
  description:
    "Terminaux de paiement Ingenico certifiés PCI PTS V6 en Guyane. AXIUM DX4000, Desk/1600, ICT 220, Desk/5000 — vente ou location, IP, GSM et Wi-Fi.",
};

const products = [
  {
    name: "AXIUM DX4000 Portable",
    description:
      "Le terminal Android nouvelle génération d'Ingenico. Connectivité 4G, Wi-Fi et Bluetooth, certification PCI PTS V6, accepte tous les modes de paiement. Idéal pour les équipes mobiles et les commerçants de marché.",
    imageSrc: "/images/AXIUM DX4000 Desktop-Ingenico(1).png.png",
  },
  {
    name: "Desk/1600",
    description:
      "PIN Pad compact pour une séparation nette entre caisse et paiement. Discret, ultra-rapide, compatible avec tous les systèmes d'encaissement. L'essentiel pour un passage en caisse fluide.",
    imageSrc: "/images/Desk1600-Ingenico(1).png",
  },
  {
    name: "ICT 220",
    description:
      "Terminal fixe TELIUM 2, connectivité RTC + IP. Robuste, éprouvé, facilement intégrable à votre caisse existante. Le classique de confiance pour les comptoirs permanents.",
    imageSrc: "/images/ict220-ingenico(1).webp",
  },
  {
    name: "Desk/5000",
    description:
      "Terminal haut de gamme acceptant carte, NFC, QR code et paiements alternatifs. Grand écran couleur, réponse ultra-rapide. L'expérience premium qui fidélise vos clients.",
    imageSrc: "/images/Desk5000-Ingenico.png",
  },
];

export default function TPEPage() {
  return (
    <>
      <PageHero
        title="Nos terminaux de paiement"
        subtitle="Gamme Ingenico complète, disponible à la vente ou en location. IP, GSM et Wi-Fi, certification PCI PTS V6 — pour encaisser en boutique, au marché ou en déplacement."
        badge="Terminaux TPE"
        breadcrumbs={[{ label: "Terminaux de Paiement", href: "/tpe" }]}
        accentColor="#52c48a"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          {/* Info banner */}
          <div className="mb-14 p-6 rounded-2xl bg-[#52c48a]/[0.06] border border-[#52c48a]/15">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Connectivité", value: "IP · GSM · Wi-Fi · RTC" },
                { label: "Disponibilité", value: "Vente & Location" },
                { label: "Certification", value: "PCI PTS V6 — Sécurité maximale" },
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

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard
                key={product.name}
                {...product}
                accentColor="#52c48a"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
