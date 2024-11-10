/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { expect } from 'vitest';
import react from '@vitejs/plugin-react';
import * as matchers from 'jest-extended';

expect.extend(matchers);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './src/setup-tests.js', // assuming the test folder is in the root of our project
  },
});
