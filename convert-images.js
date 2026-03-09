const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (f.toLowerCase().endsWith(".png")) files.push(full);
  }
  return files;
}

const pngFiles = walk(publicDir);
console.log(`Found ${pngFiles.length} PNG files. Converting...`);

let converted = 0;
let errors = 0;

(async () => {
  for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    try {
      await sharp(pngPath).webp({ quality: 85 }).toFile(webpPath);
      converted++;
      if (converted % 100 === 0)
        console.log(`  Progress: ${converted}/${pngFiles.length}...`);
    } catch (err) {
      console.error(`  ERROR converting ${pngPath}: ${err.message}`);
      errors++;
    }
  }
  console.log(`\nDone! Converted: ${converted}, Errors: ${errors}`);
  console.log(
    "WebP files created alongside originals. You can now update code references.",
  );
})();
