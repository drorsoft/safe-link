import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,jsx,ts,tsx}"],
    exclude: ["e2e", "node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
