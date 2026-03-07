import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[var(--c-bg)] px-5">
      <div className="text-center max-w-md">
        <p
          className="text-[10rem] font-bold text-white/[0.06] leading-none tracking-[-0.06em] mb-4 select-none"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="text-[2rem] font-bold text-white mb-3 tracking-[-0.03em] -mt-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page introuvable
        </h1>
        <p className="text-[14px] text-white/55 mb-2 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <p className="text-[13px] text-white/30 mb-8 leading-relaxed">
          Notre équipe est disponible au 0594 25 13 26 si vous cherchez quelque chose de précis.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0a050] text-[#09080c] text-[13px] font-bold rounded-full hover:bg-[#f5b060] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
