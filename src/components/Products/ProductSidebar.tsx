import React from "react";
import Link from "next/link";

interface ProductsCategoryData {
  name: string;
  url: string;
}

interface Props {
  categories: ProductsCategoryData[];
  product: string;
}

const ProductSidebar = ({ categories, product }: Props) => {
  return (
    <div className="md:p-5 hidden md:block">
      <div className="bg-gray-100 rounded-lg border h-fit p-2 md:p-5">
        {categories.map((category, index) => (
          <Link href={`/products/${category.url.toLowerCase()}`} key={index}>
            <div
              className={`p-1 md:p-3  rounded-lg cursor-pointer py-3 duration-300 transition-all ease-in-out
        ${product === category.url ? "bg-white border" : ""}
        `}
            >
              <h3
                className={`text-center text-xs md:text-lg text-custom-red whitespace-nowrap
          ${product === category.url ? "font-semibold" : "font-medium"}
          `}
              >
                - {category.name} -
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
