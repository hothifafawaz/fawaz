"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site, nav, links } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-sand-dark/70 bg-ivory/95 backdrop-blur" : "border-transparent bg-ivory",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex flex-col leading-tight" aria-label={`${site.name} — الرئيسية`}>
          <span className="text-xl font-bold text-navy">{site.name}</span>
          <span className="whitespace-nowrap text-[0.7rem] text-muted">{site.shortDescriptor}</span>
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-[0.95rem] transition-colors hover:text-gold",
                    isActive(item.href) ? "font-bold text-navy" : "text-ink/80",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href={links.requestProgram} className="min-h-11 whitespace-nowrap px-5 py-2 text-[0.95rem]" arrow={false}>
              اطلب برنامجًا تدريبيًا
            </Button>
          </div>
          <Link
            href={links.requestConsulting}
            className="hidden px-2 text-[0.95rem] font-semibold text-navy underline-offset-4 hover:underline 2xl:inline"
          >
            احجز استشارة
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-sand-dark text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

    </header>
    <div
      id="mobile-menu"
      hidden={!open}
      className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-navy text-ivory xl:hidden"
    >
      <nav aria-label="قائمة الجوال" className="mx-auto flex min-h-full max-w-xl flex-col justify-between gap-8 px-6 py-8">
        <ul>
          {nav.map((item) => (
            <li key={item.href} className="border-b border-ivory/10">
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-bold hover:text-gold-soft">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <Button href={links.requestProgram} variant="gold">اطلب برنامجًا تدريبيًا</Button>
          <Button href={links.requestConsulting} variant="ghost-light">احجز استشارة</Button>
        </div>
      </nav>
    </div>
    </>
  );
}
