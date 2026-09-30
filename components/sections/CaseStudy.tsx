import { caseStudy } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudy() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="case-title">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-navy text-ivory">
          <div className="grain relative p-8 sm:p-12 lg:p-16">
            <Reveal className="max-w-3xl">
              <p className="inline-block rounded-full border border-gold-soft/60 px-4 py-1 text-sm text-gold-soft">{caseStudy.label}</p>
              <h2 id="case-title" className="h2 mt-6">{caseStudy.title}</h2>
              <p className="mt-5 text-lg leading-loose text-ivory/75">{caseStudy.intro}</p>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.blocks.map((b, i) => (
                <Reveal key={b.key} delay={i * 0.07}>
                  <div className="border-t border-gold-soft/50 pt-5">
                    <p className="ltr-num text-sm font-bold text-gold-soft">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-xl font-bold">{b.key}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-loose text-ivory/80">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span aria-hidden className="mt-3 size-1 shrink-0 rounded-full bg-gold-soft" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
