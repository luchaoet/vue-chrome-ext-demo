module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/base',
    // 'plugin:vue/vue3-essential',
    // 'plugin:vue/vue3-strongly-recommended',
    // 'plugin:vue/vue3-recommended',
    // 'prettier',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error',
    // "camelcase": 0,
    // "vue/multi-word-component-names": 0,
    // "no-dupe-keys": 0,
    // "vue/v-on-event-hyphenation": 0,
    // "vue/require-default-prop": 0,
    // "no-unused-vars": 0,
    // "vue/no-deprecated-v-on-native-modifier": 0,
    // "vue/valid-v-for": 0,
    // "vue/no-mutating-props": 0,
    // "vue/require-v-for-key": 0,
    // "vue/no-unused-components": 0,
    // "vue/valid-v-model": 0,
    // "vue/require-explicit-emits": 0,
    // "no-unsafe-optional-chaining": 0,
    // "vue/no-v-html": 0
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
}