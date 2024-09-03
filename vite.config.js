// vite.config.js
export default {
  build: {
    target: 'es2015',  // Using es2015 to ensure broader compatibility
    minify: 'esbuild',
    rollupOptions: {
      // other rollup options if needed
    },
    esbuild: {
      minify: true,
      legalComments: 'none',
      target: 'es2015',  // Consistent target for esbuild
    },
  },
};
