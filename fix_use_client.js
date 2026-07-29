const fs = require('fs');
const files = [
  'components/CaseStudy/ui/ContactUs.jsx',
  'components/ContactUs/ui/GlobalPresence.jsx',
  'components/Technologies/ui/Bussiness.jsx',
  'components/Technologies/ui/ContactUs.jsx',
  'components/Technologies/ui/MobileApp.jsx'
];

files.forEach(file => {
  const path = 'c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/' + file;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    const regex1 = /import Image from "next\/image";\r?\n"use client";?/;
    const regex2 = /import Image from 'next\/image';\r?\n"use client";?/;
    const regex3 = /import Image from "next\/image";\r?\n'use client';?/;
    
    if (regex1.test(content)) {
      content = content.replace(regex1, '"use client";\nimport Image from "next/image";');
      fs.writeFileSync(path, content, 'utf8');
      console.log('Fixed ' + file);
    } else if (regex2.test(content)) {
      content = content.replace(regex2, '"use client";\nimport Image from "next/image";');
      fs.writeFileSync(path, content, 'utf8');
      console.log('Fixed ' + file);
    } else if (regex3.test(content)) {
      content = content.replace(regex3, '"use client";\nimport Image from "next/image";');
      fs.writeFileSync(path, content, 'utf8');
      console.log('Fixed ' + file);
    }
  }
});
