// scripts/copy-404.js
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Copy the built SPA entry to 404.html so GitHub Pages can serve it on refresh/deep links
const indexPath = resolve('dist/index.html')
const html = readFileSync(indexPath, 'utf8')
writeFileSync(resolve('dist/404.html'), html)
console.log('Created dist/404.html for SPA fallback')
