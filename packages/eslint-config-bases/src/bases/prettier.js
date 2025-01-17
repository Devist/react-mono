const { getPrettierConfig } = require('../helpers');
const { ...prettierConfig } = getPrettierConfig();

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
