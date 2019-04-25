import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
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
    url({
      include: ['**/*.woff', '**/*.woff2'],
    }),
    typescript({
      clean: true,
      abortOnError: false,
      typescript: require('typescript'),
    }),
  ],
};
