import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { JsonLd } from '@/components/JsonLd';
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
    mainEntityOfPage: `https://www.salency.ai/blog/${post.slug}`,
  };

  return (
    <div className="page">
      <JsonLd data={articleSchema} />
      <MarketingHeader />
      <main className="post-page">
        <article className="post-article">
          <div className="post-meta-top">
            <Link href="/blog" className="post-back">
              ← Build log
            </Link>
            <span className="post-date">
              {formatDate(post.publishedAt)} · By {authorName}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-dek">{post.dek}</p>
          <div className="post-body">{post.body}</div>
          <div className="post-footer">
            <p>
              Salency is institutional memory for B2B sales teams.{' '}
              <Link href="/why-salency">Read why Salency</Link>, or{' '}
              <Link href="/pilot">join the Spring 2026 pilot cohort</Link>.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
