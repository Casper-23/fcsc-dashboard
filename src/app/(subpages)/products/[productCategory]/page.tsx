import { type Metadata } from "next";
import React from "react";
import { FAQsData } from "@/Data/FAQData";
import FAQs from "@/components/Products/FAQs";
import ProductInfo from "@/components/Products/ProductInfo";
import ProductSidebar from "@/components/Products/ProductSidebar";
import ProductImageCard from "@/components/Products/ProductImageCard";
import ProductTopButtons from "@/components/Products/ProductTopButtons";
import { ProductsCategoryData } from "@/components/Products/ProductsData";

type Props = { params: { productCategory: string } };

export async function generateStaticParams() {
  return ProductsCategoryData.map((category: any) => ({
    params: { productCategory: category.url },
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = ProductsCategoryData.find(
    (product) => product.url.toLowerCase() === params.productCategory.toLowerCase()
  );
  if (!product)
    return {
      title: "Product not found | FCSC",
      description: "Product cannot be found. Please check the url and try again",
    };

  return {
    title: product.titleMeta,
    description: product.descriptionMeta,
  };
}

const Page = ({ params }: Props) => {


  return (
    <div className="p-2 py-10 md:px-10 space-y-4">
      <ProductTopButtons categories={ProductsCategoryData} product={params.productCategory} />
      <div className="flex justify-between ">
        <ProductInfo productsURL={params.productCategory} />
        <ProductSidebar categories={ProductsCategoryData} product={params.productCategory} />
      </div>
      <ProductImageCard productsURL={params.productCategory} />
      <FAQs faqs={FAQsData} />
    </div>
  );
};

export default Page;
