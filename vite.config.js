import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { serviceWorkerPlugin } from './scripts/vite-plugin-service-worker'

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serviceWorkerPlugin()],
  define: {
    // Surfaced in Settings → About.
    __APP_VERSION__: JSON.stringify(version),
  },
})
