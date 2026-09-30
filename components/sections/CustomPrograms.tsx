import { customProgram } from "@/content/programs";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CustomPrograms() {
  return (
    <section className="bg-sand py-20 sm:py-28" aria-labelledby="custom-title">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold text-gold">برامج مصممة حسب الاحتياج</p>
          <h2 id="custom-title" className="h2 whitespace-pre-line text-navy">{customProgram.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-loose text-muted">{customProgram.text}</p>
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-sand-dark sm:grid-cols-2 lg:grid-cols-5">
          {customProgram.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="bg-paper p-6">
              <span className="ltr-num text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-loose text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <Button href={links.requestProgram}>{customProgram.cta}</Button>
        </div>
      </Container>
    </section>
  );
}
