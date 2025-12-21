import { Check, ChevronsUpDown, X } from 'lucide-react';

import type { LanguageOption } from '@/types/filters';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type LanguageFilterPopoverProps = {
  languages: LanguageOption[];
  selectedLanguages: string[];
  onToggleLanguage: (language: string) => void;
  onClearFilters: () => void;
};

export function LanguageFilterPopover({
  languages,
  selectedLanguages,
  onToggleLanguage,
  onClearFilters,
}: LanguageFilterPopoverProps) {
  const selectedCount = selectedLanguages.length;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="justify-between border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span className="flex items-center gap-2">
              Languages
              {selectedCount > 0 && (
                <Badge variant="secondary" className="ml-1 px-1.5 py-0.5">
                  {selectedCount}
                </Badge>
              )}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search languages..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => {
                  const isSelected = selectedLanguages.includes(language.value);
                  return (
                    <CommandItem
                      key={language.value}
                      value={language.label}
                      onSelect={() => onToggleLanguage(language.value)}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                          isSelected
                            ? 'bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="flex-1">{language.label}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {language.count}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedCount > 0 && (
        <>
          <div className="flex flex-wrap gap-1">
            {selectedLanguages.map((lang) => {
              const langOption = languages.find((l) => l.value === lang);
              return (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/60"
                  onClick={() => onToggleLanguage(lang)}
                >
                  {langOption?.label || lang}
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              );
            })}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-8 px-2 text-muted-foreground"
          >
            Clear all
          </Button>
        </>
      )}
    </div>
  );
}
