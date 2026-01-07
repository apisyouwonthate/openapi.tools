import { type ColumnDef } from '@tanstack/react-table';

import RepoIcon from '../icons/RepoIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import Link from '../Link';
import type { ToolRowData } from './Columns';

const VersionBadge = ({
  supported,
  version,
}: {
  supported: boolean;
  version: string;
}) => (
  <span
    className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${
      supported
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        : 'bg-slate-100 text-slate-400 line-through dark:bg-slate-800 dark:text-slate-500'
    }`}
  >
    {version}
  </span>
);

export const CollectionToolColumns: ColumnDef<ToolRowData>[] = [
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
    accessorKey: 'openApiVersions',
    header: 'Version Support',
    cell: ({ row }) => {
      const tool = row.original.tool;
      const versions = tool?.openApiVersions || {};

      return (
        <div className="flex flex-wrap gap-1">
          <VersionBadge supported={!!versions.v3_1} version="v3.1" />
          <VersionBadge supported={!!versions.v3} version="v3.0" />
          <VersionBadge supported={!!versions.v2} version="v2.0" />
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
              linkPlacementDescription="collection-tools-table"
            >
              <WebsiteIcon className="inline-block h-4 w-4 fill-slate-800 dark:fill-white" />
            </Link>
          )}

          {tool?.repo && (
            <Link
              category={category}
              linkPlacementDescription="collection-tools-table"
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
