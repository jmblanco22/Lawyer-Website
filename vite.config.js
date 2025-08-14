// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/law-office-react-refined/',   // EXACT repo name + leading/trailing slashes
  build: { outDir: 'docs' }
})
