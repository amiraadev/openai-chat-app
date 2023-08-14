import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set to a value that suits your application
    outDir: 'dist', // or 'build'
  },
  base:"/openai-chat-app/"
});
