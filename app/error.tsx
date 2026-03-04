"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[var(--c-bg)] px-5">
      <div className="text-center max-w-md">
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl" aria-hidden="true">⚠</span>
        </div>
        <h1
          className="text-[1.6rem] font-bold text-white mb-3 tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Une erreur est survenue
        </h1>
        <p className="text-[14px] text-white/35 mb-8 leading-relaxed">
          Quelque chose s&apos;est mal passé. Réessayez ou revenez à l&apos;accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#f0a050] text-[#05080f] text-[13px] font-bold rounded-full hover:bg-[#f5b060] transition-colors"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-white/[0.1] text-white/60 hover:text-white text-[13px] font-medium rounded-full hover:border-white/[0.2] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
