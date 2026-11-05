import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PilotApplication } from '@/components/sections/PilotApplication';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Request a pilot · Salency',
  description:
    'Apply for the Salency pilot. A memory layer that outlasts any rep, so the next hire inherits the full account brief.',
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
