import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss';
// import viteImagemin from 'vite-plugin-imagemin'
const bild = process.env.NODE_ENV === 'development'
console.log(bild);
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: bild
      },
      sourceMap: bild
    }
  },
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
        autoprefixer,
        purgecss({
            content: [ `./public/**/*.html`, `./src/**/*.vue` ], // Пути к файлам, которые нужно просканировать на использование стилей
          defaultExtractor (content) {
            const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
            return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
          }, // Извлекает использованные классы из файлов
          safelist: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/ ]
        })
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
