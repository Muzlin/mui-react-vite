import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { svgBuilder } from './plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgBuilder('./src/Icons/')],
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  resolve: {
    alias: {
      '@': './src/*',
    },
  },
})
