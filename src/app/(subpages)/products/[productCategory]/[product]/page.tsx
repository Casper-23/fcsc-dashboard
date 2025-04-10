
import React from "react";
import Image from "next/image";
import { individualProductData } from "@/Data/IndividualProductData";
import tds from "@/Data/tds";
import TdsDownloadButton from "@/components/TdsDownloadButton";
import { Metadata } from "next";
type Props = { params: { product: string } };

export async function generateStaticParams() {
  return individualProductData.map((product: any) => ({
    params: { product: product.productUrl },
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productData = individualProductData.find(
    (product) => product.productUrl.toLowerCase() === params.product.toLowerCase()
  );
  if (!productData) return { title: "Product not found | FCSC" };

  return {
    title: productData.metaTitle,
    description: productData.metaDesc,
  };
}

const Page = ({ params }: Props) => {


  const productData = individualProductData.find(
    (product) => product.productUrl.toLowerCase() === params.product.toLowerCase()
  );

  if (!productData) {
    return <div className="min-h-screen">Product not found</div>;
  }

  const tdsUrl = getTdsUrl(params.product);

  const productImage =
    productData?.imageUrl === ""
      ? ""
      : "/FCSC PRODUCT WEBP/" + productData?.imageUrl;

  return (
    <div className="min-h-screen p-5 md:px-12 md:py-10 bg-slate-200 space-y-10">
      <div className="flex w-full justify-start ">
        <span
          className="text-lg md:text-4xl bg-white px-4 py-2 rounded-xl
        shadow-md shadow-slate-800 font-semibold text-custom-red"
        >
          {productData?.productName}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-full">
        {productImage && (
          <div className="flex justify-center w-full h-full ">
            <Image
              src={productImage}
              width={400}
              height={400}
              alt={`${productData?.productName} image`}
              className="w-[380px] max-h-[300px] object-contain rounded-lg"
            />
          </div>
        )}
        <div className="relative w-full mx-auto  p-2 md:p-5 rounded-xl bg-white shadow-md">
          <div className="absolute top-0 right-0 bg-custom-red px-7 py-9 rounded-tr-xl rounded-bl-xl rounded" />
          <span className="text-2xl font-semibold mb-4 text-custom-red">
            Description
          </span>
          <p className="py-10 text-slate-600">{productData?.description}</p>
        </div>
        <div className="relative w-full mx-auto md:w-2/3 p-5  rounded-xl border bg-white shadow-md">
          <div className="absolute top-0 right-0 bg-custom-red px-7 py-9 rounded-tr-xl rounded-bl-xl rounded"></div>
          <span className="text-2xl font-semibold mb-4 text-custom-red">
            Uses
          </span>
          <div className="list-disc mt-10">
            {Array.isArray(productData?.uses) &&
              productData?.uses.map((use: any, index: number) => (
                <li key={index} className="text-slate-600 text-base">
                  {use}
                </li>
              ))}
          </div>
        </div>
      </div>

      {tdsUrl !== "" && <TdsDownloadButton url={tdsUrl} />}

      <div className="flex w-full justify-center rounded-lg">
        <div className="relative w-full p-4 md:p-10 rounded-xl border bg-white shadow-md">
          <div className="absolute top-0 right-0 bg-custom-red px-7 py-10 rounded-tr-xl rounded-bl-xl rounded" />
          <span className="text-2xl font-semibold mb-4 text-custom-red">
            Advantages
          </span>
          <ul className="list-disc p-4 md:p-10 space-y-4">
            {productData?.advantages.map((advantage: any, index: number) => (
              <li key={index} className="text-slate-600 text-lg">
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;

const getTdsUrl = (product: string) => {
  const getRaw = (str: string) =>
    str
      .toLocaleLowerCase()
      .replaceAll(" ", "")
      .replaceAll("_", "")
      .replaceAll("-", "")
      .replaceAll("'", "")
      .replaceAll("/", "");
  const filteredProduct = tds.ListBucketResult.Contents.find((item) =>
    getRaw(item.Key).includes(getRaw(product))
  );
  if (filteredProduct) {
    return filteredProduct.Key;
  }
  return "";
};
