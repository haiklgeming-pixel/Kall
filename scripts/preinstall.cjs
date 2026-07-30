const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
for (const file of ['package-lock.json', 'yarn.lock']) {
  const target = path.join(root, file);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { force: true });
  }
}

const userAgent = process.env.npm_config_user_agent || '';
if (!userAgent.startsWith('pnpm/')) {
  console.error('Use pnpm instead');
  process.exit(1);
}
