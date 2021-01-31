module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'vuetify'
  ],
  'plugins': [
    'sort-keys-fix'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', {'caseSensitive': false, 'natural': true}],
    'camelcase': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
    'vue/no-unused-vars': 'off',
    'no-warning-comments': [1, { terms: ['todo', 'fixme'], location: "start" }] ,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    }
  ]
};