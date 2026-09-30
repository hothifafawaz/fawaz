import { featuredPrograms } from "@/content/programs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "./ProgramCard";

export function FeaturedPrograms() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="programs-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="البرامج" title="برامج تدريبية مختارة" />
          <span id="programs-title" className="sr-only">برامج تدريبية مختارة</span>
          <Button href="/training#programs" variant="secondary" className="self-start">عرض جميع البرامج</Button>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
              <ProgramCard program={p} index={i} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
