import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { programs, getProgram, getPillar, sharedDelivery, sharedMethodology } from "@/content/programs";
import { links } from "@/content/site";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { images } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProgram((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.intro, alternates: { canonical: `/training/${p.slug}` } };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-sand-dark py-10 md:grid-cols-12 md:gap-10">
      <h2 className="text-2xl font-bold text-navy md:col-span-4">{title}</h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}
const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 leading-loose">
        <span aria-hidden className="mt-3.5 size-1.5 shrink-0 rounded-full bg-gold" />
        {i}
      </li>
    ))}
  </ul>
);

export default async function ProgramPage({ params }: Props) {
  const p = getProgram((await params).slug);
  if (!p) notFound();
  const pillar = getPillar(p.pillar);
  const related = programs.filter((x) => x.pillar === p.pillar && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "مجالات التدريب", href: "/training" }, { label: p.title }]}
        eyebrow={pillar?.title}
        title={p.title}
        text={p.summary}
      >
        <Button href={links.requestProgram} variant="gold">اطلب هذا البرنامج</Button>
      </PageHero>

      <Container className="pt-12">
        <ImageSlot image={images.training1} alt="برنامج تدريبي تفاعلي" sizes="(min-width:1280px) 1200px, 100vw" className="aspect-[21/9] w-full rounded-xl" />
      </Container>
      <Container className="py-16">
        <section className="grid gap-4 pb-10 md:grid-cols-12 md:gap-10">
          <h2 className="text-2xl font-bold text-navy md:col-span-4">مقدمة</h2>
          <p className="text-lg leading-loose text-muted md:col-span-8">{p.intro}</p>
        </section>
        <Block title="لمن البرنامج؟"><List items={p.forWhom} /></Block>
        <Block title="المشكلات التي يعالجها"><List items={p.problems} /></Block>
        <Block title="الأهداف"><List items={p.objectives} /></Block>
        <Block title="المحاور">
          <ol className="space-y-3">
            {p.axes.map((a, i) => (
              <li key={a} className="flex gap-4 border-b border-sand-dark/60 pb-3">
                <span className="ltr-num font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                {a}
              </li>
            ))}
          </ol>
        </Block>
        <Block title="المنهجية"><p className="leading-loose text-muted">{sharedMethodology}</p></Block>
        <Block title="طريقة التنفيذ"><List items={sharedDelivery} /></Block>
        {p.duration && <Block title="مدة البرنامج"><p>{p.duration}</p></Block>}
        <Block title="الجمهور المستهدف">
          <ul className="flex flex-wrap gap-2">
            {p.audience.map((a) => <li key={a} className="rounded-full bg-sand px-4 py-1.5 text-navy">{a}</li>)}
          </ul>
        </Block>
      </Container>

      {related.length > 0 && (
        <section className="bg-sand/50 py-16">
          <Container>
            <h2 className="text-2xl font-bold text-navy">برامج ذات صلة</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r) => <li key={r.slug}><ProgramCard program={r} /></li>)}
            </ul>
          </Container>
        </section>
      )}
      <BookTrainingCTA title={`اطلب برنامج «${p.title}» لجهتك`} text="نصمّم البرنامج بحسب احتياج الفئة والسياق قبل التنفيذ." />
    </>
  );
}
