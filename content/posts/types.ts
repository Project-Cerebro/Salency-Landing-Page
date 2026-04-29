import type { ReactNode } from 'react';

export interface Post {
  slug: string;
  title: string;
  dek: string;
  description: string;
  authorId: string;
  publishedAt: string;
  readMinutes?: number;
  body: ReactNode;
}
