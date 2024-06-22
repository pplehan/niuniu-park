// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"; // 1. 引入 path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: { // 2. 新增別名
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
