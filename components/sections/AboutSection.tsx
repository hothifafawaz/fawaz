import { about } from "@/content/fawaz";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function AboutSection() {
  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="about-title">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <ImageSlot
            image={images.portrait1}
            alt={`${site.fullName}`}
            tone="sand"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl lg:max-w-none"
          />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="mb-4 text-sm font-semibold text-gold">عن فواز</p>
          <h2 id="about-title" className="h2 text-navy">{about.headline}</h2>
          <div className="mt-6 space-y-5 text-lg leading-loose text-muted">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-8"><Button href="/about">{about.cta}</Button></div>
        </Reveal>
      </Container>
    </section>
  );
}
