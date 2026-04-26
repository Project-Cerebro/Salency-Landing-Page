import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ThesisSection } from '@/components/sections/ThesisSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { CompoundsSection } from '@/components/sections/CompoundsSection';
import { GongSection } from '@/components/sections/GongSection';
import { NotForYouSection } from '@/components/sections/NotForYouSection';
import { PilotCtaSection } from '@/components/sections/PilotCtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Salency vs Gong — what to do with call recordings · Salency',
  description:
    'Gong records your calls. Salency solves what happens after — extracting pains, mapping them to products, and retaining the context reps and successors actually need.',
  alternates: { canonical: '/why-salency' },
  openGraph: {
    title: 'Salency vs Gong — what to do with call recordings',
    description:
      'Gong records your calls. Salency solves what happens after — institutional memory for revenue teams.',
    url: 'https://salency.ai/why-salency',
    type: 'website',
  },
};

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
