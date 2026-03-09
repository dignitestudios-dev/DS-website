const fs = require("fs");
const path = require("path");

function findHeroFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findHeroFiles(fullPath, fileList);
    } else if (file.match(/^Hero\.jsx?$/)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const targetDir = path.join(__dirname, "components");
const filesList = findHeroFiles(targetDir);

let updatedCount = 0;

for (const file of filesList) {
  let content = fs.readFileSync(file, "utf8");
  let originalContent = content;

  if (content.match(/<Image\s/g)) {
    // Add customLoader import if missing
    if (!content.includes("@/lib/custom-loader")) {
      const importMatches = [...content.matchAll(/^import.*from.*$/gm)];
      if (importMatches.length > 0) {
        const lastImport = importMatches[importMatches.length - 1];
        const insertPos = lastImport.index + lastImport[0].length;
        content =
          content.slice(0, insertPos) +
          '\nimport customLoader from "@/lib/custom-loader";' +
          content.slice(insertPos);
      } else {
        content = 'import customLoader from "@/lib/custom-loader";\n' + content;
      }
    }

    // Replace <Image missing loader with loader
    content = content.replace(
      /<Image([\s\S]*?)(\/?>|>)/g,
      (match, attrs, end) => {
        let newAttrs = attrs;

        if (!newAttrs.includes("loader=")) {
          newAttrs += " loader={customLoader}";
        }

        // Some generic fix, let's also remove width=500 height=500 if that was a bad idea?
        // Actually `Image` requires width and height, or fill. So we leave it.

        return `<Image${newAttrs} />`;
      },
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    updatedCount++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Total files updated: ${updatedCount}`);
