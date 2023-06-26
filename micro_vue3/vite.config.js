import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [
    vue(),
    qiankun('subAPP', {
      useDevMode: true
    })
  ],
    server: {
      port: 9000,
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  },
})

