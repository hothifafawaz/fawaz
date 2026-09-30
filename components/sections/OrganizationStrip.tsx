import { organizations, trustCaption, trustNote } from "@/content/organizations";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function OrganizationStrip() {
  return (
    <section aria-labelledby="trust-title" className="border-y border-sand-dark/60 bg-paper">
      <Container className="py-12">
        <Reveal>
          <h2 id="trust-title" className="mx-auto max-w-2xl text-center text-base font-semibold text-navy sm:text-lg">
            {trustCaption}
          </h2>
          <p className="mt-2 text-center text-sm text-muted">{trustNote}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {organizations.map((name) => (
              <li key={name} className="flex items-start gap-3 border-b border-sand-dark/50 pb-3 text-[0.95rem] text-ink/85">
                <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
