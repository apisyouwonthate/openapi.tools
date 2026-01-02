import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './Columns';
import {
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
} from './SharedColumns';

export const LegacyToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
  {
    accessorKey: 'v3',
    header: 'v3.0',
    cell: ({ row }) => {
      const tool = row.original.tool;
      return (
        <div className="text-center font-semibold">
          {tool?.openApiVersions?.v3 ? (
            <span className="text-green-600 dark:text-green-400">Yes</span>
          ) : (
            <span className="text-red-600 dark:text-red-400">No</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'v2',
    header: 'v2.0',
    cell: ({ row }) => {
      const tool = row.original.tool;
      return (
        <div className="text-center font-semibold">
          {tool?.openApiVersions?.v2 ? (
            <span className="text-green-600 dark:text-green-400">Yes</span>
          ) : (
            <span className="text-red-600 dark:text-red-400">No</span>
          )}
        </div>
      );
    },
  },
  createLinksColumn('legacy-page-table'),
];
