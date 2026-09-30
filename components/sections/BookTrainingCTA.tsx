import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BookTrainingCTA({ title = "هل لديك احتياج تدريبي في جهتك أو فريقك؟", text = "شاركنا التحدي والفئة المستهدفة، ونقترح عليك الشكل الأنسب للبرنامج." }: { title?: string; text?: string }) {
  return (
    <section className="bg-sand py-16">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          <p className="mt-2 text-muted">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={links.requestProgram}>اطلب برنامجًا تدريبيًا</Button>
          <Button href={links.contact} variant="secondary" arrow={false}>تواصل مع المدرب</Button>
        </div>
      </Container>
    </section>
  );
}
