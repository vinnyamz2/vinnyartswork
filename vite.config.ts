import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Static SPA. Deploys cleanly to Vercel, Netlify and GitHub Pages.
// For GitHub Pages under a sub-path, set VITE_BASE="/<repo-name>/" at build time.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: "dist",
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
  },
});
