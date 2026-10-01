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
        <p>نحترم خصوصية زوار الموقع. لا يجمع الموقع أي بيانات عنك تلقائيًا؛ التواصل يتم باختيارك عبر واتساب أو فيسبوك أو البريد الإلكتروني أو الهاتف، وما تشاركه معنا هناك هو ما نستخدمه للرد على طلبك فقط.</p>
        <p>عند تواصلك عبر واتساب أو فيسبوك، تُطبَّق سياسات الخصوصية الخاصة بهاتين المنصتين على تلك المحادثة.</p>
        <p>لا نبيع بياناتك ولا نشاركها مع أطراف أخرى لأغراض تسويقية. للاستفسار أو طلب حذف مراسلة سابقة، راسلنا على <span dir="ltr" className="ltr-num">{site.contact.email}</span>.</p>
        <p className="text-sm text-muted">هذه صيغة أولية تُراجع وتُعتمد قبل الإطلاق الرسمي.</p>
      </Container>
    </>
  );
}
