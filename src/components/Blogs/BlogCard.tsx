import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  desc: string;
  link: string;
  alt: string;
  date: string;
  author: string;
};

const BlogCard = (props: Props) => {
  return (
    <div className="relative w-fit bg-black rounded-[20px] group">
      <Link href={props.link}>
        <div className="group-hover:opacity-60 opacity-90 overflow-hidden rounded-[20px] shadow-md">
          <Image
            src={props.image}
            alt="blog card"
            width={620}
            height={880}
            className="h-[350px] w-[600px] object-cover  "
          />
        </div>
        <div className="absolute top-5 left-0 ">
          <p className="text-white font-bold text-xl lg:text-xl px-4 bg-black bg-opacity-20">
            {props.title}
          </p>
          <p className="text-white  mt-4 text-lg md:text-base font-extralight px-4 bg-black bg-opacity-20">
            {props.desc}
          </p>
        </div>
        <p
          className="flex right-6 bottom-4 absolute font-semibold bg-white text-custom-red text-xs border rounded-lg p-3
          group-hover:bg-custom-red group-hover:text-white transition-all duration-500"
        >
          Read More
        </p>
      </Link>
    </div>
  );
};

export default BlogCard;
