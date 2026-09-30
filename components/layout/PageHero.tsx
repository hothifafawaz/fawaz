import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  text,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <Breadcrumbs items={crumbs} light />
        <Reveal className="mt-10 max-w-4xl">
          {eyebrow && <p className="mb-4 text-sm font-semibold text-gold-soft">{eyebrow}</p>}
          <h1 className="display">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-loose text-ivory/80">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
