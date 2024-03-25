import { type ColumnDef } from '@tanstack/react-table';
import type { Category, Tool } from 'src/content/config';

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
