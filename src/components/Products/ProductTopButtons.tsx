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

const ProductTopButtons = ({ categories, product }: Props) => {
  return (
    <div className=" md:hidden">
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category, index) => (
          <Link href={`/products/${category.url}`} key={index}>
            <div
              className={`p-1 border rounded-lg cursor-pointer py-3 duration-300 transition-all ease-in-out
        ${product === category.url ? "bg-custom-red border" : "bg-white"}
        `}
            >
              <h3
                className={`text-center text-xs whitespace-nowrap
          ${product === category.url
                    ? "font-semibold text-white"
                    : "font-medium text-custom-red"
                  }
          `}
              >
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductTopButtons;
