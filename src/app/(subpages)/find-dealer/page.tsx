"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DealerCard from "./DealerCard";
import { IoIosArrowBack } from "react-icons/io";

const Page = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="md:px-20 px-10 py-8">
      <div className="flex items-center">
        <span
          onClick={goBack}
          className="cursor-pointer hover:bg-gray-200 rounded-full p-3"
        >
          <IoIosArrowBack color="#B62230" size={30} />
        </span>

        <h3 className="text-2xl text-slate-700 font-medium ml-2">
          LOCATION NAME
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-28 px-12 gap-8 mt-10">
        <DealerCard />
        <DealerCard />
        <DealerCard />
        <DealerCard />
        <DealerCard />
        <DealerCard />
      </div>
    </div>
  );
};

export default Page;
