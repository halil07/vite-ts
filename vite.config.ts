import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteTypescriptLibrary',
      formats: ['es', 'umd', 'iife']
    }
  }
})
