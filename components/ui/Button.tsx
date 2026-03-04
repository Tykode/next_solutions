import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a050] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--c-bg)] disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[#f0a050] hover:bg-[#f5b060] text-[#05080f] hover:shadow-[0_0_32px_rgba(240,160,80,0.35)] hover:scale-[1.03] active:scale-[0.98] rounded-full",
        outline:
          "border border-white/[0.1] text-white/60 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.04] rounded-full",
        ghost:
          "text-white/55 hover:text-white/90 hover:bg-white/[0.05] rounded-lg",
      },
      size: {
        sm: "px-4 py-2 text-[12.5px]",
        md: "px-6 py-3 text-[13.5px]",
        lg: "px-6 py-3.5 text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonOwnProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const cls = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
