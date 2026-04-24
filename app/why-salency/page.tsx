import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ThesisSection } from '@/components/sections/ThesisSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { MemoryStackSection } from '@/components/sections/MemoryStackSection';
import { MemoryEnablesSection } from '@/components/sections/MemoryEnablesSection';
import { CompoundsSection } from '@/components/sections/CompoundsSection';
import { FiveYearBetSection } from '@/components/sections/FiveYearBetSection';
import { GongSection } from '@/components/sections/GongSection';
import { HandoffToolsSection } from '@/components/sections/HandoffToolsSection';
import { NotForYouSection } from '@/components/sections/NotForYouSection';
import { TeamStripSection } from '@/components/sections/TeamStripSection';
import { PilotCtaSection } from '@/components/sections/PilotCtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function WhySalencyPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ThesisSection />
      <ScrollReveal><ProblemSection /></ScrollReveal>
      <ScrollReveal><MemoryStackSection /></ScrollReveal>
      <ScrollReveal><MemoryEnablesSection /></ScrollReveal>
      <ScrollReveal><CompoundsSection /></ScrollReveal>
      <ScrollReveal><FiveYearBetSection /></ScrollReveal>
      <ScrollReveal><GongSection /></ScrollReveal>
      <ScrollReveal><HandoffToolsSection /></ScrollReveal>
      <ScrollReveal><NotForYouSection /></ScrollReveal>
      <ScrollReveal><TeamStripSection /></ScrollReveal>
      <PilotCtaSection />
      <SiteFooter />
    </div>
  );
}
