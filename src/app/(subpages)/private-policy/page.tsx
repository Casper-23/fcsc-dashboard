import React from "react";
import { PoliciesData } from "./privatePolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FCSC Privacy Policy | Data Collection and Protection",
  description:
    "FCSC's Privacy Policy outlines our commitment to safeguarding your personal information with the highest standards of data protection.",
};
const Page = () => {
  return (
    <div className="p-8 md:p-20">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">
          PRIVACY POLICY
        </h3>
      </div>
      <div className="py-10 md:py-12 md:pr-56">
        <p className=" text-slate-700 mb-4">
          Firstchoice speciality chemicals has designed its privacy policy to
          demonstrate its commitment to fair practices. We collect certain
          information from our website visitors, and we adhere to strict privacy
          standards.
        </p>
      </div>

      <div className="md:pr-56">
        {PoliciesData.map((policy, index) => (
          <div key={index} className="mb-8">
            <h4 className="text-xl text-custom-red font-semibold">
              {policy.title}
            </h4>
            <p className="font-normal text-slate-700 mt-4">{policy.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
