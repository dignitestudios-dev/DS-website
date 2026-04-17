const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['app', 'components', 'layout', 'pages'];
const exts = ['.js', '.jsx', '.ts', '.tsx'];

const CRYPTIC_MAP = {
  'mob.webp': 'Mobile app mockup screen',
  'mob-1.webp': 'Mobile app mockup screen',
  'l1.webp': '3D icon representing tech development',
  'r1.webp': 'Laptop mockup showcasing startup project',
  'l2.webp': '3D startup tech icon',
  'r2.webp': 'Tablet mockup showing mobile app interface',
  'check.webp': 'Success checkmark icon',
  'cc.webp': 'Contact us and project discussion illustration',
  'mask.webp': 'Decorative background element',
  'grad.webp': 'Gradient background decoration',
  'grad-crner.webp': 'Gradient corner background decoration',
  'P1.webp': 'Android app development mockup',
  'p2.webp': 'iOS app development mockup',
  'p3.webp': 'Mobile app development mockup showcase',
  'monitor.webp': 'Web app development showcase on monitor',
  'p4.webp': 'Native app development mockup',
  'p5.webp': 'Mobile app testing and QA mockup',
};

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

function toTitleCase(str) {
  return str.replace(/[_\-]+/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function deriveAlt(src, context, componentName) {
  const filename = src.split('/').pop() || '';
  const baseFilename = filename.split('.')[0];

  // 1. Check cryptic map
  if (CRYPTIC_MAP[filename]) return CRYPTIC_MAP[filename];

  // 2. If it contains "mockup", "logo", "icon"
  if (baseFilename.toLowerCase().includes('mockup')) {
    return `Mobile app mockup of ${context || componentName || 'project'}`;
  }
  if (baseFilename.toLowerCase().includes('logo')) {
    return `${toTitleCase(baseFilename)} logo`;
  }
  if (baseFilename.toLowerCase().includes('icon')) {
    return `${toTitleCase(baseFilename)} for ${context || componentName || 'services'}`;
  }

  // 3. Use context + component name
  if (context) {
    return `${context} - ${toTitleCase(baseFilename || 'illustration')}`;
  }

  if (componentName) {
    return `${toTitleCase(componentName)} ${toTitleCase(baseFilename || 'image')}`;
  }

  return toTitleCase(baseFilename || 'Dignite Studios project image');
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  const componentName = path.basename(filePath, path.extname(filePath));

  // Find all <img and <Image tags
  // This regex captures the whole tag
  const tagRegex = /<(img|Image)([^>]+)>/g;
  
  newContent = content.replace(tagRegex, (match, tagName, attrs, offset) => {
    // Extract src
    const srcMatch = attrs.match(/src=(?:["']([^"']+)["']|{([^}]+)})/);
    if (!srcMatch) return match;
    const src = srcMatch[1] || srcMatch[2] || '';

    // Check if alt exists and is "bad"
    const altMatch = attrs.match(/\balt=(?:["']([^"']*)["']|{([^}]+)})/);
    const existingAlt = altMatch ? (altMatch[1] || altMatch[2] || '') : null;
    
    const isBadAlt = existingAlt === null || existingAlt === '' || 
                     ['image', 'icons', '3d icons', 'laptop', 'tablet', 'avatar', 'icon', 'mobile', 'illustration', 'mockup'].includes(existingAlt.toLowerCase());

    if (!isBadAlt) return match;

    // Find context: look back for headings
    const lookBackWindow = content.slice(Math.max(0, offset - 3000), offset);
    const headingMatch = lookBackWindow.match(/<(h[1-6]|span|p|li)[^>]*>([^<]+)<\/\1>/gi);
    let context = '';
    if (headingMatch) {
      // Get the last one before the image
      const lastHeading = headingMatch[headingMatch.length - 1];
      context = lastHeading.replace(/<[^>]+>/g, '').trim().slice(0, 50);
    }

    const newAlt = deriveAlt(src, context, componentName);

    if (altMatch) {
      // Replace existing alt
      const altRegex = new RegExp(`alt=(?:["']${existingAlt}["']|{${existingAlt}})`);
      return match.replace(altRegex, `alt="${newAlt}"`);
    } else {
      // Add alt after src or at the end
      return match.replace(/(src=(?:["'][^"']+["']|{[^}]+}))/, `$1 alt="${newAlt}"`);
    }
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

const allFiles = scanDirs
  .map(d => path.join(root, d))
  .filter(p => fs.existsSync(p))
  .flatMap(readFiles);

let count = 0;
for (const file of allFiles) {
  if (processFile(file)) {
    console.log(`Updated: ${file}`);
    count++;
  }
}

console.log(`Finished. Updated ${count} files.`);
