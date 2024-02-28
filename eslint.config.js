import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'

// Plugins
// import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// import eslintConfigPrettier from "eslint-config-prettier";

// Custom Rules
import stylisticRules from "./lints/stylistic/index.js";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  stylistic.configs["recommended-flat"],
  
  // React Plugin
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Disable this rule because react 17 doesn't need to import React to use JSX
      "react/react-in-jsx-scope": "off",

      // Enforce Rules of Hooks
      "react-hooks/rules-of-hooks": "error",
      // Verify the list of the dependencies for Hooks like useEffect and similar
      "react-hooks/exhaustive-deps": "error",
      "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }]
    }
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // TODO: Enable this
      // Temporary disable this rule
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off"
    }
  },

  // Stylistic Rules
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: stylisticRules
  },

  {
    ignores: [
      "dist",
      "lints",
      "tailwind.config.js",
      "eslint.config.js",
      "vite.config.ts",
      "vite-env.d.ts",
      "postcss.config.js"
    ]
  },

  // eslintConfigPrettier
);
