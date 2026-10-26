import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // Must run before the React plugin.
    tanstackRouter({
      autoCodeSplitting: true,
      generatedRouteTree: './src/routeTree.gen.ts',
      quoteStyle: 'single',
      routesDirectory: './src/routes',
      semicolons: false,
      target: 'react',
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
