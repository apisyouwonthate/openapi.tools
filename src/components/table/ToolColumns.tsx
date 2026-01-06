import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './Columns';
import {
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
} from './SharedColumns';

export const ToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
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
  createLinksColumn('category-landing-page-table'),
];
