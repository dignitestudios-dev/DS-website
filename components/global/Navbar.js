"use client";
import React, { useContext, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const navigate = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  const handleClick = (id) => {
    if (pathname !== "/") {
      navigate.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
      },
    }),
  };

  const menuItems = [
    { name: "Services", key: "services" },
    { name: "Technology", key: "technology" },
    { name: "Industries", key: "industries" },
    { name: "Locations", key: "locations" },
    { name: "Ecommerce", key: "ecommerce" },
    { name: "Company", key: "company" },
  ];

  const dropdownData = {
    services: [
      {
        title: "",
        image:"/service-r.png",
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
        title: "",
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
        title: "",
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
        title: "",
        image:"/tech-r.png",
        items: [
          ["React Native", "#"],
          ["Flutter",  "#"],
          ["Swift",  "#"],
       
        ],
      },
      {
        title: "",
        image:"/tech-r.png",
        items: [
         ["Kotlin",  "#"],
          ["Node.js",  "#"],
        ],
      },
    ],
    industries: [
      {
        title: "",
           image:"/ind-r.png",
        items: [
          ["Fintech",  "#"],
          ["Healthcare",  "#"],
          ["Retail",  "#"],
         
        ],
      },
      {
        title: "",
           image:"/ind-r.png",
        items: [
         ["E-commerce", "#"],
          ["Education", "#"],
         
        ],
      },
    ],
    locations: [
      {
        title: "",
           image:"/loc-r.png",
        items: [
          ["New York", "/locations/mobile-app-development-new-york"],
          ["California", "/locations/mobile-app-development-california"],
          ["Seattle", "/locations/mobile-app-development-seattle"],
  
        ],
      },
      {
        items:[
                  ["Miami", "/locations/mobile-app-development-miami"],
          ["tampa", "/locations/mobile-app-development-tampa"],
          ["chicago", "/locations/mobile-app-development-chicago"],
        ]
      },
      {
        items:[

          ["Boston", "/locations/mobile-app-development-boston"],
        ]
      }
    ],
    ecommerce: [
      {
        title: "",
           image:"/eco-r.png",
        items: [
          ["Shopify Development", "#"],
          ["WooCommerce Development", "#"],
          ["Custom Store Development", "#"],
    
        ],
      },
      {
        title: "",
           image:"/eco-r.png",
        items: [
                // ["Payment Integration", "#"],
          // ["Marketplace Solutions", "#"],
        ],
      },
    ],
    company: [
      {
        title: "",
           image:"/com-r.png",
        items: [
          ["About Us", "/about-us"],
          ["Blog", "/blog"],
          
        ],
      },
  
    ],
  };

  return (
    <div className="relative z-50">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F15C20] py-1 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 justify-end text-white text-base lg:flex hidden w-full"
      >
        <div className="flex items-center gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1"
          >
            <MdEmail size={22} />
            <span>info@dignitestudios.com</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1"
          >
            <FaPhoneAlt />
            <span>+1 877 714 1770</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-4 md:px-12 bg-transparent lg:px-28 xl:px-[120px] 2xl:px-48 h-20 flex items-center justify-between w-screen"
      >
        {/* Logo */}
        <Link aria-label="logo" href="/" className="h-auto">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            alt="Dignite Studios Logo"
            title="Dignite Studios Logo"
            width={120}
            height={70}
            src={pathname === "/" ? "/logo-dark.webp" : "/logo.webp"}
            className="h-[70px] w-[120px]"
          />
        </Link>
        <div
          className="w-auto mx-auto hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8"
          style={{
            color: pathname === "/" ? "#ffffff" : palette?.color,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-[14px] font-medium hover:text-[#F15C20] bg-transparent outline-none transition-colors duration-200"
            >
              Home
            </Link>
          </motion.div>

          {menuItems.map((item) => (
            <div
              key={item.key}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group text-[14px] relative gap-2 h-8 font-medium flex items-center bg-transparent outline-none transition-colors duration-200 ${
                  activeDropdown === item.key ? "text-[#F15C20]" : ""
                }`}
              >
                <span>{item.name}</span>
                <motion.div
                  animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowDown className="text-md" />
                </motion.div>
              </motion.button>
            </div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/portfolio"
              className="text-[14px] font-medium hover:text-[#F15C20] bg-transparent outline-none transition-colors duration-200"
            >
              Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Actions */}
        <div className="flex gap-3 items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact-us"
              className="text-[14px] font-medium bg-[#F15C20] text-white px-5 py-3 rounded-full outline-none hover:bg-[#e54a1a] transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex lg:hidden"
          >
            <img
              src={pathname === "/" ? "/menu-dark.webp" : "/hamburger.webp"}
              alt="menu"
              className="h-4"
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
       {activeDropdown && dropdownData[activeDropdown] && (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={dropdownVariants}
    onMouseEnter={handleDropdownEnter}
    onMouseLeave={handleMouseLeave}
    className={`w-full min-h-[200px] p-20 z-50 hidden lg:flex gap-8 xl:gap-20 pt-10 items-center absolute top-28 left-0 backdrop-blur-md   transform shadow-xl ${pathname === "/" ? "bg-black text-white" : "bg-white text-black"}`}
  >
    {/* LEFT SIDE CONTENT */}
    <div className="flex-1">
      <div className="flex items-center gap-20" >
      <h1 className="text-xl text-[#F15C20] gap-1 font-bold mb-6 flex items-center">
        {activeDropdown}
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.30451 0L0 11.4938H9.30451V0Z" fill="#F15C20" />
        </svg>
      </h1>

      <div className="flex gap-28">
        {dropdownData[activeDropdown].map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1, duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {section.items.map(([label, link], index) => (
              <motion.div
                key={link}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link}
                  className="hover:text-[#F15C20] flex items-center gap-2 transition-colors duration-200 group"
                >
                  <span className="group-hover:translate-x-1 text-xs font-extralight transition-transform duration-200">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    {dropdownData[activeDropdown][0]?.image && (
      <div className="w-[250px] flex-shrink-0">
        <img
          src={dropdownData[activeDropdown][0].image}
          alt="dropdown"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    )}
  </motion.div>
)}

      </AnimatePresence>
    </div>
  );
};

export default Navbar;
