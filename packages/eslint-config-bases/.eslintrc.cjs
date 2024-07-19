const { getDefaultIgnorePatterns } = require('./src/helpers');

module.exports = {
  root: true,
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: ['./src/bases/typescript', './src/bases/prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
};
