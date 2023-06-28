import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import autoprefixer from 'autoprefixer'

// import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({

  // build: {
  //   minify: 'terser',
  //   terserOptions: {
  //     compress: {
  //       drop_console: true
  //     },
  //     sourceMap: true
  //   }
  // },
  plugins: [
    vue()
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false
    //   },
    //   optipng: {
    //     optimizationLevel: 7
    //   },
    //   mozjpeg: {
    //     quality: 20
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox'
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false
    //       }
    //     ]
    //   }
    // })
  ],
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
  },
  server: {
    port: 5000,
    proxy: {
      '/raw.githubusercontent.com': {
        target: 'https://raw.githubusercontent.com',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/raw.githubusercontent.com/, '')
      }
    }
  }
})
