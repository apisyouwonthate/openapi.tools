import * as React from 'react';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type SearchFormProps = {
  defaultValue?: string;
  onSearch?: (query: string) => void;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  /** When true, prevents navigation on submit (for use on search page) */
  inline?: boolean;
};

export function SearchForm({
  defaultValue = '',
  onSearch,
  className,
  placeholder = 'Search tools...',
  autoFocus = false,
  inline = false,
}: SearchFormProps) {
  const [query, setQuery] = React.useState(defaultValue);
  const inputId = React.useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(query);
      return;
    }

    if (!inline && query.trim()) {
      // Navigate to search page - the Search component handles query from URL
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative', className)}
      role="search"
    >
      <label htmlFor={inputId} className="sr-only">
        Search
      </label>
      <Input
        id={inputId}
        name="q"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={autoFocus}
        autoComplete="off"
        className="border-slate-200 bg-white pl-8 dark:border-slate-700 dark:bg-slate-800"
      />
      <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
    </form>
  );
}
