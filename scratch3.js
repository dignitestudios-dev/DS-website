const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const targetStr1 = '<div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">\n            {tech.icon}\n          </div>';
      const replacement1 = '<div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">\n            {React.cloneElement(tech.icon, { "aria-label": tech.name, title: tech.name })}\n          </div>';
      
      const targetStr2 = '<div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">\r\n            {tech.icon}\r\n          </div>';
      const replacement2 = '<div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">\r\n            {React.cloneElement(tech.icon, { "aria-label": tech.name, title: tech.name })}\r\n          </div>';
      
      // Let's use Regex to be safe against formatting differences
      const regex = /<div([^>]*w-24[^>]*)>\s*\{tech\.icon\}\s*<\/div>/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, '<div$1>\n            {React.cloneElement(tech.icon, { "aria-label": tech.name || "technology icon", title: tech.name || "technology icon" })}\n          </div>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed', filePath);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'components'));
