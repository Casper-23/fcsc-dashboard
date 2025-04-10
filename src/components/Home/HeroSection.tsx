"use client";
import React, { SetStateAction, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import heroImage from "@/assets/hero_image.jpg";
import { MdPermContactCalendar } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import Link from "next/link";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

interface HeroSectionProps {
  selectedButton: number;
  setSelectedButton: React.Dispatch<SetStateAction<number>>;
}

const HeroSection = ({
  selectedButton,
  setSelectedButton,
}: HeroSectionProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const buttons = [
    { label: "ABOUT US" },
    { label: "BUILDING" },
    { label: "INFRA" },
    { label: "INDUSTRY" },
    { label: "HYDRO POWER" },
  ];

  const { ref: myRefHome, inView: myHomeBannerIsVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: myRefbuttons, inView: myRefbuttonsIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="">
      <div className="relative">
        <div
          className={`vignette-overlay 
           transition-all
           duration-300 ease-in-out
             ${myHomeBannerIsVisible
              ? " -translate-x-0 opacity-100"
              : " -translate-x-full opacity-0"
            }
        `}
          ref={myRefHome}
        >
          <Image
            src={heroImage}
            alt="Firstchoice speciality chemicals"
            width={1800}
            height={1800}
            className="object-cover shadow-black w-full h-[600px] md:h-[800px]"
          />
        </div>
        <div
          className={`absolute bottom-1/3 md:bottom-1/3 left-10 md:left-20 z-20 text-white
        transition-all duration-1000 ease-in-out
        ${myHomeBannerIsVisible
              ? " opacity-100 translate-x-0"
              : " opacity-50 translate-x-full ml-80"
            }
        `}
        >
          <h1 className="text-2xl md:text-5xl font-medium text-shadow-custom leading-tight">
            Develop a Sustainable Future
          </h1>
          <h1 className="text-2xl md:text-5xl font-medium text-shadow-custom leading-tight">
            with High Efficiency Construction Chemicals
          </h1>
        </div>

        <div
          className={`absolute flex rounded-t-lg z-10 bottom-0 mx-10 md:left-20 
        md:right-20 w-[330px] md:w-[600px] lg:w-[900px] bg-white
        transition-all duration-1000 ease-in-out
              ${myRefbuttonsIsVisible
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-10"
            }
        
        `}
          ref={myRefbuttons}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`p-2 md:p-3 lg:p-5 text-xs font-bold md:text-base transition-all duration-500
               ${selectedButton === index
                  ? `text-white bg-custom-red rounded-tl-lg rounded-br-lg border-0`
                  : `text-custom-red hover:bg-gray-300`
                }`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <Link href="/contact">
          <div className="group">
            <div
              className={`absolute z-20 bg-white hover:bg-custom-red shadow-lg hover:shadow-black
        right-0 top-16 md:top-8 border border-white border-r-0 
        rounded-l-lg  transition-all duration-1000 ease-in-out 
        ${myHomeBannerIsVisible ? " opacity-100 translate-x-0" : " opacity-50 translate-x-full ml-80"}
        `}
            >
              <div className="bn5">
                <div className="flex justify-evenly items-center px-2 w-44 md:w-48 transition-all duration-1000 ease-in-out  group-hover:bg-custom-red group-hover:text-white text-custom-red bg-white">
                  <span>
                    <MdPermContactCalendar size={25} />
                  </span>
                  <span
                    className="inset-0 text-xs md:text-base font-medium
            hover:font-semibold "
                  >
                    QUICK ENQUIRY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* <Link href="https://fcsc-bucket.blr1.cdn.digitaloceanspaces.com/fcsc_brochure.pdf"> */}
        <div
          className={`absolute z-20 shadow-lg hover:shadow-black
       right-0 top-[8rem] xl:top-[9rem] md:top-[6rem] border border-white border-r-0
        rounded-l-lg text-custom-red
        transition-all duration-1000 ease-in-out
        ${myHomeBannerIsVisible
              ? " opacity-100 translate-x-0"
              : " opacity-50 translate-x-full ml-80"
            }
        
        `}
        >
          <div className="relative ">
            <button
              className="bn5 flex justify-evenly items-center px-2 w-48 md:w-52 bg-white text-custom-red"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="transition-all duration-1000 ease-in-out  group-hover:bg-custom-red group-hover:text-white text-custom-red bg-white flex items-center space-x-2">
                {showDropdown ? (
                  <IoCaretUpOutline size={20} className="ml-1" />
                ) : (
                  <IoCaretDownOutline size={20} className="ml-1" />
                )}
                <span className="inset-0 text-xs md:text-xs font-medium   
                  hover:font-semibold transition-all duration-500">
                  DOWNLOAD BROCHURE
                </span>
              </div>
            </button>
            {showDropdown && (
              <div
                className="absolute bg-white  border border-white  border-t-0 rounded-b-lg z-20 shadow-lg  w-48 md:w-52 transition-all duration-500"

              >
                <ul className="text-custom-red ">
                  <Link href="https://fcsc-bucket.blr1.cdn.digitaloceanspaces.com/FCSC%20Brochure.pdf" target="_blank">
                    <li className="hover:bg-custom-red hover:text-white text-custom-red bg-white py-1 px-2 transition-all cursor-pointer duration-500">
                      Admixture System Brochure

                    </li>
                  </Link>
                  <Link href="https://fcsc-bucket.blr1.cdn.digitaloceanspaces.com/FCSC%20Construction%20System%20New%20Bochure.pdf" target="_blank">
                    <li className="hover:bg-custom-red hover:text-white text-custom-red bg-white py-1 px-2 transition-all cursor-pointer duration-500">
                      Construction System Brochure
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
