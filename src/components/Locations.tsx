"use client";
import React, { useState, ChangeEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import addressData from '@/Data/our-presence';
import AddressCard from './AddressCard';
interface Address {
    address: string;
    city: string;
    short?: string;
    link: string;
    mobile: string;
}
const Locations = () => {
    const [filter, setFilter] = useState<Address[]>(addressData);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        if (value === "") {
            setFilter(addressData);
        } else {
            const newArray = addressData.filter(
                (item) =>
                    item.address.toLowerCase().includes(value) ||
                    item.city.toLowerCase().includes(value) ||
                    item.short?.toLowerCase().includes(value)
            );
            setFilter(newArray);
        }
    };
    return (
        <div className='space-y-8 pb-10 bg-[#fff] items-center'>
            <div className="flex flex-col gap-4 px-4 lg:flex-row lg:px-9">
                {/* <div className="md:w-3/5 md:text-5xl font-semibold mt-5 md:text-center pl-3 md:pl-0 text-[25px]">
                    Our Location
                </div> */}

                <div className="md:w-2/5 pt-5 w-full">
                    <div>
                        <div className="md:w-full ml-auto mr-auto mt-4 mb-1 text-center md:pl-5">
                            <div className="p-3 pr-5 md:mr-10 h-50 border-grey4 border shadow-lg rounded-lg bg-[#fff] flex">
                                <div className="md:pt-[2px] pt-[1px] pr-[2px]">
                                    <AiOutlineSearch />
                                </div>
                                <div className="w-[100%]">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        onInput={handleSearch}
                                        className="h-5 w-full md:w-full md:ml-[1rem] border-[#fff] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-4 lg:flex-row lg:px-9 items-center">
                <div className="md:w-3/5 w-full text-center">
                    <iframe
                        style={{ borderRadius: "20px" }}
                        className="md:w-full md:h-[505px] h-[480px] w-full ml-auto mr-auto"
                        src="https://www.google.com/maps/d/embed?mid=1HSzjnQ3tZhvZvuAUTqad_rkKPR2Hknc&ehbc=2E312F"
                    ></iframe>
                </div>

                <div className="md:w-2/5 h-[60%] mb-5">
                    <div className="md:ml-[5px] xl:ml-[90px] md:mr-auto">
                        <AddressCard data={filter} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locations;
