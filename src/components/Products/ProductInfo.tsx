import React from "react";
import { ProductsCategoryJsonData } from "./ProductsData";

interface Props {
  productsURL: string;
}

const ProductInfo = (props: Props) => {
  const product = ProductsCategoryJsonData.find(
    (product) => product.url.toLowerCase() === props.productsURL.toLowerCase()
  );

  return (
    <div className="w-full space-y-5 px-5">
      <h1 className="font-semibold text-lg md:text-2xl text-custom-red">{product?.name}</h1>
      <p className="whitespace-pre-line text-xs md:text-lg font-medium text-gray-600"
      >{product?.description}</p>
    </div>
  );
};

export default ProductInfo;
