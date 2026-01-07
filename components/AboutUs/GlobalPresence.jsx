"use client"
import React, { useState } from 'react';

const GlobalPresence = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    {
      id: 1,
      country: 'FLORIDA, US',
      countryCode: 'US',
      address: '3505 Lake Lynda Drive Orlando University, #200, Orlando, FL 32817',
      mapUrl: 'https://www.google.com/maps/dir//3505+Lake+Lynda+Drive+Orlando+University,+%23200,+Orlando,+FL+32817/@37.0625,-95.677068,4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e768ece5bcf7fd:0x9acdae73c77a1cfe!2m2!1d-81.2218777!2d28.600887?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      mapImage: 'https://images.unsplash.com/photo-1589216532372-1c2c3b7e8f87?w=800&q=80',
      markers: [
        { top: '45%', left: '60%', label: 'Orlando' }
      ]
    },
    {
      id: 2,
      country: 'DUBAI, UAE',
      countryCode: 'AE',
      address: 'King Salman Bin Abdulaziz Al Saud St - Marsa Dubai - Dubai Marina - Dubai',
      mapUrl: 'https://www.google.com/maps/dir//King+Salman+Bin+Abdulaziz+Al+Saud+St+-+Marsa+Dubai+-+Dubai+Marina+-+Dubai+-+United+Arab+Emirates/@37.0625,-95.677068,4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6b53c6fe36a1:0xb6dc0a807ec56420!2m2!1d55.1416539!2d25.0853917?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      mapImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      markers: [
        { top: '40%', left: '50%', label: 'Dubai Marina' }
      ]
    },
    {
      id: 3,
      country: 'WYOMING, US',
      countryCode: 'US',
      address: '312 W 2nd St, Casper, WY 82601',
      mapUrl: 'https://www.google.com/maps/dir//312+W+2nd+St,+Casper,+WY+82601/@37.0625,-95.677068,4z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x8760bca480ca44a5:0xf5d42b5e551b1978!2m2!1d-106.3291481!2d42.8493232?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
      markers: [
        { top: '45%', left: '50%', label: 'Casper' }
      ]
    },
    {
      id: 4,
      country: 'KARACHI, PK',
      countryCode: 'PK',
      address: 'Plot 8 B, Sindhi Muslim Cooperative Housing Society Block A SMCHS, Karachi',
      mapUrl: 'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDzSAQc0NjFqMGo0qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KRcKs7eiP7M-MVwnf5Cz0Y4V&daddr=Plot+8+B,+Sindhi+Muslim+Cooperative+Housing+Society+Block+A+Sindhi+Muslim+CHS+(SMCHS),+Karachi,+Pakistan',
      mapImage: 'https://images.unsplash.com/photo-1581972145384-c500c45002f9?w=800&q=80',
      markers: [
        { top: '50%', left: '50%', label: 'Karachi' }
      ]
    }
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Global <span className="text-orange-500">Presence</span>
          </h2>
          <p className="text-gray-600  text-sm md:text-lg leading-relaxed">
            Dignite Studios maintains a strong presence across the United States, enabling us to work closely with businesses nationwide. 
            With operations spanning New York, California, and Texas, our teams stay connected to diverse markets, emerging trends, and 
            client needs, delivering reliable support and localized expertise wherever our partners operate.
          </p>
        </div>

        {/* Locations Grid - Flexbox for single row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-12">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`
                relative rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-700 ease-in-out
                w-full sm:w-[calc(50%-0.5rem)] lg:w-auto
                ${hoveredLocation === location.id 
                  ? 'lg:flex-[2] shadow-2xl' 
                  : 'lg:flex-1'
                }
                ${hoveredLocation !== null && hoveredLocation !== location.id 
                  ? 'lg:opacity-70' 
                  : 'opacity-100'
                }
              `}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Map Background */}
              <div className="relative h-80 lg:h-[450px]">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.address)}&zoom=15`}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                {/* View Location Button - Shows on Hover */}
                {hoveredLocation === location.id && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20 animate-fadeIn">
                    <a 
                      href={location.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-orange-500 text-xs h-20 w-20 text-center flex items-center justify-center rounded-full font-semibold shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      VIEW LOCATION
                    </a>
                  </div>
                )}

                {/* Location Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden">
                      <img 
                        src={`https://flagcdn.com/w80/${location.countryCode.toLowerCase()}.png`}
                        alt={`${location.country} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide">
                      {location.country}
                    </span>
                  </div>
                  
                  {/* Address - Shows on Hover */}
                  <div className={`
                    text-white text-sm transition-all duration-700 overflow-hidden
                    ${hoveredLocation === location.id 
                      ? 'max-h-20 opacity-100 mt-2' 
                      : 'max-h-0 opacity-0'
                    }
                  `}>
                    {location.address}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;