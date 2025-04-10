"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import socialLinks from "@/Data/social";

const Socials = () => {
  const socialIconClass =
    "text-custom-red w-8 h-8 xs:w-8 xs:h-8 text-2xl flex items-center xs:py-6 xs:px-3 md:py-2 md:px-1 justify-center text-xl transition duration-300 hover:scale-105 ";

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="fixed bg-white  top-[28rem]  right-2  md:top-[27rem] xl:top-[32rem] flex flex-col z-50"
    >
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank" rel="noopener"
          className={`${socialIconClass}`}
        >
          {link.icon}
        </Link>
      ))}
    </motion.div>
  );
};

export default Socials;
