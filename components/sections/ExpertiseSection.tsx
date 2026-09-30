"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pillars } from "@/content/programs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (i: number) => {
    const n = (i + pillars.length) % pillars.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  // في RTL أول تبويب في اليمين، فالسهم الأيسر ينقل للتالي.
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const map: Record<string, number | undefined> = {
      ArrowLeft: i + 1, ArrowDown: i + 1, ArrowRight: i - 1, ArrowUp: i - 1, Home: 0, End: pillars.length - 1,
    };
    if (map[e.key] !== undefined) {
      e.preventDefault();
      go(map[e.key]!);
    }
  };

  const p = pillars[active];

  return (
    <section className="bg-sand/60 py-20 sm:py-28" aria-labelledby="expertise-title">
      <Container>
        <SectionHeading id="expertise-title"
          eyebrow="خمسة محاور"
          title="مجالات التدريب والاستشارة"
          text="مجالات متعددة منظمة في خمسة محاور. بعضها برامج قائمة، وبعضها يُبنى بحسب احتياج الجهة."
          className="[&_h2]:scroll-mt-28"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="محاور التدريب"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {pillars.map((pl, i) => (
              <button
                key={pl.id}
                ref={(el) => { refs.current[i] = el; }}
                role="tab"
                id={`${uid}-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`${uid}-panel`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={cn(
                  "flex shrink-0 items-center gap-4 rounded-full border px-5 py-3 text-start transition-colors lg:w-full lg:rounded-xl lg:py-4",
                  active === i ? "border-navy bg-navy text-ivory" : "border-sand-dark bg-paper text-navy hover:border-navy",
                )}
              >
                <span className={cn("ltr-num text-sm font-bold", active === i ? "text-gold-soft" : "text-gold")}>{pl.number}</span>
                <span className="font-bold">{pl.title}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`${uid}-panel`}
            aria-labelledby={`${uid}-tab-${active}`}
            tabIndex={0}
            className="border-t-2 border-navy pt-8 lg:col-span-8 lg:ps-6"
          >
            <p className="ltr-num text-7xl font-bold leading-none text-sand-dark sm:text-8xl">{p.number}</p>
            <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{p.title}</h3>
            <p className="mt-3 max-w-xl text-lg leading-loose text-muted">{p.summary}</p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-sand-dark/60 pb-3">
                  <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span dir="auto">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/training#${p.id}`}
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold"
            >
              استعرض برامج هذا المحور
              <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
