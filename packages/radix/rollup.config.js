import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

export default {
  input: ['src/index.ts'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    '@reach/dialog/styles.css',
  ],
  plugins: [
    copy({
      targets: [{ src: ['src/**/*.woff', 'src/**/*.woff2'], dest: 'dist/fonts' }],
    }),
    typescript({
      clean: true,
      typescript: require('typescript'),
    }),
  ],
};
