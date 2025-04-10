import React from "react";
import Image from "next/image";
import safety from "@/assets/safety.jpg";
import womenEmpowerment from "@/assets/sustainability/WOMAN AS FUTURE LEADER.jpg";
import genderDiversity from "@/assets/sustainability/GENDER DIVERSITY.jpg";
import fairCompensation from "@/assets/sustainability/FAIR COMPENSATION.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Solutions for Concrete - FCSC India",
  description:
    "Discover eco-friendly and sustainable solutions for concrete by FCSC. We prioritize green construction with innovative, durable concrete products.",
};
const cardData = [
  {
    title: "Women as future leaders",
    description:
      "Employee diversity and responsible leadership have driven our success. However, to create a balance, we focus on retaining team diversity through women employee hires and regular development training. A survey is done at intervals with women employees which focuses on essential infrastructure, safety, POSH and feedback on programmes run for women employees. Enhanced maternity support is also provided.",
    image: womenEmpowerment,
  },
  {
    title: "Gender Diversity",
    description:
      "At FCSC we believe gender diversity adds value to the company. We encourage women to take up charge and responsibilities in our manufacturing facilities. Women's representation has substantially increased because of our constant efforts to promote diversity. In addition, we have a policy of zero tolerance towards any form of sexual harassment and conform to the POSH at the workplace.",
    image: genderDiversity,
  },
  {
    title: "Fair Compensation",
    description:
      "We are an equal opportunity employer and ensure we provide fair remuneration to our employees for their contribution to the organisation.",
    image: fairCompensation,
  },
];

const Page = () => {
  return (
    <div className="p-5 lg:p-10 space-y-10 md:space-y-10">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">
          SUSTAINABILITY
        </h3>
      </div>
      <div className="flex w-full justify-center md:px-5">
        <div className="relative w-fit">
          <div className="overflow-hidden rounded-[20px] bg-black">
            <Image
              src={safety}
              alt="blog card"
              width={4000}
              height={2000}
              className="h-[40vh] md:h-[44vh] w-[800px] object-cover"
            />
          </div>
          <div
            className="absolute z-10 bg-white  bg-opacity-60
           backdrop-blur-md bottom-0 left-0 px-16 md:py-4 rounded-bl-[20px]"
          >
            <span className="text-custom-red font-bold text-2xl lg:text-3xl mt-2 mb-2">
              Safety
            </span>
          </div>
        </div>
      </div>
        <p className="px-2 md:px-10">
          We at FCSC, ensure that a safety culture is prevalent in the
          organization. It is the main pillar of our business to provide the
          safest construction chemicals solutions. The effectiveness of these
          measures is regularly evaluated through observations and audits which
          serve as the basis for further improvements. All our RMC sites are
          covered under our safety standards, and we regularly train people in
          established safety protocols. Along with it we also give proper
          attention to our employees’ safety and health. Annual health check-up
          camps are conducted and first aid training is provided to ensure
          safety and a healthy working environment. We Train the Trainer (TtT)
          here and also train our drivers of transit mixers in defensive
          driving. Our senior leadership members regularly conduct surprise
          audits at the RMC plants.
        </p>

      <div className="md:p-10 py-8 space-y-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 rounded-lg items-center  md:justify-start"
          >
            <div className="w-2/3 md:w-1/3">
              <Image
                src={card.image}
                alt="Firstchoice speciality chemicals"
                className="rounded-xl w-[400px] md:w-[600px] "
                width={800}
                height={800}
              />
            </div>
            <div className="w-full md:w-2/3 ">
              <h2 className="text-base text-center md:text-start md:text-3xl md:mb-4 font-bold text-custom-red">
                {card.title}
              </h2>
              <p className="text-xs md:text-base lg:text-lg text-slate-500 md:w-2/3">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
