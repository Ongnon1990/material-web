import Fastify from 'fastify';
import serveStatic from '@fastify/static';
import { join } from 'path';
import { fileURLToPath } from 'url';

const fastify = Fastify({
  logger: true,
});

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const prodFolder = join(__dirname, '..', '_prod');

const staticFiles = [
  '/fonts',
  '/assets/components/images',
  '/js/hydration-entrypoints/playground-typescript-worker.js',
];

fastify.register(serveStatic, {
  root: prodFolder,
  preCompressed: true,
  redirect: true,
  prefix: '/material-web',
  setHeaders: (res, path) => {
    if (staticFiles.some((dir) => path.startsWith(join(prodFolder, '/material-web', dir)))) {
      // 1yr / 1wk
      res.setHeader(
        'Cache-Control',
        'public, max-age=31536000, stale-while-revalidate=604800'
      );
    } else {
      // 1wk / 1hr
      res.setHeader(
        'Cache-Control',
        'public, max-age=604800, stale-while-revalidate=3600'
      );
    }
  },
});

// const LOCAL = process.env.REMOTE === 'DEV';

// Run the server!
try {
  await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
