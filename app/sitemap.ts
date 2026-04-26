import type { MetadataRoute } from 'next';

const BASE_URL = 'https://salency.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/why-salency', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/memory', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/pilot', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/our-story', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/investors', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
