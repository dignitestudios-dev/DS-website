const fs = require('fs');

const files = [
  'components/Ecommerce/ui/Testimonials.jsx',
  'components/Industries/ui/Testimonials.jsx',
  'components/Locations/ui/Testimonials.jsx',
  'components/services/ui/Testimonials.jsx',
  'components/Technologies/ui/Testimonials.jsx'
];

const newBreakpoints = `breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 6,
            },
          }}`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const regex = /breakpoints=\{\{\s*640:\s*\{\s*slidesPerView:\s*1,?\s*\},\s*1024:\s*\{\s*slidesPerView:\s*2,?\s*\},?\s*\}\}/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, newBreakpoints);
    fs.writeFileSync(file, content);
    console.log('Updated breakpoints in ' + file);
  } else {
    console.log('Regex did not match in ' + file);
  }
});
