import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 64999,
    }
  },
  build: {
    rollupOptions: {
      input: {
        theme: 'theme/assets/theme.js'
      },
      output: {
        entryFileNames: assetInfo => {
          return `assets/${assetInfo.name}.js`
        },
      }
    }
  }
});
