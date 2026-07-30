import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const artifactDir = path.resolve(__dirname, '..');
const distDir = path.join(artifactDir, 'dist');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || '5000';

const build = spawn(process.execPath, ['build.mjs'], {
  cwd: artifactDir,
  stdio: 'inherit',
  env: process.env,
});

build.on('exit', (code) => {
  if (code !== 0) {
    process.exit(code ?? 1);
    return;
  }

  const start = spawn(process.execPath, ['--enable-source-maps', path.join(distDir, 'index.mjs')], {
    cwd: artifactDir,
    stdio: 'inherit',
    env: process.env,
  });

  start.on('exit', (exitCode) => {
    process.exit(exitCode ?? 0);
  });
});
