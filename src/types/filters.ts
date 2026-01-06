export type LanguageOption = {
  value: string;
  label: string;
  count: number;
};

export type LanguageFilterState = {
  selectedLanguages: string[];
  availableLanguages: LanguageOption[];
};
