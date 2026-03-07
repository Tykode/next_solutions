import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CSSProperties } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  accentColor?: string;
  badgeVariant?: "amber" | "green" | "blue" | "purple" | "pink" | "default";
  sizes?: string;
  className?: string;
}

export function ProductCard({
  name,
  description,
  imageSrc,
  accentColor = "#f0a050",
  badgeVariant = "default",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn("group", className)}
      style={{ "--card-glow": `${accentColor}22` } as CSSProperties}
    >
      <Card className="h-full overflow-hidden relative hover:border-white/[0.16] hover:-translate-y-1 hover:shadow-[0_12px_48px_var(--card-glow)] transition-all duration-300 hover:bg-[var(--c-card)]">

        {/* Colored top accent — reveals on hover */}
        <div
          className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: accentColor }}
        />

        {/* Image */}
        <div className="relative h-52 bg-[var(--c-card)] overflow-hidden border-b border-white/[0.06]">
          <Image
            src={imageSrc}
            alt={`${name} — équipement point de vente Next Solutions`}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            sizes={sizes}
          />
        </div>

        {/* Content */}
        <CardContent className="p-6 flex flex-col gap-3">
          <h3
            className="text-[15.5px] font-bold text-white/85 group-hover:text-white transition-colors leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="text-[13px] text-white/58 leading-relaxed flex-1">
            {description}
          </p>

          <Badge variant={badgeVariant} className="self-start mt-1">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accentColor }}
            />
            Disponible
          </Badge>
        </CardContent>
      </Card>
    </article>
  );
}
