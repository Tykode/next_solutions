import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white/[0.06] text-white/65 border border-white/[0.09]",
        amber:   "bg-[#f0a050]/[0.12] text-[#f0a050] border border-[#f0a050]/20",
        green:   "bg-[#52c48a]/[0.12] text-[#52c48a] border border-[#52c48a]/20",
        blue:    "bg-[#4f8ef7]/[0.12] text-[#4f8ef7] border border-[#4f8ef7]/20",
        purple:  "bg-[#b07ae0]/[0.12] text-[#b07ae0] border border-[#b07ae0]/20",
        pink:    "bg-[#e8748a]/[0.12] text-[#e8748a] border border-[#e8748a]/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
