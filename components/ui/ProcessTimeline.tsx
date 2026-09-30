"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

export type TimelineItem = { title: string; text: string; meta?: string };

/** خط زمني عمودي بخط تقدّم يمتلئ مع التمرير. */
export function ProcessTimeline({ items, light }: { items: TimelineItem[]; light?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative">
      <span
        aria-hidden
        className={cn("absolute bottom-3 top-3 w-px", light ? "bg-ivory/20" : "bg-sand-dark")}
        style={{ insetInlineStart: "1.5rem" }}
      />
      <m.span
        aria-hidden
        className="absolute top-3 bottom-3 w-px origin-top bg-gold-soft"
        style={{ insetInlineStart: "1.5rem", scaleY }}
      />
      {items.map((item, i) => (
        <li key={item.title} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
          <span
            className={cn(
              "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold",
              light ? "border-gold-soft bg-navy text-gold-soft" : "border-gold bg-ivory text-gold",
            )}
          >
            <span className="ltr-num">{String(i + 1).padStart(2, "0")}</span>
          </span>
          <div className="pt-1.5">
            <h3 className={cn("text-xl font-bold sm:text-2xl", light ? "text-ivory" : "text-navy")}>{item.title}</h3>
            {item.meta && <p className={cn("mt-1 text-sm", light ? "text-gold-soft" : "text-gold")}>{item.meta}</p>}
            <p className={cn("mt-2 max-w-xl leading-loose", light ? "text-ivory/75" : "text-muted")}>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
