import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef();
  const toggleModal = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const pathname = usePathname();
  const navigate = useRouter();
  const handleClick = (id) => {
    if (pathname != "/") {
      navigate.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const navigateTo = (link) => {
    navigate.push(link);
  };
  return (
    <div
      onClick={(e) => toggleModal(e)}
      className={`w-screen h-screen z-[10000]  transition-all duration-200 fixed top-0 left-0 flex  items-start justify-end  ${
        isOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
      }`}
    >
      <div
        ref={sidebarRef}
        className="w-[70%] md:w-1/2 lg:w-1/3  h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-start items-start py-6   "
        style={{ background: palette?.background }}
      >
        <div className="w-full flex gap-3 justify-start items-center px-10">
          <Link href="/">
            <Image
              alt="Dignite Studios Logo"
              loader={customLoader}
              width={100}
              height={64}
              src={theme == "light" ? "/logo.webp" : "/logo-dark.webp"}
              title="Dignite Studios Logo"
              className="h-16"
            />
          </Link>
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start gap-4 mt-12 px-10 overflow-y-scroll">
          <button
            onClick={() => navigateTo("/")}
            className={`text-[14px] h-8 font-medium hover:text-orange-600
            } bg-transparent  outline-none`}
          >
            Home
          </button>
          <button
            className={`w-full group text-[14px] hover:text-orange-600 relative gap-4 h-auto font-medium flex flex-col bg-transparent outline-none`}
          >
            <div className="w-full flex  justify-between items-center">
              <span>Services</span>
              <IoIosArrowDown className="text-md group-hover:rotate-180" />
            </div>
            <div
              className={`w-full h-auto pl-2  rounded-2xl text-md hidden transition-all duration-150 group-hover:flex  flex-col gap-4 justify-start items-start text-start`}
              style={{ color: palette?.color }}
            >
              <Link
                href="/services/mobile-app-development-services"
                className={`hover:text-orange-600 `}
              >
                Mobile App Development Services
              </Link>
              <Link
                href="/services/mobile-app-design-services"
                className={`hover:text-orange-600 `}
              >
                Mobile App Design Services
              </Link>
              <Link
                href="/services/mobile-app-consulting-services"
                className={`hover:text-orange-600 `}
              >
                Mobile App Consulting Services
              </Link>
              <Link
                href="/services/mobile-app-testing-services"
                className={`hover:text-orange-600 `}
              >
                Mobile App Testing Services
              </Link>
              <Link
                href="/services/ios-app-development-services"
                className={`hover:text-orange-600 `}
              >
                IOS App Development Services
              </Link>
              <Link
                href="/services/native-app-development-services"
                className={`hover:text-orange-600 `}
              >
                Native App Development Services
              </Link>
              <Link
                href="/services/android-app-development-services"
                className={`hover:text-orange-600 `}
              >
                Android App Development-services
              </Link>
              <Link
                href="/services/android-mobile-app-design-services"
                className={`hover:text-orange-600 text-start`}
              >
                Android Mobile App Design-services
              </Link>
              <Link
                href="/services/web-application-development-services"
                className={`hover:text-orange-600 `}
              >
                Web App Development Services
              </Link>
              <Link
                href="/services/pwa-development-services"
                className={`hover:text-orange-600 `}
              >
                PWA Development Services
              </Link>
              <Link
                href="/services/mobile-application-support-and-maintenance-services"
                className={`hover:text-orange-600 text-start`}
              >
                Mobile App Support And Maintenance Services
              </Link>
            </div>
          </button>

          <button
            onClick={() => handleClick("case-studies")}
            className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
          >
            Case Studies
          </button>
          <button
            onClick={() => navigateTo("/about-us")}
            className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
          >
            About us
          </button>
          <button
            onClick={() => navigateTo("/contact-us")}
            className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
