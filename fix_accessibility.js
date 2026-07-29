const fs = require('fs');
const glob = require('glob');

// Fix Hero.js
let heroPath = 'c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/components/Home/Hero.js';
if (fs.existsSync(heroPath)) {
  let heroContent = fs.readFileSync(heroPath, 'utf8');
  heroContent = heroContent.replace(
    'href="/contact-us"\n            aria-label="Contact Us"\n            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-14 h-14 rounded-full flex items-center justify-center transition-colors text-2xl border-l border-white/20"',
    'href="/contact-us"\n            aria-label="Contact Us"\n            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg"'
  );
  fs.writeFileSync(heroPath, heroContent, 'utf8');
  console.log('Fixed Hero.js');
}

// Fix all ContactUs.jsx files
const files = glob.sync('c:/Users/HuzaifaTanveer/Desktop/all-projects/ds-web/components/**/ContactUs.jsx');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  // Add IDs to inputs
  c = c.replace(/type="text"(\s+)value=\{name\}/g, 'id="name"$1type="text"$1value={name}');
  c = c.replace(/<label(\s+className="[\s\S]*?">\s*)Full Name/g, '<label htmlFor="name"$1Full Name');

  c = c.replace(/type="email"(\s+)value=\{email\}/g, 'id="email"$1type="email"$1value={email}');
  c = c.replace(/<label(\s+className="[\s\S]*?">\s*)Email Address/g, '<label htmlFor="email"$1Email Address');

  c = c.replace(/<textarea(\s+)rows="4"/g, '<textarea id="message"$1rows="4"');
  c = c.replace(/<label(\s+className="[\s\S]*?">\s*)Description/g, '<label htmlFor="message"$1Description');

  // Add aria-label to submit button with icon
  c = c.replace(/<button(\s+)type="submit"(\s+)className="bg-\[#F15C20\] group-hover:bg-white group-hover:text-\[#F15C20\] text-white w-11/g, '<button aria-label="Submit"$1type="submit"$2className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11');

  fs.writeFileSync(f, c, 'utf8');
  console.log('Fixed', f);
});
