import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/BlueHazy-fm_final_release/",

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@workspace/api-client-react": path.resolve(
        import.meta.dirname,
        "../../lib/api-client-react/src"
      ),
      "@assets": path.resolve(
        import.meta.dirname,
        "../../attached_assets"
      ),
    },

    dedupe: ["react", "react-dom"],
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 5173,

    proxy: {
      "/api": {
        target:
          process.env.VITE_API_URL ??
          "http://localhost:8080",

        changeOrigin: true,
      },
    },
  },
});
