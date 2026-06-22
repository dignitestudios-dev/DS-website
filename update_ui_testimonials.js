const fs = require('fs');

const files = [
  'components/Ecommerce/ui/Testimonials.jsx',
  'components/Industries/ui/Testimonials.jsx',
  'components/Locations/ui/Testimonials.jsx',
  'components/services/ui/Testimonials.jsx',
  'components/Technologies/ui/Testimonials.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change outer div dimensions
  content = content.replace(/w-\[300px\] md:w-\[450px\] h-\[350px\] md:h-\[380px\]/g, 'w-[258px] h-[295px]');

  // Change white background card dimensions
  content = content.replace(/<div className="absolute top-0 left-0 w-full h-full rounded-\[30px\] bg-white shadow-md z-10" \/>/g, '<div className="absolute top-0 left-0 w-[258px] h-[295px] rounded-[30px] bg-white shadow-md z-10" />');

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});

