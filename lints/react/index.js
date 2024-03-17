export default {
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  // Enforces consistent naming for boolean props
  "react/boolean-prop-naming": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  // Disallow usage of button elements without an explicit type attribute
  "react/button-has-type": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
  // Enforce using onChange or readonly attribute when checked is used
  "react/checked-requires-onchange-or-readonly": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  // Enforce all defaultProps have a corresponding non-required PropType
  "react/default-props-match-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  // Enforce consistent usage of destructuring assignment of props, state, and context
  "react/destructuring-assignment": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  // Disallow missing displayName in a React component definition
  "react/display-name": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  // Disallow certain props on components
  "react/forbid-component-props": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  // Disallow certain props on DOM Nodes
  "react/forbid-dom-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  // Disallow certain elements
  "react/forbid-elements": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // Disallow using another component's propTypes
  "react/forbid-foreign-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  // Disallow certain propTypes
  "react/forbid-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  // Enforce a specific function type for function components
  "react/function-component-definition": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
  // Ensure destructuring and symmetric naming of useState hook value and setter variables
  "react/hook-use-state": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
  // Enforce sandbox attribute on iframe elements
  "react/iframe-missing-sandbox": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  // Enforce boolean attributes notation in JSX
  "react/jsx-boolean-value": ["warn", "always"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  "react/jsx-child-element-spacing": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  // Enforce closing bracket location in JSX
  // Use similar stylistic rule instead
  "react/jsx-closing-bracket-location": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  // Enforce closing tag location for multiline JSX
  // Use similar stylistic rule instead
  "react/jsx-closing-tag-location": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  // Use similar stylistic rule instead
  "react/jsx-curly-brace-presence": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // Use similar stylistic rule instead
  "react/jsx-curly-newline": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  // Use similar stylistic rule instead
  "react/jsx-curly-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  // Enforce or disallow spaces around equal signs in JSX attributes
  // Use similar stylistic rule instead
  "react/jsx-equals-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // Disallow file extensions that may contain JSX
  "react/jsx-filename-extension": ["error", { allow: "always", extensions: [".tsx"] }],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  // Enforce proper position of the first property in JSX
  // Use similar stylistic rule instead
  "react/jsx-first-prop-new-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  // Enforce shorthand or standard form for React fragments
  "react/jsx-fragments": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  // Enforce event handler naming conventions in JSX
  "react/jsx-handler-names": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  // Enforce JSX indentation
  // Use similar stylistic rule instead
  "react/jsx-indent": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  // Enforce props indentation in JSX
  // Use similar stylistic rule instead
  "react/jsx-indent-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  // Disallow missing key props in iterators/collection literals
  "react/jsx-key": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  // Enforce JSX maximum depth
  "react/jsx-max-depth": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // Enforce maximum of props on a single line in JSX
  // Use similar stylistic rule instead
  "react/jsx-max-props-per-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
  // Require or prevent a new line after jsx elements and expressions
  // Use similar stylistic rule instead
  "react/jsx-newline": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  // Disallow .bind() or arrow functions in JSX props
  "react/jsx-no-bind": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  // Disallow comments from being inserted as text nodes
  "react/jsx-no-comment-textnodes": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // Disallows JSX context provider values from taking values that will cause needless renders
  "react/jsx-no-constructed-context-values": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  // Disallow duplicate properties in JSX
  "react/jsx-no-duplicate-props": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  // Disallow problematic leaked values from being rendered
  "react/jsx-no-leaked-render": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  // Disallow usage of string literals in JSX
  "react/jsx-no-literals": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  // Disallow usage of javascript: URLs
  "react/jsx-no-script-url": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  // Disallow target="_blank" attribute without rel="noreferrer"
  "react/jsx-no-target-blank": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  // Disallow undeclared variables in JSX
  "react/jsx-no-undef": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  // Disallow unnecessary fragments
  "react/jsx-no-useless-fragment": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  // Require one JSX element per line
  // Use similar stylistic rule instead
  "react/jsx-one-expression-per-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  // Enforce PascalCase for user-defined JSX components
  // Use similar stylistic rule instead
  "react/jsx-pascal-case": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  // Disallow multiple spaces between inline JSX props
  // Use similar stylistic rule instead
  "react/jsx-props-no-multi-spaces": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // Disallow JSX prop spreading
  "react/jsx-props-no-spreading": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  // Enforce props alphabetical sorting
  // Use similar stylistic rule instead
  "react/jsx-sort-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  // Enforce whitespace in and around the JSX opening and closing brackets
  // Use similar stylistic rule instead
  "react/jsx-tag-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  // Disallow React to be incorrectly marked as unused
  "react/jsx-uses-react": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  // Disallow variables used in JSX to be incorrectly marked as unused
  "react/jsx-uses-vars": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // Disallow missing parentheses around multiline JSX
  // Use similar stylistic rule instead
  "react/jsx-wrap-multilines": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  // Disallow when this.state is accessed within setState
  "react/no-access-state-in-setstate": ["error"]
};
