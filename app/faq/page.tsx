"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Questions commerciales",
    color: "#F89851",
    items: [
      {
        q: "Proposez-vous des locations flexibles ou saisonnières de TPE ?",
        a: "Oui — nos formules de location sont entièrement modulables : court terme pour une saison touristique, location longue durée avec option d'achat, ou remplacement d'urgence. Appelez-nous pour un devis express sous 24h.",
      },
      {
        q: "Quelles caisses enregistreuses proposez-vous ?",
        a: "Nous commercialisons toute la gamme AURES : Aer STORE, Aer POSII, KOMET, KYRA, TWIST-P et NINO III — Android ou Windows, compact ou modulaire. Nous vous guidons vers le modèle le mieux adapté à votre activité.",
      },
      {
        q: "Les terminaux de paiement sont-ils disponibles à la vente ?",
        a: "Oui, en vente directe ou en location. Notre catalogue Ingenico couvre l'AXIUM DX4000, le Desk/1600, l'ICT 220 et le Desk/5000 — du terminal fixe de comptoir au TPE mobile pour les équipes itinérantes.",
      },
      {
        q: "Peut-on personnaliser l'écran d'accueil du TPE avec notre logo ?",
        a: "Oui, plusieurs modèles Ingenico permettent la personnalisation de l'écran d'accueil avec votre logo et vos couleurs. Notre équipe technique prend en charge le paramétrage et les mises à jour à distance.",
      },
    ],
  },
  {
    category: "Questions techniques",
    color: "#3f78e0",
    items: [
      {
        q: "Avez-vous une hotline technique ?",
        a: "Oui, notre hotline technique est joignable du lundi au samedi, de 8h à 18h, au 0594 25 13 26. Pour les situations urgentes, un système de rappel prioritaire est disponible hors horaires.",
      },
      {
        q: "Que faire si mon TPE ne s'allume plus ?",
        a: "Commencez par vérifier l'alimentation et le câble de charge — c'est souvent là que ça bloque. Si l'appareil reste muet, appelez notre hotline au 0594 25 13 26 : nos techniciens diagnostiquent à distance et peuvent intervenir sur site sous 24h.",
      },
      {
        q: "Mon TPE n'imprime plus les tickets. Que faire ?",
        a: "Vérifiez que le rouleau de papier thermique est bien inséré, le côté lisse vers l'extérieur. Si le problème persiste après rechargement, notre hotline au 0594 25 13 26 vous guidera ou programmera une intervention rapide.",
      },
      {
        q: "Vos équipements sont-ils compatibles avec une connexion fibre ?",
        a: "Tous nos équipements IP sont compatibles fibre. Si vous changez d'opérateur ou d'infrastructure, contactez-nous : nos techniciens vérifient la configuration et ajustent les paramètres, sans frais dans le cadre d'un contrat de maintenance.",
      },
    ],
  },
  {
    category: "Retours et Échanges",
    color: "#7cb798",
    items: [
      {
        q: "Quelle est la politique de retour ?",
        a: "Vous disposez de 30 jours à compter de la livraison pour retourner un produit défectueux ou non conforme. Le retour doit se faire dans son emballage d'origine avec l'ensemble des accessoires. Contactez-nous au préalable pour obtenir un bon de retour.",
      },
      {
        q: "Comment suivre le statut de mon retour ?",
        a: "Envoyez votre numéro de commande et une description du produit à contact@next-solutions.fr. Vous recevrez une confirmation sous 24h ouvrées et un point d'avancement régulier jusqu'à résolution complète.",
      },
    ],
  },
  {
    category: "Service Client",
    color: "#a07cc5",
    items: [
      {
        q: "Quel est le délai de réponse à mes demandes ?",
        a: "Pour les demandes commerciales, comptez 24h ouvrées. Pour les urgences techniques, notre hotline 6j/7 vous répond immédiatement. En dehors des horaires, laissez un message — vous êtes rappelé en priorité dès l'ouverture.",
      },
      {
        q: "Comment faire une réclamation ?",
        a: "Appelez-nous directement au +0594 25 13 26 — c'est le moyen le plus rapide. Ou écrivez à contact@next-solutions.fr en précisant votre numéro de client. Chaque réclamation est prise en charge par un responsable et traitée sous 48h ouvrées.",
      },
    ],
  },
];

function FAQItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.025]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-white/[0.04] transition-colors"
      >
        <span className="text-[14px] font-medium text-white/65 leading-relaxed">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "w-4.5 h-4.5 shrink-0 mt-0.5 transition-transform duration-200",
            open ? "rotate-180" : ""
          )}
          style={{ color }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 text-[13.5px] text-white/38 leading-relaxed border-t"
              style={{ borderColor: `${color}20` }}
            >
              <div className="pt-4">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Questions fréquentes"
        subtitle="Tout ce que vous voulez savoir avant de nous appeler. Si votre question n'est pas ici, notre équipe est joignable 6j/7."
        badge="FAQ"
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: section.color }} />
                  <h2
                    className="text-[15px] font-bold text-white/70"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {section.category}
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} {...item} color={section.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-2xl glass">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(240,160,80,0.06),transparent)] pointer-events-none rounded-2xl" />
            <h3
              className="text-[18px] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Votre question n&apos;est pas dans la liste ?
            </h3>
            <p className="text-[13.5px] text-white/35 mb-7">
              Nos conseillers sont disponibles 6j/7. Un appel suffit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+594594251326"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f0a050] text-[#ffffff] text-[13.5px] font-bold rounded-full hover:bg-[#f5b060] transition-all hover:shadow-[0_0_24px_rgba(240,160,80,0.35)]"
              >
                +0594 25 13 26
              </a>
              <a
                href="mailto:contact@next-solutions.fr"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.1] text-white/60 text-[13.5px] font-medium rounded-full hover:border-white/[0.2] hover:text-white transition-all"
              >
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
