import React from 'react';
import type { APIRoute } from 'astro';
import { getCollection, getEntryBySlug } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

export async function getStaticPaths() {
  const tools = await getCollection('tools');
  return tools.map((tool) => ({ params: { slug: tool.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  /// One line to get the tool from our collection using slug
  const tool = await getEntryBySlug('tools', slug!!);
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

  return new Response(response, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg',
      'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
    },
  });
};
