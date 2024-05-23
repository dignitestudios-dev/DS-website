const customLoader = ({ src, width, quality }) => {
    return `https://dignitestudios.com/${src}`;
  };
  
  module.exports = customLoader;