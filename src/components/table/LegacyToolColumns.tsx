import { type ColumnDef } from '@tanstack/react-table';

import Badge from '../Badge';
import RepoIcon from '../icons/RepoIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import Link from '../Link';
import type { ToolRowData } from './Columns';

export const LegacyToolColumns: ColumnDef<ToolRowData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const { tool, slug } = row.original;
      return (
        <>
          <Link
            href={`/tools/${slug}`}
            className="group inline-flex flex-row items-center space-x-2 text-slate-800 no-underline hover:underline dark:text-slate-200"
          >
            {tool?.sponsorship && <Badge variant="green">Sponsored</Badge>}
            <span className="font-bold whitespace-pre text-emerald-600 group-hover:underline dark:text-emerald-300">
              {tool.name}
            </span>
          </Link>{' '}
          <span className="font-normal">{tool?.description}</span>
        </>
      );
    },
  },
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
  {
    accessorKey: 'urls',
    header: 'Links',
    cell: ({ row }) => {
      const { tool, category } = row.original;
      return (
        <div className="flex flex-row items-center space-x-2">
          {tool?.link && (
            <Link
              href={tool.link}
              className="text-emerald-600 dark:text-emerald-300"
              category={category}
              linkPlacementDescription="legacy-page-table"
            >
              <WebsiteIcon className="inline-block h-4 w-4 fill-slate-800 dark:fill-white" />
            </Link>
          )}

          {tool?.repo && (
            <Link
              category={category}
              linkPlacementDescription="legacy-page-table"
              href={tool.repo}
              className="text-emerald-600 dark:text-emerald-300"
            >
              <RepoIcon
                className="inline-block h-4 w-4 fill-slate-800 dark:fill-white"
                repo={tool.repo}
              />
            </Link>
          )}
        </div>
      );
    },
  },
];
