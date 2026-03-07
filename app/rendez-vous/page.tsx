import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CalendlyWidget } from "@/components/shared/CalendlyWidget";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Planifier un Rendez-vous",
  description:
    "Prenez rendez-vous avec un expert Next Solutions à Cayenne. Audit gratuit, conseil personnalisé et devis sur mesure pour votre commerce en Guyane.",
};

const checklist = [
  "Audit de votre installation actuelle et identification des points d'amélioration",
  "Sélection de la caisse ou du terminal adapté à votre volume et votre activité",
  "Recommandation du logiciel de gestion qui correspond à votre taille et à vos besoins",
  "Devis transparent, sans surprise — avec options vente ou location",
  "Planification de l'installation et formation de votre équipe",
  "Mise en place d'un contrat de maintenance et support 6j/7",
];

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
              <Reveal>
                <h2
                  className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.06] tracking-[-0.03em] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ce que couvre ce rendez-vous :
                </h2>
              </Reveal>

              <div className="space-y-3 mb-8">
                {checklist.map((item, i) => (
                  <Reveal key={item} delay={i * 60}>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-5 h-5 text-[#f0a050] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                      <span className="text-[14.5px] text-white/60 leading-relaxed group-hover:text-white/75 transition-colors">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={400}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                  <h3
                    className="font-bold text-white/80 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Besoin d&apos;une réponse rapide ?
                  </h3>
                  <p className="text-[13px] text-white/40 mb-4">
                    Contactez-nous directement par téléphone ou email.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="tel:+594594251326"
                      className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#f0a050] hover:text-[#f5b060] transition-colors min-h-[44px]"
                    >
                      <Phone className="w-4 h-4" />
                      +0594 25 13 26
                    </a>
                    <a
                      href="mailto:contact@next-solutions.fr"
                      className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#f0a050] hover:text-[#f5b060] transition-colors min-h-[44px]"
                    >
                      <Mail className="w-4 h-4" />
                      contact@next-solutions.fr
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Calendly */}
            <Reveal delay={100}>
              <CalendlyWidget />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
