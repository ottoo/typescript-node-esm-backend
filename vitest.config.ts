import { defineConfig } from 'vitest/config';
import { esbuildDecorators } from '@anatine/esbuild-decorators';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ['./src/config/test/vitest.setup.ts'],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildDecorators({
          tsconfig: './tsconfig.json',
        }),
      ],
    },
  },
});
