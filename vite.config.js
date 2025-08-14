import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/law-office-react-refined/',
  plugins: [react()],
})
