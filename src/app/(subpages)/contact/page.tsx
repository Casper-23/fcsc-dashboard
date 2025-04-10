import React from "react";
import ContactFormBox from "@/components/Contact/ContactFormBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FCSC & Share Your Requirement ",
  description:
    "Discover how FCSC delivers cutting-edge specialty chemicals for construction, supporting projects with expertise and sustainable practices. Call now!",
};
const Page = () => {
  return (
    <div className="p-10">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">CONTACT</h3>
      </div>
      <div className="py-5">
        <ContactFormBox />
      </div>
    </div>
  );
};

export default Page;
