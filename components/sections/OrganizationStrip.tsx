import { organizationGroups, trustCaption, trustNote } from "@/content/organizations";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function OrganizationStrip({ tone = "paper" }: { tone?: "paper" | "ivory" }) {
  return (
    <section
      aria-labelledby="trust-title"
      className={tone === "paper" ? "border-y border-sand-dark/60 bg-paper" : "bg-ivory"}
    >
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <h2 id="trust-title" className="text-2xl font-bold leading-snug text-navy">{trustCaption}</h2>
          <p className="mt-3 text-sm leading-loose text-muted">{trustNote}</p>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          {organizationGroups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 text-sm font-semibold text-gold">{g.title}</h3>
              <ul>
                {g.names.map((name) => (
                  <li key={name} className="border-t border-sand-dark/70 py-3 text-lg font-semibold leading-snug text-navy/90">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
