import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { InvestorsSection } from '@/components/sections/InvestorsSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function InvestorsPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ScrollReveal><InvestorsSection /></ScrollReveal>
      <SiteFooter />
    </div>
  );
}
