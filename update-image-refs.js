const fs = require("fs");
const path = require("path");

const dirs = ["components", "app", "pages", "lib", "layout"];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (/\.(js|jsx|tsx|ts|css|scss)$/i.test(f)) files.push(full);
  }
  return files;
}

let allFiles = [];
dirs.forEach((d) => {
  const dirPath = path.join(__dirname, d);
  allFiles = allFiles.concat(walk(dirPath));
});

console.log(`Found ${allFiles.length} code files. Updating references...`);

let updated = 0;
let filesChanged = 0;

allFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  
  content = content.replace(/\.png(['"`])/gi, ".webp$1");
  
  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    filesChanged++;
    const changes = (original.match(/\.png(['"`])/gi) || []).length;
    updated += changes;
  }
});

console.log(`\nDone! Updated ${updated} references in ${filesChanged} files.`);
