import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your Pages URL is https://USERNAME.github.io/law-office-react-refined/
const base = '/law-office-react-refined/'   // ← change if your repo name is different
// If your URL is https://USERNAME.github.io/ (user site), use base = '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: { outDir: 'docs' }   // build straight into /docs
})
