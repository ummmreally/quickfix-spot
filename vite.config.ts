import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/macon",
        "/macon/contact",
        "/macon/about",
        "/macon/business",
        "/macon/education",
        "/macon/iphone",
        "/macon/ipad",
        "/macon/macbook",
        "/macon/diy-repair",
        "/macon/vineville",
        "/macon/ingleside",
        "/macon/north-macon",
        "/macon/downtown",
        "/macon/east-macon",
        "/macon/south-macon",
        "/macon/rutland",
        "/macon/warner-robins",
        "/macon/byron",
        "/macon/perry",
        "/macon/forsyth",
        "/blog",
        "/blog/iphone-screen-repair-macon-ga",
        "/blog/iphone-battery-replacement-macon",
        "/blog/tech-medics-vs-apple-store-repair",
        "/blog/macbook-repair-macon-ga",
        "/blog/ipad-screen-repair-macon",
        "/blog/oem-vs-aftermarket-iphone-screens",
        "/blog/iphone-not-turning-on-fix",
        "/blog/choose-phone-repair-shop-macon",
        "/blog/water-damaged-iphone-repair",
        "/blog/iphone-screen-repair-cost-macon",
        "/blog/iphone-repair-near-me-macon",
        "/blog/same-day-iphone-repair-macon",
        "/blog/holiday-iphone-repair-checklist-macon-2025",
        "/blog/repair-share-drive-macon",
        "/blog/winter-device-prep-macon-2025",
        "/blog/iphone-battery-replacement-signs-2025",
        "/blog/iphone-dying-fast-after-charging",
        "/blog/iphone-repair-mercer-university-student-discount",
        "/blog/swollen-iphone-battery-replacement-macon",
        "/blog/macbook-screen-repair-cost-macon",
        "/blog/spring-maintenance-macon-2025",
        "/blog/iphone-vs-android-repair-costs-macon",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification with terser for better compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // CSS optimizations
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React - rarely changes
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Router - separate chunk
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // UI components - split by usage frequency
          if (id.includes('@radix-ui')) {
            return 'vendor-ui';
          }
          // Query - separate chunk
          if (id.includes('@tanstack/react-query')) {
            return 'vendor-query';
          }
          // Lucide icons - loaded as needed
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId && facadeModuleId.includes('pages/')) {
            return 'assets/pages/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for smaller output
    target: 'esnext',
    // Report compressed size
    reportCompressedSize: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["lucide-react"],
  },
}));
