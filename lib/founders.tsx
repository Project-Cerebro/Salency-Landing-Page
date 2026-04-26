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
  linkedin?: string;
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
        Four founding-AE / BD seats in five years. Ran the HubSpot→Monday CRM
        migration at Sequence.
      </>
    ),
    longBio: (
      <>
        Four founding-AE/BD seats in five years —{' '}
        <em>Sequence, Treasure, Nijta, Viggle</em> (a16z). Same handoff
        failure on every team. Ran the HubSpot→Monday CRM migration at
        Sequence. MBET, Waterloo. Earlier: MUFG HK, led their first Panda
        Bond issuance.
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
        reporting across <em>sales, services, and finance</em>. Operations
        roles across banking and crypto before that.
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
