import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ThesisSection } from '@/components/sections/ThesisSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { CompoundsSection } from '@/components/sections/CompoundsSection';
import { GongSection } from '@/components/sections/GongSection';
import { NotForYouSection } from '@/components/sections/NotForYouSection';
import { PilotCtaSection } from '@/components/sections/PilotCtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { JsonLd } from '@/components/JsonLd';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Salency different from Gong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gong records your calls. Salency solves what happens after — extracting customer pains, mapping them to your products, and retaining the structured context any rep or successor needs to keep the deal moving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Salency a good fit for my sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salency fits teams that record calls (Zoom, Meet, Teams), run deals across multiple calls, and pass accounts between people — AE to CSM, new reps inheriting books, expansion teams taking over.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Salency not a good fit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salency is not a fit if you do not record your calls (transcripts are the input), if your sales motion is one call to signature with no handoff, or if you are the only one selling — institutional memory does not apply when one head holds it all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Salency replace my CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Salency sits on top of your CRM, not in place of it. It is the layer between the call transcript and the rep who inherits the account.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Salency vs Gong — what to do with call recordings · Salency',
  description:
    'Gong records your calls. Salency solves what happens after — extracting pains, mapping them to products, and retaining the context reps and successors actually need.',
  alternates: { canonical: '/why-salency' },
  openGraph: {
    title: 'Salency vs Gong — what to do with call recordings',
    description:
      'Gong records your calls. Salency solves what happens after — institutional memory for revenue teams.',
    url: 'https://salency.ai/why-salency',
    type: 'website',
  },
};

export default function WhySalencyPage() {
  return (
    <div className="page">
      <JsonLd data={faqSchema} />
      <MarketingHeader />
      <ThesisSection />
      <ScrollReveal><ProblemSection /></ScrollReveal>
      <ScrollReveal><GongSection /></ScrollReveal>
      <ScrollReveal><CompoundsSection /></ScrollReveal>
      <ScrollReveal><NotForYouSection /></ScrollReveal>
      <PilotCtaSection />
      <SiteFooter />
    </div>
  );
}
