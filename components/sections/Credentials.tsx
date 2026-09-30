import { BadgeCheck } from "lucide-react";
import { credentials } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Credentials() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="cred-title">
      <Container>
        <SectionHeading eyebrow="الاعتمادات" title={credentials.title} />
        <span id="cred-title" className="sr-only">{credentials.title}</span>
        <ul className="mt-12 grid gap-x-12 md:grid-cols-2">
          {credentials.items.map((c, i) => (
            <Reveal as="li" key={c} delay={(i % 2) * 0.06} className="flex items-start gap-4 border-t border-sand-dark py-5">
              <BadgeCheck aria-hidden className="mt-1 size-5 shrink-0 text-gold" />
              <span dir="auto" className="text-lg leading-loose text-ink/90">{c}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
