import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ConsultingCTA({ title = "التحدي في الخطة أو الهيكل أو القرار؟", text = "ابدأ بجلسة تشخيص أولية لتحديد ما يحتاجه العمل فعلًا." }: { title?: string; text?: string }) {
  return (
    <section className="bg-navy py-16 text-ivory">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-ivory/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={links.requestConsulting} variant="gold">اطلب استشارة</Button>
          <Button href={links.contact} variant="ghost-light" arrow={false}>تواصل مع المدرب</Button>
        </div>
      </Container>
    </section>
  );
}
