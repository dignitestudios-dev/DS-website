"use client";
import React, { useContext, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = ({ setIsOpen }) => {
  const { palette } = useContext(GlobalContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // CLEAN ANIMATION: No "Exit" animation to prevent clashing
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, display: "none" },
    visible: {
      opacity: 1,
      y: 0,
      display: "flex",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const menuItems = [
    { name: "Services", key: "services" },
    { name: "Technology", key: "technology" },
    // { name: "Industries", key: "industries" },
    { name: "Locations", key: "locations" },
    // { name: "Ecommerce", key: "ecommerce" },
    { name: "Company", key: "company" },
  ];

  const dropdownData = {
    services: [
      {
        image: "/service-r.png",
        items: [
          [
            "Mobile App Development Services",
            "/services/mobile-app-development-services",
          ],
          [
            "Android App Development Services",
            "/services/android-app-development-services",
          ],
          [
            "iOS App Development Services",
            "/services/ios-app-development-services",
          ],
          [
            "Native App Development Services",
            "/services/native-app-development-services",
          ],
          [
            "Web App Development Services",
            "/services/web-application-development-services",
          ],
          ["PWA Development Services", "/services/pwa-development-services"],
        ],
      },
      {
        items: [
          [
            "Mobile App Support & Maintenance Services",
            "/services/mobile-application-support-and-maintenance-services",
          ],
          [
            "Mobile App Consulting Services",
            "/services/mobile-app-consulting-services",
          ],
          [
            "Mobile App Testing Services",
            "/services/mobile-app-testing-services",
          ],
        ],
      },
      {
        items: [
          [
            "Mobile App Design Services",
            "/services/mobile-app-design-services",
          ],
          [
            "Android App Design Services",
            "/services/android-mobile-app-design-services",
          ],
          ["iOS App Design Services", "/services/ios-app-design-services"],
        ],
      },
    ],
    technology: [
      {
        image: "/tech-r.png",
        items: [
          [
            "React Native App Development",
            "/technologies/react-native-app-development",
          ],
          ["Flutter App Development", "/technologies/flutter-app-development"],
          [
            "Cross Platform App Development",
            "/technologies/cross-platform-app-development",
          ],
        ],
      },
    ],
    industries: [
      {
        image: "/ind-r.png",
        items: [
          ["Fintech", "#"],
          ["Healthcare", "#"],
          ["Retail", "#"],
        ],
      },
      {
        image: "/ind-r.png",
        items: [
          ["E-commerce", "#"],
          ["Education", "#"],
        ],
      },
    ],
    locations: [
      {
        image: "/loc-r.png",
        items: [
          ["New York", "/locations/mobile-app-development-new-york"],
          ["California", "/locations/mobile-app-development-california"],
          ["Seattle", "/locations/mobile-app-development-seattle"],
        ],
      },
      {
        items: [
          ["Miami", "/locations/mobile-app-development-miami"],
          ["Tampa", "/locations/mobile-app-development-tampa"],
          ["Chicago", "/locations/mobile-app-development-chicago"],
        ],
      },
      {
        items: [
          ["Boston", "/locations/mobile-app-development-boston"],
          ["Washington", "/locations/mobile-app-development-washington"],
          ["Charlotte", "/locations/mobile-app-development-charlotte"],
        ],
      },
      {
        items: [["Texas", "/locations/mobile-app-development-texas"]],
      },
    ],
    ecommerce: [
      {
        image: "/eco-r.png",
        items: [
          ["Shopify Development", "#"],
          ["WooCommerce Development", "#"],
          ["Custom Store Development", "#"],
        ],
      },
    ],
    company: [
      {
        image: "/com-r.png",
        items: [
          ["About Us", "/about-us"],
          ["Blog", "/blog"],
        ],
      },
    ],
  };

  return (
    <div className="relative z-50">
      {/* Main Navigation */}
      <nav className="px-4 md:px-12 bg-transparent lg:px-28 xl:px-[120px] 2xl:px-48 h-20 flex items-center justify-between w-screen relative z-[60]">
        <Link aria-label="logo" href="/" className="h-auto">
          <img
            alt="Dignite Studios Logo"
            width={120}
            height={70}
            src={pathname === "/" ? "/logo-dark.webp" : "/logo.webp"}
            className="h-[70px] w-[120px] object-contain"
          />
        </Link>

        <div
          className="w-auto mx-auto hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8"
          style={{ color: pathname === "/" ? "#ffffff" : palette?.color }}
        >
          <Link
            href="/"
            className="text-[14px] font-medium hover:text-[#F15C20] transition-colors"
          >
            Home
          </Link>

          {menuItems.map((item) => (
            <div
              key={item.key}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
              className="relative h-full flex items-center"
            >
              <button
                className={`group text-[14px] gap-2 font-medium flex items-center bg-transparent outline-none transition-colors duration-200 h-full ${
                  activeDropdown === item.key ? "text-[#F15C20]" : ""
                }`}
              >
                <span>{item.name}</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${activeDropdown === item.key ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          ))}

          <Link
            href="/case-studies"
            className="text-[14px] font-medium hover:text-[#F15C20] transition-colors"
          >
            Case Studies
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href="/contact-us"
            className="text-[14px] font-medium bg-[#F15C20] text-white px-5 py-3 rounded-full hover:bg-[#e54a1a] transition-colors"
          >
            Get a Free Quote
          </Link>
          <button onClick={() => setIsOpen(true)} className="flex lg:hidden">
            <img
              src={pathname === "/" ? "/menu-dark.webp" : "/hamburger.webp"}
              alt="menu"
              className="h-4"
            />
          </button>
        </div>
      </nav>

      {/* FIXED ANIMATED DROPDOWN */}
      {menuItems.map((menuItem) => (
        <motion.div
          key={menuItem.key}
          initial="hidden"
          animate={activeDropdown === menuItem.key ? "visible" : "hidden"}
          variants={dropdownVariants}
          onMouseEnter={() => handleMouseEnter(menuItem.key)}
          onMouseLeave={handleMouseLeave}
          className={`w-full min-h-[200px] px-20 pb-20 pt-10 z-50 hidden lg:flex gap-8 xl:gap-20 items-center absolute top-20 left-0 backdrop-blur-md shadow-xl border-t border-white/10 ${
            pathname === "/" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-20">
              <h1 className="text-xl text-[#F15C20] gap-1 font-bold mb-6 flex items-center capitalize">
                {menuItem.name}
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M9.30451 0L0 11.4938H9.30451V0Z" fill="#F15C20" />
                </svg>
              </h1>

              <div className="flex gap-28">
                {dropdownData[menuItem.key]?.map((section, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-6">
                    {section.items.map(([label, link], idx) => (
                      <Link
                        key={idx}
                        href={link}
                        className="hover:text-[#F15C20] flex items-center gap-2 transition-colors duration-200 group"
                      >
                        <span className="group-hover:translate-x-1 text-xs font-extralight transition-transform duration-200">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {dropdownData[menuItem.key]?.[0]?.image && (
            <div className="w-[250px] flex-shrink-0">
              <img
                src={dropdownData[menuItem.key][0].image}
                alt={menuItem.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
