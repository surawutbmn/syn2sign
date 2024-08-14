
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react()],
    base: env.VITE_APP==='demo' ? '/syn2sign/demo' : env.VITE_APP === 'production' ? '/syn2sign' : '/' ,
    define: {
     

      // __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})