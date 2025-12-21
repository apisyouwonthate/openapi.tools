import { useState, useEffect, useCallback } from 'react';

const QUERY_PARAM = 'languages';

export function useLanguageFilter() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Read from URL on mount (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const languages = params.get(QUERY_PARAM);

    if (languages) {
      setSelectedLanguages(languages.split(',').filter(Boolean));
    }
    setIsInitialized(true);
  }, []);

  // Update URL when selection changes
  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') return;

    const url = new URL(window.location.href);

    if (selectedLanguages.length > 0) {
      url.searchParams.set(QUERY_PARAM, selectedLanguages.join(','));
    } else {
      url.searchParams.delete(QUERY_PARAM);
    }

    window.history.replaceState({}, '', url.toString());
  }, [selectedLanguages, isInitialized]);

  const clearFilters = useCallback(() => {
    setSelectedLanguages([]);
  }, []);

  const toggleLanguage = useCallback((language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  }, []);

  return {
    selectedLanguages,
    setSelectedLanguages,
    toggleLanguage,
    clearFilters,
    isInitialized,
  };
}
