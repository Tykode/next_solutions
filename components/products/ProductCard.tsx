"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  accentColor?: string;
  index?: number;
  className?: string;
}

export function ProductCard({
  name,
  description,
  imageSrc,
  accentColor = "#f0a050",
  index = 0,
  className,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", className)}
    >
      <div className="relative flex flex-col h-full bg-[var(--c-surface)] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.13] hover:-translate-y-1 transition-all duration-300">

        {/* Top accent line */}
        <div
          className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 30% at 50% 0%, ${accentColor}0d, transparent)`,
          }}
        />

        {/* Image */}
        <div className="relative h-52 bg-[var(--c-card)] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[var(--c-surface)] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3
            className="text-[15.5px] font-bold text-white/80 group-hover:text-white transition-colors mb-3 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="text-[13px] text-white/33 leading-relaxed flex-1 mb-4">
            {description}
          </p>

          {/* Available badge */}
          <div
            className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-3 py-1.5 rounded-full self-start"
            style={{
              background: `${accentColor}12`,
              color: `${accentColor}99`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accentColor }}
            />
            Disponible
          </div>
        </div>
      </div>
    </motion.article>
  );
}
