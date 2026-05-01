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
      {/* Reuses .inv-intro visual pattern (eyebrow + h1 + paragraph) — see globals.css:1882 */}
      <div className="inv-intro">
        <div className="inv-intro-inner">
          <span className="eb">Pricing</span>
          <h1>Per engagement, while we calibrate.</h1>
          <p>
            We&rsquo;re not publishing list prices yet. Pricing is set per
            engagement while we calibrate with the Spring 2026 pilot cohort.
            Apply for the pilot below and we&rsquo;ll share current terms in
            the first conversation. Pilots run 4&ndash;6 weeks; pricing
            post-pilot is set with you, based on what your team got out of it.
          </p>
        </div>
      </div>
      <ScrollReveal><PilotApplication /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
