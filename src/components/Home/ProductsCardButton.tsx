

import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { ProductButtonData, cardData } from "@/Data/ProductButtonData";

interface ProductsCardButtonProps {
  index: number;
}

const ProductsCardButton: FC<ProductsCardButtonProps> = ({ index }) => {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const buttonData = ProductButtonData.find((data) => data.index === index);

  return (
    <div className="py-10 px-4 md:px-20 ">
      <div
        className={`relative w-full
        transition-all items-center
        duration-1000 ease-linear 
        `}
        ref={myRef1}
      >
        <div
          className={`relative vignette-overlay_home w-full rounded-3xl border overflow-hidden`}
        >
          <Image
            src={buttonData?.image as StaticImageData | ""}
            alt="Firstchoice speciality chemicals"
            width={1200}
            height={1200}
            className={`w-full h-[400px] object-cover transition-all transform duration-1000 ease-in-out

           `}
          />
          <div
            className={`absolute z-10 px-10 bottom-5 lg:bottom-10
               transition-all transform duration-1000 ease-linear
          `}
          >
            <div
              className={` text-white  text-3xl md:text-6xl uppercase`}
            >
              {buttonData?.name}
            </div>
            <div
              className={` max-w-[90%] text-white text-xs md:text-lg `}
            >
              {buttonData?.description}
            </div>
          </div>
        </div>
      </div>

      {index === 0 && (
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center mt-5 md:mt-20
          md:gap-10 w-full h-full py-10"
          ref={myRef2}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`p-4 lg:p-2
          `}
            >
              <div
                className={`relative group bg-custom-red w-60 h-40 rounded-lg
                hover:bg-slate-200 shadow-md shadow-slate-600 hover:scale-105 
                overflow-hidden transition-all
            duration-1000 ease-in-out
              ${
                myElementIsVisible2
                  ? "translate-y-0  opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              >
                <div
                  className="absolute bg-slate-200 group-hover:bg-custom-red p-4 md:p-6 rounded-tl-lg rounded-br-lg
                transition-all duration-1000 transform ease-in-out"
                />
                <div className="lg:px-8 md:px-4 py-12 flex items-center justify-center">
                  <span
                    className="text-white mt-8  md:mt-4 text-center text-xs md:text-sm lg:text-lg font-semibold
                    group-hover:text-custom-red transition-all duration-300 ease-in-out
                  "
                  >
                    {card.label}
                  </span>
                </div>
           
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsCardButton;
