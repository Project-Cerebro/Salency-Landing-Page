import type { Metadata } from 'next';
import Link from 'next/link';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { SubscribeForm } from '@/components/SubscribeForm';
import { POSTS } from '@/content/posts';
import { FOUNDERS } from '@/lib/founders';

export const metadata: Metadata = {
  title: 'Build log · Salency',
  description:
    'Long-form thinking on institutional memory, sales call intelligence, and the layer between the call recording and the rep who inherits the account.',
  alternates: { canonical: '/blog' },
  robots: { index: true, follow: true },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const featured = sorted[0];
  const featuredAuthor = featured
    ? FOUNDERS.find((f) => f.id === featured.authorId)
    : undefined;

  return (
    <div className="page">
      <MarketingHeader />
      <main className="blog-page">
        <span className="eb">Salency build log</span>
        <h1 className="blog-h1">Long-form thinking from the team building it.</h1>
        <p className="blog-sub">
          Institutional memory, sales call intelligence, and the layer between the
          call recording and the rep who inherits the account.
        </p>

        {featured && (
          <Link href={`/blog/${featured.slug}`} className="blog-featured">
            <div className="blog-featured-cover" aria-hidden="true" />
            <div className="blog-featured-body">
              <div className="blog-featured-meta">
                <span className="cat">Strategy</span>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>{featured.readMinutes ?? 5} min read</span>
              </div>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-dek">{featured.dek}</p>
              <div className="blog-featured-author">
                <span className="avatar" aria-hidden="true" />
                <span className="author-name">
                  {featuredAuthor?.name ?? 'Salency'}
                </span>
              </div>
            </div>
          </Link>
        )}

        <aside className="blog-subscribe">
          <div className="blog-subscribe-copy">
            <span className="sub-eb">Notes from building Salency</span>
            <h3>
              Customer interviews, product calls, <em>pilot results.</em>
            </h3>
            <p>
              Notes from building Salency. Customer interviews, product calls,
              pilot results. One essay a month, sometimes two. No newsletter
              cruft.
            </p>
          </div>
          <SubscribeForm />
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
