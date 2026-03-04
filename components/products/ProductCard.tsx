"use client";

import { motion } from "framer-motion";
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
  index?: number;
  className?: string;
}

export function ProductCard({
  name,
  description,
  imageSrc,
  accentColor = "#f0a050",
  badgeVariant = "default",
  index = 0,
  className,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", className)}
    >
      <Card className="h-full overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300 hover:bg-[var(--c-card)]">

        {/* Image */}
        <div className="relative h-52 bg-[var(--c-card)] overflow-hidden border-b border-white/[0.06]">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-500"
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
    </motion.article>
  );
}
