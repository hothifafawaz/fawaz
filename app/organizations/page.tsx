import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrganizationStrip } from "@/components/sections/OrganizationStrip";
import { CustomPrograms } from "@/components/sections/CustomPrograms";
import { Faq } from "@/components/sections/Faq";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { segments } from "@/content/organizations";
import { consultingFaq } from "@/content/faq";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "للمؤسسات",
  description: "حلول تدريبية واستشارية مصممة لاحتياج الجهات الحكومية والتعليمية ومنظمات المجتمع المدني والشركات والمؤسسات التنموية.",
  alternates: { canonical: "/organizations" },
};

const steps = [
  { t: "تشخيص", d: "فهم الواقع والاحتياج." },
  { t: "تصميم", d: "بناء البرنامج أو الخطة." },
  { t: "تنفيذ", d: "تقديم تفاعلي عملي." },
  { t: "تقييم", d: "قياس ما تحقق والمتابعة." },
];

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "المؤسسات" }]}
        eyebrow="للمؤسسات"
        title="حلول تدريبية واستشارية مصممة لاحتياج المؤسسة"
      >
        <Button href={links.requestProgram} variant="gold">أرسل احتياج الجهة</Button>
      </PageHero>
      <section className="py-20">
        <Container>
          <SectionHeading title="قطاعات نعمل معها" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 0.07} className="rounded-2xl border border-sand-dark bg-paper p-7">
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 leading-loose text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-navy py-20 text-ivory">
        <Container>
          <SectionHeading light title="مسار العمل مع الجهة" />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-gold-soft/50 pt-5">
                <span className="ltr-num text-sm font-bold text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-ivory/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <OrganizationStrip />
      <CustomPrograms />
      <Faq items={consultingFaq} />
      <BookTrainingCTA title="أرسل احتياج جهتك" text="اكتب لنا التحدي والفئة المستهدفة ونعود إليك باقتراح مبدئي." />
    </>
  );
}
