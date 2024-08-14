import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/syn2sign/",
  plugins: [react()],
  // base: "/syn2sign/demo/",
  // build: {
  //   outDir: "syn2sign",
  // },
});
