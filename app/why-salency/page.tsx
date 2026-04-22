import { MarketingHeader } from '@/components/MarketingHeader';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { GongSection } from '@/components/sections/GongSection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function WhySalencyPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ProblemSection />
      <GongSection />
      <SiteFooter />
    </div>
  );
}
