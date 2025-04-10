"use client";

import { useState } from "react";
import { Modal } from "react-responsive-modal";
import Link from "next/link";
import { IoIosWarning } from "react-icons/io";
import "react-responsive-modal/styles.css";

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const CustomLink = ({ className = "", children, href }: Props) => {
  const [modalVisible, setVisible] = useState(false);

  const sameUrl = href.includes("https://");

  const handleRedirect = () => {
    setVisible(false);
    window.open(href, "_blank");
  };

  return (
    <>
      <Modal
        open={modalVisible}
        onClose={() => setVisible(false)}
        closeOnEsc
        center
      >
        <div className="flex flex-col items-center justify-center gap-4 p-6">
          <IoIosWarning className="text-red" size={60} />
          <h2 className="text-center text-2xl">Exiting our website</h2>
          <p className="text-gray-500">
            You are leaving our site and we cannot be help responsibe for the
            content of external websites.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleRedirect}
              className="p-2 px-4 transition border border-custom-red flex items-center justify-center gap-2 bg-custom-red text-white hover:bg-white hover:text-custom-red"
            >
              Continue
            </button>
            <button
              onClick={() => setVisible(false)}
              className="p-2 px-4 transition border border-custom-red flex items-center justify-center gap-2 bg-white text-custom-red hover:custom-red hover:text-white"
            >
              Stay
            </button>
          </div>
        </div>
      </Modal>
      {sameUrl ? (
        <div
          className={`cursor-pointer ${className}`}
          onClick={() => setVisible(true)}
        >
          {children}
        </div>
      ) : (
        <Link href={href} target="_blank" rel="noopener" className={className}
        onClick={()=>setVisible(false)}>
          {children}
        </Link>
      )}
    </>
  );
};

export default CustomLink;
