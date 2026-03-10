const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');

const searchDirs = [
  'app',
  'components',
  'layout',
  'lib',
  'styles',
  'constants',
  'pages',
  'public',
];

const searchExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.md', '.html', '.json'];

function readAllFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(ent.name)) continue;
      results.push(...readAllFiles(full));
    } else {
      if (searchExtensions.includes(path.extname(ent.name).toLowerCase())) {
        results.push(full);
      }
    }
  }
  return results;
}

function readPublicImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results.push(...readPublicImages(full));
    } else {
      const ext = path.extname(ent.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'].includes(ext)) {
        const rel = '/' + path.relative(publicDir, full).replace(/\\/g, '/');
        results.push({ full, rel });
      }
    }
  }
  return results;
}

const codeFiles = [];
for (const dir of searchDirs) {
  const p = path.join(root, dir);
  if (!fs.existsSync(p)) continue;
  codeFiles.push(...readAllFiles(p));
}

const codeContents = codeFiles.map((file) => ({ file, content: fs.readFileSync(file, 'utf8') }));

const images = readPublicImages(publicDir);

const unused = [];

for (const img of images) {
  const pattern = img.rel;
  const found = codeContents.some(({ content }) => content.includes(pattern));
  if (!found) {
    unused.push(img);
  }
}

if (!unused.length) {
  console.log('No unused public images detected.');
  process.exit(0);
}

console.log('Found unused images (will delete):');
unused.forEach((img) => console.log(' -', img.rel));

for (const img of unused) {
  try {
    fs.unlinkSync(img.full);
  } catch (e) {
    console.error('Failed to delete', img.full, e.message);
  }
}

// Remove empty directories under public, if any
function cleanupEmptyDirs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      cleanupEmptyDirs(full);
    }
  }
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0 && dir !== publicDir) {
    fs.rmdirSync(dir);
    console.log('Removed empty directory', path.relative(root, dir));
  }
}

cleanupEmptyDirs(publicDir);

console.log('Done.');
