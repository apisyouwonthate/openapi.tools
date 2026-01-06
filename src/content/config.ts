// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

import { icons } from '../components/Icon';

const iconNames = Object.keys(icons);

const BannerSponsorSchema = z.object({
  name: z.string(),
  description: z.string(),
  ctaText: z.string().max(20), // 20 characters max
  ctaUrl: z.string().url(),
});

export type BannerSponsor = z.infer<typeof BannerSponsorSchema>;

const CategorySchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z
    .string()
    .optional()
    .nullable()
    .refine((value) => !value || (value && iconNames.includes(value)), {
      message: 'Invalid icon name. Must be one of: ' + iconNames.join(', '),
    }),
});

export type Category = z.infer<typeof CategorySchema>;

const ToolSchema = z.object({
  name: z.string(),
  description: z.string(),
  categories: z.array(reference('categories')),
  languages: z.record(z.boolean()).optional(),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  openApiVersions: z.object({
    v2: z.boolean().optional(),
    v3: z.boolean().optional(),
    v3_1: z.boolean().optional(),
    v3_2: z.boolean().optional(),
  }),
  featuredArticles: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        date: z.date(),
      })
    )
    .optional(),
  sponsorship: z
    .object({
      startDate: z.date(),
      url: z.string().url().optional(), // optionally override default link while sponsored
      testimonial: z.string().optional(), // optionally include a testimonial
    })
    .optional(),
});

export type Tool = z.infer<typeof ToolSchema>;

const CollectionFiltersSchema = z.object({
  // Language filter - tool.languages[key] === true
  languages: z.array(z.string()).optional(),
  // Version filter - requires specific version support
  requireVersions: z
    .array(z.enum(['v2', 'v3', 'v3_1', 'v3_2']))
    .optional(),
  // Legacy filter - excludes v3.1+ support
  legacy: z.boolean().optional(),
  // Open source filter - must have repo URL
  requireRepo: z.boolean().optional(),
  // SaaS filter - tool.languages.saas === true
  saas: z.boolean().optional(),
});

const CollectionSchema = z.object({
  name: z.string(),
  description: z.string(),
  filters: CollectionFiltersSchema.optional(),
});

export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionFilters = z.infer<typeof CollectionFiltersSchema>;

// 2. Define your collection(s)
const bannerSponsorsCollection = defineCollection({
  type: 'content',
  schema: BannerSponsorSchema,
});

const categoriesCollection = defineCollection({
  type: 'content',
  schema: CategorySchema,
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: ToolSchema,
});

const curatedCollectionsCollection = defineCollection({
  type: 'content',
  schema: CollectionSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  categories: categoriesCollection,
  tools: toolsCollection,
  bannerSponsors: bannerSponsorsCollection,
  'curated-collections': curatedCollectionsCollection,
};
