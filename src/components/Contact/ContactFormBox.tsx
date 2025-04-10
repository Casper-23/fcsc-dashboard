"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import LoaderHand from "../Loader/LoaderHand";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.ico";
import { toast, Bounce } from "react-toastify";
import { TbClockHour11 } from "react-icons/tb";
import { MdOutlineContacts } from "react-icons/md";
import sendMail from "@/utils/sendMail";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  query: z.string().min(1, "Query is required"),
  message: z.string().min(1, "Message is required"),
});

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-red-500 text-sm mt-1">{message}</div>
);

const ContactFormBox = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      query: "",
      message: "",
    },
    validate: (values) => {
      const result = schema.safeParse(values);
      if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        return Object.fromEntries(
          Object.entries(errors).map(([key, value]) => [key, value?.[0]])
        );
      }
      return {};
    },
    onSubmit: (values) => {
      console.log("Form submitted", values);
      setIsSubmitted(true);
      sendMail(values).then((message) => {
        toast.success("🦄 Wow so easy!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    },
  });

  return (
    <div className="flex-col space-y-6 w-full md:px-20">
      <div className="bg-custom-red shadow-md shadow-slate-700 border- rounded-lg py-2 md:flex items-center justify-between w-full px-5 md:px-10 md:py-5">
        <div className="">
          <div className="flex items-center gap-2 text-slate-50 text-lg font-medium ">
            Working Hours
            <TbClockHour11 size={20} />
          </div>
          <hr className="py-1 " />
          <p className="text-slate-50">Monday to Saturday</p>
          <p className="text-slate-50">Our Support Team is available 24/7</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 text-slate-50 text-lg font-medium ">
            Contact Us
            <MdOutlineContacts size={20} />
          </div>
          <hr className="py-1 " />
          <p className="text-slate-50">+91 33 3500 0230</p>
          <p className="text-slate-50">support@fcsc.co.in</p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 shadow-md px-8 py-8 rounded-lg">
          <div className="space-y-10 w-full md:w-1/2">
            <div className="w-full relative flex flex-col">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Full Name
              </span>
              <div
                className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg
             font-semibold left-24 top-2"
              />
              <input
                type="text"
                placeholder="Name here"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <ErrorMessage message={formik.errors.name} />
              )}
            </div>

            <div className="flex flex-col relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Email
              </span>
              <div
                className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg
             font-semibold left-24 top-2"
              />
              <input
                type="email"
                placeholder="example@fcsc.com"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage message={formik.errors.email} />
              )}
            </div>

            <div className="flex flex-col relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Query Related
              </span>
              <div
                className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg
             font-semibold left-32 top-2"
              />
              <textarea
                id="message"
                placeholder="Your Query here"
                className="border p-2 font-medium rounded-lg w-full pl-36"
                {...formik.getFieldProps("query")}
              />
              {formik.touched.message && formik.errors.query && (
                <ErrorMessage message={formik.errors.query} />
              )}
            </div>

            <div className="flex flex-col relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Message
              </span>
              <div
                className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg
             font-semibold left-24 top-2"
              />
              <textarea
                id="message"
                placeholder="Your message here"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message && (
                <ErrorMessage message={formik.errors.message} />
              )}
            </div>
          </div>

          <div className="flex-col justify-center">
            <div className="w-full flex justify-center">
              <Image
                src={logo}
                alt="Product 1"
                width={150}
                height={150}
                className="object-fill rounded-lg"
              />
            </div>
            <div className="py-6">
              <p className="text-lg text-slate-600 font-medium text-center">
                Firstchoice Speciality Chemicals Pvt.Ltd
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-16 hover:text-black hover:scale-110 hover:border hover:border-slate-950
                transition-all ease-in-out font-medium duration-500 text-white p-2 rounded-lg
                ${
                  isSubmitted
                    ? "bg-green-500"
                    : "bg-custom-red hover:bg-slate-400"
                }`}
              >
                {isSubmitted ? "Submitted" : "Submit"}
              </button>
            </div>
          </div>
          {isSubmitted && (
            <div className="flex justify-center">
              <LoaderHand />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactFormBox;
