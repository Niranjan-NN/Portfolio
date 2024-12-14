import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Niranjan-NN/Portfolio', // add this line to define the base URL
  build: {
    outDir: 'dist',
  }
})
