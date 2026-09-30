import { methodologies } from "@/content/methodologies";

export function MethodologyCard({ item }: { item: (typeof methodologies)[number] }) {
  return (
    <article className="flex h-full flex-col border-t border-ivory/25 pt-6">
      <h3 className="text-3xl font-bold text-gold-soft"><bdi>{item.name}</bdi></h3>
      <p className="mt-2 font-semibold text-ivory">{item.purpose}</p>
      <p className="mt-3 text-sm leading-loose text-ivory/70">{item.text}</p>
    </article>
  );
}
