import { MarketingHeader } from '@/components/MarketingHeader';
import { HeroSection } from '@/components/sections/HeroSection';
import { HubSection } from '@/components/sections/HubSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { NotDoSection } from '@/components/sections/NotDoSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function Home() {
  return (
    <div className="page">
      <MarketingHeader />
      <HeroSection />
      <HubSection />
      <HowItWorksSection />
      <NotDoSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
