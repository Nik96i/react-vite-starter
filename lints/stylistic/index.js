export default {
  // https://eslint.style/rules/default/array-bracket-spacing
  "@stylistic/array-bracket-spacing": ["warn", "never"],

  // https://eslint.style/rules/default/arrow-parens
  "@stylistic/arrow-parens": ["warn", "always"],

  // https://eslint.style/rules/default/arrow-spacing
  "@stylistic/arrow-spacing": ["warn"],

  // https://eslint.style/rules/js/block-spacing
  "@stylistic/block-spacing": "warn",

  // https://eslint.style/rules/js/brace-style
  "@stylistic/brace-style": ["warn", "1tbs"],

  // https://eslint.style/rules/js/comma-dangle
  "@stylistic/comma-dangle": ["warn", "never"],

  // https://eslint.style/rules/js/comma-spacing
  "@stylistic/comma-spacing": "warn",

  // https://eslint.style/rules
  "@stylistic/comma-style": ["warn"],

  // https://eslint.style/rules/default/computed-property-spacing
  "@stylistic/computed-property-spacing": ["warn", "never"],

  // https://eslint.style/rules/default/dot-location
  "@stylistic/dot-location": ["warn", "property"],

  // https://eslint.style/rules/default/eol-last
  "@stylistic/eol-last": ["warn"],

  // https://eslint.style/rules/js/function-call-spacing
  "@stylistic/function-call-spacing": ["warn", "never"],

  // https://eslint.style/rules/default/function-paren-newline
  // TODO: Check this rules
  "@stylistic/function-paren-newline": ["warn", "multiline"],

  // https://eslint.style/rules/default/generator-star-spacing
  "@stylistic/generator-star-spacing": [
    "warn",
    {
      "before": false,
      "after": true
    }
  ],

  // https://eslint.style/rules/default/implicit-arrow-linebreak
  "@stylistic/implicit-arrow-linebreak": ["warn"],

  // https://eslint.style/rules/js/indent
  "@stylistic/indent": ["warn", 2],

  // https://eslint.style/rules/default/indent-binary-ops
  "@stylistic/indent-binary-ops": ["warn", 2],

  // https://eslint.style/rules/default/jsx-child-element-spacing
  "@stylistic/jsx-child-element-spacing": ["warn"],

  // https://eslint.style/rules/default/jsx-closing-bracket-location
  "@stylistic/jsx-closing-bracket-location": ["warn"],

  // https://eslint.style/rules/default/jsx-closing-tag-location
  "@stylistic/jsx-closing-tag-location": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-brace-presence
  "@stylistic/jsx-curly-brace-presence": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-newline
  "@stylistic/jsx-curly-newline": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-spacing
  "@stylistic/jsx-curly-spacing": ["warn"],

  // https://eslint.style/rules/default/jsx-equals-spacing
  "@stylistic/jsx-equals-spacing": ["warn"],

  // https://eslint.style/rules/default/jsx-first-prop-new-line
  "@stylistic/jsx-first-prop-new-line": ["warn"],

  // https://eslint.style/rules/default/jsx-indent
  "@stylistic/jsx-indent": ["warn", 2],

  // https://eslint.style/rules/default/jsx-indent-props
  "@stylistic/jsx-indent-props": ["warn", 2],

  // https://eslint.style/rules/default/jsx-max-props-per-line
  // "@stylistic/jsx/jsx-max-props-per-line": ["warn", 1],

  // https://eslint.style/rules/default/jsx-newline
  // "@stylistic/jsx/jsx-newline": ["warn", {prevent: false, allowMultilines: false}],

  // https://eslint.style/rules/default/jsx-one-expression-per-line
  "@stylistic/jsx-one-expression-per-line": ["warn", { allow: "single-child" }],

  // https://eslint.style/rules/default/jsx-pascal-case
  "@stylistic/jsx-pascal-case": ["warn"],

  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  "@stylistic/jsx-props-no-multi-spaces": ["warn"],

  // https://eslint.style/rules/default/jsx-quotes
  "@stylistic/jsx-quotes": ["warn"],

  // https://eslint.style/rules/default/jsx-self-closing-comp
  "@stylistic/jsx-self-closing-comp": ["warn"],

  // https://eslint.style/rules/default/jsx-sort-props
  // "@stylistic/jsx/jsx-sort-props": ["warn"],

  // https://eslint.style/rules/default/jsx-tag-spacing
  "@stylistic/jsx-tag-spacing": [
    "warn",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never"
    }
  ],

  // https://eslint.style/rules/default/jsx-wrap-multilines
  "@stylistic/jsx-wrap-multilines": [
    "warn",
    {
      declaration: "parens",
      assignment: "parens",
      return: "parens",
      arrow: "parens",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line"
    }
  ],

  // https://eslint.style/rules/js/key-spacing
  "@stylistic/key-spacing": "warn",

  // https://eslint.style/rules/js/keyword-spacing
  "@stylistic/keyword-spacing": "warn",

  // https://eslint.style/rules/default/linebreak-style
  "@stylistic/linebreak-style": "warn",

  // https://eslint.style/rules/js/lines-around-comment
  "@stylistic/lines-around-comment": [
    "warn",
    {
      "beforeBlockComment": true,
      "beforeLineComment": true,
      "allowBlockStart": true,
      "allowObjectStart": true,
      "allowArrayStart": true,
      "allowClassStart": true,
      "afterHashbangComment": true
    }
  ],

  // https://eslint.style/rules/js/lines-between-class-members
  "@stylistic/lines-between-class-members": [
    "warn",
    {
      "enforce": [
        {
          "blankLine": "never",
          "prev": "field",
          "next": "field"
        },
        {
          "blankLine": "always",
          "prev": "*",
          "next": "method"
        },
        {
          "blankLine": "always",
          "prev": "method",
          "next": "*"
        }
      ]
    }
  ],

  // https://eslint.style/rules/default/max-len
  "@stylistic/max-len": ["warn", { "code": 120 }],

  // https://eslint.style/rules/default/max-statements-per-line
  "@stylistic/max-statements-per-line": "warn",

  // https://eslint.style/rules/ts/member-delimiter-style
  "@stylistic/member-delimiter-style": "warn",

  // https://eslint.style/rules/default/new-parens
  "@stylistic/new-parens": "warn",

  // https://eslint.style/rules/default/newline-per-chained-call
  "@stylistic/newline-per-chained-call": "warn",

  // https://eslint.style/rules/default/no-confusing-arrow
  "@stylistic/no-confusing-arrow": "warn",

  // https://eslint.style/rules/js/no-extra-parens
  "@stylistic/no-extra-parens": "warn",

  // https://eslint.style/rules/js/no-extra-semi
  "@stylistic/no-extra-semi": "warn",

  // https://eslint.style/rules/default/no-floating-decimal
  "@stylistic/no-floating-decimal": "warn",

  // https://eslint.style/rules/default/no-mixed-operators
  "@stylistic/no-mixed-operators": "warn",

  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  "@stylistic/no-mixed-spaces-and-tabs": "warn",

  // no-mixed-spaces-and-tabs
  "@stylistic/no-multi-spaces": "warn",

  // https://eslint.style/rules/default/no-multiple-empty-lines
  "@stylistic/no-multiple-empty-lines": "warn",

  // https://eslint.style/rules/default/no-tabs
  "@stylistic/no-tabs": "warn",

  // https://eslint.style/rules/default/no-trailing-spaces
  "@stylistic/no-trailing-spaces": "warn",

  // https://eslint.style/rules/default/no-whitespace-before-property
  "@stylistic/no-whitespace-before-property": "warn",

  // https://eslint.style/rules/default/nonblock-statement-body-position
  "@stylistic/nonblock-statement-body-position": "warn",

  // https://eslint.style/rules/default/object-curly-newline
  "@stylistic/object-curly-newline": ["warn", { "multiline": true }],

  // https://eslint.style/rules/js/object-curly-spacing
  "@stylistic/object-curly-spacing": ["warn", "never"],

  // https://eslint.style/rules/default/object-property-newline
  "@stylistic/object-property-newline": "warn",

  // https://eslint.style/rules/default/operator-linebreak
  "@stylistic/operator-linebreak": ["warn", "after"],

  // https://eslint.style/rules/default/padded-blocks
  "@stylistic/padded-blocks": ["warn", "never"],

  // https://eslint.style/rules/ts/padding-line-between-statements
  "@stylistic/padding-line-between-statements": [
    "warn",
    {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    },
    {
      "blankLine": "always",
      "prev": "*",
      "next": "block-like"
    },
    {
      "blankLine": "always",
      "prev": "block-like",
      "next": "*"
    },
    {
      "blankLine": "always",
      "prev": "case",
      "next": "case"
    },
    {
      "blankLine": "never",
      "prev": "*",
      "next": "break"
    },
    {
      "blankLine": "always",
      "prev": "*",
      "next": "export"
    },
    {
      "blankLine": "always",
      "prev": "*",
      "next": "interface"
    },
    {
      "blankLine": "always",
      "prev": "interface",
      "next": "*"
    },
    {
      "blankLine": "always",
      "prev": "*",
      "next": "class"
    },
    {
      "blankLine": "always",
      "prev": "class",
      "next": "*"
    }
  ],

  // https://eslint.style/rules/default/quote-props
  "@stylistic/quote-props": ["warn", "always"],

  // https://eslint.style/rules/js/quotes
  "@stylistic/quotes": ["warn", "double"],

  // https://eslint.style/rules/default/rest-spread-spacing
  "@stylistic/rest-spread-spacing": ["warn"],

  // https://eslint.style/rules/js/semi
  "@stylistic/semi": ["warn", "always"],

  // https://eslint.style/rules/default/semi-spacing
  "@stylistic/semi-spacing": ["warn"],

  // https://eslint.style/rules/default/semi-style
  "@stylistic/semi-style": ["warn"],

  // https://eslint.style/rules/ts/space-before-blocks
  "@stylistic/space-before-blocks": ["warn", "always"],

  // https://eslint.style/rules/js/space-before-function-paren
  "@stylistic/space-before-function-paren": [
    "warn",
    {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }
  ],

  // https://eslint.style/rules/default/space-in-parens
  "@stylistic/space-in-parens": ["warn"],

  // https://eslint.style/rules/js/space-infix-ops
  "@stylistic/space-infix-ops": ["warn"],

  // https://eslint.style/rules/default/space-unary-ops
  "@stylistic/space-unary-ops": ["warn"],

  // https://eslint.style/rules/default/spaced-comment
  "@stylistic/spaced-comment": ["warn"],

  // https://eslint.style/rules/default/switch-colon-spacing
  "@stylistic/switch-colon-spacing": ["warn"],

  // https://eslint.style/rules/default/template-curly-spacing
  "@stylistic/template-curly-spacing": ["warn"],

  // https://eslint.style/rules/default/template-tag-spacing
  "@stylistic/template-tag-spacing": ["warn"],

  // https://eslint.style/rules/ts/type-annotation-spacing
  "@stylistic/type-annotation-spacing": ["warn"],

  // https://eslint.style/rules/default/type-generic-spacing
  "@stylistic/type-generic-spacing": ["warn"],

  // https://eslint.style/rules/default/type-named-tuple-spacing
  "@stylistic/type-named-tuple-spacing": ["warn"],

  // https://eslint.style/rules/default/wrap-iife
  "@stylistic/wrap-iife": ["warn", "inside"],

  // https://eslint.style/rules/default/yield-star-spacing
  "@stylistic/yield-star-spacing": ["warn", "after"]
};
