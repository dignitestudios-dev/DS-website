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

    // Reduce fixed heights
    content = content.replace(/h-\[600px\]/g, "h-[450px]");
    content = content.replace(/h-\[550px\]/g, "h-[400px]");
    content = content.replace(/h-\[500px\]/g, "h-[380px]");
    content = content.replace(/h-\[450px\]/g, "h-[350px]");
    content = content.replace(/lg:h-\[600px\]/g, "lg:h-[450px]");
    content = content.replace(/lg:h-\[550px\]/g, "lg:h-[400px]");
    content = content.replace(/lg:h-\[500px\]/g, "lg:h-[380px]");
    content = content.replace(/md:h-\[550px\]/g, "md:h-[400px]");
    content = content.replace(/md:h-\[500px\]/g, "md:h-[380px]");

    // Reduce explicit margins if they exist
    content = content.replace(/my-24/g, "my-10");
    content = content.replace(/my-20/g, "my-8");
    content = content.replace(/py-24/g, "py-10");
    content = content.replace(/py-20/g, "py-10");

    // Replace the first className=" with className="-mt-8 lg:-mt-16 -mb-8 lg:-mb-16 
    let firstClassNameIdx = content.indexOf('className="');
    if (firstClassNameIdx !== -1) {
        let before = content.substring(0, firstClassNameIdx + 11);
        let after = content.substring(firstClassNameIdx + 11);
        
        if (!after.startsWith("-mt-8")) {
            content = before + "-mt-8 lg:-mt-16 -mb-8 lg:-mb-16 " + after;
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf8");
        modifiedCount++;
        console.log("Modified:", file);
    }
});

console.log(`Modified ${modifiedCount} files.`);
