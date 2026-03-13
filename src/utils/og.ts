import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const FONT_PATH = fileURLToPath(
  new URL('../assets/fonts/Inter-Regular.woff', import.meta.url)
);

let fontData: ArrayBuffer | null = null;

async function getFont(): Promise<ArrayBuffer> {
  if (!fontData) {
    const buffer = await readFile(FONT_PATH);
    fontData = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    );
  }
  return fontData;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function renderOgImage(markup: any): Promise<Response> {
  const font = await getFont();

  const svg = await satori(markup, {
    fonts: [{ name: 'Inter', data: font }],
    width: 1200,
    height: 630,
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control':
        'public, s-maxage=31536000, stale-while-revalidate=86400',
    },
  });
}
