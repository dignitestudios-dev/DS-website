const fs = require("fs");
const path = require("path");

// CSS imports to remove from component files
const cssImportsToRemove = [
  'import "swiper/css";',
  "import 'swiper/css';",
  'import "swiper/css/pagination";',
  "import 'swiper/css/pagination';",
  'import "swiper/css/navigation";',
  "import 'swiper/css/navigation';",
  'import "swiper/css/effect-fade";',
  "import 'swiper/css/effect-fade';",
  'import "react-phone-input-2/lib/style.css";',
  "import 'react-phone-input-2/lib/style.css';",
];

function walk(dir, ext, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, ext, files);
    else if (f.endsWith(ext[0]) || f.endsWith(ext[1])) files.push(full);
  }
  return files;
}

const components = walk(path.join(__dirname, "components"), [".jsx", ".js"]);
let updatedCount = 0;

for (const file of components) {
  let content = fs.readFileSync(file, "utf8");
  let original = content;

  for (const imp of cssImportsToRemove) {
    // Remove the import line entirely
    content = content
      .split("\n")
      .filter((line) => line.trim() !== imp.trim())
      .join("\n");
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedCount++;
    console.log(`Cleaned: ${path.relative(__dirname, file)}`);
  }
}

console.log(`\nTotal files cleaned: ${updatedCount}`);
