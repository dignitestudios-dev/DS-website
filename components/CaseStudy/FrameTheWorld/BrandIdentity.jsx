import React from 'react';

const BrandIdentity = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center gap-12 font-poppins">
      {/* Main Title */}
      <h2 className="text-[#0C0C0C] font-medium text-[32px] text-center lg:text-[44px] ">
        Building the <span className="font-bold">Brand</span> Identity
      </h2>

      <div className="w-full max-w-[1280px] flex flex-col gap-12 px-4">
        
        {/* Typography Card */}
        <div className="w-full bg-[#3D61EC] rounded-[16px] p-8 md:p-12 flex flex-col gap-8 shadow-sm">
          
          {/* Top Row: Font Name & Description */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h3 className="text-[#81DE76] font-medium text-[48px] md:text-[64px] leading-tight">
              Satoshi
            </h3>
            <p className="text-white text-[14px] md:text-[15px] font-normal leading-[1.6] max-w-[500px] text-left md:text-right opacity-90">
              Frame The World's brand identity was designed to reflect trust, authenticity and professionalism. Clean layouts, modern typography and immersive travel imagery created a premium yet simple experience.
            </p>
          </div>

          {/* Alphabet String */}
          <p className="text-white font-medium text-[16px] md:text-[24px] tracking-wide mt-4">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </p>

          {/* Bottom Row: Large Aa & Font Weights */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-8">
            
            {/* Large Aa */}
            <div className="flex flex-row items-center justify-center flex-none w-[200px] md:w-[266px] h-[140px] overflow-hidden">
              <span className="text-white font-medium text-[150px] md:text-[200px] leading-[100px] tracking-[-2px] ml-4 ">
                A
              </span>
              <span className="text-white font-medium text-[150px] md:text-[200px] leading-[100px] tracking-[-2px]">
                a
              </span>
            </div>

            {/* Font Weights List */}
            <div className="flex flex-col flex-1 w-full gap-2">
              {[
                { name: 'Extra Light', weight: 'font-[275]' },
                { name: 'Light', weight: 'font-light' },
                { name: 'Regular', weight: 'font-normal' },
                { name: 'Semi Bold', weight: 'font-semibold' },
                { name: 'Bold', weight: 'font-bold' },
                { name: 'Black', weight: 'font-black' },
              ].map((font, index) => (
                <div 
                  key={index} 
                  className={`w-full flex items-center leading-7 pt-1 border-b border-[#81DE76]`}
                >
                  <span className={`text-white text-[20px] md:text-[28px] ${font.weight}`}>
                    {font.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Palette Card */}
        <div className="w-full bg-[#F1FCFF] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-0 shadow-sm">
          
          {/* Primary Color */}
          <div className="flex-1 bg-[#3D61EC] rounded-[12px] h-[250px] p-6 flex flex-col justify-end gap-2 md:-mr-4 relative z-10 hover:z-20 hover:scale-105 transition-transform duration-300 shadow-md">
            <h4 className="text-white font-bold text-[24px]">#3D61EC</h4>
            <p className="text-white/50 font-bold text-[14px] md:text-[16px] uppercase tracking-[3px]">
              PRIMARY
            </p>
          </div>

          {/* Secondary Color */}
          <div className="flex-1 bg-[#81DE76] rounded-[12px] h-[250px] p-6 flex flex-col justify-end gap-2 md:-mr-4 border border-white/10 relative z-10 hover:z-20 hover:scale-105 transition-transform duration-300 shadow-md">
            <h4 className="text-white font-bold text-[24px]">#81DE76</h4>
            <p className="text-white/50 font-bold text-[14px] md:text-[16px] uppercase tracking-[3px]">
              SECONDARY
            </p>
          </div>

          {/* Flare Color */}
          <div className="flex-1 bg-[#6CACDF] rounded-[12px] h-[250px] p-6 flex flex-col justify-end gap-2 relative z-10 hover:z-20 hover:scale-105 transition-transform duration-300 shadow-md">
            <h4 className="text-white font-bold text-[24px]">#6CACDF</h4>
            <p className="text-white/50 font-bold text-[14px] md:text-[16px] uppercase tracking-[3px]">
              FLARE
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandIdentity;
