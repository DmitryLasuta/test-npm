import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts', 'src/colors/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
  sourcemap: true,
  minify: !options.watch,
  treeshake: true,
  clean: true,
  splitting: true,
  ...options,
}));
