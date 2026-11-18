import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Builds one script + one stylesheet into ../assets/reactbits/, which index.html loads.
// The site itself stays plain HTML, so GitHub Pages needs no build step.
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: '../assets/reactbits',
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: true,
    lib: { entry: 'src/main.tsx', formats: ['es'], fileName: () => 'reactbits.js', cssFileName: 'reactbits' },
  },
})
