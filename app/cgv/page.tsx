import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de Next Solutions : commandes, livraison, prix, garanties et retours.",
};

const sections = [
  {
    title: "1. Dispositions générales",
    content:
      "Les présentes conditions générales de vente s'appliquent à toutes les ventes conclues par Next Solutions (SASU, SIRET 52217524900021) avec ses clients professionnels ou particuliers. Toute commande implique l'acceptation pleine et entière des présentes conditions.",
  },
  {
    title: "2. Commandes et livraison",
    content:
      "Les commandes sont confirmées par email. Les délais de livraison sont donnés à titre indicatif. Next Solutions s'engage à livrer dans les délais convenus, sauf cas de force majeure. Les frais de livraison sont à la charge du client sauf mention contraire.",
  },
  {
    title: "3. Prix",
    content:
      "Les prix sont indiqués en euros TTC et peuvent être modifiés à tout moment. Le prix applicable est celui en vigueur au jour de la commande. Les promotions et offres spéciales sont valables pendant la durée indiquée.",
  },
  {
    title: "4. Délais, expédition et transfert des risques",
    content:
      "Le transfert des risques intervient lors de la remise des produits au transporteur ou lors de la prise en charge par le client. Next Solutions ne peut être tenu responsable des dommages survenus lors du transport.",
  },
  {
    title: "5. Conditions de règlement",
    content:
      "Le paiement est dû à la commande sauf accord de paiement différé. En cas de retard de paiement, des pénalités de 30€ par jour de retard seront appliquées. Les modes de paiement acceptés sont : virement SEPA, chèque et carte bancaire.",
  },
  {
    title: "6. Réserve de propriété",
    content:
      "Next Solutions conserve la propriété des produits vendus jusqu'au paiement intégral du prix. En cas de non-paiement, Next Solutions se réserve le droit de reprendre les produits livrés.",
  },
  {
    title: "7. Garantie",
    content:
      "Les produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés. La garantie ne couvre pas les dommages résultant d'une mauvaise utilisation, d'un choc, de l'humidité, d'un incendie ou d'une surtension.",
  },
  {
    title: "8. Logiciels",
    content:
      "Les licences logicielles sont soumises aux conditions d'utilisation des éditeurs respectifs. Toute reproduction ou distribution non autorisée est interdite. Le support logiciel est assuré par Next Solutions selon les termes du contrat.",
  },
  {
    title: "9. Limite de responsabilité",
    content:
      "La responsabilité de Next Solutions est limitée au montant de la commande. Next Solutions ne peut être tenu responsable des préjudices indirects, pertes d'exploitation ou manque à gagner.",
  },
  {
    title: "10. Propriété intellectuelle",
    content:
      "Tous les droits de propriété intellectuelle relatifs aux produits et logiciels restent la propriété de leurs titulaires respectifs. Aucune licence n'est accordée au-delà du droit d'utilisation normal.",
  },
  {
    title: "11. Dispositions finales",
    content:
      "Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le tribunal compétent sera celui de Cayenne (Guyane).",
  },
];

export default function CGVPage() {
  return (
    <>
      <PageHero
        title="Conditions Générales de Vente"
        subtitle="Consultez nos conditions générales de vente applicables à toutes nos transactions commerciales."
        badge="CGV"
        breadcrumbs={[{ label: "CGV", href: "/cgv" }]}
        accentColor="#9EA3B0"
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map(({ title, content }) => (
              <article key={title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
                <h2 className="text-base font-bold text-white/80 mb-3">
                  {title}
                </h2>
                <p className="text-sm text-white/60 leading-relaxed">{content}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#f0a050]/8 border border-[#f0a050]/20">
            <p className="text-sm text-white/55">
              <strong>Dernière mise à jour :</strong> 2024.{" "}
              Pour toute question, contactez-nous :{" "}
              <a href="mailto:contact@next-solutions.fr" className="text-[#f0a050] hover:underline">
                contact@next-solutions.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
