import { experienceSectors, milestones } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSectors({ id = "experience" }: { id?: string }) {
  return (
    <section id={id} className="bg-sand/60 py-20 sm:py-28" aria-labelledby={`${id}-title`}>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="الأثر والتجارب" title="سجل الخبرات عبر القطاعات" text="خبرة ممتدة في خمسة قطاعات، لكل منها احتياجاتها ولغتها وطريقة عملها." />
          <span id={`${id}-title`} className="sr-only">سجل الخبرات</span>
          <div className="mt-12">
            <ProcessTimeline items={experienceSectors.map((s) => ({ title: s.title, meta: s.text, text: s.detail }))} />
          </div>
        </div>
        <Reveal className="lg:col-span-5">
          <aside className="rounded-2xl bg-navy p-8 text-ivory lg:sticky lg:top-28">
            <h3 className="text-2xl font-bold">محطات من المسيرة</h3>
            <p className="mt-2 text-sm text-ivory/70">برامج قُدّمت ضمن المسيرة المهنية</p>
            <ul className="mt-6 space-y-4">
              {milestones.map((m) => (
                <li key={m} className="flex gap-3 border-t border-ivory/15 pt-4">
                  <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-gold-soft" />
                  <span dir="auto">{m}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
