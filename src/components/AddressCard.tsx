import React, { useState, useEffect } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import CustomLink from "./CustomLink";
import { IoCall } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
interface Address {
  city: string;
  short?: string;
  address: string;
  link: string;
  mobile: string;
}

interface AddressCardProps {
  data: Address[];
}

const AddressCard: React.FC<AddressCardProps> = ({ data }) => {
  const [address, setAddress] = useState<Address[]>(data);

  useEffect(() => {
    setAddress(data);
  }, [data]);

  return (
    <div className="ml-auto mr-auto ">
      <div
        style={{ borderRadius: "20px" }}
        className="md:w-[400px] md:h-[505px] border-2 p-2 overflow-auto bg-custom-red text-white"
      >
        {address ? (
          address.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start flex-1 gap-8 mb-1 sm:items-start lg:mb-0 pt-4 pl-5 pr-5 pb-4 border-b"
            >
              <div className="flex flex-col items-start justify-start gap-4">
                <h2 className="text-2xl font-bold text-left text-red0">
                  {item.city}
                </h2>
                {item.short ? <h4>({item.short})</h4> : <h4></h4>}
               {item.address && <p className="text-sm text-left text-grey2">{item.address}</p>}
               {item.mobile && <p className="text-sm text-left text-grey2">{item.mobile}</p>}
              </div>
              {
                item.link !== "" && <button className="flex ml-auto mr-2 items-center justify-center py-2 border rounded-lg cursor-pointer sm:order-none px-2 text-custom-red bg-white">
                  <CustomLink
                    href={item.link}
                    className="flex text-sm font-medium text-red0 space-x-2"
                  >
                    <span>Get Location</span>
                    <p className="mt-1 ml-1">
                      <TiLocation />
                    </p>
                  </CustomLink>
                </button>
              }
              {
                item.mobile !== "" && <button className="flex ml-auto mr-2 items-center justify-center py-2 border rounded-lg cursor-pointer sm:order-none px-2 text-custom-red bg-white">
                  <CustomLink
                    href={`tel:${item.mobile}`}
                    className="flex text-sm font-medium text-red0 space-x-2"
                  >
                    <span>Contact us</span>
                    <p className="mt-1 ml-1">
                      <IoCall />
                    </p>
                  </CustomLink>
                </button>
              }

            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
