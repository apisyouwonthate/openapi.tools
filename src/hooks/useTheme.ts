import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark' | 'system';

const THEME_CHANGE_EVENT = 'theme-change';

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = () => {
    if (!localStorage.getItem('theme')) {
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    mediaQuery.removeEventListener('change', handleChange);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  if (typeof document === 'undefined') return 'system';
  const storedTheme = localStorage.getItem('theme');

  if (!storedTheme) return 'system';
  return storedTheme as Theme;
}

function getServerSnapshot() {
  return 'system' as Theme;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (newTheme: Theme | string) => {
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return [theme, setTheme] as const;
}
