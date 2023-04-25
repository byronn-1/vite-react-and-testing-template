module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'plugin:react/recommended', 
    "plugin:import/warnings",
    'plugin:jsx-a11y/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
 
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    }
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    'import/no-unresolved': 'off',
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
