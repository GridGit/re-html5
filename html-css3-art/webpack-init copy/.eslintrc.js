// https://eslint.org/docs/user-guide/configuring

var bDev = process.env.NODE_ENV !== 'production';

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint'
  },
  env: {
      browser: true,
      commonjs: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
      'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/require-v-for-key': 'off',
    'vue/no-unused-vars': 'off',
    'no-regex-spaces': 'off',
    'no-useless-escape': 'off',
    'no-extra-boolean-cast': 'off',
    'no-redeclare': 'off',
    'no-empty': 'off',
    'no-unused-vars': [
        "error",
        {
            "varsIgnorePattern": "^that$",
            "args": "none"
        }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': bDev ? 'error' : 'off'
  }
}
