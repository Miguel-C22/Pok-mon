import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   checker({ typescript: true }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")  // Resolve @ to the src folder
    }
  }
})
