import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "تواصل",
  description: "أرسل طلب برنامج تدريبي أو استشارة أو تعاون أو دعوة فعالية إلى فواز الفخري.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const facebook = site.social.find((s) => s.id === "facebook");

  return (
    <>
      <PageHero crumbs={[{ label: "تواصل" }]} eyebrow="تواصل" title="ناقش احتياجك التدريبي أو الاستشاري" text="اكتب عن البرنامج أو الاستشارة أو التعاون الذي تفكر فيه، وسنعود إليك." />
      <Container className="grid gap-14 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-bold text-navy">تواصل مباشرة</h2>
          <p className="mt-3 max-w-md leading-loose text-muted">اختر الوسيلة الأنسب لك، وسنعود إليك في أقرب وقت.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              arrow={false}
            >
              <MessageCircle aria-hidden className="size-5" />
              تواصل عبر واتساب
              <span className="sr-only"> (يفتح في نافذة جديدة)</span>
            </Button>
            {facebook && (
              <Button
                href={facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                arrow={false}
              >
                <SocialIcon id={facebook.id} className="size-5" />
                تواصل عبر فيسبوك
                <span className="sr-only"> (يفتح في نافذة جديدة)</span>
              </Button>
            )}
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-2xl bg-sand p-8">
            <h2 className="text-2xl font-bold text-navy">بيانات التواصل</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3"><Mail aria-hidden className="size-5 text-gold" /><a href={`mailto:${site.contact.email}`} className="hover:underline"><span dir="ltr" className="ltr-num">{site.contact.email}</span></a></li>
              {site.contact.phones.map((p) => (
                <li key={p.tel} className="flex items-center gap-3"><Phone aria-hidden className="size-5 text-gold" /><a href={`tel:${p.tel}`} className="hover:underline"><span dir="ltr" className="ltr-num">{p.label}</span></a></li>
              ))}
              <li className="flex items-center gap-3"><MapPin aria-hidden className="size-5 text-gold" />{site.location}</li>
              {site.social.map((s) => (
                <li key={s.id} className="flex items-center gap-3">
                  <SocialIcon id={s.id} className="size-5 text-gold" />
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}<span className="sr-only"> (يفتح في نافذة جديدة)</span></a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
