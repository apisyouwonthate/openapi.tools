module.exports = {
  ignorePatterns: [
    '.eslintrc.cjs',
    '**/*.config.js',
    '**/*.config.cjs',
    '**/*.config.mjs',
    'pnpm-lock.yaml',
  ],
  extends: [
    'eslint:recommended',
    'love',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:astro/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/member-delimiter-style": {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      },
    }
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'love',
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        ""
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
};
