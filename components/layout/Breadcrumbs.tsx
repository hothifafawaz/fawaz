import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { site } from "@/content/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, light }: { items: Crumb[]; light?: boolean }) {
  const all: Crumb[] = [{ label: "الرئيسية", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="مسار التنقل" className={cn("text-sm", light ? "text-ivory/70" : "text-muted")}>
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {c.href && i < all.length - 1 ? (
                <Link href={c.href} className="hover:underline">{c.label}</Link>
              ) : (
                <span aria-current="page" className={light ? "text-ivory" : "text-ink"}>{c.label}</span>
              )}
              {i < all.length - 1 && <ChevronLeft aria-hidden className="size-3.5" />}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
