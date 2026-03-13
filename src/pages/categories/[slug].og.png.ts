import { getCollection, getEntry } from 'astro:content';
import { html } from 'satori-html';

import { renderOgImage } from '@/utils/og';

export const prerender = false;

type OgRouteParams = {
  params: {
    slug: string;
  };
};

export const GET = async ({ params }: OgRouteParams) => {
  const { slug } = params;
  const category = await getEntry('categories', slug!);
  const title = category?.data.name ?? 'OpenAPI Tools';
  const description = category?.data.description ?? '';

  // Get tool count for this category
  const categoryIdWithoutExt = category?.id.replace(/\.md$/, '') ?? '';
  const allTools = await getCollection('tools');
  const toolCount = allTools.filter((tool) => {
    if (!tool.data.categories) return false;
    return tool.data.categories.some((cat) => cat.id === categoryIdWithoutExt);
  }).length;

  const markup = html(`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(45,26,84); font-size: 32px; font-weight: 600; padding: 40px;"
  >
    <div
      style="font-size: 24px; color: rgb(134, 239, 172); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;"
    >
      OpenAPI.tools
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
      ${toolCount} tools available
    </div>
  </div>`);

  return renderOgImage(markup);
};
