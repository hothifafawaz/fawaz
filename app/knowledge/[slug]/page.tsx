import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { KnowledgeCard } from "@/components/sections/KnowledgeCard";
import { BookTrainingCTA } from "@/components/sections/BookTrainingCTA";
import { knowledge, getKnowledge, typeLabel } from "@/content/knowledge";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return knowledge.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const k = getKnowledge((await params).slug);
  if (!k) return {};
  return { title: k.title, description: k.excerpt, alternates: { canonical: `/knowledge/${k.slug}` }, openGraph: { type: "article", publishedTime: k.date } };
}

export default async function KnowledgeArticle({ params }: Props) {
  const k = getKnowledge((await params).slug);
  if (!k) notFound();
  const more = knowledge.filter((x) => x.slug !== k.slug).slice(0, 3);
  return (
    <>
      <article>
        <header className="bg-navy text-ivory">
          <Container className="py-14 sm:py-20">
            <Breadcrumbs light items={[{ label: "المعرفة", href: "/knowledge" }, { label: k.title }]} />
            <p className="mt-10 text-sm font-semibold text-gold-soft">{k.category} • {typeLabel(k.type)}</p>
            <h1 className="display mt-3 max-w-4xl">{k.title}</h1>
            <p className="mt-4 text-ivory/70">قراءة <span className="ltr-num">{k.readingMinutes}</span> دقائق</p>
          </Container>
        </header>
        <Container className="max-w-3xl py-16">
          {k.body.map((s, i) => (
            <section key={i} className="mb-10">
              {s.heading && <h2 className="mb-4 text-2xl font-bold text-navy">{s.heading}</h2>}
              {s.paragraphs.map((p) => <p key={p} className="mb-5 text-lg leading-[2.1] text-ink/90">{p}</p>)}
            </section>
          ))}
        </Container>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: k.title,
            description: k.excerpt,
            datePublished: k.date,
            inLanguage: "ar",
            author: { "@id": `${site.url}/#person` },
            publisher: { "@id": `${site.url}/#person` },
            mainEntityOfPage: `${site.url}/knowledge/${k.slug}`,
          }}
        />
      </article>
      <section className="bg-sand/50 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-navy">مواد أخرى</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((m) => <li key={m.slug}><KnowledgeCard item={m} /></li>)}
          </ul>
        </Container>
      </section>
      <BookTrainingCTA />
    </>
  );
}
