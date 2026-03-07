import { Reveal } from "@/components/shared/Reveal";

interface Stat {
  label: string;
  value: string;
}

interface ProductInfoBannerProps {
  stats: [Stat, Stat, Stat];
  accentColor: string;
}

export function ProductInfoBanner({ stats, accentColor }: ProductInfoBannerProps) {
  return (
    <Reveal className="mb-14">
      <div
        className="p-6 rounded-2xl border"
        style={{
          background: `${accentColor}0f`,
          borderColor: `${accentColor}26`,
        }}
      >
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <dt className="text-[10.5px] font-semibold text-white/50 uppercase tracking-[0.12em] mb-1.5">
                {label}
              </dt>
              <dd className="text-[clamp(1.1rem,2vw,1.6rem)] font-bold text-white tracking-[-0.02em]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
