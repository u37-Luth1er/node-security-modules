// scripts/audit-ci.js
const { execSync } = require('child_process');

try {
  execSync('npm audit --audit-level=high', { stdio: 'inherit' });
} catch {
  process.exit(1);
}

// Adicione ao package.json

"scripts": {
  "audit-ci": "node scripts/audit-ci.js"
}
