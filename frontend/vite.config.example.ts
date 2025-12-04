import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// For GitHub Pages deployment, uncomment and set your repo name:
// const repoName = 'your-repo-name'; // Replace with your GitHub repo name

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Uncomment for GitHub Pages:
  // base: `/${repoName}/`,
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

