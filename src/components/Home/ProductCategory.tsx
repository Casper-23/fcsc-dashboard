"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { color } from "../Products/ProductImageCard";
import { ProductButtonData } from "@/Data/ProductButtonData";
import { individualProductData } from "@/Data/IndividualProductData";
import Carousel from "@/components/Home/Slider";

interface ProductCategoryProps {
  index: number;
}

const ProductCategory = ({ index }: ProductCategoryProps) => {
  const buttonData = ProductButtonData.find((data) => data.index === index);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const selectedCategoryData = buttonData?.Category
    ? buttonData.Category[selectedCategory]
    : null;

  const dataFound = (product_url: string) => {
    const url = product_url.split("/")[1];
    const data = individualProductData.find((item) => item.productUrl === url);
    return data ?? { productName: "NULL" };
  };

  const [transitionState, setTransitionState] = useState("enter");
  const [transitionState2, setTransitionState2] = useState("enter");

  const [numTabs, setNumTabs] = useState(3);

  useEffect(() => {
    const updateNumTabs = () => {
      if (window.innerWidth >= 1024) {
        setNumTabs(4); // desktop
      } else if (window.innerWidth >= 768) {
        setNumTabs(4); // tablet
      } else {
        setNumTabs(2); // mobile
      }
    };

    updateNumTabs(); // set initial value
    window.addEventListener("resize", updateNumTabs);

    return () => window.removeEventListener("resize", updateNumTabs);
  }, []);

  useEffect(() => {
    // Trigger re-enter animation on index change
    setTransitionState("exit");
    const timer = setTimeout(() => setTransitionState("enter"), 300); // Adjust the duration to match the Tailwind transition duration
    return () => clearTimeout(timer);
  }, [selectedCategoryData]);

  useEffect(() => {
    // Trigger re-enter animation on index change
    setTransitionState2("exit");
    const timer = setTimeout(() => setTransitionState2("enter"), 300); // Adjust the duration to match the Tailwind transition duration
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`px-2 lg:p-16 space-y-5 md:space-y-10 
    transform transition-transform duration-700 ${transitionState2 === "enter"
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
        }
    `}
    >
      <div className="bg-gradient-to-b shadow-md shadow-slate-500 from-[#B62230] via-[#DB3634] to-[#B62230] p-2 rounded-lg">
        <div className="border md:border-2 p-1 pb-2 rounded-lg overflow-hidden">
          <Carousel numTabs={numTabs}>
            {buttonData?.Category &&
              buttonData?.Category.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-2 py-4 group`}
                >
                  <h3
                    className={`text-xs md:text-base md:px-2 lg:text-lg text-center font-medium whitespace-nowrap
                             py-2 md:py-3 cursor-pointer border-b-2
                            hover:scale-105 transition-all ease-in-out duration-500 hover:border-2 hover:rounded-lg

                            ${selectedCategory === index
                        ? "text-custom-red group-hover:text-custom-red bg-white rounded-lg"
                        : "text-white group-hover:text-custom-red group-hover:bg-white group-hover:rounded-lg hover:bg-custom-red hover:text-white hover:rounded-lg hover:border-white hover:border-2"
                      }
                            `}
                  >
                    {category.categoryName}
                  </h3>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-12 
        mt-10 mx-5 p-5 rounded-lg shadow-md shadow-gray-400
        ease-in-out transform transition-transform duration-700 ${transitionState === "enter"
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
          }
      `}
      >
        {selectedCategoryData?.Products &&
          selectedCategoryData.Products.map((product, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-xl w-full border 
          hover:shadow-md cursor-pointer hover:shadow-slate-800 transition-all duration-300 hover:scale-105
           overflow-hidden ${color[product.color || "gray"]}
           `}
            >
              <div className="border rounded-xl">
                {dataFound(product.url).productName !== "NULL" && (
                  <Link href={`/products/${product.url}`}>
                    <Image
                      src={`/FCSC_Product_Logos/${product.name}.png`}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="bg-white p-4 object-center w-[300px] h-[100px] rounded-lg"
                      priority
                    />
                  </Link>
                )}

                {dataFound(product.url).productName === "NULL" && (
                  <Image
                    src={`/FCSC_Product_Logos/${product.name}.png`}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="bg-white p-4 object-center w-[300px] h-[100px] rounded-lg cursor-not-allowed"
                    priority
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCategory;
