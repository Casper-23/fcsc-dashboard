"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ourMission from "@/assets/career/MISSION.jpg";
import ourVision from "@/assets/career/our vision.jpg";
import Head from "next/head";

const Page = () => {
  const [isHovered, setIsHovered] = useState<number | -99>(-1);

  const handleMouseEnter = (div: number) => {
    setIsHovered(div);
  };
  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  const productLinks = [
    { name: "Admixture Systems", url: "/products/AdmixtureSystems" },
    { name: "Waterproofing", url: "/products/Waterproofing" },
    { name: "Grouts/Anchors", url: "/products/GroutsAndAnchors" },
    { name: "Repair/Restoration", url: "/products/RepairsAndRestoration" },
    { name: "Flooring", url: "/products/Flooring" },
    { name: "Adhesive & Sealants", url: "/products/AdhesiveAndSealants" },
    { name: "Dry Mix Mortars", url: "/products/DryMixMortars" },
  ];

  return (
    <>
      <Head>
        <title>FCSC - India&#39;s Best Specialty Chemicals Company</title>
        <meta
          name="description"
          content="Firstchoice Speciality Chemicals is India's leading specialty chemicals company, providing innovative solutions for durable and high-performance construction."
        />
      </Head>
      <div className="p-5 md:px-16">
        <div className="flex md:pt-10 lg:px-10">
          <span className="h-10 w-2 rounded-lg bg-custom-red" />
          <h3 className="text-3xl text-slate-700 font-medium ml-4">COMPANY</h3>
        </div>

        <div className="p-5 md:px-20 md:pr-56 space-y-6">
          <p className="text-slate-700">
            <span className="font-medium text-custom-red">
              Firstchoice Speciality Chemicals Pvt. Ltd.
            </span>{" "}
            stands as a renowned leader in construction chemicals manufacturing. Our
            dedicated team is committed to delivering innovative, high-quality
            solutions for the construction industry. We strictly adhere to
            industry-specific standards, ensuring 100% reliability in our products. Our
            relentless research and development efforts focus on addressing evolving
            industry dynamics. We provide unwavering technical support to assist our
            customers in selecting the most suitable products and optimizing their
            construction processes. Our unwavering commitment to sustainability drives
            us to develop products that minimize waste, reduce carbon footprint, and
            enhance overall sustainability.
          </p>


          <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 md:gap-7">
            {productLinks.map((data, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-full bg-white p-3 text-xs md:text-lg md:p-8 text-center rounded-md shadow-md  hover:scale-105 duration-300
            transition-all ease-in-out cursor-pointer hover:font-medium hover:border hover:border-red-500 hover:text-custom-red"
              >
                <Link href={data.url.toLowerCase()}>
                  <li className="">{data.name}</li>
                </Link>
              </div>
            ))}
          </ul>
        </div>

        <div className="place-self-center w-full lg:p-10">
          <div className="grid md:grid-cols-2 lg:p-5 h-full w-full gap-20 lg:mr-28 grid-cols-1">
            <div
              className={`rounded-[40px] shadow-md  custom-border bg-gray-800 relative vignette-overlay overflow-hidden `}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <h3
                className={`absolute text-2xl z-20 top-10 center-to-left px-2
              font-semibold ${isHovered === 0
                    ? "center-to-left-enter text-purple-400"
                    : "center-to-left-exit text-4xl lg:text-5xl"
                  }`}
              >
                Our Vision
              </h3>
              <p
                className={`absolute z-20 top-20 md:bottom-8 appear-from-bottom lg:mb-1 lg:pr-10 text-white text-base md:text-xl overflow-hidden ${isHovered === 0
                  ? "appear-from-bottom-enter"
                  : `appear-from-bottom-exit`
                  }`}
              >
                {`We aim to become one of the leading construction chemicals manufacturers and solutions providers in the country, exceeding quality benchmarks.`}
              </p>
              <Image
                src={ourVision}
                alt="Product 2"
                width={2050}
                height={1350}
                className={` w-[2500px] h-[300px] rounded-[20px] transition-all duration-500 ${isHovered === 0 ? "opacity-70 blur-md" : ""
                  }`}
              />
            </div>
            <div
              className={`rounded-[30px] shadow-md custom-border bg-gray-800 relative vignette-overlay overflow-hidden `}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <h3
                className={`absolute top-12 left-0 z-20 center-to-left font-semibold
                  px-2  ${isHovered === 1
                    ? "center-to-left-enter lg:mt-3"
                    : "center-to-left-exit text-3xl lg:text-5xl"
                  }`}
              >
                Our Mission
              </h3>
              <p
                className={`absolute z-20 top-20 md:bottom-8 appear-from-bottom lg:mb-1 lg:pr-10 text-white text-base md:text-xl overflow-hidden ${isHovered === 1
                  ? "appear-from-bottom-enter"
                  : `appear-from-bottom-exit`
                  }`}
              >
                {`Is to empower builders, contractors, and engineers with cutting-edge chemical solutions that optimize construction processes, improve structural integrity, and minimize environmental impact.`}
              </p>
              <Image
                src={ourMission}
                alt="Product 2"
                width={450}
                height={550}
                className={` w-[2500px] h-[300px] rounded-[20px] object-cover transition-ease duration-1000
              opacity-90  ${isHovered === 1 ? "opacity-100 blur-md" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
