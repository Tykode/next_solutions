import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[var(--c-bg)] px-5">
      <div className="text-center max-w-md">
        <p
          className="text-[7rem] font-bold text-white/[0.04] leading-none tracking-[-0.05em] mb-4 select-none"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="text-[1.6rem] font-bold text-white mb-3 tracking-[-0.025em] -mt-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page introuvable
        </h1>
        <p className="text-[14px] text-white/35 mb-8 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0a050] text-[#ffffff] text-[13px] font-bold rounded-full hover:bg-[#f5b060] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
