import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // ✅ Very important for Vercel
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

