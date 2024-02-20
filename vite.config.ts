import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    server: {
      proxy: {
        "/api/": {
          target: env.VITE_DEV_SERVER,
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    }
  };
});
