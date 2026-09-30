import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "light" | "ghost-light" | "gold";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-ivory hover:bg-navy-800 border-navy",
  secondary: "bg-transparent text-navy border-navy hover:bg-navy hover:text-ivory",
  light: "bg-ivory text-navy border-ivory hover:bg-white",
  "ghost-light": "bg-transparent text-ivory border-ivory/50 hover:bg-ivory hover:text-navy",
  gold: "bg-gold-soft text-navy border-gold-soft hover:bg-[#d6b574]",
};

export function Button({
  href,
  variant = "primary",
  arrow = true,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-base font-semibold transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
    </Link>
  );
}
