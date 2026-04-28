import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { HeroSection } from '@/components/sections/HeroSection';
import { HubSection } from '@/components/sections/HubSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { NotDoSection } from '@/components/sections/NotDoSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Salency',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Sales Intelligence',
  operatingSystem: 'Web',
  url: 'https://www.salency.ai',
  description:
    'Institutional memory for B2B sales teams. Salency turns every sales call transcript into structured, cited context, extracting customer pains, mapping them to products, and retaining the account history any rep or successor needs.',
  brand: {
    '@type': 'Organization',
    name: 'Salency',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
    description:
      'Free during the Spring 2026 pilot cohort. Pricing set per engagement post-pilot.',
  },
};

export default function Home() {
  return (
    <div className="page">
      <JsonLd data={softwareApplicationSchema} />
      <MarketingHeader />
      <ScrollReveal><HeroSection /></ScrollReveal>
      <ScrollReveal><HubSection /></ScrollReveal>
      <ScrollReveal><HowItWorksSection /></ScrollReveal>
      <ScrollReveal><NotDoSection /></ScrollReveal>
      <ScrollReveal><CtaSection /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
