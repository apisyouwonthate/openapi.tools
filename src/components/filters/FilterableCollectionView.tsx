import { useMemo } from 'react';
import { X } from 'lucide-react';

import { CollectionToolColumns } from '@/components/table/CollectionToolColumns';
import type { ToolRowData } from '@/components/table/SharedColumns';
import { DataTable } from '@/components/table/DataTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  extractLanguages,
  extractPlatforms,
  filterToolsByLanguages,
} from '@/utils/languageUtils';
import { useLanguageFilter } from '@/hooks/useLanguageFilter';
import { FilterPopover } from './LanguageFilterPopover';

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
  const { selectedLanguages, toggleLanguage, clearFilters, isInitialized } =
    useLanguageFilter();

  // Flatten all tools for language extraction
  const allTools = useMemo(
    () => categoriesWithTools.flatMap((cat) => cat.tools),
    [categoriesWithTools]
  );

  // Extract available languages and platforms from all tools
  const availableLanguages = useMemo(
    () => extractLanguages(allTools),
    [allTools]
  );
  const availablePlatforms = useMemo(
    () => extractPlatforms(allTools),
    [allTools]
  );

  // Get labels for selected items
  const allOptions = useMemo(
    () => [...availableLanguages, ...availablePlatforms],
    [availableLanguages, availablePlatforms]
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
    () =>
      filteredCategoriesWithTools.reduce(
        (sum, cat) => sum + cat.tools.length,
        0
      ),
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

  const hasFilters = selectedLanguages.length > 0;

  return (
    <div className="not-prose space-y-6">
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

      <p className="text-slate-600 dark:text-slate-400">
        Showing <strong>{filteredToolCount}</strong>
        {hasFilters && ` of ${totalToolCount}`} tools across{' '}
        <strong>{filteredCategoriesWithTools.length}</strong> categories
        {hasFilters && <span> matching selected filters</span>}
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
