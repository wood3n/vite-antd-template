module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "html"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "block-spacing": "error",
    "no-whitespace-before-property": "error",
    "indent": ["error", 2],
    "react/react-in-jsx-scope": 0
  }
};
