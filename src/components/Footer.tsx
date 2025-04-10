import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { TbMailOpenedFilled } from "react-icons/tb";

import SocialIcons from "./Navbar/SocialIcons";
import logo from "@/assets/FCSC_TM logo.webp";
import policyLogo1 from "@/assets/91_4c.png";
import policyLogo2 from "@/assets/14001.png";
import { footerData } from "@/Data/Footer";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pb-4 w-full border-t">
      <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full mx-auto">
          {footerData.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl py-4 font-semibold underline underline-offset-8  text-custom-red ">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <h2
                    key={linkIndex}
                    className="text-base md:text-lg text-slate-600 hover:underline hover:text-custom-red cursor-pointer transition-all ease-in-out duration-300"
                  >
                    <Link href={link.url.toLowerCase()}>{link.name}</Link>
                  </h2>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center md:w-4/12 md:mt-0">
          <div className="flex-col items-center justify-center h-full text-center text-white">
            <Link href={"/"}>
              <div className="flex justify-center">
                <Image
                  src={logo}
                  alt="Firstchoice speciality chemicals"
                  height={80}
                  className="object-fill object-center"
                />
              </div>
            </Link>

            <div className="flex justify-center mx-auto mt-8 mb-4 md:max-w-[250px] items-center gap-2 text-slate-600 p-2 rounded-lg">
              Shrachi Tower, Wing B, 3rd Floor, 686 Anandapur, E.M. Bypass, Kolkata - 700107
            </div>
            <div className="flex justify-center mx-auto mt-8 mb-4 w-fit items-center gap-2 bg-white p-2 rounded-lg">
              <a
                href="tel:+913335000230"
                target="_blank" rel="noopener"
                className="flex items-center gap-2"
              >
                <IoCallSharp className="text-2xl text-custom-red" />
                <span className="text-gray-600">+91 33 3500 0230 </span>
              </a>
            </div>
            <div className="flex justify-center mx-auto mt-8 mb-4 w-fit items-center gap-2 bg-white p-2 rounded-lg">
              <a
                href="mailto:support@fcsc.co.in"
                target="_blank" rel="noopener"
                className="flex items-center gap-2"
              >
                <TbMailOpenedFilled className="text-2xl text-custom-red" />
                <span className="text-gray-600">support@fcsc.co.in</span>
              </a>
            </div>
            <div className="flex justify-center items-center mt-4 mx-2">
              <SocialIcons ClassName="w-40 md:w-60 p-3 shadow-md" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-slate-800 " />
      <div className="flex gap-10 justify-center md:justify-end px-20 pt-5">
        <Image src={policyLogo1} width={200} height={200} alt="ISO:9001"
          className="h-20 w-20" />
        <Image src={policyLogo2} width={200} height={200} alt="ISO:9001"
          className="h-20 w-20" />
      </div>
      <div className="md:flex  justify-center items-center md:justify-between p-5 md:px-10 text-lg text-center w-full">
        <div className="">
          © 2025, Firstchoice Speciality Chemicals Pvt.Ltd. All Rights Reserved.
        </div>
        <div className="">
          All Rights Reserved |
          <Link href="/private-policy">
            <span className="ml-3 text-blue-500">Privacy Policy</span>
          </Link>
        </div>
      </div>
      <div className="w-full text-center group cursor-pointer">
        <Link href="https://www.scalenowtech.com/" target="_blank" rel="noopener">
          <h3>Designed and Developed by</h3>
          <h3 className="group-hover:text-custom-red duration-300 cursor-pointer font-medium underline underline-offset-2 transition-all ease-in-out">
            Scalenow Technosolutions Pvt Ltd.
          </h3>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
