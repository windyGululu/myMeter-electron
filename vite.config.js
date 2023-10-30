import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: './',
  manifest: true,  //配置后才能让编译后的vue路径被正确识别
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['electron'], // 告诉 Vite 排除预构建 electron，不然会出现 __diranme is not defined
  }
})
