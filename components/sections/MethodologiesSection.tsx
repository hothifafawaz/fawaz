import { methodologies, methodologiesIntro } from "@/content/methodologies";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MethodologyCard } from "./MethodologyCard";

export function MethodologiesSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-ivory sm:py-28" aria-labelledby="meth-title">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeading id="meth-title" light eyebrow="أدوات التفكير" title={methodologiesIntro.title} text={methodologiesIntro.text} />
        {[
          { label: "أدوات التفكير والإبداع", group: "thinking", cols: "lg:grid-cols-3" },
          { label: "أدوات فهم الأنماط والسلوك", group: "behavior", cols: "lg:grid-cols-4" },
        ].map((g) => (
          <div key={g.group} className="mt-14">
            <h3 className="mb-6 text-sm font-semibold text-gold-soft">{g.label}</h3>
            <ul className={`grid gap-x-10 gap-y-12 sm:grid-cols-2 ${g.cols}`}>
              {methodologies.filter((m) => m.group === g.group).map((m, i) => (
                <Reveal as="li" key={m.id} delay={i * 0.08}>
                  <MethodologyCard item={m} />
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-14 max-w-2xl text-sm text-ivory/60">{methodologiesIntro.note}</p>
      </Container>
    </section>
  );
}
