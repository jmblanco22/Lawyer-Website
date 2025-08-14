import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Lawyer-Website/',
  plugins: [react()],
})
