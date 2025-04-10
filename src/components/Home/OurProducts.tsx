"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { productsButtons, productsImages } from "./ProductData";

const OurProducts = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };
  const [slidesPerView, setSlidesPerView] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setSlidesPerView(3); // Set to 1 for small screens
      } else if (window.innerWidth < 920 && window.innerWidth > 540) {
        setSlidesPerView(3); // Set to 2 for medium screens
      } else {
        setSlidesPerView(3); // Set back to 2.5 for larger screens
      }
    };

    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredImages =
    selectedButton === 0
      ? productsImages
      : productsImages.filter(
          (product) =>
            product.category === productsButtons[selectedButton].label
        );

  return (
    <div className="md:py-12 py-10 px-8 md:px-24 w-full mb-20">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">
          Our Products
        </h3>
      </div>

      <div className="flex gap-3 mx-auto mt-10 overflow-x-scroll py-5 ">
        {productsButtons.map((product, index) => (
          <button
            key={index}
            className="border whitespace-nowrap p-1 px-3 rounded-full
          hover:bg-custom-red hover:text-white transition-all duration-300"
            onClick={() => handleButtonClick(index)}
          >
            {product.label}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:mt-4 p-4 rounded-xl shadow-md shadow-gray-500 ">
        {filteredImages.map((product, index) => (
          <Link key={index} href={product.url.toLowerCase()}>
            <div className="relative group bg-black rounded-2xl">
              <Image
                src={product.image}
                alt={`Picture of ${product.category}`}
                width={450}
                height={450}
                className="hover:shadow-lg rounded-2xl hover:shadow-black transition-all duration-500 group-hover:opacity-20"
              />

              <div className="absolute border text-white p-2 top-[40%] left-[35%]
              hidden group-hover:block">
                Click me
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
