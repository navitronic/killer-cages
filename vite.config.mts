import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/killer-cages/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
