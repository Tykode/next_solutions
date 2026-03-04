import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  accentColor?: string;
  badgeVariant?: "amber" | "green" | "blue" | "purple" | "pink" | "default";
  className?: string;
}

export function ProductCard({
  name,
  description,
  imageSrc,
  accentColor = "#f0a050",
  badgeVariant = "default",
  className,
}: ProductCardProps) {
  return (
    <article className={cn("group", className)}>
      <Card className="h-full overflow-hidden hover:border-white/[0.16] transition-colors duration-200 hover:bg-[var(--c-card)]">

        {/* Image */}
        <div className="relative h-52 bg-[var(--c-card)] overflow-hidden border-b border-white/[0.06]">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

          {/* Disponibilité */}
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
