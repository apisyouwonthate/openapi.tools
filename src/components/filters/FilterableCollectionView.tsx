import { useMemo } from 'react';

import type { ToolRowData } from '@/components/table/Columns';
import { CollectionToolColumns } from '@/components/table/CollectionToolColumns';
import { DataTable } from '@/components/table/DataTable';
import { useLanguageFilter } from '@/hooks/useLanguageFilter';
import { extractLanguages, filterToolsByLanguages } from '@/utils/languageUtils';
import { LanguageFilterPopover } from './LanguageFilterPopover';

type CategoryGroup = {
  id: string;
  name: string;
  description: string;
  tools: ToolRowData[];
};

type FilterableCollectionViewProps = {
  categoriesWithTools: CategoryGroup[];
  totalToolCount: number;
};

export function FilterableCollectionView({
  categoriesWithTools,
  totalToolCount,
}: FilterableCollectionViewProps) {
  const columns = CollectionToolColumns;
  const {
    selectedLanguages,
    toggleLanguage,
    clearFilters,
    isInitialized,
  } = useLanguageFilter();

  // Flatten all tools for language extraction
  const allTools = useMemo(
    () => categoriesWithTools.flatMap((cat) => cat.tools),
    [categoriesWithTools]
  );

  // Extract available languages from all tools
  const availableLanguages = useMemo(
    () => extractLanguages(allTools),
    [allTools]
  );

  // Filter and re-group tools by category
  const filteredCategoriesWithTools = useMemo(() => {
    if (selectedLanguages.length === 0) {
      return categoriesWithTools;
    }

    return categoriesWithTools
      .map((category) => ({
        ...category,
        tools: filterToolsByLanguages(category.tools, selectedLanguages),
      }))
      .filter((category) => category.tools.length > 0);
  }, [categoriesWithTools, selectedLanguages]);

  // Calculate filtered totals
  const filteredToolCount = useMemo(
    () => filteredCategoriesWithTools.reduce((sum, cat) => sum + cat.tools.length, 0),
    [filteredCategoriesWithTools]
  );

  // Show loading state briefly while reading URL params
  if (!isInitialized) {
    return (
      <div className="not-prose space-y-4">
        <div className="h-10 w-48 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-12">
          {categoriesWithTools.map((category) => (
            <section key={category.id}>
              <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200">
                {category.name}
                <span className="ml-2 text-base font-normal text-slate-500">
                  ({category.tools.length} tools)
                </span>
              </h2>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>
              <DataTable data={category.tools} columns={columns} />
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="not-prose space-y-6">
      {availableLanguages.length > 0 && (
        <LanguageFilterPopover
          languages={availableLanguages}
          selectedLanguages={selectedLanguages}
          onToggleLanguage={toggleLanguage}
          onClearFilters={clearFilters}
        />
      )}

      <p className="text-slate-600 dark:text-slate-400">
        Showing <strong>{filteredToolCount}</strong>
        {selectedLanguages.length > 0 && ` of ${totalToolCount}`} tools
        across <strong>{filteredCategoriesWithTools.length}</strong> categories
        {selectedLanguages.length > 0 && <span> matching selected languages</span>}
      </p>

      <div className="space-y-12">
        {filteredCategoriesWithTools.map((category) => (
          <section key={category.id}>
            <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200">
              {category.name}
              <span className="ml-2 text-base font-normal text-slate-500">
                ({category.tools.length} tools)
              </span>
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              {category.description}
            </p>
            <DataTable data={category.tools} columns={columns} />
          </section>
        ))}

        {filteredCategoriesWithTools.length === 0 && (
          <div className="py-12 text-center text-slate-500 dark:text-slate-400">
            No tools found matching the selected languages.
          </div>
        )}
      </div>
    </div>
  );
}
