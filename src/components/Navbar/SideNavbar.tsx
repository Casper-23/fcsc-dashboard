"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/FCSC_TM logo.webp"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLinks } from "./NavLinks";
import SocialIcons from "./SocialIcons";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const SideNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full border-b bg-white backdrop-blur-sm bg-opacity-10">
      <div className="px-2">
        <Link href="/">
          <Image
            height={100}
            className="w-20 lg:w-28 bg-white rounded-lg"
            src={logo}
            alt="logo"
            priority
          />
        </Link>
        <span className="text-xs text-center bg-white px-2 rounded-lg">
          Firstchoice Speciality Chemicals Pvt.Ltd
        </span>
      </div>
      {showSidebar ? (
        <button
          className="flex text-4xl border rounded-lg p-1 text-white items-center
           cursor-pointer fixed right-3 top-6 z-50 hover:bg-gray-500
          transition-transform duration-500"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <RxCross1 color="#FFFFFF" size={20} />
        </button>
      ) : (
        <span
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed border p-1 rounded-lg flex bg-custom-red items-center
           cursor-pointer right-3 top-6
          hover:bg-gray-500"
        >
          <RxHamburgerMenu color="#FFFFFF" size={25} />
        </span>
      )}

      <div
        className={`top-0 bg-gray-700 right-0 w-[60vw] text-custom-red fixed h-[100vh]
         z-40
         ${showSidebar
            ? "transition-style-in-circle-top-right translate-x-0 ease-in-out duration-700"
            : " translate-x-full opacity-0 ease-in-out duration-700"
          }`}
      >
        <div
          className={` lg:pl-6 pr-20 ease-linear duration-1000
           ${showSidebar
              ? " translate-y-0 opacity-100 "
              : " translate-y-full opacity-0"
            }
        `}
        >
          {/* <div className="flex p-2 relative">
            <LuSearch
              color="#B62230"
              className="absolute left-3 top-4"
              size="1rem"
            />
            {"  "}
            <input
              type="text"
              placeholder="Search for products"
              className="border p-2 text-xs text-black font-semibold bg-slate-100 rounded-lg w-full pl-5"
            />
          </div> */}

          <div
            className={`mt-12 list-none ease-in-out duration-300
          `}
          >
            {NavLinks.slice(0, 4).map((button) => (
              <Link
                href={button.route}
                key={button.text}
                onClick={() => {
                  setTimeout(() => {
                    setShowSidebar(false);
                  }, 1000);
                }}
              >
                <div
                  className={`w-full py-3 px-2 cursor-pointer transition-all ease-in-out duration-500
                rounded-r-full 
              ${pathname == button.route ? "bg-white " : ""}
              `}
                >
                  <span
                    className={` md:text-xs lg:text-lg 
                  ${pathname == button.route ? "font-semibold" : "text-white"}
                  `}
                  >
                    {button.text}
                  </span>
                </div>
              </Link>
            ))}
            <li className="relative">
              <button
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen)

                }}
                className="text-white text-base lg:text-lg p-2 flex items-center gap-1"
              >
                Media <IoIosArrowDown />
              </button>
              <motion.ul
                initial={{ height: 0 }}
                animate={{ height: isDropdownOpen ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`mt-2 w-40  text-white overflow-hidden`}
              >
                <li>
                  <Link
                    onClick={() => {
                      setTimeout(() => {
                        setShowSidebar(false);
                      }, 1000);
                    }}
                    href="/events"
                    className="block px-4 py-2 "
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setTimeout(() => {
                        setShowSidebar(false);
                      }, 1000);
                    }}
                    href="/gallery"
                    className="block px-4 py-2 "
                  >
                    Gallery
                  </Link>
                </li>
              </motion.ul>
            </li>
            {NavLinks.slice(4).map((button) => (
              <Link
                href={button.route}
                key={button.text}
                onClick={() => {
                  setTimeout(() => {
                    setShowSidebar(false);
                  }, 1000);
                }}
              >
                <div
                  className={`w-full py-3 px-2 cursor-pointer transition-all ease-in-out duration-500
                rounded-r-full 
              ${pathname == button.route ? "bg-white " : ""}
              `}
                >
                  <span
                    className={` md:text-xs lg:text-lg 
                  ${pathname == button.route ? "font-semibold" : "text-white"}
                  `}
                  >
                    {button.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <SocialIcons ClassName="w-full py-3 border" />
          </div>
          <div className="text-center whitespace-nowrap ml-3 mt-10 px-2 text-white gap-2 items-center">
            <p className="text-xs">Call +91 3335000230</p>
            <p className="text-xs text-center">
              To know more about our products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
