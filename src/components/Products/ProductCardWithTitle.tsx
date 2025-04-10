"use client";
import React, { FC } from "react";
import Link from "next/link";
interface Product {
  name: string;
  url: string;
}

interface SubCategory {
  Title: string;
  Products: Product[];
}

interface ProductCardWithTitleProps {
  title: string;
  subtitle: string;
  subCategory: SubCategory[];
}

const ProductCardWithTitle: FC<ProductCardWithTitleProps> = ({
  title,
  subtitle,
  subCategory,
}) => {
  return (
    <div className="space-y-2 sub-category">
      <div className="md:text-2xl text-custom-red font-medium">{title}</div>
      <div className="md:text-xl pl-3 text-gray-600 font-semibold">
        {subtitle}
      </div>

      <div className=" pb-4 px-2 w-[350px] md:w-[500px] lg:w-[1000px] space-y-3">
        {subCategory.map((category, index) => (
          <div
            key={index}
            className="border shadow-md rounded-lg p-2 overflow-x-auto sub-category"
          >
            {category.Title !== subtitle && ( // Check if category.Title is different from subtitle
              <span className="md:text-lg text-gray-600">{category.Title}</span>
            )}
            <div className="flex w-full p-2">
              {category.Products.map((product, index) => (
                <div
                  className="mx-2 w-[200px] h-[100px] p-1 border rounded-lg text-custom-red hover:text-white hover:bg-custom-red
                   cursor-pointer transition duration-700 ease-in-out"
                  key={index}
                >
                  <Link href={product.url}>
                    <span className=" md:text-lg font-medium whitespace-nowrap">
                      {product.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardWithTitle;
