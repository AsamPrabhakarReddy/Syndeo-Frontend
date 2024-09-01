import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,  // This setting can help if chunking is causing issues
      }
    },
    // Additional build options can go here
  },
  esbuild: {
    keepNames: true,  // This might help prevent eval errors with specific libraries
  }
});
