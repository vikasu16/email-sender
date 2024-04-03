import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_GOOGLE_SCOPE': JSON.stringify(env.REACT_APP_GOOGLE_SCOPE),
      'process.env.REACT_APP_GOOGLE_SERVER': JSON.stringify(env.REACT_APP_GOOGLE_SERVER),
      'process.env.REACT_APP_API_SERVER': JSON.stringify(env.REACT_APP_API_SERVER)
    },
    plugins: [react()],
  }
})
