
import React from "react";
import Image, { StaticImageData } from "next/image";

interface GalleryData {
  src: StaticImageData;
  text: string;
  description: string;
}
interface GalleryComponentProps {
  title: string;
  CareerGalleryData: GalleryData[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({
  title,
  CareerGalleryData,
}) => {



  return (
    <div className="space-y-6 bg-white p-2 lg:p-8 w-full">
      <h2 className="text-4xl font-medium mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-10">
        {CareerGalleryData.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg vignette-overlay bg-black"
          >
            <Image
              src={item.src}
              alt={item.text}
              className="rounded-lg h-[300px] w-[900px] object-cover opacity-60"
              width={800}
              height={600}
            />
      
            <span
              className="absolute top-10 z-10 left-10 text-white
            text-3xl md:text-5xl px-2"
            >
              {item.text}
            </span>

            <span
              className="absolute bottom-10 z-10 left-10 text-white
            text-base px-2 "
            >
              {item.description}
            </span>

          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:px-10">
        {CareerGalleryData.slice(2, 5).map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg vignette-overlay  bg-black"
          >
            <Image
              src={item.src}
              alt={item.text}
              className="rounded-lg h-[300px] w-[700px] object-cover opacity-60"
              width={400}
              height={800}
            />
                <span
              className="absolute top-10 z-10 left-4 text-white
            text-2xl lg:text-3xl px-2 "
            >
              {item.text}
            </span>

            <span
              className="absolute bottom-6 z-10 left-10 text-white
            text-base px-2 "
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    
  
    </div>
  );
};

export default GalleryComponent;
