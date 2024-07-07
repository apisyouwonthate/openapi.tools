import { useEffect, useState } from 'react';
import clsx from 'clsx';
import type { BannerSponsor } from 'src/content/config';

import generateUrlWithUTM from '@/utils/generateUrlWithUTM';

const SPONSOR_ROTATION_IN_SECONDS = 6;

const SponsorBanner = ({ sponsors }: { sponsors: BannerSponsor[] }) => {
  const [sponsor, setSponsor] = useState<BannerSponsor>(sponsors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = sponsors.indexOf(sponsor);
      setSponsor(sponsors[(index + 1) % sponsors.length]);
    }, 1000 * SPONSOR_ROTATION_IN_SECONDS);

    return () => clearInterval(interval);
  });

  if (sponsors?.length === 0) return null;

  return (
    <section
      className={clsx(
        'sticky top-0 z-20 flex w-full flex-row justify-between gap-2 text-xs text-white',
        // 'bg-gradient-to-r from-teal-400/30 via-teal-400 to-teal-400/30',
        'p-px font-medium text-slate-100/90',
        'bg-slate-800'
      )}
      id="sponsor-banner"
    >
      <a
        href={generateUrlWithUTM({
          url: sponsor.ctaUrl,
          linkPlacementDescription: 'rotating sponsor banner',
        })}
        target="_blank"
        className={clsx('roundex-xl flex h-16 w-full')}
      >
        <div
          className={clsx(
            'flex w-full flex-row items-center gap-2 px-2 py-3 pr-4'
          )}
        >
          Sponsored by {sponsor.name} - {sponsor.description}
          <span className="inline-block break-inside-avoid whitespace-pre rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-600/80 active:bg-pink-600/90">
            {sponsor.ctaText}
          </span>
        </div>
      </a>
      <a className="flex items-center justify-end px-2 py-3" href="/sponsor">
        <span className="text-white">Sponsor openapi.tools</span>
      </a>
    </section>
  );
};

export default SponsorBanner;
