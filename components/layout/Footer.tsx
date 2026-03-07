import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Produits",
    links: [
      { label: "Caisses Tactiles",     href: "/caisses" },
      { label: "Logiciels de Gestion", href: "/logiciels" },
      { label: "Terminaux TPE",        href: "/tpe" },
      { label: "Balances",             href: "/balances" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos",         href: "/about" },
      { label: "Rejoignez-nous",   href: "/rejoindre" },
      { label: "FAQ",              href: "/faq" },
      { label: "Planifier un RDV", href: "/rendez-vous" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Contact",  href: "/contact" },
      { label: "CGV",      href: "/cgv" },
      { label: "Mentions légales", href: "/cgu" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--c-bg)] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#f0a050]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* CTA strip */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold text-[#f0a050]/70 uppercase tracking-[0.12em] mb-2">
              Votre prochain équipement
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Un devis gratuit en 24h
            </h3>
          </div>
          <Link
            href="/rendez-vous"
            className="btn-shimmer shrink-0 group inline-flex items-center gap-2 px-6 py-3.5 bg-[#f0a050] hover:bg-[#f5b060] text-[#05080f] text-sm font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(240,160,80,0.35)] active:scale-[0.97]"
          >
            Planifier un rendez-vous
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">

        {/* Brand col */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-baseline gap-0 select-none">
            <span
              className="text-[20px] font-bold tracking-[-0.03em] text-[#f0a050] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Next
            </span>
            <span
              className="text-[20px] font-bold tracking-[-0.03em] text-white leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {" "}Solutions
            </span>
          </div>
          <p className="text-[13.5px] text-white/55 leading-relaxed max-w-[260px]">
            Spécialiste du point de vente en Guyane depuis 2014. Plus de 500 commerces équipés à Cayenne, Kourou et Saint-Laurent.
          </p>

          {/* Contact compact */}
          <div className="space-y-2.5 pt-1">
            {[
              { Icon: Phone, text: "+0594 25 13 26",            href: "tel:+594594251326" },
              { Icon: Mail,  text: "contact@next-solutions.fr",  href: "mailto:contact@next-solutions.fr" },
              { Icon: MapPin,text: "Cayenne 97300, Guyane",      href: "#" },
            ].map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center gap-2.5 py-1.5 text-[13px] text-white/52 hover:text-white/80 transition-colors min-h-[44px]"
              >
                <Icon className="w-3.5 h-3.5 text-[#f0a050]/60 shrink-0" />
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-[10px] font-semibold text-white/38 uppercase tracking-[0.12em] mb-4">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13.5px] text-white/55 hover:text-white/85 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} Next Solutions — SIRET 52217524900021
          </p>
          <div className="flex gap-5">
            {[
              { label: "CGV", href: "/cgv" },
              { label: "Mentions légales", href: "/cgu" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] text-white/20 hover:text-white/45 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
