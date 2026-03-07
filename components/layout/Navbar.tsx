"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const products = [
  { label: "Caisses Tactiles",        href: "/caisses",   color: "#b07ae0", desc: "Android & Windows" },
  { label: "Logiciels de Gestion",    href: "/logiciels", color: "#4f8ef7", desc: "Kwisatz, WaveSoft…" },
  { label: "Terminaux de Paiement",   href: "/tpe",       color: "#52c48a", desc: "IP · GSM · Wi-Fi" },
  { label: "Balances",                href: "/balances",  color: "#e8748a", desc: "Mettler, Precia Molen" },
];

const links = [
  { label: "À propos", href: "/about" },
  { label: "FAQ",      href: "/faq" },
  { label: "Contact",  href: "/contact" },
];

export function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [productsOpen,  setProductsOpen]  = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setProductsOpen(false); setMobileOpen(false); }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-slide-down",
        scrolled
          ? "bg-[var(--c-bg)]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_1px_0_0_var(--c-border)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* ─── Logo ─── */}
          <Link
            href="/"
            className="shrink-0 relative z-10 flex items-baseline gap-0 select-none"
            aria-label="Next Solutions — accueil"
          >
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
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-0.5">
            {/* Products mega-dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onBlur={(e) => {
                if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                  setProductsOpen(false);
                }
              }}
            >
              <button
                aria-expanded={productsOpen}
                aria-haspopup="true"
                aria-controls="products-dropdown"
                onClick={() => setProductsOpen(!productsOpen)}
                onFocus={() => setProductsOpen(true)}
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 min-h-[44px] text-[13.5px] font-medium tracking-[-0.01em] rounded-lg transition-all",
                  productsOpen
                    ? "text-white bg-white/[0.08]"
                    : "text-white/55 hover:text-white/90 hover:bg-white/[0.06]"
                )}
              >
                Produits
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    productsOpen && "rotate-180"
                  )}
                />
              </button>

              {/* CSS-only dropdown — no framer-motion */}
              <div
                id="products-dropdown"
                role="menu"
                className={cn(
                  "absolute top-[calc(100%+8px)] left-0 w-[280px] glass rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]",
                  "transition-all duration-150 origin-top-left",
                  productsOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-[0.96] pointer-events-none"
                )}
              >
                <div className="px-4 pt-3.5 pb-2">
                  <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.12em]">
                    Nos solutions
                  </span>
                </div>
                <div className="p-2 pt-0">
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      role="menuitem"
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                    >
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold"
                        style={{ background: `${p.color}1a`, color: p.color }}
                      >
                        {p.label[0]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                          {p.label}
                        </div>
                        <div className="text-[11px] text-white/45 mt-0.5">{p.desc}</div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center px-3.5 py-2 min-h-[44px] text-[13.5px] font-medium tracking-[-0.01em] text-white/55 hover:text-white/90 hover:bg-white/[0.06] rounded-lg transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ─── Right actions ─── */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/rendez-vous"
              className="btn-shimmer inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-[#09080c] bg-[#f0a050] rounded-full transition-all duration-200 hover:bg-[#f5b060] hover:shadow-[0_0_24px_rgba(240,160,80,0.32)] active:scale-[0.97]"
            >
              Prendre RDV
            </Link>
          </div>

          {/* ─── Mobile actions ─── */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/[0.07] transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile drawer — CSS transition, no framer-motion ─── */}
      <div
        id="mobile-nav"
        aria-hidden={!mobileOpen}
        className={cn(
          "lg:hidden overflow-hidden backdrop-blur-2xl border-t border-white/[0.06] transition-all duration-200 ease-out",
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ background: "color-mix(in oklch, var(--c-bg) 96%, transparent)" }}
      >
        <div className="max-w-[1320px] mx-auto px-5 py-4 space-y-0.5">
          <p className="px-3 pb-1.5 pt-0.5 text-[10px] font-semibold text-white/40 uppercase tracking-[0.12em]">
            Produits
          </p>
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
              <span className="text-sm text-white/65">{p.label}</span>
            </Link>
          ))}
          <div className="h-px bg-white/[0.05] my-1.5 mx-3" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-white/65 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/rendez-vous"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 bg-[#f0a050] text-[#09080c] text-sm font-bold rounded-full hover:bg-[#f5b060] transition-all duration-200 active:scale-[0.97]"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
