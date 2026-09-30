import { credentials } from "@/content/fawaz";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Credentials() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="cred-title">
      <Container>
        <SectionHeading id="cred-title" eyebrow="الاعتمادات" title={credentials.title} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ul className="space-y-8 lg:col-span-5">
            {credentials.featured.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 0.08} className="border-s-4 border-gold ps-6">
                <p className="text-xl font-bold leading-loose text-navy sm:text-2xl">{c}</p>
              </Reveal>
            ))}
          </ul>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {credentials.items.map((c) => (
              <li key={c} dir="auto" className="border-t border-sand-dark py-4 text-lg leading-snug text-ink/90">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
