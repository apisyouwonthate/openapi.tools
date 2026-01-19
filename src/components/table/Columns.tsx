import { type ColumnDef } from '@tanstack/react-table';
import type { Category, Tool } from 'src/content/config';
import { isSponsorshipActive } from 'src/utils/sponsorship';

import { getDeviconClassName } from '@/utils/languageUtils';
import Badge from '../Badge';
import RepoIcon from '../icons/RepoIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import Link from '../Link';

// This type is used to define the shape of our data.
export type ToolRowData = {
  tool: Tool;
  slug: string;
  category?: Category;
};

// Reusable version badge component
export const VersionBadge = ({
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

export const createNameColumn = (): ColumnDef<ToolRowData> => ({
  accessorKey: 'name',
  header: 'Name',
  cell: ({ row }) => {
    const { tool, slug } = row.original;
    return (
      <>
        <Link
          href={`/tools/${slug}`}
          data-astro-prefetch
          className="group inline-flex flex-row items-center space-x-2 text-slate-800 no-underline hover:underline dark:text-slate-200"
        >
          {isSponsorshipActive(tool) && (
            <Badge variant="green">Sponsored</Badge>
          )}
          <span className="font-bold whitespace-pre text-emerald-600 group-hover:underline dark:text-emerald-300">
            {tool.name}
          </span>
        </Link>{' '}
        <span className="font-normal">{tool?.description}</span>
      </>
    );
  },
});

export const createLanguagesColumn = (): ColumnDef<ToolRowData> => ({
  accessorKey: 'languages',
  header: 'Languages',
  cell: ({ row }) => {
    const tool = row.original.tool;
    const languages = tool?.languages;
    if (!languages || !Object.keys(languages).length) {
      return null;
    }
    return (
      <div className="flex flex-row flex-wrap gap-1">
        {Object.keys(languages).map((language) => (
          <i
            key={language}
            className={`devicon-${getDeviconClassName(language)}-plain text-lg text-slate-700 dark:text-slate-300`}
            title={language}
          />
        ))}
      </div>
    );
  },
});

// Version column with badge format (for collections)
export const createVersionBadgesColumn = (): ColumnDef<ToolRowData> => ({
  accessorKey: 'oasVersions',
  header: 'Version Support',
  cell: ({ row }) => {
    const tool = row.original.tool;
    const versions = tool?.oasVersions || {};

    return (
      <div className="flex min-w-[140px] flex-wrap gap-1">
        <VersionBadge supported={!!versions.v3_2} version="v3.2" />
        <VersionBadge supported={!!versions.v3_1} version="v3.1" />
        <VersionBadge supported={!!versions.v3} version="v3.0" />
      </div>
    );
  },
});

// Individual version column (for legacy page)
export const createIndividualVersionColumn = (
  version: 'v3' | 'v2',
  displayVersion: string
): ColumnDef<ToolRowData> => ({
  accessorKey: version,
  header: displayVersion,
  cell: ({ row }) => {
    const tool = row.original.tool;
    return (
      <div className="text-center font-semibold">
        {tool?.oasVersions?.[version] ? (
          <span className="text-green-600 dark:text-green-400">Yes</span>
        ) : (
          <span className="text-red-600 dark:text-red-400">No</span>
        )}
      </div>
    );
  },
});

export const createLinksColumn = (
  linkPlacementDescription: string
): ColumnDef<ToolRowData> => ({
  accessorKey: 'urls',
  header: 'Links',
  cell: ({ row }) => {
    const { tool, category } = row.original;
    const isSponsored = isSponsorshipActive(tool);
    return (
      <div className="flex flex-row items-center space-x-2">
        {tool?.link && (
          <Link
            href={tool.link}
            className="text-emerald-600 dark:text-emerald-300"
            category={category}
            linkPlacementDescription={linkPlacementDescription}
            isSponsored={isSponsored}
          >
            <WebsiteIcon className="inline-block h-4 w-4 fill-slate-800 dark:fill-white" />
          </Link>
        )}

        {tool?.repo && (
          <Link
            category={category}
            linkPlacementDescription={linkPlacementDescription}
            href={tool.repo}
            className="text-emerald-600 dark:text-emerald-300"
            isSponsored={isSponsored}
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
});
