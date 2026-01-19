import type { ToolRowData } from '@/components/table/Columns';
import type { LanguageOption } from '@/types/filters';

// Items that are platforms/tools rather than programming languages
const PLATFORMS = new Set([
  'cli',
  'desktop',
  'docker',
  'jekyll',
  'kubernetes',
  'nodejs',
  'saas',
  'terraform',
  'unity',
  'vscode extension',
  'web',
  'xslt',
  'yaml',
]);

const LANGUAGE_NAME_MAP: Record<string, string> = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  python: 'Python',
  golang: 'Go',
  java: 'Java',
  php: 'PHP',
  ruby: 'Ruby',
  csharp: 'C#',
  'dot-net': '.NET',
  node: 'Node.js',
  saas: 'SaaS',
  cli: 'CLI',
  kotlin: 'Kotlin',
  swift: 'Swift',
  rust: 'Rust',
  scala: 'Scala',
  perl: 'Perl',
  lua: 'Lua',
  vue: 'Vue',
  react: 'React',
  angular: 'Angular',
  svelte: 'Svelte',
  docker: 'Docker',
  kubernetes: 'Kubernetes',
  terraform: 'Terraform',
  groovy: 'Groovy',
  abap: 'ABAP',
  ballerina: 'Ballerina',
  ceylon: 'Ceylon',
  express: 'Express',
  fastapi: 'FastAPI',
  jekyll: 'Jekyll',
  unity: 'Unity',
  yaml: 'YAML',
  xslt: 'XSLT',
  web: 'Web',
  desktop: 'Desktop',
};

const DEVICON_NAME_MAP: Record<string, string> = {
  golang: 'go',
};

export function getDeviconClassName(lang: string): string {
  const lowercased = lang.toLowerCase().trim();
  return DEVICON_NAME_MAP[lowercased] || lowercased;
}

export function formatLanguageName(lang: string): string {
  const lowercased = lang.toLowerCase();
  if (LANGUAGE_NAME_MAP[lowercased]) {
    return LANGUAGE_NAME_MAP[lowercased];
  }
  // Capitalize first letter as fallback
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

export function extractLanguages(tools: ToolRowData[]): LanguageOption[] {
  const languageCounts = new Map<string, number>();

  tools.forEach(({ tool }) => {
    if (tool.languages) {
      Object.entries(tool.languages).forEach(([lang, supported]) => {
        if (supported && !PLATFORMS.has(lang.toLowerCase())) {
          languageCounts.set(lang, (languageCounts.get(lang) || 0) + 1);
        }
      });
    }
  });

  return Array.from(languageCounts.entries())
    .map(([value, count]) => ({
      value,
      label: formatLanguageName(value),
      count,
    }))
    .sort((a, b) => b.count - a.count); // Sort by popularity (most tools first)
}

export function extractPlatforms(tools: ToolRowData[]): LanguageOption[] {
  const platformCounts = new Map<string, number>();

  tools.forEach(({ tool }) => {
    if (tool.languages) {
      Object.entries(tool.languages).forEach(([lang, supported]) => {
        if (supported && PLATFORMS.has(lang.toLowerCase())) {
          platformCounts.set(lang, (platformCounts.get(lang) || 0) + 1);
        }
      });
    }
  });

  return Array.from(platformCounts.entries())
    .map(([value, count]) => ({
      value,
      label: formatLanguageName(value),
      count,
    }))
    .sort((a, b) => b.count - a.count); // Sort by popularity (most tools first)
}

export function filterToolsByLanguages(
  tools: ToolRowData[],
  selectedLanguages: string[]
): ToolRowData[] {
  if (selectedLanguages.length === 0) return tools;

  return tools.filter(({ tool }) => {
    if (!tool.languages) return false;
    // OR logic: tool matches if it has ANY of the selected languages
    return selectedLanguages.some((lang) => tool.languages?.[lang]);
  });
}
