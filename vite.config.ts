import { resolve } from 'path';
import { defineConfig } from 'vite';
import { buildPlugin } from 'vite-plugin-build';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@vini-vici/viddi',
      formats: ['es'],
      fileName: 'index'
    },
  },
  plugins: [
    dtsPlugin()
  ]
});