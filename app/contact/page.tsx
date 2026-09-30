import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "تواصل",
  description: "أرسل طلب برنامج تدريبي أو استشارة أو تعاون أو دعوة فعالية إلى فواز الفخري.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "تواصل" }]} eyebrow="تواصل" title="حدثنا عن احتياجك" text="اكتب لنا عن البرنامج أو الاستشارة أو التعاون الذي تفكر فيه، وسنعود إليك." />
      <Container className="grid gap-14 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Suspense fallback={null}><ContactForm /></Suspense>
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
