import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { LegalToc, type LegalTocSection } from '@/components/LegalToc';

export const metadata: Metadata = {
  title: 'Terms of Service · Salency',
  description:
    'The terms that govern use of salency.ai and any pilot services provided by Salency.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

const SECTIONS: LegalTocSection[] = [
  { id: 'use-of-the-site', title: 'Use of the Site' },
  { id: 'pilot-program', title: 'Pilot Program' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
];

export default function Terms() {
  return (
    <div className="page">
      <MarketingHeader />
      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="legal-layout">
          <div className="max-w-none space-y-6 text-gray-300 text-base leading-relaxed">
            <p><strong>Effective date:</strong> March 25, 2026</p>

            <p>These terms govern your use of salency.ai and any pilot services provided by Salency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>

            <h2 id="use-of-the-site" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Use of the Site</h2>
            <p>You may use this site to learn about Salency and submit a pilot request. You agree not to misuse the site, submit false information, or attempt to interfere with its operation.</p>

            <h2 id="pilot-program" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Pilot Program</h2>
            <p>Pilot access is offered at our discretion. During the pilot period, Salency is provided free of charge. We reserve the right to modify or discontinue the pilot at any time. Continued use after the pilot requires a paid subscription.</p>

            <h2 id="intellectual-property" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Intellectual Property</h2>
            <p>All content on this site (text, design, logos, and code) is owned by Salency. You may not reproduce or distribute it without our written permission. Your data remains yours; we do not claim ownership of any transcripts or business information you provide.</p>

            <h2 id="limitation-of-liability" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Limitation of Liability</h2>
            <p>Salency is provided &ldquo;as is&rdquo; during the pilot period. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

            <h2 id="changes" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Changes</h2>
            <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.</p>

            <h2 id="contact" className="text-2xl font-bold text-white mt-8 mb-3 scroll-mt-32">Contact</h2>
            <p>Questions? Email us at <a href="mailto:hello@salency.ai" className="text-copper hover:underline">hello@salency.ai</a>.</p>
          </div>
          <aside>
            <LegalToc sections={SECTIONS} />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
