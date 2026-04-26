import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ThesisSection } from '@/components/sections/ThesisSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { CompoundsSection } from '@/components/sections/CompoundsSection';
import { GongSection } from '@/components/sections/GongSection';
import { NotForYouSection } from '@/components/sections/NotForYouSection';
import { PilotCtaSection } from '@/components/sections/PilotCtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function WhySalencyPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ThesisSection />
      <ScrollReveal><ProblemSection /></ScrollReveal>
      <ScrollReveal><GongSection /></ScrollReveal>
      <ScrollReveal><CompoundsSection /></ScrollReveal>
      <ScrollReveal><NotForYouSection /></ScrollReveal>
      <PilotCtaSection />
      <SiteFooter />
    </div>
  );
}
