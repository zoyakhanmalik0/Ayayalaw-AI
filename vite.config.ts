import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',              // ✅ Important for Vercel routing
  plugins: [react()],
  build: {
    outDir: 'dist',       // ✅ Vercel expects this folder
  }
})
