import ogs from 'open-graph-scraper';
import type { Tool } from 'src/content/config';

export const enrichFeaturedArticles = async (tool: Tool) => {
  const results = [];

  for (const article of tool?.featuredArticles || []) {
    const ogData = await ogs({ url: article.url });
    results.push({
      ...article,
      og: ogData.result,
    });
  }

  return results;
};

export default enrichFeaturedArticles;
