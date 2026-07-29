const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/components/**/ContactUs.jsx');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  c = c.replace(/<label\b([^>]*?)>\s*Email\b/g, (match, p1) => {
    if (!p1.includes('htmlFor')) {
      return `<label htmlFor="email"${p1}>\n                Email`;
    }
    return match;
  });

  c = c.replace(/<label\b([^>]*?)>\s*Description\b/g, (match, p1) => {
    if (!p1.includes('htmlFor')) {
      return `<label htmlFor="message"${p1}>\n                Description`;
    }
    return match;
  });

  fs.writeFileSync(f, c, 'utf8');
  console.log('Fixed', f);
});
