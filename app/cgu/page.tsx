import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Mentions Légales (CGU)",
  description:
    "Mentions légales et conditions générales d'utilisation du site Next Solutions.",
};

export default function CGUPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        subtitle="Informations légales et conditions générales d'utilisation du site Next Solutions."
        badge="Légal"
        breadcrumbs={[{ label: "Mentions légales", href: "/cgu" }]}
        accentColor="#9EA3B0"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-white/55 space-y-10">

            <article>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                1. Informations légales
              </h2>
              <div className="space-y-2 text-sm text-white/60">
                <p><strong className="text-white/55">Société :</strong> Next Solutions</p>
                <p><strong className="text-white/55">Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                <p><strong className="text-white/55">Adresse :</strong> 1436 Rte de Baduel, Cayenne 97300, Guyane française</p>
                <p><strong className="text-white/55">SIRET :</strong> 52217524900021</p>
                <p><strong className="text-white/55">RCS :</strong> 522 175 249 R.C.S. Cayenne</p>
                <p><strong className="text-white/55">Email :</strong> contact@next-solutions.fr</p>
                <p><strong className="text-white/55">Hébergement :</strong> Planet Hoste</p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                2. Propriété intellectuelle
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                L'ensemble du contenu présent sur ce site (textes, images, logos, graphismes,
                vidéos, sons) est protégé par le droit de la propriété intellectuelle et appartient
                exclusivement à Next Solutions ou à ses partenaires. Toute reproduction, représentation
                ou diffusion sans autorisation expresse est strictement interdite.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                3. Limitation de responsabilité
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                Next Solutions s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Cependant, Next Solutions ne garantit pas l'exhaustivité,
                l'exactitude ou l'actualité des informations et ne peut être tenu responsable
                des dommages directs ou indirects résultant de l'utilisation de ce site.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                4. Protection des données personnelles
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de rectification et de suppression de vos données
                personnelles. Pour exercer ces droits, contactez-nous à l'adresse :
                contact@next-solutions.fr.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                5. Contact
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous
                contacter par email à contact@next-solutions.fr ou par téléphone au +0594 25 13 26.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
