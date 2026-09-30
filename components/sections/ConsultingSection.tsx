import { consultingSection } from "@/content/fawaz";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConsultingSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="consulting-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            {showHeading ? (
              <>
                <SectionHeading eyebrow="الاستشارات المؤسسية" title={consultingSection.title} text={consultingSection.text} />
                <span id="consulting-title" className="sr-only">{consultingSection.title}</span>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={links.requestConsulting}>{consultingSection.cta}</Button>
                  <Button href="/consulting" variant="secondary">تفاصيل الاستشارات</Button>
                </div>
              </>
            ) : (
              <SectionHeading title="الخدمات الاستشارية" text="ثمانية مسارات عمل تنتقل بالجهة من فهم الواقع إلى التنفيذ." />
            )}
          </div>
        </div>
        <ol className="lg:col-span-7">
          {consultingSection.services.map((s, i) => (
            <Reveal as="li" key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-sand-dark py-6 first:border-t-0 first:pt-0">
              <span className="ltr-num pt-1 text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
