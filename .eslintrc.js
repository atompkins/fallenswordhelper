module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": { "impliedStrict": true }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "greasemonkey": true
  },
  "globals": {
    "FSH": true,
    "localforage": false,
    "ga": false,
    "GameData": false
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-extra-parens": ["error"],
    // "no-prototype-builtins": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unsafe-negation": ["error"],
    "accessor-pairs": ["error"],
    "array-callback-return": ["error"],
    "block-scoped-var": ["error"],
    "class-methods-use-this": ["error"],
    "complexity": ["warn", 39],
    // "consistent-return": ["error"],
    "curly": ["error"],
    "default-case": ["error"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error"],
    "eqeqeq": ["error"],
    "guard-for-in": ["error"],
    "no-alert": ["warn"],
    "no-caller": ["error"],
    "no-div-regex": ["error"],
    "no-else-return": ["error"],
    "no-empty-function": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    // "no-invalid-this": ["error"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    // "no-magic-numbers": ["error", {
    //   "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 60, 100, 1000],
    //   "ignoreArrayIndexes": true
    // }],
    "no-multi-spaces": ["error"],
    "no-multi-str": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-new": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-proto": ["error"],
    "no-restricted-properties": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-return": ["error"],
    "no-void": ["error"],
    // "no-warning-comments": ["error"],
    "no-with": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "radix": ["error"],
    "require-await": ["error"],
    // "vars-on-top": ["error"],
    "wrap-iife": ["error", "outside"],
    "yoda": ["error"],

    // "strict": ["error"],

    // "init-declarations": ["error"],
    "no-catch-shadow": ["error"],
    "no-label-var": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-shadow": ["error"],
    "no-undef-init": ["error"],
    "no-undefined": ["error"],
    // "no-use-before-define": ["error"],

    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    // "camelcase": ["error", {"properties": "always"}],
    // "capitalized-comments": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "comma-spacing": ["error"],
    "comma-style": ["error"],
    "computed-property-spacing": ["error"],
    "consistent-this": ["error", "that"],
    "eol-last": ["error"],
    "func-call-spacing": ["error"],
    "func-name-matching": ["error"],
    // "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration"],
    // "id-blacklist": ["error", "data", "callback"],
    // "id-length": ["error"],
    // "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"],
    "indent": ["error", 2],
    "key-spacing": ["error"],
    "keyword-spacing": ["error"],
    // "line-comment-position": ["error", {"position": "beside"}],
    "linebreak-style": ["error", "windows"],
    // "lines-around-comment": ["error", {"beforeBlockComment": true}],
    // "lines-around-directive": ["error", "always"],
    "max-depth": ["error", 5],
    "max-len": ["error", {
      "code": 80,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }],
    "max-lines": ["error", 800],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 5],
    "max-statements-per-line": ["error", { "max": 3 }],
    "max-statements": ["error", 66],
    "no-lonely-if": ["error"],
    "no-multi-assign": ["error"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 1
    }],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-plusplus": ["error"],
    "no-tabs": ["error"],
    // "no-ternary": ["error"],
    "no-trailing-spaces": ["error"],
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-whitespace-before-property": ["error"],
    "object-curly-newline": ["error", { "multiline": true }],
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": ["error",
      { "allowMultiplePropertiesPerLine": true }],
    "one-var-declaration-per-line": ["error", "always"],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    // "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed", {"keywords": true, "numbers": true}],
    "quotes": ["error", "single"],
    "semi-spacing": ["error"],
    "semi": ["error", "always"],
    "space-before-blocks": ["error"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "spaced-comment": ["warn", "always", {"line": {
      "markers": ["#if"],
      "exceptions": ["#endif"]
    }}],

    "no-duplicate-imports": ["error", { "includeExports": true }],
    "sort-imports": ["error", {
      "memberSyntaxSortOrder": [
        'none', 'single', 'all', 'multiple'
      ]
    }],
  }
};