import { type Metadata } from "next";
import React from "react";
import ProductSidebar from "@/components/Products/ProductSidebar";
import { ProductsCategoryData } from "@/components/Products/ProductsData";
import { FAQsData } from "@/Data/FAQData";
import ProductInfo from "@/components/Products/ProductInfo";
import ProductImageCard from "@/components/Products/ProductImageCard";
import FAQs from "@/components/Products/FAQs";
import ProductTopButtons from "@/components/Products/ProductTopButtons";



// export const metadata: Metadata = {
//   title: "FCSC Products - Advanced Chemicals for Construction",
//   description:
//     "FCSC provides a wide range of high-performance construction chemicals, offering innovative for concrete and building projects.",
// };
type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = ProductsCategoryData.find(
    (product) => product.url.toLowerCase() === "admixturesystems"
  );
  if (!product)
    return {
      title: "Product not found | FCSC",
      description: "Product cannot be found. Please check the url and try again",
    };

  return {
    // title: product.titleMeta,
    // description: product.descriptionMeta,
    title:"FCSC Products - Advanced Chemicals for Construction",
    description:"FCSC provides a wide range of high-performance construction chemicals, offering innovative for concrete and building projects."
  };
}

const Page = () => {

  return (
    <div className="p-2 py-10 md:px-10 space-y-4">
      <ProductTopButtons
        categories={ProductsCategoryData}
        product={'AdmixtureSystems'}
      />
      <div className="flex justify-between ">
        <ProductInfo productsURL={'AdmixtureSystems'} />
        <ProductSidebar
          categories={ProductsCategoryData}
          product={'AdmixtureSystems'}
        />
      </div>
      <ProductImageCard productsURL={'AdmixtureSystems'} />
      <FAQs faqs={FAQsData} />
    </div>
  );
};

export default Page;
