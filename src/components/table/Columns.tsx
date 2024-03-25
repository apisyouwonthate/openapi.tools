import { type ColumnDef } from '@tanstack/react-table';
import type { Category, Tool } from 'src/content/config';

import { GitHubIcon } from '../GitHubIcon';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const ToolColumns: ColumnDef<Tool & { slug: string }>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <a
        href={`/tools/${row.original.slug}`}
        className="group text-slate-800 no-underline dark:text-slate-200"
      >
        <span className="font-medium text-emerald-600 group-hover:underline dark:text-emerald-300">
          {row.getValue('name')}
        </span>{' '}
        <span className="font-normal">{row.original.description}</span>
      </a>
    ),
  },
  {
    accessorKey: 'openApiVersions',
    header: 'OpenAPI Versions',
    cell: ({ row }) => {
      const versions = Object.entries(row.original.openApiVersions)
        .filter(([, value]) => value)
        .map(([key]) => key.replace('_', '.'));

      return versions.reverse().join(', ');
    },
  },
  {
    accessorKey: 'urls',
    header: 'Links',
    cell: ({ row }) => (
      <div className="flex flex-col space-y-1">
        {row.original.link && (
          <a
            href={row.original.link}
            className="text-emerald-600 dark:text-emerald-300"
          >
            Website
          </a>
        )}

        {row.original.github && (
          <a
            href={row.original.github}
            className="text-emerald-600 dark:text-emerald-300"
          >
            <GitHubIcon className="inline-block h-4 w-4 fill-white" />
            githubbb
          </a>
        )}
      </div>
    ),
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
