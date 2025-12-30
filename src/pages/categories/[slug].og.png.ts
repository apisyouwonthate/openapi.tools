import React from 'react';
import { getCollection, getEntry } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

type OgRouteParams = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const categories = await getCollection('categories');
  return categories.map((category) => ({ params: { slug: category.slug } }));
}

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

  const Roboto = await fetch(
    'https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff'
  ).then((res) => res.arrayBuffer());

  const svg = await satori(markup as React.ReactNode, {
    fonts: [
      {
        name: 'Roboto',
        data: Roboto,
      },
    ],
    width: 1200,
    height: 630,
  });
  const png = sharp(Buffer.from(svg)).png();
  const response = await png.toBuffer();

  return new Response(new Uint8Array(response), {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
    },
  });
};
