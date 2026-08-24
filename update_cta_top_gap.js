const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "components");

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            if (file.endsWith("CTA.jsx") || file.endsWith("CTA.js") || file.includes("CTA")) {
                if (file.endsWith(".jsx") || file.endsWith(".js")) {
                    results.push(filePath);
                }
            }
        }
    });
    return results;
}

const ctaFiles = getFiles(componentsDir);
let modifiedCount = 0;

ctaFiles.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let originalContent = content;

    // Increase the negative top margin
    // We previously added `-mt-8 lg:-mt-16`
    // Let's replace it with `-mt-12 lg:-mt-28` to significantly reduce the top gap
    content = content.replace(/-mt-8 lg:-mt-16/g, "-mt-12 lg:-mt-28");

    if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf8");
        modifiedCount++;
        console.log("Modified:", file);
    }
});

console.log(`Updated top margin in ${modifiedCount} files.`);
