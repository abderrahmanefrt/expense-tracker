module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // ← pour éviter l'erreur même si Babel est bien configuré
  },
    rules: {
  'vue/multi-word-component-names': 'off'
}

    // tes règles ici
  }

