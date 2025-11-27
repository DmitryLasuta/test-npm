import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@tests-npm-deploy/core',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: mode !== 'development',
    minify: 'terser',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mantine/core': 'MantineCore',
          '@mantine/hooks': 'MantineHooks',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  optimizeDeps: {
    exclude: ['@mantine/core', '@mantine/hooks'],
  },
}));
