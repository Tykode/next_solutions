export default function Loading() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[var(--c-bg)]">
      <div className="flex flex-col items-center gap-6">
        {/* Branded wordmark */}
        <div className="flex items-baseline gap-0 select-none animate-pulse">
          <span
            className="text-[22px] font-bold tracking-[-0.03em] text-[#f0a050] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Next
          </span>
          <span
            className="text-[22px] font-bold tracking-[-0.03em] text-white leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {" "}Solutions
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-28 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#f0a050]/70 rounded-full animate-[shimmer_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
