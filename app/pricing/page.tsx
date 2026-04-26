import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PilotApplication } from '@/components/sections/PilotApplication';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Pricing · Salency',
  description:
    'Pricing is set per engagement while we calibrate with the Spring 2026 pilot cohort. Tell us about your team and we will share current terms.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ScrollReveal><PilotApplication /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
