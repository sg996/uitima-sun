module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    // element-plus
    ElMessage: true,
    ElMessageBox: true,
    ElNotification: true,
    ElLoading: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-imports': 0,
    'no-var': 2, // 不能使用 var 定义变量
    quotes: [2, 'single'], // 要求尽可能地使用单引号
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    // vue rules
    'vue/multi-word-component-names': 0
  }
}
