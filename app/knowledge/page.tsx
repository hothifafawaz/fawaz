import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { KnowledgeHub } from "@/components/sections/KnowledgeHub";
import { knowledge, knowledgeIntro } from "@/content/knowledge";

export const metadata: Metadata = {
  title: "المعرفة",
  description: knowledgeIntro.text,
  alternates: { canonical: "/knowledge" },
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "المعرفة" }]} eyebrow="المعرفة" title={knowledgeIntro.title} text={knowledgeIntro.text} />
      <Container className="py-16">
        <KnowledgeHub items={knowledge} />
      </Container>
    </>
  );
}
