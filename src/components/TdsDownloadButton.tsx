"use client";

import React from "react";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

interface Props {
  url: string;
}

const TdsDownloadButton = ({ url }: Props) => {
  return (
    <div className="flex items-center justify-center w-full rounded-xl">
      <Link
        href={`https://fcsc-bucket.blr1.digitaloceanspaces.com/${url}`}
        target="_blank" rel="noopener"
      >
        <motion.button
          className="bg-white text-custom-red p-4 px-6 font-semibold
                 flex items-center gap-2 justify-center rounded shadow-md shadow-slate-700 hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdDownload size={25} />
          Download TDS
        </motion.button>
      </Link>
    </div>
  );
};

export default TdsDownloadButton;
