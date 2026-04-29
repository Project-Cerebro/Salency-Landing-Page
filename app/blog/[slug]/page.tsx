import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { JsonLd } from '@/components/JsonLd';
import { FounderAvatar } from '@/components/FounderAvatar';
import { PostToc } from '@/components/PostToc';
import { ShareButtons } from '@/components/ShareButtons';
import { FOUNDERS } from '@/lib/founders';
import { getAllPostSlugs, getPostBySlug } from '@/content/posts';

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} · Salency`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.salency.ai${url}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = FOUNDERS.find((f) => f.id === post.authorId);
  const authorName = author?.name ?? 'Salency';
  const postUrl = `https://www.salency.ai/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: authorName,
      ...(author?.linkedin ? { url: author.linkedin } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Salency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.salency.ai/salency-mark.svg',
      },
    },
    mainEntityOfPage: postUrl,
  };

  return (
    <div className="page">
      <JsonLd data={articleSchema} />
      <MarketingHeader />

      <header className="post-hero">
        <div className="post-hero-inner">
          <div className="post-breadcrumb">
            <Link href="/blog">← Salency build log</Link>
          </div>
          <div className="post-meta-row">
            {post.category && <span className="cat">{post.category}</span>}
            {post.category && <span className="sep">·</span>}
            <span>{formatDate(post.publishedAt)}</span>
            <span className="sep">·</span>
            <span>{post.readMinutes ?? 5} min read</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-dek">{post.dek}</p>
        </div>
      </header>

      <main className="post-layout">
        <article className="post-article">
          <div className="post-body">{post.body}</div>
          <ShareButtons url={postUrl} title={post.title} />
        </article>

        {post.headings && post.headings.length > 0 && (
          <aside className="post-toc-rail">
            <PostToc sections={post.headings} />
          </aside>
        )}
      </main>

      {author && (
        <aside className="post-author-card">
          <div className="post-author-inner">
            <FounderAvatar founder={author} size={96} />
            <div className="post-author-meta">
              <span className="eb">— Author</span>
              <h3>{author.name}</h3>
              <span className="role">{author.role}, Salency</span>
              <p>{author.longBio}</p>
              <div className="post-author-links">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
                <a href="mailto:hello@salency.ai">Reach out →</a>
              </div>
            </div>
          </div>
        </aside>
      )}

      <div className="post-page-footer">
        <p>
          Salency is institutional memory for B2B sales teams.{' '}
          <Link href="/why-salency">Read why Salency</Link>, or{' '}
          <Link href="/pilot">join the Spring 2026 pilot cohort</Link>.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
