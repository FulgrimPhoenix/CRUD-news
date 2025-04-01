import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ["@mui/x-date-pickers"],
  },
});
