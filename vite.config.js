import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the directory you're deploying from
    rollupOptions: {
      // Additional configuration
    },
    sourcemap: false, // Disable sourcemaps if not needed, to reduce build time
  },
  optimizeDeps: {
    include: ['lottie-web'], // Include specific libraries to optimize their loading
  },
});
