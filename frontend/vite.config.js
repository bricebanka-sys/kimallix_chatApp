import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optionnel : change le port du client
    proxy: {
      "/api": {
        target: "http://localhost:5000",       
        
      },
    },
  },
});
