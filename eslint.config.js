// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// Plugins
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        project: './tsconfig.eslint.json',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- React Hooks
      // Enforce Rules of Hooks
      'react-hooks/rules-of-hooks': 'error',
      // Verify the list of the dependencies for Hooks like useEffect and similar
      'react-hooks/exhaustive-deps': 'error',

      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowNullableEnum: false,
          allowAny: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
      ],
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintConfigPrettier
);
