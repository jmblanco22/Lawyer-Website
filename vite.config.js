import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your site is https://USERNAME.github.io/REPO_NAME/ set base to "/REPO_NAME/"
// If your site is https://USERNAME.github.io/ set base to "/"
const base = '/REPO_NAME/'   // <-- change to your repo name, or "/" for user/org site

export default defineConfig({
  plugins: [react()],
  base,
  build: { outDir: 'docs' }  // build straight into /docs
})
