import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteImagemin from 'vite-plugin-imagemin'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteImagemin({
      gifsicle: { quality: 80 }, // GIF 压缩
      jpegtran: { quality: 80 }, // JPEG 压缩
      optipng: { quality: 80 },  // PNG 压缩
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] } // SVG 压缩
    })
    // vueDevTools(),
  ],
  publicPath: './',
  server: {

    host: '0.0.0.0',
    open: true,
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
