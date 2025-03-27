import { defineConfig } from 'vite';

export default defineConfig({
  root: './theme', // Set the root to the theme directory
  base: '/',
  build: {
    outDir: '../dist', // Output directory relative to the project root
    emptyOutDir: true, // Ensure the output directory is empty before each build
    manifest: true, // Generate a manifest file for easier integration with Shopify
    rollupOptions: {
      input: {
        theme: './theme/assets/theme.js', // Entry point for your theme's JavaScript
        global: './theme/assets/global.js', // Entry point for global JavaScript
      },
      output: {
        entryFileNames: 'assets/[name].js', // Output file names for entry points
        chunkFileNames: 'assets/[name].js', // Output file names for chunks
        assetFileNames: 'assets/[name].[ext]', // Output file names for assets
      },
    },
  },
  server: {
    port: 3000, // Specify the port for the development server
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});
