import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import viteCompression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'


// https://vitejs.dev/config/
export default defineConfig({
  // 第三方插件
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts']
    }),
    // 打包压缩，主要是本地gzip，如果服务器配置压缩也可以
    viteCompression(),
  ],
  // 别名
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // 样式
  css: {
    // 此代码为适配移动端px2rem
    postcss: {
      plugins: [
        postCssPxToRem({
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          rootValue({ file }) {
            // 判断是否是vant的文件 如果是就使用 37.5为根节点字体大小
            // 否则使用75 因为vant使用的设计标准为375 但是市场现在的主流设置尺寸是750
            return file.indexOf('van') !== -1 ? 37.5 : 75;
          }
        })
      ]
    }
  },
  // 服务
  server: {
    host: '0.0.0.0',
    port: 5147,
    open: false,
    https: false
  },
  // 设置反向代理，跨域
  proxy: {
    '/api': {
      // 后台地址
      target: 'http://127.0.0.1:8990/',
      changeOrigin: true
    }
  },
  // 打包
  build: {
    // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    cssCodeSplit: true,
    brotliSize: false,
    // 清除log
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      // 去掉注释内容
      output: {
        comments: true
      },
    },
    // 分包配置
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
        manualChunks: {
          vue: ['vue', 'vue-router', 'vuex'],
          vant: ['vant'],
          qs: ['qs']
          // echarts: ['echarts']
        }
      }
    }
  }
})
