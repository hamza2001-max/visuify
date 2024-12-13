import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make sure it's listening on all interfaces
    port: 5173,        // You can change this to 3000 if you prefer
  },
})
