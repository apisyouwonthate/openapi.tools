import { getCollection, getEntry } from 'astro:content';
import { html } from 'satori-html';
import type { CollectionFilters } from '@/content.config';
import { renderOgImage } from '@/utils/og';
import { isLegacy } from '@/utils/versionFilters';

export const prerender = false;

type OgRouteParams = {
  params: {
    slug: string;
  };
};

// Helper function to filter tools based on collection filters
function filterTools(
  tools: Awaited<ReturnType<typeof getCollection<'tools'>>>,
  filters: CollectionFilters | undefined
) {
  if (!filters) return tools;

  return tools.filter((tool) => {
    if (filters.legacy) {
      if (!isLegacy(tool.data)) return false;
    }
    if (filters.languages?.length) {
      const hasLang = filters.languages.some((l) => tool.data.languages?.[l]);
      if (!hasLang) return false;
    }
    if (filters.saas && !tool.data.languages?.saas) return false;
    if (filters.requireRepo && !tool.data.repo) return false;
    if (filters.requireVersions?.length) {
      const hasVersion = filters.requireVersions.some(
        (v) => tool.data.oasVersions?.[v]
      );
      if (!hasVersion) return false;
    }
    if (filters.requireBadges?.length) {
      const hasBadge = filters.requireBadges.some((badgeId) =>
        tool.data.badges?.some((badge) => badge.id === badgeId)
      );
      if (!hasBadge) return false;
    }
    return true;
  });
}

export const GET = async ({ params }: OgRouteParams) => {
  const { slug } = params;
  const collection = await getEntry('curated-collections', slug!);
  const title = collection?.data.name ?? 'OpenAPI Tools Collection';
  const description = collection?.data.description ?? '';

  // Get tool count for this collection
  const allTools = await getCollection('tools');
  const filteredTools = filterTools(allTools, collection?.data.filters);
  const toolCount = filteredTools.length;

  const markup = html(`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(45,26,84); font-size: 32px; font-weight: 600; padding: 40px;"
  >
    <div
      style="font-size: 24px; color: rgb(134, 239, 172); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;"
    >
      OpenAPI.tools Collection
    </div>
    <div
      style="font-size: 70px; display: flex; flex-direction: column; color: white; text-align: center;"
    >
      ${title}
    </div>
    <div
      style="font-size: 28px; color: rgb(203, 213, 225); margin-top: 20px; text-align: center; max-width: 900px;"
    >
      ${description}
    </div>
    <div
      style="font-size: 24px; color: rgb(134, 239, 172); margin-top: 30px;"
    >
      ${toolCount} tools in this collection
    </div>
  </div>`);

  return renderOgImage(markup);
};
