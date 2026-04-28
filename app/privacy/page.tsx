import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy · Salency',
  description:
    'How Salency collects, uses, and protects information from visitors and pilot applicants.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <div className="page">
      <MarketingHeader />
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 text-sm leading-relaxed">
          <p><strong>Effective date:</strong> March 25, 2026</p>

          <p>Salency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you visit salency.ai or use our services.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Information We Collect</h2>
          <p>When you submit the pilot request form, we collect: your name, work email, company name, role, and team size. We also collect standard web analytics data (page views, referrer, device type) via Vercel Analytics. No cookies, no personal identifiers.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">How We Use Your Information</h2>
          <p>We use the information you provide solely to evaluate pilot fit and contact you about Salency. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Data Storage</h2>
          <p>Form submissions are sent via Resend (our email provider) and stored in our internal systems. We do not store credit card information or sensitive financial data.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:hello@salency.ai" className="text-copper hover:underline">hello@salency.ai</a>.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Changes</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@salency.ai" className="text-copper hover:underline">hello@salency.ai</a>.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
