export interface Tool {
  name: string;
  category: string | string[];
  link?: string | null;
  github?: string | null;
  language?: string | null;
  description?: string | null;
  v2?: boolean;
  v3?: boolean;
  v3_1?: boolean;
  v3_2?: boolean;
  v3_1_link?: string | null;
  v3_2_link?: string | null;
  sponsored?: boolean;
  sponsoredDate?: string | null;
  testimonial?: string | null;
}

/**
 * Sort tools according to Jekyll logic:
 * 1. Sponsored tools first (sorted by sponsoredDate ascending)
 * 2. Non-sponsored tools grouped by version support:
 *    - v3.2 tools (alphabetically, case-insensitive)
 *    - v3.1 tools (not v3.2, alphabetically)
 *    - v3.0 tools (not v3.2 or v3.1, alphabetically)
 *    - No v3 tools (alphabetically)
 */
export function sortTools(tools: Tool[]): Tool[] {
  // Separate sponsored tools
  const sponsored = tools
    .filter(t => t.sponsored === true)
    .sort((a, b) => {
      const dateA = new Date(a.sponsoredDate || 0).getTime();
      const dateB = new Date(b.sponsoredDate || 0).getTime();
      return dateA - dateB;
    });

  const nonSponsored = tools.filter(t => !t.sponsored);

  // Group non-sponsored by version support (highest to lowest)
  const v3_2Tools = nonSponsored
    .filter(t => t.v3_2 === true)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const v3_1Tools = nonSponsored
    .filter(t => t.v3_2 !== true && t.v3_1 === true)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const v3Tools = nonSponsored
    .filter(t => t.v3_2 !== true && t.v3_1 !== true && t.v3 === true)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const noV3Tools = nonSponsored
    .filter(t => t.v3_2 !== true && t.v3_1 !== true && t.v3 !== true)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  // Concatenate all groups
  return [...sponsored, ...v3_2Tools, ...v3_1Tools, ...v3Tools, ...noV3Tools];
}

/**
 * Filter tools by category slug.
 * Handles both single category strings and category arrays.
 */
export function filterByCategory(tools: Tool[], slug: string): Tool[] {
  return tools.filter(tool => {
    if (Array.isArray(tool.category)) {
      return tool.category.includes(slug);
    }
    return tool.category === slug;
  });
}
