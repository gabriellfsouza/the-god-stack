module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  },
  rules: {
    semi: [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "max-len": 0,
    "no-shadow": 0,
    "arrow-body-style": 0,
    "global-require": 0,
    "no-unused-expressions": 0,
    "no-confusing-arrow": 0,
    "no-unused-vars": [2, { "ignoreRestSiblings": true }],
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/default-props-match-prop-types": 0,
    "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx"]}],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight", "to"],
      "aspects": ["noHref", "invalidHref", "preferButton"]
    }],
    "react/jsx-props-no-spreading": 0,
  },
};