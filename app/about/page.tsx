import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Credentials } from "@/components/sections/Credentials";
import { ExperienceSectors } from "@/components/sections/ExperienceSectors";
import { OrganizationStrip } from "@/components/sections/OrganizationStrip";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { about, aboutPage, identity, philosophy, philosophyPrinciples, experienceYears } from "@/content/fawaz";
import { site, links } from "@/content/site";
import { hasImage, imageFiles } from "@/lib/images";

export const metadata: Metadata = {
  title: "عن فواز",
  description:
    "فواز الفخري، مدرب التفكير والموهبة والتطوير القيادي: أكثر من عشرين عامًا في التدريب والاستشارات المؤسسية في التفكير والقيادة والتخطيط.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const gallery = [
    { files: imageFiles.training1, name: "training-01.webp", alt: "فواز الفخري أثناء برنامج تدريبي" },
    { files: imageFiles.speaking1, name: "speaking-01.webp", alt: "فواز الفخري أثناء إلقاء" },
    { files: imageFiles.training2, name: "training-02.webp", alt: "مشاركون في ورشة تدريبية" },
  ];
  const showGallery = gallery.some((g) => hasImage(g.files));

  return (
    <>
      <PageHero
        crumbs={[{ label: "عن فواز" }]}
        eyebrow={site.fullName}
        title="فواز الفخري"
        text={`${site.role}. ${site.location}.`}
      >
        <Button href={links.requestProgram} variant="gold">اطلب برنامجًا تدريبيًا</Button>
        <Button href={links.contact} variant="ghost-light" arrow={false}>تواصل مع المدرب</Button>
      </PageHero>

      {/* التعريف المهني */}
      <section className="py-20 sm:py-28" aria-labelledby="intro-title">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ImageSlot files={imageFiles.portrait2} alt={site.fullName} placeholderName="portrait-02.webp" tone="sand" className="mx-auto aspect-[4/5] w-full max-w-md rounded-t-[6rem] rounded-b-xl" />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="mb-4 text-sm font-semibold text-gold">التعريف المهني</p>
            <h2 id="intro-title" className="h2 text-navy">{about.headline}</h2>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-loose text-muted">
              {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-sand-dark pt-8">
              <div>
                <dt className="text-sm text-muted">سنوات الخبرة</dt>
                <dd className="text-5xl font-bold text-navy"><CountUp to={experienceYears} /><span className="ltr-num">+</span></dd>
              </div>
              <div>
                <dt className="text-sm text-muted">مقر الإقامة</dt>
                <dd className="mt-2 text-xl font-bold text-navy">{site.location}</dd>
              </div>
            </dl>
            <h3 className="mt-10 text-lg font-bold text-navy">قدّم برامجه وخدماته لـ</h3>
            <p className="mt-2 max-w-2xl leading-loose text-muted">{identity.trained.join(" • ")}</p>
          </Reveal>
        </Container>
      </section>

      {/* ما يميز منهجه */}
      <section className="bg-sand/60 py-20 sm:py-24" aria-labelledby="approach-title">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4"><SectionHeading id="approach-title" eyebrow="المنهج" title="ما يميز أسلوبه" text="تدريب عملي وتفاعلي يبدأ من الاحتياج." /></div>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {aboutPage.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.08} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl font-bold text-navy">{a.title}</h3>
                <p className="mt-2 leading-loose text-muted">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* المجالات */}
      <section className="py-20 sm:py-28" aria-labelledby="areas-title">
        <Container>
          <SectionHeading id="areas-title" eyebrow="مجالات الخبرة" title="خمسة مجالات ينتظم حولها العمل" />
          <ul className="mt-12">
            {aboutPage.expertise.map((e, i) => (
              <Reveal as="li" key={e.title} className="grid items-baseline gap-2 border-t border-sand-dark py-6 sm:grid-cols-[4rem_14rem_1fr] sm:gap-8">
                <span className="ltr-num text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-bold text-navy sm:text-3xl">{e.title}</h3>
                <p className="text-lg text-muted">{e.text}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-loose text-muted">{identity.fields.join(" • ")}</p>
        </Container>
      </section>

      {showGallery && (
        <section aria-label="من البرامج التدريبية" className="pb-20 sm:pb-28">
          <Container className="grid gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <ImageSlot key={g.name} files={g.files} alt={g.alt} placeholderName={g.name} tone="sand" hideIfMissing sizes="(min-width:768px) 33vw, 100vw" className="aspect-[4/3] w-full" />
            ))}
          </Container>
        </section>
      )}

      <ExperienceSectors id="journey" />
      <Credentials />

      {/* فلسفة التدريب */}
      <section className="relative overflow-hidden bg-navy py-24 text-ivory sm:py-32" aria-labelledby="philo-title">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 text-sm font-semibold text-gold-soft">فلسفة التدريب</p>
            <h2 id="philo-title" className="display">{philosophy.lead}</h2>
            <p className="mt-6 max-w-xl text-lg leading-loose text-ivory/80">{philosophy.text}</p>
          </Reveal>
          <ol className="lg:col-span-6">
            {philosophyPrinciples.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.05} className="flex gap-5 border-t border-ivory/20 py-4">
                <span className="ltr-num w-8 shrink-0 text-lg font-bold text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg leading-loose">{p}</span>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <OrganizationStrip />
      <BookTrainingCTA title="ناقش احتياجك التدريبي" text="شاركنا التحدي والفئة المستهدفة، ونقترح عليك الشكل الأنسب للعمل." />
    </>
  );
}
