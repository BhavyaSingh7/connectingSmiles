import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/connectingSmiles/',
  server: {
    port: 3001,
    strictPort: false // Allows Vite to use next available port if 3001 is taken
  }
})
