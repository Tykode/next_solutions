import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
  accentColor?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs,
  accentColor = "#f0a050",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative pt-36 pb-20 overflow-hidden bg-[var(--c-bg)]", className)}>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 45% at 50% -5%, ${accentColor}0c, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav
            className="flex items-center gap-1 text-[12px] text-white/38 mb-8 font-medium animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <Link href="/" className="hover:text-white/65 transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 opacity-40" />
                <Link href={crumb.href} className="hover:text-white/65 transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div
            className="mb-5 animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            <Badge
              style={{
                background: `${accentColor}12`,
                borderColor: `${accentColor}28`,
                color: accentColor,
              }}
              className="uppercase tracking-widest text-[11px]"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
              {badge}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h1
          className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-white leading-[1.04] tracking-[-0.04em] max-w-3xl mb-5 animate-fade-up"
          style={{ fontFamily: "var(--font-display)", animationDelay: "100ms" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-[15px] text-white/60 max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[var(--c-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
