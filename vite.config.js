import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages deployment
  // For GitHub Pages project repository: https://qoojung.github.io/personal-pro
  // In development, use root path
  base: "",

  plugins: [
    react(),
    // Image optimization plugin for production builds
    viteImagemin({
      // JPEG optimization
      mozjpeg: {
        quality: 80,
      },
      // PNG optimization
      optipng: {
        optimizationLevel: 7,
      },
      // WebP conversion
      webp: {
        quality: 80,
      },
    }),
  ],
  build: {
    // Enable minification (default is 'esbuild' which is fast and effective)
    minify: "esbuild",
    // Generate source maps for debugging (can be set to false for smaller builds)
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunk
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Set chunk size warning limit (in KB)
    chunkSizeWarningLimit: 500,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
