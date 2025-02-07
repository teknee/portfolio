import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      generateScopedName: "[folder]_[local]_[hash:base64:5]",
    },
  },
  server: {
    hmr: true,
    watch: { usePolling: true },
  },
});
