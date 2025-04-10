import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

type FullScreenCoverProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  heading?: string;
  content?: string;
  children?: React.ReactNode;
};

const FullScreenCover: React.FC<FullScreenCoverProps> = ({
  src,
  alt,
  className = "",
  children,
}) => {
  return (
    <div className={`relative inset-0 w-full overflow-hidden ${className}`}>
      <div className="absolute bottom-0 inset-0 z-30 bg-black bg-opacity-30"></div>
      {children && (
        <div className="p-4 absolute bottom-2 md:bottom-10 z-30 h-fit">
          {children}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="fill"
        quality={100}
      />
    </div>
  );
};

export default FullScreenCover;
