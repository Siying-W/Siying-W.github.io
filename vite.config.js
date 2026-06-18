import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const lastDeployedDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_DEPLOYED_DATE__: JSON.stringify(lastDeployedDate),
  },
})
