import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    target: 'es2015',
    minify: true, // use default (esbuild)
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          helmet: ['react-helmet-async']
        }
      }
    }
  },
  
  // Development server optimizations
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-helmet-async']
  },
  
  // CSS optimizations
  css: {
    devSourcemap: false
  }
})
