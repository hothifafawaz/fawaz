import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-ivory sm:py-32" aria-labelledby="final-title">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="final-title" className="display">كل تطوير حقيقي يبدأ بسؤال صحيح.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-loose text-ivory/80">
            سواء كنت تقود مؤسسة، أو فريقًا، أو تسعى إلى تطوير قدراتك الشخصية، تبدأ الخطوة الأولى بفهم الواقع وتحديد ما يحتاج إلى التغيير.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={links.requestProgram} variant="gold">اطلب برنامجًا تدريبيًا</Button>
            <Button href={links.requestConsulting} variant="ghost-light">ناقش احتياجك</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
