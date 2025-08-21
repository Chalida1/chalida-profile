import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-chalida-profile-app/',
  // 👈 ต้องตรงกับชื่อ repo
})
