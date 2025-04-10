import { RiInstagramFill } from "react-icons/ri";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const socialLinks = [
  { url: "https://www.facebook.com/firstchoicespecialitychemicals", icon: <FaFacebook /> },
  {
    url: "https://www.instagram.com/firstchoicechemical",
    icon: <RiInstagramFill />,
  },
  {
    url: "https://www.linkedin.com/company/firstchoice-speciality-chemicals-pvt-ltd/",
    icon: <FaLinkedin />,
  },
  {
    url: "https://youtube.com/@fcsc01",
    icon: <FaYoutube />,
  },
  {
    url:"/our-presence",
    icon:<FaLocationDot/>
  }
];

export default socialLinks;
