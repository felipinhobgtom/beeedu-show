import HeroSection from "@/components/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import PersonaSection from "@/components/persona-section"
import CompetitorsSection from "@/components/competitors-section"
import EcosystemSection from "@/components/ecosystem-section"
import JobDraftSection from "@/components/job-draft-section"
import GamificationSection from "@/components/gamification-section"
import CompaniesSection from "@/components/companies-section"
import TeamSection from "@/components/team-section"
import BusinessModelSection from "@/components/business-model-section"
import BeeduShowcaseSection from "@/components/beeedu-showcase-section"
import SocialImpactSection from "@/components/social-impact-section"
import ViabilitySection from "@/components/viability-section"
import ContinuityPlanSection from "@/components/continuity-plan-section"
import UnifiedCTAFooter from "@/components/unified-cta-footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <PersonaSection />
      <CompetitorsSection />
      <EcosystemSection />
      <JobDraftSection />
      <GamificationSection />
      <BeeduShowcaseSection />
      <BusinessModelSection />
      <SocialImpactSection />
      <CompaniesSection />
      <TeamSection />
      <ViabilitySection />
      <ContinuityPlanSection />
      <UnifiedCTAFooter />
    </main>
  )
}
