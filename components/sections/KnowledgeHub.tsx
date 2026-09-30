"use client";

import { useState } from "react";
import { categories, contentTypes, type KnowledgeItem } from "@/content/knowledge";
import { KnowledgeCard } from "./KnowledgeCard";
import { cn } from "@/lib/cn";

const chip = (on: boolean) =>
  cn("rounded-full border px-4 py-1.5 text-sm transition-colors", on ? "border-navy bg-navy text-ivory" : "border-sand-dark bg-paper text-navy hover:border-navy");

export function KnowledgeHub({ items }: { items: KnowledgeItem[] }) {
  const [cat, setCat] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const shown = items.filter((i) => (cat === "all" || i.category === cat) && (type === "all" || i.type === type));

  return (
    <div>
      <div className="space-y-4">
        <div role="group" aria-label="التصنيف" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={cat === "all"} className={chip(cat === "all")} onClick={() => setCat("all")}>الكل</button>
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} className={chip(cat === c)} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div role="group" aria-label="نوع المحتوى" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={type === "all"} className={chip(type === "all")} onClick={() => setType("all")}>كل الأنواع</button>
          {contentTypes.map((t) => (
            <button key={t.id} type="button" aria-pressed={type === t.id} className={chip(type === t.id)} onClick={() => setType(t.id)}>{t.label}</button>
          ))}
        </div>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((k) => <li key={k.slug}><KnowledgeCard item={k} /></li>)}
      </ul>
      {shown.length === 0 && <p className="mt-10 text-muted">لا توجد مواد في هذا التصنيف حاليًا. تُضاف مواد جديدة تباعًا.</p>}
    </div>
  );
}
