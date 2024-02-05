"use client";
import { Button } from "@/components/ui/button";
import { Sizes } from "@/data/filterCategory";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ProductCounter from "@/components/productDetails/productCounter";
import ProducDetailsAccordian from "@/components/productDetails/productDetailsAccordian";

type ProductDetailsImageProps = {
  colorLists: { src: string | StaticImageData; alt: string }[];
};

const sizeLists = [
  { label: "XS", value: Sizes.xs },
  { label: "S", value: Sizes.s },
  { label: "M", value: Sizes.m },
  { label: "L", value: Sizes.l },
  { label: "XL", value: Sizes.xl },
  { label: "2XL", value: Sizes.twoxl },
  { label: "3XL", value: Sizes.threexl },
];

function ProductDetailsInfo({ colorLists }: ProductDetailsImageProps) {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-2">Best free Sozisat Shirt</h1>
      <p className="mb-2">Men&apos;s best portable fits</p>
      <p className="font-medium text-primary">177,769 ks</p>
      <div className="my-8">
        <h2 className="text-xl font-medium">Color</h2>
        <div className="flex justify-start items-center gap-2 mt-4 flex-wrap">
          {colorLists.map((img, index) => (
            <div
              key={index}
              className={`relative rounded overflow-hidden cursor-pointer border border-transparent hover:border-black  group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-[60px] h-[60px] object-cover scale-105 group-hover:scale-100 duration-150"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-medium">Sizes</h2>
        <div className="flex justify-start items-center gap-2 mt-4 flex-wrap">
          {sizeLists.map((size, index) => (
            <Button
              key={index}
              variant={"outline"}
              className={`w-20 h-16 relative rounded overflow-hidden cursor-pointer border hover:border-black  group`}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="my-8">
        <ProductCounter onAddToCart={(count) => console.log("count", count)} />
      </div>
      <div className="my-8">
        <ProducDetailsAccordian />
      </div>
    </div>
  );
}

export default ProductDetailsInfo;
