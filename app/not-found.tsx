import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="ltr-num text-7xl font-bold text-sand-dark">404</p>
      <h1 className="h2 mt-4 text-navy">الصفحة غير موجودة</h1>
      <p className="mt-3 text-muted">ربما نُقلت الصفحة أو تغيّر رابطها.</p>
      <div className="mt-8"><Button href="/">العودة إلى الرئيسية</Button></div>
    </Container>
  );
}
