require('@ssg/eslint-config-bases/patch/modern-module-resolution');

const { getDefaultIgnorePatterns } = require('@ssg/eslint-config-bases/helpers');

module.exports = {
  root: true,
  extends: [
    '@ssg/eslint-config-bases/prettier',
    '@ssg/eslint-config-bases/typescript',
    '@ssg/eslint-config-bases/jest',
    '@ssg/eslint-config-bases/react',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
  ignorePatterns: [...getDefaultIgnorePatterns(), '/dist'],
  rules: {},
  overrides: [
    {
      files: ['**/icons/**/*.tsx'],
      rules: {
        'react/jsx-key': 'off',
      },
    },
  ],
};
