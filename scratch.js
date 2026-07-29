const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all src="..." or src={'...'} or src={`...`}
  const srcRegex = /src=(?:"([^"]+)"|\{'([^']+)'\}|\{`([^`]+)`\})/g;
  let match;
  const imageDims = {};
  
  while ((match = srcRegex.exec(content)) !== null) {
    let src = match[1] || match[2] || match[3];
    if (src && src.startsWith('/') && !src.startsWith('//')) {
      const publicPath = path.join(process.cwd(), 'public', src);
      if (fs.existsSync(publicPath)) {
        try {
          const metadata = await sharp(publicPath).metadata();
          imageDims[src] = { width: metadata.width, height: metadata.height };
        } catch (e) {}
      }
    }
  }

  let newContent = content;
  
  // Handle motion.img -> MotionImage
  if (newContent.includes('<motion.img')) {
    if (!newContent.includes('const MotionImage = motion(Image)') && !newContent.includes('const MotionImage = motion.create(Image)')) {
       newContent = newContent.replace(/(import .*;\n)+/, (match) => {
         return match + '\nconst MotionImage = motion(Image);\n';
       });
    }
    newContent = newContent.replace(/<motion\.img/g, '<MotionImage');
  }

  // Handle regular <img -> <Image
  newContent = newContent.replace(/<img/g, '<Image');
  newContent = newContent.replace(/<\/img>/g, '</Image>');

  // Inject width and height for known src
  for (const [src, dims] of Object.entries(imageDims)) {
    // Avoid double injecting if already has width or height
    const strToFind1 = `src="${src}"`;
    const strToFind2 = `src={'${src}'}`;
    const strToFind3 = `src={\`${src}\`}`;
    
    const replacement1 = `src="${src}" width={${dims.width}} height={${dims.height}}`;
    const replacement2 = `src={'${src}'} width={${dims.width}} height={${dims.height}}`;
    const replacement3 = `src={\`${src}\`} width={${dims.width}} height={${dims.height}}`;

    if (!newContent.includes(`width={${dims.width}} height={${dims.height}}`)) {
      newContent = newContent.split(strToFind1).join(replacement1);
      newContent = newContent.split(strToFind2).join(replacement2);
      newContent = newContent.split(strToFind3).join(replacement3);
    }
  }

  // Add import Image from 'next/image' if missing
  if (newContent.includes('<Image') || newContent.includes('<MotionImage')) {
    if (!newContent.includes('import Image from "next/image"') && !newContent.includes("import Image from 'next/image'")) {
      newContent = 'import Image from "next/image";\n' + newContent;
    }
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Processed', filePath);
  }
}

const components = [
  'AreaOfExpertise.js',
  'Bussiness.jsx',
  'CaseStudiesSection.js',
  'ContactUs.jsx',
  'ConvenientMobileAppDevelopment.jsx',
  'GlobalPresence.jsx',
  'HomeContact.js',
  'Industries.jsx',
  'IndustryCard.js',
  'MobileAppServices.jsx',
  'ProductDesign.jsx',
  'ProjectCard.js',
  'Slider.js'
];

async function run() {
  for (const c of components) {
    const filePath = path.join('c:\\Users\\HuzaifaTanveer\\Desktop\\all-projects\\ds-web', 'components', 'Home', c);
    if (fs.existsSync(filePath)) {
      await processFile(filePath);
    }
  }
}
run();
