import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface SimpleSliderProps {
  children: React.ReactNode;
  numTabs: number;
}

export default function SimpleSlider({
  children,numTabs
}: SimpleSliderProps) {
  const settings = {
    dots: false,
    className: "",
    arrows: false,
    infinite: true,
    loop: true,
    slidesToShow: numTabs,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return <Slider {...settings}>{children}</Slider>;
}
