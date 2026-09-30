import { hero, experienceYears } from "@/content/fawaz";
import { site, links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CountUp } from "@/components/ui/CountUp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 text-sm font-semibold text-gold sm:text-base">
              <span aria-hidden className="me-3 inline-block h-px w-10 bg-current align-middle" />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display text-navy">
              {hero.headline.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-loose text-muted sm:text-lg">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/training">{hero.primaryCta}</Button>
            <Button href={links.requestProgram} variant="secondary">{hero.secondaryCta}</Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div aria-hidden className="absolute -bottom-4 -end-4 size-full rounded-t-[8rem] rounded-b-2xl bg-sand" />
            <ImageSlot
              files={["hero.webp", "fawaz-hero.jpg", "fawaz-hero.webp"]}
              alt={`${site.name} — ${hero.imageCaption}`}
              placeholderName="fawaz-hero.jpg"
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative aspect-[4/5] w-full rounded-t-[8rem] rounded-b-2xl"
            />
            <div className="absolute -start-3 bottom-8 rounded-xl bg-paper px-5 py-4 shadow-xl shadow-navy/10 sm:-start-8">
              <p className="text-3xl font-bold text-navy">
                <CountUp to={experienceYears} />
                <span className="ltr-num">+</span>
              </p>
              <p className="text-sm text-muted">عامًا في التدريب والاستشارات</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
