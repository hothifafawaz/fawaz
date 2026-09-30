import Link from "next/link";
import { typeLabel, type KnowledgeItem } from "@/content/knowledge";

export function KnowledgeCard({ item }: { item: KnowledgeItem }) {
  return (
    <Link
      href={`/knowledge/${item.slug}`}
      className="group flex h-full flex-col justify-between border-t-2 border-navy bg-paper p-6 transition-colors hover:bg-white"
    >
      <div>
        <p className="flex gap-3 text-xs font-semibold text-gold">
          <span>{item.category}</span>
          <span aria-hidden>•</span>
          <span>{typeLabel(item.type)}</span>
        </p>
        <h3 className="mt-4 text-xl font-bold leading-snug text-navy group-hover:text-gold">{item.title}</h3>
        <p className="mt-3 text-sm leading-loose text-muted">{item.excerpt}</p>
      </div>
      <p className="mt-6 text-xs text-muted">
        قراءة <span className="ltr-num">{item.readingMinutes}</span> دقائق
      </p>
    </Link>
  );
}
