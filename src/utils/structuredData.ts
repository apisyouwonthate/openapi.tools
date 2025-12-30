import type {
  BreadcrumbList,
  CollectionPage,
  Organization,
  SoftwareApplication,
  WebSite,
  WithContext,
} from 'schema-dts';

const SITE_URL = 'https://openapi.tools';
const ORG_NAME = "APIs You Won't Hate";
const ORG_URL = 'https://apisyouwonthate.com';

/**
 * Generate WebSite structured data
 */
export function createWebSiteSchema(description: string): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OpenAPI.tools',
    url: SITE_URL,
    description,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: ORG_URL,
    },
  };
}

/**
 * Generate Organization structured data
 */
export function createOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: ORG_URL,
    logo: `${SITE_URL}/android-icon-192x192.png`,
    sameAs: [
      'https://twitter.com/apisyouwonthate',
      'https://github.com/apisyouwonthate',
    ],
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate SoftwareApplication structured data for tool pages
 */
export function createSoftwareApplicationSchema(tool: {
  name: string;
  description: string;
  link?: string;
  slug: string;
}): WithContext<SoftwareApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'DeveloperApplication',
    url: tool.link || `${SITE_URL}/tools/${tool.slug}`,
    operatingSystem: 'Cross-platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

/**
 * Generate CollectionPage structured data for category pages
 */
export function createCollectionPageSchema(category: {
  name: string;
  description: string;
  slug: string;
  tools: Array<{ name: string; slug: string }>;
}): WithContext<CollectionPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `${SITE_URL}/categories/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: category.tools.length,
      itemListElement: category.tools.slice(0, 10).map((tool, index) => ({
        '@type': 'ListItem' as const,
        position: index + 1,
        name: tool.name,
        url: `${SITE_URL}/tools/${tool.slug}`,
      })),
    },
  };
}

/**
 * Serialize structured data to JSON string for embedding in HTML
 */
export function serializeSchema<T>(schema: T): string {
  return JSON.stringify(schema);
}
