import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import instagram from "@/assets/instagram_logo.svg";
import facebook from "@/assets/facebook_logo.svg";
import linkedin from "@/assets/linkedin_logo.svg";
import youtube from "@/assets/youtube_logo.svg";

interface SocialIconsProps {
  ClassName?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ ClassName }) => {
  return (
    <div
      className={`flex justify-evenly ml-2 items-center bg-slate-50 rounded-full
     ${ClassName} `}
    >
      <Link
        href="https://www.instagram.com/firstchoicechemical"
        target="_blank" rel="noopener"
        className="hover:shadow-lg hover:scale-110 hover:shadow-slate-600"
      >
        <Image
          src={instagram}
          alt="instagram"
          className="w-6 h-6"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://www.facebook.com/firstchoicespecialitychemicals"
        target="_blank" rel="noopener"
        className="hover:shadow-lg hover:scale-110 hover:shadow-slate-600"
      >
        <Image
          src={facebook}
          alt="instagram"
          className="w-6 h-6"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/firstchoice-speciality-chemicals-pvt-ltd/"
        target="_blank" rel="noopener"
        className="hover:shadow-lg hover:scale-110 hover:shadow-slate-600"
      >
        <Image
          src={linkedin}
          alt="instagram"
          className="w-6 h-6"
          height={100}
          width={100}
        />
      </Link>
      <Link
        href="https://youtube.com/@fcsc01"
        target="_blank" rel="noopener"
        className="hover:shadow-lg hover:scale-110 hover:shadow-slate-600"
      >
        <Image
          src={youtube}
          alt="youtube"
          className="w-6 h-6"
          height={100}
          width={100}
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
