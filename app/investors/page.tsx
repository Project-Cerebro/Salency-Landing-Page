import { MarketingHeader } from '@/components/MarketingHeader';
import { InvestorsSection } from '@/components/sections/InvestorsSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function InvestorsPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <InvestorsSection />
      <SiteFooter />
    </div>
  );
}
