"use client";
import React, { FC } from "react";
import Link from "next/link";

interface options {
  name: string;
  url?: string;
}
interface DropdownProps {
  options: options[];
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  return (
    <div className="">
      {options.map((option, index) => (
        <Link key={index} href={`/products/${option.url}`}>
          <div
            className="p-1 whitespace-nowrap flex md:mb-0.5 rounded-md
            text-custom-red hover:text-white hover:bg-custom-red transition-all duration-300
            hover:underline hover:underline-offset-4 cursor-pointer"
          >
            <span className="text-xs md:text-lg md:px-3 cursor-pointer">
              {option.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
