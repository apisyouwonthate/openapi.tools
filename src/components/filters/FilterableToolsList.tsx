import { useMemo } from 'react';

import type { ToolRowData } from '@/components/table/Columns';
import { ToolColumns } from '@/components/table/ToolColumns';
import { DataTable } from '@/components/table/DataTable';
import { useLanguageFilter } from '@/hooks/useLanguageFilter';
import { extractLanguages, filterToolsByLanguages } from '@/utils/languageUtils';
import { LanguageFilterPopover } from './LanguageFilterPopover';

type FilterableToolsListProps = {
  tools: ToolRowData[];
};

export function FilterableToolsList({
  tools,
}: FilterableToolsListProps) {
  const columns = ToolColumns;
  const {
    selectedLanguages,
    toggleLanguage,
    clearFilters,
    isInitialized,
  } = useLanguageFilter();

  // Extract available languages from all tools
  const availableLanguages = useMemo(() => extractLanguages(tools), [tools]);

  // Filter tools based on selected languages
  const filteredTools = useMemo(
    () => filterToolsByLanguages(tools, selectedLanguages),
    [tools, selectedLanguages]
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

  return (
    <div className="not-prose space-y-4">
      {availableLanguages.length > 0 && (
        <LanguageFilterPopover
          languages={availableLanguages}
          selectedLanguages={selectedLanguages}
          onToggleLanguage={toggleLanguage}
          onClearFilters={clearFilters}
        />
      )}

      <div className="text-sm text-slate-600 dark:text-slate-400">
        Showing {filteredTools.length} of {tools.length} tools
        {selectedLanguages.length > 0 && (
          <span> matching selected languages</span>
        )}
      </div>

      <DataTable columns={columns} data={filteredTools} />
    </div>
  );
}
