import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MemorySection } from '@/components/sections/MemorySection';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Memory · Salency',
  description:
    'Institutional memory for revenue teams. Every call becomes cited, queryable context: stakeholders, pains, open commitments, contradictions, pain-to-product mapping. Built for the rep inheriting the account at 2pm Monday.',
  alternates: { canonical: '/memory' },
};

export default function MemoryPage() {
  return (
    <div className="page memory-page">
      <MarketingHeader />
      <MemorySection />
      <SiteFooter />
    </div>
  );
}
