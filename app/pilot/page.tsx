import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PilotApplication } from '@/components/sections/PilotApplication';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Request a pilot · Salency',
  description:
    'Join the Spring 2026 pilot cohort. A memory layer that outlasts any rep, so the next hire inherits a Day-1 brief.',
  alternates: { canonical: '/pilot' },
};

export default function PilotPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ScrollReveal><PilotApplication /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
