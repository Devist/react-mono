const reactPatterns = {
  files: ['*.{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: reactPatterns.files,
      extends: ['plugin:react/recommended'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
