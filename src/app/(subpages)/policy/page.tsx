import React from "react";
import {
  PoliciesData,

} from "./PolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FCSC Policies - Our Commitment to Quality and Compliance ",
  description:
    "Learn about FCSC's commitment to high standards, sustainability, and ethical practices through our comprehensive corporate policies.",
};
const Page = () => {
  return (
    <div className="p-8 md:p-20 md:text-xl">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl md:text-4xl text-slate-700 font-medium ml-4">POLICY</h3>
      </div>

      <div className="py-10 pr-16 md:pr-56">
        <p className=" text-slate-700 mb-8">
          <span className="font-medium">
            Firstchoice Speciality Chemicals Pvt. Ltd{" "}
          </span>
          intends to achieve a leading position in the market, offering complete
          product lines in the Construction Chemical industry, through cutting
          edge technology and continuous improvement to the satisfaction of
          customers and other interested parties (employees, suppliers, clients,
          authorities, and stakeholders)
        </p>
        <p className=" text-slate-700 mb-6">
          To achieve this goal.{" "}
          <span className="font-medium">
            Firstchoice Speciality Chemicals Pvt Ltd{" "}
          </span>{" "}
          agrees to implement and maintain an effective Quality Management
          System conforming to the ISO 9000 series of standards and based on the
          following principles:
        </p>
        <ul className="list-disc space-y-4 ml-8">
          {PoliciesData.map((data, index) => (
            <li key={index} className="text-slate-700">
              {data.text}
            </li>
          ))}
        </ul>
 



      </div>


    </div>
  );
};

export default Page;
