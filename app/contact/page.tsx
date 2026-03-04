import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Next Solutions à Cayenne — par téléphone, email ou formulaire. Nos conseillers répondent en direct du lundi au samedi, 8h–18h.",
};

const contactInfo = [
  {
    Icon: Phone,
    title: "Téléphone",
    lines: ["+0594 25 13 26", "+0694 47 79 80"],
    color: "#7cb798",
    href: "tel:+594594251326",
  },
  {
    Icon: Mail,
    title: "Email",
    lines: ["contact@next-solutions.fr", "adv@ns-guyane.com"],
    color: "#3f78e0",
    href: "mailto:contact@next-solutions.fr",
  },
  {
    Icon: MapPin,
    title: "Adresse",
    lines: ["1436 Rte de Baduel", "Cayenne 97300, Guyane"],
    color: "#F89851",
    href: "https://maps.google.com/?q=Next+Solutions+Cayenne",
  },
  {
    Icon: Clock,
    title: "Horaires",
    lines: ["Lun–Sam : 8h–18h", "Hotline technique : 6j/7"],
    color: "#a07cc5",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, un devis, une panne ? Choisissez le canal qui vous convient — nous répondons en direct, pas depuis un centre d'appels à 10 000 km."
        badge="Contact"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20 bg-[var(--c-bg)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-4">
              <h2
                className="text-[22px] font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Retrouvez-nous
              </h2>
              {contactInfo.map(({ Icon, title, lines, color, href }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-semibold text-white/40 mb-0.5 uppercase tracking-wide">
                      {title}
                    </div>
                    {lines.map((line, i) =>
                      href && i === 0 ? (
                        <a
                          key={line}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-[14px] text-white/60 hover:text-[#f0a050] transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-[13.5px] text-white/40">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden h-52 border border-white/[0.07]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0!2d-52.3!3d4.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNext+Solutions+Cayenne!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "var(--map-filter)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Next Solutions – Cayenne"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
