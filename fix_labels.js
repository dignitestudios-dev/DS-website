const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/components/**/ContactUs.jsx');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  c = c.replace(/<label(\s+className="[^>]*?">\s*)Email\b/g, '<label htmlFor="email"$1Email');
  c = c.replace(/<label(\s+className="[^>]*?">\s*)Description\b/g, '<label htmlFor="message"$1Description');
  c = c.replace(/<label(\s+htmlFor="name"\s+className="[^>]*?">\s*)Full Name\b/g, '<label htmlFor="name"$1Full Name'); 
  // Wait, the first one already has htmlFor="name". But let's add it if missing:
  c = c.replace(/<label(?!\s+htmlFor)(\s+className="[^>]*?">\s*)Full Name\b/g, '<label htmlFor="name"$1Full Name');

  fs.writeFileSync(f, c, 'utf8');
  console.log('Fixed', f);
});
