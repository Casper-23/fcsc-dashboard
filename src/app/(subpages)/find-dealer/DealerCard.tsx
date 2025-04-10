import React from "react";
import Image from "next/image";

const DealerCard = () => {
  return (
    <div
      className="md:p-10 p-3 hover:shadow-[#B62230] hover:shadow-lg hover:border-none shadow-md space-y-8
     flex-col justify-between rounded-lg border-s-0 border-b-0 border-4 border-[#B62230]
     transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      <p className="text-xl text-custom-red font-semibold">Dealer Name</p>
      <p className="text-sm text-slate-600 font-medium">Mobile No</p>
      <p className="text-sm text-slate-600 font-medium">Address</p>
    </div>
  );
};

export default DealerCard;
