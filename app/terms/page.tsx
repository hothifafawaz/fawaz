import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "الشروط والأحكام", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <>
      <PageHero crumbs={[{ label: "الشروط والأحكام" }]} title="الشروط والأحكام" />
      <Container className="max-w-3xl space-y-5 py-16 text-lg leading-loose text-ink/90">
        <p>المحتوى المنشور في هذا الموقع لأغراض تعريفية وتعليمية، ولا يُعدّ استشارة ملزمة لحالة بعينها.</p>
        <p>حقوق النصوص والمواد والتصميم محفوظة، ولا يجوز إعادة نشرها دون إذن كتابي.</p>
        <p>يُتفق على تفاصيل أي برنامج تدريبي أو استشارة (النطاق والمدة والتكلفة) كتابيًا بين الطرفين قبل البدء.</p>
        <p className="text-sm text-muted">هذه صيغة أولية تُراجع وتُعتمد قبل الإطلاق الرسمي.</p>
      </Container>
    </>
  );
}
