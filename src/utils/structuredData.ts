import type {
  BreadcrumbList,
  CollectionPage,
  FAQPage,
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
  repo?: string;
  slug: string;
}): WithContext<SoftwareApplication> {
  const schema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'DeveloperApplication',
    url: tool.link || `${SITE_URL}/tools/${tool.slug}`,
    operatingSystem: 'Cross-platform',
  };

  // Add code repository if available
  if (tool.repo) {
    (schema as unknown as Record<string, unknown>).codeRepository = tool.repo;
  }

  return schema;
}

/**
 * Generate CollectionPage structured data for category and collection pages
 */
export function createCollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  tools: Array<{ name: string; url: string }>;
}): WithContext<CollectionPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.name,
    description: data.description,
    url: data.url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: data.tools.length,
      itemListElement: data.tools.slice(0, 10).map((tool, index) => ({
        '@type': 'ListItem' as const,
        position: index + 1,
        name: tool.name,
        url: tool.url,
      })),
    },
  };
}

/**
 * Generate FAQPage structured data for category pages
 */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

/**
 * Serialize structured data to JSON string for embedding in HTML
 * Escapes characters that could break out of a script tag to prevent XSS
 */
export function serializeSchema<T>(schema: T): string {
  return JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}
