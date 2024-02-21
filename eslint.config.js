// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

// Plugins
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";

import RRR from "./lints/stylistic/index.js";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    "ignores": ["dist"],
    "languageOptions": {
      "ecmaVersion": "latest",
      "parserOptions": {
        "ecmaFeatures": {"jsx": true},
        "project": "./tsconfig.eslint.json",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        "tsconfigRootDir": import.meta.dirname
      }
    },
    "plugins": {
      "@stylistic": stylistic,
      "react": react,
      "react-hooks": reactHooks,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      "react-refresh": reactRefresh
    },
    "rules": {
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": ["warn", {"allowConstantExport": true}],

      // --- React Hooks
      // Enforce Rules of Hooks
      "react-hooks/rules-of-hooks": "error",

      // Verify the list of the dependencies for Hooks like useEffect and similar
      "react-hooks/exhaustive-deps": "error",

      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          "allowString": false,
          "allowNumber": false,
          "allowNullableObject": false,
          "allowNullableBoolean": false,
          "allowNullableString": false,
          "allowNullableNumber": false,
          "allowNullableEnum": false,
          "allowAny": false,
          "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
        }
      ],

      ...RRR

    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintConfigPrettier
);
