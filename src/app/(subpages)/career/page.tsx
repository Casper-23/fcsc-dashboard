import React from "react";
import Image from "next/image";
import career from "@/assets/career/WHY YOU SHOULD JOIN OUR TEAM.jpg";
import { CareerCardData, CareerGalleryData } from "./careerData";
import CareerForm from "@/components/Career/careerForm";
import GalleryComponent from "@/components/Career/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career- Be Part of Firstchoice Speciality Chemicals Pvt.Ltd",
  description:
    "Discover career opportunities at FCSC. Join our experts in specialty chemicals and construction solutions for a future of innovation and growth.",
};

const Page = () => {
  return (
    <div className="p-5 md:p-10 h-full md:px-20 space-y-10 md:space-y-20">
      <div className="flex mt-5 items-center">
        <span className="h-10 w-1 md:w-2 rounded-lg bg-custom-red" />
        <h3 className="text-lg md:text-3xl text-slate-700 font-medium ml-4">
          CAREER
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 rounded-lg items-center justify-between lg:px-20">
        <Image
          src={career}
          alt="Firstchoice speciality chemicals"
          className="rounded-lg md:h-[300px] w-[300px] lg:w-[500px] shadow-md shadow-slate-500
          object-cover"
          width={800}
          height={400}
        />

        <div className="lg:ml-10">
          <h2 className="text-xl lg:text-2xl mb-4 font-bold text-custom-red">
            Why you should join our team
          </h2>
          <p className="text-xs lg:text-base pr-5 lg:pr-20 text-slate-500">
            At FCSC we provide career stability, growth opportunities, and a
            supportive environment for your future. Our focus on continuous
            learning enables you to reach your full potential, while our
            commitment to training and development helps you upgrade your
            skills. In addition, we strongly emphasize teamwork that creates a
            welcoming and inclusive work atmosphere.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-8 md:px-20">
        {CareerCardData.map((product, index) => (
          <div
            key={index}
            className=" shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
          >
            <div className="mb-3">
              <product.icon
                className="text-xl md:text-2xl lg:text-3xl"
                color="#B62230"
              />
            </div>
            <p className="text-slate-900 text-lg font-semibold mb-3">
              {product.title}
            </p>
            <p className="text-slate-900 text-xs lg:text-lg flex-grow">
              {product.text}
            </p>
          </div>
        ))}
      </div>
      <GalleryComponent
        title="Our Culture"
        CareerGalleryData={CareerGalleryData}
      />
      <CareerForm />
    </div>
  );
};

export default Page;
