import * as React from 'react';
import { Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

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
    } else if (!inline && query.trim()) {
      // Navigate to search page
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative', className)}
      role="search"
      action="/search"
      method="get"
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
        className="pl-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
      />
      <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
    </form>
  );
}
