
"use client";

import React, { useState } from "react";
import HeroSection from "@/components/Home/HeroSection";
import OurProducts from "@/components/Home/OurProducts";
import ProductsCardButton from "@/components/Home/ProductsCardButton";
import ProductCategory from "@/components/Home/ProductCategory";
import TestimonialVideo from "@/components/Home/TestimonialVideo";
export default function Home() {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <main className="">
      <HeroSection
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <ProductsCardButton index={selectedButton} />
      {selectedButton != 0 && <ProductCategory index={selectedButton} />}
      <TestimonialVideo />
      <OurProducts />
    </main>
  );
}
