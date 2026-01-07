import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const tools = await getCollection('tools');

  // Sort by name for consistent ordering
  const sortedTools = tools.sort((a, b) =>
    a.data.name.localeCompare(b.data.name)
  );

  return rss({
    title: 'OpenAPI.tools',
    description:
      'A comprehensive directory of tools for working with OpenAPI descriptions.',
    site: context.site ?? 'https://openapi.tools',
    items: sortedTools.map((tool) => ({
      title: tool.data.name,
      description: tool.data.description,
      link: `/tools/${tool.slug}`,
      // Note: pubDate omitted as tools don't have creation dates
    })),
    customData: `<language>en-us</language>`,
  });
}
