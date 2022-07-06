module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-restricted-imports': 0,
    'no-var': 2, // 不能使用 var 定义变量
    quotes: [2, 'single'], // 要求尽可能地使用单引号
    // vue rules
    'vue/multi-word-component-names': 0
  }
}
