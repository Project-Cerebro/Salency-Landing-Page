import { MarketingHeader } from '@/components/MarketingHeader';
import { PilotApplication } from '@/components/sections/PilotApplication';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata = {
  title: 'Pricing · Salency',
  description:
    'Pricing is set per engagement while we calibrate with the Spring 2026 pilot cohort. Tell us about your team and we will share current terms.',
};

export default function PricingPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <PilotApplication />
      <SiteFooter />
    </div>
  );
}
