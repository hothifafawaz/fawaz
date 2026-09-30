import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site, footerNav, legalNav } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <p className="text-2xl font-bold">{site.name}</p>
          <p className="mt-2 text-gold-soft">{site.descriptor}</p>
          <ul className="mt-5 flex gap-3">
            {site.social.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (يفتح في نافذة جديدة)`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/30 hover:border-gold-soft hover:text-gold-soft"
                >
                  <SocialIcon id={s.id} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="روابط التذييل">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {footerNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-ivory/85 hover:text-gold-soft">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

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
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
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
