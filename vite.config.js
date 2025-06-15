import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name!
const repoName = 'homepage'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
