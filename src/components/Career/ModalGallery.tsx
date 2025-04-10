import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import PencilLoader from "../Loader/PencilLoader";

interface ModalProps {
  imageSrc: string | StaticImageData;
  altText: string;
  text: string;
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  imageSrc,
  altText,
  text,
  isOpen,
  toggleModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 -top-6 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center px-4">
          {isLoading && <PencilLoader />}
          {!isLoading && (
            <div
              className="relative rounded-lg vignette-overlay "
              onClick={toggleModal}
            >
              <Image
                src={imageSrc}
                alt={altText}
                className="rounded-lg z-50 md:h-[600px] md:w-[800px] object-cover"
                width={600}
                height={800}
              />
              <span className="absolute bottom-10 z-30 right-10 text-white border shadow-lg shadow-black text-3xl md:text-5xl px-2 rounded-sm">
                {text}
              </span>
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:bg-slate-700 rounded-full p-3"
                onClick={toggleModal}
              >
                <RxCrossCircled
                  className="text-white bg-slate-600 rounded-full"
                  size={50}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
