import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Service · Salency',
  description:
    'The terms that govern use of salency.ai and any pilot services provided by Salency.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <div className="page">
      <MarketingHeader />
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 text-sm leading-relaxed">
          <p><strong>Effective date:</strong> March 25, 2026</p>

          <p>These terms govern your use of salency.ai and any pilot services provided by Salency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Use of the Site</h2>
          <p>You may use this site to learn about Salency and submit a pilot request. You agree not to misuse the site, submit false information, or attempt to interfere with its operation.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Pilot Program</h2>
          <p>Pilot access is offered at our discretion. During the pilot period, Salency is provided free of charge. We reserve the right to modify or discontinue the pilot at any time. Continued use after the pilot requires a paid subscription.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Intellectual Property</h2>
          <p>All content on this site (text, design, logos, and code) is owned by Salency. You may not reproduce or distribute it without our written permission. Your data remains yours; we do not claim ownership of any transcripts or business information you provide.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Limitation of Liability</h2>
          <p>Salency is provided &ldquo;as is&rdquo; during the pilot period. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.</p>

          <h2 className="text-lg font-bold text-white mt-8 mb-3">Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@salency.ai" className="text-accent-warm hover:underline">hello@salency.ai</a>.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
