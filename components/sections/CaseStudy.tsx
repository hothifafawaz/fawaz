import { caseStudy } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudy() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="case-title">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold text-gold">{caseStudy.label}</p>
            <h2 id="case-title" className="h2 text-navy">{caseStudy.title}</h2>
          </div>
          <p className="self-end text-lg leading-loose text-muted lg:col-span-7">{caseStudy.intro}</p>
        </Reveal>
        <div className="mt-14 grid border-t-2 border-navy sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.blocks.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.07} className="border-b border-sand-dark py-8 sm:px-6 sm:first:ps-0 lg:border-b-0 lg:border-s lg:border-sand-dark lg:first:border-s-0 lg:first:ps-0">
              <p className="ltr-num text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-2xl font-bold text-navy">{b.key}</h3>
              <ul className="mt-4 space-y-3 leading-loose text-ink/85">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-3.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
