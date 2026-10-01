import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OrganizationStrip } from "@/components/sections/OrganizationStrip";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OrganizationStrip tone="ivory" />
      <ExpertiseSection />
      <ConsultingSection />
      <AudiencesSection />
      <KnowledgeSection />
      <FinalCTA />
    </>
  );
}
