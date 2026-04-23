import { MarketingHeader } from '@/components/MarketingHeader';
import { PilotApplication } from '@/components/sections/PilotApplication';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata = {
  title: 'Request a pilot · Salency',
  description:
    'Join the Spring 2026 pilot cohort. A memory layer that outlasts any rep, so the next hire inherits a Day-1 brief.',
};

export default function PilotPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <PilotApplication />
      <SiteFooter />
    </div>
  );
}
