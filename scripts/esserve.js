import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import lws from 'local-web-server';
import { port as calfPort } from './config.js';
import { calfVer, core, version } from './getVersion.js';
import liquidPlugin from './liquidPlugin.js';
import { buildFsh, pathToFile, root } from './utils.js';

const rootPath = `https://localhost:${calfPort}/`;
const fshPath = 'dist/Releases/watch';
const calfPath = `dist/resources/watch/${core}`;

await buildFsh(
  fshPath,
  `${core}a`,
  `${rootPath}${fshPath}`,
  `${rootPath}${calfPath}/calfSystem.js`,
);

const ctx = await esbuild.context({
  bundle: true,
  chunkNames: `${calfVer}/[name]-[hash]`,
  conditions: ['svelte'],
  define: {
    defineCalfPath: `"${rootPath}${calfPath}/calfSystem.css"`,
    defineCalfVer: `"${calfVer}"`,
    defineDataTablesPath: `"${rootPath}src/styles/dataTables.css"`,
    defineEnvironment: '"development"',
    defineUserIsDev: 'true',
    defineVersion: `"${version}"`,
  },
  entryPoints: [pathToFile('src/calfSystem.js')],
  format: 'esm',
  logOverride: {
    'invalid-source-mappings': 'silent',
    'suspicious-nullish-coalescing': 'silent',
  },
  minify: false,
  outdir: pathToFile(calfPath),
  plugins: [liquidPlugin, sveltePlugin()],
  sourcemap: true,
  sourcesContent: false,
  splitting: true,
  write: false,
});

const { hosts, port } = await ctx.serve({ host: '127.0.0.1', servedir: root });

console.log(`esbuild listening on http://${hosts[0]}:${port}`);

const ws = await lws.create({
  rewrite: [
    {
      from: '/(.*)',
      to: `http://${hosts[0]}:${port}/$1`,
    },
  ],
});

console.log(`lws listening on port ${ws.config.port}`);
