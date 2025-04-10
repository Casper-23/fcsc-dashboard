"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/assets/FCSC_TM logo.webp";
import instagram from "@/assets/instagram_logo.svg";
import facebook from "@/assets/facebook_logo.svg";
import linkedin from "@/assets/linkedin_logo.svg";
import youtube from "@/assets/youtube_logo.svg";
import { LuSearch } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { NavLinks } from "./NavLinks";
import SocialIcons from "./SocialIcons";
import { IoIosArrowDown } from "react-icons/io";

const Topnav = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className=" bg-white">
      <div className="flex items-center justify-between px-8">
        <div className="">

          <Link href="/">
            <Image
              height={100}
              className="w-24 lg:w-36"
              src={logo}
              alt="logo"
              priority
            />
          </Link>

          <span className="ml-3 text-base text-center">
            Firstchoice Speciality Chemicals Pvt.Ltd
          </span>
        </div>
        {/* Search bar */}
        {/* <div className="flex relative w-[280px]">
          <LuSearch
            color="#B62230"
            className="absolute left-3 top-2"
            size="1.5rem"
          />
          <input
            type="text"
            placeholder="Search for products here"
            className="border p-2 bg-slate-100 rounded-lg w-full pl-10"
          />
        </div> */}
        <a
          href="tel:+913335000230"
          target="_blank" rel="noopener"
          className="flex items-center gap-2"
        >
          <div className="flex gap-2 items-center">
            <div>
              <PiPhoneCallFill size="1.6rem" color="#B62230" />
            </div>
            <div>
              <p className="text-xs">Call +91 3335000230</p>

              <p className="text-xs">To know more about our products</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex pl-5 lg:pl-6 py-4 items-center justify-between bg-custom-red">
        <ul className="flex justify-start md:gap-2 lg:gap-10 list-none items-center">
          {NavLinks.slice(0, 4).map((button) => (
            <li key={button.text}>
              <Link
                href={button.route}
                className={`text-white text-base lg:text-lg p-2 
                  ${pathname === button.route
                    ? "underline underline-offset-4 font-semibold "
                    : "font-normal"
                  }
                `}
              >
                {button.text}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white text-base lg:text-lg p-2 flex items-center gap-1"
            >
              Media <IoIosArrowDown />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <li>
                  <Link  onClick={() => {
                      setTimeout(() => {
                        setIsDropdownOpen(false);
                      }, 1000);
                    }} href="/events" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Events</Link>
                </li>
                <li>
                  <Link  onClick={() => {
                      setTimeout(() => {
                        setIsDropdownOpen(false);
                      }, 1000);
                    }} href="/gallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gallery</Link>
                </li>
              </ul>
            )}
          </li>
          {NavLinks.slice(4).map((button) => (
            <li key={button.text}>
              <Link
                href={button.route}
                className={`text-white text-base lg:text-lg p-2 
                  ${pathname === button.route
                    ? "underline underline-offset-4 font-semibold "
                    : "font-normal"
                  }
                `}
              >
                {button.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div
      className={`flex space-x-4 ml-2 items-center mr-10
     `}
    >
      <Link
        href="https://www.instagram.com/firstchoicechemical"
        target="_blank" rel="noopener"
        className=" hover:scale-110 "
      >
        <Image
          src={instagram}
          alt="instagram"
          className="w-8 h-8"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://www.facebook.com/firstchoicespecialitychemicals"
        target="_blank" rel="noopener"
        className=" hover:scale-110 "
      >
        <Image
          src={facebook}
          alt="instagram"
          className="w-8 h-8"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/firstchoice-speciality-chemicals-pvt-ltd/"
        target="_blank" rel="noopener"
        className=" hover:scale-110 "
      >
        <Image
          src={linkedin}
          alt="instagram"
          className="w-8 h-8"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://youtube.com/@fcsc01"
        target="_blank" rel="noopener"
        className=" hover:scale-110 "
      >
        <Image
          src={youtube}
          alt="youtube"
          className="w-8 h-8"
          height={100}
          width={100}
        />
      </Link>
    </div> */}
      </div>
    </div>
  );
};

export default Topnav;
