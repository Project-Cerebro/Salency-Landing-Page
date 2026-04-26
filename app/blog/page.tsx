import type { Metadata } from 'next';
import Link from 'next/link';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
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
  const posts = [...POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <div className="page">
      <MarketingHeader />
      <main className="blog-index">
        <header className="blog-index-head">
          <span className="eb">Salency build log</span>
          <h1>Long-form thinking from the team building it.</h1>
          <p className="blog-index-lede">
            Institutional memory, sales call intelligence, and the layer between
            the call recording and the rep who inherits the account.
          </p>
        </header>
        <ul className="blog-index-list">
          {posts.map((post) => {
            const author = FOUNDERS.find((f) => f.id === post.authorId);
            return (
              <li key={post.slug} className="blog-index-item">
                <Link href={`/blog/${post.slug}`} className="blog-index-link">
                  <span className="blog-index-date">
                    {formatDate(post.publishedAt)} · By {author?.name ?? 'Salency'}
                  </span>
                  <h2 className="blog-index-title">{post.title}</h2>
                  <p className="blog-index-dek">{post.dek}</p>
                  <span className="blog-index-cta">Read post →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
