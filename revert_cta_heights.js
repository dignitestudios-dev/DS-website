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

    // Revert heights back to original
    content = content.replace(/h-\[450px\]/g, "h-[600px]");
    content = content.replace(/h-\[400px\]/g, "h-[550px]");
    content = content.replace(/h-\[380px\]/g, "h-[500px]");
    content = content.replace(/h-\[350px\]/g, "h-[450px]");
    
    content = content.replace(/lg:h-\[450px\]/g, "lg:h-[600px]");
    content = content.replace(/lg:h-\[400px\]/g, "lg:h-[550px]");
    content = content.replace(/lg:h-\[380px\]/g, "lg:h-[500px]");
    
    content = content.replace(/md:h-\[400px\]/g, "md:h-[550px]");
    content = content.replace(/md:h-\[380px\]/g, "md:h-[500px]");

    // The negative margins are already there from the previous script, 
    // so the gaps will remain reduced, but the inner CTA width/UI will be fixed!

    if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf8");
        modifiedCount++;
        console.log("Modified:", file);
    }
});

console.log(`Reverted heights in ${modifiedCount} files.`);
