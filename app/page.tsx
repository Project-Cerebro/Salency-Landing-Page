import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { HeroSection } from '@/components/sections/HeroSection';
import { HubSection } from '@/components/sections/HubSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { NotDoSection } from '@/components/sections/NotDoSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="page">
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
