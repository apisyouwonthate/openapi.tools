import { type ColumnDef } from '@tanstack/react-table';
import type { Category, Tool } from 'src/content/config';

import Badge from '../Badge';
import RepoIcon from '../icons/RepoIcon';
import Link from '../Link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type ToolRowData = {
  tool: Tool;
  slug: string;
  category?: Category;
};

export const ToolColumns: ColumnDef<ToolRowData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const { tool, slug } = row.original;
      return (
        <Link
          href={`/tools/${slug}`}
          className="group flex flex-row items-center space-x-2 text-slate-800 no-underline hover:underline dark:text-slate-200"
        >
          {tool?.sponsorship && <Badge variant="green">Sponsored</Badge>}
          <span className="whitespace-pre font-medium text-emerald-600 group-hover:underline dark:text-emerald-300">
            {row.getValue('name')}
          </span>{' '}
          <span className="font-normal">{tool?.description}</span>
        </Link>
      );
    },
  },
  {
    accessorKey: 'openApiVersions',
    header: 'OpenAPI Versions',
    cell: ({ row }) => {
      const tool = row.original.tool;
      const versions = Object.entries(tool?.openApiVersions || {})
        .filter(([, value]) => value)
        .map(([key]) => key.replace('_', '.'));

      return versions.reverse().join(', ');
    },
  },
  {
    accessorKey: 'urls',
    header: 'Links',
    cell: ({ row }) => {
      const { tool, category } = row.original;
      return (
        <div className="flex flex-col space-y-1">
          {tool?.link && (
            <Link
              href={tool.link}
              className="text-emerald-600 dark:text-emerald-300"
              category={category}
              linkPlacementDescription="category-landing-page-table"
            >
              Website
            </Link>
          )}

          {tool?.repo && (
            <Link
              category={category}
              linkPlacementDescription="category-landing-page-table"
              href={tool.repo}
              className="text-emerald-600 dark:text-emerald-300"
            >
              <RepoIcon
                className="inline-block h-4 w-4 fill-white"
                repo={tool.repo}
              />
            </Link>
          )}
        </div>
      );
    },
  },
];

export const CategoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];
