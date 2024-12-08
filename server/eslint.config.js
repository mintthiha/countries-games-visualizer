import globals from 'globals';
import js from '@eslint/js';

// config file from assignment 2

export default [
  // files to ignore entirely
  {
    ignores: [
      '**/node_modules/*', 
      '**/dist/*', 
      '**/build/*', 
      '**/webpack.config.{js,cjs}',
      'eslint.config.mjs',
    ],
  },
  //use recommended rules as a base for all files and then override
  js.configs.recommended,
  //override rules for all files
  {
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: 'module',
    },
    rules: {
    ////////// Possible Errors //////////
      'one-var': ['warn', 'never'],
      'no-undef': 'warn',
      'prefer-const': 'warn',
      'no-extra-parens': 'warn',
      'block-scoped-var': 'warn',
      'curly': ['warn', 'multi-line'],
      'no-await-in-loop': 'warn',
      'no-cond-assign': ['error', 'always'],
      'no-debugger': 'warn',
      'default-case': 'warn',
      'dot-location': ['warn', 'object'],
      'eqeqeq': 'warn',
      'no-alert': 'warn',
      'no-eq-null': 'warn',
      'no-eval': 'warn',
      'no-implicit-coercion': 'warn',
      'no-lone-blocks': 'error',
      'no-loop-func': 'warn',
      'no-multi-str': 'warn',
      'no-self-compare': 'warn',
      'strict': ['warn', 'global'],
      'no-lonely-if': 'warn',
      ////////// Style for Graded Submissions //////////
      'array-bracket-spacing': ['error', 'never'],
      'array-bracket-newline': ['error', 'consistent'],
      'indent': ['error', 2],
      'camelcase': 'error',
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'comma-style': ['error', 'last'],
      'brace-style': ['error'],
      'max-len': ['error', 100],
      'no-inline-comments': 'error',
      'no-tabs': 'error',
      'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
      'jsx-quotes': ['error', 'prefer-double'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'semi': 'error',
      'semi-spacing': 'error'
    }
  },
];
