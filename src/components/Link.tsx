import React from 'react';
import posthog from 'posthog-js';
import type { Category } from 'src/content/config';

import generateUrlWithUTM from '@/utils/generateUrlWithUTM';

const SITE_URL = import.meta.env.PROD
  ? 'https://openapi.tools'
  : 'http://localhost';

/**
 * The props for the Link component
 * @param {Category} category - The category of the tool
 * @param {string} linkPlacementDescription - The description of where the link is placed. This will be slugified and used as the utm_content parameter
 * @param {boolean} isSponsored - Whether this is a sponsored link (adds rel="sponsored" for FTC/Google compliance)
 */
type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  category?: Category;
  linkPlacementDescription?: string;
  isSponsored?: boolean;
};

const Link: React.FC<LinkProps> = ({
  href,
  target,
  rel,
  children,
  category,
  linkPlacementDescription,
  isSponsored,
  ...rest
}) => {
  // Compute rel attribute for external links
  // All external links get noopener/noreferrer for security
  // Sponsored links also get rel="sponsored nofollow" for FTC/Google compliance
  const computedRel = React.useMemo(() => {
    if (rel) return rel; // Allow explicit override

    const isExternal = href?.startsWith('http') && !href?.startsWith(SITE_URL);
    if (!isExternal) return undefined;

    const relParts = ['noopener', 'noreferrer'];
    if (isSponsored) {
      // Sponsored links should not pass PageRank and must be labeled as sponsored
      relParts.unshift('sponsored');
      relParts.push('nofollow');
    }
    return relParts.join(' ');
  }, [href, rel, isSponsored]);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.href;

      // If the link is an outbound link, track it
      if (href.startsWith('http') && !href.startsWith(SITE_URL)) {
        posthog.capture('outbound_link_click', {
          href,
        });
      }
    },
    []
  );

  const updatedUrl = React.useMemo(() => {
    if (!href) {
      return href;
    }

    if (href.startsWith('http') && !href.startsWith(SITE_URL)) {
      return generateUrlWithUTM({
        url: href,
        category,
        linkPlacementDescription,
      });
    }

    return href;
  }, [category, href, linkPlacementDescription]);

  return (
    <a
      href={updatedUrl}
      target={target}
      rel={computedRel}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
