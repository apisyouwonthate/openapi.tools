import React from 'react';

const SITE_URL = process.env.node_env === 'production' ? 'https://openapi.tools' : 'http://localhost';

import posthog from 'posthog-js';
import generateUrlWithUTM from '@/utils/generateUrlWithUTM';
import type { Category } from 'src/content/config';

/**
 * The props for the Link component
 * @param {Category} category - The category of the tool
 * @param {string} linkPlacementDescription - The description of where the link is placed. This will be slugified and used as the utm_content parameter
 */
type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  category?: Category;
  linkPlacementDescription?: string;
};

const Link: React.FC<LinkProps> = ({
  href,
  target,
  rel,
  children,
  category,
  linkPlacementDescription,
  ...rest
}) => {
  const handleClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.href;

    // If the link is an outbound link, track it
    if (href.startsWith('http') && !href.startsWith(SITE_URL)) {
      posthog.capture('outbound_link_click', {
        href,
      });
    }
  }, []);

  const updatedUrl = React.useMemo(() => {
    if (!href) {
      return href;
    }

    if (href.startsWith('http') && !href.startsWith(SITE_URL)) {
      return generateUrlWithUTM({ url: href, category, linkPlacementDescription, });
    }

    return href;
  }, [category, href]);

  return (
    <a href={updatedUrl} target={target} rel={rel} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
