import { resolve } from 'path';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@vini-vici/viddi',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', '@mdi/js', '@mdi/react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  },
  plugins: [
    dtsPlugin()
  ]
});