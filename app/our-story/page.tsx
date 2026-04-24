import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { OurStorySection } from '@/components/sections/OurStorySection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata = {
  title: 'Our story · Salency',
  description:
    'Why four people bet four months on fixing the handoff layer in B2B sales. The founding moment, the team, and what we believe is about to shift.',
};

export default function OurStoryPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <ScrollReveal>
        <OurStorySection />
      </ScrollReveal>
      <SiteFooter />
    </div>
  );
}
