import clear from 'rollup-plugin-clear';
import replace from '@rollup/plugin-replace';

const watch = process.env.ROLLUP_WATCH;

export default function rollupFsh(outdir, jsccValues) {
  return {
    input: 'src/fallenswordhelper.user.js',
    output: {
      file: `dist/${outdir}/fallenswordhelper.user.js`,
      format: 'es',
    },
    plugins: [
      clear({ targets: [`dist/${outdir}`] }),
      replace({ values: jsccValues }),
    ],
    external: [jsccValues._CALFJS], // eslint-disable-line no-underscore-dangle
    treeshake: !watch,
    watch: { include: 'src/**' },
  };
}
