import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CalendlyWidget } from "@/components/shared/CalendlyWidget";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Planifier un Rendez-vous",
  description:
    "Prenez rendez-vous avec un expert Next Solutions à Cayenne. Audit gratuit, conseil personnalisé et devis sur mesure pour votre commerce en Guyane.",
};

export default function RendezVousPage() {
  return (
    <>
      <PageHero
        title="Parlez à un technicien-conseil"
        subtitle="Audit gratuit, sans engagement. En 30 minutes, on analyse votre installation actuelle et on vous propose le matériel et les logiciels qui correspondent à votre activité."
        badge="Rendez-vous"
        breadcrumbs={[{ label: "Planifier un RDV", href: "/rendez-vous" }]}
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div>
              <h2 className="text-2xl font-bold text-white/80 mb-6">
                Ce que couvre ce rendez-vous :
              </h2>
              <div className="space-y-4">
                {[
                  "Audit de votre installation actuelle et identification des points d'amélioration",
                  "Sélection de la caisse ou du terminal adapté à votre volume et votre activité",
                  "Recommandation du logiciel de gestion qui correspond à votre taille et à vos besoins",
                  "Devis transparent, sans surprise — avec options vente ou location",
                  "Planification de l'installation et formation de votre équipe",
                  "Mise en place d'un contrat de maintenance et support 6j/7",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F89851] shrink-0 mt-0.5" />
                    <span className="text-white/35 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.07]">
                <h3 className="font-bold text-white/80 mb-3">
                  Besoin d&apos;une réponse rapide ?
                </h3>
                <p className="text-sm text-white/35 mb-4">
                  Contactez-nous directement par téléphone ou email.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+594594251326"
                    className="text-sm font-semibold text-[#F89851] hover:underline"
                  >
                    📞 +0594 25 13 26
                  </a>
                  <a
                    href="mailto:contact@next-solutions.fr"
                    className="text-sm font-semibold text-[#F89851] hover:underline"
                  >
                    ✉️ contact@next-solutions.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Calendly widget */}
            <div>
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
