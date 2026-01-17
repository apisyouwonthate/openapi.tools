import ogs from 'open-graph-scraper';
import type { Tool } from 'src/content.config';

export const enrichFeaturedArticles = async (tool: Tool) => {
  const results = [];

  for (const article of tool?.featuredArticles || []) {
    try {
      const ogData = await ogs({ url: article.url });
      results.push({
        ...article,
        og: ogData.result,
      });
    } catch (error) {
      console.error(`Failed to fetch OG data for ${article.url}:`, error);
      results.push({
        ...article,
        og: undefined,
      });
    }
  }

  return results;
};

export default enrichFeaturedArticles;
