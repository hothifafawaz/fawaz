import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { audiences } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudiencesSection() {
  return (
    <section className="bg-paper py-20 sm:py-24" aria-labelledby="aud-title">
      <Container>
        <SectionHeading eyebrow="لمن نعمل" title="مسار مناسب لكل زائر" text="سواء كنت قائدًا أو مؤسسة أو فريقًا أو فردًا، هناك نقطة بداية تناسب موقعك." />
        <span id="aud-title" className="sr-only">مسار مناسب لكل زائر</span>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-sand-dark md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.id} delay={i * 0.06} className="bg-paper">
              <Link href={a.href} className="group flex h-full flex-col p-7 transition-colors hover:bg-ivory">
                <h3 className="text-xl font-bold text-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-loose text-muted">{a.text}</p>
                <ul className="mt-4 space-y-1 text-sm text-ink/80">
                  {a.items.map((it) => <li key={it}>— {it}</li>)}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy group-hover:text-gold">
                  ابدأ من هنا <ArrowLeft aria-hidden className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
