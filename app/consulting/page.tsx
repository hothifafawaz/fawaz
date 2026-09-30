import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Faq } from "@/components/sections/Faq";
import { ConsultingCTA } from "@/components/sections/ConsultingCTA";
import { consultingFaq } from "@/content/faq";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "الاستشارات المؤسسية",
  description: "استشارات في التخطيط الاستراتيجي والتشغيلي وتحليل الاحتياج وتطوير القيادات وإدارة التغيير المؤسسي.",
  alternates: { canonical: "/consulting" },
};

const flow = [
  { title: "التشخيص", text: "فهم الواقع والتحدي وأصحاب المصلحة." },
  { title: "التحليل", text: "تحديد الفجوات والأولويات بأدوات منظمة." },
  { title: "البناء", text: "إعداد الخطة أو البرنامج أو النظام المناسب." },
  { title: "التنفيذ والمتابعة", text: "تمكين الفريق من التنفيذ ومتابعة النتائج." },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "الاستشارات" }]}
        eyebrow="الاستشارات المؤسسية"
        title="استشارات تساعد المؤسسة على الانتقال من التشخيص إلى التنفيذ"
        text="التخطيط الاستراتيجي والتشغيلي، وتحليل الاحتياج، وبناء الخطط، وتطوير القيادات، وتصميم البرامج التدريبية، والتغيير المؤسسي."
      >
        <Button href={links.requestConsulting} variant="gold">اطلب جلسة تشخيص أولية</Button>
      </PageHero>
      <ConsultingSection showHeading={false} />
      <section className="bg-sand/60 py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="كيف نعمل" title="من التشخيص إلى التنفيذ" /></div>
          <div className="lg:col-span-7"><ProcessTimeline items={flow} /></div>
        </Container>
      </section>
      <CaseStudy />
      <Faq items={consultingFaq} />
      <ConsultingCTA />
    </>
  );
}
