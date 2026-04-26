import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { OurStorySection } from '@/components/sections/OurStorySection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { JsonLd } from '@/components/JsonLd';
import { FOUNDERS } from '@/lib/founders';

export const metadata: Metadata = {
  title: 'Our story · Salency',
  description:
    'Why four people bet four months on fixing the handoff layer in B2B sales. The founding moment, the team, and what we believe is about to shift.',
  alternates: { canonical: '/our-story' },
};

const personSchemas = FOUNDERS.map((f) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: f.name,
  jobTitle: f.role,
  worksFor: {
    '@type': 'Organization',
    name: 'Salency',
    url: 'https://www.salency.ai',
  },
  ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
}));

export default function OurStoryPage() {
  return (
    <div className="page">
      {personSchemas.map((schema) => (
        <JsonLd key={schema.name} data={schema} />
      ))}
      <MarketingHeader />
      <ScrollReveal>
        <OurStorySection />
      </ScrollReveal>
      <SiteFooter />
    </div>
  );
}
