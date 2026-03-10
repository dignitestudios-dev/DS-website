const fs = require('fs');
const path = require('path');

const root = process.cwd();

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      walk(full);
    } else if (/\.(js|jsx|ts|tsx)$/.test(ent.name)) {
      let txt = fs.readFileSync(full, 'utf8');
      const original = txt;

      // remove custom loader import lines
      txt = txt.replace(/import\s+customLoader\s+from\s+["']@\/lib\/custom-loader["'];?\s*\n?/g, '');
      // remove loader prop
      txt = txt.replace(/\s*loader\s*=\s*\{\s*customLoader\s*\}\s*/g, '');
      // Fix cases where removing loader left <Image width= / <Image src= etc (missing whitespace)
      txt = txt.replace(/<Image width=/g, '<Image width=');
      txt = txt.replace(/<Image src=/g, '<Image src=');
      txt = txt.replace(/<Image height=/g, '<Image height=');      // General fix: if <Image is directly followed by an attribute without whitespace
      txt = txt.replace(/<Image(?=[A-Za-z])/g, '<Image ');
      if (txt !== original) {
        fs.writeFileSync(full, txt, 'utf8');
        console.log('Updated', full);
      }
    }
  }
}

walk(root);

const loaderPath = path.join(root, 'lib', 'custom-loader.js');
if (fs.existsSync(loaderPath)) {
  fs.unlinkSync(loaderPath);
  console.log('Deleted', loaderPath);
}
