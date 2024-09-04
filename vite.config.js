import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortifolioREACT/',
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
