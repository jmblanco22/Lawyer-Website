import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',             // relative base avoids repo-name path issues
  build: { outDir: 'docs' }
})
