import type { ReactNode } from 'react';

export interface PostHeading {
  id: string;
  title: string;
}

export interface Post {
  slug: string;
  title: string;
  dek: string;
  description: string;
  authorId: string;
  publishedAt: string;
  readMinutes?: number;
  category?: string;
  headings?: PostHeading[];
  body: ReactNode;
}
