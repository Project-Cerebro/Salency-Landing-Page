import { MarketingHeader } from '@/components/MarketingHeader';
import { ComingSoon } from '@/components/sections/ComingSoon';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function MemoryPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ComingSoon
        eyebrow="Memory · New"
        title="Memory —"
        description="A cited, queryable memory graph for every account your team touches. Pains, stakeholders, commitments, objections — all mapped to your catalog, all linked to the call they came from. Deep-dive page under construction."
      />
      <SiteFooter />
    </div>
  );
}
