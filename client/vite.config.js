// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/syn2sign/demo/",
  plugins: [react()],
  // base: "/syn2sign/demo/",
  // build: {
  //   outDir: "syn2sign",
  // },
});
