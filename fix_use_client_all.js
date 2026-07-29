const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex1 = /import Image from "next\/image";\r?\n"use client";?/;
      const regex2 = /import Image from 'next\/image';\r?\n"use client";?/;
      const regex3 = /import Image from "next\/image";\r?\n'use client';?/;
      
      let changed = false;
      if (regex1.test(content)) {
        content = content.replace(regex1, '"use client";\nimport Image from "next/image";');
        changed = true;
      } else if (regex2.test(content)) {
        content = content.replace(regex2, '"use client";\nimport Image from "next/image";');
        changed = true;
      } else if (regex3.test(content)) {
        content = content.replace(regex3, '"use client";\nimport Image from "next/image";');
        changed = true;
      }

      // Also handle cases with other imports before use client
      // A more generic regex: if "use client" is on line 2 and line 1 is an import
      const genericRegex1 = /^(import [^\n]+;\r?\n)("use client";?)/;
      const genericRegex2 = /^(import [^\n]+;\r?\n)('use client';?)/;
      
      if (!changed && genericRegex1.test(content)) {
        content = content.replace(genericRegex1, '$2\n$1');
        changed = true;
      }
      if (!changed && genericRegex2.test(content)) {
        content = content.replace(genericRegex2, '$2\n$1');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed ' + fullPath);
      }
    }
  }
}

processDir('c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/components');
