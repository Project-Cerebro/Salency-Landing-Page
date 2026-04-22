import { MarketingHeader } from '@/components/MarketingHeader';
import { ComingSoon } from '@/components/sections/ComingSoon';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function PricingPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ComingSoon
        eyebrow="Pricing"
        title="Pricing —"
        description="We're scoping pilots with a small group of revenue teams this quarter. Pricing is set per engagement while we calibrate. Request a slot and we'll share current terms."
      />
      <SiteFooter />
    </div>
  );
}
