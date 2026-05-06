import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/MarketingHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { DiffPairViewer } from '@/components/sections/DiffPairViewer';
import { NotetakerCompareTable } from '@/components/sections/NotetakerCompareTable';
import { PilotCtaSection } from '@/components/sections/PilotCtaSection';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { TranscriptSnippetModalLazy } from '@/components/TranscriptSnippetModalLazy';
import { JsonLd } from '@/components/JsonLd';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Salency different from AI notetakers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI notetakers record what was said. Salency solves what happens after, extracting customer pains, mapping them to your products, and retaining the structured context any rep or successor needs to keep the deal moving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Salency a good fit for my sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salency fits teams that record calls (Zoom, Meet, Teams), run deals across multiple calls, and pass accounts between people: AE to CSM, new reps inheriting books, expansion teams taking over.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Salency not a good fit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salency is not a fit if you do not record your calls (transcripts are the input), if your sales motion is one call to signature with no handoff, or if you are the only one selling. Institutional memory does not apply when one head holds it all.',
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
  title: 'Why Salency · Salency',
  description:
    'AI notetakers record what was said. Salency solves what happens after, extracting pains, mapping them to products, and retaining the context reps and successors actually need.',
  alternates: { canonical: '/why-salency' },
  openGraph: {
    title: 'Why Salency',
    description:
      'AI notetakers record what was said. Salency solves what happens after. Institutional memory for revenue teams.',
    url: 'https://www.salency.ai/why-salency',
    type: 'website',
  },
};

export default function WhySalencyPage() {
  return (
    <div className="page why-salency-page">
      <JsonLd data={faqSchema} />
      <MarketingHeader />
      <section className="why-intro">
        <span className="eb">Why Salency</span>
        <h1 className="h1">
          Notetakers transcribe. CRMs overwrite.{' '}
          <span className="h1-italic">Salency remembers.</span>
        </h1>
        <p className="why-sub">
          The memory layer between your notetaker and your CRM.
        </p>
      </section>
      <DiffPairViewer />
      <ScrollReveal>
        <NotetakerCompareTable />
      </ScrollReveal>
      <PilotCtaSection />
      <SiteFooter />
      <TranscriptSnippetModalLazy />
    </div>
  );
}
