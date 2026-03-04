import Link from "next/link";
import { Monitor, CreditCard, BarChart3, Scale, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Monitor,
    title: "Caisses Tactiles",
    desc: "Toute la gamme AURES — Android et Windows — pour le retail, la restauration et les surfaces alimentaires. Modulaires, fiables, configurées sur mesure.",
    href: "/caisses",
    color: "#b07ae0",
    badgeVariant: "purple" as const,
    tags: ["Android", "Windows", "AURES"],
  },
  {
    icon: BarChart3,
    title: "Logiciels de Gestion",
    desc: "Kwisatz, WaveSoft, LEO 2, AEM — du caissier unique au réseau multi-sites. Centraliser, analyser, encaisser. Simple à prendre en main dès le premier jour.",
    href: "/logiciels",
    color: "#4f8ef7",
    badgeVariant: "blue" as const,
    tags: ["Kwisatz", "WaveSoft", "Multi-sites"],
  },
  {
    icon: CreditCard,
    title: "Terminaux de Paiement",
    desc: "Gamme Ingenico complète, vente ou location. IP, GSM, Wi-Fi, certification PCI PTS V6. Encaissez en boutique, au marché ou en livraison.",
    href: "/tpe",
    color: "#52c48a",
    badgeVariant: "green" as const,
    tags: ["IP · GSM · Wi-Fi", "Ingenico", "PCI PTS V6"],
  },
  {
    icon: Scale,
    title: "Balances",
    desc: "Mettler Toledo et Precia Molen, les références mondiales. Homologuées, robustes, adaptées au commerce guyanais — du marché au supermarché.",
    href: "/balances",
    color: "#e8748a",
    badgeVariant: "pink" as const,
    tags: ["Mettler Toledo", "Precia Molen", "Homologuée"],
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-[var(--c-bg)]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold text-[#f0a050]/70 uppercase tracking-[0.15em] mb-3">
            Ce que l&apos;on installe
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4 gammes de solutions
              <br />
              <span className="text-white/40">pour votre commerce</span>
            </h2>
            <p className="text-[14px] text-white/52 max-w-xs leading-relaxed md:text-right">
              Équipements certifiés, support 6j/7. De l&apos;encaissement à la gestion,
              une couverture complète depuis Cayenne.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.title} href={s.href} className="group block h-full">
                <Card className="h-full p-6 flex flex-col hover:border-white/[0.15] transition-colors duration-200 hover:bg-[var(--c-card)]">

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: `${s.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[15.5px] font-bold text-white/85 group-hover:text-white mb-2.5 transition-colors leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-white/58 leading-relaxed flex-1 mb-5">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t) => (
                      <Badge key={t} variant={s.badgeVariant} className="text-[10.5px] px-2 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <div
                    className="flex items-center gap-1.5 text-[12.5px] font-semibold"
                    style={{ color: s.color }}
                  >
                    Découvrir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
