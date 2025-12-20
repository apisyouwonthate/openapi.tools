import React, { useEffect, useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';

import { DarkIcon } from './icons/DarkIcon';
import { LightIcon } from './icons/LightIcon';

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
  // { name: 'System', value: 'system', icon: SystemIcon },
];

export function ThemeSelector(
  props: React.ComponentPropsWithoutRef<typeof Listbox<'div'>>
) {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage?.getItem('theme') ?? 'system';
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.classList.remove('dark');
      localStorage?.removeItem('theme');
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage?.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <Listbox as="div" value={theme} onChange={setTheme} {...props}>
      <Label className="sr-only">Theme</Label>
      <ListboxButton
        className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md ring-1 shadow-black/5 ring-black/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset"
        aria-label="Theme"
      >
        <LightIcon
          className={clsx(
            'h-4 w-4 dark:hidden',
            theme === 'system' ? 'fill-slate-400' : 'fill-emerald-400'
          )}
        />
        <DarkIcon
          className={clsx(
            'hidden h-4 w-4 dark:block',
            theme === 'system' ? 'fill-slate-400' : 'fill-emerald-400'
          )}
        />
      </ListboxButton>
      <ListboxOptions className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md ring-1 shadow-black/5 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {themes.map((theme) => (
          <ListboxOption
            key={theme.value}
            value={theme.value}
            className={({ focus, selected }) =>
              clsx(
                'flex cursor-pointer items-center rounded-[0.625rem] p-1 select-none',
                {
                  'text-emerald-500': selected,
                  'text-slate-900 dark:text-white': focus && !selected,
                  'text-slate-700 dark:text-slate-400': !focus && !selected,
                  'bg-slate-100 dark:bg-slate-900/40': focus,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset">
                  <theme.icon
                    className={clsx(
                      'h-4 w-4',
                      selected
                        ? 'fill-emerald-400 dark:fill-emerald-400'
                        : 'fill-slate-400'
                    )}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
