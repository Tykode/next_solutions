"use client";

import { useRef, useEffect, useState } from "react";
import type { CSSProperties } from "react";

function parse(raw: string): { num: number; suffix: string } | null {
  const m = raw.match(/^(\d+)(.*)$/);
  if (!m) return null;
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

interface CountUpProps {
  value: string;
  style?: CSSProperties;
  className?: string;
}

export function CountUp({ value, style, className }: CountUpProps) {
  const parsed = parse(value);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const ran = useRef(false);

  useEffect(() => {
    if (!parsed || ran.current) return;
    const el = ref.current;
    if (!el) return;

    // Skip count-up animation if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;

        const { num, suffix } = parsed;
        const from = Math.max(0, Math.floor(num * 0.55));
        const duration = 900;
        const t0 = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4); // ease-out-quart
          setDisplay(`${Math.round(from + (num - from) * eased)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={style} className={className}>
      {display}
    </div>
  );
}
