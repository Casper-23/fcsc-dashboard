"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FAQsProps {
  title: string;
  description: string;
}

interface Props {
  faqs: FAQsProps[];
}

const FAQs = (props: Props) => {
  const [buttonIndex, setButtonIndex] = useState<number>(-1);

  const handleDropdown = (index:number) => {
    if(buttonIndex === index){
      setButtonIndex(-1);
    }
    else{
      setButtonIndex(index);
    }

  }

  return (
    <div className="p-10 md:py-20 ">
      <h3 className="text-custom-red p-3 text-lg md:text-2xl font-medium">{`FAQ's`}</h3>
      {props.faqs.map((faq, index) => (
        <div key={index} className="w-full py-2 border mb-2 rounded-lg shadow-sm"
        onClick={() => handleDropdown(index)}>
          <div className="flex items-center justify-between p-2 px-4 bg-white">

            <h4 className="text-lg text-custom-red font-semibold">
              {index +1 }{". "}{faq.title}
            </h4>
            <span
              className={`p-2 border rounded-full cursor-pointer
              ${index === buttonIndex ? "bg-custom-red text-white":""}
              `}
              onClick={() => handleDropdown(index)}>
              <IoIosArrowDown className="" />
            </span>
            {

            }
          </div>
       {index === buttonIndex &&     <hr/>}
   

            <div className={`p-3 duration-300 transition-all ease-in-out pr-5  px-2
            ${index !== buttonIndex ? "-translate-y-full absolute top-1 opacity-0":"translate-y-0"}
            `}>
                   
              <span className="text-gray-600 pt-20">{faq.description}</span>
            </div>

        </div>
      ))}
    </div>
  );
};

export default FAQs;
