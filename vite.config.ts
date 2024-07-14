import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'vitest/config'; // <-- just dummy import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rss-react-2024-q3-deployments/hooks-and-routing/',
  test: { environment: 'jsdom', setupFiles: ['./tests/setup.ts'], globals: true },
});
