import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { MethodologiesSection } from "@/components/sections/MethodologiesSection";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { pillars, programs } from "@/content/programs";
import { Button } from "@/components/ui/Button";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "مجالات التدريب",
  description: "خمسة محاور تدريبية: الاستراتيجية والتخطيط، القيادة والأداء، التفكير والابتكار، الذكاء والسلوك، والتطوير الشخصي والمهني.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "مجالات التدريب" }]}
        eyebrow="التدريب"
        title="مجالات التدريب والاستشارة"
        text="خمسة محاور تغطي التخطيط والقيادة والتفكير والأنماط والتطوير الشخصي، وكل برنامج يُبنى على احتياج الجهة أو الفرد."
      />
      <section className="bg-navy/95 py-10 text-ivory">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg leading-loose">
            هذه المحاور ليست مواد جاهزة تُقدَّم كما هي. يصمّم فواز أيضًا برامج خاصة بحسب احتياج الجهة وأهدافها وتحدياتها.
          </p>
          <Button href={links.requestInstitutional} variant="gold">صمم برنامجًا لجهتك</Button>
        </Container>
      </section>
      <div id="programs">
        {pillars.map((pl, idx) => {
          const list = programs.filter((p) => p.pillar === pl.id);
          return (
            <section key={pl.id} id={pl.id} className={idx % 2 ? "bg-sand/50 py-16 sm:py-20" : "py-16 sm:py-20"} aria-labelledby={`${pl.id}-h`}>
              <Container className="grid gap-10 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                  <p className="ltr-num text-5xl font-bold text-sand-dark">{pl.number}</p>
                  <h2 id={`${pl.id}-h`} className="mt-2 text-3xl font-bold text-navy">{pl.title}</h2>
                  <p className="mt-3 leading-loose text-muted">{pl.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {pl.items.map((i) => (
                      <li key={i} dir="auto" className="rounded-full border border-sand-dark bg-paper px-3 py-1 text-sm">{i}</li>
                    ))}
                  </ul>
                </Reveal>
                <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                  {list.map((p) => (
                    <li key={p.slug}><ProgramCard program={p} /></li>
                  ))}
                  {list.length === 0 && <li className="text-muted">تُضاف البرامج قريبًا.</li>}
                </ul>
              </Container>
            </section>
          );
        })}
      </div>
      <MethodologiesSection />
      <BookTrainingCTA />
    </>
  );
}
