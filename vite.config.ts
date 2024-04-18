import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: "@containers", replacement: '/src/components/containers'},
      { find: "@components", replacement: '/src/components'},
      { find: "@ui", replacement: '/src/components/ui'},
      { find: "@types", replacement: '/src/types'},
    ]
  }
})
