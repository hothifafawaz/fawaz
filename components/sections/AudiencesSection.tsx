import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { audiences } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudiencesSection() {
  return (
    <section className="bg-paper py-20 sm:py-24" aria-labelledby="aud-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="aud-title"
            eyebrow="لمن نعمل"
            title="مسار مناسب لكل موقع"
            text="سواء كنت تقود مؤسسة أو فريقًا، أو تطوّر قدراتك الشخصية، هناك نقطة بداية تناسبك."
          />
        </div>
        <ul className="lg:col-span-8">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.id} delay={i * 0.05}>
              <Link
                href={a.href}
                className="group grid gap-3 border-t border-sand-dark py-7 transition-colors last:border-b hover:bg-ivory sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6 sm:px-3"
              >
                <span className="ltr-num text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{a.title}</h3>
                  <p className="mt-1 max-w-xl text-muted">{a.text}</p>
                  <p className="mt-3 text-sm text-ink/70">{a.items.join(" • ")}</p>
                </div>
                <ArrowLeft aria-hidden className="mt-2 hidden size-5 text-navy transition-transform group-hover:-translate-x-1 sm:block" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
