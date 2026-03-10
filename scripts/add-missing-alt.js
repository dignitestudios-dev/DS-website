const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['app', 'components', 'layout', 'pages'];
const exts = ['.js', '.jsx', '.ts', '.tsx', '.html'];

function readFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(ent.name)) continue;
      files.push(...readFiles(full));
    } else if (exts.includes(path.extname(ent.name))) {
      files.push(full);
    }
  }
  return files;
}

function deriveAltFromSrc(src) {
  // Only derive for relative paths (starting with / or ./ or ../)
  if (/^(https?:)?\/\//i.test(src)) return '';
  const cleaned = src.split('?')[0].split('#')[0];
  const name = cleaned.replace(/^\/+/, '').split('/').pop() || '';
  const base = name.replace(/\.[^/.]+$/, '');
  const words = base.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
  return words;
}

function addAltIfMissing(code, tagName) {
  // Find tags like <img ... src="/..." ...> or <Image ... src="/..." ...>
  const regex = new RegExp(`(<${tagName}[^>]*src=(?:"|\')[^"']*(?:"|\')[^>]*>)`, 'g');
  return code.replace(regex, (match) => {
    if (/\balt\s*=/.test(match)) return match;

    return match.replace(/src=(?:"|\')([^"']*)(?:"|\')/, (full, src) => {
      const alt = deriveAltFromSrc(src);
      if (!alt) return full + ' alt=""';
      return `${full} alt="${alt}"`;
    });
  });
}

const files = scanDirs
  .map((d) => path.join(root, d))
  .filter((p) => fs.existsSync(p))
  .flatMap(readFiles);

let updatedCount = 0;

for (const file of files) {
  let code = fs.readFileSync(file, 'utf8');
  const original = code;

  code = addAltIfMissing(code, 'img');
  code = addAltIfMissing(code, 'Image');

  if (code !== original) {
    fs.writeFileSync(file, code, 'utf8');
    updatedCount += 1;
    console.log('Updated', file);
  }
}

console.log(`Updated ${updatedCount} file(s) with missing alt attributes.`);
