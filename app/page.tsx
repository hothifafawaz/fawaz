import { HeroSection } from "@/components/sections/HeroSection";
import { OrganizationStrip } from "@/components/sections/OrganizationStrip";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { MethodologiesSection } from "@/components/sections/MethodologiesSection";
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms";
import { CustomPrograms } from "@/components/sections/CustomPrograms";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { AboutSection } from "@/components/sections/AboutSection";
import { Credentials } from "@/components/sections/Credentials";
import { ExperienceSectors } from "@/components/sections/ExperienceSectors";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OrganizationStrip />
      <PhilosophySection />
      <ExpertiseSection />
      <AudiencesSection />
      <ConsultingSection />
      <MethodologiesSection />
      <FeaturedPrograms />
      <CustomPrograms />
      <CaseStudy />
      <AboutSection />
      <Credentials />
      <ExperienceSectors />
      <KnowledgeSection />
      <FinalCTA />
    </>
  );
}
