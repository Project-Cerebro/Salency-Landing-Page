import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Blog · Salency',
  description:
    'Long-form thinking on institutional memory, sales call intelligence, and the layer between Gong and the rep who inherits the account. Coming soon.',
  alternates: { canonical: '/blog' },
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <div className="page">
      <MarketingHeader />
      <section className="coming-soon">
        <div className="coming-soon-inner">
          <span className="eb">Salency Blog</span>
          <h1>
            Posts on the way. <em>The memory layer, written down.</em>
          </h1>
          <p>
            We&rsquo;re shipping V1 first. When the writing starts, expect
            long-form thinking on institutional memory, sales call intelligence,
            and what comes after Gong.
          </p>
          <div className="coming-soon-meta hero-meta">
            <span className="hero-meta-item">First posts · 2026</span>
            <span className="hero-meta-item">No newsletter, no spam</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
