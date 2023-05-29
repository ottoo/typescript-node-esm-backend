module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['semistandard', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-useless-constructor': 'off',
  },
};
