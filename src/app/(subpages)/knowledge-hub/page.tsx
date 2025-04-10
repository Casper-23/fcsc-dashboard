import React from "react";

const Page = () => {
  return (
    <div className="p-8 md:p-20">
      <div className="flex">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">
          Knowledge Hub
        </h3>
      </div>

      <div className="py-10 pr-16 md:pr-56">
        <p className="text-slate-700 text-xl mb-4">
          {`  Welcome to Firstchoice Speciality Chemicals Pvt.Ltd, where expertise meet opportunity. Our Expert Hub is a dynamic platform
          designed to encourage growth and collaboration within the construction
          chemicals industry. Here, professionals can access the best blogs,
          articles, case studies, and other resources on this construction
          chemical industry. Whether you're an experienced professional or a
          beginner, our Expert Hub provides invaluable insights and knowledge.
          These will help you enhance your skills and stay updated on the latest
          trends and developments.`}
        </p>

        <p className="text-slate-700 text-xl mb-4">
          Join our community today and take your career in construction
          chemicals to new heights.
        </p>
      </div>
    </div>
  );
};

export default Page;
