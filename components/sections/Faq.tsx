import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4"><SectionHeading title="أسئلة شائعة" /></div>
        <div className="lg:col-span-8">
          {items.map((it) => (
            <details key={it.q} className="group border-b border-sand-dark py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
                {it.q}
                <ChevronDown aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-loose text-muted">{it.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </section>
  );
}
