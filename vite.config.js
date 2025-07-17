import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Autoescola Lucky - CNH com Segurança e Confiança | Bangu, RJ',
          description: 'Autoescola Lucky em Bangu, Rio de Janeiro. Tire sua CNH com segurança e confiança. Aulas teóricas e práticas, instrutores qualificados.',
          keywords: 'autoescola, CNH, carteira de motorista, aulas de direção, Bangu, Rio de Janeiro, habilitação, primeira habilitação, reciclagem CNH'
        }
      }
    })
  ],
  base: '/', // Replace with your actual repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    // Generate manifest for better caching
    manifest: true
  }
})