import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.fullName }],
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0f2240", width: "device-width", initialScale: 1 };

const sameAs = site.social.map((s) => s.href);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={plex.variable}>
      <body>
        <a href="#main" className="skip-link">تخطّ إلى المحتوى</a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.fullName,
                alternateName: site.name,
                jobTitle: site.role,
                description: site.description,
                url: site.url,
                email: site.contact.email,
                telephone: site.contact.phones.map((p) => p.tel),
                sameAs,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "سيئون",
                  addressRegion: "حضرموت",
                  addressCountry: "YE",
                },
              },
              {
                "@type": "ProfessionalService",
                "@id": `${site.url}/#service`,
                name: site.name,
                description: site.description,
                url: site.url,
                provider: { "@id": `${site.url}/#person` },
                areaServed: "اليمن",
                email: site.contact.email,
                telephone: site.contact.phones.map((p) => p.tel),
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
