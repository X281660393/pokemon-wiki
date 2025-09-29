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
      // gifsicle: { quality: 80 }, // GIF 压缩
      // jpegtran: { quality: 80 }, // JPEG 压缩
      // optipng: { quality: 80 },  // PNG 压缩
      // svgo: { plugins: [{ name: 'removeViewBox', active: false }] } // SVG 压缩
    })
    // vueDevTools(),
  ],
  publicPath: './',
  server: {

    host: '0.0.0.0',
    open: true,
    port: 8080,
  },

  // 添加 build 配置，控制资源输出
  build: {
    // 配置资源输出格式
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // 确保静态资源路径可以被正确解析
        assetFileNames: (assetInfo) => {
          // 对图片资源特殊处理，保留原始文件结构
          if (assetInfo.name && /\.(svg|png|jpe?g|gif)$/.test(assetInfo.name)) {
            // 尝试保留原始文件名和路径结构
            const ext = assetInfo.name.split('.').pop();
            const baseName = assetInfo.name.replace(`.${ext}`, '');
            return `assets/${baseName}.${ext}`;
          }
          // 其他资源保持默认处理
          return `assets/[name].[ext]`;
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
