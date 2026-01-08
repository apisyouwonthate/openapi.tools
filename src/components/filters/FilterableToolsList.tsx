import { useMemo } from 'react';
import { X } from 'lucide-react';

import type { ToolRowData } from '@/components/table/SharedColumns';
import { DataTable } from '@/components/table/DataTable';
import { ToolColumns } from '@/components/table/ToolColumns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  extractLanguages,
  extractPlatforms,
  filterToolsByLanguages,
} from '@/utils/languageUtils';
import { useLanguageFilter } from '@/hooks/useLanguageFilter';
import { FilterPopover } from './LanguageFilterPopover';

type FilterableToolsListProps = {
  tools: ToolRowData[];
};

export function FilterableToolsList({ tools }: FilterableToolsListProps) {
  const columns = ToolColumns;
  const { selectedLanguages, toggleLanguage, clearFilters, isInitialized } =
    useLanguageFilter();

  // Extract available languages and platforms from all tools
  const availableLanguages = useMemo(() => extractLanguages(tools), [tools]);
  const availablePlatforms = useMemo(() => extractPlatforms(tools), [tools]);

  // Filter tools based on selected languages (includes both languages and platforms)
  const filteredTools = useMemo(
    () => filterToolsByLanguages(tools, selectedLanguages),
    [tools, selectedLanguages]
  );

  // Get labels for selected items
  const allOptions = useMemo(
    () => [...availableLanguages, ...availablePlatforms],
    [availableLanguages, availablePlatforms]
  );

  // Show loading state briefly while reading URL params
  if (!isInitialized) {
    return (
      <div className="not-prose space-y-4">
        <div className="h-10 w-48 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />
        <DataTable columns={columns} data={tools} />
      </div>
    );
  }

  const hasFilters = selectedLanguages.length > 0;

  return (
    <div className="not-prose space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <FilterPopover
          title="Languages"
          options={availableLanguages}
          selectedValues={selectedLanguages}
          onToggle={toggleLanguage}
        />
        <FilterPopover
          title="Platforms"
          options={availablePlatforms}
          selectedValues={selectedLanguages}
          onToggle={toggleLanguage}
        />

        {hasFilters && (
          <>
            <div className="flex flex-wrap gap-1">
              {selectedLanguages.map((value) => {
                const option = allOptions.find((o) => o.value === value);
                return (
                  <Badge
                    key={value}
                    variant="secondary"
                    className="cursor-pointer bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                    onClick={() => toggleLanguage(value)}
                  >
                    {option?.label || value}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                );
              })}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-8 px-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              Clear all
            </Button>
          </>
        )}
      </div>

      <div className="text-sm text-slate-600 dark:text-slate-400">
        Showing {filteredTools.length} of {tools.length} tools
        {hasFilters && <span> matching selected filters</span>}
      </div>

      <DataTable columns={columns} data={filteredTools} />
    </div>
  );
}
