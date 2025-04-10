import { GiNetworkBars } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import imagePassion from "@/assets/career/PASSION.jpg";
import imageResults from "@/assets/career/RESULT.jpg";
import imageDedication from "@/assets/career/DEDICATION.jpg";
import imageEntrepreneurship from "@/assets/career/ENTERPRENERSHIP.jpg";
import imageIntegration from "@/assets/career/integration.png";




export const CareerCardData = [
    {
      icon: GiNetworkBars,
      title: "Learning and Personal Growth",
      text: "At our office, we especially work on training and developing opportunities that support both the professional and personal growth of our employees. Thus, we're committed to helping you advance your skill set.",
    },
  
    {
      icon: IoPeopleSharp,
      title: "Inclusivity and Progress",
      text: "At FCSC we believe cooperation and group effort are what propel us forward and create a welcoming and inclusive work atmosphere.",
    },
  ];



  export const CareerGalleryData = [
    {
      src: imagePassion,
      text: "Passion",
      description:"Fueled by a relentless passion for innovation"
    },
    {
      src: imageResults,
      text: "Results",
      description:"Committed to delivering unparalleled results"
    },
    {
      src: imageIntegration,
      text: "Integration",
      description:" Seamless integration of cutting-edge technologies and collaborative partnerships"
    },
    {
      src: imageDedication,
      text: "Dedication",
      description:"Our unwavering dedication to quality, sustainability, and customer-centric solutions"
    },
        {
      src: imageEntrepreneurship,
      text: "Entrepreneurship",
      description:"Embracing an entrepreneurial spirit, FCSC  navigates challenges with agility"
    },
  ]

