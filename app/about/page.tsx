import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { Credentials } from "@/components/sections/Credentials";
import { ExperienceSectors } from "@/components/sections/ExperienceSectors";
import { OrganizationStrip } from "@/components/sections/OrganizationStrip";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { about, aboutPage, identity, philosophy } from "@/content/fawaz";
import { site, links } from "@/content/site";

export const metadata: Metadata = {
  title: "عن فواز",
  description: "فواز الفخري: أكثر من عشرين عامًا في التدريب والاستشارات المؤسسية في التفكير والقيادة والتخطيط.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "عن فواز" }]}
        eyebrow={site.role}
        title={about.headline}
        text={`${site.fullName} — ${site.location}`}
      >
        <Button href={links.requestProgram} variant="gold">اطلب برنامجًا تدريبيًا</Button>
        <Button href={links.contact} variant="ghost-light" arrow={false}>تواصل مع المدرب</Button>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ImageSlot files={["portrait-02.webp", "portrait-01.webp"]} alt={site.fullName} placeholderName="portrait-02.webp" tone="sand" className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl" />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <SectionHeading title="السيرة المختصرة" />
            <div className="mt-6 space-y-5 text-lg leading-loose text-muted">
              {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <h3 className="mt-10 text-xl font-bold text-navy">قدّم برامجه وخدماته لـ</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {identity.trained.map((t) => (
                <li key={t} className="rounded-full border border-sand-dark bg-paper px-4 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy py-20 text-ivory sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading light eyebrow="فلسفة التدريب" title={philosophy.lead} text={philosophy.text} />
          </div>
          <ul className="grid gap-8 lg:col-span-7 sm:grid-cols-3">
            {aboutPage.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.08} className="border-t border-gold-soft/50 pt-5">
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-loose text-ivory/75">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="المجالات" title="مجالات التخصص" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {identity.fields.map((f) => (
              <li key={f} className="rounded-full bg-sand px-5 py-2 text-navy">{f}</li>
            ))}
          </ul>
        </Container>
      </section>

      <Credentials />
      <OrganizationStrip />
      <ExperienceSectors id="journey" />
      <BookTrainingCTA />
    </>
  );
}
