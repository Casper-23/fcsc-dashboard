import React from "react";
import BlogCard from "@/components/Blogs/BlogCard";
import { getBlogs } from "@/network/cmsHandlers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firstchoice Speciality Chemicals - Blogs",
  description:
    "The Firstchoice Speciality Chemicals Blogs are the source for the latest construction chemicals industry news, product updates, and trends. Get expert insights!",
};
const Page = async () => {
  const blogs = await getBlogs();

  return (
    <div className="p-5 md:p-24 space-y-6">
      <div className="flex lg:px-10">
        <span className="h-10 w-2 rounded-lg bg-custom-red" />
        <h3 className="text-3xl text-slate-700 font-medium ml-4">BLOGS</h3>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-16 lg:pr-8
      py-4 "
      >
        {blogs?.map((blog: any, index: number) => (
          <BlogCard
            key={`blog-home-${index}`}
            link={"/blogs/" + blog.attributes.slug}
            title={blog.attributes.title}
            desc={blog.attributes.description}
            image={
              process.env.NEXT_PUBLIC_CMS_API_URL +
              blog.attributes.display_image.data.attributes.url
            }
            alt={blog.attributes.display_image.data.attributes.alternativeText}
            date={
              blog.attributes.override_published ?? blog.attributes.publishedAt
            }
            author={blog.attributes.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
