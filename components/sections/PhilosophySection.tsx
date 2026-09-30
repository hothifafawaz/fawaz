import { philosophy } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

export function PhilosophySection() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="philosophy-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="mb-4 text-sm font-semibold text-gold">منهج العمل</p>
              <h2 id="philosophy-title" className="h2 text-navy">{philosophy.title}</h2>
              <p className="mt-6 border-s-2 border-gold ps-5 text-xl font-semibold leading-loose text-navy">
                {philosophy.lead}
              </p>
              <p className="mt-5 text-lg leading-loose text-muted">{philosophy.text}</p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-4">
          <ProcessTimeline items={philosophy.steps} />
        </div>
      </Container>
    </section>
  );
}
