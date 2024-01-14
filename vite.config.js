// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // other configurations...
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth'],
  },
});
