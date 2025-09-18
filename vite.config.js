import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'buffer-polyfill',
      transform(code, id) {
        if (id.includes('node_modules') || !id.includes('fileDisplay.jsx')) return;
        return {
          code: `
            import { Buffer } from 'buffer';
            globalThis.Buffer = Buffer;
            ${code}
          `,
          map: null,
        };
      },
    },
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '/src': '/src',
      buffer: 'buffer', // Ensure buffer module is resolved
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
});
