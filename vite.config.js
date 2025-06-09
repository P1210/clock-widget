import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/clock-widget/",
  plugins: [react()],
  server: {
    port: 5174,
  },
});
