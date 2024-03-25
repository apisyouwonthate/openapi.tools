// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

import { icons } from '../components/Icon';

const iconNames = Object.keys(icons);

// 2. Define your collection(s)
const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z
      .string()
      .optional()
      .refine((value) => !value || (value && iconNames.includes(value)), {
        message: 'Invalid icon name. Must be one of: ' + iconNames.join(', '),
      }),
  }),
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    categories: z.array(reference('categories')),
    languages: z.record(z.boolean()).optional(),
    link: z.string().url().optional(),
    openApiVersions: z.object({
      v2: z.boolean().optional(),
      v3: z.boolean().optional(),
      v3_1: z.boolean().optional(),
      v4: z.boolean().optional(),
    }),
    sponsorship: z
      .object({
        startDate: z.date(),
        endDate: z.date().optional(), // will be set when sponsorship ends
        url: z.string().url().optional(), // optionally override default link while sponsored
        testimonial: z.string().optional(), // optionally include a testimonial
      })
      .optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  categories: categoriesCollection,
  tools: toolsCollection,
};
