// vite.config.js
export default {
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      // other rollup options
    },
    esbuild: {
      // Options to optimize memory usage
      minify: true,
      legalComments: 'none',
      target: 'es2015',
    },
  },
};
