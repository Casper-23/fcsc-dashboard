"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import LoaderHand from "../Loader/LoaderHand";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.ico";
import sendCV from "@/utils/uploadCV";
import { toast, Bounce } from "react-toastify";
import { CVRequest } from "@/interface/query.interface";

const handleSubmit = (requestData: CVRequest) => {
  const reader = new FileReader();
  reader.onloadend = async () => {
    const base64String = reader.result?.toString();
    if (base64String) {
      const cvResponse = await sendCV(
        `New CV Uploaded by ${requestData.name}`,
        `Name: ${requestData.name}\nContact: ${requestData.contact}\nPincode: ${requestData.pincode}\nEmail: ${requestData.email}`,
        base64String
      );

      console.log(cvResponse);
      
      toast.success("CV Uploaded", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  reader.readAsDataURL(requestData.file);
};

const CareerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const validationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    contact: z.string().min(10, "Contact number is required"),
    pincode: z.string().min(6, "Pincode is required"),
    email: z.string().email("Invalid email address"),
    file: z.custom<File>((file) => file instanceof File, {
      message: "Please upload your resume",
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      pincode: "",
      email: "",
      file: null,
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      // console.log(values.email);
      handleSubmit(values);
       setIsSubmitted(true);
    },
  });

  return (
    <div className="p-10 lg:p-28">
      <div className="flex flex-col bg-slate-100 rounded-lg h-full p-2 pt-8 pb-20 md:p-16">
        <form
          onSubmit={formik.handleSubmit}
          className="lg:flex gap-4 h-full w-full"
        >
          <div className="space-y-10 w-full lg:w-1/2">
            <div className="flex w-full relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Name
              </span>
              <div className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg font-semibold left-24 top-2" />
              <input
                type="text"
                name="name"
                placeholder="Name here"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="flex relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Contact
              </span>
              <div className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg font-semibold left-24 top-2" />
              <input
                type="text"
                name="contact"
                placeholder="XXX-XXXX-XXX"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact}
              />
              {formik.touched.contact && formik.errors.contact ? (
                <div className="text-red-500">{formik.errors.contact}</div>
              ) : null}
            </div>

            <div className="flex relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Pincode
              </span>
              <div className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg font-semibold left-24 top-2" />
              <input
                type="text"
                name="pincode"
                placeholder="XXXX-XXXX"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode}
                maxLength={6}
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <div className="text-red-500">{formik.errors.pincode}</div>
              ) : null}
            </div>

            <div className="flex relative">
              <span className="absolute text-custom-red font-semibold left-5 top-2">
                Email
              </span>
              <div className="absolute text-slate-300 h-6 flex w-0.5 bg-slate-300 rounded-lg font-semibold left-24 top-2" />
              <input
                type="email"
                name="email"
                placeholder="example@fcsc.com"
                className="border p-2 font-medium rounded-lg w-full pl-28"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex relative border rounded-lg bg-white flex-col md:flex-row">
              <span className="absolute text-xs md:text-base text-custom-red font-semibold left-2 md:left-5 top-4 md:top-3">
                Upload Resume
              </span>
              <div className="absolute hidden md:block text-slate-300 h-6 w-0.5 bg-slate-300 rounded-lg font-semibold left-40 top-3" />
              <input
                type="file"
                name="file"
                className="p-2 font-medium rounded-lg w-full pl-28 md:pl-44"
                onChange={(event) => {
                  if (event.currentTarget.files)
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              {formik.touched.file && formik.errors.file ? (
                <div className="text-red-500">{formik.errors.file}</div>
              ) : null}
            </div>
          </div>

          <div className="space-y-10 h-full w-full lg:w-1/2">
            <div className="flex-col justify-center">
              <div className="w-full mt-10 flex justify-center">
                <Image
                  src={logo}
                  alt="Product 1"
                  width={150}
                  height={150}
                  className="object-fill rounded-lg"
                />
              </div>
              <div className="py-6">
                <p className="text-xs lg:text-lg text-slate-600 font-medium text-center">
                  Firstchoice Speciality Chemicals Pvt.Ltd.
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`px-16 hover:text-black hover:scale-110 hover:border hover:border-slate-950
                    transition-all ease-in-out font-medium duration-500 text-white p-2 rounded-lg ${
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
    </div>
  );
};

export default CareerForm;
