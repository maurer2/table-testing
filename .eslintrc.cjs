module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  ignorePatterns: ['*.spec.ts', '*.spec.tsx'],
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      plugins: ['testing-library'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/stylistic'],
    },
  ],
};
