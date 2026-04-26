import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { InvestorsSection } from '@/components/sections/InvestorsSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Investors · Salency',
  description:
    'The thesis: institutional memory is the next bottleneck for B2B revenue teams. How Salency captures the layer that compounds across reps, deals, and tenure.',
  alternates: { canonical: '/investors' },
  openGraph: {
    title: 'Investors · Salency',
    description:
      'The thesis: institutional memory is the next bottleneck for B2B revenue teams.',
    url: 'https://salency.ai/investors',
    type: 'website',
  },
};

export default function InvestorsPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ScrollReveal><InvestorsSection /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
