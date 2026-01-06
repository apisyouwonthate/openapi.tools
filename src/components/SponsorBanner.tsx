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
  }, [sponsor, sponsors]);

  if (sponsors?.length === 0) return null;

  return (
    <section
      className={clsx(
        'z-20 flex w-full flex-col-reverse justify-between py-2 text-xs text-white md:flex-row md:gap-2',
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
        rel="noopener noreferrer"
        className={clsx('flex h-16 w-full rounded-xl')}
      >
        <div
          className={clsx(
            'flex w-full flex-row items-center gap-2 px-2 py-3 pr-4'
          )}
        >
          <span>
            Sponsored by{' '}
            <span className="text-pink-600 md:text-white">{sponsor.name}</span>{' '}
            - {sponsor.description}
            <span className="ml-2 hidden break-inside-avoid rounded-full bg-pink-600 px-4 whitespace-pre text-white hover:bg-pink-600/80 active:bg-pink-600/90 md:inline-block md:py-2">
              {sponsor.ctaText}
            </span>
          </span>
        </div>
      </a>
      <a className="flex items-center px-2 py-1 md:justify-end" href="/sponsor">
        <span className="text-white">Sponsor openapi.tools</span>
      </a>
    </section>
  );
};

export default SponsorBanner;
