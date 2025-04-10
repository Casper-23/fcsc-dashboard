import React from "react";

const TestimonialVideo = () => {
  return (
    <div className="md:py-12 py-10 px-8 md:px-24 w-full mb-10 ">
      <div className="flex mb-10">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">
          Hear From Our Partners
        </h3>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="2xl:w-[50%] p-4 border border-gray-300 shadow-lg rounded-xl">
          <video
            className="w-full 2xl:h-[600px] md:h-[350px] h-auto rounded-xl"
            controls
            title="YouTube video player"
          >
            <source
              src="https://fcsc-bucket.blr1.cdn.digitaloceanspaces.com/fcsc_testimonial.mp4"
              type="video/mp4"
              className="rounded-xl"
            />
          </video>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default TestimonialVideo;
