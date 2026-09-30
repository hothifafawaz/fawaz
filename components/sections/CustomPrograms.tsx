import { customProgram } from "@/content/programs";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CustomPrograms() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-ivory sm:py-28" aria-labelledby="custom-title">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold text-gold-soft">برامج مصممة حسب الاحتياج</p>
          <h2 id="custom-title" className="display">{customProgram.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-loose text-ivory/80">{customProgram.text}</p>
        </Reveal>
        <ol className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {customProgram.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="relative border-t border-gold-soft/50 pt-6">
              <span className="ltr-num block text-6xl font-bold leading-none text-gold-soft/90">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-loose text-ivory/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14">
          <Button href={links.requestInstitutional} variant="gold">{customProgram.cta}</Button>
        </div>
      </Container>
    </section>
  );
}
