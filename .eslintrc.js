module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
  },
}
