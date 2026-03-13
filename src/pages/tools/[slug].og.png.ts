import { getEntry } from 'astro:content';
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
  const tool = await getEntry('tools', slug!);
  const title = tool?.data.name ?? 'Openapi.tools';

  const markup = html(`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(45,26,84); font-size: 32px; font-weight: 600;"
  >
    <div
      style="font-size: 70px; margin-top: 38px; display: flex; flex-direction: column; color: white;"
    >
      ${title}
    </div>
  </div>`);

  return renderOgImage(markup);
};
