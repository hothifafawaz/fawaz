import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site, footerNav, legalNav } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-3xl font-bold">{site.name}</p>
          <p className="mt-3 text-gold-soft">{site.descriptor}</p>
          <p className="mt-4 max-w-xs text-sm leading-loose text-ivory/70">{site.role}</p>
        </div>

        <nav aria-label="روابط التذييل">
          <h2 className="mb-4 text-sm font-semibold text-gold-soft">التنقل</h2>
          <ul className="space-y-2">
            {footerNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-ivory/85 hover:text-gold-soft">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gold-soft">تواصل</h2>
          <ul className="space-y-3 text-ivory/85">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
                <Mail aria-hidden className="size-4" />
                <span dir="ltr" className="ltr-num">{site.contact.email}</span>
              </a>
            </li>
            {site.contact.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <Phone aria-hidden className="size-4" />
                  <span dir="ltr" className="ltr-num">{p.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gold-soft">تابعنا</h2>
          <ul className="space-y-2">
            {site.social.map((s) => {
              return (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold-soft">
                    <SocialIcon id={s.id} className="size-4" />
                    {s.label}
                    <span className="sr-only"> (يفتح في نافذة جديدة)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© <span className="ltr-num">{new Date().getFullYear()}</span> {site.fullName}. جميع الحقوق محفوظة.</p>
          <ul className="flex gap-5">
            {legalNav.map((i) => (
              <li key={i.href}><Link href={i.href} className="hover:text-gold-soft">{i.label}</Link></li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
