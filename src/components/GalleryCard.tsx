"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {

  src: string;
  href?: string;
  textContainerClass?: string;
  className?: string;
}

const GalleryCard = ({
  textContainerClass = "left-2 bottom-2",
  className = "",
  ...props
}: Props) => {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.06, zIndex: 10 }}
      // transition={{ delay: 0.2 }}
      className={`relative overflow-hidden  vignette-overlay rounded-lg ${className}`}
    >
      <Image src={`/gallery/${props.src}`} alt={props.src} className="object-cover" fill />
      {/* <div className={`absolute z-10 text-white ${textContainerClass}`}>
        <p className="text-sm font-semibold p-6">{props.title}</p>
      </div> */}
    </motion.div>
  );

  return <div>{cardContent}</div>;
};

export default GalleryCard;
