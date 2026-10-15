import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { isCI } from 'std-env';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    // threads pool (legacy) es compatible con Node 24
    pool: 'threads',
    poolOptions: {
      threads: { singleThread: true },
    },
    // Timeouts generosos para CI
    testTimeout: isCI ? 30000 : 15000,
    hookTimeout: isCI ? 30000 : 15000,
    // Desactivar file parallelism en CI
    fileParallelism: isCI ? false : true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/test/**',
        'src/main.jsx',
        'src/App.jsx',
        'src/**/*.d.ts',
        'src/**/index.js',
      ],
    },
  },
});