import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "سياسة الخصوصية", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ label: "سياسة الخصوصية" }]} title="سياسة الخصوصية" />
      <Container className="max-w-3xl space-y-5 py-16 text-lg leading-loose text-ink/90">
        <p>نحترم خصوصية زوار الموقع. يجمع نموذج التواصل البيانات التي تكتبها بنفسك (الاسم والجهة والبريد والهاتف ونص الطلب) لغرض واحد هو الرد على طلبك.</p>
        <p>لا يُرسل النموذج البيانات إلى خادم الموقع؛ بل يجهّز رسالة بريد إلكتروني من جهازك إلى {site.contact.email}.</p>
        <p>لا نبيع بياناتك ولا نشاركها مع أطراف أخرى لأغراض تسويقية. للاستفسار أو طلب حذف مراسلة سابقة، راسلنا على البريد أعلاه.</p>
        <p className="text-sm text-muted">هذه صيغة أولية تُراجع وتُعتمد قبل الإطلاق الرسمي.</p>
      </Container>
    </>
  );
}
