import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['tests/**/*.ts', 'e2e/**/*.ts', '**/*.spec.ts'],
    plugins: {
      playwright,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...playwright.configs.recommended.rules,

      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/expect-expect': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    ignores: [
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'dist/',
      'build/',
      'coverage/',
    ],
  },
];
