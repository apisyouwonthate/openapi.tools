// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  tailwindConfig: './tailwind.config.js',
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '^(expo(.*)$)|^(expo$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '^@/layouts/(.*)$',
    '^@/ui/(.*)$',
    '^@/utils/(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',

    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
