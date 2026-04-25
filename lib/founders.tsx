import { ReactNode } from 'react';

export type PhotoVariant = '' | 'photo--violet' | 'photo--teal' | 'photo--amber';

export interface Founder {
  id: string;
  name: string;
  role: string;
  initials: string;
  photoVariant: PhotoVariant;
  photoSrc?: string;
  shortBio: ReactNode;
  longBio: ReactNode;
}

export const FOUNDERS: Founder[] = [
  {
    id: 'howard',
    name: 'Howard Tam',
    role: 'Co-founder & CEO',
    initials: 'HT',
    photoVariant: '',
    shortBio: (
      <>
        Five founding-AE / BD seats in four years. Ran the HubSpot→Monday CRM
        migration at Sequence.
      </>
    ),
    longBio: (
      <>
        Five founding-AE/BD seats in four years —{' '}
        <em>Dora, Sequence, Treasure, Nijta, Viggle</em> (a16z). Ran the
        HubSpot→Monday CRM migration at Sequence. MBET, Waterloo. Pre-sales:
        led MUFG HK&rsquo;s first Panda Bond issuance.
      </>
    ),
  },
  {
    id: 'nikki',
    name: 'Nikki Ip',
    role: 'Co-founder & Product',
    initials: 'NI',
    photoVariant: 'photo--violet',
    shortBio: (
      <>
        Three years as a data analyst in B2B SaaS. Operations roles across
        banking and crypto before that.
      </>
    ),
    longBio: (
      <>
        Three years as a data analyst at Adaptavist Group, running operational
        reporting across <em>HubSpot, Snowflake, DBT</em>. Operations roles
        across banking and crypto before that.
      </>
    ),
  },
  {
    id: 'babajide',
    name: 'Babajide Okusanya',
    role: 'Founding Engineer',
    initials: 'BO',
    photoVariant: 'photo--teal',
    shortBio: (
      <>
        Scaled MakersValley from 0 to $2M ARR (6.5y, NYC). Ships
        provenance-tracked AI context systems.
      </>
    ),
    longBio: (
      <>
        Scaled <em>MakersValley</em> from 0 to $2M ARR (NYC, 6.5y) as an
        applied-AI operator. Trained 2,000+ engineers on AI-assisted workflows.
        Ships provenance-tracked AI context systems.
      </>
    ),
  },
  {
    id: 'shristi',
    name: 'Shristi Gartaula',
    role: 'Founding Designer',
    initials: 'SG',
    photoVariant: 'photo--amber',
    shortBio: (
      <>
        Shipped Salency&rsquo;s V1. Five years enterprise B2B design — Index
        Exchange, Myplanet, StatysTech.
      </>
    ),
    longBio: (
      <>
        Shipped Salency&rsquo;s V1. Five years enterprise B2B design — sole
        designer for <em>Index Exchange</em>&rsquo;s 10-engineer ad-tech
        platform. Fortune 500 HR interfaces at Myplanet.
      </>
    ),
  },
];
