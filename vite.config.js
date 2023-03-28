import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/main.scss";`
      }
    }
  }
})
