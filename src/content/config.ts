import { defineCollection, z } from 'astro:content';

const categories = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
  }))
});

const tools = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    category: z.union([z.string(), z.array(z.string())]),
    link: z.string().url().nullable().optional(),
    github: z.string().url().nullable().optional(),
    language: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    v2: z.boolean().optional(),
    v3: z.boolean().optional(),
    v3_1: z.boolean().optional(),
    v3_2: z.boolean().optional(),
    v3_1_link: z.string().url().nullable().optional(),
    v3_2_link: z.string().url().nullable().optional(),
    sponsored: z.boolean().optional(),
    sponsoredDate: z.string().nullable().optional(),
    testimonial: z.string().nullable().optional(),
  }))
});

export const collections = { categories, tools };
