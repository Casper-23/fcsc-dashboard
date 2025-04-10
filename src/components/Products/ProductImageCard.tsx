import React from "react";
import Image from "next/image";
import { individualProductData } from "@/Data/IndividualProductData";
import { ProductsCategoryJsonData } from "./ProductsData";
import Link from "next/link";

interface Props {
  productsURL: string;
}


interface Color {
  [key: string]: string;
}

export const color: Color = {
  green: "bg-[#00B050]",
  blue: "bg-[#5B9BD5]",
  red: "bg-[#EE2D00]",
  yellow: "bg-[#ED9513]",
  dark_yellow: "bg-[#7F6000]",
  gray: "bg-[#7F7F7F]",
  purple: "bg-[#7D0DC3]",
  brown: "bg-[#CD7F32]",
};

const ProductImageCard = (props: Props) => {
  const product = ProductsCategoryJsonData.find(
    (product) => product.url.toLowerCase() === props.productsURL.toLowerCase()
  );

  const dataFound = (product_url: string) => {
    const data = individualProductData.find(
      (item) => item.productUrl.toLowerCase() === product_url.toLowerCase()
    );
    // console.log(data);
    return data ?? { productName: "NULL" };
  };




  return (
    <div
      className="w-full space-y-10 bg-slate-200 rounded-lg shadow-md border
     border-slate-500 shadow-slate-600 p-2 md:p-10"
    >
      {product?.subCategories.map((item, index) => (
        <div key={index} className="w-full md:w-3/4">
          <h3 className="text-xl text-gray-800 font-bold p-4">{item.name}</h3>
          <div className="flex justify-center w-full md:p-0">
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 gap-y-6 md:gap-5">
              {item.products.map((product, index) => (
                <div
                  key={index}
                  className={`relative group p-2 md:p-4 rounded-xl w-[150px] h-[115px] md:w-full md:h-full
                            hover:shadow-md hover:shadow-slate-800 transition-all duration-300 hover:scale-105 overflow-hidden
                            ${color[product.color || "gray"]}`}>

                  {dataFound(product.url).productName !== "NULL" && (
                    <Link href={`/products/${props.productsURL.toLowerCase()}/${product.url.toLowerCase()}`}>
                      <div className="group-cursor-pointer">
                        <Image
                          src={`/FCSC_Product_Logos/${product.name}.png`}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="bg-white p-2 md:p-4 object-center object-contain w-[200px] h-[100px] rounded-lg"
                          priority
                        />
                      </div>
                    </Link>
                  )}

                  {dataFound(product.url).productName === "NULL" && (
                    <div className="cursor-not-allowed">
                      <Image
                        src={`/FCSC_Product_Logos/${product.name}.png`}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="bg-white p-4 object-center w-[300px] h-[100px] rounded-lg"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductImageCard;
