import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react(), ],
  // node_modules is a symlink into /opt/baku-templates — keep Vite's dep
  // cache (default: node_modules/.vite) co-located with the project instead
  // of writing through the symlink into the template tree.
  cacheDir: './.vite',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      // Dev-only proxy to Luma's public calendar API.
      // Luma serves CORS only for `Origin: https://luma.com`, so we forge it here.
      // In production, use the Supabase Edge Function in `supabase/functions/luma-events/`.
      '/api/luma': {
        target: 'https://api.lu.ma',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/luma/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Origin', 'https://luma.com')
            proxyReq.setHeader('Referer', 'https://luma.com/')
          })
        },
      },
    },
  },
})
