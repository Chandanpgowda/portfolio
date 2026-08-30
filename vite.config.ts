import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is required for GitHub Pages project sites.
// Locally and on custom domains it resolves to "/" automatically in dev.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
