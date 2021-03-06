module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    jasmine: true,
    browser: true,
  },
  globals: {
  },
  parserOptions: {
    "ecmaVersion": 2018
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    'function-paren-newline': 0,
    'no-bitwise': 'off',
    'no-var': 'error',
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'prefer-const': 'error',
    'semi': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    camelcase: 'off',
    'max-len': [
      2, {
        code: 120,
        ignoreUrls: true
      }
    ],
    'sort-imports': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    single: 'single',
    'prefer-destructuring': [2,
      {
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    'no-throw-literal': 0,
    'no-await-in-loop': 0,
    'no-constant-condition': 0,
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 10, consistent: true },
      ObjectPattern: { multiline: true, minProperties: 10, consistent: true },
      ImportDeclaration: { multiline: true, minProperties: 10, consistent: true },
      ExportDeclaration: { multiline: true, minProperties: 10, consistent: true }
    }],
    'object-curly-spacing': ["error", "always"],
  },
};
