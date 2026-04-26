import { post as institutionalMemoryAiBottleneck } from './institutional-memory-ai-bottleneck';
import type { Post } from './types';

export const POSTS: Post[] = [institutionalMemoryAiBottleneck];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
