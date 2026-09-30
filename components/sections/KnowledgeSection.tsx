import { knowledge, knowledgeIntro } from "@/content/knowledge";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KnowledgeCard } from "./KnowledgeCard";

export function KnowledgeSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="knowledge-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="knowledge-title" eyebrow="المعرفة" title={knowledgeIntro.title} text={knowledgeIntro.text} />
          <Button href="/knowledge" variant="secondary" className="self-start">كل المواد</Button>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {knowledge.slice(0, 3).map((k, i) => (
            <Reveal as="li" key={k.slug} delay={i * 0.08}><KnowledgeCard item={k} /></Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
