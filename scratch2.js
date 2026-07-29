const fs = require('fs');
const path = require('path');
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
components.forEach(c => {
  const filePath = path.join('c:\\Users\\HuzaifaTanveer\\Desktop\\all-projects\\ds-web', 'components', 'Home', c);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<MotionImage') && !content.includes('const MotionImage = motion(Image)')) {
      content = content.replace(/(import .*[\n\r]+)+/, (match) => match + '\nconst MotionImage = motion(Image);\n');
      if (!content.includes('from "framer-motion"') && !content.includes("from 'framer-motion'")) {
        content = 'import { motion } from "framer-motion";\n' + content;
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed MotionImage in', c);
    }
  }
});
