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
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
