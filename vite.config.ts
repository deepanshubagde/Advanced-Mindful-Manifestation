import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function mentorUploadPlugin(): Plugin {
  return {
    name: 'mentor-upload-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/upload-banner', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', chunk => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const fullBuffer = Buffer.concat(chunks);
              let fileBuffer = fullBuffer;
              const text = fullBuffer.toString('utf-8', 0, Math.min(fullBuffer.length, 100));
              if (text.trim().startsWith('{')) {
                const json = JSON.parse(fullBuffer.toString('utf-8'));
                if (json.image) {
                  const base64Data = json.image.replace(/^data:image\/\w+;base64,/, '');
                  fileBuffer = Buffer.from(base64Data, 'base64');
                }
              }

              const targets = [
                path.resolve(rootDir, 'public/hero-banner.png'),
                path.resolve(rootDir, 'public/hero-banner.jpg'),
                path.resolve(rootDir, 'hero-banner.png'),
                path.resolve(rootDir, 'public/5 Days M2M.png'),
                path.resolve(rootDir, '5 Days M2M.png'),
              ];

              for (const target of targets) {
                fs.writeFileSync(target, fileBuffer);
              }

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: '16:9 Banner saved to disk' }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });

      server.middlewares.use('/api/upload-mentor', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', chunk => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const fullBuffer = Buffer.concat(chunks);
              let fileBuffer = fullBuffer;
              const text = fullBuffer.toString('utf-8', 0, Math.min(fullBuffer.length, 100));
              if (text.trim().startsWith('{')) {
                const json = JSON.parse(fullBuffer.toString('utf-8'));
                if (json.image) {
                  const base64Data = json.image.replace(/^data:image\/\w+;base64,/, '');
                  fileBuffer = Buffer.from(base64Data, 'base64');
                }
              }

              const targets = [
                path.resolve(rootDir, 'public/IMG_8841.JPG'),
                path.resolve(rootDir, 'public/IMG_8841.jpg'),
                path.resolve(rootDir, 'IMG_8841.JPG'),
                path.resolve(rootDir, 'IMG_8841.jpg'),
                path.resolve(rootDir, 'public/rahul-dongre.jpg'),
                path.resolve(rootDir, 'rahul-dongre.jpg'),
              ];

              for (const target of targets) {
                fs.writeFileSync(target, fileBuffer);
              }

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Saved to disk' }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });
    },
  };
}

const rootDir = import.meta.dirname ?? path.resolve();

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), mentorUploadPlugin()],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
