import type React from 'react';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

export const GET = async () => {
  const markup = html(`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, rgb(45,26,84) 0%, rgb(30,58,95) 100%); font-size: 32px; font-weight: 600;"
  >
    <div
      style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center; padding: 40px;"
    >
      <div style="font-size: 80px; font-weight: bold; margin-bottom: 20px;">
        OpenAPI.tools
      </div>
      <div style="font-size: 36px; color: rgb(167, 243, 208); margin-bottom: 40px;">
        A comprehensive list of resources for OpenAPI developers
      </div>
      <div style="font-size: 24px; color: rgb(203, 213, 225);">
        Brought to you by APIs You Won't Hate
      </div>
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
