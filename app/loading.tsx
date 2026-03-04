export default function Loading() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[var(--c-bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-[#f0a050]/20 border-t-[#f0a050] animate-spin" />
        <p className="text-[12px] text-white/20 uppercase tracking-[0.15em] font-semibold">
          Chargement…
        </p>
      </div>
    </div>
  );
}
