import { type ColumnDef } from '@tanstack/react-table';

import Badge from '../Badge';
import RepoIcon from '../icons/RepoIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import Link from '../Link';
import type { ToolRowData } from './Columns';

export const createNameColumn = (): ColumnDef<ToolRowData> => ({
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
            className={`devicon-${language.toLowerCase().trim()}-plain text-lg text-slate-700 dark:text-slate-300`}
            title={language}
          />
        ))}
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
    return (
      <div className="flex flex-row items-center space-x-2">
        {tool?.link && (
          <Link
            href={tool.link}
            className="text-emerald-600 dark:text-emerald-300"
            category={category}
            linkPlacementDescription={linkPlacementDescription}
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
