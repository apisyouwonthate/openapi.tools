import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import ogs from 'open-graph-scraper';
import type { Tool } from 'src/content.config';

const CACHE_DIR = join(process.cwd(), '.cache');
const CACHE_FILE = join(CACHE_DIR, 'og-metadata.json');

type OgCache = Record<string, { result: Record<string, unknown>; fetchedAt: string }>;

function loadCache(): OgCache {
  try {
    if (existsSync(CACHE_FILE)) {
      return JSON.parse(readFileSync(CACHE_FILE, 'utf-8'));
    }
  } catch {
    // Corrupted cache, start fresh
  }
  return {};
}

function saveCache(cache: OgCache): void {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
  writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

const cache = loadCache();
let cacheModified = false;

// Write cache to disk when process exits
process.on('beforeExit', () => {
  if (cacheModified) {
    saveCache(cache);
  }
});

const enrichFeaturedArticles = async (tool: Tool) => {
  const results = [];

  for (const article of tool?.featuredArticles || []) {
    try {
      const cached = cache[article.url];
      if (cached) {
        results.push({ ...article, og: cached.result });
        continue;
      }

      const ogData = await ogs({ url: article.url });
      cache[article.url] = {
        result: ogData.result,
        fetchedAt: new Date().toISOString(),
      };
      cacheModified = true;
      results.push({ ...article, og: ogData.result });
    } catch (error) {
      console.error(`Failed to fetch OG data for ${article.url}:`, error);
      results.push({ ...article, og: undefined });
    }
  }

  return results;
};

export default enrichFeaturedArticles;
